# Reusable Methods

    # Cach File
    It automates redis caching by overwriting the `mongoose.Query.prototype.exec` function.
    It also has an option to either cach the data or not by chaining cach function to the query.
    Cach function has an optional object argument to provide customized upper key.
    You can also use deleteCahce middel ware befor to clear cached data manualy by providing the upper key


    - require cach file
    ![alt require cach file](./cach-photo/carbon.png)

    - chain cach function to the query
     (you dont have to provide an upper key and all data will be stored in the same cluster)
    ![alt chain cach](./cach-photo/carbon (1).png)

    - delete cach
    ![alt delete cach](https://www.google.com/search?q=photo&rlz=1C1YEIU_arEG991EG991&sxsrf=APq-WBueXMMe_-foU6vdiBKCWihobHi1lA:1646000464054&tbm=isch&source=iu&ictx=1&vet=1&fir=5CH27koKKHxxuM%252CAgAT_yR1X6xrJM%252C_%253B1fVbsXyMCoP5SM%252CAgAT_yR1X6xrJM%252C_%253BbrlDatOPf1OADM%252CJ_SUX6tT43D6iM%252C_%253B2PI0ovH5beRxTM%252CaJQZnjTv13CTlM%252C_%253B_zI7KUnXdDb4-M%252CjwkGCb5W0k7kGM%252C_%253BRTFFJeQUMSbUJM%252CAgAT_yR1X6xrJM%252C_%253BVTxC6ACo2sLMvM%252CXZbSmA-_H8aedM%252C_%253BJgdD-GzxzLTEuM%252CgtCYFeN4hWN93M%252C_%253ByLFkhFfvGDLi6M%252CdP5KNCuNt0yjCM%252C_%253BX5yhXCHDLAHyAM%252CAgAT_yR1X6xrJM%252C_%253Bcu8y6WHRxl_miM%252Cnv8aWyJvoKIHaM%252C_%253BqEuWOZJm8PVd4M%252CZqaL_--ZQThC-M%252C_%253BfV_ueQjVP6-lXM%252C_WgSvEKNa_jHoM%252C_%253BAaNqm97ndkXCmM%252C-NYhm2ZiwNl-9M%252C_%253BHhK1PfMw72q2dM%252CCO98u_dEx3FFYM%252C_&usg=AI4_-kT8vLUHkuY3zPOSwCwM-HIz1e3kZg&sa=X&ved=2ahUKEwjZ4tbH9aD2AhWQYcAKHXjjDn0Q9QF6BAgVEAE#imgrc=brlDatOPf1OADM)

[LinkedIn](https://www.linkedin.com/in/ahmed-abdelgaber/)
