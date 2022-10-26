import { assert } from "chai";
import weatherbit from "../page/wheater.api";
import * as data from "../data/wheater.data";

describe('JOJONOMIC API Automation Test Weather', () => {
    it('User will be able to get current weather data based on Lat and Lon', async() => {
        const response = await weatherbit.get_current(data.weather_params);
        let jsonData = response.data
        console.log(response.data);
        console.log(response.status);
        assert.equal(response.status, 200);
        assert.equal(jsonData.data[0].state_code, 'NY');
    });
});

describe('JOJONOMIC API Automation Test Forecast', () => {
    it('User wil be able to get current forecast based on postal code and hours', async() => {
        const respone = await weatherbit.get_forecast(data.forecast_params);
        let jsonData = respone.data
        console.log(jsonData.data[0].weather);
        assert.equal(respone.status, 200);
        console.log(jsonData.data[0].timestamp_utc);
    })
})