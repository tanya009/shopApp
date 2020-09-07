# shopApp
Insert Update and Delete Operation Methods are implemented in Web API using SQL Server, Visual Studio and Visual studio code.
API methods have called from Shop-App angular project.
Technologies Used: .NET and Angular
Angular app run command: ng serve

STEPS FOR DATABASE SETUP:

1. Open Microsoft SQl manager and connect to local sql server(provided sql server is created in local. If not create a new SQL server and connect it).
2. Create a database in the server with name shop
3. Create the table with following command:
    
    Create table ShopB(
    Name nvarchar(50) not null primary key,
    Description nvarchar(max) not null,
    Price nvarchar(max) not null
   );

Run above Query and table will be created.

MAKE SURE DATABASE IS CONNECTED WITH VISUAL STUDIO.

RUN THE APPLICATION:

Run .NET Application first so that API call can takes place.
Now Run Angular application by following steps: 
 1. Go to Visual studio code and make sure you are inside the project location.
 2. Go to inside your project in command palette through command: cd projectname
 3. Run the project using command: ng serve
Now go to Browser and type "http://localhost:4200/". Angular UI will be shown.


UI will be visible and ready to test.
