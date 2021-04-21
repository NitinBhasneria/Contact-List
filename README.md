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

## Day 1: 21/04/2021  9:45 PM
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
  - Writing the app.js starting \
    - // Importing Module
        `var express = require('express');` //importing express\
        `var mongoose = require('mongoose');` //importing mongoose\
        `var bodyparser = require('body-parser');` //importing body-parser\
        `var cors = require('cors');` //importing cors\
        `var path = require('path');` //haven't installed path because its one of the code module so we dont have to install it seperately\

    - // For using express we need to assign the express method to a variable\
        `var app = express();`\

    - // port number \
        `const port = 3000;`\

    -  // we need to add a route so that if we go to localhost:3000 then we neeed to specify what it needs to render for that homepage route.\
    `app.get('/', (req, res) => {`&nbsp;
    `    res.send('Hello World!');`\
    `})`\

    - // bind server with this port number\
    `app.listen(port, ()=>{`\
    `    console.log("Server started at port:"+port);`\
    `})`\