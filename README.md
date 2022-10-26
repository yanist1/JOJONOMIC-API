### GETTING STARTED
API Automation using mocha and chai.

API Automation Test File : tests/scenarios/weather.test.js

### Installation
1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/yanist1/JOJONOMIC-API.git
   ```
3. go to project directory

4. Add file `.env` and Enter your API Token, BASE_URL = `https://api.weatherbit.io/v2.0/`
   ```json
   {
    "KEY": "your_api_token",
    "BASE_URL": "sample",
    }
   ```

### How to run
Run Specific Api test File

  ```npm run test-mocha
  ```


### How to Trigger CI (Github Action)
1. Commit Changes
2. Push to repository
3. Check Github Action Tab
