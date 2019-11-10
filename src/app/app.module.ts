import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyContactsComponent} from './components/myContacts/myContacts.component';
import {SearchComponent} from './components/Search/search.component';
import {AddContactComponent} from './components/AddContact/addContact.component';
import {ContactsService} from './services/contacts.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContactsComponent,
    SearchComponent,
    AddContactComponent,
    HeaderComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
