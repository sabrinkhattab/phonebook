// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {IContact} from '../models/contact';


@Component({
  selector : 'app-contacts',
  templateUrl : './myContacts.component.html',
  styleUrls : ['./myContacts.component.css']
})
export  class MyContactsComponent implements OnInit {
  contacts: IContact[];
  constructor(private contactsService: ContactsService) {
  }


  ngOnInit() {
     this.contactsService.getContacts().subscribe(response => {
       this.contacts = response;
     });
  }

  deleteContact(contact: IContact) {
    this.contacts = this.contacts.filter(item => item.id !== contact.id);
    this.contactsService.deleteContact(contact).subscribe();
  }
  addNewContact(contact: IContact) {
    // tslint:disable-next-line:no-shadowed-variable
    this.contactsService.addContact(contact).subscribe(contact => {
      this.contacts.push(contact);
    });
  }

}
