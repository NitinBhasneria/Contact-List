import { Component, OnInit } from '@angular/core';
import { ContactService } from './../contact.service'; // importing services
import { Contact } from './../contact'; //importing schema

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService], //A provider is an object declared to Angular so that it can be injected in the constructor of your components, directives and other classes instantiated by Angular.
})
export class ContactsComponent implements OnInit {
  contacts: any; // The this contacts use in ngOnInit() function is this contacts array.
  contact: Contact = new Contact();
  first_name: string = '';
  last_name: string = '';
  phone: string = '';

  // here ContactService is type(data type) of Contact Service and this very process is called dependency injection.
  constructor(private ContactService: ContactService) {}

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
    };
    this.ContactService.addContact(newContact).subscribe((contact) => {
      this.contacts.push(contact);
      this.ContactService.getContacts().subscribe(
        (contacts) => (this.contacts = contacts)
      );
    });
  }

  deleteContact(id: any) {
    var contacts = this.contacts; //this.contacts refer to contacts declared in line 13
    this.ContactService.deleteContact(id).subscribe((data: any) => {
      if (data.n == 1) {
        // deleting the contacts htat is already stored in our array of contacts(this.contacts)
        for (var i = 0; i < contacts.length; i++) {
          if (contacts[i]._id == id) {
            contacts.splice(i, 1);
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.ContactService.getContacts().subscribe(
      (contacts) => (this.contacts = contacts)
    ); // since it will be returning an observable we need to subscribe that
  }
}
