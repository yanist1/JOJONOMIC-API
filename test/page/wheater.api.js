import BaseAPI from "./base.api";
import dotenv from 'dotenv';

dotenv.config()

const lat = 40.730610;
const lon = -73.935242;
const key = process.env.key;
const postal_code = 28546;
const hours = 3;

const WheaterbitAPI = {
    get_current_wheater: (data) => BaseAPI.get(`/current?lat=${lat}&lon=${lon}&key=${key}`, data),
    get_forecast_wheater: (data) => BaseAPI.get(`/forecast/hourly?postal_code=${postal_code}&hours=${hours}&key=${key}`, data)
}

export default WheaterbitAPI;