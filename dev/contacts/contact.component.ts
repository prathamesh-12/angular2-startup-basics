import { Router } from 'angular2/router';
import { Contact } from './contact';
import {Component} from 'angular2/core';

@Component({
    selector : 'contact',
    template : `
            <div>
                <label for="txt_firstName">First Name</label>
                <input type="text" [(ngModel)]="contact.firstName" id="txt_firstName"/>
            </div>
            <div>
                <label for="txt_lastName">Last Name</label>
                <input type="text" [(ngModel)]="contact.lastName" id="txt_lastName"/>
            </div>
            <div>
                <label for="txt_phone">Phone</label>
                <input type="text" [(ngModel)]="contact.phone" id="txt_phone"/>
            </div>
            <div>
                <label for="txt_email">Email</label>
                <input type="text" [(ngModel)]="contact.email" id="txt_email"/>
            </div>
            <div>
                <button (click)="onRouteWithParamsClicked()">Route With Params</button>
            </div>
        `,
    inputs : ['contact'],
    styles: [`
        label {
            display: inline-block;
            width: 150px;
        }
        input:text {
            width: 250px;
        }
    `]
})

export class ContactComponent {
    public contact: Contact= null;

    constructor(private _route: Router) {}

    onRouteWithParamsClicked() {
        this._route.navigate(['ContactRouteWithParams', {lastName: this.contact.lastName}]);
    }
}