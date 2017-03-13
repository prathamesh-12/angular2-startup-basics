System.register(['angular2/core', './mock-contact'], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.insertNewContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzL2NvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO2dCQVVBLENBQUM7Z0JBVEcsb0NBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBUSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQseUNBQWdCLEdBQWhCLFVBQWtCLE9BQWdCO29CQUM5QixPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQyxJQUFJLENBQzFCLFVBQUMsUUFBbUIsSUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUNyRCxDQUFDO2dCQUNOLENBQUM7Z0JBWEw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBWWIscUJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELDJDQVVDLENBQUEiLCJmaWxlIjoiY29udGFjdHMvY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ09OVEFDVFMgfSBmcm9tICcuL21vY2stY29udGFjdCdcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XHJcbiAgICBnZXRDb250YWN0cygpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnROZXdDb250YWN0IChjb250YWN0OiBDb250YWN0KSB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKENPTlRBQ1RTKS50aGVuKFxyXG4gICAgICAgICAgICAoY29udGFjdHM6IENvbnRhY3RbXSkgPT4ge2NvbnRhY3RzLnB1c2goY29udGFjdCk7fVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19
