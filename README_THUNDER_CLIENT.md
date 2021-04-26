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
    ![post](https://user-images.githubusercontent.com/44112080/116115954-3e1a7480-a6d8-11eb-821b-24279f63378f.png)

    
2. Giving the **GET** request
    ![get](https://user-images.githubusercontent.com/44112080/116115999-47a3dc80-a6d8-11eb-9076-1faa8dee5a52.png)


3. - In **DELETE** lets copy the id from **GET** request and make the url "*localhost:3000/api/contacts/:id*"
      - In my case "*localhost:3000/api/contacts/:id6081a86de529723058432e41*"  this will delete the contact. You can recheck by giving the get request.
    ![delete](https://user-images.githubusercontent.com/44112080/116116013-4b376380-a6d8-11eb-8604-ce1b0db44f2c.png)


## Conclusion
  POSTMAN no more needed. xD :>