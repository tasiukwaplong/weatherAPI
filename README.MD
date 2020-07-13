# WHEATHER API
This app displays weather condition of a location. 

## How to install the app locally
1. run `git clone https://github.com/tasiukwaplong/weatherAPI.git`
2. run `cd weatherAPI` and then install all packages as contained in package.json by running `npm install`
3. Rename `.sample.env` to `.env`
4. Enter your database variables such as the `DATABASE_URL_DEV` and also `API_KEY` as obtained from [weatherstack](https://weatherstack.com/). If you dont know how to configure these environmental variables, kindly checkout [sequelize.org](https://sequelize.org/master/) on how to do that.
5. run `npx sequelize db:migrate` to run all migrations.
6. On successful coiguration, start the app by running `npm start`
Check [DOCUMENTATIONS.MD](DOCUMENTATIONS.MD) on how to test the appplication  
Also  run `npm run test` to run eslint test