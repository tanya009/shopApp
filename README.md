# shopApp
Insert Update and Delete Operation Methods are implemented in Web API using SQL Server, Visual Studio and Visual studio code. API methods have called from Shop-App angular project.
Technologies Used: .NET and Angular
Angular app run command: ng serve

Steps for Database setup:

1. Open Microsoft SQl manager and connect to local sql server.
2. Create a database in the server with name shop
3. Create the table with following command:
    
    Create table ShopB(
    Name nvarchar(50) not null primary key,
    Description nvarchar(max) not null,
    Price nvarchar(max) not null
    );

Now the database is ready to use.
Run .NET Applicaton and Angular application to test the full flow.
