import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Contact} from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    // private http: HttpClient is for using the http module
    constructor(private http: HttpClient) { }

    // retrieving contacts
    getContacts(){
      // return all contacts which we will be getting through while I cm calling to my API.
      return this.http.get('http://localhost:3000/api/contacts');
    }

    //add contacts
    addContact(newContact: Contact) {   // used any type
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/contacts', newContact, {headers:headers})
            .pipe(map((res:any) => res.json())
            ); 
    }

    //delete contacts
    deleteContact(id:any) {
      return this.http.delete('http://localhost:3000/api/contacts/'+id)
            .pipe(map((res:any) => res.json())
            );
    }
}
