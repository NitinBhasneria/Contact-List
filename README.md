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
        var express = require('express'); //importing express
        var mongoose = require('mongoose'); //importing mongoose
        var bodyparser = require('body-parser'); //importing body-parser
        var cors = require('cors'); //importing cors
        var path = require('path'); //haven't installed path because its one of the 
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
          ```
             router.post('/contacts', (req, res, next) => {
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
        ```
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

    **Checking API**
    - We will use **POSTMAN** for checking the API.
    - giving the **POST** request in **post man** with 
      - header => key: "content-type" and value: "application/json"
      - body =>
          {\
            "first_name": "Nitin",\
            "last_name": "Bhasneria",\
            "phone": "9988776644"\
          }
      - adding url "*localhost:3000/api/contacts*"

    - In **GET** we will see the following output for
      - {\
            "_id": "6081a85be529723058432e40",\
            "first_name": "Nitin",\
            "last_name": "Bhasneria",\
            "phone": "9988776644",\
            "__v": 0\
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

  **Client Application**
  - Now we are going to make client application where we will be making call for performing various kind of data operation that we have defined in our server side code.
  - Now we will be using Angular and we'll be creating view templates for show contacts and other features.
  - For that we will be using angular cli(Command Line Interface) that will be using to build our entire client side interface.
  - More about [Angular CLI](https://codeburst.io/how-to-build-an-angular-app-with-angular-cli-in-a-couple-of-minutes-43089d3ab272).
   
  - Go to project directory and follow up with this code `npm install @angular/cli`
  - Basically, angular cli will help you to bring all the boilerplate or all the files which is necessary to run your client-sede applicaiton. It will also provide you the code modules which we're gonna use in angular app.
  - Now we gonna go ahead with creating  a angular project for that we will use 
    `ng new client`
      - I got error while install angula/cli
        - I used this `npm install @angular/cli`
        - checked with `ng --version`, but got nothing.
        - Then I installed with  `npm install -g @angular/cli`. With -g it installs in global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.
        - Then in installing in global I got an permission issue so I used `sudo su` to go to root user and installed it.
        - Got is install successfully. Use `--force` if neccessary.
        - No check with `ng --version` you will get output like this
      
          ![contactList3](https://user-images.githubusercontent.com/44112080/115880701-a400c500-a468-11eb-8fd5-8e0778412c54.png)

      
      - creating project `ng new client` I have named our frontend code folder to be client.
      - I had got some options while installing for choosing yes/no, I didn't noticed them and ticked yes and choosen CSS for styling. Will check them later.
      - This will provideyou all the files.
  - You can see the "client" folder where you can see basic files like  
    - Basic component called as *app.component*
    - Basic module called as *app.module* where you will be specifying all the modules which you are going to use across tha pplication as well as components and services
    - We have *index.html* **which will be the file rendered at first place** to your web browser, which we have specified in out public folder.

  **Our Folders**
  - We have index.html which is the file that will be rendered at first place. 
  - In our index.html file we have `<app-root></app-root>` which will load our app.component.ts
  - So basically we will have AppComponent *class* to be rendered at first place. You can see this class in *app/app.component.ts*.
  - You can also see in *app.components.ts* the selector, templateUrl and Styles and defined.
  - So, for building angular applicaiton we use ***typescript*** language. And this AppComponent class is written in ***typescript***.
  - Now we have somethings as @ decorator Component(@Component) which tells angular that this very class is a  component and we have template url over here  which specify the template for our component which is *app.component.html* and css too.
  - For running this particular project use `npm start`..... (make sure you are in client folder).
  - Also, go can go with `ng serve` too.
  - Now go to *localhost:4200* and you will see this type of interface
    Interface may vary according to the version used. I am using 11.2.10
    
    ![contatlist4](https://user-images.githubusercontent.com/44112080/115880723-a95e0f80-a468-11eb-9813-1e9dfb15b392.png)


  MUST CHECK [ANGULAR LEARN](https://angular.io/tutorial) AFTER THIS PROJECT.
    
  - So this is the rendereing process:  index.html  --->>>  app.component.ts  --->>> app.component.html --->>>  render
  - I have replaced the app.component.html file's code with the
      ```
      <h1>
        {{title}}
      </h1>
      ```
      It is getting title from app.component.ts we call it interpolation or one-way data binding. We are binding the value of title with "client". Lets make it "Welcome to Contact List".
      you will see this output 

      ![contactlist5](https://user-images.githubusercontent.com/44112080/115889008-2d1bfa00-a471-11eb-916b-d14ab92bd773.png)

  - Notice that we used **nodemon** in server-side code (express app) for refreshing the changes while it is not required in angular app. It automatically watch for changes and restart the app.
  - You also notice the **ts** files, all this *ts* files are converted to *js* files and then rendered.
  
  ### Creating Components
   - Now we need a basic component "Contacts" for listing the contacts and other features like a form for adding or button for deleting the contacts.
    - For creating components use 
      `ng g component contacts` giving the name of component to be "contacts" 
    - We need a **service** too. Basically it is considered a good practice to seperate business logic or data retriving or data operations logic in a seperate file which we call as **service**. Then what we do is inject those services into component wherever necessary.
    - Add service with 
      `ng g service contact` a service of name contact
      - This command generate the service but did not provide the service so if you want to use the service you have to provide it in you @Component(@ Component Decorator)
    - We have *contact.service.ts* in *app* folder where we will be writing our business logic or our data retriving or data operations logic and we will have *contact* components where we will be creating our template and all the logic. 

  ### Creating Service
   - So we'll start with creating services so that we can  retrive the data first then we'll start with creating contacts.components
    - One more thing we need is the schema for our contact so lets make a file *contact.ts* (ts for **typescript**); 
    - Contact.ts we created a schema
      ```
      export class Contact{
        _id?: string;           // added ? for optional field
        first_name: string;
        last_name: string;
        phone: string;
      }
      ```
   - Here I got the error "Property 'phone' has no initializer and is not definitely assigned in the constructor." As in latest version of TypeScript the "Strict class initialization".
    - Solution: 
      - 1. Change Version
      - 2. Initialize.
      - I choose going with option2.
      - now code looks like:
        ```
        export class Contact{
            _id?: string;           // added ? for optional field
            first_name: string = "";
            last_name: string = "";
            phone: string = "";
        }
        ```
   - contact.service.ts
      - Now we need to import out HTTP  module for getting all HTTP methods for  retriving data or adding or deleting and all.
      - While importing Http got another error "Cannot find module '@angular/http' or its corresponding type declarations." So I was following th angular version2 but in angular5 they updated it and I am using angular 11 so that follows the same.
        ```
          import {HttpClientModule} from '@angular/common/http'
          import {HttpClient, HttpHeaders} from '@angular/common/http'
          **instead of HttpModule and Http respectively**
        ```

        used `import {HttpClient, HttpHeaders} from '@angular/common/http'`

      - Used HttpClient. 
      - Now we are going to create methods for retriving the contacts and others too.
      - So we have our services ready, now we'll be using  all of this methods into out component and  we're gonna use this methods for there functions and finally will do somthing on it like show contacts, adding or deleting.


  ## Adding code in components
   - **Dependency Injection**: Used in // line 16 in contact.components.the_silver_searcher
      - *Defination*: Dependency Injection is a practice where objects are designed in a manner where they receive instances of the objects from other pieces of code, instead of constructing them internally. This means that any object implementing the interface which is required by the object can be substituted in without changing the code, which simplifies testing, and improves decoupling.
    
   - Second thing is you have to provide your service to use it. // line 9
    
   - On let us retrive data, we'll be putting out retrieving data logic inside ngOnInit() method which will be initiated once your component is being loaded into your browser so every time you load  your component it will automatically call this very particularly method to retrieve all the data.  
    
   - Now remember we  know that the bootstrap component is app.component.html so we need to specify in our app.component.html that this particular component should be loaded so we will go to template app.component.html

   **ERROR/DOUBTS TILL NOW**
    1. Our map function is showing the vsCode error: *Property 'map' does not exist on type 'Observable<Object>'*
        *SOLUTION*: It is giving an error so I have import map as `import { map } from 'rxjs/operators';` and used pipe too, other thing is used `res:any`;
    2. In arguments we always have to give type, if we dont know we have to give "any"(contact.service.ts // line 21). So I want to know if it is necessary or it is just vscode error.
        *SOLUTION*: Although it is not giving any error but somethimes like in map error res: any is used so better prefer use any.

   - Lets create the template and display this very particular data.
   - For styling we need to refer to the bootstrap style sheet. [Bootswatch](https://bootswatch.com/)
   - Downloaded and imported the stylesheet in client/src/index.html


   ### ALL DONE BUT........
   - I am encoutering some error:
      
      1. Error: "Refused to apply style from 'http://localhost:4200/bootstrap.min.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled."
        *SOLUTION*: instead of `<link rel="stylesheet" href="./bootstrap.min.css">` use `<base href="./bootstrap.min.css" >`
      
     2. Error: "ERROR NullInjectorError: R3InjectorError(AppModule)[HttpClient -> HttpClient -> HttpClient]: 
  NullInjectorError: No provider for HttpClient!"   
        *SOLUTION*: To resolve this problem HttpClient is Angular's mechanism for communicating with a remote server over HTTP.
                    - To make HttpClient available everywhere in the app,
                    - open the root AppModule app/app.module.ts,
                    - `import the HttpClientModule from @angular/common/http`
                    - add it to the @NgModule.imports array.
                    - `imports:[HttpClientModule,  ]` 
     3. Error: "TypeError: res.json is not a function"
          *SOLUTION*: HttpClient.get() applies res.json() automatically and returns Observable<HttpResponse<string>>. You no longer need to call this function yourself. So removed the pipe and map function in getContacts() function in contact.service.ts and also changed the type(datatype) of contacts in contacts.component.ts line 13 to "any" from "Contact[]". 
      4. Problem: "I am unable to import my bootstrap.css"
          *SOLUTION*: import the bootstrap.css or any other css file in styles.css as `@import './bootstrap.css'`

  After having all problem solved got the output as: 

  ![contactlist6](https://user-images.githubusercontent.com/44112080/115910718-cc012000-a48a-11eb-93ee-4b87a767a6bb.png)
