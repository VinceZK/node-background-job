(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/VinceZK/workspace/javascript/json-on-relations/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        originalHost: 'http://localhost:3000'
      };
      /*
       * In development mode, to ignore zone related error stack frames such as
       * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
       * import the following file, but please comment it out in production mode
       * because it will have performance impact when throw error
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "F0jV":
    /*!******************************************!*\
      !*** ./src/app/custom.reuse.strategy.ts ***!
      \******************************************/

    /*! exports provided: CustomReuseStrategy */

    /***/
    function F0jV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function () {
        return CustomReuseStrategy;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CustomReuseStrategy = /*#__PURE__*/function () {
        function CustomReuseStrategy() {
          _classCallCheck(this, CustomReuseStrategy);

          this.routesToCache = ['list'];
          this.storedRouteHandles = new Map();
        }
        /**
         * When navigation from a reusable component, and if shouldReuseRoute return false,
         * this method is invoked to decide whether the current route should be stored.
         * @param route
         */


        _createClass(CustomReuseStrategy, [{
          key: "shouldDetach",
          value: function shouldDetach(route) {
            // console.log('detaching', route);
            return this.routesToCache.indexOf(route.routeConfig.path) > -1;
          }
          /**
           * If the current route need to be stored, that is shouldDetach return true,
           * then on this method, you can implement a way to store routes. Usually in a Map.
           * @param route
           * @param handle
           */

        }, {
          key: "store",
          value: function store(route, handle) {
            // console.log('store', route);
            this.storedRouteHandles.set(route.routeConfig.path, handle);
          }
          /**
           * When navigation to a reusable component, and if shouldReuseRoute return false,
           * this method is invoked to decide whether the target component can be get from a reuse buffer.
           * @param route
           */

        }, {
          key: "shouldAttach",
          value: function shouldAttach(route) {
            // console.log('shouldAttach', route);
            return this.storedRouteHandles.has(route.routeConfig.path);
          }
          /**
           * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
           * @param route
           */

        }, {
          key: "retrieve",
          value: function retrieve(route) {
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

        }, {
          key: "shouldReuseRoute",
          value: function shouldReuseRoute(future, curr) {
            // console.log('shouldReuseRoute, future:', future, 'current:', curr);
            return future.routeConfig === curr.routeConfig;
          }
        }]);

        return CustomReuseStrategy;
      }();

      CustomReuseStrategy = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], CustomReuseStrategy);
      /***/
    },

    /***/
    "H3s1":
    /*!*************************************!*\
      !*** ./src/app/identity.service.ts ***!
      \*************************************/

    /*! exports provided: IdentityService */

    /***/
    function H3s1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdentityService", function () {
        return IdentityService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ui_logon_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ui-logon-angular */
      "fVQ6");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var IdentityService = /*#__PURE__*/function () {
        function IdentityService() {
          _classCallCheck(this, IdentityService);
        }

        _createClass(IdentityService, [{
          key: "setSession",
          value: function setSession(data) {
            this.session = data;
          }
        }, {
          key: "Session",
          get: function get() {
            if (this.session) {
              return this.session;
            }

            var defaultSession = new ui_logon_angular__WEBPACK_IMPORTED_MODULE_2__["Session"]();
            defaultSession.USER_ID = 'DH001';
            defaultSession.LANGUAGE = 'EN';
            return defaultSession;
          }
        }, {
          key: "CurrentTime",
          get: function get() {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
          }
        }]);

        return IdentityService;
      }();

      IdentityService.ctorParameters = function () {
        return [];
      };

      IdentityService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [])], IdentityService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./msgStore */
      "uLAD");
      /* harmony import */


      var ui_logon_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ui-logon-angular */
      "fVQ6");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./identity.service */
      "H3s1");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AppComponent = function AppComponent(entityService, identityService, messageService, logonService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.entityService = entityService;
        this.identityService = identityService;
        this.messageService = messageService;
        this.logonService = logonService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].originalHost);
        this.logonService.setHost(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].originalHost);
        this.logonService.session().subscribe(function (data) {
          _this.identityService.setSession(data);

          _this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_6__["msgStore"], _this.identityService.Session.LANGUAGE);
        });
      };

      AppComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_8__["IdentityService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }, {
          type: ui_logon_angular__WEBPACK_IMPORTED_MODULE_7__["LogonService"]
        }];
      };

      AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _identity_service__WEBPACK_IMPORTED_MODULE_8__["IdentityService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"], ui_logon_angular__WEBPACK_IMPORTED_MODULE_7__["LogonService"]])], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./custom.reuse.strategy */
      "F0jV");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jor-angular */
      "mE60");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jor_angular__WEBPACK_IMPORTED_MODULE_7__["JorAngularModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
          useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_6__["CustomReuseStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "mE60":
    /*!***************************************************************!*\
      !*** ./dist/jor-angular/__ivy_ngcc__/fesm2015/jor-angular.js ***!
      \***************************************************************/

    /*! exports provided: Association, Attribute, AttributeBase, AttributeComponent, AttributeControlService, AttributeForm2Component, AttributeFormComponent, AttributeTableComponent, DataDomainH, DataDomainMeta, DataDomainValue, DataElementH, DataElementMeta, Entity, EntityMeta, EntityRelation, EntityService, EntityType, FieldsMappingPair, Involve, JorAngularModule, PartnerInstance, PartnerRole, Projection, QueryObject, Relation, RelationMeta, Relationship, RelationshipH, RelationshipInstance, RelationshipMeta, Role, RoleH, RoleMeta, RoleRelation, SearchHelp, SearchHelpComponent, SearchHelpField, SearchHelpFieldMeta, SearchHelpH, SearchHelpMeta, Selection, Sort, UiMapperService, ɵa, ɵb */

    /***/
    function mE60(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Association", function () {
        return Association;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Attribute", function () {
        return Attribute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeBase", function () {
        return AttributeBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeComponent", function () {
        return AttributeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeControlService", function () {
        return AttributeControlService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeForm2Component", function () {
        return AttributeForm2Component;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeFormComponent", function () {
        return AttributeFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeTableComponent", function () {
        return AttributeTableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataDomainH", function () {
        return DataDomainH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataDomainMeta", function () {
        return DataDomainMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataDomainValue", function () {
        return DataDomainValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataElementH", function () {
        return DataElementH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataElementMeta", function () {
        return DataElementMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Entity", function () {
        return Entity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityMeta", function () {
        return EntityMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityRelation", function () {
        return EntityRelation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityService", function () {
        return EntityService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityType", function () {
        return EntityType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldsMappingPair", function () {
        return FieldsMappingPair;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Involve", function () {
        return Involve;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JorAngularModule", function () {
        return JorAngularModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnerInstance", function () {
        return PartnerInstance;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PartnerRole", function () {
        return PartnerRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Projection", function () {
        return Projection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueryObject", function () {
        return QueryObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Relation", function () {
        return Relation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationMeta", function () {
        return RelationMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Relationship", function () {
        return Relationship;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationshipH", function () {
        return RelationshipH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationshipInstance", function () {
        return RelationshipInstance;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationshipMeta", function () {
        return RelationshipMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleH", function () {
        return RoleH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleMeta", function () {
        return RoleMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleRelation", function () {
        return RoleRelation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelp", function () {
        return SearchHelp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpComponent", function () {
        return SearchHelpComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpField", function () {
        return SearchHelpField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpFieldMeta", function () {
        return SearchHelpFieldMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpH", function () {
        return SearchHelpH;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpMeta", function () {
        return SearchHelpMeta;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Selection", function () {
        return Selection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sort", function () {
        return Sort;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiMapperService", function () {
        return UiMapperService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DomainValueValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return JorAngularComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/entity.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      function SearchHelpComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_div_10_div_1_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.fuzzySearchTerm = $event;
          })("keyup", function SearchHelpComponent_div_10_div_1_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.enterSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.fuzzySearchTerm);
        }
      }

      function SearchHelpComponent_div_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchHelpComponent_div_10_div_3_Template_input_keyup_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12.enterSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var filterField_r11 = ctx.$implicit;

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
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchHelpComponent_div_10_div_1_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchHelpComponent_div_10_div_3_Template, 4, 6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_div_10_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.showFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchHelpComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.hideFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchHelpComponent_input_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_input_17_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.isSelectAllChecked = $event;
          })("click", function SearchHelpComponent_input_17_Template_input_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.selectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          var listField_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", listField_r23.FIELD_NAME === "INSTANCE_GUID" ? "none" : "table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", listField_r23.LIST_HEADER_TEXT || listField_r23.FIELD_NAME, " ");
        }
      }

      function SearchHelpComponent_tr_20_input_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_tr_20_input_2_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.selectedIndex = $event;
          })("dblclick", function SearchHelpComponent_tr_20_input_2_Template_input_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.confirmSelection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r25)("ngModel", ctx_r26.selectedIndex);
        }
      }

      function SearchHelpComponent_tr_20_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchHelpComponent_tr_20_input_3_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r24.SELECTED = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

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
          var listField_r37 = ctx.$implicit;

          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", listField_r37.FIELD_NAME === "INSTANCE_GUID" ? "none" : "table-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r24[listField_r37.FIELD_NAME], " ");
        }
      }

      function SearchHelpComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchHelpComponent_tr_20_input_2_Template, 1, 2, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchHelpComponent_tr_20_input_3_Template, 1, 1, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchHelpComponent_tr_20_td_4_Template, 2, 3, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.searchHelp.MULTI);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.searchHelp.MULTI);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.listFields);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "display": a0
        };
      };

      function AttributeComponent_div_2_input_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 16);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r9.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r9.attributeControl.name)("id", ctx_r9.attributeControl.key)("maxlength", ctx_r9.attributeControl.maxLength)("pattern", ctx_r9.attributeControl.pattern)("readonly", ctx_r9.isReadonly);
        }
      }

      function AttributeComponent_div_2_input_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AttributeComponent_div_2_input_2_Template_input_keyup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.onKeyup(ctx_r13.attributeControl.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r10.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r10.attributeControl.name)("id", ctx_r10.attributeControl.key)("maxlength", ctx_r10.attributeControl.maxLength)("readonly", ctx_r10.isReadonly);
        }
      }

      function AttributeComponent_div_2_input_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 18);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r11.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r11.attributeControl.name)("id", ctx_r11.attributeControl.key)("pattern", ctx_r11.attributeControl.pattern)("readonly", ctx_r11.isReadonly);
        }
      }

      function AttributeComponent_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeComponent_div_2_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.onSearchHelp(ctx_r15.attributeControl);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AttributeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributeComponent_div_2_input_1_Template, 1, 7, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributeComponent_div_2_input_2_Template, 1, 6, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeComponent_div_2_input_3_Template, 1, 6, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributeComponent_div_2_div_4_Template, 3, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 22);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r1.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r1.attributeControl.name)("id", ctx_r1.attributeControl.key)("step", ctx_r1.attributeControl.step)("placeholder", ctx_r1.attributeControl.placeholder)("pattern", ctx_r1.attributeControl.pattern)("readonly", ctx_r1.isReadonly);
        }
      }

      function AttributeComponent_input_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 23);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r2.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.attributeControl.name)("id", ctx_r2.attributeControl.key);
        }
      }

      function AttributeComponent_input_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 24);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r3.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r3.attributeControl.name)("id", ctx_r3.attributeControl.key)("readonly", ctx_r3.isReadonly);
        }
      }

      function AttributeComponent_input_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 25);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r4.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r4.attributeControl.name)("id", ctx_r4.attributeControl.key)("readonly", ctx_r4.isReadonly);
        }
      }

      function AttributeComponent_input_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 26);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r5.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r5.attributeControl.name)("id", ctx_r5.attributeControl.key)("readonly", ctx_r5.isReadonly);
        }
      }

      function AttributeComponent_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 27);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r6.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r6.attributeControl.name)("id", ctx_r6.attributeControl.key)("readonly", ctx_r6.isReadonly);
        }
      }

      function AttributeComponent_select_9_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", opt_r18.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](opt_r18.value);
        }
      }

      function AttributeComponent_select_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttributeComponent_select_9_option_1_Template, 2, 2, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-control-sm", ctx_r7.isSmallSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r7.attributeControl.name)("id", ctx_r7.attributeControl.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.attributeControl.dropdownList);
        }
      }

      function AttributeComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-invalid", ctx_r8.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.errorMessage, " ");
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
          var attributeControl_r3 = ctx.$implicit;

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
          var attributeControl_r10 = ctx.$implicit;

          var formGroup_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("attributeControl", attributeControl_r10)("isSmallSize", ctx_r9.isSmallSize)("formGroup", formGroup_r5)("readonly", ctx_r9.readonly);
        }
      }

      function AttributeTableComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_tr_7_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r6 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.openDetailModal(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeTableComponent_tr_7_span_3_Template, 1, 0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributeTableComponent_tr_7_span_4_Template, 1, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_tr_7_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r6 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.deleteRelationInstance(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributeTableComponent_tr_7_td_7_Template, 2, 4, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          var attributeControl_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r15.readonly)("isSmallSize", ctx_r15.isSmallSize)("attributeControl", attributeControl_r16)("formGroup", ctx_r15.currentFormGroup);
        }
      }

      function AttributeTableComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Line Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_div_8_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.closeDetailModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttributeTableComponent_div_8_dk_app_attribute_form_10_Template, 1, 4, "dk-app-attribute-form", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_div_8_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.closeDetailModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r2.isDetailModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.displayDetailModal));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.attributeControls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-sm", ctx_r2.isSmallSize);
        }
      }

      var Entity = function Entity() {
        _classCallCheck(this, Entity);
      };

      if (false) {}

      var Relationship = function Relationship() {
        _classCallCheck(this, Relationship);
      };

      if (false) {}

      var RelationshipInstance = function RelationshipInstance() {
        _classCallCheck(this, RelationshipInstance);
      };

      if (false) {}

      var PartnerInstance = function PartnerInstance() {
        _classCallCheck(this, PartnerInstance);
      };

      if (false) {}

      var PartnerRole = function PartnerRole() {
        _classCallCheck(this, PartnerRole);
      };

      if (false) {}

      var EntityMeta = function EntityMeta() {
        _classCallCheck(this, EntityMeta);
      };

      if (false) {}

      var Attribute = function Attribute() {
        _classCallCheck(this, Attribute);
      };

      if (false) {}

      var Role = function Role() {
        _classCallCheck(this, Role);
      };

      if (false) {}

      var RoleRelation = function RoleRelation() {
        _classCallCheck(this, RoleRelation);
      };

      if (false) {}

      var RelationshipMeta = function RelationshipMeta() {
        _classCallCheck(this, RelationshipMeta);
      };

      if (false) {}

      var Involve = function Involve() {
        _classCallCheck(this, Involve);
      };

      if (false) {}

      var RelationMeta = function RelationMeta() {
        _classCallCheck(this, RelationMeta);
      };

      if (false) {}

      var Association = function Association() {
        _classCallCheck(this, Association);
      };

      if (false) {}

      var FieldsMappingPair = function FieldsMappingPair() {
        _classCallCheck(this, FieldsMappingPair);
      };

      if (false) {}

      var EntityRelation = function EntityRelation() {
        _classCallCheck(this, EntityRelation);
      };

      if (false) {}

      var Selection = function Selection() {
        _classCallCheck(this, Selection);
      };

      if (false) {}

      var Projection = function Projection() {
        _classCallCheck(this, Projection);
      };

      if (false) {}

      var QueryObject = function QueryObject() {
        _classCallCheck(this, QueryObject);
      };

      if (false) {}

      var Sort = function Sort() {
        _classCallCheck(this, Sort);
      };

      if (false) {}

      var EntityType = function EntityType() {
        _classCallCheck(this, EntityType);
      };

      if (false) {}

      var Relation = function Relation() {
        _classCallCheck(this, Relation);
      };

      if (false) {}

      var RelationshipH = function RelationshipH() {
        _classCallCheck(this, RelationshipH);
      };

      if (false) {}

      var RoleH = function RoleH() {
        _classCallCheck(this, RoleH);
      };

      if (false) {}

      var RoleMeta = function RoleMeta() {
        _classCallCheck(this, RoleMeta);
      };

      if (false) {}

      var DataElementH = function DataElementH() {
        _classCallCheck(this, DataElementH);
      };

      if (false) {}

      var DataElementMeta = function DataElementMeta() {
        _classCallCheck(this, DataElementMeta);
      };

      if (false) {}

      var DataDomainH = function DataDomainH() {
        _classCallCheck(this, DataDomainH);
      };

      if (false) {}

      var DataDomainMeta = function DataDomainMeta() {
        _classCallCheck(this, DataDomainMeta);
      };

      if (false) {}

      var DataDomainValue = function DataDomainValue() {
        _classCallCheck(this, DataDomainValue);
      };

      if (false) {}

      var SearchHelpH = function SearchHelpH() {
        _classCallCheck(this, SearchHelpH);
      };

      if (false) {}

      var SearchHelpMeta = function SearchHelpMeta() {
        _classCallCheck(this, SearchHelpMeta);
      };

      if (false) {}

      var SearchHelpFieldMeta = function SearchHelpFieldMeta() {
        _classCallCheck(this, SearchHelpFieldMeta);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/ui-mapper.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var UiMapperService = /*#__PURE__*/function () {
        function UiMapperService() {
          _classCallCheck(this, UiMapperService);
        }
        /**
         * Map a FormGroup to a JOR relation(with cardinality [0..1] and [1..1]) for adding or updating.
         * @param {?} formGroup
         * @param {?} keys
         * @param {?=} isNew
         * @return {?}
         */


        _createClass(UiMapperService, [{
          key: "composeChangedRelation",
          value: function composeChangedRelation(formGroup, keys) {
            var isNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            if (!formGroup.dirty || !keys || Object.keys(keys).length === 0) {
              return {};
            }
            /** @type {?} */


            var changedRelation = {
              action: isNew ? 'add' : 'update'
            };
            Object.keys(keys).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return changedRelation[key] = keys[key] || formGroup.value[key];
            });
            Object.keys(formGroup.controls).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              /** @type {?} */
              var control = formGroup.get(key);

              if (control.dirty) {
                changedRelation[key] = control.value;
              }
            });
            return changedRelation;
          }
          /**
           * Map a FormArray to JOR relation(with cardinality [0..n] or [1..n]) for adding, updating, or deletion.
           * @param {?} formArray
           * @param {?} originalArray
           * @param {?} keys
           * @return {?}
           */

        }, {
          key: "composeChangedRelationArray",
          value: function composeChangedRelationArray(formArray, originalArray, keys) {
            if (!formArray.dirty || !keys || Object.keys(keys).length === 0) {
              return [];
            }

            if (!originalArray) {
              originalArray = [];
            }
            /** @type {?} */


            var changedRelationArray = [];
            formArray.controls.forEach(
            /**
            * @param {?} formGroup
            * @return {?}
            */
            function (formGroup) {
              if (formGroup.dirty) {
                /** @type {?} */
                var changedRelation = {};
                changedRelationArray.push(changedRelation);
                /** @type {?} */

                var index = originalArray.findIndex(
                /**
                * @param {?} element
                * @return {?}
                */
                function (element) {
                  /** @type {?} */
                  var found = true;
                  Object.keys(keys).forEach(
                  /**
                  * @param {?} key
                  * @return {?}
                  */
                  function (key) {
                    if (keys[key]) {
                      return;
                    }

                    found = found && element[key] === formGroup.value[key];
                  });
                  return found;
                });
                changedRelation['action'] = index === -1 ? 'add' : 'update';
                Object.keys(keys).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  return changedRelation[key] = keys[key] || formGroup.value[key];
                });
                Object.keys(formGroup['controls']).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  /** @type {?} */
                  var control = formGroup.get(key);

                  if (control.dirty) {
                    changedRelation[key] = control.value;
                  }
                });
              }
            });
            originalArray.forEach(
            /**
            * @param {?} originalRelation
            * @return {?}
            */
            function (originalRelation) {
              /** @type {?} */
              var index = formArray.controls.findIndex(
              /**
              * @param {?} element
              * @return {?}
              */
              function (element) {
                /** @type {?} */
                var found = true;
                Object.keys(keys).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  if (keys[key]) {
                    return;
                  }

                  found = found && element.value[key] === originalRelation[key];
                });
                return found;
              });

              if (index === -1) {
                /** @type {?} */
                var deletedRelation = {
                  action: 'delete'
                };
                Object.keys(keys).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  return deletedRelation[key] = keys[key] || originalRelation[key];
                });
                changedRelationArray.push(deletedRelation);
              }
            });
            return changedRelationArray;
          }
          /**
           * Map a FormArray to JOR relationships for adding, updating, or deletion.
           * @param {?} relationshipID
           * @param {?} partnerRoles
           * @param {?} formArray
           * @param {?} originalArray
           * @param {?} nonRelationshipAttributes
           * @return {?}
           */

        }, {
          key: "composeChangedRelationship",
          value: function composeChangedRelationship(relationshipID, partnerRoles, formArray, originalArray, nonRelationshipAttributes) {
            if (!formArray.dirty) {
              return null;
            }
            /** @type {?} */


            var relationship = {
              RELATIONSHIP_ID: relationshipID,
              values: []
            };
            formArray.controls.forEach(
            /**
            * @param {?} formGroup
            * @return {?}
            */
            function (formGroup) {
              if (formGroup.dirty) {
                /** @type {?} */
                var changedRelationshipValue = {};
                relationship.values.push(changedRelationshipValue);

                if (formGroup.value['RELATIONSHIP_INSTANCE_GUID']) {
                  changedRelationshipValue['action'] = 'update';
                  changedRelationshipValue['RELATIONSHIP_INSTANCE_GUID'] = formGroup.value['RELATIONSHIP_INSTANCE_GUID'];
                } else {
                  changedRelationshipValue['action'] = 'add';
                  changedRelationshipValue['PARTNER_INSTANCES'] = [];
                  partnerRoles.forEach(
                  /**
                  * @param {?} partnerRole
                  * @return {?}
                  */
                  function (partnerRole) {
                    return changedRelationshipValue['PARTNER_INSTANCES'].push({
                      ENTITY_ID: partnerRole.ENTITY_ID,
                      ROLE_ID: partnerRole.ROLE_ID,
                      INSTANCE_GUID: formGroup.value[partnerRole.ROLE_ID + '_INSTANCE_GUID']
                    });
                  });
                }

                Object.keys(formGroup['controls']).forEach(
                /**
                * @param {?} key
                * @return {?}
                */
                function (key) {
                  if (nonRelationshipAttributes.includes(key) || key.substr(-13) === 'INSTANCE_GUID') {
                    return;
                  }
                  /** @type {?} */


                  var control = formGroup.get(key);

                  if (control.dirty) {
                    changedRelationshipValue[key] = control.value;
                  }
                });
              }
            });
            originalArray.forEach(
            /**
            * @param {?} original
            * @return {?}
            */
            function (original) {
              if (formArray.controls.findIndex(
              /**
              * @param {?} formGroup
              * @return {?}
              */
              function (formGroup) {
                return formGroup.value['RELATIONSHIP_INSTANCE_GUID'] === original['RELATIONSHIP_INSTANCE_GUID'];
              }) === -1) {
                relationship.values.push({
                  action: 'delete',
                  RELATIONSHIP_INSTANCE_GUID: original['RELATIONSHIP_INSTANCE_GUID']
                });
              }
            });
            return relationship.values.length === 0 ? null : relationship;
          }
        }]);

        return UiMapperService;
      }();

      UiMapperService.ɵfac = function UiMapperService_Factory(t) {
        return new (t || UiMapperService)();
      };
      /** @nocollapse */


      UiMapperService.ctorParameters = function () {
        return [];
      };
      /** @nocollapse */


      UiMapperService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function UiMapperService_Factory() {
          return new UiMapperService();
        },
        token: UiMapperService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiMapperService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/entity.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        })
      };

      var EntityService = /*#__PURE__*/function () {
        /**
         * @param {?} http
         * @param {?} messageService
         */
        function EntityService(http, messageService) {
          _classCallCheck(this, EntityService);

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
        /**
         * @param {?} host
         * @return {?}
         */


        _createClass(EntityService, [{
          key: "setOriginalHost",
          value: function setOriginalHost(host) {
            this.originalHost = host;
          }
          /**
           * @param {?} msgStore
           * @param {?} language
           * @return {?}
           */

        }, {
          key: "setMessageStore",
          value: function setMessageStore(msgStore, language) {
            this.messageService.setMessageStore(msgStore, language);
          }
          /**
           * List all entity IDs in the system
           * @return {?}
           */

        }, {
          key: "listEntityID",
          value: function listEntityID() {
            return this.http.get(this.originalHost + "/api/entity/EntityIDs").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityID')));
          }
          /**
           * List entity IDs by a given role ID
           * @param {?} roleID
           * @return {?}
           */

        }, {
          key: "listEntityIDbyRole",
          value: function listEntityIDbyRole(roleID) {
            return this.http.get(this.originalHost + "/api/entity/EntityIDs/".concat(roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityIDbyRole')));
          }
          /**
           * Return the entity meta for a given entity ID
           * @param {?} entityID
           * @return {?}
           */

        }, {
          key: "getEntityMeta",
          value: function getEntityMeta(entityID) {
            return this.http.get(this.originalHost + "/api/entity/meta/".concat(entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityMeta')));
          }
          /**
           * Return a list of entity objects according to the description of a given query object
           * @param {?} queryObject
           * @return {?}
           */

        }, {
          key: "searchEntities",
          value: function searchEntities(queryObject) {
            return this.http.post(this.originalHost + "/api/query", queryObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchEntities')));
          }
          /**
           * Return an entity instance for a given entity instance GUID
           * @param {?} instanceGUID
           * @return {?}
           */

        }, {
          key: "getEntityInstance",
          value: function getEntityInstance(instanceGUID) {
            return this.http.get(this.originalHost + "/api/entity/instance/".concat(instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityInstance')));
          }
          /**
           * Return a relation's meta data for a given relation ID
           * @param {?} relationID
           * @return {?}
           */

        }, {
          key: "getRelationMeta",
          value: function getRelationMeta(relationID) {
            return this.http.get(this.originalHost + "/api/relation/meta/".concat(relationID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMeta')));
          }
          /**
           * Return all relations' meta data for a given entity ID
           * @param {?} entityID
           * @return {?}
           */

        }, {
          key: "getRelationMetaOfEntity",
          value: function getRelationMetaOfEntity(entityID) {
            return this.http.get(this.originalHost + "/api/relation/meta/entity/".concat(entityID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationMetaOfEntity')));
          }
          /**
           * Create a new entity instance
           * @param {?} instance
           * @return {?}
           */

        }, {
          key: "createEntityInstance",
          value: function createEntityInstance(instance) {
            return this.http.post(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createEntityInstance')));
          }
          /**
           * Change an existing entity instance
           * @param {?} instance
           * @return {?}
           */

        }, {
          key: "changeEntityInstance",
          value: function changeEntityInstance(instance) {
            return this.http.put(this.originalHost + "/api/entity", instance, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('changeEntityInstance')));
          }
          /**
           * Delete an entity instance from a given instance GUID
           * @param {?} instanceGUID
           * @return {?}
           */

        }, {
          key: "deleteEntityInstance",
          value: function deleteEntityInstance(instanceGUID) {
            return this.http["delete"](this.originalHost + "/api/entity/instance/".concat(instanceGUID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteEntityInstance')));
          }
          /**
           * Return entity types(IDs) for a given search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listEntityType",
          value: function listEntityType(term) {
            return this.http.get(this.originalHost + "/api/model/entity-types?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listEntityType')));
          }
          /**
           * Return the description of a given entity type(ID)
           * @param {?} entityID
           * @return {?}
           */

        }, {
          key: "getEntityTypeDesc",
          value: function getEntityTypeDesc(entityID) {
            return this.http.get(this.originalHost + "/api/model/entity-types/".concat(entityID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntityTypeDesc')));
          }
          /**
           * Save an entity type after changing or creation
           * @param {?} entityType
           * @return {?}
           */

        }, {
          key: "saveEntityType",
          value: function saveEntityType(entityType) {
            return this.http.post(this.originalHost + "/api/model/entity-types", entityType, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveEntityType')));
          }
          /**
           * Return a list of relations in the system according to the search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listRelation",
          value: function listRelation(term) {
            return this.http.get(this.originalHost + "/api/model/relations?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelation')));
          }
          /**
           * Return the description of a given relation ID
           * @param {?} relationID
           * @return {?}
           */

        }, {
          key: "getRelationDesc",
          value: function getRelationDesc(relationID) {
            return this.http.get(this.originalHost + "/api/model/relations/".concat(relationID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationDesc')));
          }
          /**
           * Save a relation after changing or creation
           * @param {?} relation
           * @return {?}
           */

        }, {
          key: "saveRelation",
          value: function saveRelation(relation) {
            return this.http.post(this.originalHost + "/api/model/relations", relation, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelation')));
          }
          /**
           * Return a list of relationships in the system according to the search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listRelationship",
          value: function listRelationship(term) {
            return this.http.get(this.originalHost + "/api/model/relationships?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRelationship')));
          }
          /**
           * Return a relationship definition from a given relationship ID
           * @param {?} relationshipID
           * @return {?}
           */

        }, {
          key: "getRelationship",
          value: function getRelationship(relationshipID) {
            return this.http.get(this.originalHost + "/api/model/relationships/".concat(relationshipID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationship')));
          }
          /**
           * Return the description of a given relationship ID
           * @param {?} relationshipID
           * @return {?}
           */

        }, {
          key: "getRelationshipDesc",
          value: function getRelationshipDesc(relationshipID) {
            return this.http.get(this.originalHost + "/api/model/relationships/".concat(relationshipID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRelationshipDesc')));
          }
          /**
           * Save a relationship after changing or creation
           * @param {?} relationship
           * @return {?}
           */

        }, {
          key: "saveRelationship",
          value: function saveRelationship(relationship) {
            return this.http.post(this.originalHost + "/api/model/relationships", relationship, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRelationship')));
          }
          /**
           * Return a list of roles in the system according to the search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listRole",
          value: function listRole(term) {
            return this.http.get(this.originalHost + "/api/model/roles?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listRole')));
          }
          /**
           * Return a role definition from a given role ID
           * @param {?} roleID
           * @return {?}
           */

        }, {
          key: "getRole",
          value: function getRole(roleID) {
            return this.http.get(this.originalHost + "/api/model/roles/".concat(roleID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRole')));
          }
          /**
           * Return the description of a given role ID
           * @param {?} roleID
           * @return {?}
           */

        }, {
          key: "getRoleDesc",
          value: function getRoleDesc(roleID) {
            return this.http.get(this.originalHost + "/api/model/roles/".concat(roleID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoleDesc')));
          }
          /**
           * Save a role after changing or creation
           * @param {?} role
           * @return {?}
           */

        }, {
          key: "saveRole",
          value: function saveRole(role) {
            return this.http.post(this.originalHost + "/api/model/roles", role, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveRole')));
          }
          /**
           * Return a list of data elements in the system according to the search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listDataElement",
          value: function listDataElement(term) {
            return this.http.get(this.originalHost + "/api/model/data-elements?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataElement')));
          }
          /**
           * Return a data element definition from a given element ID
           * @param {?} elementID
           * @return {?}
           */

        }, {
          key: "getDataElement",
          value: function getDataElement(elementID) {
            return this.http.get(this.originalHost + "/api/model/data-elements/".concat(elementID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElement')));
          }
          /**
           * Return the description of a given data element ID
           * @param {?} elementID
           * @return {?}
           */

        }, {
          key: "getDataElementDesc",
          value: function getDataElementDesc(elementID) {
            return this.http.get(this.originalHost + "/api/model/data-elements/".concat(elementID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataElementDesc')));
          }
          /**
           * Save a data element after changing or creation
           * @param {?} element
           * @return {?}
           */

        }, {
          key: "saveDataElement",
          value: function saveDataElement(element) {
            return this.http.post(this.originalHost + "/api/model/data-elements", element, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataElement')));
          }
          /**
           * Return a list of data domains in the system according to the search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listDataDomain",
          value: function listDataDomain(term) {
            return this.http.get(this.originalHost + "/api/model/data-domains?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listDataDomain')));
          }
          /**
           * Return a data domain definition from a given domain ID
           * @param {?} domainID
           * @return {?}
           */

        }, {
          key: "getDataDomain",
          value: function getDataDomain(domainID) {
            return this.http.get(this.originalHost + "/api/model/data-domains/".concat(domainID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomain')));
          }
          /**
           * Return the description of a given data domain ID
           * @param {?} domainID
           * @return {?}
           */

        }, {
          key: "getDataDomainDesc",
          value: function getDataDomainDesc(domainID) {
            return this.http.get(this.originalHost + "/api/model/data-domains/".concat(domainID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDataDomainDesc')));
          }
          /**
           * Save a data domain after changing or creation
           * @param {?} domain
           * @return {?}
           */

        }, {
          key: "saveDataDomain",
          value: function saveDataDomain(domain) {
            return this.http.post(this.originalHost + "/api/model/data-domains", domain, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataDomain')));
          }
          /**
           * Return a list of search helps in the system according to the search term
           * @param {?} term
           * @return {?}
           */

        }, {
          key: "listSearchHelp",
          value: function listSearchHelp(term) {
            return this.http.get(this.originalHost + "/api/model/search-helps?term=".concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('listSearchHelp')));
          }
          /**
           * Return a search help definition from a given domain ID
           * @param {?} searchHelpID
           * @return {?}
           */

        }, {
          key: "getSearchHelp",
          value: function getSearchHelp(searchHelpID) {
            return this.http.get(this.originalHost + "/api/model/search-helps/".concat(searchHelpID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSearchHelp')));
          }
          /**
           * Return the description of a given search help ID
           * @param {?} searchHelpID
           * @return {?}
           */

        }, {
          key: "getSearchHelpDesc",
          value: function getSearchHelpDesc(searchHelpID) {
            return this.http.get(this.originalHost + "/api/model/search-helps/".concat(searchHelpID, "/desc")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSearchHelpDesc')));
          }
          /**
           * Save a search help after changing or creation
           * @param {?} searchHelp
           * @return {?}
           */

        }, {
          key: "saveSearchHelp",
          value: function saveSearchHelp(searchHelp) {
            return this.http.post(this.originalHost + "/api/model/search-helps", searchHelp, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveSearchHelp')));
          }
          /**
           * Get data element meta
           * @param {?} elementID
           * @return {?}
           */

        }, {
          key: "getElementMeta",
          value: function getElementMeta(elementID) {
            return this.http.get(this.originalHost + "/api/model/element-meta/".concat(elementID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getElementMeta')));
          }
          /**
           * Return a fake relationship ID before saving
           * @return {?}
           */

        }, {
          key: "generateFakeRelationshipUUID",
          value: function generateFakeRelationshipUUID() {
            /** @type {?} */
            var nextPosition = this.fakeUUIDs.length + 1;
            /** @type {?} */

            var fakeUUID = 'NewRelationship_' + nextPosition;
            this.fakeUUIDs.push(fakeUUID);
            return fakeUUID;
          }
          /**
           * @private
           * @template T
           * @param {?=} operation
           * @param {?=} result
           * @return {?}
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this2 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return (
              /**
              * @param {?} error
              * @return {?}
              */
              function (error) {
                // TODO: send the error to remote logging infrastructure
                console.error(error); // log to console instead

                if (error.status === 401) {
                  _this2.messageService.addMessage('EXCEPTION', 'SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception);
                } else {
                  _this2.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["messageType"].Exception, operation, error.message);
                } // Let the app keep running by returning an empty result.


                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(
                /** @type {?} */
                result);
              }
            );
          }
        }]);

        return EntityService;
      }();

      EntityService.ɵfac = function EntityService_Factory(t) {
        return new (t || EntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
      };
      /** @nocollapse */


      EntityService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }];
      };
      /** @nocollapse */


      EntityService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function EntityService_Factory() {
          return new EntityService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
        },
        token: EntityService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntityService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/search-help/search-help.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var SearchHelp = function SearchHelp() {
        _classCallCheck(this, SearchHelp);
      };

      if (false) {}

      var SearchHelpField = function SearchHelpField() {
        _classCallCheck(this, SearchHelpField);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/search-help/search-help.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var SearchHelpComponent = /*#__PURE__*/function () {
        /**
         * @param {?} fb
         * @param {?} entityService
         */
        function SearchHelpComponent(fb, entityService) {
          _classCallCheck(this, SearchHelpComponent);

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
        /**
         * @return {?}
         */


        _createClass(SearchHelpComponent, [{
          key: "ngOnInit",

          /**
           * @return {?}
           */
          value: function ngOnInit() {
            this.filterFieldsFormGroup = this.fb.group({});
          }
          /**
           * Open an search help dialog with free style
           * @param {?} searchHelp
           * @param {?} exportControl
           * @param {?=} afterExportFn
           * @return {?}
           */

        }, {
          key: "openSearchHelpModal",
          value: function openSearchHelpModal(searchHelp, exportControl, afterExportFn) {
            var _this3 = this;

            if (this.searchHelp !== searchHelp) {
              this.listData = [];
              this.searchHelp = searchHelp;
              this.filterFieldsFormGroup = this.fb.group({});
              this.filterFields = this.searchHelp.FIELDS.filter(
              /**
              * @param {?} fieldMeta
              * @return {?}
              */
              function (fieldMeta) {
                return fieldMeta.FILTER_POSITION;
              });
              this.filterFields.sort(
              /**
              * @param {?} a
              * @param {?} b
              * @return {?}
              */
              function (a, b) {
                return a.FILTER_POSITION - b.FILTER_POSITION;
              });
              this.filterFields.forEach(
              /**
              * @param {?} fieldMeta
              * @return {?}
              */
              function (fieldMeta) {
                if (fieldMeta.IMPORT) {
                  /** @type {?} */
                  var ieFieldName = fieldMeta.IE_FIELD_NAME || fieldMeta.FIELD_NAME;

                  if (exportControl.get(ieFieldName)) {
                    fieldMeta.DEFAULT_VALUE = exportControl.get(ieFieldName).value;
                  }
                }

                _this3.filterFieldsFormGroup.addControl(fieldMeta.FIELD_NAME, _this3.fb.control(fieldMeta.DEFAULT_VALUE));
              });
              this.listFields = this.searchHelp.FIELDS.filter(
              /**
              * @param {?} fieldMeta
              * @return {?}
              */
              function (fieldMeta) {
                return fieldMeta.LIST_POSITION;
              });
              this.listFields.sort(
              /**
              * @param {?} a
              * @param {?} b
              * @return {?}
              */
              function (a, b) {
                return a.LIST_POSITION - b.LIST_POSITION;
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
           * @param {?} entityID
           * @param {?} relationID
           * @param {?} exportControl
           * @param {?} readonly
           * @param {?=} exportField
           * @param {?=} domainID
           * @param {?=} afterExportFn
           * @return {?}
           */

        }, {
          key: "openSearchHelpModalByEntity",
          value: function openSearchHelpModalByEntity(entityID, relationID, exportControl, readonly, exportField, domainID, afterExportFn) {
            var _this4 = this;

            /** @type {?} */
            var currentSearchHelpParas = {
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
              /** @type {?} */

              var searchHelp = new SearchHelp();
              searchHelp.OBJECT_NAME = entityID;

              searchHelp.METHOD =
              /**
              * @param {?} entityService
              * @return {?}
              */
              function (entityService) {
                return (
                  /**
                  * @param {?} searchTerm
                  * @return {?}
                  */
                  function (searchTerm) {
                    return entityService.searchEntities(searchTerm);
                  }
                );
              }(this.entityService);

              searchHelp.BEHAVIOUR = 'M';
              searchHelp.MULTI = false;
              searchHelp.FUZZY_SEARCH = false;
              searchHelp.FIELDS = [];
              searchHelp.READ_ONLY = readonly;
              searchHelp.ENTITY_ID = entityID;
              searchHelp.RELATION_ID = relationID;
              this.entityService.getRelationMeta(relationID).subscribe(
              /**
              * @param {?} data
              * @return {?}
              */
              function (data) {
                /** @type {?} */
                var relationMeta =
                /** @type {?} */
                data;
                relationMeta.ATTRIBUTES.forEach(
                /**
                * @param {?} attribute
                * @return {?}
                */
                function (attribute) {
                  return searchHelp.FIELDS.push({
                    FIELD_NAME: attribute.ATTR_NAME,
                    LABEL_TEXT: attribute.LABEL_TEXT,
                    LIST_HEADER_TEXT: attribute.LIST_HEADER_TEXT,
                    IE_FIELD_NAME: exportField && domainID && domainID === attribute.DOMAIN_ID ? exportField : null,
                    IMPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                    EXPORT: attribute.PRIMARY_KEY || attribute.DOMAIN_ID === domainID,
                    LIST_POSITION: attribute.ORDER,
                    FILTER_POSITION: attribute.ORDER
                  });
                });
                searchHelp.FIELDS.push({
                  FIELD_NAME: 'INSTANCE_GUID',
                  LIST_HEADER_TEXT: 'GUID',
                  IMPORT: false,
                  EXPORT: true,
                  LIST_POSITION: 999,
                  FILTER_POSITION: 0
                });

                _this4.openSearchHelpModal(searchHelp, exportControl, afterExportFn);
              });
            }
          }
          /**
           * Open a search help dialog based on the given search help
           * @param {?} searchHelpID
           * @param {?} searchHelpExportField
           * @param {?} exportField
           * @param {?} exportControl
           * @param {?} readonly
           * @param {?=} afterExportFn
           * @return {?}
           */

        }, {
          key: "openSearchHelpModalBySearchHelp",
          value: function openSearchHelpModalBySearchHelp(searchHelpID, searchHelpExportField, exportField, exportControl, readonly, afterExportFn) {
            var _this5 = this;

            /** @type {?} */
            var currentSearchHelpParas = {
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
              /** @type {?} */

              var searchHelp = new SearchHelp();
              this.entityService.getSearchHelp(searchHelpID).subscribe(
              /**
              * @param {?} searchHelpMeta
              * @return {?}
              */
              function (searchHelpMeta) {
                searchHelp.OBJECT_NAME = searchHelpMeta.SEARCH_HELP_DESC + '(' + searchHelpMeta.SEARCH_HELP_ID + ')';

                searchHelp.METHOD =
                /**
                * @param {?} entityService
                * @return {?}
                */
                function (entityService) {
                  return (
                    /**
                    * @param {?} searchTerm
                    * @return {?}
                    */
                    function (searchTerm) {
                      return entityService.searchEntities(searchTerm);
                    }
                  );
                }(_this5.entityService);

                searchHelp.BEHAVIOUR = searchHelpMeta.BEHAVIOUR;
                searchHelp.MULTI = searchHelpMeta.MULTI;
                searchHelp.FUZZY_SEARCH = searchHelpMeta.FUZZY_SEARCH;
                searchHelp.READ_ONLY = readonly;
                searchHelp.ENTITY_ID = searchHelpMeta.ENTITY_ID;
                searchHelp.RELATION_ID = searchHelpMeta.RELATION_ID;
                searchHelp.FIELDS = searchHelpMeta.FIELDS;
                /** @type {?} */

                var searchHelpField = searchHelp.FIELDS.find(
                /**
                * @param {?} field
                * @return {?}
                */
                function (field) {
                  return (field.IE_FIELD_NAME || field.FIELD_NAME) === searchHelpExportField;
                });
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

                _this5.openSearchHelpModal(searchHelp, exportControl, afterExportFn);
              });
            }
          }
          /**
           * @param {?} currentSearchHelpParas
           * @return {?}
           */

        }, {
          key: "_isPreviousSearchHelp",
          value: function _isPreviousSearchHelp(currentSearchHelpParas) {
            return JSON.stringify(this.preSearchHelpParas) === JSON.stringify(currentSearchHelpParas);
          }
          /**
           * @return {?}
           */

        }, {
          key: "search",
          value: function search() {
            var _this6 = this;

            /** @type {?} */
            var searchTerm;

            if (this.searchHelp.FUZZY_SEARCH) {
              searchTerm = this.fuzzySearchTerm || '';
            } else {
              searchTerm = new QueryObject();
              searchTerm.ENTITY_ID = this.searchHelp.ENTITY_ID;
              searchTerm.RELATION_ID = this.searchHelp.RELATION_ID;
              searchTerm.FILTER = [];
              this.filterFields.forEach(
              /**
              * @param {?} fieldMeta
              * @return {?}
              */
              function (fieldMeta) {
                /** @type {?} */
                var fieldValue = _this6.filterFieldsFormGroup.get(fieldMeta.FIELD_NAME).value;

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
              this.listFields.forEach(
              /**
              * @param {?} fieldMeta
              * @return {?}
              */
              function (fieldMeta) {
                searchTerm.PROJECTION.push({
                  RELATION_ID: fieldMeta.RELATION_ID,
                  FIELD_NAME: fieldMeta.FIELD_NAME
                });
              });
            }

            this.listData = [];
            this.isSelectAllChecked = false;

            if (typeof this.searchHelp.METHOD === 'function') {
              /** @type {?} */
              var searchHelpMethod =
              /** @type {?} */
              this.searchHelp.METHOD;
              searchHelpMethod(searchTerm).subscribe(
              /**
              * @param {?} data
              * @return {?}
              */
              function (data) {
                return _this6._generateSearchList(data);
              });
            } else if (Array.isArray(this.searchHelp.METHOD)) {
              this._generateSearchList(this.searchHelp.METHOD);
            }
          }
          /**
           * @param {?} data
           * @return {?}
           */

        }, {
          key: "_generateSearchList",
          value: function _generateSearchList(data) {
            var _this7 = this;

            data.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              /** @type {?} */
              var listItem = {
                SELECTED: ''
              };

              _this7.listFields.forEach(
              /**
              * @param {?} field
              * @return {?}
              */
              function (field) {
                return listItem[field.FIELD_NAME] = item[field.FIELD_NAME];
              });

              _this7.listData.push(listItem);
            });
          }
          /**
           * @param {?} $event
           * @return {?}
           */

        }, {
          key: "enterSearch",
          value: function enterSearch($event) {
            if ($event.keyCode === 13) {
              this.search();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "showFilter",
          value: function showFilter() {
            this.isFilterShown = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "hideFilter",
          value: function hideFilter() {
            this.isFilterShown = false;
          }
          /**
           * @return {?}
           */

        }, {
          key: "selectAll",
          value: function selectAll() {
            this.isSelectAllChecked = !this.isSelectAllChecked;
            this.listData.forEach(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              return data.SELECTED = !data.SELECTED;
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "confirmSelection",
          value: function confirmSelection() {
            var _this8 = this;

            // TODO: Currently, only single selection is supported. Multiple selection in later time
            if (this.searchHelp.READ_ONLY) {
              return;
            }

            this.listFields.forEach(
            /**
            * @param {?} listField
            * @return {?}
            */
            function (listField) {
              if (_this8.exportControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]) {
                /** @type {?} */
                var exportControl =
                /** @type {?} */
                _this8.exportControl;
                /** @type {?} */

                var ieFieldName = listField.IE_FIELD_NAME || listField.FIELD_NAME;
                /** @type {?} */

                var exportFieldControl = exportControl.get(ieFieldName);

                if (listField.EXPORT && exportFieldControl) {
                  exportFieldControl.setValue(_this8.listData[_this8.selectedIndex][listField.FIELD_NAME]);
                  exportFieldControl.markAsDirty();
                }
              } else {
                if (listField.EXPORT) {
                  _this8.exportControl[listField.FIELD_NAME] = _this8.listData[_this8.selectedIndex][listField.FIELD_NAME];
                }
              }
            });

            if (this.afterExportFn) {
              this.afterExportFn();
            }

            this.listData = [];
            this.isSearchHelpModalShown = false;
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeSearchHelpModal",
          value: function closeSearchHelpModal() {
            this.isSearchHelpModalShown = false;
          }
        }, {
          key: "displaySearchHelpModal",
          get: function get() {
            return this.isSearchHelpModalShown ? 'block' : 'none';
          }
        }]);

        return SearchHelpComponent;
      }();

      SearchHelpComponent.ɵfac = function SearchHelpComponent_Factory(t) {
        return new (t || SearchHelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](EntityService));
      };

      SearchHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchHelpComponent,
        selectors: [["dk-app-search-help"]],
        decls: 26,
        vars: 15,
        consts: [["id", "searchHelp", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content", "dk-search-help-content"], [1, "modal-header", "dk-search-help-header"], ["id", "addRelationship", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "card mb-2", 4, "ngIf"], ["type", "button", "class", "btn btn-link float-right", 3, "click", 4, "ngIf"], [1, "table", "table-bordered", "table-sm", "table-hover", "dk-search-table"], [1, "thead-light"], ["scope", "col"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click", 4, "ngIf"], [3, "display", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "modal-footer", "dk-search-help-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "card", "mb-2"], ["class", "mt-2 mx-2 row", 4, "ngIf"], [1, "mt-2", "mx-2", "row", 3, "formGroup"], ["class", "col-6 form-group row", 4, "ngFor", "ngForOf"], [1, "mb-2"], ["type", "button", "id", "search", 1, "btn", "btn-sm", "btn-primary", "float-right", "mr-2", 3, "click"], [1, "mt-2", "mx-2", "row"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-6", "form-group", "row"], [1, "col-6", "col-form-label", "col-form-label-sm", "text-right", 3, "for"], ["type", "text", 1, "col-6", "form-control", "form-control-sm", 3, "id", "name", "formControlName", "readonly", "keyup"], ["type", "button", 1, "btn", "btn-link", "float-right", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "click"], ["type", "radio", "name", "selectedIndex", 3, "value", "ngModel", "ngModelChange", "dblclick", 4, "ngIf"], ["type", "checkbox", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "radio", "name", "selectedIndex", 3, "value", "ngModel", "ngModelChange", "dblclick"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]],
        template: function SearchHelpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchHelpComponent_Template_button_click_6_listener() {
              return ctx.closeSearchHelpModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchHelpComponent_div_10_Template, 7, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchHelpComponent_button_11_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchHelpComponent_button_12_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SearchHelpComponent_input_17_Template, 1, 1, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SearchHelpComponent_th_18_Template, 2, 3, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchHelpComponent_tr_20_Template, 5, 3, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RadioControlValueAccessor"]],
        styles: [".dk-search-help-header[_ngcontent-%COMP%]{background-color:#e9ecef;padding:.3rem .5rem}.dk-search-help-footer[_ngcontent-%COMP%]{padding:.5rem}.dk-search-table[_ngcontent-%COMP%]{border:none;display:block;max-height:20rem;overflow:scroll;white-space:nowrap}.dk-search-help-content[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px rgba(0,0,0,.2)}.dk-search-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2}"]
      });
      /** @nocollapse */

      SearchHelpComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: EntityService
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchHelpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dk-app-search-help',
            template: "<div class=\"modal fade\" id=\"searchHelp\" tabindex=\"-1\" role=\"dialog\"\n     [ngClass]=\"{'show': isSearchHelpModalShown}\" [ngStyle]=\"{'display': displaySearchHelpModal}\">\n  <div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n    <div class=\"modal-content dk-search-help-content\">\n      <div class=\"modal-header dk-search-help-header\">\n        <h6 class=\"modal-title\" id=\"addRelationship\">{{searchHelp?.OBJECT_NAME}} ({{listData.length}})</h6>\n        <button type=\"button\" class=\"close\" (click)=\"closeSearchHelpModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div *ngIf=\"isFilterShown\" class=\"card mb-2\">\n          <div *ngIf=\"searchHelp && searchHelp.FUZZY_SEARCH\" class=\"mt-2 mx-2 row\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"fuzzySearchTerm\" (keyup)=\"enterSearch($event)\">\n          </div>\n          <div class=\"mt-2 mx-2 row\" [formGroup]=\"filterFieldsFormGroup\">\n            <div *ngFor=\"let filterField of filterFields\" class=\"col-6 form-group row\">\n              <label for=\"{{filterField.FIELD_NAME}}\" class=\"col-6 col-form-label col-form-label-sm text-right\">\n                {{filterField.LABEL_TEXT || filterField.FIELD_NAME}}:</label>\n              <input id=\"{{filterField.FIELD_NAME}}\" name=\"{{filterField.FIELD_NAME}}\" formControlName=\"{{filterField.FIELD_NAME}}\"\n                     type=\"text\" class=\"col-6 form-control form-control-sm\" [readonly]=\"filterField.FILTER_DISP_ONLY\" (keyup)=\"enterSearch($event)\">\n            </div>\n          </div>\n\n          <div class=\"mb-2\">\n            <button type=\"button\" id=\"search\" class=\"btn btn-sm btn-primary float-right mr-2\" (click)=\"search()\">\n              Search\n            </button>\n          </div>\n        </div>\n\n        <button *ngIf=\"!isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"showFilter()\">Show Filter</button>\n        <button *ngIf=\"isFilterShown\" type=\"button\" class=\"btn btn-link float-right\" (click)=\"hideFilter()\">Hide Filter</button>\n\n        <table class=\"table table-bordered table-sm table-hover dk-search-table\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">\n              <input *ngIf=\"searchHelp?.MULTI\" type=\"checkbox\" [(ngModel)]=\"isSelectAllChecked\" (click)=\"selectAll()\">\n            </th>\n            <th *ngFor=\"let listField of listFields\"\n                [style.display]=\"listField.FIELD_NAME === 'INSTANCE_GUID' ? 'none' : 'table-cell'\">\n              {{listField.LIST_HEADER_TEXT || listField.FIELD_NAME}}\n            </th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let item of listData; let i = index\">\n            <td>\n              <input *ngIf=\"!searchHelp.MULTI\" type=\"radio\" name=\"selectedIndex\" [value]=\"i\" [(ngModel)]=\"selectedIndex\" (dblclick)=\"confirmSelection()\">\n              <input *ngIf=\"searchHelp.MULTI\" type=\"checkbox\" [(ngModel)]=\"item.SELECTED\">\n            </td>\n            <td *ngFor=\"let listField of listFields\"\n                [style.display]=\"listField.FIELD_NAME === 'INSTANCE_GUID' ? 'none' : 'table-cell'\">\n              {{item[listField.FIELD_NAME]}}\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"modal-footer dk-search-help-footer\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"closeSearchHelpModal()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"confirmSelection()\" [disabled]=\"searchHelp?.READ_ONLY\">Confirm</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
            styles: [".dk-search-help-header{background-color:#e9ecef;padding:.3rem .5rem}.dk-search-help-footer{padding:.5rem}.dk-search-table{border:none;display:block;max-height:20rem;overflow:scroll;white-space:nowrap}.dk-search-help-content{border:1px solid rgba(0,0,0,.4);box-shadow:8px 5px 5px rgba(0,0,0,.2)}.dk-search-table th{position:-webkit-sticky;position:sticky;top:0;z-index:2}"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: EntityService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute-base.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AttributeBase = function AttributeBase() {
        _classCallCheck(this, AttributeBase);

        this.dropdownList = [];
      };

      if (false) {}

      var DropdownList = function DropdownList() {
        _classCallCheck(this, DropdownList);
      };

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute-validators.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      // noinspection JSAnnotator


      var DomainValueValidator = /*#__PURE__*/function () {
        /**
         * @param {?} entityService
         */
        function DomainValueValidator(entityService) {
          _classCallCheck(this, DomainValueValidator);

          this.entityService = entityService;
        }
        /**
         * @param {?} ctrl
         * @return {?}
         */


        _createClass(DomainValueValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            /** @type {?} */
            var queryObject = new QueryObject(); // queryObject.ENTITY_ID = entityID;
            // queryObject.RELATION_ID = relationID;
            // queryObject.FILTER = [{FIELD_NAME: searchField, OPERATOR: 'EQ', LOW: ctrl.value}];

            return this.entityService.searchEntities(queryObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
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
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(
            /**
            * @return {?}
            */
            function () {
              return null;
            }));
          }
        }]);

        return DomainValueValidator;
      }();

      DomainValueValidator.ɵfac = function DomainValueValidator_Factory(t) {
        return new (t || DomainValueValidator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EntityService));
      };
      /** @nocollapse */


      DomainValueValidator.ctorParameters = function () {
        return [{
          type: EntityService
        }];
      };
      /** @nocollapse */


      DomainValueValidator.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function DomainValueValidator_Factory() {
          return new DomainValueValidator(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService));
        },
        token: DomainValueValidator,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomainValueValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: EntityService
          }];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute-control.service.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AttributeControlService = /*#__PURE__*/function () {
        /**
         * @param {?} entityService
         * @param {?} domainValueValidator
         */
        function AttributeControlService(entityService, domainValueValidator) {
          _classCallCheck(this, AttributeControlService);

          this.entityService = entityService;
          this.domainValueValidator = domainValueValidator;
        }
        /**
         * @param {?} attributes
         * @return {?}
         */


        _createClass(AttributeControlService, [{
          key: "toAttributeControl",
          value: function toAttributeControl(attributes) {
            var _this9 = this;

            /** @type {?} */
            var attributeControls = [];

            if (!attributes) {
              return attributeControls;
            }

            attributes.forEach(
            /**
            * @param {?} attribute
            * @return {?}
            */
            function (attribute) {
              return attributeControls.push(_this9.toSingleAttributeControl(attribute));
            });
            return attributeControls;
          }
          /**
           * @param {?} attribute
           * @return {?}
           */

        }, {
          key: "toSingleAttributeControl",
          value: function toSingleAttributeControl(attribute) {
            /** @type {?} */
            var attributeControl = new AttributeBase();
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
          /**
           * @param {?} domainID
           * @param {?} attributeControl
           * @return {?}
           */

        }, {
          key: "_generateDropdownList",
          value: function _generateDropdownList(domainID, attributeControl) {
            this.entityService.getDataDomain(domainID).subscribe(
            /**
            * @param {?} dataDomain
            * @return {?}
            */
            function (dataDomain) {
              return dataDomain['DOMAIN_VALUES'].forEach(
              /**
              * @param {?} domainValue
              * @return {?}
              */
              function (domainValue) {
                attributeControl.dropdownList.push({
                  key: domainValue['LOW_VALUE'],
                  value: domainValue['LOW_VALUE_TEXT'] || domainValue['LOW_VALUE']
                });
              });
            });
          }
          /**
           * @param {?} attributeControl
           * @param {?} attribute
           * @return {?}
           */

        }, {
          key: "_setDecimalPattern",
          value: function _setDecimalPattern(attributeControl, attribute) {
            /** @type {?} */
            var zeroPadding = '0000000000000000000000000000000000000';
            attributeControl.step = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '1';
            attributeControl.placeholder = '0.' + zeroPadding.substr(0, attribute.DECIMAL - 1) + '0';
            /** @type {?} */

            var integerPlace = attribute.DATA_LENGTH - attribute.DECIMAL;
            attributeControl.pattern = attribute.UNSIGNED ? '^(' : '^(\\-?';
            attributeControl.pattern += integerPlace ? '\\d{1,' + integerPlace.toString() + '})' : '0)';
            attributeControl.pattern += '(\\.\\d{1,' + attribute.DECIMAL + '})?$';
            attributeControl.maxLength = attribute.DATA_LENGTH;
          }
          /**
           * @param {?} attribute
           * @param {?} instance
           * @return {?}
           */

        }, {
          key: "convertToFormControl",
          value: function convertToFormControl(attribute, instance) {
            /** @type {?} */
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](instance[attribute.ATTR_NAME] || '');

            if (attribute.PRIMARY_KEY && !attribute.AUTO_INCREMENT) {
              formControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
            } // if (attribute.DOMAIN_TYPE === 2 && !attribute.PRIMARY_KEY) {
            //   formControl.setAsyncValidators(this.domainValueValidator.validate.bind(this.domainValueValidator));
            // }


            return formControl;
          }
          /**
           * @param {?} attributes
           * @param {?} instance
           * @param {?=} isDirty
           * @return {?}
           */

        }, {
          key: "convertToFormGroup",
          value: function convertToFormGroup(attributes, instance, isDirty) {
            var _this10 = this;

            /** @type {?} */
            var group = {};
            attributes.forEach(
            /**
            * @param {?} attribute
            * @return {?}
            */
            function (attribute) {
              group[attribute.ATTR_NAME] = _this10.convertToFormControl(attribute, instance);

              if (instance[attribute.ATTR_NAME] && isDirty) {
                group[attribute.ATTR_NAME].markAsDirty();
              }
            });
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"](group);
          }
        }]);

        return AttributeControlService;
      }();

      AttributeControlService.ɵfac = function AttributeControlService_Factory(t) {
        return new (t || AttributeControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EntityService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomainValueValidator));
      };
      /** @nocollapse */


      AttributeControlService.ctorParameters = function () {
        return [{
          type: EntityService
        }, {
          type: DomainValueValidator
        }];
      };
      /** @nocollapse */


      AttributeControlService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AttributeControlService_Factory() {
          return new AttributeControlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(EntityService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DomainValueValidator));
        },
        token: AttributeControlService,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeControlService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
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

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AttributeComponent = /*#__PURE__*/function () {
        function AttributeComponent() {
          _classCallCheck(this, AttributeComponent);
        }
        /**
         * @return {?}
         */


        _createClass(AttributeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /** @type {?} */
            var fieldCtrl = this.formGroup.get(this.attributeControl.name);

            switch (this.attributeControl.controlType) {
              case 'timestamp':
                if (!this.readonly && !fieldCtrl.value) {
                  /** @type {?} */
                  var currentTimestamp = new Date();
                  fieldCtrl.setValue(currentTimestamp.getFullYear() + '-' + ('0' + (currentTimestamp.getMonth() + 1)).slice(-2) + '-' + ('0' + currentTimestamp.getDate()).slice(-2) + ' ' + ('0' + currentTimestamp.getHours()).slice(-2) + ':' + ('0' + currentTimestamp.getMinutes()).slice(-2) + ':' + ('0' + currentTimestamp.getSeconds()).slice(-2));
                  fieldCtrl.markAsDirty();
                }

                break;

              case 'date':
                if (!this.readonly && !fieldCtrl.value) {
                  /** @type {?} */
                  var currentDate = new Date();
                  fieldCtrl.setValue(currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2));
                  fieldCtrl.markAsDirty();
                }

                break;

              default:
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.attributeControl.controlType === 'dropdown' || this.attributeControl.controlType === 'checkbox') {
              this.readonly ? this.formGroup.get(this.attributeControl.name).disable() : this.formGroup.get(this.attributeControl.name).enable();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "onKeyup",

          /**
           * @param {?} attributeName
           * @return {?}
           */
          value: function onKeyup(attributeName) {
            /** @type {?} */
            var fieldCtrl = this.formGroup.get(attributeName);
            fieldCtrl.setValue(fieldCtrl.value.toUpperCase());
          }
          /**
           * @param {?} attributeControl
           * @return {?}
           */

        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(attributeControl) {
            if (attributeControl.searchHelpId) {
              this.searchHelpComponent.openSearchHelpModalBySearchHelp(attributeControl.searchHelpId, attributeControl.searchHelpExportField, attributeControl.name, this.formGroup, this.readonly);
            } else {
              this.searchHelpComponent.openSearchHelpModalByEntity(attributeControl.domainEntityId, attributeControl.domainRelationId, this.formGroup, this.readonly, attributeControl.name, attributeControl.domainId);
            }
          }
        }, {
          key: "invalid",
          get: function get() {
            return this.formGroup.controls[this.attributeControl.name].invalid;
          }
          /**
           * @return {?}
           */

        }, {
          key: "errorMessage",
          get: function get() {
            /** @type {?} */
            var fieldCtrl = this.formGroup.get(this.attributeControl.name);

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
          /**
           * @return {?}
           */

        }, {
          key: "isReadonly",
          get: function get() {
            return this.readonly || this.attributeControl.autoIncrement;
          }
        }]);

        return AttributeComponent;
      }();

      AttributeComponent.ɵfac = function AttributeComponent_Factory(t) {
        return new (t || AttributeComponent)();
      };

      AttributeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AttributeComponent,
        selectors: [["dk-app-attribute"]],
        viewQuery: function AttributeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](SearchHelpComponent, true);
          }

          if (rf & 2) {
            var _t;

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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 12,
        vars: 11,
        consts: [[3, "formGroup"], [3, "ngSwitch"], ["class", "input-group", 4, "ngIf"], ["type", "number", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "step", "placeholder", "pattern", "readonly", 4, "ngSwitchCase"], ["type", "checkbox", "class", "mb-1 ml-1", 3, "form-control-sm", "formControlName", "id", 4, "ngSwitchCase"], ["type", "textarea", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "readonly", 4, "ngSwitchCase"], ["type", "file", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "readonly", 4, "ngSwitchCase"], ["type", "date", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "readonly", 4, "ngSwitchCase"], ["type", "text", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "readonly", 4, "ngSwitchCase"], ["class", "form-control", 3, "form-control-sm", "formControlName", "id", 4, "ngSwitchCase"], ["class", "dk-invalid-feedback", 3, "ng-invalid", 4, "ngIf"], [1, "input-group"], ["type", "text", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "maxlength", "pattern", "readonly", 4, "ngSwitchCase"], ["type", "text", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "maxlength", "readonly", "keyup", 4, "ngSwitchCase"], ["type", "number", "class", "form-control", 3, "form-control-sm", "formControlName", "id", "pattern", "readonly", 4, "ngSwitchCase"], ["class", "input-group-append", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControlName", "id", "maxlength", "pattern", "readonly"], ["type", "text", 1, "form-control", 3, "formControlName", "id", "maxlength", "readonly", "keyup"], ["type", "number", 1, "form-control", 3, "formControlName", "id", "pattern", "readonly"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["type", "number", 1, "form-control", 3, "formControlName", "id", "step", "placeholder", "pattern", "readonly"], ["type", "checkbox", 1, "mb-1", "ml-1", 3, "formControlName", "id"], ["type", "textarea", 1, "form-control", 3, "formControlName", "id", "readonly"], ["type", "file", 1, "form-control", 3, "formControlName", "id", "readonly"], ["type", "date", 1, "form-control", 3, "formControlName", "id", "readonly"], ["type", "text", 1, "form-control", 3, "formControlName", "id", "readonly"], [1, "form-control", 3, "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "dk-invalid-feedback"]],
        template: function AttributeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AttributeComponent_div_2_Template, 5, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeComponent_input_3_Template, 1, 8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AttributeComponent_input_4_Template, 1, 4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttributeComponent_input_5_Template, 1, 5, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttributeComponent_input_6_Template, 1, 5, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributeComponent_input_7_Template, 1, 5, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributeComponent_input_8_Template, 1, 5, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AttributeComponent_select_9_Template, 2, 5, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttributeComponent_div_10_Template, 2, 3, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dk-app-search-help");
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dropdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noErrorMsg);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], SearchHelpComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
        styles: [""]
      });
      /** @nocollapse */

      AttributeComponent.ctorParameters = function () {
        return [];
      };

      AttributeComponent.propDecorators = {
        attributeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSmallSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noErrorMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [SearchHelpComponent, {
            "static": false
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dk-app-attribute',
            template: "<div [formGroup]=\"formGroup\">\n  <div [ngSwitch]=\"attributeControl.controlType\">\n    <div *ngIf=\"attributeControl.controlType === 'text' ||\n                attributeControl.controlType === 'text_capital' ||\n                attributeControl.controlType === 'integer'\" class=\"input-group\">\n      <input *ngSwitchCase=\"'text'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'text_capital'\" type=\"text\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [maxlength]=\"attributeControl.maxLength\"\n             (keyup)=\"onKeyup(attributeControl.name)\"\n             [readonly]=\"isReadonly\" >\n      <input *ngSwitchCase=\"'integer'\" type=\"number\" class=\"form-control\"\n             [class.form-control-sm] = \"isSmallSize\"\n             [formControlName]=\"attributeControl.name\"\n             [id]=\"attributeControl.key\"\n             [pattern]=\"attributeControl.pattern\"\n             [readonly]=\"isReadonly\" >\n      <div *ngIf=\"attributeControl.searchHelpId || attributeControl.domainRelationId\" class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" (click)=\"onSearchHelp(attributeControl)\">\n          <span class=\"fas fa-search\"></span>\n        </button>\n      </div>\n    </div>\n    <input *ngSwitchCase=\"'decimal'\" type=\"number\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [step]=\"attributeControl.step\"\n           [placeholder]=\"attributeControl.placeholder\"\n           [pattern]=\"attributeControl.pattern\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'checkbox'\" type=\"checkbox\" class=\"mb-1 ml-1\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\">\n    <input *ngSwitchCase=\"'textarea'\" type=\"textarea\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'file'\" type=\"file\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'date'\" type=\"date\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <input *ngSwitchCase=\"'timestamp'\" type=\"text\" class=\"form-control\"\n           [class.form-control-sm] = \"isSmallSize\"\n           [formControlName]=\"attributeControl.name\"\n           [id]=\"attributeControl.key\"\n           [readonly]=\"isReadonly\" >\n    <select *ngSwitchCase=\"'dropdown'\" class=\"form-control\"\n            [class.form-control-sm] = \"isSmallSize\"\n            [formControlName]=\"attributeControl.name\"\n            [id]=\"attributeControl.key\">\n      <option *ngFor=\"let opt of attributeControl.dropdownList\" [value]=\"opt.key\">{{opt.value}}</option>\n    </select>\n  </div>\n\n  <div *ngIf=\"!noErrorMsg\" [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">\n    {{errorMessage}}\n  </div>\n</div>\n\n<dk-app-search-help></dk-app-search-help>\n",
            styles: [""]
          }]
        }], function () {
          return [];
        }, {
          attributeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSmallSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          noErrorMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          searchHelpComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [SearchHelpComponent, {
              "static": false
            }]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute-form/attribute-form.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AttributeFormComponent = /*#__PURE__*/function () {
        function AttributeFormComponent() {
          _classCallCheck(this, AttributeFormComponent);
        }
        /**
         * @return {?}
         */


        _createClass(AttributeFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AttributeFormComponent;
      }();

      AttributeFormComponent.ɵfac = function AttributeFormComponent_Factory(t) {
        return new (t || AttributeFormComponent)();
      };

      AttributeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], AttributeComponent],
        styles: [""]
      });
      /** @nocollapse */

      AttributeFormComponent.ctorParameters = function () {
        return [];
      };

      AttributeFormComponent.propDecorators = {
        attributeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSmallSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dk-app-attribute-form',
            template: "<div class=\"form-group row\" [formGroup]=\"formGroup\">\n  <label class=\"col-4 col-form-label text-right\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n  </label>\n\n  <dk-app-attribute class=\"col-8\" [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                 [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\">\n  </dk-app-attribute>\n\n</div>\n",
            styles: [""]
          }]
        }], function () {
          return [];
        }, {
          attributeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSmallSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute-form2/attribute-form2.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AttributeForm2Component = /*#__PURE__*/function () {
        function AttributeForm2Component() {
          _classCallCheck(this, AttributeForm2Component);
        }
        /**
         * @return {?}
         */


        _createClass(AttributeForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.formGroup.controls[this.attributeControl.name].invalid;
          }
          /**
           * @return {?}
           */

        }, {
          key: "errorMessage",
          get: function get() {
            /** @type {?} */
            var fieldCtrl = this.formGroup.get(this.attributeControl.name);

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
        }]);

        return AttributeForm2Component;
      }();

      AttributeForm2Component.ɵfac = function AttributeForm2Component_Factory(t) {
        return new (t || AttributeForm2Component)();
      };

      AttributeForm2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AttributeForm2Component_strong_3_Template, 2, 0, "strong", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], AttributeComponent],
        styles: [""]
      });
      /** @nocollapse */

      AttributeForm2Component.ctorParameters = function () {
        return [];
      };

      AttributeForm2Component.propDecorators = {
        attributeControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSmallSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeForm2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dk-app-attribute-form2',
            template: "<div class=\"form-group\" [formGroup]=\"formGroup\">\n  <label class=\"col-form-label\"\n         [class.form-control-sm]=\"isSmallSize\"\n         [attr.for]=\"attributeControl.key\">\n    {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>:\n    <span [class.ng-invalid]=\"invalid\" class=\"dk-invalid-feedback\">{{errorMessage}}</span>\n  </label>\n\n  <dk-app-attribute [attributeControl]=\"attributeControl\" [formGroup]=\"formGroup\"\n                    [isSmallSize]=\"isSmallSize\" [readonly]=\"readonly\" [noErrorMsg]=\"true\">\n  </dk-app-attribute>\n\n</div>\n",
            styles: [""]
          }]
        }], function () {
          return [];
        }, {
          attributeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSmallSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/attribute/attribute-table/attribute-table.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AttributeTableComponent = /*#__PURE__*/function () {
        function AttributeTableComponent() {
          _classCallCheck(this, AttributeTableComponent);

          this.isDetailModalShown = false;
          this.isErrorModalShown = false;
        }
        /**
         * @return {?}
         */


        _createClass(AttributeTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "openDetailModal",

          /**
           * @param {?} index
           * @return {?}
           */
          value: function openDetailModal(index) {
            this.currentFormGroup = this.formArray.at(index);
            this.isDetailModalShown = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeDetailModal",
          value: function closeDetailModal() {
            if (!this.readonly && this.currentFormGroup.dirty) {
              this.currentFormGroup.setValue(this.currentFormGroup.value); // Or the value won't be updated.
            }

            this.isDetailModalShown = false;
          }
          /**
           * @param {?} errorTitle
           * @param {?} errorDescription
           * @return {?}
           */

        }, {
          key: "openErrorModal",
          value: function openErrorModal(errorTitle, errorDescription) {
            this.errorTitle = errorTitle;
            this.errorDescription = errorDescription;
            this.isErrorModalShown = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "closeErrorModal",
          value: function closeErrorModal() {
            this.isErrorModalShown = false;
          }
          /**
           * @param {?=} index
           * @return {?}
           */

        }, {
          key: "deleteRelationInstance",
          value: function deleteRelationInstance() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

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
        }, {
          key: "displayDetailModal",
          get: function get() {
            return this.isDetailModalShown ? 'block' : 'none';
          }
          /**
           * @return {?}
           */

        }, {
          key: "displayErrorModal",
          get: function get() {
            return this.isErrorModalShown ? 'block' : 'none';
          }
        }]);

        return AttributeTableComponent;
      }();

      AttributeTableComponent.ɵfac = function AttributeTableComponent_Factory(t) {
        return new (t || AttributeTableComponent)();
      };

      AttributeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AttributeTableComponent_th_5_Template, 3, 2, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttributeTableComponent_tr_7_Template, 8, 8, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AttributeTableComponent_div_8_Template, 14, 9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_Template_button_click_15_listener() {
              return ctx.closeErrorModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttributeTableComponent_Template_button_click_22_listener() {
              return ctx.closeErrorModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], AttributeComponent, AttributeFormComponent],
        styles: [".relation-table[_ngcontent-%COMP%]{border:none;display:block;overflow-x:auto;white-space:nowrap}.actions[_ngcontent-%COMP%]{max-width:6rem;min-width:5rem;width:5rem}.dk-modal-open[_ngcontent-%COMP%]{overflow:auto}"]
      });
      /** @nocollapse */

      AttributeTableComponent.ctorParameters = function () {
        return [];
      };

      AttributeTableComponent.propDecorators = {
        attributeControls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parentFormGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        entityRelation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isSmallSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributeTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dk-app-attribute-table',
            template: "<table class=\"table table-bordered relation-table\"\n       [class.table-sm]=\"isSmallSize\"\n       [formGroup]=\"parentFormGroup\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">\n      Action\n    </th>\n    <th scope=\"col\" *ngFor=\"let attributeControl of attributeControls\">\n      {{attributeControl.label}}<strong *ngIf=\"attributeControl.primaryKey\" class=\"primaryKey\">*</strong>\n    </th>\n  </tr>\n  </thead>\n\n  <tbody [formArrayName]=\"entityRelation.RELATION_ID\">\n    <tr *ngFor=\"let formGroup of formArray.controls; let i = index\">\n      <td class=\"actions\">\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" (click)=\"openDetailModal(i)\" title=\"Detail\">\n          <span *ngIf=\"readonly\" class=\"fas fa-search\"></span>\n          <span *ngIf=\"!readonly\" class=\"fas fa-pen\"></span>\n        </button>\n        <button class=\"btn\" [class.btn-sm]=\"isSmallSize\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelationInstance(i)\" title=\"Delete\">\n          <span class=\"far fa-trash-alt\"></span>\n        </button>\n      </td>\n      <td *ngFor=\"let attributeControl of attributeControls\">\n        <dk-app-attribute [attributeControl]=\"attributeControl\" [isSmallSize] = \"isSmallSize\"\n                          [formGroup]=\"formGroup\" [readonly]=\"readonly\">\n\n        </dk-app-attribute>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"currentFormGroup\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isDetailModalShown}\"\n     [ngStyle]=\"{'display': displayDetailModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"detail\">Line Detail</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeDetailModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <dk-app-attribute-form *ngFor=\"let attributeControl of attributeControls\"\n                               [readonly]=\"readonly\" [isSmallSize]=\"isSmallSize\"\n                            [attributeControl]=\"attributeControl\" [formGroup]=\"currentFormGroup\">\n        </dk-app-attribute-form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeDetailModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" [ngClass]=\"{'show': isErrorModalShown}\"\n     [ngStyle]=\"{'display': displayErrorModal}\" id=\"errorModal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"error\">{{errorTitle}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeErrorModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{errorDescription}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" [class.btn-sm]=\"isSmallSize\" (click)=\"closeErrorModal()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n",
            styles: [".relation-table{border:none;display:block;overflow-x:auto;white-space:nowrap}.actions{max-width:6rem;min-width:5rem;width:5rem}.dk-modal-open{overflow:auto}"]
          }]
        }], function () {
          return [];
        }, {
          attributeControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentFormGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          entityRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSmallSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/jor-angular.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var JorAngularComponent = /*#__PURE__*/function () {
        function JorAngularComponent() {
          _classCallCheck(this, JorAngularComponent);
        }
        /**
         * @return {?}
         */


        _createClass(JorAngularComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return JorAngularComponent;
      }();

      JorAngularComponent.ɵfac = function JorAngularComponent_Factory(t) {
        return new (t || JorAngularComponent)();
      };

      JorAngularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JorAngularComponent,
        selectors: [["dk-jor-angular"]],
        decls: 0,
        vars: 0,
        template: function JorAngularComponent_Template(rf, ctx) {},
        styles: ["@import \"/src/assets/css/global.css\";"],
        encapsulation: 2
      });
      /** @nocollapse */

      JorAngularComponent.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JorAngularComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dk-jor-angular',
            template: "<!-- html content -->\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: ["@import \"/src/assets/css/global.css\";"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/jor-angular.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var JorAngularModule = function JorAngularModule() {
        _classCallCheck(this, JorAngularModule);
      };

      JorAngularModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: JorAngularModule
      });
      JorAngularModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function JorAngularModule_Factory(t) {
          return new (t || JorAngularModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JorAngularModule, {
          declarations: function declarations() {
            return [JorAngularComponent, SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeTableComponent, AttributeForm2Component];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]];
          },
          exports: function exports() {
            return [SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeForm2Component, AttributeTableComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JorAngularModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [JorAngularComponent, SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeTableComponent, AttributeForm2Component],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            exports: [SearchHelpComponent, AttributeComponent, AttributeFormComponent, AttributeForm2Component, AttributeTableComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: jor-angular.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=jor-angular.js.map

      /***/

    },

    /***/
    "uLAD":
    /*!*****************************!*\
      !*** ./src/app/msgStore.ts ***!
      \*****************************/

    /*! exports provided: msgStore */

    /***/
    function uLAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "msgStore", function () {
        return msgStore;
      });

      var msgStore = [{
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
      }, {
        msgCat: 'ENTITY',
        msgName: 'NO_CHANGE',
        msgText: {
          EN: {
            shortText: 'No Change is made, nothing is saved!',
            longText: ''
          }
        }
      }, {
        msgCat: 'ENTITY',
        msgName: 'HAS_ERRORS',
        msgText: {
          EN: {
            shortText: 'The form has errors, please check!',
            longText: ''
          }
        }
      }, {
        msgCat: 'ENTITY',
        msgName: 'ENTITY_SAVED',
        msgText: {
          EN: {
            shortText: 'Entity instance is saved!',
            longText: ''
          }
        }
      }, {
        msgCat: 'ENTITY',
        msgName: 'ENTITY_DELETED',
        msgText: {
          EN: {
            shortText: 'Entity instance is deleted!',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'PARTNER_ENTITY_ID_MISSING',
        msgText: {
          EN: {
            shortText: 'Partner Entity ID is Missing',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'PARTNER_INSTANCE_GUID_MISSING',
        msgText: {
          EN: {
            shortText: 'Partner Instance GUID is Missing',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'VALID_TO_EMPTY',
        msgText: {
          EN: {
            shortText: 'Valid To is Mandatory',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'VALID_FROM_AFTER_VALID_TO',
        msgText: {
          EN: {
            shortText: 'Valid From time must be before Valid To',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'MANDATORY_ATTRIBUTE_MISSING',
        msgText: {
          EN: {
            shortText: 'Mandatory attribute must be given values',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'RELATIONSHIP_MANDATORY',
        msgText: {
          EN: {
            shortText: 'Relationship is mandatory',
            longText: ''
          }
        }
      }, {
        msgCat: 'RELATIONSHIP',
        msgName: 'RELATIONSHIP_ALREADY_EXISTS',
        msgText: {
          EN: {
            shortText: 'Relationship %s already exists!',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'NO_CHANGE',
        msgText: {
          EN: {
            shortText: 'No Change is made, nothing is saved!',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'INVALID_DATA',
        msgText: {
          EN: {
            shortText: 'Data is invalid, please check!',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'ENTITY_ID_MISSING',
        msgText: {
          EN: {
            shortText: 'Entity Type ID is missing',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'ENTITY_TYPE_SAVED',
        msgText: {
          EN: {
            shortText: 'Entity Type "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'ROLE_SAVED',
        msgText: {
          EN: {
            shortText: 'Role "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'RELATION_ID_MISSING',
        msgText: {
          EN: {
            shortText: 'Relation ID is missing',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'RELATION_PRIMARY_KEY_MISSING',
        msgText: {
          EN: {
            shortText: 'Relation must have at least one attribute as the primary key',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING',
        msgText: {
          EN: {
            shortText: 'There are no fields-mappings defined for association \'%s\'',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'RELATION_SAVED',
        msgText: {
          EN: {
            shortText: 'Relation "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'RELATIONSHIP_SAVED',
        msgText: {
          EN: {
            shortText: 'Relationship "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'RELATIONSHIP_LACK_INVOLVED_ROLES',
        msgText: {
          EN: {
            shortText: 'A relationship must at least have 2 involved roles',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'DATA_ELEMENT_SAVED',
        msgText: {
          EN: {
            shortText: 'Data element "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'DATA_DOMAIN_SAVED',
        msgText: {
          EN: {
            shortText: 'Data domain "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'MINIMUM_ONE_DOMAIN_VALUE',
        msgText: {
          EN: {
            shortText: 'At least one domain value is needed!',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'SEARCH_HELP_SAVED',
        msgText: {
          EN: {
            shortText: 'Search Help "%s" is saved',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'MINIMUM_ONE_SEARCH_FIELD',
        msgText: {
          EN: {
            shortText: 'At least one search field is needed!',
            longText: ''
          }
        }
      }, {
        msgCat: 'MODEL',
        msgName: 'UNSAVED_NEW',
        msgText: {
          EN: {
            shortText: 'There is a unsaved new object existing, please save it first, then create another.',
            longText: ''
          }
        }
      }];
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: 'entity',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | entity-entity-module */
          [__webpack_require__.e("default~entity-entity-module~model-model-module"), __webpack_require__.e("entity-entity-module")]).then(__webpack_require__.bind(null,
          /*! ./entity/entity.module */
          "enwJ")).then(function (m) {
            return m.EntityModule;
          });
        }
      }, {
        path: 'model',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | model-model-module */
          [__webpack_require__.e("default~entity-entity-module~model-model-module"), __webpack_require__.e("model-model-module")]).then(__webpack_require__.bind(null,
          /*! ./model/model.module */
          "DIJg")).then(function (m) {
            return m.ModelModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/entity/list',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map