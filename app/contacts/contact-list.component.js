System.register(['angular2/core', './contact.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, contact_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactServive) {
                    this._contactServive = _contactServive;
                    this.hidden = false;
                    //public showOtherInfo = false;
                    this.selectedContact = null;
                }
                ContactListComponent.prototype.onNameClick = function (contact) {
                    this.selectedContact = contact;
                };
                ContactListComponent.prototype.getContactList = function () {
                    var _this = this;
                    this._contactServive.getContacts().then(function (contacts) { return _this.contactList = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContactList();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-list',
                        template: "\n        <div>\n            <p [hidden]=\"!contactList\">Click on contact below</p>\n            <ul>\n                <li \n                (click)=\"onNameClick(contact)\" \n                class=\"contact-name\" \n                *ngFor=\"#contact of contactList\"\n                [class.selectedContactStyle] = \"selectedContact == contact\">\n                        {{contact.firstName}} {{contact.lastName}}\n                </li>\n            </ul>\n            <contact *ngIf=\"selectedContact\" [contact]=\"selectedContact\"></contact>\n        </div>\n    ",
                        directives: [contact_component_1.ContactComponent],
                        providers: [contact_service_1.ContactService],
                        styleUrls: ['../../src/css/contact-list.css']
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBYUksOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBTG5ELFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBRXhCLCtCQUErQjtvQkFDeEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7Z0JBRXdCLENBQUM7Z0JBRXZELDBDQUFXLEdBQVgsVUFBWSxPQUFPO29CQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDZDQUFjLEdBQWQ7b0JBQUEsaUJBR0M7b0JBRkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ25DLFVBQUMsUUFBbUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxFQUEzQixDQUEyQixDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBaERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSwyakJBY1Q7d0JBQ0QsVUFBVSxFQUFHLENBQUMsb0NBQWdCLENBQUM7d0JBQy9CLFNBQVMsRUFBRyxDQUFDLGdDQUFjLENBQUM7d0JBQzVCLFNBQVMsRUFBRyxDQUFDLGdDQUFnQyxDQUFDO3FCQUNqRCxDQUFDOzt3Q0FBQTtnQkE2QkYsMkJBQUM7WUFBRCxDQTNCQSxBQTJCQyxJQUFBO1lBM0JELHVEQTJCQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3RzL2NvbnRhY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LmNvbXBvbmVudCdcclxuaW1wb3J0IHsgQ29udGFjdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIFtoaWRkZW5dPVwiIWNvbnRhY3RMaXN0XCI+Q2xpY2sgb24gY29udGFjdCBiZWxvdzwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uTmFtZUNsaWNrKGNvbnRhY3QpXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbnRhY3QtbmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiI2NvbnRhY3Qgb2YgY29udGFjdExpc3RcIlxyXG4gICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkQ29udGFjdFN0eWxlXSA9IFwic2VsZWN0ZWRDb250YWN0ID09IGNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tjb250YWN0LmZpcnN0TmFtZX19IHt7Y29udGFjdC5sYXN0TmFtZX19XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8Y29udGFjdCAqbmdJZj1cInNlbGVjdGVkQ29udGFjdFwiIFtjb250YWN0XT1cInNlbGVjdGVkQ29udGFjdFwiPjwvY29udGFjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzIDogW0NvbnRhY3RDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzIDogW0NvbnRhY3RTZXJ2aWNlXSxcclxuICAgIHN0eWxlVXJscyA6IFsnLi4vLi4vc3JjL2Nzcy9jb250YWN0LWxpc3QuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvKnB1YmxpYyBjb250YWN0TGlzdCA9IFtcclxuICAgICAgICB7Zmlyc3ROYW1lIDogJ0FsZXgnLCBsYXN0TmFtZSA6ICdMZWUnLCBwaG9uZSA6ICc5OTg4Nzc2NjU1JywgZW1haWwgOiAnYWxleEB0ZXN0LmNvbSd9LFxyXG4gICAgICAgIHtmaXJzdE5hbWUgOiAnQnJhdCcsIGxhc3ROYW1lIDogJ01hcnRpbicsIHBob25lIDogJzU1NjY3Nzg4OTknLCBlbWFpbCA6ICdicmF0QHRlc3QuY29tJ30sXHJcbiAgICAgICAge2ZpcnN0TmFtZSA6ICdDaHJpcycsIGxhc3ROYW1lIDogJ0tvYmVsJywgcGhvbmUgOiAnMTEyMjMzNDQ1NScsIGVtYWlsIDogJ2NoQHRlc3QuY29tJ30sXHJcbiAgICAgICAge2ZpcnN0TmFtZSA6ICdEZW4nLCBsYXN0TmFtZSA6ICdOb3Z5JywgcGhvbmUgOiAnNTU0NDMzMjIxMScsIGVtYWlsIDogJ2RhbkB0ZXN0LmNvbSd9XHJcbiAgICAgICAgXTsqL1xyXG4gICAgcHVibGljIGNvbnRhY3RMaXN0IDogQ29udGFjdFtdO1xyXG4gICAgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy9wdWJsaWMgc2hvd090aGVySW5mbyA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlbGVjdGVkQ29udGFjdCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpdmU6IENvbnRhY3RTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG9uTmFtZUNsaWNrKGNvbnRhY3QpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29udGFjdCA9IGNvbnRhY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGFjdExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpdmUuZ2V0Q29udGFjdHMoKS50aGVuKFxyXG4gICAgICAgICAgICAoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gdGhpcy5jb250YWN0TGlzdCA9IGNvbnRhY3RzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIDogYW55IHtcclxuICAgICAgICB0aGlzLmdldENvbnRhY3RMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
