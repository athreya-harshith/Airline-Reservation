## Flights Service 
* This repository consists the flighs service of Airline Reservation.
* The models used here are 
    * Airplane
    * Airport
    * City
    * Flight
    * Seat
* ### Airplane Model
* The attributes for **Airplane Model** are ,
    * modelNumber : String
    * capacity : Integer , max : 1000
* ### Airport Model
* The attributes for **Airport Model** are ,
    * name : String
    * code : String
    * address : String
    * cityId : Integer 
* ### City Model
* The attributes for **City Model** are ,
    * name : String
* ### Flight Model
* The attributes for **Flight Model** are ,
    * flightNumber : String
    * airplaneId : Integer
    * departureAirportId : String
    * arrivalAirportId : String
    * arrivalTime : Integer
    * departureTime : Integer
    * price : Integer
    * boardingGate : String
* ### Seat Model
* The attributes for **Seat Model** are ,
    * airplaneId : Integer
    * row : Integer
    * col : Integer
    * type :[ECONOMY,PREMIUM_ECONOMY,BUSINESS,FIRST_CLASS]

