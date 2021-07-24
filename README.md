# api-simulator
## Version 1.0.0 ##
Simple API simulator on NodeJS, that will allow you to mock response


There are 5 APIs


|   API   |  Medthod  | Description     | 
| :-----: | :-------: | :-------------: |
| /car | GET | Gets the list car details |
| /car/{name} | GET | Gets the details of the car  |
| /car | POST | Adds a car to the list and returns the updated list  |
| /car | PUT | Updates the car and resturns the update details  |
| /car | DELETE | Returns 200 OK |

Utility APIs : The application is equipped with 3 utility APIs

|   API   |  Medthod  | Description     | 
| :-----: | :-------: | :-------------: |
| /healthz | GET | Check if the service is running fine. Can be used for readiness | liveness probe in Kubernetes deployment|
| /environmen | GET | Returns the current config |
| /reset| POST | Resets the data of the service to initial stage|


To run the program ``` npm run api```

