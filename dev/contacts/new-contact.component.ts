import { OnInit } from 'angular2/src/core/linker/interfaces';
import { RouteParams, Router } from 'angular2/router';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { Component} from 'angular2/core';

@Component({
    template: `
            <div>
                <label for="txt_firstName">First Name</label>
                <input type="text" id="txt_firstName" #firstName/>
            </div>
            <div>
                <label for="txt_lastName">Last Name</label>
                <input type="text" id="txt_lastName" #lastName value={{passedLastName}}/>
            </div>
            <div>
                <label for="txt_phone">Phone</label>
                <input type="text" id="txt_phone" #phone/>
            </div>
            <div>
                <label for="txt_email">Email</label>
                <input type="text" id="txt_email" #email/>
            </div>
            <div>
                <button (click)="addNewContact(firstName.value, lastName.value, phone.value, email.value)">
                    Add New Contact
                </button>
            </div>
    `,
    providers: [ContactService]
})

export class NewContactComponent implements OnInit {

    public passedLastName = "";

    constructor(private _contactService: ContactService, private _router: Router,
                private _routeParams: RouteParams) {}

    addNewContact(firstName, lastName, phone, email) {
        let contact: Contact = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        
        this._contactService.insertNewContact(contact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit(): any {
        this.passedLastName = this._routeParams.get('lastName');
    }
}