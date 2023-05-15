# City Bike App

### Features

Data import
* Data imported from the CSV files to a database
* Data validated before importing, excluding following:
  * Journeys that lasted less than ten seconds
  * Journeys that covered distances shorter than 10 meters

Journeys:
* List journeys
* Pagination
* Ordering per column

Stations:
* List stations
* Pagination
* Single station view
  * Address
  * Total number of journeys starting from the station
  * Total number of journeys ending at the station
  * Location on the map



### Datasets
Journeys: 
* https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv
* https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv
* https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv

Stations:
* https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv

### Technologies
* Database: Mongo DB Atlas
* Server: Node.js, Express, Fast-CSV, Mongoose
* Client: React.js, Axios, React-Bootstrap, Bootstrap



