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
* The key-value pairs mentioned in request-body will be updated.

* ## Airport Routes
* Creating an Airport
* * `POST` request on **/api/v1/airports/**
* request body 
```
{
    name:Odeyar Airport
    code:MYS
    address:Mysore , Karnataka
    cityId:6
}
```
* Response from server
```json
{
    "success": true,
    "message": "Successfully Created the Airport",
    "data": {
        "id": 12,
        "name": "Odeyar Airport",
        "code": "MYS",
        "address": "Mysore , Karnataka",
        "cityId": "6",
        "updatedAt": "2023-10-08T08:03:13.489Z",
        "createdAt": "2023-10-08T08:03:13.489Z"
    },
    "error": {}
}
```
* Retrieving all the Airports
* `get` request on  **/api/v1/airports/**
* Response from server
```json
{
    "success": true,
    "message": "Successfully Fetched All the Airports",
    "data": [
        {
            "id": 12,
            "name": "Odeyar Airport",
            "code": "MYS",
            "address": "Mysore , Karnataka",
            "cityId": 6,
            "createdAt": "2023-10-08T08:03:13.000Z",
            "updatedAt": "2023-10-08T08:03:13.000Z"
        }
    ],
    "error": {}
}
```
* Retieving an Airport with the id
* `GET` request on **/api/v1/airports/:id**
* **:id** is the id of the airport to obtain
* Example ,
```
GET on => localhost:3000/api/v1/airports/12
```
* Response from server
```json
{
    "success": true,
    "message": "Successfully Fetched the Airport",
    "data": {
        "id": 12,
        "name": "Odeyar Airport",
        "code": "MYS",
        "address": "Mysore , Karnataka",
        "cityId": 6,
        "createdAt": "2023-10-08T08:03:13.000Z",
        "updatedAt": "2023-10-08T08:03:13.000Z"
    },
    "error": {}
}
```
* Updating an Airport with the given id
* `PATCH` request on **/api/v1/airports/:id**
* **:id** is the id of the airport to be updated
* request-body must contain the fields to be updated as key-value pair.
* Example 
```
PATCH on => localhost:3000/api/v1/airports/12
```
* Request Body 
```
{
    address:Mysore , Karnataka , India
}
```
* Response from server , 
```json
{
    "success": true,
    "message": "Successfully Updated the Airport",
    "data": [
        1
    ],
    "error": {}
}
```
* Upon retrieving the detaills using `GET` request,
```json
{
    "success": true,
    "message": "Successfully Fetched the Airport",
    "data": {
        "id": 12,
        "name": "Odeyar Airport",
        "code": "MYS",
        "address": "Mysore , Karnataka , India",
        "cityId": 6,
        "createdAt": "2023-10-08T08:03:13.000Z",
        "updatedAt": "2023-10-09T04:22:54.000Z"
    },
    "error": {}
}
```
* * To delete an Airport ,
* `delete` request on **/api/v1/airpports/:id**
* **:id** denotes the id of the Airport to be deleted
* Example ,
```
DELETE on => localhost:3000/api/v1/airports/12 
```
* Response from server ,
```json
{
    "success": true,
    "message": "Successfully deleted the Airport",
    "data": 1,
    "error": {}
}
```
  