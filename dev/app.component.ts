import { TestRouteComponent } from './contacts/test-route.component';
import { NewContactComponent } from './contacts/new-contact.component';
import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <h2>Angular 2 Contact List App</h2>
        <header>
            <nav>
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contact</a>
                <a [routerLink]="['TestRoute']">Test Route</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactListComponent,
        useAsDefault: true
    },
    {
        path: '/newContact',
        name: 'NewContact',
        component: NewContactComponent
    },
    {
        path: '/testRoute',
        name: 'TestRoute',
        component: TestRouteComponent
    },
    {
        path: '/newContact/:lastName',
        name: 'ContactRouteWithParams',
        component: NewContactComponent
    }
])
export class AppComponent {
    
}