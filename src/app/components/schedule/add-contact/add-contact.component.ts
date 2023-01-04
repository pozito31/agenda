import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  public contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: Router
  ) {
    this.contact = {
      'name': '',
      'surname': '',
      'description': '',
      'sex': 'hombre',
      'email': '',
      'telephone': '',
      'company': ''
    }
  }

  addContact() {
    console.log(this.contact);
    this.contactService.addContact(this.contact);
    this.route.navigate(['/list-contact']);
  }

}
