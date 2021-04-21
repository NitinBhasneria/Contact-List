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

## Node.js
  - Node.js is a server-side JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Follows the event-driven architecture, where there is a single thread mechanism to process your events.
  - Events will be done asynchronously, i.e. if we have multiple event process one vent wont wait for other to complete. It can process multiple request at the same time. So, this event-driven architecture makes out node.js server highly optimal and scalable. 
  - PS: For understanding difference between event-driven and request-driven(used in old framework) refer [this](https://www.techtalksbyanvita.com/post/event-driven-vs-request-driven-rest-architecture). See this what is event-driven.

### Installation
  - [Intall here](https://nodejs.org/en/download/)   
  - Step 1: Download latest or recommended node .tar.xz file from https://nodejs.org/en/

or you can download node version 14.15.5 (.tar.xz file) directly from here ->

https://nodejs.org/dist/v14.15.5/node-v14.15.5-linux-x64.tar.xz

Step 2: Go to the directory in which (.tar.xz file) is downloaded.

In my case --> /Download directory

Step 3: Update System Repositories

sudo apt update

Step 4: Install the package xz-utils

sudo apt install xz-utils

Step 5: To Extract the .tar.xz file

sudo tar -xvf name_of_file

In my case --> sudo tar -xvf node-v14.15.5-linux-x64.tar.xz

Step 6: sudo cp -r directory_name/{bin,include,lib,share} /usr/

In my case --> sudo cp -r node-v14.15.5-linux-x64/{bin,include,lib,share} /usr/

Step 7: Check the node version

node --version

Result In my case -> v14.15.5

# CRUD Operation
![curd](https://user-images.githubusercontent.com/44112080/115576720-658cce00-a2e1-11eb-88c0-26878f3f054a.png)