System.register(['./contacts/test-route.component', './contacts/new-contact.component', 'angular2/core', './contacts/contact-list.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var test_route_component_1, new_contact_component_1, core_1, contact_list_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (test_route_component_1_1) {
                test_route_component_1 = test_route_component_1_1;
            },
            function (new_contact_component_1_1) {
                new_contact_component_1 = new_contact_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_list_component_1_1) {
                contact_list_component_1 = contact_list_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h2>Angular 2 Contact List App</h2>\n        <header>\n            <nav>\n                <a [routerLink]=\"['Contacts']\">Contacts</a>\n                <a [routerLink]=\"['NewContact']\">New Contact</a>\n                <a [routerLink]=\"['TestRoute']\">Test Route</a>\n            </nav>\n        </header>\n        <div class=\"main\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [contact_list_component_1.ContactListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/contacts',
                            name: 'Contacts',
                            component: contact_list_component_1.ContactListComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/newContact',
                            name: 'NewContact',
                            component: new_contact_component_1.NewContactComponent
                        },
                        {
                            path: '/testRoute',
                            name: 'TestRoute',
                            component: test_route_component_1.TestRouteComponent
                        },
                        {
                            path: '/newContact/:lastName',
                            name: 'ContactRouteWithParams',
                            component: new_contact_component_1.NewContactComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4Q0E7Z0JBQUE7Z0JBRUEsQ0FBQztnQkExQ0Q7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGlhQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixFQUFFLDBCQUFpQixDQUFDO3FCQUN4RCxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1Q7NEJBQ0ksSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLElBQUksRUFBRSxVQUFVOzRCQUNoQixTQUFTLEVBQUUsNkNBQW9COzRCQUMvQixZQUFZLEVBQUUsSUFBSTt5QkFDckI7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLGFBQWE7NEJBQ25CLElBQUksRUFBRSxZQUFZOzRCQUNsQixTQUFTLEVBQUUsMkNBQW1CO3lCQUNqQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsWUFBWTs0QkFDbEIsSUFBSSxFQUFFLFdBQVc7NEJBQ2pCLFNBQVMsRUFBRSx5Q0FBa0I7eUJBQ2hDO3dCQUNEOzRCQUNJLElBQUksRUFBRSx1QkFBdUI7NEJBQzdCLElBQUksRUFBRSx3QkFBd0I7NEJBQzlCLFNBQVMsRUFBRSwyQ0FBbUI7eUJBQ2pDO3FCQUNKLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0Um91dGVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3RzL3Rlc3Qtcm91dGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmV3Q29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRhY3RMaXN0Q29tcG9uZW50fSBmcm9tICcuL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoMj5Bbmd1bGFyIDIgQ29udGFjdCBMaXN0IEFwcDwvaDI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29udGFjdHMnXVwiPkNvbnRhY3RzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydOZXdDb250YWN0J11cIj5OZXcgQ29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnVGVzdFJvdXRlJ11cIj5UZXN0IFJvdXRlPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW0NvbnRhY3RMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL2NvbnRhY3RzJyxcclxuICAgICAgICBuYW1lOiAnQ29udGFjdHMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQ29udGFjdExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgdXNlQXNEZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcvbmV3Q29udGFjdCcsXHJcbiAgICAgICAgbmFtZTogJ05ld0NvbnRhY3QnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTmV3Q29udGFjdENvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnL3Rlc3RSb3V0ZScsXHJcbiAgICAgICAgbmFtZTogJ1Rlc3RSb3V0ZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBUZXN0Um91dGVDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy9uZXdDb250YWN0LzpsYXN0TmFtZScsXHJcbiAgICAgICAgbmFtZTogJ0NvbnRhY3RSb3V0ZVdpdGhQYXJhbXMnLFxyXG4gICAgICAgIGNvbXBvbmVudDogTmV3Q29udGFjdENvbXBvbmVudFxyXG4gICAgfVxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIFxyXG59Il19
