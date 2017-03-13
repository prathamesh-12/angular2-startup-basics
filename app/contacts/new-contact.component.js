System.register(['angular2/router', './contact.service', 'angular2/core'], function(exports_1, context_1) {
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
    var router_1, contact_service_1, core_1;
    var NewContactComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParams) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.passedLastName = "";
                }
                NewContactComponent.prototype.addNewContact = function (firstName, lastName, phone, email) {
                    var contact = {
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        email: email
                    };
                    this._contactService.insertNewContact(contact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent.prototype.ngOnInit = function () {
                    this.passedLastName = this._routeParams.get('lastName');
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        template: "\n            <div>\n                <label for=\"txt_firstName\">First Name</label>\n                <input type=\"text\" id=\"txt_firstName\" #firstName/>\n            </div>\n            <div>\n                <label for=\"txt_lastName\">Last Name</label>\n                <input type=\"text\" id=\"txt_lastName\" #lastName value={{passedLastName}}/>\n            </div>\n            <div>\n                <label for=\"txt_phone\">Phone</label>\n                <input type=\"text\" id=\"txt_phone\" #phone/>\n            </div>\n            <div>\n                <label for=\"txt_email\">Email</label>\n                <input type=\"text\" id=\"txt_email\" #email/>\n            </div>\n            <div>\n                <button (click)=\"addNewContact(firstName.value, lastName.value, phone.value, email.value)\">\n                    Add New Contact\n                </button>\n            </div>\n    ",
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL25ldy1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlDQTtnQkFJSSw2QkFBb0IsZUFBK0IsRUFBVSxPQUFlLEVBQ3hELFlBQXlCO29CQUR6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDeEQsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSHRDLG1CQUFjLEdBQUcsRUFBRSxDQUFDO2dCQUdxQixDQUFDO2dCQUVqRCwyQ0FBYSxHQUFiLFVBQWMsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSztvQkFDM0MsSUFBSSxPQUFPLEdBQVk7d0JBQ25CLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osS0FBSyxFQUFFLEtBQUs7cUJBQ2YsQ0FBQztvQkFFRixJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUQsc0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO2dCQWhETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxpNUJBc0JUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzlCLENBQUM7O3VDQUFBO2dCQXdCRiwwQkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQscURBc0JDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvbmV3LWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCB7IENvbnRhY3RTZXJ2aWNlIH0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInR4dF9maXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidHh0X2ZpcnN0TmFtZVwiICNmaXJzdE5hbWUvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfbGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0eHRfbGFzdE5hbWVcIiAjbGFzdE5hbWUgdmFsdWU9e3twYXNzZWRMYXN0TmFtZX19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHh0X3Bob25lXCI+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0eHRfcGhvbmVcIiAjcGhvbmUvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInR4dF9lbWFpbFwiICNlbWFpbC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkTmV3Q29udGFjdChmaXJzdE5hbWUudmFsdWUsIGxhc3ROYW1lLnZhbHVlLCBwaG9uZS52YWx1ZSwgZW1haWwudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29udGFjdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHBhc3NlZExhc3ROYW1lID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7fVxyXG5cclxuICAgIGFkZE5ld0NvbnRhY3QoZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmUsIGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3Q6IENvbnRhY3QgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jb250YWN0U2VydmljZS5pbnNlcnROZXdDb250YWN0KGNvbnRhY3QpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbnRhY3RzJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5wYXNzZWRMYXN0TmFtZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnbGFzdE5hbWUnKTtcclxuICAgIH1cclxufSJdfQ==
