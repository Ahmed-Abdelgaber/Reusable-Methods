/*
    Require redis package to use redis server in caching data,
    mongoose to communicate with mongoDB, 
    and util to make use of promisify methode
*/
const redis = require('redis');
const mongoose = require('mongoose');
const util = require('util');

/*Store redis URL */
const redisURL = process.env.REDIS_URL;

/*
    Create redis client,
    promisify hget methode instead of using callbacks,
    and storing the original exec function to use it in case of we don't wanna cach data
*/
const client = redis.createClient(redisURL);
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

/*
    creating cach function which allows caching and let us provide the upper hash key then it returns the query
    itself to make the function chainable 
*/
mongoose.Query.prototype.cach = function (options) {
    this.cachThis = true;
    this.upperKey = JSON.stringify(options.key || '');

    return this;
};

/*
    updating original exec function logic to serve cach
    1- Check cachThis to chach the query and the data if we want to
    2- Check if the data we require is already exist or we're gonna touch mongoDB 
        true - serve from redis
        false - serve from mongoDB and cach it 
 */
mongoose.Query.prototype.exec = async function () {
    if (!cachThis) {
        return exec.apply(this, arguments);
    }

    const innerKey = JSON.stringify(
        Object.assign({}, mongoose.getQuery(), {
            collection: this.mongooseCollection.name,
        })
    );

    const cahedValue = await client.hget(this.upperKey, innerKey);

    if (cahedValue) {
        const docs = JSON.parse(cahedValue);

        return Array.isArray(docs)
            ? docs.map((doc) => {
                  new this.model(doc);
              })
            : this.model(docs);
    }

    const data = await exec.apply(this, arguments);

    client.hset(this.upperKey, innerKey, JSON.stringify(data));

    return data;
};

/**
 Make a middelware to use when deleting cached data 
 1- Use async await to use a little trick to run the next function firtst
 2- then delete the cached data using the upperKey
 */
exports.deleteCahce = (upperKey) => {
    return async (req, res, next) => {
        await next();
        client.del(JSON.stringify(upperKey));
    };
};
