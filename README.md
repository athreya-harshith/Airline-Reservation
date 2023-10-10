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
    * totalSeats : Integer (Total Remaining Seats)
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
* ## City Routes
* The only attribute used in the city model is name ,
* Hence for creating the city , request-body must contain name.

* ## Flight Routes
* All the API endpoints for **Flights** will be under **/api/v1/filghts**
* The Flights Service provides transactional features for seat booking using **row level locking** mechanism.
* To create a Flight , all the below listed fields must be a part of request-body mandatorily ,
    * flightNumber : String
    * airplaneId : Integer
    * departureAirportId : String
    * arrivalAirportId : String
    * arrivalTime : Integer
    * departureTime : Integer
    * price : Integer
    * totalSeats : Integer (Total Remaining Seats)
* To create a flight ,
* `POST` request on **/api/v1/filghts/**
* Example ,
```
POST on => localhost:3000/api/v1/flights/
```
* Request body contents,
```
{
    flightNumber:IN 202
    airplaneId:1
    departureAirportId:MUM
    arrivalAirportId:DEL
    arrivalTime:2023-10-25 12:30:45 
    departureTime:2023-10-25 10:15:24
    price:2250
    totalSeats:100  
}
```
* Response from server ,
```json
{
    "success": true,
    "message": "Successfully Created the Flight",
    "data": {
        "id": 6,
        "flightNumber": "IN 202",
        "airplaneId": "1",
        "departureAirportId": "MUM",
        "arrivalAirportId": "DEL",
        "arrivalTime": "2023-10-25 12:30:45 ",
        "departureTime": "2023-10-25 10:15:24",
        "price": "2250",
        "totalSeats": "100",
        "updatedAt": "2023-10-09T05:38:05.993Z",
        "createdAt": "2023-10-09T05:38:05.993Z"
    },
    "error": {}
}
```
* To fetch all the flights, 
* `GET` request on **/api/v1/filghts/**
* To fetch flights with some **filter** applied, can be done with the **Query Params**
* Example 
```
GET on => localhost:3000/api/v1/flights?trips=DEL-BLR&price=2500-5000&travellers=360&tripDate=2023-09-11&sort=price_ASC,departureTime_DESC
```
* Query Params Object
```
{
    trips:DEL-BLR
    price:2500-5000
    travellers:360
    tripDate:2023-09-11
    sort:price_ASC,departureTime_DESC
}
```
* This object is accessed using `req.query`
* Response ,
```json
{
    "success": true,
    "message": "Successfully Fetched the Flight",
    "data": [
        {
            "id": 5,
            "flightNumber": "US 234",
            "airplaneId": 8,
            "departureAirportId": "DEL",
            "arrivalAirportId": "BLR",
            "arrivalTime": "2023-09-11T14:50:00.000Z",
            "departureTime": "2023-09-11T13:00:00.000Z",
            "price": 4800,
            "boardingGate": null,
            "totalSeats": 485,
            "createdAt": "2023-09-09T03:22:56.000Z",
            "updatedAt": "2023-09-09T03:22:56.000Z",
            "airplaneDetail": {
                "id": 8,
                "modelNumber": "boeing77",
                "capacity": 900,
                "createdAt": "2023-09-03T04:08:54.000Z",
                "updatedAt": "2023-09-03T04:18:28.000Z"
            },
            "departureAirport": {
                "id": 10,
                "name": "IGI AIrport",
                "code": "DEL",
                "address": "New Delhi",
                "cityId": 9,
                "createdAt": "2023-09-07T16:11:38.000Z",
                "updatedAt": "2023-09-07T16:11:38.000Z",
                "City": {
                    "id": 9,
                    "name": "Delhi",
                    "createdAt": "2023-09-07T16:10:24.000Z",
                    "updatedAt": "2023-09-07T16:10:24.000Z"
                }
            },
            "arrivalAirport": {
                "id": 5,
                "name": "Kempegowda Airport",
                "code": "BLR",
                "address": "Devanahalli",
                "cityId": 8,
                "createdAt": "2023-09-07T14:15:04.000Z",
                "updatedAt": "2023-09-07T14:22:09.000Z",
                "City": {
                    "id": 8,
                    "name": "Bengaluru",
                    "createdAt": "2023-09-07T14:14:03.000Z",
                    "updatedAt": "2023-09-07T14:14:03.000Z"
                }
            }
        }
    ],
    "error": {}
}
```
* To get a flight with **:id**
* `GET` request on **/api/v1/filghts/:id**
* To Update the `totalSeats` of the flight ,
* The API is **/api/v1/filghts/:id/seats**
* Using the above API with `PATCH` request.
* Request Body contains seats key and an optional decrease key
* If `decrease` is not mentioned the default behaviour is to decrement the seats.
* If decrease:0 is used then the seats get incremented.
> This Operation of decreasing the seat is implemented as a transaction using row-level lock
```js
function addRowLockOnFlights(flightId)
{
    return `SELECT * from Flights where Flights.id = ${flightId} FOR UPDATE;`;
}
```
* The above function takes flightId as argument and for that flightId , the lock will be applied.