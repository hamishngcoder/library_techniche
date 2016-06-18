# library_techniche
a library management system
database information :mongodb
table name : Library
colections: User,Books,User_Details

eg- C:\bin>mongo
MongoDB shell version: 3.2.7
connecting to: test
> show databases
Library  0.000GB
local    0.000GB
> use Library
switched to db Library
> db.User_Details.find().pretty()
{
        "_id" : ObjectId("5763ad89e917f1f420eabf45"),
        "username" : null,
        "name" : "cndks",
        "email" : "scasc@adas.com",
        "contact" : "565465645",
        "Unique_Id" : null
}
{
        "_id" : ObjectId("5763ae625b8f05901ba1227c"),
        "username" : "ascbsc",
        "name" : "jsbjascjcb ",
        "email" : "hamish_2015@yahoo.com",
        "contact" : "646451351154133",
        "Unique_Id" : null
}
{
        "_id" : ObjectId("5763aec75b8f05901ba1227d"),
        "username" : "fscs",
        "name" : "csdcdcsasc",
        "email" : "hamish_2015@yahoo.com",
        "contact" : "654",
        "Unique_Id" : "ObjectId"
}
{
        "_id" : ObjectId("5763af1d5b8f05901ba1227e"),
        "username" : "",
        "name" : "",
        "email" : "",
        "contact" : "",
        "Unique_Id" : "ObjectId"
}
{
        "_id" : ObjectId("5763bc1e5b8f05901ba1227f"),
        "username" : "",
        "name" : "",
        "email" : "",
        "contact" : "",
        "Unique_Id" : "5762d3c8af9c702107bab52b"
}
{
        "_id" : ObjectId("5763f02f4b47564c20bb194c"),
        "username" : "bajdab",
        "name" : "aebfwej",
        "email" : "bfnwekckw@aefwe.com",
        "contact" : "fnewknw",
        "Unique_Id" : "5762d3c8af9c702107bab52b"
}
{
        "_id" : ObjectId("5763f12b4e971dc81c0e8459"),
        "username" : "asd",
        "name" : "",
        "email" : "",
        "contact" : "",
        "Unique_Id" : "5762d3c8af9c702107bab52b"
}
{
        "_id" : ObjectId("5763f27b1298d35c0bb0d28a"),
        "username" : "asd",
        "name" : "",
        "email" : "",
        "contact" : "",
        "Unique_Id" : "5762d3c8af9c702107bab52b"
}
