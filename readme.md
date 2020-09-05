# Format US Vehicle DB To Something Usable

### original format

<!-- ``` -->

| Field           |    Type     | Null | Key | Default |     Extra      |
| --------------- | :---------: | :--: | :-: | :-----: | :------------: |
| vehicle_id      |     int     |  NO  | PRI |  NULL   | auto_increment |
| barrels08       |    float    | YES  |     |  NULL   |                |
| barrelsA08      |    float    | YES  |     |  NULL   |                |
| charge120       |    float    | YES  |     |  NULL   |                |
| charge240       |    float    | YES  |     |  NULL   |                |
| city08          |     int     | YES  |     |  NULL   |                |
| city08U         |    float    | YES  |     |  NULL   |                |
| cityA08         |     int     | YES  |     |  NULL   |                |
| cityA08U        |    float    | YES  |     |  NULL   |                |
| cityCD          |    float    | YES  |     |  NULL   |                |
| cityE           |    float    | YES  |     |  NULL   |                |
| cityUF          |    float    | YES  |     |  NULL   |                |
| co2             |     int     | YES  |     |  NULL   |                |
| co2A            |     int     | YES  |     |  NULL   |                |
| co2TailpipeAGpm |    float    | YES  |     |  NULL   |                |
| co2TailpipeGpm  |    float    | YES  |     |  NULL   |                |
| comb08          |     int     | YES  |     |  NULL   |                |
| comb08U         |    float    | YES  |     |  NULL   |                |
| combA08         |     int     | YES  |     |  NULL   |                |
| combA08U        |    float    | YES  |     |  NULL   |                |
| combE           |    float    | YES  |     |  NULL   |                |
| combinedCD      |    float    | YES  |     |  NULL   |                |
| combinedUF      |    float    | YES  |     |  NULL   |                |
| cylinders       | varchar(2)  | YES  |     |  NULL   |                |
| displ           | varchar(4)  | YES  |     |  NULL   |                |
| drive           | varchar(26) | YES  |     |  NULL   |                |
| engId           |     int     | YES  |     |  NULL   |                |
| eng_dscr        | varchar(40) | YES  |     |  NULL   |                |
| feScore         |     int     | YES  |     |  NULL   |                |
| fuelCost08      |     int     | YES  |     |  NULL   |                |
| fuelCostA08     |     int     | YES  |     |  NULL   |                |
| fuelType        | varchar(27) | YES  |     |  NULL   |                |
| fuelType1       | varchar(17) | YES  |     |  NULL   |                |
| ghgScore        |     int     | YES  |     |  NULL   |                |
| ghgScoreA       |     int     | YES  |     |  NULL   |                |
| highway08       |     int     | YES  |     |  NULL   |                |
| highway08U      |    float    | YES  |     |  NULL   |                |
| highwayA08      |     int     | YES  |     |  NULL   |                |
| highwayA08U     |    float    | YES  |     |  NULL   |                |
| highwayCD       |    float    | YES  |     |  NULL   |                |
| highwayE        |    float    | YES  |     |  NULL   |                |
| highwayUF       |    float    | YES  |     |  NULL   |                |
| hlv             |     int     | YES  |     |  NULL   |                |
| hpv             |     int     | YES  |     |  NULL   |                |
| id              |     int     | YES  |     |  NULL   |                |
| lv2             |     int     | YES  |     |  NULL   |                |
| lv4             |     int     | YES  |     |  NULL   |                |
| make            | varchar(34) | YES  |     |  NULL   |                |
| model           | varchar(47) | YES  |     |  NULL   |                |
| mpgData         | varchar(1)  | YES  |     |  NULL   |                |
| phevBlended     | varchar(5)  | YES  |     |  NULL   |                |
| pv2             |     int     | YES  |     |  NULL   |                |
| pv4             |     int     | YES  |     |  NULL   |                |
| rangeM          |     int     | YES  |     |  NULL   |                |
| rangeMCity      |    float    | YES  |     |  NULL   |                |
| rangeMCityA     |    float    | YES  |     |  NULL   |                |
| rangeMHwy       |    float    | YES  |     |  NULL   |                |
| rangeMHwyA      |    float    | YES  |     |  NULL   |                |
| trany           | varchar(32) | YES  |     |  NULL   |                |
| UCity           |    float    | YES  |     |  NULL   |                |
| UCityA          |    float    | YES  |     |  NULL   |                |
| UHighway        |    float    | YES  |     |  NULL   |                |
| UHighwayA       |    float    | YES  |     |  NULL   |                |
| VClass          | varchar(34) | YES  |     |  NULL   |                |
| year            |     int     | YES  |     |  NULL   |                |
| youSaveSpend    |     int     | YES  |     |  NULL   |                |
| guzzler         | varchar(1)  | YES  |     |  NULL   |                |
| trans_dscr      | varchar(15) | YES  |     |  NULL   |                |
| tCharger        | varchar(1)  | YES  |     |  NULL   |                |
| sCharger        | varchar(1)  | YES  |     |  NULL   |                |
| atvType         | varchar(14) | YES  |     |  NULL   |                |
| fuelType2       | varchar(11) | YES  |     |  NULL   |                |
| rangeMA         | varchar(11) | YES  |     |  NULL   |                |
| evMotor         | varchar(51) | YES  |     |  NULL   |                |
| mfrCode         | varchar(3)  | YES  |     |  NULL   |                |
| c240Dscr        | varchar(16) | YES  |     |  NULL   |                |
| charge240b      |    float    | YES  |     |  NULL   |                |
| c240bDscr       | varchar(44) | YES  |     |  NULL   |                |
| createdOn       | varchar(50) | YES  |     |  NULL   |                |
| modifiedOn      | varchar(50) | YES  |     |  NULL   |                |
| startStop       | varchar(1)  | YES  |     |  NULL   |                |
| phevCity        |     int     | YES  |     |  NULL   |                |
| phevHwy         |     int     | YES  |     |  NULL   |                |
| phevComb        |     int     | YES  |     |  NULL   |                |

<!-- ``` -->

- barrels08 - annual petroleum consumption in barrels for fuelType1 (1)
- atvtype - type of alternative fuel or advanced technology vehicle
- barrelsA08 - annual petroleum consumption in barrels for fuelType2 (1)
- charge120 - time to charge an electric vehicle in hours at 120 V
- charge240 - time to charge an electric vehicle in hours at 240 V
- city08 - city MPG for fuelType1 (2), (11)
- city08U - unrounded city MPG for fuelType1 (2), (3)
- cityA08 - city MPG for fuelType2 (2)
- cityA08U - unrounded city MPG for fuelType2 (2), (3)
- cityCD - city gasoline consumption (gallons/100 miles) in charge depleting mode (4)
- cityE - city electricity consumption in kw-hrs/100 miles
- cityUF - EPA city utility factor (share of electricity) for PHEV
- co2 - tailpipe CO2 in grams/mile for fuelType1 (5)
- co2A - tailpipe CO2 in grams/mile for fuelType2 (5)
- co2TailpipeAGpm - tailpipe CO2 in grams/mile for fuelType2 (5)
- co2TailpipeGpm- tailpipe CO2 in grams/mile for fuelType1 (5)
- comb08 - combined MPG for fuelType1 (2), (11)
- comb08U - unrounded combined MPG for fuelType1 (2), (3)
- combA08 - combined MPG for fuelType2 (2)
- combA08U - unrounded combined MPG for fuelType2 (2), (3)
- combE - combined electricity consumption in kw-hrs/100 miles
- combinedCD - combined gasoline consumption (gallons/100 miles) in charge depleting mode (4)
- combinedUF - EPA combined utility factor (share of electricity) for PHEV
- cylinders - engine cylinders
- displ - engine displacement in liters
- drive - drive axle type
- emissionsList
- engId - EPA model type index
- eng_dscr - engine descriptor; see http://www.fueleconomy.gov/feg/findacarhelp.shtml#engine
- evMotor - electric motor (kw-hrs)
- feScore - EPA Fuel Economy Score (-1 = Not available)
- fuelCost08 - annual fuel cost for fuelType1 (\$) (7)
- fuelCostA08 - annual fuel cost for fuelType2 (\$) (7)
- fuelType - fuel type with fuelType1 and fuelType2 (if applicable)
- fuelType1 - fuel type 1. For single fuel vehicles, this will be the only fuel. For dual fuel vehicles, this will be the conventional fuel.
- fuelType2 - fuel type 2. For dual fuel vehicles, this will be the alternative fuel (e.g. E85, Electricity, CNG, LPG). For single fuel vehicles, this field is not used
- ghgScore - EPA GHG score (-1 = Not available)
- ghgScoreA - EPA GHG score for dual fuel vehicle running on the alternative fuel (-1 = Not available)
- guzzler- if G or T, this vehicle is subject to the gas guzzler tax
- highway08 - highway MPG for fuelType1 (2), (11)
- highway08U - unrounded highway MPG for fuelType1 (2), (3)
- highwayA08 - highway MPG for fuelType2 (2)
- highwayA08U - unrounded highway MPG for fuelType2 (2),(3)
- highwayCD - highway gasoline consumption (gallons/100miles) in charge depleting mode (4)
- highwayE - highway electricity consumption in kw-hrs/100 miles
- highwayUF - EPA highway utility factor (share of electricity) for PHEV
- hlv - hatchback luggage volume (cubic feet) (8)
- hpv - hatchback passenger volume (cubic feet) (8)
- id - vehicle record id
- lv2 - 2 door luggage volume (cubic feet) (8)
- lv4 - 4 door luggage volume (cubic feet) (8)
- make - manufacturer (division)
- mfrCode - 3-character manufacturer code
- model - model name (carline)
- mpgData - has My MPG data; see yourMpgVehicle and yourMpgDriverVehicle
- phevBlended - if true, this vehicle operates on a blend of gasoline and electricity in charge depleting mode
- pv2 - 2-door passenger volume (cubic feet) (8)
- pv4 - 4-door passenger volume (cubic feet) (8)
- rangeA - EPA range for fuelType2
- rangeCityA - EPA city range for fuelType2
- rangeHwyA - EPA highway range for fuelType2
- trans_dscr - transmission descriptor; see http://www.fueleconomy.gov/feg/findacarhelp.shtml#trany
- trany - transmission
- UCity - unadjusted city MPG for fuelType1; see the description of the EPA test procedures
- UCityA - unadjusted city MPG for fuelType2; see the description of the EPA test procedures
- UHighway - unadjusted highway MPG for fuelType1; see the description of the EPA test procedures
- UHighwayA - unadjusted highway MPG for fuelType2; see the description of the EPA test procedures
- VClass - EPA vehicle size class
- year - model year
- youSaveSpend - you save/spend over 5 years compared to an average car (\$). Savings are positive; a greater amount spent yields a negative number. For dual fuel vehicles, this is the cost savings for gasoline
- sCharger - if S, this vehicle is supercharged
- tCharger - if T, this vehicle is turbocharged
- c240Dscr - electric vehicle charger description
- charge240b - time to charge an electric vehicle in hours at 240 V using the alternate charger
- c240bDscr - electric vehicle alternate charger description
- createdOn - date the vehicle record was created (ISO 8601 format)
- modifiedOn - date the vehicle record was last modified (ISO 8601 format)
- startStop - vehicle has start-stop technology (Y, N, or blank for older vehicles)
- phevCity - EPA composite gasoline-electricity city MPGe for plug-in hybrid vehicles
- phevHwy - EPA composite gasoline-electricity highway MPGe for plug-in hybrid vehicles
- phevComb - EPA composite gasoline-electricity combined city-highway MPGe for plug-in hybrid vehicles

### Running script

This node script you will get new car_makers and car_models separete table.
They have _one to many_ relationship

**car_makers** only have name field, and primary key.
**car_models** have name, foreign key that point to car_maker_id, and pk
