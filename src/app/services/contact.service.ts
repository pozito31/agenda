import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Contact } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _listContacts: Contact[];

  constructor(private http: HttpClient) {
    this._listContacts = [];
  }

  get listContacts(): Contact[] {
    return this._listContacts;
  }

  addContact(contact: Contact) {
    this._listContacts.push(contact);
  }

  getData(path: string) {
    return this.http.get<Contact[]>(path).pipe(
      map(list => {
        this._listContacts = list;
        return list;
      })
    );
  }
}
