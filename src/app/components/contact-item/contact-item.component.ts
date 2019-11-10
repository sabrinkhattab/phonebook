import { Component, OnInit  , Input , EventEmitter , Output} from '@angular/core';
import {IContact} from '../models/contact';
import { faTrashAlt , faCheck , faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[tablerow]',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() contact: IContact;
  @Output() deleteContact: EventEmitter<IContact> = new EventEmitter();
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faCheck = faCheck;

  constructor() { }

  ngOnInit() {

  }
  onDeleteContact(contact) {
    this.deleteContact.emit(contact);
  }

  // getAllContacts() {
  //   this.contactsService.getAllContacts()
  //     .subscribe(data => {
  //       this.Contacts = data;
  //       console.log(this.Contacts);
  //
  //     });
  // }
}
