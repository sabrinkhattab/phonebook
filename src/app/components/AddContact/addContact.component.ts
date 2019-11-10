// @ts-ignore
import {Component , EventEmitter , Output} from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {MyContactsComponent} from '../myContacts/myContacts.component';


@Component({
  providers: [MyContactsComponent],
  selector : 'app-add-contact',
  templateUrl : './addContact.component.html',
  styleUrls : ['./addContact.component.css']
})
export  class AddContactComponent {
  @Output() addContact: EventEmitter<any> = new EventEmitter();
  name: string;
  phone: string;

  constructor(private contactsservice: ContactsService , private myContactsComp: MyContactsComponent) {

  }
  onSubmit(contact) {
      // @ts-ignore
    const uuidv1 = require('uuid/v1');
    contact.id =  uuidv1();
    this.addContact.emit(contact);
  }
  // RegisterContact(contact) {
  //   // @ts-ignore
  //   const uuidv1 = require('uuid/v1');
  //   contact.id =  uuidv1();
  //   console.log(contact);
  //   this.contactsservice.RegisterContacts(contact).subscribe(response => {
  //     console.log('added item' , response);
  //     this.callMyContactsComponent();
  //   });
  // }
  // public callMyContactsComponent() {
  //   this.myContactsComp.ngOnInit();
  // }
}
