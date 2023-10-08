## Flights Service 
* This repository consists the flighs service of Airline Reservation.
* The models used here are 
    * Airplane
    * Airport
    * City
    * Flight
    * Seat
* ## Airplane Model
* The attributes for **Airplane Model** are ,
    * modelNumber : String
    * capacity : Integer , max : 1000
* ## Airport Model
* The attributes for **Airport Model** are ,
    * name : String
    * code : String
    * address : String
    * cityId : Integer 
* ## City Model
* The attributes for **City Model** are ,
    * name : String
* ## Flight Model
* The attributes for **Flight Model** are ,
    * flightNumber : String
    * airplaneId : Integer
    * departureAirportId : String
    * arrivalAirportId : String
    * arrivalTime : Integer
    * departureTime : Integer
    * price : Integer
    * boardingGate : String
* ## Seat Model
* The attributes for **Seat Model** are ,
    * airplaneId : Integer
    * row : Integer
    * col : Integer
    * type :[ECONOMY,PREMIUM_ECONOMY,BUSINESS,FIRST_CLASS]

## API-ROUTES (API-ENDPOINT) 
* This section contains information regarding the API-ROUTES.
* ## Airplane Routes
* Creating Airplane , 
* `POST` request on **/api/v1/airplanes/**
* request body 
```
{
    modelNumber:testing101
    capacity:15
}
```
* Response from Server 
```json
{
    "success": true,
    "message": "Successfully Created An Airplane",
    "data": {
        "id": 18,
        "modelNumber": "testing101",
        "capacity": "15",
        "updatedAt": "2023-10-08T07:28:48.001Z",
        "createdAt": "2023-10-08T07:28:48.001Z"
    },
    "error": {}
}
```
* Retrieving All Airplanes
* `GET` request on  **/api/v1/airplanes/**
* Response from server
```json
{
    "success": true,
    "message": "Successfully Retrieved Airplane",
    "data": [
        {
            "id": 1,
            "modelNumber": "airbus a320",
            "capacity": 100,
            "createdAt": "2023-08-30T04:40:00.000Z",
            "updatedAt": "2023-08-30T04:40:00.000Z"
        },
        {
            "id": 18,
            "modelNumber": "testing101",
            "capacity": 15,
            "createdAt": "2023-10-08T07:28:48.000Z",
            "updatedAt": "2023-10-08T07:28:48.000Z"
        }
    ],
    "error": {}
}
```
* To get a particular airplane  
* `GET` request on **/api/v1/airplanes/:id**
* **:id** is the id of the ariplane to obtain
* its accessed using `req.params.id`
* Example ,
```
localhost:3000/api/v1/airplanes/18
```
* Response from Server
```json
{
    "success": true,
    "message": "Successfully Retrieved An Airplane",
    "data": {
        "id": 18,
        "modelNumber": "testing101",
        "capacity": 15,
        "createdAt": "2023-10-08T07:28:48.000Z",
        "updatedAt": "2023-10-08T07:28:48.000Z"
    },
    "error": {}
}
```
* To delete an Airplane ,
* `delete` request on **/api/v1/airplanes/:id**
* **:id** denotes the id of the Airplane to be deleted
* Example ,
```
DELETE on => localhost:3000/api/v1/airplanes/18 
```
* Response from server ,
```json
{
    "success": true,
    "message": "Successfully Deleted An Airplane",
    "data": 1,
    "error": {}
}
```
* To update an Airplane
* `patch` request on **/api/v1/airplanes/:id**
* **:id** denotes the id of the Airplane to be updated
* The key-value pairs mentioned in request-body will be updated
  
    
  