import { assert } from "chai";
import WheaterbitAPI from "../page/wheater.api";
import * as data from "../data/wheater.data";

describe('JOJONOMIC API Automation Test Wheater', () => {
    it('Should be able to get current wheater data based on Lat and Lon', async() => {
        const response = await WheaterbitAPI.get_current_wheater(data.VALID_PARAMS);
        let jsonData = response.data
        console.log(response.data);
        console.log(response.status);
        assert.equal(response.status, 200);
        assert.equal(jsonData.data[0].state_code, 'NY');
    });
});

describe('JOJONOMIC API Automation Test Forecast', () => {
    it('Should be able to get current forecast based on postal code and hours', async() => {
        const respone = await WheaterbitAPI.get_forecast_wheater(data.VALID_PARAMS_FORECAST);
        let jsonData = respone.data
        console.log(jsonData.data[0].weather);
        assert.equal(respone.status, 200);
        console.log(jsonData.data[0].timestamp_utc);
    //     assert.equal(jsonData.data[0].weather.code, '804');
    //     assert.equal(jsonData.data[0].weather.description, 'Overcast clouds');
    //     assert.equal(jsonData.data[0].weather.icon, 'c04d');
    })
})