### INTRODUCTION
API Automation using mocha and chai.


### INSTALLATION
1. Register to get the API token key on this web
``` https://www.weatherbit.io/account/create```

3. Clone the repositoy to your directory
   ```
   git clone https://github.com/yanist1/JOJONOMIC-API.git
   ```
3. Open the cloned project directory

4. Add file `.env` 
5. In the .env file, Enter the token obtained after registering on the web ```https://www.weatherbit.io/account/create``` and also enter the BASE_URL = ```https://api.weatherbit.io/v2.0/```

Example : .env
   ```
    KEY: "your_api_token",
    BASE_URL: "sample",
   ```

### HOW TO RUN
Run Specific Api test File

  ```
  npm run test-mocha
  ```


### How to Trigger CI (Github Action)
1. Commit Changes
2. Push  to the repository
3. Click Action menu
4. Click the github action
