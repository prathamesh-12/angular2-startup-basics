import { Component, OnInit } from 'angular2/core';
import { ContactComponent } from './contact.component'
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Component({
    selector: 'contact-list',
    template: `
        <div>
            <p [hidden]="!contactList">Click on contact below</p>
            <ul>
                <li 
                (click)="onNameClick(contact)" 
                class="contact-name" 
                *ngFor="#contact of contactList"
                [class.selectedContactStyle] = "selectedContact == contact">
                        {{contact.firstName}} {{contact.lastName}}
                </li>
            </ul>
            <contact *ngIf="selectedContact" [contact]="selectedContact"></contact>
        </div>
    `,
    directives : [ContactComponent],
    providers : [ContactService],
    styleUrls : ['../../src/css/contact-list.css']
})

export class ContactListComponent implements OnInit {
    /*public contactList = [
        {firstName : 'Alex', lastName : 'Lee', phone : '9988776655', email : 'alex@test.com'},
        {firstName : 'Brat', lastName : 'Martin', phone : '5566778899', email : 'brat@test.com'},
        {firstName : 'Chris', lastName : 'Kobel', phone : '1122334455', email : 'ch@test.com'},
        {firstName : 'Den', lastName : 'Novy', phone : '5544332211', email : 'dan@test.com'}
        ];*/
    public contactList : Contact[];
    hidden: boolean = false;

    //public showOtherInfo = false;
    public selectedContact = null;

    constructor(private _contactServive: ContactService) {}

    onNameClick(contact) {
        this.selectedContact = contact;
    }

    getContactList() {
        this._contactServive.getContacts().then(
            (contacts: Contact[]) => this.contactList = contacts);
    }

    ngOnInit() : any {
        this.getContactList();
    }
}
