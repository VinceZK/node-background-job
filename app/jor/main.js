"use strict";
(self["webpackChunkjson_on_relations"] = self["webpackChunkjson_on_relations"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const routes = [
    { path: 'entity', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dialog_service_ts-src_app_work-protection_guard_ts-node_modules_ng-bootstrap_-0b9869"), __webpack_require__.e("src_app_entity_entity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./entity/entity.module */ 51475)).then(m => m.EntityModule) },
    { path: 'model', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_dialog_service_ts-src_app_work-protection_guard_ts-node_modules_ng-bootstrap_-0b9869"), __webpack_require__.e("src_app_model_model_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./model/model.module */ 28010)).then(m => m.ModelModule) },
    { path: '', redirectTo: '/entity/list', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 33088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jor-angular */ 3425);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ui-message-angular */ 64885);
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./msgStore */ 87534);
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ui-logon-angular */ 11579);
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.service */ 8934);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AppComponent = class AppComponent {
    constructor(entityService, identityService, messageService, logonService) {
        this.entityService = entityService;
        this.identityService = identityService;
        this.messageService = messageService;
        this.logonService = logonService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.originalHost);
        this.logonService.setHost(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.originalHost);
        this.logonService.session().subscribe(data => {
            this.identityService.setSession(data);
            this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_3__.msgStore, this.identityService.Session.LANGUAGE);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: jor_angular__WEBPACK_IMPORTED_MODULE_5__.EntityService },
    { type: _identity_service__WEBPACK_IMPORTED_MODULE_4__.IdentityService },
    { type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__.MessageService },
    { type: ui_logon_angular__WEBPACK_IMPORTED_MODULE_7__.LogonService }
];
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.reuse.strategy */ 16850);
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jor-angular */ 3425);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            jor_angular__WEBPACK_IMPORTED_MODULE_6__.JorAngularModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouteReuseStrategy, useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_2__.CustomReuseStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 16850:
/*!******************************************!*\
  !*** ./src/app/custom.reuse.strategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomReuseStrategy": () => (/* binding */ CustomReuseStrategy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CustomReuseStrategy = class CustomReuseStrategy {
    constructor() {
        this.routesToCache = ['list'];
        this.storedRouteHandles = new Map();
    }
    /**
     * When navigation from a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the current route should be stored.
     * @param route
     */
    shouldDetach(route) {
        // console.log('detaching', route);
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }
    /**
     * If the current route need to be stored, that is shouldDetach return true,
     * then on this method, you can implement a way to store routes. Usually in a Map.
     * @param route
     * @param handle
     */
    store(route, handle) {
        // console.log('store', route);
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    }
    /**
     * When navigation to a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the target component can be get from a reuse buffer.
     * @param route
     */
    shouldAttach(route) {
        // console.log('shouldAttach', route);
        return this.storedRouteHandles.has(route.routeConfig.path);
    }
    /**
     * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
     * @param route
     */
    retrieve(route) {
        return this.storedRouteHandles.get(route.routeConfig.path);
    }
    /**
     * By default, Angular doesn't re-initializing the same component if the navigation is not to
     * a different one. For example, you switch different entity ID in the same entity type detail page.
     * In this way, shouldReuseRoute should return true to avoid executing other methods in this Class.
     * However, if you navigate from search&list component to entity detail component, then the method should return false.
     * So that other methods can be executed to decide whether the search&list component should be stored for future reuse.
     * @param future
     * @param curr
     */
    shouldReuseRoute(future, curr) {
        // console.log('shouldReuseRoute, future:', future, 'current:', curr);
        return future.routeConfig === curr.routeConfig;
    }
};
CustomReuseStrategy = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()
], CustomReuseStrategy);



/***/ }),

/***/ 8934:
/*!*************************************!*\
  !*** ./src/app/identity.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityService": () => (/* binding */ IdentityService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ui_logon_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-logon-angular */ 11579);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let IdentityService = class IdentityService {
    constructor() {
    }
    setSession(data) {
        this.session = data;
    }
    get Session() {
        if (this.session) {
            return this.session;
        }
        const defaultSession = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_0__.Session();
        defaultSession.USER_ID = 'DH001';
        defaultSession.LANGUAGE = 'EN';
        return defaultSession;
    }
    get CurrentTime() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
    }
};
IdentityService.ctorParameters = () => [];
IdentityService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], IdentityService);



/***/ }),

/***/ 87534:
/*!*****************************!*\
  !*** ./src/app/msgStore.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "msgStore": () => (/* binding */ msgStore)
/* harmony export */ });
const msgStore = [
    { msgCat: 'EXCEPTION',
        msgName: 'GENERIC',
        msgText: {
            EN: { shortText: 'Exception Occurs in Operation: %s',
                longText: '%s2' }
        }
    },
    { msgCat: 'EXCEPTION',
        msgName: 'SESSION_EXPIRED',
        msgText: {
            EN: { shortText: 'Your session is expired',
                longText: 'Your session is expired, please <a href="/logon">re-logon</a>' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'NO_CHANGE',
        msgText: {
            EN: { shortText: 'No Change is made, nothing is saved!', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'HAS_ERRORS',
        msgText: {
            EN: { shortText: 'The form has errors, please check!', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'ENTITY_SAVED',
        msgText: {
            EN: { shortText: 'Entity instance is saved!', longText: '' }
        }
    },
    { msgCat: 'ENTITY',
        msgName: 'ENTITY_DELETED',
        msgText: {
            EN: { shortText: 'Entity instance is deleted!', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'PARTNER_ENTITY_ID_MISSING',
        msgText: {
            EN: { shortText: 'Partner Entity ID is Missing', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'PARTNER_INSTANCE_GUID_MISSING',
        msgText: {
            EN: { shortText: 'Partner Instance GUID is Missing', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'VALID_TO_EMPTY',
        msgText: {
            EN: { shortText: 'Valid To is Mandatory', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'VALID_FROM_AFTER_VALID_TO',
        msgText: {
            EN: { shortText: 'Valid From time must be before Valid To', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'MANDATORY_ATTRIBUTE_MISSING',
        msgText: {
            EN: { shortText: 'Mandatory attribute must be given values', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'RELATIONSHIP_MANDATORY',
        msgText: {
            EN: { shortText: 'Relationship is mandatory', longText: '' }
        }
    },
    { msgCat: 'RELATIONSHIP',
        msgName: 'RELATIONSHIP_ALREADY_EXISTS',
        msgText: {
            EN: { shortText: 'Relationship %s already exists!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'NO_CHANGE',
        msgText: {
            EN: { shortText: 'No Change is made, nothing is saved!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'INVALID_DATA',
        msgText: {
            EN: { shortText: 'Data is invalid, please check!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'ENTITY_ID_MISSING',
        msgText: {
            EN: { shortText: 'Entity Type ID is missing', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'ENTITY_TYPE_SAVED',
        msgText: {
            EN: { shortText: 'Entity Type "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'ROLE_SAVED',
        msgText: {
            EN: { shortText: 'Role "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATION_ID_MISSING',
        msgText: {
            EN: { shortText: 'Relation ID is missing', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATION_PRIMARY_KEY_MISSING',
        msgText: {
            EN: { shortText: 'Relation must have at least one attribute as the primary key', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING',
        msgText: {
            EN: { shortText: 'There are no fields-mappings defined for association \'%s\'', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATION_SAVED',
        msgText: {
            EN: { shortText: 'Relation "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATIONSHIP_SAVED',
        msgText: {
            EN: { shortText: 'Relationship "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'RELATIONSHIP_LACK_INVOLVED_ROLES',
        msgText: {
            EN: { shortText: 'A relationship must at least have 2 involved roles', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'DATA_ELEMENT_SAVED',
        msgText: {
            EN: { shortText: 'Data element "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'DATA_DOMAIN_SAVED',
        msgText: {
            EN: { shortText: 'Data domain "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'MINIMUM_ONE_DOMAIN_VALUE',
        msgText: {
            EN: { shortText: 'At least one domain value is needed!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'SEARCH_HELP_SAVED',
        msgText: {
            EN: { shortText: 'Search Help "%s" is saved', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'MINIMUM_ONE_SEARCH_FIELD',
        msgText: {
            EN: { shortText: 'At least one search field is needed!', longText: '' }
        }
    },
    { msgCat: 'MODEL',
        msgName: 'UNSAVED_NEW',
        msgText: {
            EN: { shortText: 'There is a unsaved new object existing, please save it first, then create another.', longText: '' }
        }
    }
];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    originalHost: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 33088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n";

/***/ }),

/***/ 3425:
/*!***************************************************!*\
  !*** ./dist/jor-angular/fesm2015/jor-angular.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Association": () => (/* binding */ Association),
/* harmony export */   "Attribute": () => (/* binding */ Attribute),
/* harmony export */   "AttributeBase": () => (/* binding */ AttributeBase),
/* harmony export */   "AttributeComponent": () => (/* binding */ AttributeComponent),
/* harmony export */   "AttributeControlService": () => (/* binding */ AttributeControlService),
/* harmony export */   "AttributeForm2Component": () => (/* binding */ AttributeForm2Component),
/* harmony export */   "AttributeFormComponent": () => (/* binding */ AttributeFormComponent),
/* harmony export */   "AttributeTableComponent": () => (/* binding */ AttributeTableComponent),
/* harmony export */   "DataDomainH": () => (/* binding */ DataDomainH),
/* harmony export */   "DataDomainMeta": () => (/* binding */ DataDomainMeta),
/* harmony export */   "DataDomainValue": () => (/* binding */ DataDomainValue),
/* harmony export */   "DataElementH": () => (/* binding */ DataElementH),
/* harmony export */   "DataElementMeta": () => (/* binding */ DataElementMeta),
/* harmony export */   "Entity": () => (/* binding */ Entity),
/* harmony export */   "EntityMeta": () => (/* binding */ EntityMeta),
/* harmony export */   "EntityRelation": () => (/* binding */ EntityRelation),
/* harmony export */   "EntityService": () => (/* binding */ EntityService),
/* harmony export */   "EntityType": () => (/* binding */ EntityType),
/* harmony export */   "FieldsMappingPair": () => (/* binding */ FieldsMappingPair),
/* harmony export */   "Involve": () => (/* binding */ Involve),
/* harmony export */   "JorAngularModule": () => (/* binding */ JorAngularModule),
/* harmony export */   "PartnerInstance": () => (/* binding */ PartnerInstance),
/* harmony export */   "PartnerRole": () => (/* binding */ PartnerRole),
/* harmony export */   "Projection": () => (/* binding */ Projection),
/* harmony export */   "QueryObject": () => (/* binding */ QueryObject),
/* harmony export */   "Relation": () => (/* binding */ Relation),
/* harmony export */   "RelationMeta": () => (/* binding */ RelationMeta),
/* harmony export */   "Relationship": () => (/* binding */ Relationship),
/* harmony export */   "RelationshipH": () => (/* binding */ RelationshipH),
/* harmony export */   "RelationshipInstance": () => (/* binding */ RelationshipInstance),
/* harmony export */   "RelationshipMeta": () => (/* binding */ RelationshipMeta),
/* harmony export */   "Role": () => (/* binding */ Role),
/* harmony export */   "RoleH": () => (/* binding */ RoleH),
/* harmony export */   "RoleMeta": () => (/* binding */ RoleMeta),
/* harmony export */   "RoleRelation": () => (/* binding */ RoleRelation),
/* harmony export */   "SearchHelp": () => (/* binding */ SearchHelp),
/* harmony export */   "SearchHelpComponent": () => (/* binding */ SearchHelpComponent),
/* harmony export */   "SearchHelpField": () => (/* binding */ SearchHelpField),
/* harmony export */   "SearchHelpFieldMeta": () => (/* binding */ SearchHelpFieldMeta),
/* harmony export */   "SearchHelpH": () => (/* binding */ SearchHelpH),
/* harmony export */   "SearchHelpMeta": () => (/* binding */ SearchHelpMeta),
/* harmony export */   "Selection": () => (/* binding */ Selection),
/* harmony export */   "Sort": () => (/* binding */ Sort),
/* harmony export */   "UiMapperService": () => (/* binding */ UiMapperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-message-angular */ 64885);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ 62535);














function SearchHelpComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_div_10_div_1_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r8.fuzzySearchTerm = $event;
    })("keyup", function SearchHelpComponent_div_10_div_1_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r10.enterSearch($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.fuzzySearchTerm);
  }
}

function SearchHelpComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchHelpComponent_div_10_div_3_Template_input_keyup_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.enterSearch($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const filterField_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", filterField_r11.FIELD_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filterField_r11.LABEL_TEXT || filterField_r11.FIELD_NAME, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", filterField_r11.FIELD_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", filterField_r11.FIELD_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", filterField_r11.FIELD_NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", filterField_r11.FILTER_DISP_ONLY);
  }
}

function SearchHelpComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchHelpComponent_div_10_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchHelpComponent_div_10_div_3_Template, 4, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23)(5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_div_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.search();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchHelp && ctx_r0.searchHelp.FUZZY_SEARCH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.filterFieldsFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filterFields);
  }
}

function SearchHelpComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.showFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function SearchHelpComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.hideFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function SearchHelpComponent_input_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_input_17_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r20.isSelectAllChecked = $event;
    })("click", function SearchHelpComponent_input_17_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r22.selectAll();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.isSelectAllChecked);
  }
}

function SearchHelpComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const listField_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", listField_r23.FIELD_NAME === "INSTANCE_GUID" ? "none" : "table-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", listField_r23.LIST_HEADER_TEXT || listField_r23.FIELD_NAME, " ");
  }
}

function SearchHelpComponent_tr_20_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_tr_20_input_2_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r29.selectedIndex = $event;
    })("dblclick", function SearchHelpComponent_tr_20_input_2_Template_input_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r31.confirmSelection();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r25)("ngModel", ctx_r26.selectedIndex);
  }
}

function SearchHelpComponent_tr_20_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_tr_20_input_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      return item_r24.SELECTED = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r24.SELECTED);
  }
}

function SearchHelpComponent_tr_20_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const listField_r37 = ctx.$implicit;
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", listField_r37.FIELD_NAME === "INSTANCE_GUID" ? "none" : "table-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24[listField_r37.FIELD_NAME], " ");
  }
}

function SearchHelpComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchHelpComponent_tr_20_input_2_Template, 1, 2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchHelpComponent_tr_20_input_3_Template, 1, 1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchHelpComponent_tr_20_td_4_Template, 2, 3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.searchHelp.MULTI);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.searchHelp.MULTI);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.listFields);
  }
}

const _c0 = function (a0) {
  return {
    "show": a0
  };
};

const _c1 = function (a0) {
  return {
    "display": a0
  };
};

function AttributeComponent_div_2_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_div_2_input_1_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r14.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r10.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r10.attributeControl.name)("name", ctx_r10.attributeControl.key)("maxlength", ctx_r10.attributeControl.maxLength)("pattern", ctx_r10.attributeControl.pattern)("readonly", ctx_r10.isReadonly);
  }
}

function AttributeComponent_div_2_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AttributeComponent_div_2_input_2_Template_input_keyup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r16.onKeyup(ctx_r16.attributeControl.name);
    })("change", function AttributeComponent_div_2_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r18.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r11.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r11.attributeControl.name)("name", ctx_r11.attributeControl.key)("maxlength", ctx_r11.attributeControl.maxLength)("readonly", ctx_r11.isReadonly);
  }
}

function AttributeComponent_div_2_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_div_2_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r19.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r12.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r12.attributeControl.name)("name", ctx_r12.attributeControl.key)("pattern", ctx_r12.attributeControl.pattern)("readonly", ctx_r12.isReadonly);
  }
}

function AttributeComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeComponent_div_2_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r21.onSearchHelp(ctx_r21.attributeControl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function AttributeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributeComponent_div_2_input_1_Template, 1, 7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributeComponent_div_2_input_2_Template, 1, 6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeComponent_div_2_input_3_Template, 1, 6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributeComponent_div_2_div_4_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "text_capital");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "integer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.attributeControl.searchHelpId || ctx_r0.attributeControl.domainRelationId);
  }
}

function AttributeComponent_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_input_3_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r23.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r1.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r1.attributeControl.name)("name", ctx_r1.attributeControl.key)("step", ctx_r1.attributeControl.step)("placeholder", ctx_r1.attributeControl.placeholder)("pattern", ctx_r1.attributeControl.pattern)("readonly", ctx_r1.isReadonly);
  }
}

function AttributeComponent_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_input_4_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r25.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r2.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.attributeControl.name)("name", ctx_r2.attributeControl.key);
  }
}

function AttributeComponent_textarea_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_textarea_5_Template_textarea_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r27.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r3.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r3.attributeControl.name)("name", ctx_r3.attributeControl.key)("rows", ctx_r3.attributeControl.rows)("readonly", ctx_r3.isReadonly);
  }
}

function AttributeComponent_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_input_6_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r29.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r4.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r4.attributeControl.name)("name", ctx_r4.attributeControl.key)("readonly", ctx_r4.isReadonly);
  }
}

function AttributeComponent_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_input_7_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r31.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r5.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r5.attributeControl.name)("name", ctx_r5.attributeControl.key)("readonly", ctx_r5.isReadonly);
  }
}

function AttributeComponent_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("localDatetimeChange", function AttributeComponent_input_8_Template_input_localDatetimeChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r33.localDatetime = $event;
    })("dateChange", function AttributeComponent_input_8_Template_input_dateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r35.onDateChange($event);
    })("change", function AttributeComponent_input_8_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r36.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r6.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("localDatetime", ctx_r6.localDatetime)("name", ctx_r6.attributeControl.key)("readonly", ctx_r6.isReadonly);
  }
}

function AttributeComponent_input_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_input_9_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r37.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r7.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r7.attributeControl.name)("name", ctx_r7.attributeControl.key)("readonly", ctx_r7.isReadonly);
  }
}

function AttributeComponent_select_10_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const opt_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r40.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r40.value);
  }
}

function AttributeComponent_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AttributeComponent_select_10_Template_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r41.onChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributeComponent_select_10_option_1_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r8.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r8.attributeControl.name)("name", ctx_r8.attributeControl.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.attributeControl.dropdownList);
  }
}

function AttributeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-invalid", ctx_r9.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.errorMessage, " ");
  }
}

function AttributeFormComponent_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AttributeForm2Component_strong_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AttributeTableComponent_th_5_strong_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function AttributeTableComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributeTableComponent_th_5_strong_2_Template, 2, 0, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const attributeControl_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attributeControl_r3.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", attributeControl_r3.primaryKey);
  }
}

function AttributeTableComponent_tr_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
}

function AttributeTableComponent_tr_7_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
  }
}

function AttributeTableComponent_tr_7_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dk-app-attribute", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const attributeControl_r10 = ctx.$implicit;
    const formGroup_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", attributeControl_r10)("isSmallSize", ctx_r9.isSmallSize)("formGroup", formGroup_r5)("readonly", ctx_r9.readonly);
  }
}

function AttributeTableComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 19)(2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_tr_7_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const i_r6 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r12.openDetailModal(i_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeTableComponent_tr_7_span_3_Template, 1, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributeTableComponent_tr_7_span_4_Template, 1, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_tr_7_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const i_r6 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r14.deleteRelationInstance(i_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributeTableComponent_tr_7_td_7_Template, 2, 4, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r1.isSmallSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.attributeControls);
  }
}

function AttributeTableComponent_div_8_dk_app_attribute_form_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dk-app-attribute-form", 32);
  }

  if (rf & 2) {
    const attributeControl_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r15.readonly)("isSmallSize", ctx_r15.isSmallSize)("attributeControl", attributeControl_r16)("formGroup", ctx_r15.currentFormGroup);
  }
}

function AttributeTableComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 9)(3, "div", 10)(4, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Line Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_div_8_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r17.closeDetailModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttributeTableComponent_div_8_dk_app_attribute_form_10_Template, 1, 4, "dk-app-attribute-form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15)(12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_div_8_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r19.closeDetailModal();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r2.isDetailModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.displayDetailModal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.attributeControls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r2.isSmallSize);
  }
}

class Entity {}

class Relationship {}

class RelationshipInstance {}

class PartnerInstance {}

class PartnerRole {}

class EntityMeta {}

class Attribute {}

class Role {}

class RoleRelation {}

class RelationshipMeta {}

class Involve {}

class RelationMeta {}

class Association {}

class FieldsMappingPair {}

class EntityRelation {}

class Selection {}

class Projection {}

class QueryObject {}

class Sort {}

class EntityType {}

class Relation {}

class RelationshipH {}

class RoleH {}

class RoleMeta {}

class DataElementH {}

class DataElementMeta {}

class DataDomainH {}

class DataDomainMeta {}

class DataDomainValue {}

class SearchHelpH {}

class SearchHelpMeta {}

class SearchHelpFieldMeta {}

class UiMapperService {
  constructor() {}
  /**
   * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
   * @param formGroup: It must be a flat Angular FormGroup, which means no deep structure.
   * @param keys: Business primary keys to identify one row in the relation(DB table).
   * For example: Given {USER_ID: 'DH001'}, it means the relation has the primary key 'USER_ID'.
   * And it must be filled with a fix value 'DH001'.
   * However, if the value of the key can be derived from the formGroup, then assign null value to it.
   * For example: Given {EMAIL: null}, the value of key EMAIL will be derived from formGroup.value['EMAIL'].
   * @param isNew: Determine whether to update or add the value.
   *
   * The return is an object like:
   * {
   *     action: 'update', USER_ID: 'DH001', MIDDLE_NAME: "xxxxxx"
   * }
   */


  composeChangedRelation(formGroup, keys, isNew = true) {
    if (!formGroup.dirty || !keys || Object.keys(keys).length === 0) {
      return {};
    }

    const changedRelation = {
      action: isNew ? 'add' : 'update'
    };
    Object.keys(keys).forEach(key => changedRelation[key] = keys[key] || formGroup.value[key]);
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);

      if (control.dirty) {
        changedRelation[key] = control.value;
      }
    });
    return changedRelation;
  }
  /**
   * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
   * @param formArray: It must be a flat Angular FormArray, which means no deep structure.
   * @param originalArray: To determine whether an item is for adding, or for updating, or for deletion.
   * the original array, which shares the same structure with the formArray, is used for comparison.
   * Tips: You can get the originalArray by calling *FormArray.getRawValue()* right after
   * the FormArray is constructed from the backend data, usually, in ngOnInit().
   * @param keys: Business primary keys to identify one row in the formArray and originalArray.
   * For example: Given {EMAIL: null}, it will use the attribute EMAIL to compare if the same item exists or not.
   * First it iterates the formArray to whether check EMAIL exists in the originalArray,
   * if exists, use action 'update', otherwise, use action 'add'.
   * Then it iterates the originalArray to check EMAIL exists in formArray,
   * if not exists, then the action is set to 'delete'.
   *
   * The return is an array like:
   * [
   *   {action: "update", EMAIL: "dh003@hotmail.com", PRIMARY: 1},
   *   {action: "add", EMAIL: "dh003@gmail.com", TYPE: "work"},
   *   {action: "delete", EMAIL: "dh003@darkhouse.com"}
   * ]
   */


  composeChangedRelationArray(formArray, originalArray, keys) {
    if (!formArray.dirty || !keys || Object.keys(keys).length === 0) {
      return [];
    }

    if (!originalArray) {
      originalArray = [];
    }

    const changedRelationArray = [];
    formArray.controls.forEach(formGroup => {
      if (formGroup.dirty) {
        const changedRelation = {};
        changedRelationArray.push(changedRelation);
        const index = originalArray.findIndex(element => {
          let found = true;
          Object.keys(keys).forEach(key => {
            if (keys[key]) {
              return;
            }

            found = found && element[key] === formGroup.value[key];
          });
          return found;
        });
        changedRelation['action'] = index === -1 ? 'add' : 'update';
        Object.keys(keys).forEach(key => changedRelation[key] = keys[key] || formGroup.value[key]);
        Object.keys(formGroup['controls']).forEach(key => {
          const control = formGroup.get(key);

          if (control.dirty) {
            changedRelation[key] = control.value;
          }
        });
      }
    });
    originalArray.forEach(originalRelation => {
      const index = formArray.controls.findIndex(element => {
        let found = true;
        Object.keys(keys).forEach(key => {
          if (keys[key]) {
            return;
          }

          found = found && element.value[key] === originalRelation[key];
        });
        return found;
      });

      if (index === -1) {
        const deletedRelation = {
          action: 'delete'
        };
        Object.keys(keys).forEach(key => deletedRelation[key] = keys[key] || originalRelation[key]);
        changedRelationArray.push(deletedRelation);
      }
    });
    return changedRelationArray;
  }
  /**
   * Map a FormArray to JOR relationships for adding, updating, or deletion.
   * @param relationshipID: Relationship ID defined in JOR. For example: 'rs_marriage'
   * @param partnerRoles: Partner roles involved in the relationship.
   * For example: Given [{ENTITY_ID: 'person', ROLE_ID: 'wife'}], it means the partner is a 'person' with role 'wife'.
   * In most cases, a relationship only involves 2 roles, like husband and wife.
   * However, in certain case, there could be more than two. So the partner role is provided as an array.
   * @param formArray: First, it must be a flat Angular FormArray, which means no deep structure.
   * Second, it must contain fields: RELATIONSHIP_INSTANCE_GUID and <partner_role_name>_INSTANCE_GUID.
   * @param originalArray: To determine whether an item is for adding, or for updating, or for deletion.
   * the original array, which shares the same structure with the formArray, is used for comparison.
   * Tips: You can get the originalArray by calling *FormArray.getRawValue()* right after
   * the FormArray is constructed from the backend data, usually, in ngOnInit().
   * @param nonRelationshipAttributes: Attributes that are not belong to the relationship, but exist in the formArray.
   * A relationship has its own attributes, for example, rs_marriage has REG_PLACE and COUNTRY.
   * However, on the UI, you not only want to show the 2 fields, but also the partner's ID, NAME, BIRTHDAY, and so on.
   * And these attributes should be excluded when adding and changing the relationship.
   *
   * The Return will either a null object or a relationship object like:
   * {
   *   RELATIONSHIP_ID: "rs_marriage",
   *   values: [
   *     {action: "add", REG_PLACE: "Shanghai", COUNTRY: "China",
   *      PARTNER_INSTANCES: [
   *       {ENTITY_ID: "person", ROLE_ID: "wife", INSTANCE_GUID: "391E75B02A1811E981F3C33C6FB0A7C1"}
   *     ]},
   *     {action: "update", REG_PLACE: "Beijing", RELATIONSHIP_INSTANCE_GUID: "96DF7F706EE011E9B7B5F7E76DA40E87"},
   *     {action: "delete", RELATIONSHIP_INSTANCE_GUID: "96DF7F706EE011E9B7B5F7E76DA40E87"}
   *   ]
   * }
   */


  composeChangedRelationship(relationshipID, partnerRoles, formArray, originalArray, nonRelationshipAttributes) {
    if (!formArray.dirty) {
      return null;
    }

    const relationship = {
      RELATIONSHIP_ID: relationshipID,
      values: []
    };
    formArray.controls.forEach(formGroup => {
      if (formGroup.dirty) {
        const changedRelationshipValue = {};
        relationship.values.push(changedRelationshipValue);

        if (formGroup.value['RELATIONSHIP_INSTANCE_GUID']) {
          changedRelationshipValue['action'] = 'update';
          changedRelationshipValue['RELATIONSHIP_INSTANCE_GUID'] = formGroup.value['RELATIONSHIP_INSTANCE_GUID'];
        } else {
          changedRelationshipValue['action'] = 'add';
          changedRelationshipValue['PARTNER_INSTANCES'] = [];
          partnerRoles.forEach(partnerRole => changedRelationshipValue['PARTNER_INSTANCES'].push({
            ENTITY_ID: partnerRole.ENTITY_ID,
            ROLE_ID: partnerRole.ROLE_ID,
            INSTANCE_GUID: formGroup.value[partnerRole.ROLE_ID + '_INSTANCE_GUID']
          }));
        }

        Object.keys(formGroup['controls']).forEach(key => {
          if (nonRelationshipAttributes.includes(key) || key.substr(-13) === 'INSTANCE_GUID') {
            return;
          }

          const control = formGroup.get(key);

          if (control.dirty) {
            changedRelationshipValue[key] = control.value;
          }
        });
      }
    });
    originalArray.forEach(original => {
      if (formArray.controls.findIndex(formGroup => formGroup.value['RELATIONSHIP_INSTANCE_GUID'] === original['RELATIONSHIP_INSTANCE_GUID']) === -1) {
        relationship.values.push({
          action: 'delete',
          RELATIONSHIP_INSTANCE_GUID: original['RELATIONSHIP_INSTANCE_GUID']
        });
      }
    });
    return relationship.values.length === 0 ? null : relationship;
  }

}
/** @nocollapse */


UiMapperService.ɵfac = function UiMapperService_Factory(t) {
  return new (t || UiMapperService)();
};
/** @nocollapse */


UiMapperService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UiMapperService,
  factory: UiMapperService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiMapperService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();

const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};

class EntityService {
  constructor(http, messageService) {
    this.http = http;
    this.messageService = messageService;
    this.originalHost = '';
    this.fakeUUIDs = [];
    this.messageService.setMessageStore([{
      msgCat: 'EXCEPTION',
      msgName: 'GENERIC',
      msgText: {
        EN: {
          shortText: 'Exception Occurs in Operation: %s',
          longText: '%s2'
        }
      }
    }, {
      msgCat: 'EXCEPTION',
      msgName: 'SESSION_EXPIRED',
      msgText: {
        EN: {
          shortText: 'Your session is expired',
          longText: 'Your session is expired, please <a href="/logon">re-logon</a>'
        }
      }
    }], 'EN');
  }

  setOriginalHost(host) {
    this.originalHost = host;
  }

  setMessageStore(msgStore, language) {
    this.messageService.setMessageStore(msgStore, language);
  }
  /**
   * List all entity IDs in the system
   */


  listEntityID() {
    return this.http.get(this.originalHost + `/api/entity/EntityIDs`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listEntityID')));
  }
  /**
   * List entity IDs by a given role ID
   * @param roleID
   */


  listEntityIDbyRole(roleID) {
    return this.http.get(this.originalHost + `/api/entity/EntityIDs/${roleID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listEntityIDbyRole')));
  }
  /**
   * Return the entity meta for a given entity ID
   * @param entityID
   */


  getEntityMeta(entityID) {
    return this.http.get(this.originalHost + `/api/entity/meta/${entityID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getEntityMeta')));
  }
  /**
   * Return a list of entity objects according to the description of a given query object
   * @param queryObject
   */


  searchEntities(queryObject) {
    return this.http.post(this.originalHost + `/api/query`, queryObject, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('searchEntities')));
  }
  /**
   * Return an entity instance for a given entity instance GUID
   * @param instanceGUID
   */


  getEntityInstance(instanceGUID) {
    return this.http.get(this.originalHost + `/api/entity/instance/${instanceGUID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getEntityInstance')));
  }
  /**
   * Return a relation's meta data for a given relation ID
   * @param relationID
   */


  getRelationMeta(relationID) {
    return this.http.get(this.originalHost + `/api/relation/meta/${relationID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRelationMeta')));
  }
  /**
   * Return all relations' meta data for a given entity ID
   * @param entityID
   */


  getRelationMetaOfEntity(entityID) {
    return this.http.get(this.originalHost + `/api/relation/meta/entity/${entityID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRelationMetaOfEntity')));
  }
  /**
   * Create a new entity instance
   * @param instance
   */


  createEntityInstance(instance) {
    return this.http.post(this.originalHost + `/api/entity`, instance, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('createEntityInstance')));
  }
  /**
   * Change an existing entity instance
   * @param instance
   */


  changeEntityInstance(instance) {
    return this.http.put(this.originalHost + `/api/entity`, instance, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('changeEntityInstance')));
  }
  /**
   * Delete an entity instance from a given instance GUID
   * @param instanceGUID
   */


  deleteEntityInstance(instanceGUID) {
    return this.http.delete(this.originalHost + `/api/entity/instance/${instanceGUID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('deleteEntityInstance')));
  }
  /**
   * Return entity types(IDs) for a given search term
   * @param term
   */


  listEntityType(term) {
    return this.http.get(this.originalHost + `/api/model/entity-types?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listEntityType')));
  }
  /**
   * Return the description of a given entity type(ID)
   * @param entityID
   */


  getEntityTypeDesc(entityID) {
    return this.http.get(this.originalHost + `/api/model/entity-types/${entityID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getEntityTypeDesc')));
  }
  /**
   * Save an entity type after changing or creation
   * @param entityType
   */


  saveEntityType(entityType) {
    return this.http.post(this.originalHost + `/api/model/entity-types`, entityType, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveEntityType')));
  }
  /**
   * Return a list of relations in the system according to the search term
   * @param term
   */


  listRelation(term) {
    return this.http.get(this.originalHost + `/api/model/relations?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listRelation')));
  }
  /**
   * Return the description of a given relation ID
   * @param relationID
   */


  getRelationDesc(relationID) {
    return this.http.get(this.originalHost + `/api/model/relations/${relationID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRelationDesc')));
  }
  /**
   * Save a relation after changing or creation
   * @param relation
   */


  saveRelation(relation) {
    return this.http.post(this.originalHost + `/api/model/relations`, relation, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveRelation')));
  }
  /**
   * Return a list of relationships in the system according to the search term
   * @param term
   */


  listRelationship(term) {
    return this.http.get(this.originalHost + `/api/model/relationships?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listRelationship')));
  }
  /**
   * Return a relationship definition from a given relationship ID
   * @param relationshipID
   */


  getRelationship(relationshipID) {
    return this.http.get(this.originalHost + `/api/model/relationships/${relationshipID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRelationship')));
  }
  /**
   * Return the description of a given relationship ID
   * @param relationshipID
   */


  getRelationshipDesc(relationshipID) {
    return this.http.get(this.originalHost + `/api/model/relationships/${relationshipID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRelationshipDesc')));
  }
  /**
   * Save a relationship after changing or creation
   * @param relationship
   */


  saveRelationship(relationship) {
    return this.http.post(this.originalHost + `/api/model/relationships`, relationship, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveRelationship')));
  }
  /**
   * Return a list of roles in the system according to the search term
   * @param term
   */


  listRole(term) {
    return this.http.get(this.originalHost + `/api/model/roles?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listRole')));
  }
  /**
   * Return a role definition from a given role ID
   * @param roleID
   */


  getRole(roleID) {
    return this.http.get(this.originalHost + `/api/model/roles/${roleID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRole')));
  }
  /**
   * Return the description of a given role ID
   * @param roleID
   */


  getRoleDesc(roleID) {
    return this.http.get(this.originalHost + `/api/model/roles/${roleID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRoleDesc')));
  }
  /**
   * Save a role after changing or creation
   * @param role
   */


  saveRole(role) {
    return this.http.post(this.originalHost + `/api/model/roles`, role, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveRole')));
  }
  /**
   * Return a list of data elements in the system according to the search term
   * @param term
   */


  listDataElement(term) {
    return this.http.get(this.originalHost + `/api/model/data-elements?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listDataElement')));
  }
  /**
   * Return a data element definition from a given element ID
   * @param elementID
   */


  getDataElement(elementID) {
    return this.http.get(this.originalHost + `/api/model/data-elements/${elementID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getDataElement')));
  }
  /**
   * Return the description of a given data element ID
   * @param elementID
   */


  getDataElementDesc(elementID) {
    return this.http.get(this.originalHost + `/api/model/data-elements/${elementID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getDataElementDesc')));
  }
  /**
   * Save a data element after changing or creation
   * @param element
   */


  saveDataElement(element) {
    return this.http.post(this.originalHost + `/api/model/data-elements`, element, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveDataElement')));
  }
  /**
   * Return a list of data domains in the system according to the search term
   * @param term
   */


  listDataDomain(term) {
    return this.http.get(this.originalHost + `/api/model/data-domains?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listDataDomain')));
  }
  /**
   * Return a data domain definition from a given domain ID
   * @param domainID
   */


  getDataDomain(domainID) {
    return this.http.get(this.originalHost + `/api/model/data-domains/${domainID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getDataDomain')));
  }
  /**
   * Return the description of a given data domain ID
   * @param domainID
   */


  getDataDomainDesc(domainID) {
    return this.http.get(this.originalHost + `/api/model/data-domains/${domainID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getDataDomainDesc')));
  }
  /**
   * Save a data domain after changing or creation
   * @param domain
   */


  saveDataDomain(domain) {
    return this.http.post(this.originalHost + `/api/model/data-domains`, domain, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveDataDomain')));
  }
  /**
   * Return a list of search helps in the system according to the search term
   * @param term
   */


  listSearchHelp(term) {
    return this.http.get(this.originalHost + `/api/model/search-helps?term=${term}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('listSearchHelp')));
  }
  /**
   * Return a search help definition from a given domain ID
   * @param searchHelpID
   */


  getSearchHelp(searchHelpID) {
    return this.http.get(this.originalHost + `/api/model/search-helps/${searchHelpID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getSearchHelp')));
  }
  /**
   * Return the description of a given search help ID
   * @param searchHelpID
   */


  getSearchHelpDesc(searchHelpID) {
    return this.http.get(this.originalHost + `/api/model/search-helps/${searchHelpID}/desc`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getSearchHelpDesc')));
  }
  /**
   * Save a search help after changing or creation
   * @param searchHelp
   */


  saveSearchHelp(searchHelp) {
    return this.http.post(this.originalHost + `/api/model/search-helps`, searchHelp, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('saveSearchHelp')));
  }
  /**
   * Get data element meta
   * @param elementID
   */


  getElementMeta(elementID) {
    return this.http.get(this.originalHost + `/api/model/element-meta/${elementID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getElementMeta')));
  }
  /**
   * Return a fake relationship ID before saving
   */


  generateFakeRelationshipUUID() {
    const nextPosition = this.fakeUUIDs.length + 1;
    const fakeUUID = 'NewRelationship_' + nextPosition;
    this.fakeUUIDs.push(fakeUUID);
    return fakeUUID;
  }

  handleError(operation = 'operation', result) {
    return error => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      if (error.status === 401) {
        this.messageService.addMessage('EXCEPTION', 'SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.messageType.Exception);
      } else {
        this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.messageType.Exception, operation, error.message);
      } // Let the app keep running by returning an empty result.


      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
    };
  }

}
/** @nocollapse */


EntityService.ɵfac = function EntityService_Factory(t) {
  return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageService));
};
/** @nocollapse */


EntityService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: EntityService,
  factory: EntityService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntityService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
    }, {
      type: ui_message_angular__WEBPACK_IMPORTED_MODULE_3__.MessageService
    }];
  }, null);
})();

class SearchHelp {}

class SearchHelpField {}

class SearchHelpComponent {
  constructor(fb, entityService) {
    this.fb = fb;
    this.entityService = entityService;
    this.isSearchHelpModalShown = false;
    this.isFilterShown = false;
    this.isSelectAllChecked = false;
    this.selectedIndex = -1;
    this.filterFields = [];
    this.listFields = [];
    this.listData = [];
    this.preSearchHelpParas = {};
  }

  get displaySearchHelpModal() {
    return this.isSearchHelpModalShown ? 'block' : 'none';
  }

  ngOnInit() {
    this.filterFieldsFormGroup = this.fb.group({});
  }
  /**
   * Open an search help dialog with free style
   * @param searchHelp
   * @param exportControl: An Angular form control which is used to receive the Search Help returned value.
   * @param afterExportFn: Optional. If provided, the function will be executed after the value is returned.
   */


  openSearchHelpModal(searchHelp, exportControl, afterExportFn) {
    if (this.searchHelp !== searchHelp) {
      this.listData = [];
      this.searchHelp = searchHelp;
      this.filterFieldsFormGroup = this.fb.group({});
      this.filterFields = this.searchHelp.FIELDS.filter(fieldMeta => fieldMeta.FILTER_POSITION);
      this.filterFields.sort((a, b) => a.FILTER_POSITION - b.FILTER_POSITION);
      this.filterFields.forEach(fieldMeta => {
        if (fieldMeta.IMPORT) {
          const ieFieldName = fieldMeta.IE_FIELD_NAME || fieldMeta.FIELD_NAME;

          if (exportControl.get(ieFieldName)) {
            fieldMeta.DEFAULT_VALUE = exportControl.get(ieFieldName).value;
          }
        }

        this.filterFieldsFormGroup.addControl(fieldMeta.FIELD_NAME, this.fb.control(fieldMeta.DEFAULT_VALUE));
      });
      this.listFields = this.searchHelp.FIELDS.filter(fieldMeta => fieldMeta.LIST_POSITION);
      this.listFields.sort((a, b) => a.LIST_POSITION - b.LIST_POSITION);
    } // Import the value to fuzzy search field


    if (this.searchHelp.FUZZY_SEARCH) {
      this.fuzzySearchTerm = '';
      this.searchHelp.FIELDS.forEach(fieldMeta => {
        const ieFieldName = fieldMeta.IE_FIELD_NAME || fieldMeta.FIELD_NAME;
        const ctrl = exportControl.get(ieFieldName);

        if (!this.fuzzySearchTerm && ctrl && ctrl.value) {
          this.fuzzySearchTerm = ctrl.value;
          return;
        }
      });
    }

    this.exportControl = exportControl;
    this.afterExportFn = afterExportFn;

    if (this.searchHelp.BEHAVIOUR === 'A') {
      this.search();
      this.isFilterShown = false;
    } else {
      this.isFilterShown = true;
    }

    this.isSearchHelpModalShown = true;
  }
  /**
   * Open a search help dialog based on the given entity and one of its relation
   * @param entityID
   * @param relationID
   * @param exportControl: An Angular form control which is used to receive the Search Help returned value.
   * @param readonly: If readonly, then the Search Help cannot return value.
   * @param exportField: Provided only if exportField is given. It uses the data domain to find which attribute should return the value(s).
   For example, attribute "USER" is assigned with Data Domain "USER_ID". When the Search Help dialog pops up on the field 'CREATE_BY',
   it finds the attribute "USER" using the Data Domain "USER_ID",
   and the value of its attribute "USER" is then exported to the field "CREATE_BY".
   * @param afterExportFn: Optional. If provided, the function will be executed after the value is returned.
   */


  openSearchHelpModalByEntity(entityID, relationID, exportControl, readonly, exportField, domainID, afterExportFn) {
    const currentSearchHelpParas = {
      'entityID': entityID,
      'relationID': relationID,
      'exportField': exportField,
      'domainID': domainID
    };

    if (this._isPreviousSearchHelp(currentSearchHelpParas)) {
      this.searchHelp.READ_ONLY = readonly;
      this.openSearchHelpModal(this.searchHelp, exportControl, afterExportFn);
    } else {
      this.listData = [];
      this.preSearchHelpParas = currentSearchHelpParas;
      const searchHelp = new SearchHelp();
      searchHelp.OBJECT_NAME = entityID;

      searchHelp.METHOD = function (entityService) {
        return searchTerm => entityService.searchEntities(searchTerm);
      }(this.entityService);

      searchHelp.BEHAVIOUR = 'M';
      searchHelp.MULTI = false;
      searchHelp.FUZZY_SEARCH = false;
      searchHelp.FIELDS = [];
      searchHelp.READ_ONLY = readonly;
      searchHelp.ENTITY_ID = entityID;
      searchHelp.RELATION_ID = relationID;
      this.entityService.getRelationMeta(relationID).subscribe(data => {
        const relationMeta = data;
        relationMeta.ATTRIBUTES.forEach(attribute => searchHelp.FIELDS.push({
          FIELD_NAME: attribute.ATTR_NAME,
          LABEL_TEXT: attribute.LABEL_TEXT,
          LIST_HEADER_TEXT: attribute.LIST_HEADER_TEXT,
          IE_FIELD_NAME: exportField && domainID && domainID === attribute.DOMAIN_ID ? exportField : null,
          IMPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
          EXPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
          LIST_POSITION: attribute.ORDER,
          FILTER_POSITION: attribute.ORDER
        }));
        searchHelp.FIELDS.push({
          FIELD_NAME: 'INSTANCE_GUID',
          LIST_HEADER_TEXT: 'GUID',
          IMPORT: false,
          EXPORT: true,
          LIST_POSITION: 999,
          FILTER_POSITION: 0
        });
        this.openSearchHelpModal(searchHelp, exportControl, afterExportFn);
      });
    }
  }
  /**
   * Open a search help dialog based on the given search help
   * @param searchHelpID
   * @param searchHelpExportField: a field name in the Search Help which is tagged as exported.
   An Search Help can have multiple exported fields, and the field names may be different with the Angular control names.
   Thus, you can choose one Search Help export field name to map with one Angular field control name.
   * @param exportField: An Angular field control name that is to map with the Search Help export field name.
   * @param exportControl: An Angular form control which is used to receive the Search Help returned value.
   * @param readonly: If readonly, then the Search Help cannot return value.
   * @param afterExportFn: Optional. If provided, the function will be executed after the value is returned.
   */


  openSearchHelpModalBySearchHelp(searchHelpID, searchHelpExportField, exportField, exportControl, readonly, afterExportFn) {
    const currentSearchHelpParas = {
      'searchHelpID': searchHelpID,
      'searchHelpExportField': searchHelpExportField,
      'exportField': exportField
    };

    if (this._isPreviousSearchHelp(currentSearchHelpParas)) {
      this.searchHelp.READ_ONLY = readonly;
      this.openSearchHelpModal(this.searchHelp, exportControl, afterExportFn);
    } else {
      this.listData = [];
      this.preSearchHelpParas = currentSearchHelpParas;
      const searchHelp = new SearchHelp();
      this.entityService.getSearchHelp(searchHelpID).subscribe(searchHelpMeta => {
        searchHelp.OBJECT_NAME = searchHelpMeta.SEARCH_HELP_DESC + '(' + searchHelpMeta.SEARCH_HELP_ID + ')';

        searchHelp.METHOD = function (entityService) {
          return searchTerm => entityService.searchEntities(searchTerm);
        }(this.entityService);

        searchHelp.BEHAVIOUR = searchHelpMeta.BEHAVIOUR;
        searchHelp.MULTI = searchHelpMeta.MULTI;
        searchHelp.FUZZY_SEARCH = searchHelpMeta.FUZZY_SEARCH;
        searchHelp.READ_ONLY = readonly;
        searchHelp.ENTITY_ID = searchHelpMeta.ENTITY_ID;
        searchHelp.RELATION_ID = searchHelpMeta.RELATION_ID;
        searchHelp.FIELDS = searchHelpMeta.FIELDS;
        const searchHelpField = searchHelp.FIELDS.find(field => (field.IE_FIELD_NAME || field.FIELD_NAME) === searchHelpExportField);
        searchHelpField.IE_FIELD_NAME = exportField;
        searchHelpField.EXPORT = true;
        searchHelpField.IMPORT = true;
        searchHelp.FIELDS.push({
          FIELD_NAME: 'INSTANCE_GUID',
          LIST_HEADER_TEXT: 'GUID',
          IMPORT: false,
          EXPORT: true,
          LIST_POSITION: 999,
          FILTER_POSITION: 0
        });
        this.openSearchHelpModal(searchHelp, exportControl, afterExportFn);
      });
    }
  }

  _isPreviousSearchHelp(currentSearchHelpParas) {
    return JSON.stringify(this.preSearchHelpParas) === JSON.stringify(currentSearchHelpParas);
  }

  search() {
    let searchTerm;

    if (this.searchHelp.FUZZY_SEARCH) {
      searchTerm = this.fuzzySearchTerm || '';
    } else {
      searchTerm = new QueryObject();
      searchTerm.ENTITY_ID = this.searchHelp.ENTITY_ID;
      searchTerm.RELATION_ID = this.searchHelp.RELATION_ID;
      searchTerm.FILTER = [];
      this.filterFields.forEach(fieldMeta => {
        const fieldValue = this.filterFieldsFormGroup.get(fieldMeta.FIELD_NAME).value;

        if (fieldValue) {
          if (fieldValue.includes('*') || fieldValue.includes('%')) {
            searchTerm.FILTER.push({
              RELATION_ID: fieldMeta.RELATION_ID,
              FIELD_NAME: fieldMeta.FIELD_NAME,
              OPERATOR: 'CN',
              LOW: fieldValue
            });
          } else {
            searchTerm.FILTER.push({
              RELATION_ID: fieldMeta.RELATION_ID,
              FIELD_NAME: fieldMeta.FIELD_NAME,
              OPERATOR: 'EQ',
              LOW: fieldValue
            });
          }
        }
      });
      searchTerm.PROJECTION = [];
      this.listFields.forEach(fieldMeta => {
        searchTerm.PROJECTION.push({
          RELATION_ID: fieldMeta.RELATION_ID,
          FIELD_NAME: fieldMeta.FIELD_NAME
        });
      });
    }

    this.listData = [];
    this.isSelectAllChecked = false;

    if (typeof this.searchHelp.METHOD === 'function') {
      const searchHelpMethod = this.searchHelp.METHOD;
      searchHelpMethod(searchTerm).subscribe(data => this._generateSearchList(data));
    } else if (Array.isArray(this.searchHelp.METHOD)) {
      this._generateSearchList(this.searchHelp.METHOD);
    }
  }

  _generateSearchList(data) {
    data.forEach(item => {
      const listItem = {
        SELECTED: ''
      };
      this.listFields.forEach(field => listItem[field.FIELD_NAME] = item[field.FIELD_NAME]);
      this.listData.push(listItem);
    });
  }

  enterSearch($event) {
    if ($event.keyCode === 13) {
      this.search();
    }
  }

  showFilter() {
    this.isFilterShown = true;
  }

  hideFilter() {
    this.isFilterShown = false;
  }

  selectAll() {
    this.isSelectAllChecked = !this.isSelectAllChecked;
    this.listData.forEach(data => data.SELECTED = !data.SELECTED);
  }

  confirmSelection() {
    // TODO: Currently, only single selection is supported. Multiple selection in later time
    if (this.searchHelp.READ_ONLY) {
      return;
    }

    this.listFields.forEach(listField => {
      if (this.exportControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup) {
        const exportControl = this.exportControl;
        const ieFieldName = listField.IE_FIELD_NAME || listField.FIELD_NAME;
        const exportFieldControl = exportControl.get(ieFieldName);

        if (listField.EXPORT && exportFieldControl) {
          exportFieldControl.setValue(this.listData[this.selectedIndex][listField.FIELD_NAME]);
          exportFieldControl.markAsDirty();
        }
      } else {
        if (listField.EXPORT) {
          this.exportControl[listField.FIELD_NAME] = this.listData[this.selectedIndex][listField.FIELD_NAME];
        }
      }
    });

    if (this.afterExportFn) {
      this.afterExportFn();
    }

    this.listData = [];
    this.isSearchHelpModalShown = false;
  }

  closeSearchHelpModal() {
    this.isSearchHelpModalShown = false;
  }

}
/** @nocollapse */


SearchHelpComponent.ɵfac = function SearchHelpComponent_Factory(t) {
  return new (t || SearchHelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EntityService));
};
/** @nocollapse */


SearchHelpComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchHelpComponent,
  selectors: [["dk-app-search-help"]],
  decls: 26,
  vars: 15,
  consts: [["id", "searchHelp", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "dk-search-help-content"], [1, "modal-header", "dk-search-help-header"], ["id", "addRelationship", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "card mb-2", 4, "ngIf"], ["type", "button", "class", "btn btn-link float-right", 3, "click", 4, "ngIf"], [1, "table", "table-bordered", "table-sm", "table-hover", "dk-search-table"], [1, "thead-light"], ["scope", "col"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click", 4, "ngIf"], [3, "display", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "modal-footer", "dk-search-help-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "card", "mb-2"], ["class", "mt-2 mx-2 row", 4, "ngIf"], [1, "mt-2", "mx-2", "row", 3, "formGroup"], ["class", "col-6 form-group row", 4, "ngFor", "ngForOf"], [1, "mb-2"], ["type", "button", "id", "search", 1, "btn", "btn-sm", "btn-primary", "float-right", "mr-2", 3, "click"], [1, "mt-2", "mx-2", "row"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-6", "form-group", "row"], [1, "col-6", "col-form-label", "col-form-label-sm", "text-right", 3, "for"], ["type", "text", 1, "col-6", "form-control", "form-control-sm", 3, "id", "name", "formControlName", "readonly", "keyup"], ["type", "button", 1, "btn", "btn-link", "float-right", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click"], ["type", "radio", "name", "selectedIndex", 3, "value", "ngModel", "ngModelChange", "dblclick", 4, "ngIf"], ["type", "checkbox", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "radio", "name", "selectedIndex", 3, "value", "ngModel", "ngModelChange", "dblclick"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]],
  template: function SearchHelpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_Template_button_click_6_listener() {
        return ctx.closeSearchHelpModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchHelpComponent_div_10_Template, 7, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchHelpComponent_button_11_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchHelpComponent_button_12_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 10)(14, "thead", 11)(15, "tr")(16, "th", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SearchHelpComponent_input_17_Template, 1, 1, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SearchHelpComponent_th_18_Template, 2, 3, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchHelpComponent_tr_20_Template, 5, 3, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16)(22, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_Template_button_click_22_listener() {
        return ctx.closeSearchHelpModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_Template_button_click_24_listener() {
        return ctx.confirmSelection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confirm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.isSearchHelpModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.displaySearchHelpModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.searchHelp == null ? null : ctx.searchHelp.OBJECT_NAME, " (", ctx.listData.length, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFilterShown);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFilterShown);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFilterShown);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchHelp == null ? null : ctx.searchHelp.MULTI);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listFields);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.searchHelp == null ? null : ctx.searchHelp.READ_ONLY);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor],
  styles: [".dk-search-help-header[_ngcontent-%COMP%]{padding:.3rem .5rem;background-color:#e9ecef}.dk-search-help-footer[_ngcontent-%COMP%]{padding:.5rem}.dk-search-table[_ngcontent-%COMP%]{display:block;max-height:20rem;overflow:scroll;white-space:nowrap;border:none}.dk-search-help-content[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px #0003}.dk-search-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchHelpComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dk-app-search-help',
      template: "<div class=\"modal fade\" id=\"searchHelp\" tabindex=\"-1\" role=\"dialog\"\n     [ngClass]=\"{'show': isSearchHelpModalShown}\" [ngStyle]=\"{'display': displaySearchHelpModal}\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content dk-search-help-content\">\n      <div class=\"modal-header dk-search-help-header\">\n        <h6 class=\"modal-title\" id=\"addRelationship\">{{searchHelp?.OBJECT_NAME}} ({{listData.length}})</h6>\n        <button type=\"button\" class=\"close\" (click)=\"closeSearchHelpModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div *ngIf=\"isFilterShown\" class=\"card mb-2\">\n          <div *ngIf=\"searchHelp && searchHelp.FUZZY_SEARCH\" class=\"mt-2 mx-2 row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"fuzzySearchTerm\" (keyup)=\"enterSearch($event)\">\n          </div>\n          <div class=\"mt-2 mx-2 row\" [formGroup]=\"filterFieldsFormGroup\">\n            <div *ngFor=\"let filterField of filterFields\" class=\"col-6 form-group row\">\n              <label for=\"{{filterField.FIELD_NAME}}\" class=\"col-6 col-form-label col-form-label-sm text-right\">\n                {{filterField.LABEL_TEXT || filterField.FIELD_NAME}}:</label>\n              <input id=\"{{filterField.FIELD_NAME}}\" name=\"{{filterField.FIELD_NAME}}\" formControlName=\"{{filterField.FIELD_NAME}}\"\n                     type=\"text\" class=\"col-6 form-control form-control-sm\" [readonly]=\"filterField.FILTER_DISP_ONLY\" (keyup)=\"enterSearch($event)\">\n            </div>\n          </div>\n\n          <div class=\"mb-2\">\n            <button type=\"button\" id=\"search\" class=\"btn btn-sm btn-primary float-right mr-2\" (click)=\"search()\">\n              Search\n            </button>\n          </div>\n        </div>\n\n        <button *ngIf=\"!isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"showFilter()\">Show Filter</button>\n        <button *ngIf=\"isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"hideFilter()\">Hide Filter</button>\n\n        <table class=\"table table-bordered table-sm table-hover dk-search-table\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">\n              <input *ngIf=\"searchHelp?.MULTI\" type=\"checkbox\" [(ngModel)]=\"isSelectAllChecked\" (click)=\"selectAll()\">\n            </th>\n            <th *ngFor=\"let listField of listFields\"\n                [style.display]=\"listField.FIELD_NAME === 'INSTANCE_GUID' ? 'none' : 'table-cell'\">\n              {{listField.LIST_HEADER_TEXT || listField.FIELD_NAME}}\n            </th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let item of listData; let i = index\">\n            <td>\n              <input *ngIf=\"!searchHelp.MULTI\" type=\"radio\" name=\"selectedIndex\" [value]=\"i\" [(ngModel)]=\"selectedIndex\" (dblclick)=\"confirmSelection()\">\n              <input *ngIf=\"searchHelp.MULTI\" type=\"checkbox\" [(ngModel)]=\"item.SELECTED\">\n            </td>\n            <td *ngFor=\"let listField of listFields\"\n                [style.display]=\"listField.FIELD_NAME === 'INSTANCE_GUID' ? 'none' : 'table-cell'\">\n              {{item[listField.FIELD_NAME]}}\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"modal-footer dk-search-help-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"closeSearchHelpModal()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"confirmSelection()\" [disabled]=\"searchHelp?.READ_ONLY\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
      styles: [".dk-search-help-header{padding:.3rem .5rem;background-color:#e9ecef}.dk-search-help-footer{padding:.5rem}.dk-search-table{display:block;max-height:20rem;overflow:scroll;white-space:nowrap;border:none}.dk-search-help-content{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px #0003}.dk-search-table th{position:sticky;top:0;z-index:2}\n"]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
    }, {
      type: EntityService
    }];
  }, null);
})();

class AttributeBase {
  constructor() {
    this.dropdownList = [];
  }

}

class DropdownList {} // noinspection JSAnnotator


class DomainValueValidator {
  constructor(entityService) {
    this.entityService = entityService;
  }

  validate(ctrl) {
    const queryObject = new QueryObject(); // queryObject.ENTITY_ID = entityID;
    // queryObject.RELATION_ID = relationID;
    // queryObject.FILTER = [{FIELD_NAME: searchField, OPERATOR: 'EQ', LOW: ctrl.value}];

    return this.entityService.searchEntities(queryObject).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(data => {
      if (data['msgName']) {
        return {
          message: data['msgName']['msgShortText']
        };
      } else {
        if (data.length === 0) {
          return {
            message: 'Value is invalid'
          };
        } else {
          return null;
        }
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => null));
  }

}
/** @nocollapse */


DomainValueValidator.ɵfac = function DomainValueValidator_Factory(t) {
  return new (t || DomainValueValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EntityService));
};
/** @nocollapse */


DomainValueValidator.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DomainValueValidator,
  factory: DomainValueValidator.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainValueValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: EntityService
    }];
  }, null);
})();

class AttributeControlService {
  constructor(entityService, domainValueValidator) {
    this.entityService = entityService;
    this.domainValueValidator = domainValueValidator;
  }

  toAttributeControl(attributes) {
    const attributeControls = [];

    if (!attributes) {
      return attributeControls;
    }

    attributes.forEach(attribute => attributeControls.push(this.toSingleAttributeControl(attribute)));
    return attributeControls;
  }

  toSingleAttributeControl(attribute) {
    const attributeControl = new AttributeBase();
    attributeControl.key = attribute.ATTR_GUID;
    attributeControl.name = attribute.ATTR_NAME;
    attributeControl.label = attribute.LABEL_TEXT;
    attributeControl.list_label = attribute.LIST_HEADER_TEXT;
    attributeControl.relationId = attribute.RELATION_ID;
    attributeControl.searchHelpId = attribute.SEARCH_HELP_ID;
    attributeControl.searchHelpExportField = attribute.SEARCH_HELP_EXPORT_FIELD;
    attributeControl.domainId = attribute.DOMAIN_ID;
    attributeControl.domainEntityId = attribute.DOMAIN_ENTITY_ID;
    attributeControl.domainRelationId = attribute.DOMAIN_RELATION_ID;

    switch (attribute.DATA_TYPE) {
      case 1:
        // Char
        if (attribute.CAPITAL_ONLY) {
          attributeControl.controlType = 'text_capital'; // onkeyup="this.value = this.value.toUpperCase();"
        } else {
          if (attribute.DOMAIN_TYPE === 3) {
            attributeControl.controlType = 'dropdown';

            this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
          } else {
            attributeControl.controlType = 'text';
            attributeControl.pattern = attribute.REG_EXPR;
          }
        }

        attributeControl.maxLength = attribute.DATA_LENGTH;
        attributeControl.primaryKey = attribute.PRIMARY_KEY;
        break;

      case 2:
        // Integer
        if (attribute.DOMAIN_TYPE === 3) {
          attributeControl.controlType = 'dropdown';

          this._generateDropdownList(attribute.DOMAIN_ID, attributeControl);
        } else {
          attributeControl.controlType = 'integer';

          if (attribute.UNSIGNED) {
            attributeControl.pattern = '^\\d+([^.,])?$';
          }

          attributeControl.autoIncrement = attribute.AUTO_INCREMENT;
        }

        attributeControl.primaryKey = attribute.PRIMARY_KEY;
        break;

      case 3:
        // Boolean
        attributeControl.controlType = 'checkbox';
        break;

      case 4:
        // Decimal
        attributeControl.controlType = 'decimal';

        this._setDecimalPattern(attributeControl, attribute);

        break;

      case 5:
        // String
        attributeControl.controlType = 'textarea';
        break;

      case 6:
        // Binary
        attributeControl.controlType = 'file';
        break;

      case 7:
        // Date
        attributeControl.controlType = 'date';
        break;

      case 8:
        // Timestamp
        attributeControl.controlType = 'timestamp';
        break;

      default:
        attributeControl.controlType = 'text';
    }

    return attributeControl;
  }

  _generateDropdownList(domainID, attributeControl) {
    this.entityService.getDataDomain(domainID).subscribe(dataDomain => dataDomain['DOMAIN_VALUES'].forEach(domainValue => {
      attributeControl.dropdownList.push({
        key: domainValue['LOW_VALUE'],
        value: domainValue['LOW_VALUE_TEXT'] || domainValue['LOW_VALUE']
      });
    }));
  }

  _setDecimalPattern(attributeControl, attribute) {
    const zeroPadding = '0000000000000000000000000000000000000';
    attributeControl.step = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '1';
    attributeControl.placeholder = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '0';
    const integerPlace = attribute.DATA_LENGTH - attribute.DECIMAL;
    attributeControl.pattern = attribute.UNSIGNED ? '^(' : '^(\\-?';
    attributeControl.pattern += integerPlace ? '\\d{1,' + integerPlace.toString() + '})' : '0)';
    attributeControl.pattern += '(\\.\\d{1,' + attribute.DECIMAL + '})?$';
    attributeControl.maxLength = attribute.DATA_LENGTH;
  }

  convertToFormControl(attribute, instance) {
    const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(instance[attribute.ATTR_NAME] || '');

    if (attribute.PRIMARY_KEY && !attribute.AUTO_INCREMENT) {
      formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
    } // if (attribute.DOMAIN_TYPE === 2 && !attribute.PRIMARY_KEY) {
    //   formControl.setAsyncValidators(this.domainValueValidator.validate.bind(this.domainValueValidator));
    // }


    return formControl;
  }

  convertToFormGroup(attributes, instance, isDirty) {
    const group = {};
    attributes.forEach(attribute => {
      group[attribute.ATTR_NAME] = this.convertToFormControl(attribute, instance);

      if (instance[attribute.ATTR_NAME] && isDirty) {
        group[attribute.ATTR_NAME].markAsDirty();
      }
    });
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup(group);
  }

}
/** @nocollapse */


AttributeControlService.ɵfac = function AttributeControlService_Factory(t) {
  return new (t || AttributeControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomainValueValidator));
};
/** @nocollapse */


AttributeControlService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AttributeControlService,
  factory: AttributeControlService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeControlService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: EntityService
    }, {
      type: DomainValueValidator
    }];
  }, null);
})();
/**
 * Convert the date object to a string in format "yyyy-MM-ddThh:mm:ss".
 */


class DatetimeDirective {
  constructor() {
    this.localString = '';
    this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  set localDatetime(d) {
    this.localString = this.toLocalDateString(d);
  }

  toLocalDateString(timeUTC) {
    if (!timeUTC) {
      return '';
    }

    if (isNaN(timeUTC.getTime())) {
      return '';
    } else {
      return timeUTC.getFullYear().toString() + '-' + ('0' + (timeUTC.getMonth() + 1)).slice(-2) + '-' + ('0' + timeUTC.getDate()).slice(-2) + 'T' + timeUTC.toTimeString().slice(0, 8);
    }
  }

  onDateChange(value) {
    if (value !== this.localString) {
      this.localString = value;
      this.dateChange.emit(new Date(value));
    }
  }

}
/** @nocollapse */


DatetimeDirective.ɵfac = function DatetimeDirective_Factory(t) {
  return new (t || DatetimeDirective)();
};
/** @nocollapse */


DatetimeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatetimeDirective,
  selectors: [["input", "type", "datetime-local"]],
  hostVars: 1,
  hostBindings: function DatetimeDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatetimeDirective_change_HostBindingHandler($event) {
        return ctx.onDateChange($event.target.value);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("value", ctx.localString);
    }
  },
  inputs: {
    localDatetime: "localDatetime"
  },
  outputs: {
    dateChange: "dateChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatetimeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: 'input[type=datetime-local]'
    }]
  }], function () {
    return [];
  }, {
    localDatetime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    localString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['value']
    }],
    onDateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['change', ['$event.target.value']]
    }]
  });
})();

class AttributeComponent {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngOnInit() {
    const fieldCtrl = this.formGroup.get(this.attributeControl.name);

    if (!fieldCtrl) {
      return;
    }

    switch (this.attributeControl.controlType) {
      case 'timestamp':
        if (!this.readonly && !fieldCtrl.value) {
          this.localDatetime = new Date();
          fieldCtrl.setValue(this.localDatetime.toISOString().slice(0, 19).replace('T', ' '));
          fieldCtrl.markAsDirty();
        } else if (fieldCtrl.value) {
          // to support Safari and Firefox, the dateStr format 'yyyy-MM-dd HH:mm:ss' needs to be converted to 'yyyy/MM/dd HH:mm:ss'
          this.localDatetime = new Date(fieldCtrl.value.replace(/-/g, '/') + ' UTC');
        }

        fieldCtrl.valueChanges.subscribe(value => {
          if (!value) {
            return;
          }

          this.localDatetime = new Date(value.replace(/-/g, '/') + ' UTC');
        });
        break;

      case 'date':
        if (!this.readonly && !fieldCtrl.value) {
          this.localDatetime = new Date();
          fieldCtrl.setValue(this.localDatetime.toISOString().slice(0, 10));
          fieldCtrl.markAsDirty();
        }

        break;

      default:
    }

    if (this.attributeControl.domainId === 'UUID' && !this.readonly && !fieldCtrl.value) {
      fieldCtrl.setValue((0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])());
      fieldCtrl.markAsDirty();
    }

    if (this.attributeControl.domainId === 'GUID' && !this.readonly && !fieldCtrl.value) {
      let guid = (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])();
      guid = guid.replace(/-/g, '').toUpperCase();
      fieldCtrl.setValue(guid);
      fieldCtrl.markAsDirty();
    }
  }

  ngOnChanges() {
    if (this.attributeControl.controlType === 'dropdown' || this.attributeControl.controlType === 'checkbox') {
      this.readonly ? this.formGroup.get(this.attributeControl.name).disable() : this.formGroup.get(this.attributeControl.name).enable();
    }
  }

  onDateChange(newDate) {
    const UTCDateStr = newDate.toISOString().slice(0, 19).replace('T', ' ');
    const fieldCtrl = this.formGroup.get(this.attributeControl.name);

    if (fieldCtrl) {
      fieldCtrl.setValue(UTCDateStr);
      fieldCtrl.markAsDirty();
    }
  }

  get invalid() {
    var _a;

    return (_a = this.formGroup.controls[this.attributeControl.name]) === null || _a === void 0 ? void 0 : _a.invalid;
  }

  get errorMessage() {
    const fieldCtrl = this.formGroup.get(this.attributeControl.name);

    if (!fieldCtrl) {
      return null;
    }

    if (fieldCtrl.getError('pattern')) {
      return 'The pattern is not correct';
    } else if (fieldCtrl.getError('required')) {
      return 'Required';
    } else if (fieldCtrl.getError('message')) {
      return fieldCtrl.getError('message');
    } else {
      return null;
    }
  }

  get isReadonly() {
    return this.readonly || this.attributeControl.autoIncrement;
  }

  onKeyup(attributeName) {
    const fieldCtrl = this.formGroup.get(attributeName);
    fieldCtrl.setValue(fieldCtrl.value.toUpperCase());
  }

  onSearchHelp(attributeControl) {
    if (attributeControl.searchHelpId) {
      this.searchHelpComponent.openSearchHelpModalBySearchHelp(attributeControl.searchHelpId, attributeControl.searchHelpExportField, attributeControl.name, this.formGroup, this.readonly);
    } else {
      this.searchHelpComponent.openSearchHelpModalByEntity(attributeControl.domainEntityId, attributeControl.domainRelationId, this.formGroup, this.readonly, attributeControl.name, attributeControl.domainId);
    }
  }

  onChange(event) {
    this.change.emit(event);
  }

}
/** @nocollapse */


AttributeComponent.ɵfac = function AttributeComponent_Factory(t) {
  return new (t || AttributeComponent)();
};
/** @nocollapse */


AttributeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AttributeComponent,
  selectors: [["dk-app-attribute"]],
  viewQuery: function AttributeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](SearchHelpComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    }
  },
  inputs: {
    attributeControl: "attributeControl",
    formGroup: "formGroup",
    readonly: "readonly",
    isSmallSize: "isSmallSize",
    noErrorMsg: "noErrorMsg"
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 13,
  vars: 12,
  consts: [[3, "formGroup"], [3, "ngSwitch"], ["class", "input-group", 4, "ngIf"], ["type", "number", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "step", "placeholder", "pattern", "readonly", "change", 4, "ngSwitchCase"], ["type", "checkbox", "class", "mb-1 ml-1", 3, "form-control-sm", "formControlName", "name", "change", 4, "ngSwitchCase"], ["class", "form-control", 3, "form-control-sm", "formControlName", "name", "rows", "readonly", "change", 4, "ngSwitchCase"], ["type", "file", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "readonly", "change", 4, "ngSwitchCase"], ["type", "date", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "readonly", "change", 4, "ngSwitchCase"], ["type", "datetime-local", "class", "form-control", "step", "1", 3, "form-control-sm", "localDatetime", "name", "readonly", "localDatetimeChange", "dateChange", "change", 4, "ngSwitchCase"], ["type", "password", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "readonly", "change", 4, "ngSwitchCase"], ["class", "form-control", 3, "form-control-sm", "formControlName", "name", "change", 4, "ngSwitchCase"], ["class", "dk-invalid-feedback", 3, "ng-invalid", 4, "ngIf"], [1, "input-group"], ["type", "text", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "maxlength", "pattern", "readonly", "change", 4, "ngSwitchCase"], ["type", "text", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "maxlength", "readonly", "keyup", "change", 4, "ngSwitchCase"], ["type", "number", "class", "form-control", 3, "form-control-sm", "formControlName", "name", "pattern", "readonly", "change", 4, "ngSwitchCase"], ["class", "input-group-append", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControlName", "name", "maxlength", "pattern", "readonly", "change"], ["type", "text", 1, "form-control", 3, "formControlName", "name", "maxlength", "readonly", "keyup", "change"], ["type", "number", 1, "form-control", 3, "formControlName", "name", "pattern", "readonly", "change"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["type", "number", 1, "form-control", 3, "formControlName", "name", "step", "placeholder", "pattern", "readonly", "change"], ["type", "checkbox", 1, "mb-1", "ml-1", 3, "formControlName", "name", "change"], [1, "form-control", 3, "formControlName", "name", "rows", "readonly", "change"], ["type", "file", 1, "form-control", 3, "formControlName", "name", "readonly", "change"], ["type", "date", 1, "form-control", 3, "formControlName", "name", "readonly", "change"], ["type", "datetime-local", "step", "1", 1, "form-control", 3, "localDatetime", "name", "readonly", "localDatetimeChange", "dateChange", "change"], ["type", "password", 1, "form-control", 3, "formControlName", "name", "readonly", "change"], [1, "form-control", 3, "formControlName", "name", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "dk-invalid-feedback"]],
  template: function AttributeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributeComponent_div_2_Template, 5, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeComponent_input_3_Template, 1, 8, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributeComponent_input_4_Template, 1, 4, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttributeComponent_textarea_5_Template, 1, 6, "textarea", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttributeComponent_input_6_Template, 1, 5, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributeComponent_input_7_Template, 1, 5, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributeComponent_input_8_Template, 1, 5, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AttributeComponent_input_9_Template, 1, 5, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttributeComponent_select_10_Template, 2, 5, "select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AttributeComponent_div_11_Template, 2, 3, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "dk-app-search-help");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.attributeControl.controlType);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attributeControl.controlType === "text" || ctx.attributeControl.controlType === "text_capital" || ctx.attributeControl.controlType === "integer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "decimal");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "file");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "timestamp");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noErrorMsg);
    }
  },
  directives: [SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, DatetimeDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dk-app-attribute',
      template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"attributeControl.controlType\">\n    <div *ngIf=\"attributeControl.controlType === 'text' ||\n                attributeControl.controlType === 'text_capital' ||\n                attributeControl.controlType === 'integer'\" class=\"input-group\">\n      <input *ngSwitchCase=\"'text'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [name]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             [pattern]=\"attributeControl.pattern\"\n             (change) = \"onChange($event)\"\n             [readonly]=\"isReadonly\">\n      <input *ngSwitchCase=\"'text_capital'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [name]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             (keyup)=\"onKeyup(attributeControl.name)\"\n             (change) = \"onChange($event)\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'integer'\" type=\"number\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [name]=\"attributeControl.key\"\n             [pattern]=\"attributeControl.pattern\"\n             (change) = \"onChange($event)\"\n             [readonly]=\"isReadonly\" >\n      <div *ngIf=\"attributeControl.searchHelpId || attributeControl.domainRelationId\" class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" (click)=\"onSearchHelp(attributeControl)\">\n          <span class=\"fas fa-search\"></span>\n        </button>\n      </div>\n    </div>\n    <input *ngSwitchCase=\"'decimal'\" type=\"number\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [name]=\"attributeControl.key\"\n           [step]=\"attributeControl.step\"\n           [placeholder]=\"attributeControl.placeholder\"\n           [pattern]=\"attributeControl.pattern\"\n           (change) = \"onChange($event)\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" class=\"mb-1 ml-1\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           (change) = \"onChange($event)\"\n           [name]=\"attributeControl.key\">\n    <textarea *ngSwitchCase=\"'textarea'\" class=\"form-control\"\n              [class.form-control-sm] = \"isSmallSize\"\n              [formControlName]=\"attributeControl.name\"\n              [name]=\"attributeControl.key\"\n              [rows]=\"attributeControl.rows\"\n              (change) = \"onChange($event)\"\n              [readonly]=\"isReadonly\"></textarea>\n    <input *ngSwitchCase=\"'file'\" type=\"file\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [name]=\"attributeControl.key\"\n           (change) = \"onChange($event)\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'date'\" type=\"date\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [name]=\"attributeControl.key\"\n           (change) = \"onChange($event)\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'timestamp'\" type=\"datetime-local\" class=\"form-control\" step=\"1\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [(localDatetime)] = \"localDatetime\"\n           (dateChange)=\"onDateChange($event)\"\n           [name]=\"attributeControl.key\"\n           (change) = \"onChange($event)\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'password'\" type=\"password\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [name]=\"attributeControl.key\"\n           (change) = \"onChange($event)\"\n           [readonly]=\"isReadonly\" >\n    <select *ngSwitchCase=\"'dropdown'\" class=\"form-control\"\n            [class.form-control-sm] = \"isSmallSize\"\n            [formControlName]=\"attributeControl.name\"\n            [name]=\"attributeControl.key\"\n            (change) = \"onChange($event)\">\n      <option *ngFor=\"let opt of attributeControl.dropdownList\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n  </div>\n\n  <div *ngIf=\"!noErrorMsg\" [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">\n    {{errorMessage}}\n  </div>\n</div>\n\n<dk-app-search-help></dk-app-search-help>\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, {
    attributeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSmallSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    noErrorMsg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    searchHelpComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [SearchHelpComponent, {
        static: false
      }]
    }]
  });
})();

class AttributeFormComponent {
  constructor() {}

  ngOnInit() {}

}
/** @nocollapse */


AttributeFormComponent.ɵfac = function AttributeFormComponent_Factory(t) {
  return new (t || AttributeFormComponent)();
};
/** @nocollapse */


AttributeFormComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AttributeFormComponent,
  selectors: [["dk-app-attribute-form"]],
  inputs: {
    attributeControl: "attributeControl",
    formGroup: "formGroup",
    readonly: "readonly",
    isSmallSize: "isSmallSize"
  },
  decls: 6,
  vars: 10,
  consts: [[1, "form-group", "row", 3, "formGroup"], [1, "col-4", "col-form-label", "text-right"], ["class", "primaryKey", 4, "ngIf"], [1, "col-8", 3, "attributeControl", "formGroup", "isSmallSize", "readonly"], [1, "primaryKey"]],
  template: function AttributeFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeFormComponent_strong_3_Template, 2, 0, "strong", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dk-app-attribute", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.attributeControl.key);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.attributeControl.label, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attributeControl.primaryKey);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.attributeControl)("formGroup", ctx.formGroup)("isSmallSize", ctx.isSmallSize)("readonly", ctx.readonly);
    }
  },
  directives: [AttributeComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeFormComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dk-app-attribute-form',
      template: "<div class=\"form-group row\" [formGroup]=\"formGroup\">\n  <label class=\"col-4 col-form-label text-right\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n  </label>\n\n  <dk-app-attribute class=\"col-8\" [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                 [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\">\n  </dk-app-attribute>\n\n</div>\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, {
    attributeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSmallSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class AttributeForm2Component {
  constructor() {}

  ngOnInit() {}

  get invalid() {
    var _a;

    return (_a = this.formGroup.controls[this.attributeControl.name]) === null || _a === void 0 ? void 0 : _a.invalid;
  }

  get errorMessage() {
    const fieldCtrl = this.formGroup.get(this.attributeControl.name);

    if (!fieldCtrl) {
      return null;
    }

    if (fieldCtrl.getError('pattern')) {
      return 'The pattern is not correct';
    } else if (fieldCtrl.getError('required')) {
      return 'Required';
    } else if (fieldCtrl.getError('message')) {
      return fieldCtrl.getError('message');
    } else {
      return null;
    }
  }

}
/** @nocollapse */


AttributeForm2Component.ɵfac = function AttributeForm2Component_Factory(t) {
  return new (t || AttributeForm2Component)();
};
/** @nocollapse */


AttributeForm2Component.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AttributeForm2Component,
  selectors: [["dk-app-attribute-form2"]],
  inputs: {
    attributeControl: "attributeControl",
    formGroup: "formGroup",
    readonly: "readonly",
    isSmallSize: "isSmallSize"
  },
  decls: 8,
  vars: 14,
  consts: [[1, "form-group", 3, "formGroup"], [1, "col-form-label"], ["class", "primaryKey", 4, "ngIf"], [1, "dk-invalid-feedback"], [3, "attributeControl", "formGroup", "isSmallSize", "readonly", "noErrorMsg"], [1, "primaryKey"]],
  template: function AttributeForm2Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeForm2Component_strong_3_Template, 2, 0, "strong", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "dk-app-attribute", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx.isSmallSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.attributeControl.key);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.attributeControl.label, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attributeControl.primaryKey);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-invalid", ctx.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", ctx.attributeControl)("formGroup", ctx.formGroup)("isSmallSize", ctx.isSmallSize)("readonly", ctx.readonly)("noErrorMsg", true);
    }
  },
  directives: [AttributeComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeForm2Component, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dk-app-attribute-form2',
      template: "<div class=\"form-group\" [formGroup]=\"formGroup\">\n  <label class=\"col-form-label\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n    <span [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">{{errorMessage}}</span>\n  </label>\n\n  <dk-app-attribute [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                    [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\" [noErrorMsg]=\"true\">\n  </dk-app-attribute>\n\n</div>\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, {
    attributeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSmallSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class AttributeTableComponent {
  constructor() {
    this.isDetailModalShown = false;
    this.isErrorModalShown = false;
  }

  ngOnInit() {}

  get displayDetailModal() {
    return this.isDetailModalShown ? 'block' : 'none';
  }

  get displayErrorModal() {
    return this.isErrorModalShown ? 'block' : 'none';
  }

  openDetailModal(index) {
    this.currentFormGroup = this.formArray.at(index);
    this.isDetailModalShown = true;
  }

  closeDetailModal() {
    if (!this.readonly && this.currentFormGroup.dirty) {
      this.currentFormGroup.setValue(this.currentFormGroup.value); // Or the value won't be updated.
    }

    this.isDetailModalShown = false;
  }

  openErrorModal(errorTitle, errorDescription) {
    this.errorTitle = errorTitle;
    this.errorDescription = errorDescription;
    this.isErrorModalShown = true;
  }

  closeErrorModal() {
    this.isErrorModalShown = false;
  }

  deleteRelationInstance(index = 0) {
    switch (this.entityRelation.CARDINALITY) {
      case '[0..n]':
        this.formArray.removeAt(index);
        this.formArray.markAsDirty();

        if (this.formArray.length === 0) {
          this.entityRelation.EMPTY = true;
        }

        break;

      case '[1..n]':
        if (this.formArray.length === 1) {
          this.openErrorModal('Deletion Fail', 'The relation requires at lease one entry!');
        } else {
          this.formArray.removeAt(index);
          this.formArray.markAsDirty();
        }

    }
  }

}
/** @nocollapse */


AttributeTableComponent.ɵfac = function AttributeTableComponent_Factory(t) {
  return new (t || AttributeTableComponent)();
};
/** @nocollapse */


AttributeTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AttributeTableComponent,
  selectors: [["dk-app-attribute-table"]],
  inputs: {
    attributeControls: "attributeControls",
    formArray: "formArray",
    parentFormGroup: "parentFormGroup",
    entityRelation: "entityRelation",
    isSmallSize: "isSmallSize",
    readonly: "readonly"
  },
  decls: 24,
  vars: 17,
  consts: [[1, "table", "table-bordered", "relation-table", 3, "formGroup"], [1, "thead-light"], ["scope", "col"], ["scope", "col", 4, "ngFor", "ngForOf"], [3, "formArrayName"], [4, "ngFor", "ngForOf"], ["class", "modal fade dk-modal-open", "id", "detailModal", "tabindex", "-1", "role", "dialog", 3, "ngClass", "ngStyle", 4, "ngIf"], ["id", "errorModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "error", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "primaryKey", 4, "ngIf"], [1, "primaryKey"], [1, "actions"], ["type", "button", "title", "Detail", 1, "btn", 3, "click"], ["class", "fas fa-search", 4, "ngIf"], ["class", "fas fa-pen", 4, "ngIf"], ["type", "button", "title", "Delete", 1, "btn", 3, "disabled", "click"], [1, "far", "fa-trash-alt"], [1, "fas", "fa-search"], [1, "fas", "fa-pen"], [3, "attributeControl", "isSmallSize", "formGroup", "readonly"], ["id", "detailModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", "dk-modal-open", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-lg"], ["id", "detail", 1, "modal-title"], [3, "readonly", "isSmallSize", "attributeControl", "formGroup", 4, "ngFor", "ngForOf"], [3, "readonly", "isSmallSize", "attributeControl", "formGroup"]],
  template: function AttributeTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr")(3, "th", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Action ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttributeTableComponent_th_5_Template, 3, 2, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributeTableComponent_tr_7_Template, 8, 8, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributeTableComponent_div_8_Template, 14, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h5", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_Template_button_click_15_listener() {
        return ctx.closeErrorModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xD7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_Template_button_click_22_listener() {
        return ctx.closeErrorModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "OK");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-sm", ctx.isSmallSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.parentFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeControls);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formArrayName", ctx.entityRelation.RELATION_ID);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formArray.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.isErrorModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.displayErrorModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx.isSmallSize);
    }
  },
  directives: [AttributeComponent, AttributeFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle],
  styles: [".relation-table[_ngcontent-%COMP%]{display:block;overflow-x:auto;white-space:nowrap;border:none}.actions[_ngcontent-%COMP%]{width:5rem;min-width:5rem;max-width:6rem}.dk-modal-open[_ngcontent-%COMP%]{overflow:auto}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeTableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dk-app-attribute-table',
      template: "<table class=\"table table-bordered relation-table\"\n       [class.table-sm]=\"isSmallSize\"\n       [formGroup]=\"parentFormGroup\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">\n      Action\n    </th>\n    <th scope=\"col\" *ngFor=\"let attributeControl of attributeControls\">\n      {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>\n    </th>\n  </tr>\n  </thead>\n\n  <tbody [formArrayName]=\"entityRelation.RELATION_ID\">\n    <tr *ngFor=\"let formGroup of formArray.controls; let i = index\">\n      <td class=\"actions\">\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" (click)=\"openDetailModal(i)\" title=\"Detail\">\n          <span *ngIf=\"readonly\" class=\"fas fa-search\"></span>\n          <span *ngIf=\"!readonly\" class=\"fas fa-pen\"></span>\n        </button>\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelationInstance(i)\" title=\"Delete\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n      <td *ngFor=\"let attributeControl of attributeControls\">\n        <dk-app-attribute [attributeControl]=\"attributeControl\" [isSmallSize] = \"isSmallSize\"\n                          [formGroup]=\"formGroup\" [readonly]=\"readonly\">\n\n        </dk-app-attribute>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"currentFormGroup\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isDetailModalShown}\"\n     [ngStyle]=\"{'display': displayDetailModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"detail\">Line Detail</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDetailModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <dk-app-attribute-form *ngFor=\"let attributeControl of attributeControls\"\n                               [readonly]=\"readonly\" [isSmallSize]=\"isSmallSize\"\n                            [attributeControl]=\"attributeControl\" [formGroup]=\"currentFormGroup\">\n        </dk-app-attribute-form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeDetailModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" [ngClass]=\"{'show': isErrorModalShown}\"\n     [ngStyle]=\"{'display': displayErrorModal}\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"error\">{{errorTitle}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeErrorModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{errorDescription}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeErrorModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n",
      styles: [".relation-table{display:block;overflow-x:auto;white-space:nowrap;border:none}.actions{width:5rem;min-width:5rem;max-width:6rem}.dk-modal-open{overflow:auto}\n"]
    }]
  }], function () {
    return [];
  }, {
    attributeControls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formArray: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    parentFormGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    entityRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSmallSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class JorAngularComponent {
  constructor() {}

  ngOnInit() {}

}
/** @nocollapse */


JorAngularComponent.ɵfac = function JorAngularComponent_Factory(t) {
  return new (t || JorAngularComponent)();
};
/** @nocollapse */


JorAngularComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: JorAngularComponent,
  selectors: [["dk-jor-angular"]],
  decls: 0,
  vars: 0,
  template: function JorAngularComponent_Template(rf, ctx) {},
  styles: ["@import\"/src/assets/css/global.css\";\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JorAngularComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dk-jor-angular',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<!-- html content -->\n",
      styles: ["@import\"/src/assets/css/global.css\";\n"]
    }]
  }], function () {
    return [];
  }, null);
})();

class JorAngularModule {}
/** @nocollapse */


JorAngularModule.ɵfac = function JorAngularModule_Factory(t) {
  return new (t || JorAngularModule)();
};
/** @nocollapse */


JorAngularModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: JorAngularModule,
  declarations: [JorAngularComponent, SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeTableComponent, AttributeForm2Component, DatetimeDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  exports: [SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeForm2Component, AttributeTableComponent]
});
/** @nocollapse */

JorAngularModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JorAngularModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [JorAngularComponent, SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeTableComponent, AttributeForm2Component, DatetimeDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
      exports: [SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeForm2Component, AttributeTableComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of jor-angular
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map