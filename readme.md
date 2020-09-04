#FORMAT US VEHICLE DB TO SOMETHING USABLE

###Format of original db

```
| Field           | Type        | Null | Key | Default | Extra          |
+-----------------|:-----------:|:----:|:---:|:-------:|:--------------:|
| vehicle_id      | int         | NO   | PRI | NULL    | auto_increment |
| barrels08       | float       | YES  |     | NULL    |                |
| barrelsA08      | float       | YES  |     | NULL    |                |
| charge120       | float       | YES  |     | NULL    |                |
| charge240       | float       | YES  |     | NULL    |                |
| city08          | int         | YES  |     | NULL    |                |
| city08U         | float       | YES  |     | NULL    |                |
| cityA08         | int         | YES  |     | NULL    |                |
| cityA08U        | float       | YES  |     | NULL    |                |
| cityCD          | float       | YES  |     | NULL    |                |
| cityE           | float       | YES  |     | NULL    |                |
| cityUF          | float       | YES  |     | NULL    |                |
| co2             | int         | YES  |     | NULL    |                |
| co2A            | int         | YES  |     | NULL    |                |
| co2TailpipeAGpm | float       | YES  |     | NULL    |                |
| co2TailpipeGpm  | float       | YES  |     | NULL    |                |
| comb08          | int         | YES  |     | NULL    |                |
| comb08U         | float       | YES  |     | NULL    |                |
| combA08         | int         | YES  |     | NULL    |                |
| combA08U        | float       | YES  |     | NULL    |                |
| combE           | float       | YES  |     | NULL    |                |
| combinedCD      | float       | YES  |     | NULL    |                |
| combinedUF      | float       | YES  |     | NULL    |                |
| cylinders       | varchar(2)  | YES  |     | NULL    |                |
| displ           | varchar(4)  | YES  |     | NULL    |                |
| drive           | varchar(26) | YES  |     | NULL    |                |
| engId           | int         | YES  |     | NULL    |                |
| eng_dscr        | varchar(40) | YES  |     | NULL    |                |
| feScore         | int         | YES  |     | NULL    |                |
| fuelCost08      | int         | YES  |     | NULL    |                |
| fuelCostA08     | int         | YES  |     | NULL    |                |
| fuelType        | varchar(27) | YES  |     | NULL    |                |
| fuelType1       | varchar(17) | YES  |     | NULL    |                |
| ghgScore        | int         | YES  |     | NULL    |                |
| ghgScoreA       | int         | YES  |     | NULL    |                |
| highway08       | int         | YES  |     | NULL    |                |
| highway08U      | float       | YES  |     | NULL    |                |
| highwayA08      | int         | YES  |     | NULL    |                |
| highwayA08U     | float       | YES  |     | NULL    |                |
| highwayCD       | float       | YES  |     | NULL    |                |
| highwayE        | float       | YES  |     | NULL    |                |
| highwayUF       | float       | YES  |     | NULL    |                |
| hlv             | int         | YES  |     | NULL    |                |
| hpv             | int         | YES  |     | NULL    |                |
| id              | int         | YES  |     | NULL    |                |
| lv2             | int         | YES  |     | NULL    |                |
| lv4             | int         | YES  |     | NULL    |                |
| make            | varchar(34) | YES  |     | NULL    |                |
| model           | varchar(47) | YES  |     | NULL    |                |
| mpgData         | varchar(1)  | YES  |     | NULL    |                |
| phevBlended     | varchar(5)  | YES  |     | NULL    |                |
| pv2             | int         | YES  |     | NULL    |                |
| pv4             | int         | YES  |     | NULL    |                |
| rangeM          | int         | YES  |     | NULL    |                |
| rangeMCity      | float       | YES  |     | NULL    |                |
| rangeMCityA     | float       | YES  |     | NULL    |                |
| rangeMHwy       | float       | YES  |     | NULL    |                |
| rangeMHwyA      | float       | YES  |     | NULL    |                |
| trany           | varchar(32) | YES  |     | NULL    |                |
| UCity           | float       | YES  |     | NULL    |                |
| UCityA          | float       | YES  |     | NULL    |                |
| UHighway        | float       | YES  |     | NULL    |                |
| UHighwayA       | float       | YES  |     | NULL    |                |
| VClass          | varchar(34) | YES  |     | NULL    |                |
| year            | int         | YES  |     | NULL    |                |
| youSaveSpend    | int         | YES  |     | NULL    |                |
| guzzler         | varchar(1)  | YES  |     | NULL    |                |
| trans_dscr      | varchar(15) | YES  |     | NULL    |                |
| tCharger        | varchar(1)  | YES  |     | NULL    |                |
| sCharger        | varchar(1)  | YES  |     | NULL    |                |
| atvType         | varchar(14) | YES  |     | NULL    |                |
| fuelType2       | varchar(11) | YES  |     | NULL    |                |
| rangeMA         | varchar(11) | YES  |     | NULL    |                |
| evMotor         | varchar(51) | YES  |     | NULL    |                |
| mfrCode         | varchar(3)  | YES  |     | NULL    |                |
| c240Dscr        | varchar(16) | YES  |     | NULL    |                |
| charge240b      | float       | YES  |     | NULL    |                |
| c240bDscr       | varchar(44) | YES  |     | NULL    |                |
| createdOn       | varchar(50) | YES  |     | NULL    |                |
| modifiedOn      | varchar(50) | YES  |     | NULL    |                |
| startStop       | varchar(1)  | YES  |     | NULL    |                |
| phevCity        | int         | YES  |     | NULL    |                |
| phevHwy         | int         | YES  |     | NULL    |                |
| phevComb        | int         | YES  |     | NULL    |                |

```
