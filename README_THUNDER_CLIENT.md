# THUNDER CLIENT
    This is the extension which we can see as a light weight **POSTMAN**. So, we are going to use it and see how to use and is it efficient like **POSTMAN** or not. 

    Okay. So, after installing the thunder client extension we have a logo of thunder client in left corner. 

## Process
1. Giving the **POST** request in **thunder client** with 
      - header => key: "content-type" and value: "application/json"
      - body =>
          {\
            "first_name": "Nitin",\
            "last_name": "Bhasneria",\
            "phone": "9988776644"\
          }
      - adding url "*localhost:3000/api/contacts*"

    
2. Giving the **GET** request


3. - In **DELETE** lets copy the id from **GET** request and make the url "*localhost:3000/api/contacts/:id*"
      - In my case "*localhost:3000/api/contacts/:id6081a86de529723058432e41*"  this will delete the contact. You can recheck by giving the get request.
    