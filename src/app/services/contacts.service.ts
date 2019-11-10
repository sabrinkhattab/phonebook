import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import {IContact} from '../components/models/contact';
import {Observable} from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private  baseUrl = 'http://localhost:3000/contacts';
  constructor(private http: HttpClient) { }

  // getContacts(): Observable<IContact[]> {
  //   return this.http.get<IContact[]>(this.baseUrl);
  // }
  //
  // RegisterContacts(contact) {
  //   return this.http.post(this.baseUrl  , contact , {
  //     headers : new HttpHeaders({
  //       'Content-Type':  'application/json',
  //     })
  //   });
  // }
  //
  // DeleteContact(id: string) {
  //   return this.http.delete(this.baseUrl + `/${id}`);
  // }
  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.baseUrl);
  }

  // delete contact
  deleteContact(contact: IContact): Observable<IContact> {
    const url = `${this.baseUrl}/${contact.id}`;
    return this.http.delete<IContact>(url , httpOptions);
  }
  // add contact
  addContact(contact: IContact): Observable<IContact> {
    // @ts-ignore
    return this.http.post<IContact>(this.baseUrl , contact, httpOptions);
  }
}
