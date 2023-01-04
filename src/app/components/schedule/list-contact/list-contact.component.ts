import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from '../../../interfaces/Contact';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  // Atributos
  public listContacts: Contact[];

  // Inyecto el servicio de ContactService
  constructor(
    private contactService: ContactService
  ) {
    this.listContacts = [];
  }

  ngOnInit() {
    // Si la lista de contactos no esta vacia, lo recuperamos
    if(this.contactService.listContacts.length > 0){
      this.listContacts = this.contactService.listContacts;
    }else{
      // Si esta vacia, lo recuperamos del fichero
      this.contactService.getData('assets/data/contacts.json').subscribe(list => {
        this.listContacts = list;
      });
    }

    console.log(this.contactService.listContacts);

  }

}
