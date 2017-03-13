System.register(['angular2/router', 'angular2/core'], function(exports_1, context_1) {
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
    var router_1, core_1;
    var ContactComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_route) {
                    this._route = _route;
                    this.contact = null;
                }
                ContactComponent.prototype.onRouteWithParamsClicked = function () {
                    this._route.navigate(['ContactRouteWithParams', { lastName: this.contact.lastName }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n            <div>\n                <label for=\"txt_firstName\">First Name</label>\n                <input type=\"text\" [(ngModel)]=\"contact.firstName\" id=\"txt_firstName\"/>\n            </div>\n            <div>\n                <label for=\"txt_lastName\">Last Name</label>\n                <input type=\"text\" [(ngModel)]=\"contact.lastName\" id=\"txt_lastName\"/>\n            </div>\n            <div>\n                <label for=\"txt_phone\">Phone</label>\n                <input type=\"text\" [(ngModel)]=\"contact.phone\" id=\"txt_phone\"/>\n            </div>\n            <div>\n                <label for=\"txt_email\">Email</label>\n                <input type=\"text\" [(ngModel)]=\"contact.email\" id=\"txt_email\"/>\n            </div>\n            <div>\n                <button (click)=\"onRouteWithParamsClicked()\">Route With Params</button>\n            </div>\n        ",
                        inputs: ['contact'],
                        styles: ["\n        label {\n            display: inline-block;\n            width: 150px;\n        }\n        input:text {\n            width: 250px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUdJLDBCQUFvQixNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBRjNCLFlBQU8sR0FBVyxJQUFJLENBQUM7Z0JBRU8sQ0FBQztnQkFFdEMsbURBQXdCLEdBQXhCO29CQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsd0JBQXdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFNBQVM7d0JBQ3BCLFFBQVEsRUFBRyxvNEJBb0JOO3dCQUNMLE1BQU0sRUFBRyxDQUFDLFNBQVMsQ0FBQzt3QkFDcEIsTUFBTSxFQUFFLENBQUMsK0pBUVIsQ0FBQztxQkFDTCxDQUFDOztvQ0FBQTtnQkFVRix1QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsK0NBUUMsQ0FBQSIsImZpbGUiOiJjb250YWN0cy9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ2NvbnRhY3QnLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHh0X2ZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb250YWN0LmZpcnN0TmFtZVwiIGlkPVwidHh0X2ZpcnN0TmFtZVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHh0X2xhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY29udGFjdC5sYXN0TmFtZVwiIGlkPVwidHh0X2xhc3ROYW1lXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0eHRfcGhvbmVcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cImNvbnRhY3QucGhvbmVcIiBpZD1cInR4dF9waG9uZVwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHh0X2VtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJjb250YWN0LmVtYWlsXCIgaWQ9XCJ0eHRfZW1haWxcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Sb3V0ZVdpdGhQYXJhbXNDbGlja2VkKClcIj5Sb3V0ZSBXaXRoIFBhcmFtczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgLFxyXG4gICAgaW5wdXRzIDogWydjb250YWN0J10sXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6dGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xyXG4gICAgcHVibGljIGNvbnRhY3Q6IENvbnRhY3Q9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGU6IFJvdXRlcikge31cclxuXHJcbiAgICBvblJvdXRlV2l0aFBhcmFtc0NsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGUubmF2aWdhdGUoWydDb250YWN0Um91dGVXaXRoUGFyYW1zJywge2xhc3ROYW1lOiB0aGlzLmNvbnRhY3QubGFzdE5hbWV9XSk7XHJcbiAgICB9XHJcbn0iXX0=
