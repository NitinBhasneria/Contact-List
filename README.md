# Contact-List
This is my first MEAN Stack Application.
We are using mongoDB weith express. While we an use many other database with express which you can see [here](http://expressjs.com/en/guide/database-integration.html).

PS: I have made this application through the [tutorial](https://www.youtube.com/watch?v=wtIvu085uU0&t=22s) of Edureka


# Introduction
  - **MEAN** is a Full-stack Javascript Solution that helps you build fast, robust, and maintainable production web application using MongoDB, Express, AngularJS, and Node.js 

# MEAN 
    This is the architecture we will be using.

   ![mean1](https://user-images.githubusercontent.com/44112080/115566415-da5b0a80-a2d7-11eb-800d-d81888a4de66.png)

## M: mongoDB
  - MongoDB is an open source NoSQL database that uses a document-oriented data model.
  - It works on concept of collection and document.
  - Collection is a group of documents while document is a set of key value paris.
  - Saves data in key value pairs.
  - MongoDB saves data in binary format which makes it easier to pass data between client and server.

  ### Installation
  - [Install](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) Here
  - Basic Commands
    - Start MongoDB  `sudo systemctl start mongod`
    - Verify that MongoDB has started successfully  `sudo systemctl status mongod`
    - Stop MongoDB  `sudo systemctl stop mongod`
    - Restart MongoDB  `sudo systemctl restart mongod`
    - Begin using MongoDB.
      - Start a mongo shell on the same host machine as the mongod. You can run the mongo shell without any command-line options to connect to a mongod that is           running on your localhost with default port 27017:
        `mongo`  

## E: Express
  - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  - Idea of **Express** came Sinatra, which is popular framework based on **Ruby**. 
  - Expres provides you boilerplate by encapsulation the functionalities of NodeJs so that the whole app building process becomes easier and fast.

## A: Angular
  - Angular 2 is based on TypeScript.
  - Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
  - Angular is a development platform, built on TypeScript. As a platform, Angular includes:
    - A component-based framework for building scalable web applications.
    - A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.
    - A suite of developer tools to help you develop, build, test, and update your code.
  - PS: We will be using Angular2. We will be using angular2 as a interface for the client to interfere.

## N: Node.js
  - Node.js is a server-side JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Follows the event-driven architecture, where there is a single thread mechanism to process your events.
  - Events will be done asynchronously, i.e. if we have multiple event process one vent wont wait for other to complete. It can process multiple request at the same time. So, this event-driven architecture makes out node.js server highly optimal and scalable. 
  - PS: For understanding difference between event-driven and request-driven(used in old framework) refer [this](https://www.techtalksbyanvita.com/post/event-driven-vs-request-driven-rest-architecture). See this what is event-driven.

  ### Installation
  - Step 1: Download latest or recommended node .tar.xz file from [Download](https://nodejs.org/en/download/)   
  
  - Step 2: Go to the directory in which (.tar.xz file) is downloaded.
  
  - Step 3: Update System Repositories.
    - `sudo apt update`
  
  - Step 4: Install the package xz-utils
    - `sudo apt install xz-utils`

  - Step 5: To Extract the .tar.xz file
    - `sudo tar -xvf name_of_file`
    - In my case --> `sudo tar -xvf node-v14.15.5-linux-x64.tar.xz`

  - Step 6: sudo cp -r directory_name/{bin,include,lib,share} /usr/
    - In my case --> `sudo cp -r node-v14.15.5-linux-x64/{bin,include,lib,share} /usr/`

  - Step 7: Check the node version
    - `node --version`
    - Result In my case -> v14.15.5

PS: Also check the npm version. NPM stands for "Node Package Manager" which is there for managing your dependencies and there versions.
*npm is distributed with Node. js- which means that when you download Node. js, you automatically get npm installed on your computer.*

# CRUD Operation
![curd](https://user-images.githubusercontent.com/44112080/115576720-658cce00-a2e1-11eb-88c0-26878f3f054a.png)

# Starting Doc   

## Day 1: 21/04/2021
  - `npm init`: To bend the project and create package.JSON file which will contain dependencies. // GOT package.json file
  - Output: \
    `package name: (contact-list)` \
    `version: (1.0.0) `\
    `description: Mean stack application for contact list`\
    `entry point: (index.js) app.js`\ where the point of execution will be at the beginning
    `test command: `\
    `git repository: (https://github.com/NitinBhasneria/Contact-List.git) `\
    `keywords: `\
    `author: Nitin Bhasneria`
    `license: (ISC)`\

  - `npm install express --save`: npm install is for installing any dependencies followed by the names of dependencies and by using --save you can save the dependencies in package.JSON file. //GOT NODE MODULE FOLDER 
    - NOTE: we didnt got the node module folder before because no dependencies were installed before.

  - `npm install mongoose cors body-parser --save`
    - **Mongoose** is an object document mapper for using mongodb.
    - **Body-parser** is used for parsing the incoming JSON data.
    - **CORS** is because we will be having our server code 3000 whereas our client-side code run on 4200.4200 so thats why we dont get an error which is not allowed by default.

  - Making app.js
  - Import modules and dependencies we need for building our project 
  - Writing the app.js starting
    - Importing Module
        ```
        `var express = require('express'); //importing express
        `var mongoose = require('mongoose'); //importing mongoose
        `var bodyparser = require('body-parser'); //importing body-parser
        `var cors = require('cors'); //importing cors
        `var path = require('path'); //haven't installed path because its one of the 
                            code module so we dont have to install it seperately
        ```

    - For using express we need to assign the express method to a variable\
        `var app = express();`

    - port number \
        `const port = 3000;`

    - we need to add a route so that if we go to localhost:3000 then we neeed to specify what it needs to render for that homepage route.
        ```
        app.get('/', (req, res) => {
            res.send('Hello World!');
        })
        ```

    - bind server with this port number 
        ```
        app.listen(port, ()=>{
            console.log("Server started at port:"+port);
        })
        ```

    ### Starting Server
      - `node app.js` Starting the Server you will see this interface.
      
      ![contactList1](https://user-images.githubusercontent.com/44112080/115594386-4d25af00-a2f3-11eb-83ed-6675a841cfe0.png)


## Day 2: 22/04/2012  
  - Adding the router folder for handling the route. Basically, in app.js we will import the route file and use `app.use('/api', route)` by this we are telling every route with api go to `route.js` and in route.js we have defined */contact* which defines that route of */api* foes to `route.js` where */contacts* goes to that particular output defined in `route.js`
  
  - In short */api/contact* will be directed to the `route.js` for the output.
  
  - **CORS**: CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.  
  - **CORS** now we need to add the middleware so that we can parse our data for which we use **CORS**(as a middleware). (***Middleware*** is software that provides common services and capabilities to applications outside of what's offered by the operating system. Data management, application services, messaging, authentication, and API management are all commonly handled by middleware.)
  
  - **Body-Parser** In order to get access to the post data we have to use body-parser . Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand. 
 
  - Now, for storing all the static files created a folder public and joining this ***public*** folder to our directory. 
    - we use `app.use(express.static(path.join(__dirname, 'public')));` we use *__dirname* for the directory name, we can also use the directory path itself.
  - We created a 
    ```router.get('/contacts', (req, res, next) => {
        res.send('Retrieving the Contact List');
        });        // whatever changes made to the /api/contacts will be directed to here
    ``` 
    by this we says that whatever comes with route */api/contact* prints 'Retrieving the Contact List'. 
  
  - Every time you make changes to your server side code you have to restart the server. What you can do is install **Nodemon** which will continously watch source code file for changes and refrehes itself. `npm install nodemon`
  - Run with `nodemon`
     - Giving error `nodemon: command not found` to me. So I used `sudo npm install -g --force nodemon`
  
  - On starting server I got the error because I had not exported the route.js which shouch be exported. Also, you will see the server is refreshing its own due to **nodemon**. Also, if you see nodemon uses same command `node app.js` for starting the server.
    
  - Now we can go to *localhost:3000/api/contacts* having this as a output.  
  ![contactlist2](https://user-images.githubusercontent.com/44112080/115741935-d00b4000-a3ad-11eb-84f4-7f1ed67cd8ac.png)

  
  **Adding methods for data retrive and delete**
  - Now we are going to connect to our database  and write the logic for retriving data in *route.js* and thats how we are going to send the data in client side application which will make a call to this very particular API and retrive the list of contacts.
  - Adding the methods:
    - POST: 
        ```
        router.post('/contacts', (req, res, next) => {
            // logic to add contact
        });
        ```
    - DELETE:
        ```
        router.delete('/contacts/:id', (req, res, next) => {
          // logic to add contact
        });
        ```
        We will be deleting the contact by referring to that particular contact by its ID
  
  **Database schema and connections**
  - Now we need to create a schema for our contact that will be inserted to our database and need to make connection with our database.
  - So we are going to make a folder named ***models***.
  - Created *contact.js* inside *models* folder this particular file will be having all our schema(our contact schema).
  - So we need to bring **Mongoose**, since we are making schema for **MongoDB** so we need to bring **Mongoose**, which(***Mongoose***) will be talking to **MongoDB**  or through that we will be using **MongoDB**.
  - We have added the schema with *first_name*, *last_name* and *phone* in contact.js
  - Now we need to connect to our **MongoDB**. In app.js for the connection we will be using `mongoose.connect` function
  - After connection is made we made to function one for after `connected` and second if we have any error in connection with argument `error`.


  **Creating API**
  - Now we are going to create API for retriving contacts or adding or deleting contacts from database.

    **GET**
    - So, first we need to bring the contact schema that we have created in *models/contact.js* file to *route.js*
      - using `const Contact = require('../models/contacts');`
  
    - Using in get() functions
      - ```
        router.get('/contacts', (req, res, next) => {
          // for retreiving contact we will be using find 
          Contact.find((err, contacts) => {
              res.json(contacts);
          })
        });
        ```
      - After retriving the contacts all the contact of the contact list will be  saved in the variable contacts( used in `res.json      (contacts)`), which we are sending or responding back to our client in JSON format.\
      
    **POST**
    - In post first we will create a new contact of type Contact(used in schema). We will be giving the arguments in Contact as the input.
      - ```
        let newContact = new Contact({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone: req.body.phone,
        })
        ```
      - Now we want to insert this new contact in our database for that we will use newContact.save() with *callback function*.
      - **callback funtion**: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. Example in newContact.save() we are using another arrow function.
      - Our post function Looks like 
        - ```
        - router.post('/contacts', (req, res, next) => {
            // logic to add contact
            let newContact = new Contact({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
            })

            newContact.save((err, contact) => {
                if(err){
                    res.json({msg: 'Failed to add contact'});
                }
                else {
                    res.json({msg: 'Contact added succesfully'});
                }
            })
          });
          ```
          
    **DELETE**
    - When you are inserting any data in database what **MongoDB** does is it create a ID for each document or each contact. Using that very particular ID we will be deleting that particular contact.js*
    - From client side we'll be recieving that very particular request for deleting that particular contact then using that very ID we're gonna issue our delete command.
    - We will use *Contact.remove()* function and give the `_id: req.params.id` with a callback function.
    - Our delete function looks like 
      - ```
          router.delete('/contacts/:id', (req, res, next) => {
            // logic to add contact
            Contact.remove({_id: req.params.id}, (err, result){
                if(err) {
                    res.json(err);
                } 
                else {
                    res.json(result);
                }
            })
          });
        ```

    - **Checking API**
    - We will use **POSTMAN** for checking the API.
    - giving the **POST** request in **post man** with 
      - header => key: "content-type" and value: "application/json"
      - body =>
          {
            "first_name": "Nitin",
            "last_name": "Bhasneria",
            "phone": "9988776644"
          }
      - adding url "*localhost:3000/api/contacts*"

    - In **GET** we will see the following output for
      - {
            "_id": "6081a85be529723058432e40",
            "first_name": "Nitin",
            "last_name": "Bhasneria",
            "phone": "9988776644",
            "__v": 0
        } 
      - As we can see we have autogenerated id for our contact.

    - In **DELETE** lets copy the id from **GET** request and make the url "*localhost:3000/api/contacts/:id*"
      - In my case "*localhost:3000/api/contacts/:id6081a86de529723058432e41*"  this will delete the contact. You can recheck by giving the get request.

## Day 3 23/04/2012
  - Just started checking out my code and encountered one error.
  - I was checking the app.js code and checkout out that this code is still there.
    ```
      app.get('/', (req, res) => {
        res.send('Hello World!');
      })
    ```
    So, I thought, going to *localhost:3000/* will still be giving *Hello World!*. But the page was just blank and I tried a lot of time but still its blanked. I wondered why and googled it.
    And and and I got the answer. I
    ***ANSWER***: *Since you're using /public in your middleware, only requests with /public will be looked in the static folder*.
    When I commented out the public line in app.js I got no issue and Hello World! Occured.
    PS: is you had the code
    ```
      app.get('/', (req, res) => {
        res.send('Hello World!');
      })
    ```
    Then there will be no issue in displaying Hello World! it was just an issue when path is "/".

  - Also you should checkout the concept of [Middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.router).

  - 