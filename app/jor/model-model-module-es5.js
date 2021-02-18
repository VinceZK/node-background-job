(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["model-model-module"], {
    /***/
    "0Meb":
    /*!*******************************************************************!*\
      !*** ./src/app/model/attribute-meta/attribute-meta.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Meb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 6rem;\n}\n.dk-description{\n  min-width: 12rem;\n  max-width: 20rem;\n}\n.dk-dataElement{\n  min-width: 12rem;\n  max-width: 20rem;\n}\n.dk-number{\n  min-width: 4rem;\n  max-width: 6rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvYXR0cmlidXRlLW1ldGEvYXR0cmlidXRlLW1ldGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2F0dHJpYnV0ZS1tZXRhL2F0dHJpYnV0ZS1tZXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA2cmVtO1xufVxuLmRrLWRlc2NyaXB0aW9ue1xuICBtaW4td2lkdGg6IDEycmVtO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuLmRrLWRhdGFFbGVtZW50e1xuICBtaW4td2lkdGg6IDEycmVtO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xufVxuLmRrLW51bWJlcntcbiAgbWluLXdpZHRoOiA0cmVtO1xuICBtYXgtd2lkdGg6IDZyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "1Afv":
    /*!**************************************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: DataDomainDetailComponent */

    /***/
    function Afv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataDomainDetailComponent", function () {
        return DataDomainDetailComponent;
      });
      /* harmony import */


      var _raw_loader_data_domain_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./data-domain-detail.component.html */
      "f15a");
      /* harmony import */


      var _data_domain_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-domain-detail.component.css */
      "hZqC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DataDomainDetailComponent = /*#__PURE__*/function () {
        function DataDomainDetailComponent(route, router, fb, uniqueDataDomainValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, DataDomainDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueDataDomainValidator = uniqueDataDomainValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.dataTypes = [];
          this.changedDataDomain = {};
          this.relationsOfEntity = [];
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.enableGeneralType = false;
          this.enableRegExpr = false;
          this.enableValueRelation = false;
          this.enableArrayOrInterval = false;
          this.dataTypes = this.modelService.dataTypes;
        }

        _createClass(DataDomainDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (params) {
              var domainID = params.get('domainID');

              if (domainID === 'new') {
                var dataDomain = new jor_angular__WEBPACK_IMPORTED_MODULE_11__["DataDomainMeta"]();
                dataDomain.DOMAIN_ID = '';
                dataDomain.DOMAIN_DESC = '';
                dataDomain.DATA_TYPE = 1; // Char by default

                dataDomain.DATA_LENGTH = 10;
                dataDomain.DOMAIN_TYPE = 0;
                _this.isNewMode = true;
                _this.readonly = false;
                _this.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(dataDomain);
              } else {
                _this.readonly = true;
                _this.isNewMode = false;
                return _this.entityService.getDataDomain(domainID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this.messageService.clearMessages();

                _this.dataDomainMeta = null;
                _this.dataDomainForm = null;

                _this.messageService.report(data);
              } else {
                _this.messageService.clearMessages();

                if (history.state.message) {
                  _this.messageService.report(history.state.message);
                }

                _this.dataDomainMeta = data;

                _this._generateDataDomainForm();

                _this._getRelationsOfEntity(_this.dataDomainForm, false);
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "_generateDataDomainForm",
          value: function _generateDataDomainForm() {
            var _this2 = this;

            if (this.dataDomainForm) {
              this.dataDomainForm.markAsPristine({
                onlySelf: false
              });
              this.dataDomainForm.get('DOMAIN_ID').setValue(this.dataDomainMeta.DOMAIN_ID);
              this.dataDomainForm.get('DOMAIN_DESC').setValue(this.dataDomainMeta.DOMAIN_DESC);
              this.dataDomainForm.get('DATA_TYPE').setValue(this.dataDomainMeta.DATA_TYPE);
              this.dataDomainForm.get('DATA_LENGTH').setValue(this.dataDomainMeta.DATA_LENGTH);
              this.dataDomainForm.get('DECIMAL').setValue(this.dataDomainMeta.DECIMAL);
              this.dataDomainForm.get('DOMAIN_TYPE').setValue(this.dataDomainMeta.DOMAIN_TYPE);
              this.dataDomainForm.get('UNSIGNED').setValue(this.dataDomainMeta.UNSIGNED);
              this.dataDomainForm.get('CAPITAL_ONLY').setValue(this.dataDomainMeta.CAPITAL_ONLY);
              this.dataDomainForm.get('REG_EXPR').setValue(this.dataDomainMeta.REG_EXPR);
              this.dataDomainForm.get('ENTITY_ID').setValue(this.dataDomainMeta.ENTITY_ID);
              this.dataDomainForm.get('RELATION_ID').setValue(this.dataDomainMeta.RELATION_ID);
              this.dataDomainForm.get('DOMAIN_VALUES').clear();

              if (this.readonly) {
                this.dataDomainForm.get('DOMAIN_TYPE').disable();
                this.dataDomainForm.get('DATA_TYPE').disable();
              }
            } else {
              this.dataDomainForm = this.fb.group({
                DOMAIN_ID: [this.dataDomainMeta.DOMAIN_ID, {
                  updateOn: 'blur'
                }],
                DOMAIN_DESC: [this.dataDomainMeta.DOMAIN_DESC],
                DATA_TYPE: [{
                  value: this.dataDomainMeta.DATA_TYPE,
                  disabled: this.readonly
                }],
                DATA_LENGTH: [this.dataDomainMeta.DATA_LENGTH, [this._validateDataLength]],
                DECIMAL: [this.dataDomainMeta.DECIMAL, [this._validateDecimal]],
                DOMAIN_TYPE: [{
                  value: this.dataDomainMeta.DOMAIN_TYPE,
                  disabled: this.readonly
                }],
                UNSIGNED: [{
                  value: this.dataDomainMeta.UNSIGNED,
                  disabled: this.readonly
                }],
                CAPITAL_ONLY: [{
                  value: this.dataDomainMeta.CAPITAL_ONLY,
                  disabled: this.readonly
                }],
                REG_EXPR: [this.dataDomainMeta.REG_EXPR],
                ENTITY_ID: [this.dataDomainMeta.ENTITY_ID],
                RELATION_ID: [{
                  value: this.dataDomainMeta.RELATION_ID,
                  disabled: this.readonly
                }],
                DOMAIN_VALUES: this.fb.array([])
              });
            }

            this._setNewModeState();

            if (this.dataDomainMeta.DOMAIN_TYPE >= 3 && this.dataDomainMeta.DOMAIN_VALUES) {
              // Value Array/Interval
              this.dataDomainMeta.DOMAIN_VALUES.forEach(function (domainValue) {
                _this2.domainValueFormArray.push(_this2.fb.group({
                  LOW_VALUE: [domainValue.LOW_VALUE],
                  LOW_VALUE_TEXT: [domainValue.LOW_VALUE_TEXT],
                  HIGH_VALUE: [domainValue.HIGH_VALUE]
                }));
              });
            }

            this._setDomainType(this.dataDomainForm, false);

            this._updateLengthAndDecimal(this.dataDomainForm, false);
          }
        }, {
          key: "_setNewModeState",
          value: function _setNewModeState() {
            if (this.isNewMode) {
              this.dataDomainForm.get('DOMAIN_ID').setValidators(this._validateDataDomainID);
              this.dataDomainForm.get('DOMAIN_ID').setAsyncValidators(this.uniqueDataDomainValidator.validate.bind(this.uniqueDataDomainValidator));
              this.dataDomainForm.get('DATA_TYPE').enable();
              this.dataDomainForm.get('DOMAIN_TYPE').enable();
              this.dataDomainForm.get('DATA_TYPE').markAsDirty(); // Default value mark as dirty

              this.dataDomainForm.get('DATA_LENGTH').markAsDirty(); // Default value mark as dirty

              this.dataDomainForm.get('DOMAIN_TYPE').markAsDirty(); // Default value mark as dirty
            } else {
              this.dataDomainForm.get('DOMAIN_ID').clearValidators();
              this.dataDomainForm.get('DOMAIN_ID').clearAsyncValidators();
              this.dataDomainForm.get('DOMAIN_ID').updateValueAndValidity();
            }
          }
        }, {
          key: "_validateDataDomainID",
          value: function _validateDataDomainID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Data Domain ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Data Domain ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateDataLength",
          value: function _validateDataLength(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a Length'
              };
            }

            return null;
          }
        }, {
          key: "_validateDecimal",
          value: function _validateDecimal(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a decimal place'
              };
            }

            if (c.value < 1 || c.value > 37) {
              return {
                message: 'Decimal place can only between 1 and 37'
              };
            }

            return null;
          }
        }, {
          key: "_validateEntityID",
          value: function _validateEntityID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give an entity'
              };
            }

            return null;
          }
        }, {
          key: "_validateRelationID",
          value: function _validateRelationID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a relation'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this3 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Data Domain?').subscribe(function (confirm) {
                if (confirm) {
                  _this3._switch2DisplayMode();

                  _this3.dataDomainMeta = null;

                  _this3.modelService.sendDialogAnswer('OK');
                } else {
                  _this3.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.dataDomainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this3._generateDataDomainForm();

                    _this3.dataDomainForm.reset(_this3.dataDomainForm.value);

                    _this3._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this._switch2EditMode();
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.dataDomainForm.get('DOMAIN_TYPE').disable();
            this.dataDomainForm.get('DATA_TYPE').disable();
            this.dataDomainForm.get('UNSIGNED').disable();
            this.dataDomainForm.get('CAPITAL_ONLY').disable();
            this.dataDomainForm.get('RELATION_ID').disable();
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            this.dataDomainForm.get('DOMAIN_TYPE').enable();
            this.dataDomainForm.get('DATA_TYPE').enable();

            this._setDomainType(this.dataDomainForm, false);

            this._updateLengthAndDecimal(this.dataDomainForm, false);
          }
        }, {
          key: "onChangeDataDomainID",
          value: function onChangeDataDomainID() {
            this.modelService.updateDataDomainID(this.dataDomainForm.get('DOMAIN_ID').value);
          }
        }, {
          key: "onChangeDataDomainDesc",
          value: function onChangeDataDomainDesc() {
            this.modelService.updateDataDomainDesc(this.dataDomainForm.get('DOMAIN_DESC').value);
          }
        }, {
          key: "onChangeDomainType",
          value: function onChangeDomainType(formGroup) {
            this._setDomainType(formGroup, true);
          }
        }, {
          key: "onEntitySearchHelp",
          value: function onEntitySearchHelp(control) {
            if (!this.entitySearchHelp) {
              this.entitySearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_11__["SearchHelp"]();
              this.entitySearchHelp.OBJECT_NAME = 'Entity ID';

              this.entitySearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listEntityType(searchTerm);
                };
              }(this.entityService);

              this.entitySearchHelp.BEHAVIOUR = 'A';
              this.entitySearchHelp.MULTI = false;
              this.entitySearchHelp.FUZZY_SEARCH = true;
              this.entitySearchHelp.FIELDS = [{
                FIELD_NAME: 'ENTITY_ID',
                LIST_HEADER_TEXT: 'Entity',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ENTITY_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.entitySearchHelp.READ_ONLY = this.readonly || this.dataDomainForm.get('DOMAIN_TYPE').value !== 2;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeEntityID(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.entitySearchHelp, control, afterExportFn);
          }
        }, {
          key: "onChangeEntityID",
          value: function onChangeEntityID(formGroup) {
            this._getRelationsOfEntity(formGroup, true);
          }
        }, {
          key: "_getRelationsOfEntity",
          value: function _getRelationsOfEntity(dataDomainForm, setDefault) {
            var _this4 = this;

            var domainEntityID = dataDomainForm.get('ENTITY_ID').value;

            if (!domainEntityID) {
              return;
            }

            this.entityService.getRelationMetaOfEntity(domainEntityID).subscribe(function (entityRelations) {
              if (entityRelations[0]['msgType'] === 'E') {
                dataDomainForm.get('ENTITY_ID').setErrors({
                  message: entityRelations[0]['msgShortText']
                });
              } else {
                _this4.relationsOfEntity = entityRelations.map(function (relationMeta) {
                  return relationMeta.RELATION_ID;
                }).filter(function (relationId) {
                  return relationId.substr(0, 2) !== 'rs';
                });

                if (setDefault) {
                  dataDomainForm.get('RELATION_ID').setValue(_this4.relationsOfEntity[0]);
                  dataDomainForm.get('RELATION_ID').markAsDirty();
                }
              }
            });
          }
        }, {
          key: "_setDomainType",
          value: function _setDomainType(formGroup, markAsDirty) {
            if (markAsDirty) {
              formGroup.get('DOMAIN_TYPE').markAsDirty();
            }

            switch (+formGroup.get('DOMAIN_TYPE').value) {
              case 0:
                // General Type
                if (+formGroup.get('DATA_TYPE').value === 2) {
                  if (!this.readonly) {
                    formGroup.get('UNSIGNED').enable();
                  }

                  this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);
                } else if (+formGroup.get('DATA_TYPE').value === 1) {
                  if (!this.readonly) {
                    formGroup.get('CAPITAL_ONLY').enable();
                  }

                  this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);
                }

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('DOMAIN_VALUES'), markAsDirty, true);

                break;

              case 1:
                // Regular Expression
                // formGroup.get('REG_EXPR').setValidators(this._validateRegExpr);
                if (!this.readonly) {
                  formGroup.get('REG_EXPR').enable();
                }

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('DOMAIN_VALUES'), markAsDirty, true);

                break;

              case 2:
                // Value Relation
                if (!this.readonly) {
                  formGroup.get('ENTITY_ID').enable();
                  formGroup.get('RELATION_ID').enable();
                  formGroup.get('ENTITY_ID').setValidators(this._validateEntityID);
                  formGroup.get('RELATION_ID').setValidators(this._validateRelationID);
                }

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._invalidField(formGroup.get('DOMAIN_VALUES'), markAsDirty, true);

                break;

              case 3:
                // Value Array
                if (!this.readonly) {
                  formGroup.get('DOMAIN_VALUES').enable();
                }

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._generateEmptyLines(5);

                break;

              case 4:
                // Value Interval
                if (!this.readonly) {
                  formGroup.get('DOMAIN_VALUES').enable();
                }

                this._invalidField(formGroup.get('ENTITY_ID'), markAsDirty);

                this._invalidField(formGroup.get('RELATION_ID'), markAsDirty);

                this._invalidField(formGroup.get('REG_EXPR'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._generateEmptyLines(5);

                break;

              default:
            }
          }
        }, {
          key: "_generateEmptyLines",
          value: function _generateEmptyLines(num) {
            var existingLines = this.domainValueFormArray.length;

            for (var i = 0; i < num - existingLines; i++) {
              this.domainValueFormArray.push(this.fb.group({
                LOW_VALUE: [''],
                LOW_VALUE_TEXT: [''],
                HIGH_VALUE: ['']
              }));
            }
          }
        }, {
          key: "onChangeDataType",
          value: function onChangeDataType(formGroup) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                formGroup.get('DATA_LENGTH').setValue(10);
                formGroup.get('DECIMAL').setValue(null);
                break;

              case 4:
                // decimal
                formGroup.get('DATA_LENGTH').setValue(23);
                formGroup.get('DECIMAL').setValue(2);
                break;

              default:
                formGroup.get('DATA_LENGTH').setValue(null);
                formGroup.get('DECIMAL').setValue(null);
            }

            formGroup.get('DATA_LENGTH').markAsDirty();
            formGroup.get('DECIMAL').markAsDirty();

            this._updateLengthAndDecimal(formGroup, true);
          }
        }, {
          key: "_updateLengthAndDecimal",
          value: function _updateLengthAndDecimal(formGroup, markAsDirty) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                if (!this.readonly) {
                  formGroup.get('DATA_LENGTH').enable();
                  formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                }

                this._invalidField(formGroup.get('DECIMAL'));

                if (+formGroup.get('DOMAIN_TYPE').value === 0) {
                  if (!this.readonly) {
                    formGroup.get('CAPITAL_ONLY').enable();
                  }

                  this._invalidField(formGroup.get('UNSIGNED'));
                }

                this.enableGeneralType = true;
                this.enableRegExpr = true;
                this.enableValueRelation = true;
                this.enableArrayOrInterval = true;
                break;

              case 2:
                // Integer
                formGroup.get('DATA_LENGTH').disable();

                this._invalidField(formGroup.get('DECIMAL'), markAsDirty);

                if (+formGroup.get('DOMAIN_TYPE').value === 0) {
                  if (!this.readonly) {
                    formGroup.get('UNSIGNED').enable();
                  }

                  this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);
                } else if (+formGroup.get('DOMAIN_TYPE').value === 1 || +formGroup.get('DOMAIN_TYPE').value === 2) {
                  if (!this.readonly) {
                    formGroup.get('DOMAIN_TYPE').setValue(0);
                  }

                  this._setDomainType(formGroup, markAsDirty);
                }

                this.enableGeneralType = true;
                this.enableRegExpr = false;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = true;
                break;

              case 4:
                // decimal
                if (!this.readonly) {
                  formGroup.get('DATA_LENGTH').enable();
                  formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                  formGroup.get('DECIMAL').enable();
                  formGroup.get('DECIMAL').setValidators(this._validateDecimal);
                  formGroup.get('UNSIGNED').enable();
                }

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                formGroup.get('DOMAIN_TYPE').setValue(0);

                this._setDomainType(formGroup, markAsDirty);

                this.enableGeneralType = true;
                this.enableRegExpr = false;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = false;
                break;

              case 5:
                // string
                this._invalidField(formGroup.get('DATA_LENGTH'), markAsDirty);

                this._invalidField(formGroup.get('DECIMAL'), markAsDirty);

                formGroup.get('DOMAIN_TYPE').setValue(1);

                this._setDomainType(formGroup, markAsDirty);

                this.enableGeneralType = false;
                this.enableRegExpr = true;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = false;
                break;

              default:
                this._invalidField(formGroup.get('DATA_LENGTH'), markAsDirty);

                this._invalidField(formGroup.get('DECIMAL'), markAsDirty);

                this._invalidField(formGroup.get('CAPITAL_ONLY'), markAsDirty);

                this._invalidField(formGroup.get('UNSIGNED'), markAsDirty);

                formGroup.get('DOMAIN_TYPE').setValue(0);

                this._setDomainType(formGroup, markAsDirty);

                this.enableGeneralType = true;
                this.enableRegExpr = false;
                this.enableValueRelation = false;
                this.enableArrayOrInterval = false;
            }
          }
        }, {
          key: "_invalidField",
          value: function _invalidField(fieldCtrl) {
            var markAsDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var isArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            fieldCtrl.clearValidators();
            fieldCtrl.clearAsyncValidators();
            fieldCtrl.disable();

            if (markAsDirty) {
              isArray ? fieldCtrl.clear() : fieldCtrl.setValue(null);
              fieldCtrl.markAsDirty();
            }
          }
        }, {
          key: "onChangeDomainValue",
          value: function onChangeDomainValue(index) {
            var currentDomainValueCtrl = this.domainValueFormArray.at(index);

            if (!currentDomainValueCtrl.get('LOW_VALUE').value) {
              return;
            }

            var indexFound = this.domainValueFormArray.controls.findIndex(function (ctrl, valueIndex) {
              return index !== valueIndex && ctrl.value.LOW_VALUE === currentDomainValueCtrl.value.LOW_VALUE;
            });

            if (indexFound > -1) {
              currentDomainValueCtrl.get('LOW_VALUE').setErrors({
                message: 'Value is duplicated!'
              });
            } else {
              currentDomainValueCtrl.get('LOW_VALUE').setErrors(null);
            }

            if (this.dataDomainForm.get('DOMAIN_TYPE').value === 4 && currentDomainValueCtrl.get('LOW_VALUE').value) {
              if (!currentDomainValueCtrl.value.HIGH_VALUE || currentDomainValueCtrl.value.HIGH_VALUE <= currentDomainValueCtrl.value.LOW_VALUE) {
                currentDomainValueCtrl.get('HIGH_VALUE').setErrors({
                  message: 'High value must be greater!'
                });
              } else {
                currentDomainValueCtrl.get('HIGH_VALUE').setErrors(null);
              }
            }
          }
        }, {
          key: "insertDomainValue",
          value: function insertDomainValue(index) {
            this.domainValueFormArray.insert(index, this.fb.group({
              LOW_VALUE: [''],
              LOW_VALUE_TEXT: [''],
              HIGH_VALUE: ['']
            }));
          }
        }, {
          key: "deleteDomainValue",
          value: function deleteDomainValue(index) {
            this.domainValueFormArray.removeAt(index);
            this.domainValueFormArray.markAsDirty();
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this5 = this;

            if (this.isNewMode || !this.bypassProtection && this.dataDomainForm && this.dataDomainForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this5.modelService.sendDialogAnswer('OK');
                } else {
                  _this5.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this6 = this;

            if (!this.dataDomainForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (this.dataDomainForm.invalid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (+this.dataDomainForm.get('DOMAIN_TYPE').value >= 3 && this.domainValueFormArray.length === 0) {
              return this.messageService.reportMessage('MODEL', 'MINIMUM_ONE_DOMAIN_VALUE', 'E');
            }

            if (this.isNewMode) {
              this.changedDataDomain['action'] = 'add';
              this.changedDataDomain['DOMAIN_ID'] = this.dataDomainForm.get('DOMAIN_ID').value;
            } else {
              this.changedDataDomain['action'] = 'update';
              this.changedDataDomain['DOMAIN_ID'] = this.dataDomainMeta.DOMAIN_ID;
            }

            if (this.dataDomainForm.get('DOMAIN_DESC').dirty) {
              this.changedDataDomain['DOMAIN_DESC'] = this.dataDomainForm.get('DOMAIN_DESC').value;
            }

            if (this.dataDomainForm.get('DATA_TYPE').dirty) {
              this.changedDataDomain['DATA_TYPE'] = this.dataDomainForm.get('DATA_TYPE').value;
            }

            if (this.dataDomainForm.get('DATA_LENGTH').dirty) {
              this.changedDataDomain['DATA_LENGTH'] = this.dataDomainForm.get('DATA_LENGTH').value;
            }

            if (this.dataDomainForm.get('DECIMAL').dirty) {
              this.changedDataDomain['DECIMAL'] = this.dataDomainForm.get('DECIMAL').value;
            }

            if (this.dataDomainForm.get('DOMAIN_TYPE').dirty) {
              this.changedDataDomain['DOMAIN_TYPE'] = this.dataDomainForm.get('DOMAIN_TYPE').value;
            }

            if (this.dataDomainForm.get('UNSIGNED').dirty) {
              this.changedDataDomain['UNSIGNED'] = this.dataDomainForm.get('UNSIGNED').value;
            }

            if (this.dataDomainForm.get('CAPITAL_ONLY').dirty) {
              this.changedDataDomain['CAPITAL_ONLY'] = this.dataDomainForm.get('CAPITAL_ONLY').value;
            }

            if (this.dataDomainForm.get('REG_EXPR').dirty) {
              this.changedDataDomain['REG_EXPR'] = this.dataDomainForm.get('REG_EXPR').value;
            }

            if (this.dataDomainForm.get('ENTITY_ID').dirty) {
              this.changedDataDomain['ENTITY_ID'] = this.dataDomainForm.get('ENTITY_ID').value;
            }

            if (this.dataDomainForm.get('RELATION_ID').dirty) {
              this.changedDataDomain['RELATION_ID'] = this.dataDomainForm.get('RELATION_ID').value;
            }

            if (this.dataDomainForm.get('DOMAIN_VALUES').dirty) {
              this.changedDataDomain['DOMAIN_VALUES'] = [];
              this.dataDomainForm.get('DOMAIN_VALUES').value.forEach(function (domainValue) {
                if (domainValue.LOW_VALUE) {
                  _this6.changedDataDomain['DOMAIN_VALUES'].push(domainValue);
                }
              });
            }

            this.entityService.saveDataDomain(this.changedDataDomain).subscribe(function (data) {
              return _this6._postActivityAfterSavingDataDomain(data);
            });
          }
        }, {
          key: "_postActivityAfterSavingDataDomain",
          value: function _postActivityAfterSavingDataDomain(data) {
            var _this7 = this;

            this.changedDataDomain = {};

            if (data['DOMAIN_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/data-domain/' + data['DOMAIN_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'DATA_DOMAIN_SAVED', 'S', data['DOMAIN_ID'])
                  }
                });
              } else {
                this._switch2DisplayMode();

                this.dataDomainMeta = data;

                this._generateDataDomainForm();

                this.messageService.reportMessage('MODEL', 'DATA_DOMAIN_SAVED', 'S', data['DOMAIN_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this7.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }, {
          key: "domainValueFormArray",
          get: function get() {
            return this.dataDomainForm.get('DOMAIN_VALUES');
          }
        }]);

        return DataDomainDetailComponent;
      }();

      DataDomainDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_5__["UniqueDataDomainValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_11__["EntityService"]
        }];
      };

      DataDomainDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_11__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      DataDomainDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-data-domain-detail',
        template: _raw_loader_data_domain_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_domain_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_5__["UniqueDataDomainValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_11__["EntityService"]])], DataDomainDetailComponent);
      /***/
    },

    /***/
    "23ty":
    /*!******************************************************************!*\
      !*** ./src/app/model/attribute-meta/attribute-meta.component.ts ***!
      \******************************************************************/

    /*! exports provided: AttributeMetaComponent */

    /***/
    function ty(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributeMetaComponent", function () {
        return AttributeMetaComponent;
      });
      /* harmony import */


      var _raw_loader_attribute_meta_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./attribute-meta.component.html */
      "MW8X");
      /* harmony import */


      var _attribute_meta_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attribute-meta.component.css */
      "0Meb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../msgStore */
      "uLAD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var AttributeMetaComponent = /*#__PURE__*/function () {
        function AttributeMetaComponent(fb, router, entityService, messageService, modelService) {
          _classCallCheck(this, AttributeMetaComponent);

          this.fb = fb;
          this.router = router;
          this.entityService = entityService;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dataTypes = [];
          this.deletedAttributes = [];
          this.dataTypes = modelService.dataTypes;
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_7__["msgStore"], 'EN');
        }

        _createClass(AttributeMetaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.generateFormArray();
            this.formArray = this.parentForm.get('ATTRIBUTES');
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.dataElementSearchHelp) {
              this.dataElementSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_5__["SearchHelp"]();
              this.dataElementSearchHelp.OBJECT_NAME = 'Data Element';

              this.dataElementSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listDataElement(searchTerm);
                };
              }(this.entityService);

              this.dataElementSearchHelp.BEHAVIOUR = 'A';
              this.dataElementSearchHelp.MULTI = false;
              this.dataElementSearchHelp.FUZZY_SEARCH = true;
              this.dataElementSearchHelp.FIELDS = [{
                FIELD_NAME: 'ELEMENT_ID',
                LIST_HEADER_TEXT: 'Element ID',
                IE_FIELD_NAME: 'DATA_ELEMENT',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ELEMENT_DESC',
                LIST_HEADER_TEXT: 'Element Description',
                IE_FIELD_NAME: 'ATTR_DESC',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.dataElementSearchHelp.READ_ONLY = this.readonly || control.get('DATA_ELEMENT').disabled;
            }

            var afterExportFn = function (context, attrIdx) {
              return function () {
                return context.onChangeDataElement(attrIdx);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.dataElementSearchHelp, control, afterExportFn);
          }
        }, {
          key: "deleteAttribute",
          value: function deleteAttribute(index) {
            if (index !== this.formArray.length - 1) {
              this.deletedAttributes.push({
                ATTR_GUID: this.formArray.at(index).get('ATTR_GUID').value,
                ATTR_NAME: this.formArray.at(index).get('ATTR_NAME').value
              });
              this.formArray.removeAt(index);
              this.formArray.markAsDirty();
            }
          }
        }, {
          key: "insertAttribute",
          value: function insertAttribute(index) {
            this.formArray.insert(index, this._createAnAttributeFormCtrl());
          }
        }, {
          key: "_createAnAttributeFormCtrl",
          value: function _createAnAttributeFormCtrl() {
            return this.fb.group({
              ATTR_GUID: [''],
              RELATION_ID: [''],
              ATTR_NAME: [''],
              ATTR_DESC: [{
                value: '',
                disabled: true
              }],
              DATA_ELEMENT: [{
                value: '',
                disabled: false
              }],
              DATA_TYPE: [{
                value: '',
                disabled: true
              }],
              DATA_LENGTH: [{
                value: '',
                disabled: true
              }],
              DECIMAL: [null],
              ORDER: [null],
              PRIMARY_KEY: [false],
              AUTO_INCREMENT: [{
                value: false,
                disabled: true
              }]
            });
          }
        }, {
          key: "switchBtwDEAndDT",
          value: function switchBtwDEAndDT(index) {
            var currentAttributeFormCtrl = this.formArray.at(index);
            var dataElementCtrl = currentAttributeFormCtrl.get('DATA_ELEMENT');

            if (dataElementCtrl.enabled) {
              this._disableField(dataElementCtrl);

              this._enableField(currentAttributeFormCtrl.get('ATTR_DESC'));

              this._enableField(currentAttributeFormCtrl.get('DATA_TYPE'));

              this._enableField(currentAttributeFormCtrl.get('DATA_LENGTH'));

              this._enableField(currentAttributeFormCtrl.get('DECIMAL'));

              currentAttributeFormCtrl.get('DATA_TYPE').setValue(1);
              currentAttributeFormCtrl.get('DATA_LENGTH').setValue(10);

              this._disableField(currentAttributeFormCtrl.get('AUTO_INCREMENT'));
            } else {
              dataElementCtrl.enable();

              this._enableField(dataElementCtrl);

              this._disableField(currentAttributeFormCtrl.get('ATTR_DESC'));

              this._disableField(currentAttributeFormCtrl.get('DATA_TYPE'));

              this._disableField(currentAttributeFormCtrl.get('DATA_LENGTH'));

              this._disableField(currentAttributeFormCtrl.get('DECIMAL'));

              this._disableField(currentAttributeFormCtrl.get('AUTO_INCREMENT'));
            }
          }
        }, {
          key: "_enableField",
          value: function _enableField(ctrl) {
            ctrl.setValue(null);
            ctrl.enable();
          }
        }, {
          key: "_disableField",
          value: function _disableField(ctrl) {
            if (ctrl.value !== null && ctrl.value !== '') {
              ctrl.setValue(null);
              ctrl.markAsDirty();
            }

            ctrl.disable();
          }
        }, {
          key: "onChangeDataType",
          value: function onChangeDataType(attrFormGroup) {
            switch (attrFormGroup.get('DATA_TYPE').value) {
              case '1':
                // char
                attrFormGroup.get('DATA_LENGTH').setValue(10);
                attrFormGroup.get('DECIMAL').setValue(null);

                this._disableField(attrFormGroup.get('AUTO_INCREMENT'));

                break;

              case '2':
                // Integer
                attrFormGroup.get('DATA_LENGTH').setValue(null);
                attrFormGroup.get('DECIMAL').setValue(null);

                this._enableField(attrFormGroup.get('AUTO_INCREMENT'));

                break;

              case '4':
                // decimal
                attrFormGroup.get('DATA_LENGTH').setValue(23);
                attrFormGroup.get('DECIMAL').setValue(2);

                this._disableField(attrFormGroup.get('AUTO_INCREMENT'));

                break;

              default:
                attrFormGroup.get('DATA_LENGTH').setValue(null);
                attrFormGroup.get('DECIMAL').setValue(null);

                this._disableField(attrFormGroup.get('AUTO_INCREMENT'));

            }

            attrFormGroup.get('DATA_LENGTH').markAsDirty();
          }
        }, {
          key: "onChangeAttributeName",
          value: function onChangeAttributeName(index) {
            if (index === this.formArray.length - 1 && !this.formArray.controls[index].value.ATTR_GUID) {
              // Only work for the last New line
              this.formArray.push(this._createAnAttributeFormCtrl());
            }
          }
        }, {
          key: "onChangeDataElement",
          value: function onChangeDataElement(index) {
            var _this8 = this;

            var attributeFormGroup = this.formArray.at(index);
            var dataElementCtrl = attributeFormGroup.get('DATA_ELEMENT');
            this.entityService.getDataElement(dataElementCtrl.value).subscribe(function (data) {
              if (data['msgCat']) {
                dataElementCtrl.setErrors({
                  message: data['msgShortText']
                });
              } else {
                attributeFormGroup.get('ATTR_DESC').setValue(data['ELEMENT_DESC']);
                attributeFormGroup.get('DATA_TYPE').setValue(data['DATA_TYPE']);
                attributeFormGroup.get('DATA_LENGTH').setValue(data['DATA_LENGTH']);
                attributeFormGroup.get('DECIMAL').setValue(data['DECIMAL']);

                if (attributeFormGroup.get('DATA_TYPE').value === 2) {
                  _this8._enableField(attributeFormGroup.get('AUTO_INCREMENT'));
                } else {
                  _this8._disableField(attributeFormGroup.get('AUTO_INCREMENT'));
                }
              }
            });
          }
        }, {
          key: "checkAttributes",
          value: function checkAttributes() {
            var Messages = [];

            if (this.formArray.controls.findIndex(function (control) {
              return control.get('PRIMARY_KEY').value;
            }) === -1) {
              Messages.push(this.messageService.generateMessage('MODEL', 'RELATION_PRIMARY_KEY_MISSING', 'E'));
            }

            return Messages;
          }
        }, {
          key: "processChangedAttributes",
          value: function processChangedAttributes() {
            var changedAttributes = [];
            var changedAttribute;
            var order = 0;

            if (this.formArray.dirty) {
              this.formArray.controls.forEach(function (attribute, index) {
                if (attribute.get('ATTR_NAME').value.trim() === '') {
                  return;
                }

                order = index + 1;

                if (order !== attribute.get('ORDER').value) {
                  attribute.get('ORDER').setValue(order);
                  attribute.get('ORDER').markAsDirty();
                }

                if (attribute.dirty) {
                  changedAttribute = {};

                  if (attribute.get('ATTR_GUID').value) {
                    // Update Case
                    changedAttribute['action'] = 'update';
                    changedAttribute['ATTR_GUID'] = attribute.get('ATTR_GUID').value;
                    var attrFormGroup = attribute;
                    Object.keys(attrFormGroup.controls).forEach(function (key) {
                      var formControl = attrFormGroup.controls[key];

                      if (formControl.dirty) {
                        changedAttribute[key] = formControl.value;
                      }
                    });
                  } else {
                    // New Add Case
                    changedAttribute['action'] = 'add';
                    var _attrFormGroup = attribute;
                    Object.keys(_attrFormGroup.controls).forEach(function (key) {
                      var formControl = _attrFormGroup.controls[key];
                      changedAttribute[key] = formControl.value;
                    });
                  }
                } else {
                  changedAttribute = null;
                }

                if (changedAttribute) {
                  changedAttributes.push(changedAttribute);
                }
              }); // Deletion Case

              this.deletedAttributes.forEach(function (attribute) {
                changedAttribute = {
                  action: 'delete',
                  ATTR_GUID: attribute.ATTR_GUID,
                  ATTR_NAME: attribute.ATTR_NAME
                };
                changedAttributes.push(changedAttribute);
              });
              return changedAttributes;
            }
          }
        }, {
          key: "generateFormArray",
          value: function generateFormArray() {
            var _this9 = this;

            var formArray = [];

            if (this.attributes) {
              this.attributes.forEach(function (attribute) {
                var isDataElementAttribute = !!attribute.DATA_ELEMENT;
                formArray.push(_this9.fb.group({
                  ATTR_GUID: [attribute.ATTR_GUID],
                  RELATION_ID: [attribute.RELATION_ID],
                  ATTR_NAME: [attribute.ATTR_NAME],
                  ATTR_DESC: [{
                    value: attribute.ATTR_DESC,
                    disabled: isDataElementAttribute
                  }],
                  DATA_ELEMENT: [{
                    value: attribute.DATA_ELEMENT,
                    disabled: !isDataElementAttribute
                  }],
                  DATA_TYPE: [{
                    value: attribute.DATA_TYPE,
                    disabled: _this9.readonly || _this9.isFieldGray(attribute) || isDataElementAttribute
                  }],
                  DATA_LENGTH: [{
                    value: attribute.DATA_LENGTH,
                    disabled: isDataElementAttribute
                  }],
                  DECIMAL: [{
                    value: attribute.DECIMAL,
                    disabled: isDataElementAttribute
                  }],
                  ORDER: [attribute.ORDER],
                  PRIMARY_KEY: [{
                    value: attribute.PRIMARY_KEY,
                    disabled: _this9.readonly || _this9.isFieldGray(attribute)
                  }],
                  AUTO_INCREMENT: [{
                    value: attribute.AUTO_INCREMENT,
                    disabled: _this9.readonly || _this9.isFieldGray(attribute) || attribute.DATA_TYPE !== 2
                  }]
                }));
              });
            }

            if (this.isNewMode) {
              formArray.push(this._createAnAttributeFormCtrl());
            }

            this.parentForm.addControl('ATTRIBUTES', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](formArray));
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay(readonly) {
            var _this10 = this;

            if (!readonly) {
              // To Edit Mode
              this.formArray.controls.forEach(function (attrFormGroup) {
                if (!_this10.isFieldGray(attrFormGroup.value)) {
                  if (!attrFormGroup.get('DATA_ELEMENT').value) {
                    attrFormGroup.get('DATA_TYPE').enable();
                  }

                  attrFormGroup.get('PRIMARY_KEY').enable();

                  if (attrFormGroup.get('DATA_TYPE').value === 2) {
                    attrFormGroup.get('AUTO_INCREMENT').enable();
                  } else {
                    attrFormGroup.get('AUTO_INCREMENT').disable();
                  }
                }
              });
              this.formArray.push(this._createAnAttributeFormCtrl());
            } else {
              // To Display Mode
              var lastIndex = this.formArray.length - 1;

              while (lastIndex >= 0 && this.formArray.controls[lastIndex].get('ATTR_NAME').value.trim() === '') {
                this.formArray.removeAt(lastIndex);
                lastIndex--;
              }

              this.formArray.controls.forEach(function (attrFormGroup) {
                attrFormGroup.get('DATA_TYPE').disable();
                attrFormGroup.get('PRIMARY_KEY').disable();
                attrFormGroup.get('AUTO_INCREMENT').disable();
              });
            }
          }
        }, {
          key: "isFieldGray",
          value: function isFieldGray(attribute) {
            return this.relationID.substr(0, 3) === 'rs_' && attribute && attribute.ATTR_NAME && (attribute.ATTR_NAME === 'VALID_FROM' || attribute.ATTR_NAME === 'VALID_TO' || attribute.ATTR_NAME.substr(-14, 14) === '_INSTANCE_GUID' || attribute.ATTR_NAME.substr(-10, 10) === '_ENTITY_ID');
          }
        }, {
          key: "onGoToDataElement",
          value: function onGoToDataElement(dataElementName) {
            this.router.navigate(['/model/data-element', dataElementName]);
          }
        }]);

        return AttributeMetaComponent;
      }();

      AttributeMetaComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_5__["EntityService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      AttributeMetaComponent.propDecorators = {
        parentForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        attributes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        relationID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        isNewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_5__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      AttributeMetaComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-attribute-meta',
        template: _raw_loader_attribute_meta_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attribute_meta_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], jor_angular__WEBPACK_IMPORTED_MODULE_5__["EntityService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], AttributeMetaComponent);
      /***/
    },

    /***/
    "2Qad":
    /*!*************************************************************!*\
      !*** ./src/app/model/search-help/search-help.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function Qad(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3NlYXJjaC1oZWxwL3NlYXJjaC1oZWxwLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "2x6Z":
    /*!******************************************************************************************!*\
      !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.css ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function x6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JlbGF0aW9uc2hpcC9yZWxhdGlvbnNoaXAtZGV0YWlsL3JlbGF0aW9uc2hpcC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "3UNm":
    /*!***************************************************************!*\
      !*** ./src/app/model/data-element/data-element.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function UNm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZWxlbWVudC9kYXRhLWVsZW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "3wvb":
    /*!*******************************************************!*\
      !*** ./src/app/model/relation/relation.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function wvb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JlbGF0aW9uL3JlbGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "7rfw":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-element/data-element.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rfw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchDataElement(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedDataElement\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newDataElement()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let dataElement of dataElementList\" routerLink=\"/model/data-element/{{dataElement.ELEMENT_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(dataElement)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{dataElement.ELEMENT_ID}}</h5>\n          <small>version: {{dataElement.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{dataElement.ELEMENT_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{dataElement.LAST_CHANGE_BY}} @{{dataElement.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "8Bta":
    /*!************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain.component.ts ***!
      \************************************************************/

    /*! exports provided: DataDomainComponent */

    /***/
    function Bta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataDomainComponent", function () {
        return DataDomainComponent;
      });
      /* harmony import */


      var _raw_loader_data_domain_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./data-domain.component.html */
      "MGLK");
      /* harmony import */


      var _data_domain_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-domain.component.css */
      "rMWE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var DataDomainComponent = /*#__PURE__*/function () {
        function DataDomainComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, DataDomainComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.dataDomainList = [];
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(DataDomainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) {
              return _this11.entityService.listDataDomain(term);
            })).subscribe(function (data) {
              _this11.dataDomainList = data;
              var domainID;

              if (_this11.route.snapshot.firstChild) {
                domainID = _this11.route.snapshot.firstChild.paramMap.get('domainID');
              }

              if (domainID) {
                if (domainID === 'new') {
                  _this11._newDataDomain();
                } else {
                  _this11.onSelect(_this11.dataDomainList.find(function (dataDomain) {
                    return dataDomain.DOMAIN_ID === domainID;
                  }));
                }
              }
            });
            this.searchDataDomain(''); // The initial list

            this.modelService.theSelectedDataDomain$.subscribe(function (data) {
              if (_this11.theSelectedDataDomain) {
                _this11.theSelectedDataDomain.DOMAIN_ID = data['DOMAIN_ID'];
                _this11.theSelectedDataDomain.DOMAIN_DESC = data['DOMAIN_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this11.dataDomainList[0] && !_this11.dataDomainList[0].CREATE_TIME) {
                _this11.dataDomainList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var domainID = _this11.route.snapshot.firstChild.paramMap.get('domainID');

                if (domainID) {
                  if (domainID === 'new') {
                    _this11.onSelect(_this11.dataDomainList[0]);
                  } else {
                    _this11.onSelect(_this11.dataDomainList.find(function (dataDomain) {
                      return dataDomain.DOMAIN_ID === domainID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this11.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(dataDomain) {
            if (dataDomain) {
              this.theSelectedDataDomain = dataDomain;
              this.modelService.setSelectedDataDomain(dataDomain);
            }
          }
        }, {
          key: "searchDataDomain",
          value: function searchDataDomain(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newDataDomian",
          value: function newDataDomian() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('domainID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newDataDomain();

              this.router.navigate(['/model/data-domain/new']);
            }
          }
        }, {
          key: "_newDataDomain",
          value: function _newDataDomain() {
            this.theSelectedDataDomain = new jor_angular__WEBPACK_IMPORTED_MODULE_8__["DataDomainMeta"]();
            this.theSelectedDataDomain.DOMAIN_ID = 'new';
            this.theSelectedDataDomain.DOMAIN_DESC = 'description';
            this.theSelectedDataDomain.VERSION_NO = 1;
            this.theSelectedDataDomain.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedDataDomain.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedDataDomain(this.theSelectedDataDomain);
            this.dataDomainList.splice(0, 0, this.theSelectedDataDomain);
          }
        }]);

        return DataDomainComponent;
      }();

      DataDomainComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      DataDomainComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-data-domain',
        template: _raw_loader_data_domain_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_domain_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], DataDomainComponent);
      /***/
    },

    /***/
    "93ea":
    /*!******************************************!*\
      !*** ./src/app/model/model.component.ts ***!
      \******************************************/

    /*! exports provided: ModelComponent */

    /***/
    function ea(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelComponent", function () {
        return ModelComponent;
      });
      /* harmony import */


      var _raw_loader_model_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./model.component.html */
      "IzY+");
      /* harmony import */


      var _model_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./model.component.css */
      "XNRG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var ModelComponent = /*#__PURE__*/function () {
        function ModelComponent() {
          _classCallCheck(this, ModelComponent);
        }

        _createClass(ModelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModelComponent;
      }();

      ModelComponent.ctorParameters = function () {
        return [];
      };

      ModelComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-model',
        template: _raw_loader_model_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_model_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [])], ModelComponent);
      /***/
    },

    /***/
    "9h1l":
    /*!******************************************************!*\
      !*** ./src/app/model/relation/relation.component.ts ***!
      \******************************************************/

    /*! exports provided: RelationComponent */

    /***/
    function h1l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationComponent", function () {
        return RelationComponent;
      });
      /* harmony import */


      var _raw_loader_relation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./relation.component.html */
      "Jb4D");
      /* harmony import */


      var _relation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relation.component.css */
      "3wvb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var RelationComponent = /*#__PURE__*/function () {
        function RelationComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, RelationComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(RelationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (term) {
              return _this12.entityService.listRelation(term);
            })).subscribe(function (data) {
              _this12.relationList = data;
              var relationID;

              if (_this12.route.snapshot.firstChild) {
                relationID = _this12.route.snapshot.firstChild.paramMap.get('relationID');
              }

              if (relationID) {
                if (relationID === 'new') {
                  _this12._newRelation();
                } else {
                  _this12.onSelect(_this12.relationList.find(function (relation) {
                    return relation.RELATION_ID === relationID;
                  }));
                }
              }
            });
            this.searchRelation(''); // The initial list

            this.modelService.theSelectedRelation$.subscribe(function (data) {
              if (_this12.theSelectedRelation) {
                _this12.theSelectedRelation.RELATION_ID = data.RELATION_ID;
                _this12.theSelectedRelation.RELATION_DESC = data.RELATION_DESC;
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this12.relationList[0] && !_this12.relationList[0].CREATE_TIME) {
                _this12.relationList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var relationID = _this12.route.snapshot.firstChild.paramMap.get('relationID');

                if (relationID) {
                  if (relationID === 'new') {
                    _this12.onSelect(_this12.relationList[0]);
                  } else {
                    _this12.onSelect(_this12.relationList.find(function (relation) {
                      return relation.RELATION_ID === relationID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this12.isSearchListShown = data;
            });
          }
        }, {
          key: "searchRelation",
          value: function searchRelation(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(relation) {
            if (relation) {
              this.theSelectedRelation = relation;
              this.modelService.setSelectedRelation(relation);
            }
          }
        }, {
          key: "newRelation",
          value: function newRelation() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('relationID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newRelation();

              this.router.navigate(['/model/relation/new']);
            }
          }
        }, {
          key: "_newRelation",
          value: function _newRelation() {
            this.theSelectedRelation = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["Relation"]();
            this.theSelectedRelation.RELATION_ID = 'r_new';
            this.theSelectedRelation.RELATION_DESC = 'description';
            this.theSelectedRelation.VERSION_NO = 1;
            this.theSelectedRelation.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedRelation.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedRelation(this.theSelectedRelation);
            this.relationList.splice(0, 0, this.theSelectedRelation);
          }
        }]);

        return RelationComponent;
      }();

      RelationComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      RelationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-relation',
        template: _raw_loader_relation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], RelationComponent);
      /***/
    },

    /***/
    "A91A":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relation/relation-detail/relation-detail.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A91A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"relationMeta\" [formGroup]=\"relationForm\">\n  <div class=\"form-group\">\n    <label for=\"relation\" class=\"col-form-label form-control-sm\">Relation:\n      <span [class.ng-invalid]=\"relationForm.get('RELATION_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{relationForm.get('RELATION_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"relation\" [readonly]=\"readonly || !isNewMode\"\n          name=\"relation\" formControlName=\"RELATION_ID\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relation-desc\" class=\"col-form-label form-control-sm\">Relation Description:</label>\n    <textarea class=\"form-control\" id=\"relation-desc\" name=\"relation-desc\" rows=\"2\"\n              (change)=\"onChangeRelationDesc()\" formControlName=\"RELATION_DESC\" [readonly]=\"readonly\"></textarea>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"relationForm\" [attributes]=\"relationMeta.ATTRIBUTES\"\n                      [relationID]=\"relationMeta.RELATION_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-atlas\"></span> Association</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Association</th>\n          <th scope=\"col\">Right Relation</th>\n          <th scope=\"col\">Cardinality</th>\n          <th scope=\"col\" title=\"Foreign Key Check\">FC</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"ASSOCIATIONS\">\n        <tr *ngFor=\"let associationFormGroup of associationFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteAssociation(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" (click)=\"openFieldMapModal(i)\" title=\"Fields Mapping\">\n              <span class=\"fas fa-map-signs\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ASSOCIATION_NAME\"\n                     [readonly]=\"readonly || oldAssociationName(associationFormGroup) && associationFormGroup.valid\"\n                     (change)=\"onChangeAssociationName(i)\">\n              <div class=\"invalid-tooltip\">\n                {{associationFormGroup.get('ASSOCIATION_NAME').errors?.message}}\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RIGHT_RELATION_ID\"\n                     [readonly]=\"readonly\" (change)=\"onChangeRightRelationID(i)\"\n                     (dblclick)=\"onGoToRelation(associationFormGroup.value['RIGHT_RELATION_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{associationFormGroup.get('RIGHT_RELATION_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRelation\"\n                        (click)=\"onSearchHelp('RIGHT_RELATION_ID', associationFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\"\n                    (change)=\"onChangeCardinality(associationFormGroup)\">\n              <option>[0..1]</option>\n              <option>[1..1]</option>\n              <option>[0..n]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n          <td [formGroup]=\"associationFormGroup\">\n            <input type=\"checkbox\" formControlName=\"FOREIGN_KEY_CHECK\">\n          </td>\n        </tr>\n\n        <div *ngIf=\"currentAssociationForm\" class=\"modal fade dk-modal-open\" [ngClass]=\"{'show': isFieldMapShown}\"\n             [ngStyle]=\"{'display': displayFieldMapModal}\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"detail\">Fields Mapping</h5>\n                <button type=\"button\" class=\"close\" (click)=\"closeFieldMapModal()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <table class=\"table table-bordered table-sm dk-table\" [formGroup]=\"currentAssociationForm\">\n                  <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\">Action</th>\n                    <th scope=\"col\">Left Table Field</th>\n                    <th scope=\"col\">Right Table Field</th>\n                  </tr>\n                  </thead>\n\n                  <tbody formArrayName=\"FIELDS_MAPPING\">\n                    <tr *ngFor=\"let fieldMapFormGroup of fieldMapFormArray.controls; let i = index\">\n                      <td class=\"dk-actions\">\n                        <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteFieldMap(i)\" title=\"Delete\">\n                          <span class=\"far fa-trash-alt\"></span>\n                        </button>\n                      </td>\n                      <td [formGroup]=\"fieldMapFormGroup\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"LEFT_FIELD\"\n                                 [readonly]=\"readonly || oldFieldMap(fieldMapFormGroup) && fieldMapFormGroup.valid\" (change)=\"onChangeLeftField(i)\">\n                          <div class=\"invalid-tooltip\">\n                            {{fieldMapFormGroup.get('LEFT_FIELD').errors?.message}}\n                          </div>\n                        </div>\n                      </td>\n                      <td [formGroup]=\"fieldMapFormGroup\">\n                        <div class=\"input-group\">\n                          <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RIGHT_FIELD\"\n                                 [readonly]=\"readonly || oldFieldMap(fieldMapFormGroup) && fieldMapFormGroup.valid\" (change)=\"onChangeRightField(i)\">\n                          <div class=\"invalid-tooltip\">\n                            {{fieldMapFormGroup.get('RIGHT_FIELD').errors?.message}}\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"closeFieldMapModal()\">OK</button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n\n";
      /***/
    },

    /***/
    "AQoV":
    /*!***************************************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.css ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function AQoV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 3rem;\n  min-width: 3rem;\n  max-width: 3rem;\n}\n.dk-description{\n  width: 15rem;\n  min-width: 15rem;\n  max-width: 15rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvZW50aXR5LXR5cGUvZW50aXR5LXR5cGUtZGV0YWlsL2VudGl0eS10eXBlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvZW50aXR5LXR5cGUvZW50aXR5LXR5cGUtZGV0YWlsL2VudGl0eS10eXBlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogM3JlbTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBtYXgtd2lkdGg6IDNyZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAxNXJlbTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgbWF4LXdpZHRoOiAxNXJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "CFc/":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relationship/relationship-detail/relationship-detail.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"relationshipMeta\" [formGroup]=\"relationshipForm\">\n  <div class=\"form-group\">\n    <label for=\"relationship\" class=\"col-form-label form-control-sm\">Relationship:\n      <span [class.ng-invalid]=\"relationshipForm.get('RELATIONSHIP_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{relationshipForm.get('RELATIONSHIP_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"relationship\" [readonly]=\"readonly || !isNewMode\"\n           name=\"relationship\" formControlName=\"RELATIONSHIP_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"relationship-desc\" class=\"col-form-label form-control-sm\">Relationship Description:</label>\n    <textarea class=\"form-control\" id=\"relationship-desc\" name=\"relationship-desc\" rows=\"2\"\n              formControlName=\"RELATIONSHIP_DESC\" [readonly]=\"readonly\" (change)=\"onChangeRelationshipDesc()\"></textarea>\n  </div>\n  <div class=\"row ml-2\">\n    <div class=\"col-8 col-lg-3 form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"timeDependent\" name=\"timeDependent\"\n             formControlName=\"TIME_DEPENDENT\" (change)=\"onChangeTimeDependency()\">\n      <label for=\"timeDependent\" class=\"form-check-label\">Time Dependent</label>\n    </div>\n    <div class=\"col-8 col-lg-4 form-group row mx-3\">\n      <label for=\"valid_period\" class=\"col-form-label form-control-sm\">Default Period of Validity(seconds):\n        <span [class.ng-invalid]=\"relationshipForm.get('VALID_PERIOD').invalid\" class=\"dk-invalid-feedback\">\n        {{relationshipForm.get('VALID_PERIOD').errors?.message}}\n      </span>\n      </label>\n      <input type=\"number\" class=\"form-control form-control-sm\" id=\"valid_period\" [readonly]=\"readonly\"\n             name=\"valid_period\" formControlName=\"VALID_PERIOD\">\n    </div>\n    <div class=\"col-8 col-lg-3 form-check\" >\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"singleton\" name=\"singleton\"\n             formControlName=\"SINGLETON\">\n      <label for=\"singleton\" class=\"form-check-label\">Singleton</label>\n    </div>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"relationshipForm\" [attributes]=\"attributes\"\n                      [relationID]=\"relationshipMeta.RELATIONSHIP_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Involved Roles</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Role</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Cardinality</th>\n          <th scope=\"col\">Direction</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"INVOLVES\">\n        <tr *ngFor=\"let involveFormGroup of involveFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteInvolve(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ROLE_ID\"\n                     [readonly]=\"readonly || oldInvolve(involveFormGroup) && involveFormGroup.valid\" (change)=\"onChangeRoleID(i)\"\n                     (dblclick)=\"onGoToRole(involveFormGroup.value['ROLE_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{involveFormGroup.get('ROLE_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRole\"\n                        (click)=\"onSearchHelp(involveFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <input type=\"text\" formControlName=\"ROLE_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[1..1]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n          <td [formGroup]=\"involveFormGroup\">\n            <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"DIRECTION\" [readonly]=\"readonly\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "DIJg":
    /*!***************************************!*\
      !*** ./src/app/model/model.module.ts ***!
      \***************************************/

    /*! exports provided: ModelModule */

    /***/
    function DIJg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelModule", function () {
        return ModelModule;
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


      var _model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./model.component */
      "93ea");
      /* harmony import */


      var _model_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./model-routing.module */
      "IGti");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./entity-type/entity-type.component */
      "UvzV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./entity-type/entity-type-detail/entity-type-detail.component */
      "yv1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./attribute-meta/attribute-meta.component */
      "23ty");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _relation_relation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./relation/relation.component */
      "9h1l");
      /* harmony import */


      var _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./relation/relation-detail/relation-detail.component */
      "koh0");
      /* harmony import */


      var _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./relationship/relationship.component */
      "O0rN");
      /* harmony import */


      var _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./relationship/relationship-detail/relationship-detail.component */
      "QKPu");
      /* harmony import */


      var _role_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./role/role.component */
      "SKUw");
      /* harmony import */


      var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./role/role-detail/role-detail.component */
      "FBRr");
      /* harmony import */


      var _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./data-element/data-element.component */
      "zIDo");
      /* harmony import */


      var _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./data-domain/data-domain.component */
      "8Bta");
      /* harmony import */


      var _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./data-domain/data-domain-detail/data-domain-detail.component */
      "1Afv");
      /* harmony import */


      var _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./data-element/data-element-detail/data-element-detail.component */
      "R7E1");
      /* harmony import */


      var _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./search-help/search-help.component */
      "hvcR");
      /* harmony import */


      var _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./search-help/search-help-detail/search-help-detail.component */
      "MoJv");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
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

      var ModelModule = function ModelModule() {
        _classCallCheck(this, ModelModule);
      };

      ModelModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _model_routing_module__WEBPACK_IMPORTED_MODULE_3__["ModelRoutingModule"], ui_message_angular__WEBPACK_IMPORTED_MODULE_10__["MessageModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], jor_angular__WEBPACK_IMPORTED_MODULE_23__["JorAngularModule"]],
        declarations: [_model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"], _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_5__["EntityTypeComponent"], _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_7__["EntityTypeDetailComponent"], _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_9__["AttributeMetaComponent"], _relation_relation_component__WEBPACK_IMPORTED_MODULE_11__["RelationComponent"], _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_12__["RelationDetailComponent"], _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_13__["RelationshipComponent"], _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_14__["RelationshipDetailComponent"], _role_role_component__WEBPACK_IMPORTED_MODULE_15__["RoleComponent"], _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_16__["RoleDetailComponent"], _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_17__["DataElementComponent"], _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_20__["DataElementDetailComponent"], _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_18__["DataDomainComponent"], _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_19__["DataDomainDetailComponent"], _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_21__["SearchHelpComponent"], _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_22__["SearchHelpDetailComponent"]]
      })], ModelModule);
      /***/
    },

    /***/
    "FBRr":
    /*!*****************************************************************!*\
      !*** ./src/app/model/role/role-detail/role-detail.component.ts ***!
      \*****************************************************************/

    /*! exports provided: RoleDetailComponent */

    /***/
    function FBRr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleDetailComponent", function () {
        return RoleDetailComponent;
      });
      /* harmony import */


      var _raw_loader_role_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./role-detail.component.html */
      "TZbv");
      /* harmony import */


      var _role_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-detail.component.css */
      "W0Gm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../msgStore */
      "uLAD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");

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

      var RoleDetailComponent = /*#__PURE__*/function () {
        function RoleDetailComponent(route, router, fb, uniqueRoleValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, RoleDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueRoleValidator = uniqueRoleValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.changedRole = {};
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_9__["msgStore"], 'EN');
        }

        _createClass(RoleDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (params) {
              var roleID = params.get('roleID');

              if (roleID === 'new') {
                var role = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["RoleMeta"]();
                role.ROLE_ID = '';
                role.ROLE_DESC = '';
                role.RELATIONS = [];
                _this13.isNewMode = true;
                _this13.readonly = false;
                _this13.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(role);
              } else {
                _this13.readonly = true;
                _this13.isNewMode = false;
                return _this13.entityService.getRole(roleID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this13.messageService.clearMessages();

                _this13.roleMeta = null;
                _this13.roleForm = null;

                _this13.messageService.report(data);
              } else {
                _this13.messageService.clearMessages();

                if (history.state.message) {
                  _this13.messageService.report(history.state.message);
                }

                _this13.roleMeta = data;

                _this13._generateRoleForm();
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this13.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.relationSearchHelp) {
              this.relationSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelp"]();
              this.relationSearchHelp.OBJECT_NAME = 'Relation';

              this.relationSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRelation(searchTerm);
                };
              }(this.entityService);

              this.relationSearchHelp.BEHAVIOUR = 'A';
              this.relationSearchHelp.MULTI = false;
              this.relationSearchHelp.FUZZY_SEARCH = true;
              this.relationSearchHelp.FIELDS = [{
                FIELD_NAME: 'RELATION_ID',
                LIST_HEADER_TEXT: 'Relation',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'RELATION_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.relationSearchHelp.READ_ONLY = this.readonly || this.oldRelation(control) && control.valid;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRelationID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.relationSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateRoleForm",
          value: function _generateRoleForm() {
            var _this14 = this;

            this.roleForm = this.fb.group({});
            this.roleForm.addControl('ROLE_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.roleMeta.ROLE_ID, {
              updateOn: 'blur'
            }));

            if (this.isNewMode) {
              this.roleForm.get('ROLE_ID').setValidators(this._validateRoleID);
              this.roleForm.get('ROLE_ID').setAsyncValidators(this.uniqueRoleValidator.validate.bind(this.uniqueRoleValidator));
            }

            this.roleForm.addControl('ROLE_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.roleMeta.ROLE_DESC)); // Compose Involves

            var formArray = [];
            this.roleMeta.RELATIONS.forEach(function (relation) {
              formArray.push(_this14.fb.group({
                RELATION_ID: [relation.RELATION_ID],
                RELATION_DESC: [relation.RELATION_DESC],
                CARDINALITY: [{
                  value: relation.CARDINALITY,
                  disabled: _this14.readonly
                }]
              }));
            });

            if (this.isNewMode) {
              formArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
              }));
            }

            this.roleForm.addControl('RELATIONS', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](formArray));
          }
        }, {
          key: "_validateRoleID",
          value: function _validateRoleID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Role ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this15 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Role?').subscribe(function (confirm) {
                if (confirm) {
                  _this15._switch2DisplayMode();

                  _this15.roleMeta = null;

                  _this15.modelService.sendDialogAnswer('OK');
                } else {
                  _this15.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.roleForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this15._generateRoleForm();

                    _this15.roleForm.reset(_this15.roleForm.value);

                    _this15._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.relationFormArray.controls.forEach(function (relationFormGroup) {
                relationFormGroup.get('CARDINALITY').enable();
              });
              this.relationFormArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
              }));
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            var lastIndex = this.relationFormArray.length - 1;

            while (lastIndex >= 0 && this.relationFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
              this.relationFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.relationFormArray.controls.forEach(function (relationFormGroup) {
              relationFormGroup.get('CARDINALITY').disable();
            });
          }
        }, {
          key: "onChangeRoleID",
          value: function onChangeRoleID() {
            this.modelService.updateRoleID(this.roleForm.get('ROLE_ID').value);
          }
        }, {
          key: "onChangeRoleDesc",
          value: function onChangeRoleDesc() {
            this.modelService.updateRoleDesc(this.roleForm.get('ROLE_DESC').value);
          }
        }, {
          key: "deleteRelation",
          value: function deleteRelation(index) {
            if (index !== this.relationFormArray.length - 1) {
              this.relationFormArray.removeAt(index);
              this.relationFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeRelationID",
          value: function onChangeRelationID(index, isExportedFromSH) {
            var currentRelationFormGroup = this.relationFormArray.controls[index];

            if (this.relationFormArray.controls.findIndex(function (relationCtrl, i) {
              return i !== index && relationCtrl.get('RELATION_ID').value === currentRelationFormGroup.get('RELATION_ID').value;
            }) !== -1) {
              currentRelationFormGroup.get('RELATION_ID').setErrors({
                message: 'Duplicate Relations'
              });
              return;
            }

            if (index === this.relationFormArray.length - 1 && currentRelationFormGroup.value.RELATION_ID.trim() !== '') {
              // Only work for the last New line
              this.relationFormArray.push(this.fb.group({
                RELATION_ID: [''],
                RELATION_DESC: [''],
                CARDINALITY: ['[0..1]']
              }));
            }

            if (!isExportedFromSH) {
              this.entityService.getRelationDesc(currentRelationFormGroup.value.RELATION_ID).subscribe(function (data) {
                if (data['msgCat']) {
                  currentRelationFormGroup.get('RELATION_ID').setErrors({
                    message: data['msgShortText']
                  });
                } else {
                  currentRelationFormGroup.get('RELATION_DESC').setValue(data);
                }
              });
            }
          }
        }, {
          key: "oldRelation",
          value: function oldRelation(formGroup) {
            return this.roleMeta.RELATIONS ? this.roleMeta.RELATIONS.findIndex(function (relation) {
              return relation.RELATION_ID === formGroup.get('RELATION_ID').value;
            }) !== -1 : false;
          }
        }, {
          key: "onGoToRelation",
          value: function onGoToRelation(relationID) {
            this.router.navigate(['/model/relation', relationID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this16 = this;

            if (this.isNewMode || !this.bypassProtection && this.roleForm && this.roleForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this16.modelService.sendDialogAnswer('OK');
                } else {
                  _this16.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this17 = this;

            if (!this.roleForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.roleForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedRole['action'] = 'add';
              this.changedRole['ROLE_ID'] = this.roleForm.controls['ROLE_ID'].value;
            } else {
              this.changedRole['action'] = 'update';
              this.changedRole['ROLE_ID'] = this.roleMeta.ROLE_ID;
            }

            if (this.roleForm.controls['ROLE_DESC'].dirty) {
              this.changedRole['ROLE_DESC'] = this.roleForm.controls['ROLE_DESC'].value;
            }

            this._processChangedRelation();

            this.entityService.saveRole(this.changedRole).subscribe(function (data) {
              return _this17._postActivityAfterSavingRole(data);
            });
          }
        }, {
          key: "_processChangedRelation",
          value: function _processChangedRelation() {
            var _this18 = this;

            var changedRelations = [];

            if (!this.relationFormArray.dirty) {
              return;
            }

            this.changedRole['RELATIONS'] = changedRelations;
            this.relationFormArray.controls.forEach(function (relationControl) {
              if (relationControl.get('RELATION_ID').value.trim() === '') {
                return;
              }

              var action;

              var index = _this18.roleMeta.RELATIONS.findIndex(function (relation) {
                return relationControl.get('RELATION_ID').value === relation.RELATION_ID;
              });

              if (index === -1) {
                // New Add Case
                action = 'add';
              } else {
                if (relationControl.dirty) {
                  // Change Case
                  action = 'update';
                }
              }

              if (action) {
                changedRelations.push({
                  action: action,
                  RELATION_ID: relationControl.get('RELATION_ID').value,
                  CARDINALITY: relationControl.get('CARDINALITY').value
                });
              }
            }); // Deletion Case

            this.roleMeta.RELATIONS.forEach(function (relation) {
              var index = _this18.relationFormArray.controls.findIndex(function (relationControl) {
                return relationControl.get('RELATION_ID').value === relation.RELATION_ID;
              });

              if (index === -1) {
                // The attribute must be deleted
                var deletedRelation = {
                  action: 'delete',
                  RELATION_ID: relation.RELATION_ID
                };
                changedRelations.push(deletedRelation);
              }
            });
          }
        }, {
          key: "_postActivityAfterSavingRole",
          value: function _postActivityAfterSavingRole(data) {
            var _this19 = this;

            this.changedRole = {};

            if (data && data['ROLE_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/role/' + data['ROLE_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'ROLE_SAVED', 'S', data['ROLE_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.roleMeta = data;

                this._generateRoleForm();

                this.messageService.reportMessage('MODEL', 'ROLE_SAVED', 'S', this.roleMeta.ROLE_ID);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this19.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }, {
          key: "relationFormArray",
          get: function get() {
            return this.roleForm.get('RELATIONS');
          }
        }]);

        return RoleDetailComponent;
      }();

      RoleDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_12__["UniqueRoleValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }];
      };

      RoleDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      RoleDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-role-detail',
        template: _raw_loader_role_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_role_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_12__["UniqueRoleValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]])], RoleDetailComponent);
      /***/
    },

    /***/
    "IGti":
    /*!***********************************************!*\
      !*** ./src/app/model/model-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: ModelRoutingModule */

    /***/
    function IGti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelRoutingModule", function () {
        return ModelRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./model.component */
      "93ea");
      /* harmony import */


      var _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./entity-type/entity-type.component */
      "UvzV");
      /* harmony import */


      var _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./entity-type/entity-type-detail/entity-type-detail.component */
      "yv1n");
      /* harmony import */


      var _relation_relation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./relation/relation.component */
      "9h1l");
      /* harmony import */


      var _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./relation/relation-detail/relation-detail.component */
      "koh0");
      /* harmony import */


      var _work_protection_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../work-protection.guard */
      "4J20");
      /* harmony import */


      var _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./relationship/relationship.component */
      "O0rN");
      /* harmony import */


      var _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./relationship/relationship-detail/relationship-detail.component */
      "QKPu");
      /* harmony import */


      var _role_role_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./role/role.component */
      "SKUw");
      /* harmony import */


      var _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./role/role-detail/role-detail.component */
      "FBRr");
      /* harmony import */


      var _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./data-element/data-element.component */
      "zIDo");
      /* harmony import */


      var _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./data-domain/data-domain.component */
      "8Bta");
      /* harmony import */


      var _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./data-domain/data-domain-detail/data-domain-detail.component */
      "1Afv");
      /* harmony import */


      var _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./data-element/data-element-detail/data-element-detail.component */
      "R7E1");
      /* harmony import */


      var _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./search-help/search-help.component */
      "hvcR");
      /* harmony import */


      var _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./search-help/search-help-detail/search-help-detail.component */
      "MoJv");

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
        path: '',
        component: _model_component__WEBPACK_IMPORTED_MODULE_2__["ModelComponent"],
        children: [{
          path: 'entity-type',
          component: _entity_type_entity_type_component__WEBPACK_IMPORTED_MODULE_3__["EntityTypeComponent"],
          children: [{
            path: ':entityID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _entity_type_entity_type_detail_entity_type_detail_component__WEBPACK_IMPORTED_MODULE_4__["EntityTypeDetailComponent"]
          }]
        }, {
          path: 'role',
          component: _role_role_component__WEBPACK_IMPORTED_MODULE_10__["RoleComponent"],
          children: [{
            path: ':roleID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _role_role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoleDetailComponent"]
          }]
        }, {
          path: 'relation',
          component: _relation_relation_component__WEBPACK_IMPORTED_MODULE_5__["RelationComponent"],
          children: [{
            path: ':relationID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _relation_relation_detail_relation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RelationDetailComponent"]
          }]
        }, {
          path: 'relationship',
          component: _relationship_relationship_component__WEBPACK_IMPORTED_MODULE_8__["RelationshipComponent"],
          children: [{
            path: ':relationshipID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _relationship_relationship_detail_relationship_detail_component__WEBPACK_IMPORTED_MODULE_9__["RelationshipDetailComponent"]
          }]
        }, {
          path: 'data-element',
          component: _data_element_data_element_component__WEBPACK_IMPORTED_MODULE_12__["DataElementComponent"],
          children: [{
            path: ':elementID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _data_element_data_element_detail_data_element_detail_component__WEBPACK_IMPORTED_MODULE_15__["DataElementDetailComponent"]
          }]
        }, {
          path: 'data-domain',
          component: _data_domain_data_domain_component__WEBPACK_IMPORTED_MODULE_13__["DataDomainComponent"],
          children: [{
            path: ':domainID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _data_domain_data_domain_detail_data_domain_detail_component__WEBPACK_IMPORTED_MODULE_14__["DataDomainDetailComponent"]
          }]
        }, {
          path: 'search-help',
          component: _search_help_search_help_component__WEBPACK_IMPORTED_MODULE_16__["SearchHelpComponent"],
          children: [{
            path: ':searchHelpID',
            canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_7__["WorkProtectionGuard"]],
            component: _search_help_search_help_detail_search_help_detail_component__WEBPACK_IMPORTED_MODULE_17__["SearchHelpDetailComponent"]
          }]
        }, {
          path: '**',
          redirectTo: '/model/entity-type',
          pathMatch: 'full'
        }]
      }];

      var ModelRoutingModule = function ModelRoutingModule() {
        _classCallCheck(this, ModelRoutingModule);
      };

      ModelRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], ModelRoutingModule);
      /***/
    },

    /***/
    "IRPK":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/entity-type/entity-type.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IRPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchEntityType(searchBox.value)\" >\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedEntityType\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newEntityType()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let entityType of entityTypeList\" routerLink=\"/model/entity-type/{{entityType.ENTITY_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(entityType)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{entityType.ENTITY_ID}}</h5>\n          <small>version: {{entityType.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{entityType.ENTITY_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{entityType.LAST_CHANGE_BY}} @{{entityType.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "IzY+":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/model.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function IzY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"nav nav-tabs mt-1\">\n  <li class=\"nav-item active\">\n    <a class=\"nav-link\" routerLink=\"/model/entity-type\" routerLinkActive=\"active\">Entity</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/role\" routerLinkActive=\"active\">Role</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/relation\" routerLinkActive=\"active\">Relation</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/relationship\" routerLinkActive=\"active\">Relationship</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/data-element\" routerLinkActive=\"active\">Data Element</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/data-domain\" routerLinkActive=\"active\">Data Domain</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/model/search-help\" routerLinkActive=\"active\">Search Help</a>\n  </li>\n</ul>\n\n<div class=\"dk-model-content\">\n  <router-outlet></router-outlet>\n</div>\n\n";
      /***/
    },

    /***/
    "JLII":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/role/role.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function JLII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRole(searchBox.value)\" >\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRole\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRole()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let role of roleList\" routerLink=\"/model/role/{{role.ROLE_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(role)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{role.ROLE_ID}}</h5>\n          <small>version: {{role.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{role.ROLE_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{role.LAST_CHANGE_BY}} @{{role.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "Jb4D":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relation/relation.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Jb4D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRelation(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRelation\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRelation()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let relation of relationList\" routerLink=\"/model/relation/{{relation.RELATION_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(relation)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{relation.RELATION_ID}}</h5>\n          <small>version: {{relation.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{relation.RELATION_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{relation.LAST_CHANGE_BY}} @{{relation.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "JpkU":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JpkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"entityMeta\" [formGroup]=\"entityTypeForm\">\n  <div class=\"form-group\">\n    <label for=\"entity-type\" class=\"col-form-label form-control-sm\">Entity Type:\n      <span [class.ng-invalid]=\"entityTypeForm.get('ENTITY_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{entityTypeForm.get('ENTITY_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"entity-type\" [readonly]=\"readonly || !isNewMode\"\n           name=\"entity-type\" formControlName=\"ENTITY_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"entity-desc\" class=\"col-form-label form-control-sm\">Entity Description:</label>\n    <textarea class=\"form-control\" id=\"entity-desc\" name=\"entity-desc\" rows=\"2\"\n              formControlName=\"ENTITY_DESC\" [readonly]=\"readonly\" (change)=\"onChangeEntityDesc()\"></textarea>\n  </div>\n\n  <app-attribute-meta [readonly]=\"readonly\" [parentForm]=\"entityTypeForm\" [attributes]=\"attributes\"\n                      [relationID]=\"entityMeta.ENTITY_ID\" [isNewMode]=\"isNewMode\">\n  </app-attribute-meta>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Role</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm dk-table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">Action</th>\n            <th scope=\"col\">Role</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Conditional Attribute</th>\n            <th scope=\"col\">Conditional Value</th>\n          </tr>\n        </thead>\n\n        <tbody formArrayName=\"ROLES\">\n        <tr *ngFor=\"let roleFormGroup of roleFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRole(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"ROLE_ID\"\n                     [readonly]=\"readonly || oldRole(roleFormGroup) && roleFormGroup.valid\" (change)=\"onChangeRoleID(i)\"\n                     (dblclick)=\"onGoToRole(roleFormGroup.value['ROLE_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{roleFormGroup.get('ROLE_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRole\"\n                        (click)=\"onSearchHelp(roleFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <input type=\"text\" formControlName=\"ROLE_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <select formControlName=\"CONDITIONAL_ATTR\"  class=\"form-control form-control-sm\">\n              <option *ngFor=\"let opt of attrFormArray.controls\" [value]=\"opt.value.ATTR_NAME\">{{opt.value.ATTR_NAME}}</option>\n            </select>\n          </td>\n          <td [formGroup]=\"roleFormGroup\">\n            <input type=\"text\" formControlName=\"CONDITIONAL_VALUE\" [readonly]=\"readonly\" class=\"form-control form-control-sm\">\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "Kp7H":
    /*!***************************************************************!*\
      !*** ./src/app/model/relationship/relationship.component.css ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function Kp7H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JlbGF0aW9uc2hpcC9yZWxhdGlvbnNoaXAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "M8hk":
    /*!***************************************************************************************!*\
      !*** ./src/app/model/search-help/search-help-detail/search-help-detail.component.css ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function M8hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 4rem;\n  min-width: 4rem;\n  max-width: 4rem;\n}\n.dk-selection{\n  width: 15rem;\n  min-width: 10rem;\n}\n.dk-string{\n  width: 15rem;\n  min-width: 10rem;\n}\n.dk-number{\n  width: 10rem;\n  min-width: 5rem;\n}\n.dk-description{\n  width: 15rem;\n  min-width: 10rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvc2VhcmNoLWhlbHAvc2VhcmNoLWhlbHAtZGV0YWlsL3NlYXJjaC1oZWxwLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvc2VhcmNoLWhlbHAvc2VhcmNoLWhlbHAtZGV0YWlsL3NlYXJjaC1oZWxwLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogNHJlbTtcbiAgbWluLXdpZHRoOiA0cmVtO1xuICBtYXgtd2lkdGg6IDRyZW07XG59XG4uZGstc2VsZWN0aW9ue1xuICB3aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTByZW07XG59XG4uZGstc3RyaW5ne1xuICB3aWR0aDogMTVyZW07XG4gIG1pbi13aWR0aDogMTByZW07XG59XG4uZGstbnVtYmVye1xuICB3aWR0aDogMTByZW07XG4gIG1pbi13aWR0aDogNXJlbTtcbn1cbi5kay1kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDE1cmVtO1xuICBtaW4td2lkdGg6IDEwcmVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    "MGLK":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-domain/data-domain.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MGLK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchDataDomain(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedDataDomain\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newDataDomian()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let dataDomain of dataDomainList\" routerLink=\"/model/data-domain/{{dataDomain.DOMAIN_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(dataDomain)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{dataDomain.DOMAIN_ID}}</h5>\n          <small>version: {{dataDomain.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{dataDomain.DOMAIN_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{dataDomain.LAST_CHANGE_BY}} @{{dataDomain.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "MW8X":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/attribute-meta/attribute-meta.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MW8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mt-2\">\n  <div class=\"card-header\"><span class=\"fab fa-elementor\"></span> Attribute</div>\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-sm dk-table\" [formGroup]=\"parentForm\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Attribute Name</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Data Element</th>\n          <th scope=\"col\">Data Type</th>\n          <th scope=\"col\">Length</th>\n          <th scope=\"col\">Decimal</th>\n          <th scope=\"col\" title=\"Primary Key\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">PK</th>\n          <th scope=\"col\" title=\"Auto Incremental\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">AI</th>\n        </tr>\n      </thead>\n\n      <tbody formArrayName=\"ATTRIBUTES\">\n        <tr *ngFor=\"let attrFormGroup of formArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" id=\"delete\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"deleteAttribute(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" id=\"add\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"insertAttribute(i)\" title=\"Insert\">\n              <span class=\"fas fa-plus\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" id=\"switch\" [disabled]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                    (click)=\"switchBtwDEAndDT(i)\" title=\"Switch btw Data Element and Data Type\">\n              <span class=\"far fa-lightbulb\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"ATTR_NAME\" [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                   class=\"form-control form-control-sm\" (change)=\"onChangeAttributeName(i)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"text\" formControlName=\"ATTR_DESC\" class=\"form-control form-control-sm dk-description\"\n                   [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <div class=\"input-group dk-dataElement\">\n              <input type=\"text\" formControlName=\"DATA_ELEMENT\" [readonly]=\"readonly || isFieldGray(attrFormGroup.value)\"\n                     class=\"form-control form-control-sm\" (change)=\"onChangeDataElement(i)\"\n                     (dblclick)=\"onGoToDataElement(attrFormGroup.value['DATA_ELEMENT'])\">\n              <div class=\"invalid-tooltip\">\n                {{attrFormGroup.get('DATA_ELEMENT').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchDataElement\"\n                        (click)=\"onSearchHelp(attrFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(attrFormGroup)\" class=\"form-control form-control-sm\">\n              <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n            </select>\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"number\" formControlName=\"DATA_LENGTH\" class=\"form-control form-control-sm dk-number\"\n                   [readonly]=\"(+attrFormGroup.value.DATA_TYPE !== 1 && +attrFormGroup.value.DATA_TYPE !== 4) || readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\">\n            <input type=\"number\" formControlName=\"DECIMAL\" class=\"form-control form-control-sm dk-number\"\n                   [readonly]=\"+attrFormGroup.value.DATA_TYPE !== 4 || readonly || isFieldGray(attrFormGroup.value)\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">\n            <input type=\"checkbox\" formControlName=\"PRIMARY_KEY\">\n          </td>\n          <td [formGroup]=\"attrFormGroup\" [hidden]=\"relationID.substring(0,2) !== 'r_'\">\n            <input type=\"checkbox\" formControlName=\"AUTO_INCREMENT\">\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "MoJv":
    /*!**************************************************************************************!*\
      !*** ./src/app/model/search-help/search-help-detail/search-help-detail.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SearchHelpDetailComponent */

    /***/
    function MoJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpDetailComponent", function () {
        return SearchHelpDetailComponent;
      });
      /* harmony import */


      var _raw_loader_search_help_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./search-help-detail.component.html */
      "NoKr");
      /* harmony import */


      var _search_help_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-help-detail.component.css */
      "M8hk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

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

      var SearchHelpDetailComponent = /*#__PURE__*/function () {
        function SearchHelpDetailComponent(route, router, fb, uniqueSearchHelpValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, SearchHelpDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueSearchHelpValidator = uniqueSearchHelpValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.changedSearchHelp = {};
          this.relationsOfEntity = [];
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.behaviours = [{
            key: 'A',
            value: 'Search automatically when popup'
          }, {
            key: 'M',
            value: 'Search manually'
          }];
          this.relationAttributesMap = {};
        }

        _createClass(SearchHelpDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (params) {
              var searchHelpID = params.get('searchHelpID');

              if (searchHelpID === 'new') {
                var searchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpMeta"]();
                searchHelp.SEARCH_HELP_ID = '';
                searchHelp.SEARCH_HELP_DESC = '';
                searchHelp.BEHAVIOUR = 'A'; // A: Auto-Trigger Search, M: Manual-Trigger Search

                _this20.isNewMode = true;
                _this20.readonly = false;
                _this20.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(searchHelp);
              } else {
                _this20.readonly = true;
                _this20.isNewMode = false;
                return _this20.entityService.getSearchHelp(searchHelpID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this20.messageService.clearMessages();

                _this20.searchHelpMeta = null;
                _this20.searchHelpForm = null;

                _this20.messageService.report(data);
              } else {
                _this20.messageService.clearMessages();

                if (history.state.message) {
                  _this20.messageService.report(history.state.message);
                }

                _this20.searchHelpMeta = data;

                _this20._generateSearchHelpForm();

                _this20._getRelationsOfEntity(_this20.searchHelpForm, false);

                _this20.searchHelpFieldsFormArray.controls.forEach(function (field) {
                  return _this20._getAttributesOfRelation(field, false);
                });
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this20.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "_generateSearchHelpForm",
          value: function _generateSearchHelpForm() {
            var _this21 = this;

            if (this.searchHelpForm) {
              this.searchHelpForm.markAsPristine({
                onlySelf: false
              });
              this.searchHelpForm.get('SEARCH_HELP_ID').setValue(this.searchHelpMeta.SEARCH_HELP_ID);
              this.searchHelpForm.get('SEARCH_HELP_DESC').setValue(this.searchHelpMeta.SEARCH_HELP_DESC);
              this.searchHelpForm.get('ENTITY_ID').setValue(this.searchHelpMeta.ENTITY_ID);
              this.searchHelpForm.get('RELATION_ID').setValue(this.searchHelpMeta.RELATION_ID);
              this.searchHelpForm.get('BEHAVIOUR').setValue(this.searchHelpMeta.BEHAVIOUR);
              this.searchHelpForm.get('MULTI').setValue(this.searchHelpMeta.MULTI);
              this.searchHelpForm.get('FUZZY_SEARCH').setValue(this.searchHelpMeta.FUZZY_SEARCH);
              this.searchHelpFieldsFormArray.clear();

              if (this.readonly) {
                this.searchHelpForm.get('BEHAVIOUR').disable();
                this.searchHelpForm.get('MULTI').disable();
                this.searchHelpForm.get('FUZZY_SEARCH').disable();
                this.searchHelpForm.get('RELATION_ID').disable();
              }
            } else {
              this.searchHelpForm = this.fb.group({
                SEARCH_HELP_ID: [this.searchHelpMeta.SEARCH_HELP_ID, {
                  updateOn: 'blur'
                }],
                SEARCH_HELP_DESC: [this.searchHelpMeta.SEARCH_HELP_DESC],
                ENTITY_ID: [this.searchHelpMeta.ENTITY_ID],
                RELATION_ID: [{
                  value: this.searchHelpMeta.RELATION_ID,
                  disabled: this.readonly
                }],
                BEHAVIOUR: [{
                  value: this.searchHelpMeta.BEHAVIOUR,
                  disabled: this.readonly
                }],
                MULTI: [{
                  value: this.searchHelpMeta.MULTI,
                  disabled: this.readonly
                }],
                FUZZY_SEARCH: [{
                  value: this.searchHelpMeta.FUZZY_SEARCH,
                  disabled: this.readonly
                }],
                FIELDS: this.fb.array([])
              });
            }

            this._setNewModeState();

            if (this.searchHelpMeta.FIELDS) {
              this.searchHelpMeta.FIELDS.forEach(function (field) {
                _this21.searchHelpFieldsFormArray.push(_this21.fb.group({
                  RELATION_ID: [{
                    value: field.RELATION_ID,
                    disabled: _this21.readonly
                  }],
                  FIELD_NAME: [{
                    value: field.FIELD_NAME,
                    disabled: _this21.readonly
                  }],
                  FIELD_DESC: [field.FIELD_DESC],
                  IMPORT: [{
                    value: field.IMPORT,
                    disabled: _this21.readonly
                  }],
                  EXPORT: [{
                    value: field.EXPORT,
                    disabled: _this21.readonly
                  }],
                  IE_FIELD_NAME: [field.IE_FIELD_NAME],
                  LIST_POSITION: [field.LIST_POSITION],
                  FILTER_POSITION: [field.FILTER_POSITION],
                  FILTER_DISP_ONLY: [{
                    value: field.FILTER_DISP_ONLY,
                    disabled: _this21.readonly
                  }],
                  DEFAULT_VALUE: [field.DEFAULT_VALUE]
                }));
              });
            }
          }
        }, {
          key: "_setNewModeState",
          value: function _setNewModeState() {
            if (this.isNewMode) {
              this.searchHelpForm.get('SEARCH_HELP_ID').setValidators(this._validateSearchHelpID);
              this.searchHelpForm.get('SEARCH_HELP_ID').setAsyncValidators(this.uniqueSearchHelpValidator.validate.bind(this.uniqueSearchHelpValidator));
              this.searchHelpForm.get('BEHAVIOUR').enable();
              this.searchHelpForm.get('MULTI').enable();
              this.searchHelpForm.get('FUZZY_SEARCH').enable();
              this.searchHelpForm.get('RELATION_ID').enable();
              this.searchHelpForm.get('BEHAVIOUR').markAsDirty(); // Default value mark as dirty
            } else {
              this.searchHelpForm.get('SEARCH_HELP_ID').clearValidators();
              this.searchHelpForm.get('SEARCH_HELP_ID').clearAsyncValidators();
              this.searchHelpForm.get('SEARCH_HELP_ID').updateValueAndValidity();
            }
          }
        }, {
          key: "_validateSearchHelpID",
          value: function _validateSearchHelpID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Search Help ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Search Help ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateEntityID",
          value: function _validateEntityID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give an entity'
              };
            }

            return null;
          }
        }, {
          key: "_validateRelationID",
          value: function _validateRelationID(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a relation'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this22 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Search Help?').subscribe(function (confirm) {
                if (confirm) {
                  _this22._switch2DisplayMode();

                  _this22.searchHelpMeta = null;

                  _this22.modelService.sendDialogAnswer('OK');
                } else {
                  _this22.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.searchHelpForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this22._generateSearchHelpForm();

                    _this22.searchHelpForm.reset(_this22.searchHelpForm.value);

                    _this22._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this._switch2EditMode();
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.searchHelpForm.get('BEHAVIOUR').disable();
            this.searchHelpForm.get('MULTI').disable();
            this.searchHelpForm.get('FUZZY_SEARCH').disable();
            this.searchHelpForm.get('RELATION_ID').disable();
            this.searchHelpFieldsFormArray.controls.forEach(function (field) {
              field.get('RELATION_ID').disable();
              field.get('FIELD_NAME').disable();
              field.get('IMPORT').disable();
              field.get('EXPORT').disable();
              field.get('FILTER_DISP_ONLY').disable();
            });
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            this.searchHelpForm.get('BEHAVIOUR').enable();
            this.searchHelpForm.get('MULTI').enable();
            this.searchHelpForm.get('FUZZY_SEARCH').enable();
            this.searchHelpForm.get('RELATION_ID').enable();
            this.searchHelpFieldsFormArray.controls.forEach(function (field) {
              field.get('RELATION_ID').enable();
              field.get('FIELD_NAME').enable();
              field.get('IMPORT').enable();
              field.get('EXPORT').enable();
              field.get('FILTER_DISP_ONLY').enable();
            });
          }
        }, {
          key: "onChangeSearchHelpID",
          value: function onChangeSearchHelpID() {
            this.modelService.updateSearchHelpID(this.searchHelpForm.get('SEARCH_HELP_ID').value);
          }
        }, {
          key: "onChangeSearchHelpDesc",
          value: function onChangeSearchHelpDesc() {
            this.modelService.updateSearchHelpDesc(this.searchHelpForm.get('SEARCH_HELP_DESC').value);
          }
        }, {
          key: "onEntitySearchHelp",
          value: function onEntitySearchHelp(control) {
            if (!this.entitySearchHelp) {
              this.entitySearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelp"]();
              this.entitySearchHelp.OBJECT_NAME = 'Entity ID';

              this.entitySearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listEntityType(searchTerm);
                };
              }(this.entityService);

              this.entitySearchHelp.BEHAVIOUR = 'A';
              this.entitySearchHelp.MULTI = false;
              this.entitySearchHelp.FUZZY_SEARCH = true;
              this.entitySearchHelp.FIELDS = [{
                FIELD_NAME: 'ENTITY_ID',
                LIST_HEADER_TEXT: 'Entity',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ENTITY_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.entitySearchHelp.READ_ONLY = this.readonly;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeEntityID(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.entitySearchHelp, control, afterExportFn);
          }
        }, {
          key: "onChangeEntityID",
          value: function onChangeEntityID(formGroup) {
            this._getRelationsOfEntity(formGroup, true);
          }
        }, {
          key: "_getRelationsOfEntity",
          value: function _getRelationsOfEntity(searchHelpForm, setDefault) {
            var _this23 = this;

            var domainEntityID = searchHelpForm.get('ENTITY_ID').value;

            if (!domainEntityID) {
              return;
            }

            this.entityService.getRelationMetaOfEntity(domainEntityID).subscribe(function (entityRelations) {
              if (entityRelations[0]['msgType'] === 'E') {
                searchHelpForm.get('ENTITY_ID').setErrors({
                  message: entityRelations[0]['msgShortText']
                });
              } else {
                _this23.relationsOfEntity = entityRelations.map(function (relationMeta) {
                  return relationMeta.RELATION_ID;
                }).filter(function (relationId) {
                  return relationId.substr(0, 2) !== 'rs';
                });

                if (setDefault) {
                  searchHelpForm.get('RELATION_ID').setValue(_this23.relationsOfEntity[0]);
                  searchHelpForm.get('RELATION_ID').markAsDirty();

                  _this23._getAttributesOfRelation(searchHelpForm, true);
                }
              }
            });
          }
        }, {
          key: "onChangeRelationID",
          value: function onChangeRelationID(formGroup) {
            this._getAttributesOfRelation(formGroup, true);
          }
        }, {
          key: "_getAttributesOfRelation",
          value: function _getAttributesOfRelation(formGroup, afterChanges) {
            var _this24 = this;

            var relationID = formGroup.get('RELATION_ID').value;

            if (!relationID) {
              return;
            }

            if (this.relationAttributesMap[relationID]) {
              if (afterChanges) {
                this._afterChangeRelationID(formGroup);
              } else {
                this.onChangeField(formGroup);
              }
            } else {
              this.entityService.getRelationMeta(relationID).subscribe(function (relationMeta) {
                _this24.relationAttributesMap[relationID] = relationMeta.ATTRIBUTES;

                if (afterChanges) {
                  _this24._afterChangeRelationID(formGroup);
                } else {
                  _this24.onChangeField(formGroup);
                }
              });
            }
          }
        }, {
          key: "_afterChangeRelationID",
          value: function _afterChangeRelationID(formGroup) {
            var _this25 = this;

            var relationID = formGroup.get('RELATION_ID').value;

            if (formGroup.get('FIELD_NAME')) {
              // Search help field level relation ID change
              formGroup.get('FIELD_NAME').setValue(this.relationAttributesMap[relationID][0]['ATTR_NAME']);
              formGroup.get('FIELD_NAME').markAsDirty();
              formGroup.get('FIELD_DESC').setValue(this.relationAttributesMap[relationID][0]['ATTR_DESC']);
            } else {
              // Search help head level relation ID change
              this.searchHelpFieldsFormArray.clear();
              this.relationAttributesMap[relationID].forEach(function (attribute) {
                _this25.searchHelpFieldsFormArray.push(_this25.fb.group({
                  RELATION_ID: [attribute.RELATION_ID],
                  FIELD_NAME: [attribute.ATTR_NAME],
                  FIELD_DESC: [attribute.ATTR_DESC],
                  IMPORT: [attribute.PRIMARY_KEY],
                  EXPORT: [attribute.PRIMARY_KEY],
                  IE_FIELD_NAME: [''],
                  LIST_POSITION: [attribute.ORDER],
                  FILTER_POSITION: [attribute.ORDER],
                  FILTER_DISP_ONLY: [false],
                  DEFAULT_VALUE: ['']
                }));
              });
              this.searchHelpFieldsFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeField",
          value: function onChangeField(formGroup) {
            var relationID = formGroup.get('RELATION_ID').value;
            var currAttr = this.relationAttributesMap[relationID].find(function (attribute) {
              return attribute.ATTR_NAME === formGroup.get('FIELD_NAME').value;
            });
            formGroup.get('FIELD_DESC').setValue(currAttr.ATTR_DESC);
          }
        }, {
          key: "insertField",
          value: function insertField(index) {
            var mainRelationID = this.searchHelpForm.get('RELATION_ID').value;
            var firstAttribute = this.relationAttributesMap[mainRelationID][0];
            this.searchHelpFieldsFormArray.insert(index, this.fb.group({
              RELATION_ID: [mainRelationID],
              FIELD_NAME: [firstAttribute.ATTR_NAME],
              FIELD_DESC: [firstAttribute.ATTR_DESC],
              IMPORT: [firstAttribute.PRIMARY_KEY],
              EXPORT: [firstAttribute.PRIMARY_KEY],
              IE_FIELD_NAME: [''],
              LIST_POSITION: [0],
              FILTER_POSITION: [0],
              FILTER_DISP_ONLY: [false],
              DEFAULT_VALUE: ['']
            }));
          }
        }, {
          key: "deleteField",
          value: function deleteField(index) {
            if (this.searchHelpFieldsFormArray.length === 1) {
              this.messageService.reportMessage('MODEL', 'MINIMUM_ONE_SEARCH_FIELD', 'E');
              return;
            }

            this.searchHelpFieldsFormArray.removeAt(index);
            this.searchHelpFieldsFormArray.markAsDirty();
          }
        }, {
          key: "onGoToEntity",
          value: function onGoToEntity(entityID) {
            this.router.navigate(['/model/entity-type', entityID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this26 = this;

            if (this.isNewMode || !this.bypassProtection && this.searchHelpForm && this.searchHelpForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this26.modelService.sendDialogAnswer('OK');
                } else {
                  _this26.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this27 = this;

            if (!this.searchHelpForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (this.searchHelpForm.invalid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedSearchHelp['action'] = 'add';
              this.changedSearchHelp['SEARCH_HELP_ID'] = this.searchHelpForm.get('SEARCH_HELP_ID').value;
            } else {
              this.changedSearchHelp['action'] = 'update';
              this.changedSearchHelp['SEARCH_HELP_ID'] = this.searchHelpMeta.SEARCH_HELP_ID;
            }

            if (this.searchHelpForm.get('SEARCH_HELP_DESC').dirty) {
              this.changedSearchHelp['SEARCH_HELP_DESC'] = this.searchHelpForm.get('SEARCH_HELP_DESC').value;
            }

            if (this.searchHelpForm.get('BEHAVIOUR').dirty) {
              this.changedSearchHelp['BEHAVIOUR'] = this.searchHelpForm.get('BEHAVIOUR').value;
            }

            if (this.searchHelpForm.get('MULTI').dirty) {
              this.changedSearchHelp['MULTI'] = this.searchHelpForm.get('MULTI').value;
            }

            if (this.searchHelpForm.get('FUZZY_SEARCH').dirty) {
              this.changedSearchHelp['FUZZY_SEARCH'] = this.searchHelpForm.get('FUZZY_SEARCH').value;
            }

            if (this.searchHelpForm.get('ENTITY_ID').dirty) {
              this.changedSearchHelp['ENTITY_ID'] = this.searchHelpForm.get('ENTITY_ID').value;
            }

            if (this.searchHelpForm.get('RELATION_ID').dirty) {
              this.changedSearchHelp['RELATION_ID'] = this.searchHelpForm.get('RELATION_ID').value;
            }

            if (this.searchHelpForm.get('FIELDS').dirty) {
              this.changedSearchHelp['FIELDS'] = [];
              this.searchHelpForm.get('FIELDS').value.forEach(function (field) {
                if (field.FIELD_NAME) {
                  _this27.changedSearchHelp['FIELDS'].push(field);
                }
              });
            }

            this.entityService.saveSearchHelp(this.changedSearchHelp).subscribe(function (data) {
              return _this27._postActivityAfterSavingSearchHelp(data);
            });
          }
        }, {
          key: "_postActivityAfterSavingSearchHelp",
          value: function _postActivityAfterSavingSearchHelp(data) {
            var _this28 = this;

            this.changedSearchHelp = {};

            if (data['SEARCH_HELP_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/search-help/' + data['SEARCH_HELP_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'SEARCH_HELP_SAVED', 'S', data['SEARCH_HELP_ID'])
                  }
                });
              } else {
                this._switch2DisplayMode();

                this.searchHelpMeta = data;

                this._generateSearchHelpForm();

                this.searchHelpFieldsFormArray.controls.forEach(function (field) {
                  return _this28._getAttributesOfRelation(field, false);
                });
                this.messageService.reportMessage('MODEL', 'SEARCH_HELP_SAVED', 'S', data['SEARCH_HELP_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this28.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }, {
          key: "searchHelpFieldsFormArray",
          get: function get() {
            return this.searchHelpForm.get('FIELDS');
          }
        }]);

        return SearchHelpDetailComponent;
      }();

      SearchHelpDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_6__["UniqueSearchHelpValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }];
      };

      SearchHelpDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      SearchHelpDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-help-detail',
        template: _raw_loader_search_help_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_help_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_6__["UniqueSearchHelpValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]])], SearchHelpDetailComponent);
      /***/
    },

    /***/
    "NoKr":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/search-help/search-help-detail/search-help-detail.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NoKr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"searchHelpMeta\" [formGroup]=\"searchHelpForm\">\n  <div class=\"form-group\">\n    <label for=\"searchHelp\" class=\"col-form-label form-control-sm\">Search Help:\n      <span [class.ng-invalid]=\"searchHelpForm.get('SEARCH_HELP_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{searchHelpForm.get('SEARCH_HELP_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"searchHelp\" [readonly]=\"readonly || !isNewMode\"\n           (change)=\"onChangeSearchHelpID()\" name=\"searchHelp\" formControlName=\"SEARCH_HELP_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"searchHelp-desc\" class=\"col-form-label form-control-sm\">Search Help Description:</label>\n    <textarea class=\"form-control\" id=\"searchHelp-desc\" name=\"searchHelp-desc\" rows=\"2\"\n              formControlName=\"SEARCH_HELP_DESC\" [readonly]=\"readonly\" (change)=\"onChangeSearchHelpDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Search Help Definition</div>\n    <div class=\"card-body\">\n      <div class=\"card mb-2\">\n        <div class=\"ml-4 mt-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"ENTITY_ID\">Entity and Relation:\n            <span [class.ng-invalid]=\"searchHelpForm.get('ENTITY_ID').invalid\" class=\"dk-invalid-feedback\">\n                  {{searchHelpForm.get('ENTITY_ID').errors?.message}}\n            </span>\n          </label>\n        </div>\n        <div class=\"card-body row\">\n          <div class=\"input-group col-lg-4 ml-1\">\n            <input type=\"text\" formControlName=\"ENTITY_ID\" id=\"ENTITY_ID\" name=\"ENTITY_ID\" placeholder=\"Entity Type\"\n                   class=\"form-control form-control-sm\" [readonly]=\"readonly\" (change)=\"onChangeEntityID(searchHelpForm)\"\n                   (dblclick)=\"onGoToEntity(searchHelpForm.get('ENTITY_ID').value)\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchEntity\"\n                      (click)=\"onEntitySearchHelp(searchHelpForm)\">\n                <span class=\"fas fa-search\"></span>\n              </button>\n            </div>\n          </div>\n          <select formControlName=\"RELATION_ID\" class=\"form-control form-control-sm col-lg-4 ml-2 mr-3\"\n                  (change)=\"onChangeRelationID(searchHelpForm)\">\n            <option *ngFor=\"let relation of relationsOfEntity\" [value]=\"relation\">{{relation}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"card mb-2\">\n        <div class=\"card-body row\">\n          <div class=\"form-group row col-lg-5 mr-2\">\n            <label class=\"col-form-label col-form-label-sm col-4 text-right\" for=\"behaviour\">Behaviour:</label>\n            <select formControlName=\"BEHAVIOUR\" class=\"form-control form-control-sm col-8\" id=\"behaviour\">\n              <option *ngFor=\"let opt of behaviours\" [value]=\"opt.key\">{{opt.value}}</option>\n            </select>\n          </div>\n          <div class=\"form-check col-lg-3 ml-4\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"MULTI\" id=\"Multiple\">\n            <label class=\"form-check-label\" for=\"Multiple\">Multiple Values</label>\n          </div>\n<!--          <div class=\"form-check col-lg-3 ml-4\">-->\n<!--            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"FUZZY_SEARCH\" id=\"fuzzySearch\">-->\n<!--            <label class=\"form-check-label\" for=\"fuzzySearch\">Fuzzy Search</label>-->\n<!--          </div>-->\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Search Help Fields</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered dk-table\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Relation</th>\n          <th scope=\"col\">Field Name</th>\n          <th scope=\"col\">Field Description</th>\n          <th scope=\"col\" title=\"Import the value to the filter\">I</th>\n          <th scope=\"col\" title=\"Export the value when selected\">E</th>\n          <th scope=\"col\">Alias</th>\n          <th scope=\"col\" title=\"Position in the list\">L.P.</th>\n          <th scope=\"col\" title=\"Position in the filter\">F.P.</th>\n          <th scope=\"col\" title=\"Display on in the filter\">Disp</th>\n          <th scope=\"col\" title=\"Default value in the filter\">Default</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"FIELDS\">\n        <tr *ngFor=\"let fieldForm of searchHelpFieldsFormArray.controls; let i = index\">\n          <td [formGroup]=\"fieldForm\" class=\"dk-selection\">\n            <div class=\"input-group\">\n              <select formControlName=\"RELATION_ID\" class=\"form-control form-control-sm\"\n                      (change)=\"onChangeRelationID(fieldForm)\">\n                <option *ngFor=\"let relation of relationsOfEntity\" [value]=\"relation\">{{relation}}</option>\n              </select>\n            </div>\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-selection\">\n            <div class=\"input-group\">\n              <select formControlName=\"FIELD_NAME\" class=\"form-control form-control-sm\"\n                      (change)=\"onChangeField(fieldForm)\">\n                <option *ngFor=\"let attribute of relationAttributesMap[fieldForm.get('RELATION_ID').value]\"\n                        [value]=\"attribute['ATTR_NAME']\">{{attribute['ATTR_NAME']}}</option>\n              </select>\n            </div>\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-description\">\n            <input  type=\"text\" formControlName=\"FIELD_DESC\" class=\"form-control\" maxlength=\"100\" readonly>\n          </td>\n          <td [formGroup]=\"fieldForm\">\n            <input type=\"checkbox\" formControlName=\"IMPORT\">\n          </td>\n          <td [formGroup]=\"fieldForm\">\n            <input type=\"checkbox\" formControlName=\"EXPORT\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-string\">\n            <input  type=\"text\" formControlName=\"IE_FIELD_NAME\" class=\"form-control form-control-sm\"  [readonly]=\"readonly\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-number\">\n            <input type=\"number\" min=\"0\" formControlName=\"LIST_POSITION\" class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-number\">\n            <input type=\"number\" min=\"0\" formControlName=\"FILTER_POSITION\" class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          </td>\n          <td [formGroup]=\"fieldForm\">\n            <input type=\"checkbox\" formControlName=\"FILTER_DISP_ONLY\">\n          </td>\n          <td [formGroup]=\"fieldForm\" class=\"dk-string\">\n            <input  type=\"text\" formControlName=\"DEFAULT_VALUE\" class=\"form-control form-control-sm\"  [readonly]=\"readonly\">\n          </td>\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"insertField(i)\" title=\"Insert\">\n              <span class=\"fas fa-plus\"></span>\n            </button>\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteField(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "O0rN":
    /*!**************************************************************!*\
      !*** ./src/app/model/relationship/relationship.component.ts ***!
      \**************************************************************/

    /*! exports provided: RelationshipComponent */

    /***/
    function O0rN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationshipComponent", function () {
        return RelationshipComponent;
      });
      /* harmony import */


      var _raw_loader_relationship_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./relationship.component.html */
      "gzY6");
      /* harmony import */


      var _relationship_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relationship.component.css */
      "Kp7H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var RelationshipComponent = /*#__PURE__*/function () {
        function RelationshipComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, RelationshipComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(RelationshipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (term) {
              return _this29.entityService.listRelationship(term);
            })).subscribe(function (data) {
              _this29.relationshipList = data;
              var relationshipID;

              if (_this29.route.snapshot.firstChild) {
                relationshipID = _this29.route.snapshot.firstChild.paramMap.get('relationshipID');
              }

              if (relationshipID) {
                if (relationshipID === 'new') {
                  _this29._newRelationship();
                } else {
                  _this29.onSelect(_this29.relationshipList.find(function (relationship) {
                    return relationship.RELATIONSHIP_ID === relationshipID;
                  }));
                }
              }
            });
            this.searchRelationship(''); // The initial list

            this.modelService.theSelectedRelationship$.subscribe(function (data) {
              if (_this29.theSelectedRelationship) {
                _this29.theSelectedRelationship.RELATIONSHIP_ID = data['RELATIONSHIP_ID'];
                _this29.theSelectedRelationship.RELATIONSHIP_DESC = data['RELATIONSHIP_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this29.relationshipList[0] && !_this29.relationshipList[0].CREATE_TIME) {
                _this29.relationshipList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var relationshipID = _this29.route.snapshot.firstChild.paramMap.get('relationshipID');

                if (relationshipID) {
                  if (relationshipID === 'new') {
                    _this29.onSelect(_this29.relationshipList[0]);
                  } else {
                    _this29.onSelect(_this29.relationshipList.find(function (relationship) {
                      return relationship.RELATIONSHIP_ID === relationshipID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this29.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(relationship) {
            if (relationship) {
              this.theSelectedRelationship = relationship;
              this.modelService.setSelectedRelationship(relationship);
            }
          }
        }, {
          key: "searchRelationship",
          value: function searchRelationship(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newRelationship",
          value: function newRelationship() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('relationshipID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newRelationship();

              this.router.navigate(['/model/relationship/new']);
            }
          }
        }, {
          key: "_newRelationship",
          value: function _newRelationship() {
            this.theSelectedRelationship = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["RelationshipH"]();
            this.theSelectedRelationship.RELATIONSHIP_ID = 'new';
            this.theSelectedRelationship.RELATIONSHIP_DESC = 'description';
            this.theSelectedRelationship.VERSION_NO = 1;
            this.theSelectedRelationship.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedRelationship.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedRelationship(this.theSelectedRelationship);
            this.relationshipList.splice(0, 0, this.theSelectedRelationship);
          }
        }]);

        return RelationshipComponent;
      }();

      RelationshipComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      RelationshipComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-relationship',
        template: _raw_loader_relationship_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relationship_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], RelationshipComponent);
      /***/
    },

    /***/
    "QKPu":
    /*!*****************************************************************************************!*\
      !*** ./src/app/model/relationship/relationship-detail/relationship-detail.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: RelationshipDetailComponent */

    /***/
    function QKPu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationshipDetailComponent", function () {
        return RelationshipDetailComponent;
      });
      /* harmony import */


      var _raw_loader_relationship_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./relationship-detail.component.html */
      "CFc/");
      /* harmony import */


      var _relationship_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relationship-detail.component.css */
      "2x6Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../attribute-meta/attribute-meta.component */
      "23ty");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../msgStore */
      "uLAD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");

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

      var RelationshipDetailComponent = /*#__PURE__*/function () {
        function RelationshipDetailComponent(route, router, fb, uniqueRelationshipValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, RelationshipDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueRelationshipValidator = uniqueRelationshipValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.changedRelationship = {};
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_10__["msgStore"], 'EN');
        }

        _createClass(RelationshipDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (params) {
              var relationshipID = params.get('relationshipID');

              if (relationshipID === 'new') {
                var relationship = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["RelationshipMeta"]();
                relationship.RELATIONSHIP_ID = 'rs_';
                relationship.RELATIONSHIP_DESC = '';
                relationship.VALID_PERIOD = 0;
                relationship.SINGLETON = false;
                relationship.INVOLVES = [];
                _this30.isNewMode = true;
                _this30.readonly = false;
                _this30.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(relationship), Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])([]));
              } else {
                _this30.readonly = true;
                _this30.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])([_this30.entityService.getRelationship(relationshipID), _this30.entityService.getRelationMeta(relationshipID)]);
              }
            })).subscribe(function (data) {
              if ('msgName' in data[0]) {
                _this30.messageService.clearMessages();

                _this30.relationshipMeta = null;
                _this30.relationshipForm = null;

                _this30.messageService.report(data[0]);
              } else {
                _this30.messageService.clearMessages();

                if (history.state.message) {
                  _this30.messageService.report(history.state.message);
                }

                _this30.relationshipMeta = data[0];
                _this30.attributes = 'msgName' in data[1] ? [] : data[1]['ATTRIBUTES'];

                _this30._generateRelationshipForm();

                if (_this30.readonly) {
                  _this30.relationshipForm.get('TIME_DEPENDENT').disable();

                  _this30.relationshipForm.get('SINGLETON').disable();
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this30.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.roleSearchHelp) {
              this.roleSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelp"]();
              this.roleSearchHelp.OBJECT_NAME = 'Role';

              this.roleSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRole(searchTerm);
                };
              }(this.entityService);

              this.roleSearchHelp.BEHAVIOUR = 'A';
              this.roleSearchHelp.MULTI = false;
              this.roleSearchHelp.FUZZY_SEARCH = true;
              this.roleSearchHelp.FIELDS = [{
                FIELD_NAME: 'ROLE_ID',
                LIST_HEADER_TEXT: 'Role',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ROLE_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.roleSearchHelp.READ_ONLY = this.readonly || this.oldInvolve(control) && control.valid;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRoleID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.roleSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateRelationshipForm",
          value: function _generateRelationshipForm() {
            var _this31 = this;

            if (this.relationshipForm) {
              this.relationshipForm.markAsPristine({
                onlySelf: false
              });
              this.relationshipForm.get('RELATIONSHIP_ID').setValue(this.relationshipMeta.RELATIONSHIP_ID);
              this.relationshipForm.get('RELATIONSHIP_DESC').setValue(this.relationshipMeta.RELATIONSHIP_DESC);
              this.relationshipForm.get('TIME_DEPENDENT').setValue(this.relationshipMeta.VALID_PERIOD > 0);
              this.relationshipForm.get('VALID_PERIOD').setValue(this.relationshipMeta.VALID_PERIOD);
              this.relationshipForm.get('SINGLETON').setValue(this.relationshipMeta.SINGLETON);
              this.relationshipForm.removeControl('ATTRIBUTES');
            } else {
              this.relationshipForm = this.fb.group({
                RELATIONSHIP_ID: [this.relationshipMeta.RELATIONSHIP_ID, {
                  updateOn: 'blur'
                }],
                RELATIONSHIP_DESC: [this.relationshipMeta.RELATIONSHIP_DESC],
                TIME_DEPENDENT: [this.relationshipMeta.VALID_PERIOD > 0],
                VALID_PERIOD: [this.relationshipMeta.VALID_PERIOD, this._validateValidPeriod],
                SINGLETON: [this.relationshipMeta.SINGLETON]
              });
            } // Compose Involves


            var formArray = [];
            this.relationshipMeta.INVOLVES.forEach(function (involve) {
              formArray.push(_this31.fb.group({
                ROLE_ID: [involve.ROLE_ID],
                ROLE_DESC: [involve.ROLE_DESC],
                CARDINALITY: [{
                  value: involve.CARDINALITY,
                  disabled: _this31.readonly
                }],
                DIRECTION: [involve.DIRECTION]
              }));
            });

            if (this.isNewMode) {
              this.relationshipForm.get('RELATIONSHIP_ID').setValidators(this._validateRelationshipID);
              this.relationshipForm.get('RELATIONSHIP_ID').setAsyncValidators(this.uniqueRelationshipValidator.validate.bind(this.uniqueRelationshipValidator));
              this.relationshipForm.get('TIME_DEPENDENT').enable();
              this.relationshipForm.get('VALID_PERIOD').disable(); // TIME_DEPENDENT by default is not checked

              formArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
              }));
            } else {
              this.relationshipForm.get('RELATIONSHIP_ID').clearValidators();
              this.relationshipForm.get('RELATIONSHIP_ID').clearAsyncValidators();
              this.relationshipForm.get('RELATIONSHIP_ID').updateValueAndValidity();
            }

            this.relationshipForm.setControl('INVOLVES', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](formArray));
          }
        }, {
          key: "_validateRelationshipID",
          value: function _validateRelationshipID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Relationship ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().toLowerCase().substr(0, 3) !== 'rs_') {
              return {
                message: 'Relationship ID must be started with "rs_"!'
              };
            }

            if (c.value.toString().length < 4) {
              return {
                message: 'Relationship ID must have length larger than 3!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Relationship ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateValidPeriod",
          value: function _validateValidPeriod(c) {
            if (c.parent && c.parent.value.TIME_DEPENDENT && c.value <= 0) {
              return {
                message: 'must be larger than 0'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this32 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Relationship?').subscribe(function (confirm) {
                if (confirm) {
                  _this32._switch2DisplayMode();

                  _this32.relationshipMeta = null;

                  _this32.modelService.sendDialogAnswer('OK');
                } else {
                  _this32.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.relationshipForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this32._generateRelationshipForm();

                    _this32.relationshipForm.reset(_this32.relationshipForm.value);

                    _this32._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.relationshipForm.get('TIME_DEPENDENT').enable();

              if (!this.relationshipForm.get('TIME_DEPENDENT').value) {
                this.relationshipForm.get('VALID_PERIOD').disable();
              }

              this.relationshipForm.get('SINGLETON').enable();
              this.attrComponent.switchEditDisplay(this.readonly);
              this.involveFormArray.controls.forEach(function (involveFormGroup) {
                involveFormGroup.get('CARDINALITY').enable();
              });
              this.involveFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
              }));
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.relationshipForm.get('TIME_DEPENDENT').disable();
            this.relationshipForm.get('SINGLETON').disable();
            this.attrComponent.switchEditDisplay(this.readonly);
            var lastIndex = this.involveFormArray.length - 1;

            while (lastIndex >= 0 && this.involveFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
              this.involveFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.involveFormArray.controls.forEach(function (involveFormGroup) {
              involveFormGroup.get('CARDINALITY').disable();
            });
          }
        }, {
          key: "onChangeRelationshipID",
          value: function onChangeRelationshipID() {
            this.modelService.updateRelationshipID(this.relationshipForm.get('RELATIONSHIP_ID').value);
          }
        }, {
          key: "onChangeTimeDependency",
          value: function onChangeTimeDependency() {
            var timeDependent = this.relationshipForm.get('TIME_DEPENDENT').value;
            var validPeriodCtrl = this.relationshipForm.get('VALID_PERIOD');
            var relationID = this.relationshipForm.get('RELATIONSHIP_ID').value;
            var attrFormArray = this.relationshipForm.get('ATTRIBUTES');

            if (timeDependent) {
              validPeriodCtrl.setValue(31536000); // 3600 * 24 * 365

              validPeriodCtrl.markAsDirty();
              validPeriodCtrl.enable();
              var validFromFormGroup = this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [relationID],
                ATTR_NAME: ['VALID_FROM'],
                ATTR_DESC: ['Valid from'],
                DATA_ELEMENT: [''],
                DATA_TYPE: [{
                  value: 8,
                  disabled: true
                }],
                DATA_LENGTH: [null],
                DECIMAL: [null],
                ORDER: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
              });
              validFromFormGroup.markAsDirty();
              attrFormArray.insert(attrFormArray.length - 1, validFromFormGroup);
              var validToFormGroup = this.fb.group({
                ATTR_GUID: [''],
                RELATION_ID: [relationID],
                ATTR_NAME: ['VALID_TO'],
                ATTR_DESC: ['Valid to'],
                DATA_ELEMENT: [''],
                DATA_TYPE: [{
                  value: 8,
                  disabled: true
                }],
                DATA_LENGTH: [null],
                DECIMAL: [null],
                ORDER: [null],
                PRIMARY_KEY: [false],
                AUTO_INCREMENT: [false]
              });
              validToFormGroup.markAsDirty();
              attrFormArray.insert(attrFormArray.length - 1, validToFormGroup);
            } else {
              validPeriodCtrl.setValue(0);
              validPeriodCtrl.disable();
              validPeriodCtrl.markAsDirty();
              var attributeValidFromIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === 'VALID_FROM';
              });

              if (attributeValidFromIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeValidFromIndex);
              }

              var attributeValidToIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === 'VALID_TO';
              });

              if (attributeValidToIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeValidToIndex);
              }
            }
          }
        }, {
          key: "onChangeRelationshipDesc",
          value: function onChangeRelationshipDesc() {
            this.modelService.updateRelationshipDesc(this.relationshipForm.get('RELATIONSHIP_DESC').value);
          }
        }, {
          key: "deleteInvolve",
          value: function deleteInvolve(index) {
            if (index !== this.involveFormArray.length - 1) {
              var currentRoleID = this.involveFormArray.at(index).get('ROLE_ID').value;
              this.involveFormArray.removeAt(index);
              this.involveFormArray.markAsDirty();
              var attrFormArray = this.relationshipForm.get('ATTRIBUTES');
              var attributeInstanceGUIDIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === currentRoleID + '_INSTANCE_GUID';
              });

              if (attributeInstanceGUIDIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeInstanceGUIDIndex);
              }

              var attributeEntityIDIndex = attrFormArray.controls.findIndex(function (attrCtrl) {
                return attrCtrl.get('ATTR_NAME').value === currentRoleID + '_ENTITY_ID';
              });

              if (attributeEntityIDIndex >= 0) {
                this.attrComponent.deleteAttribute(attributeEntityIDIndex);
              }
            }
          }
        }, {
          key: "onChangeRoleID",
          value: function onChangeRoleID(index) {
            var _this33 = this;

            var currentInvolveFormGroup = this.involveFormArray.controls[index];

            if (this.involveFormArray.controls.findIndex(function (involveCtrl, i) {
              return i !== index && involveCtrl.get('ROLE_ID').value === currentInvolveFormGroup.get('ROLE_ID').value;
            }) !== -1) {
              currentInvolveFormGroup.get('ROLE_ID').setErrors({
                message: 'Duplicate roles'
              });
              return;
            }

            if (index === this.involveFormArray.length - 1 && currentInvolveFormGroup.value.ROLE_ID.trim() !== '') {
              // Only work for the last New line
              this.involveFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CARDINALITY: ['[1..1]'],
                DIRECTION: ['']
              }));
            }

            this.entityService.getRoleDesc(currentInvolveFormGroup.value.ROLE_ID).subscribe(function (data) {
              if (data['msgCat']) {
                currentInvolveFormGroup.get('ROLE_ID').setErrors({
                  message: data['msgShortText']
                });
              } else {
                currentInvolveFormGroup.get('ROLE_DESC').setValue(data);

                var attrFormArray = _this33.relationshipForm.get('ATTRIBUTES');

                var relationID = _this33.relationshipForm.get('RELATIONSHIP_ID').value;

                var instanceGUIDFormGroup = _this33.fb.group({
                  ATTR_GUID: [''],
                  RELATION_ID: [relationID],
                  ATTR_NAME: [currentInvolveFormGroup.value.ROLE_ID + '_INSTANCE_GUID'],
                  ATTR_DESC: ['Entity Instance GUID of role ' + currentInvolveFormGroup.value.ROLE_ID],
                  DATA_ELEMENT: [null],
                  DATA_TYPE: [{
                    value: 1,
                    disabled: true
                  }],
                  DATA_LENGTH: [32],
                  DECIMAL: [null],
                  ORDER: [null],
                  PRIMARY_KEY: [false],
                  AUTO_INCREMENT: [false]
                });

                instanceGUIDFormGroup.markAsDirty();
                attrFormArray.insert(attrFormArray.length - 1, instanceGUIDFormGroup);

                var entityIDFormGroup = _this33.fb.group({
                  ATTR_GUID: [''],
                  RELATION_ID: [relationID],
                  ATTR_NAME: [currentInvolveFormGroup.value.ROLE_ID + '_ENTITY_ID'],
                  ATTR_DESC: ['Entity ID of role ' + currentInvolveFormGroup.value.ROLE_ID],
                  DATA_ELEMENT: [null],
                  DATA_TYPE: [{
                    value: 1,
                    disabled: true
                  }],
                  DATA_LENGTH: [32],
                  DECIMAL: [null],
                  ORDER: [null],
                  PRIMARY_KEY: [false],
                  AUTO_INCREMENT: [false]
                });

                entityIDFormGroup.markAsDirty();
                attrFormArray.insert(attrFormArray.length - 1, entityIDFormGroup);
                attrFormArray.markAsDirty();
              }
            });
          }
        }, {
          key: "oldInvolve",
          value: function oldInvolve(formGroup) {
            return this.relationshipMeta.INVOLVES.findIndex(function (role) {
              return role.ROLE_ID === formGroup.get('ROLE_ID').value;
            }) !== -1;
          }
        }, {
          key: "onGoToRole",
          value: function onGoToRole(roleID) {
            this.router.navigate(['/model/role', roleID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this34 = this;

            if (this.isNewMode || !this.bypassProtection && this.relationshipForm && this.relationshipForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this34.modelService.sendDialogAnswer('OK');
                } else {
                  _this34.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this35 = this;

            if (!this.relationshipForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.relationshipForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedRelationship['action'] = 'add';
              this.changedRelationship['RELATIONSHIP_ID'] = this.relationshipForm.controls['RELATIONSHIP_ID'].value;
            } else {
              this.changedRelationship['action'] = 'update';
              this.changedRelationship['RELATIONSHIP_ID'] = this.relationshipMeta.RELATIONSHIP_ID;
            }

            if (this.relationshipForm.controls['RELATIONSHIP_DESC'].dirty) {
              this.changedRelationship['RELATIONSHIP_DESC'] = this.relationshipForm.controls['RELATIONSHIP_DESC'].value;
            }

            if (this.isNewMode || this.relationshipForm.controls['VALID_PERIOD'].dirty) {
              this.changedRelationship['VALID_PERIOD'] = this.relationshipForm.controls['VALID_PERIOD'].value;
            }

            if (this.isNewMode || this.relationshipForm.controls['SINGLETON'].dirty) {
              this.changedRelationship['SINGLETON'] = this.relationshipForm.controls['SINGLETON'].value;
            }

            this.changedRelationship['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();

            if (this._processChangedInvolves()) {
              // console.log(this.changedRelationship);
              this.entityService.saveRelationship(this.changedRelationship).subscribe(function (data) {
                return _this35._postActivityAfterSavingRelationship(data);
              });
            }
          }
        }, {
          key: "_processChangedInvolves",
          value: function _processChangedInvolves() {
            var _this36 = this;

            if (this.involveFormArray.length <= 2) {
              // An empty line is included
              this.messageService.reportMessage('MODEL', 'RELATIONSHIP_LACK_INVOLVED_ROLES', 'E');
              return false;
            }

            var changedInvolves = [];

            if (this.involveFormArray.dirty) {
              this.changedRelationship['INVOLVES'] = changedInvolves;
              this.involveFormArray.controls.forEach(function (involveControl) {
                if (involveControl.get('ROLE_ID').value.trim() === '') {
                  return;
                }

                var action;

                var index = _this36.relationshipMeta.INVOLVES.findIndex(function (involve) {
                  return involveControl.get('ROLE_ID').value === involve.ROLE_ID;
                });

                if (index === -1) {
                  // New Add Case
                  action = 'add';
                } else {
                  // New Update Case
                  if (involveControl.dirty) {
                    action = 'update';
                  }
                }

                if (action) {
                  changedInvolves.push({
                    action: action,
                    ROLE_ID: involveControl.get('ROLE_ID').value,
                    CARDINALITY: involveControl.get('CARDINALITY').value,
                    DIRECTION: involveControl.get('DIRECTION').value
                  });
                }
              }); // Deletion Case

              this.relationshipMeta.INVOLVES.forEach(function (involve) {
                var index = _this36.involveFormArray.controls.findIndex(function (roleControl) {
                  return roleControl.get('ROLE_ID').value === involve.ROLE_ID;
                });

                if (index === -1) {
                  // The attribute must be deleted
                  var deletedRole = {
                    action: 'delete',
                    ROLE_ID: involve.ROLE_ID
                  };
                  changedInvolves.push(deletedRole);
                }
              });
            }

            return true;
          }
        }, {
          key: "_postActivityAfterSavingRelationship",
          value: function _postActivityAfterSavingRelationship(data) {
            var _this37 = this;

            this.changedRelationship = {};

            if (data[0] && data[0]['RELATIONSHIP_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/relationship/' + data[0]['RELATIONSHIP_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'RELATIONSHIP_SAVED', 'S', data[0]['RELATIONSHIP_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.relationshipForm.get('TIME_DEPENDENT').disable();
                this.relationshipForm.get('SINGLETON').disable();
                this.relationshipMeta = data[0];
                this.attributes = data[1].ATTRIBUTES;

                this._generateRelationshipForm();

                this.messageService.reportMessage('MODEL', 'RELATIONSHIP_SAVED', 'S', this.relationshipMeta.RELATIONSHIP_ID);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this37.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }, {
          key: "involveFormArray",
          get: function get() {
            return this.relationshipForm.get('INVOLVES');
          }
        }]);

        return RelationshipDetailComponent;
      }();

      RelationshipDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_13__["UniqueRelationshipValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }];
      };

      RelationshipDetailComponent.propDecorators = {
        attrComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_5__["AttributeMetaComponent"], {
            "static": false
          }]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      RelationshipDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-relationship-detail',
        template: _raw_loader_relationship_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relationship_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_13__["UniqueRelationshipValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_7__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_8__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]])], RelationshipDetailComponent);
      /***/
    },

    /***/
    "R7E1":
    /*!*****************************************************************************************!*\
      !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: DataElementDetailComponent */

    /***/
    function R7E1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataElementDetailComponent", function () {
        return DataElementDetailComponent;
      });
      /* harmony import */


      var _raw_loader_data_element_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./data-element-detail.component.html */
      "lcoD");
      /* harmony import */


      var _data_element_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-element-detail.component.css */
      "k5RL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../msgStore */
      "uLAD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DataElementDetailComponent = /*#__PURE__*/function () {
        function DataElementDetailComponent(route, router, fb, uniqueDataElementValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, DataElementDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueDataElementValidator = uniqueDataElementValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.dataTypes = [];
          this.changedDataElement = {};
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.searchHelpExportField = [];
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_9__["msgStore"], 'EN');
          this.dataTypes = this.modelService.dataTypes;
        }

        _createClass(DataElementDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (params) {
              var elementID = params.get('elementID');

              if (elementID === 'new') {
                var dataElement = new jor_angular__WEBPACK_IMPORTED_MODULE_12__["DataElementMeta"]();
                dataElement.ELEMENT_ID = '';
                dataElement.ELEMENT_DESC = '';
                dataElement.DATA_TYPE = 1;
                dataElement.DATA_LENGTH = 10;
                _this38.isNewMode = true;
                _this38.readonly = false;
                _this38.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["of"])(dataElement);
              } else {
                _this38.readonly = true;
                _this38.isNewMode = false;
                return _this38.entityService.getDataElement(elementID);
              }
            })).subscribe(function (data) {
              if ('msgName' in data) {
                _this38.messageService.clearMessages();

                _this38.dataElementMeta = null;
                _this38.dataElementForm = null;

                _this38.messageService.report(data);
              } else {
                _this38.messageService.clearMessages();

                if (history.state.message) {
                  _this38.messageService.report(history.state.message);
                }

                _this38.dataElementMeta = data;

                _this38._generateDataElementForm();

                _this38._getSearchHelpMeta(_this38.dataElementForm, false);
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this38.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onDataDomainSearchHelp",
          value: function onDataDomainSearchHelp(control) {
            if (!this.dataDomainSearchHelp) {
              this.dataDomainSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_12__["SearchHelp"]();
              this.dataDomainSearchHelp.OBJECT_NAME = 'Data Domain';

              this.dataDomainSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listDataDomain(searchTerm);
                };
              }(this.entityService);

              this.dataDomainSearchHelp.BEHAVIOUR = 'A';
              this.dataDomainSearchHelp.MULTI = false;
              this.dataDomainSearchHelp.FUZZY_SEARCH = true;
              this.dataDomainSearchHelp.FIELDS = [{
                FIELD_NAME: 'DOMAIN_ID',
                LIST_HEADER_TEXT: 'Domain',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'DOMAIN_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.dataDomainSearchHelp.READ_ONLY = this.readonly || !this.dataElementForm.get('USE_DOMAIN').value;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeDataDomain(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.dataDomainSearchHelp, control, afterExportFn);
          }
        }, {
          key: "onSearchHelpSearchHelp",
          value: function onSearchHelpSearchHelp(control) {
            if (!this.searchHelpSearchHelp) {
              this.searchHelpSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_12__["SearchHelp"]();
              this.searchHelpSearchHelp.OBJECT_NAME = 'Search Help';

              this.searchHelpSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listSearchHelp(searchTerm);
                };
              }(this.entityService);

              this.searchHelpSearchHelp.BEHAVIOUR = 'A';
              this.searchHelpSearchHelp.MULTI = false;
              this.searchHelpSearchHelp.FUZZY_SEARCH = true;
              this.searchHelpSearchHelp.FIELDS = [{
                FIELD_NAME: 'SEARCH_HELP_ID',
                LIST_HEADER_TEXT: 'Search Help',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'SEARCH_HELP_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.searchHelpSearchHelp.READ_ONLY = this.readonly;
            }

            var afterExportFn = function (context) {
              return function () {
                return context.onChangeSearchHelp(control);
              };
            }(this).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.searchHelpSearchHelp, control, afterExportFn);
          }
        }, {
          key: "onChangeSearchHelp",
          value: function onChangeSearchHelp(formGroup) {
            this._getSearchHelpMeta(formGroup, true);
          }
        }, {
          key: "_getSearchHelpMeta",
          value: function _getSearchHelpMeta(formGroup, setDefault) {
            var _this39 = this;

            var searchHelpCtrl = formGroup.get('SEARCH_HELP_ID');

            if (!searchHelpCtrl.value) {
              if (!this.readonly) {
                formGroup.get('SEARCH_HELP_EXPORT_FIELD').setValue('');
                formGroup.get('SEARCH_HELP_EXPORT_FIELD').markAsDirty();
              }

              return;
            }

            this.entityService.getSearchHelp(searchHelpCtrl.value).subscribe(function (data) {
              if (data['msgCat']) {
                searchHelpCtrl.setErrors({
                  message: data['msgShortText']
                });

                if (setDefault) {
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').setValue('');
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').markAsDirty();
                }
              } else {
                _this39.searchHelpExportField = [];
                var searchHelpFields = data['FIELDS'];
                searchHelpFields.forEach(function (field) {
                  if (field.EXPORT) {
                    _this39.searchHelpExportField.push(field.IE_FIELD_NAME || field.FIELD_NAME);
                  }
                });

                if (setDefault) {
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').setValue(_this39.searchHelpExportField[0]);
                  formGroup.get('SEARCH_HELP_EXPORT_FIELD').markAsDirty();
                }
              }
            });
          }
        }, {
          key: "_generateDataElementForm",
          value: function _generateDataElementForm() {
            if (this.dataElementForm) {
              this.dataElementForm.markAsPristine({
                onlySelf: false
              });
              this.dataElementForm.get('ELEMENT_ID').setValue(this.dataElementMeta.ELEMENT_ID);
              this.dataElementForm.get('ELEMENT_DESC').setValue(this.dataElementMeta.ELEMENT_DESC);
              this.dataElementForm.get('LABEL_TEXT').setValue(this.dataElementMeta.LABEL_TEXT);
              this.dataElementForm.get('LIST_HEADER_TEXT').setValue(this.dataElementMeta.LIST_HEADER_TEXT);
              this.dataElementForm.get('DOMAIN_ID').setValue(this.dataElementMeta.DOMAIN_ID);
              this.dataElementForm.get('DATA_TYPE').setValue(this.dataElementMeta.DATA_TYPE);
              this.dataElementForm.get('DATA_LENGTH').setValue(this.dataElementMeta.DATA_LENGTH);
              this.dataElementForm.get('DECIMAL').setValue(this.dataElementMeta.DECIMAL);
              this.dataElementForm.get('SEARCH_HELP_ID').setValue(this.dataElementMeta.SEARCH_HELP_ID);
              this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').setValue(this.dataElementMeta.SEARCH_HELP_EXPORT_FIELD);
              this.dataElementForm.get('PARAMETER_ID').setValue(this.dataElementMeta.PARAMETER_ID);

              if (this.dataElementMeta.DOMAIN_ID) {
                this.dataElementForm.get('USE_DOMAIN').setValue(1);
                this.dataElementForm.get('DATA_TYPE').disable();
              } else {
                this.dataElementForm.get('USE_DOMAIN').setValue(0);
                this.dataElementForm.get('DATA_TYPE').enable();
              }

              if (this.readonly) {
                this.dataElementForm.get('USE_DOMAIN').disable();
                this.dataElementForm.get('DOMAIN_ID').disable();
                this.dataElementForm.get('DATA_TYPE').disable();
                this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').disable();
              } else {
                this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').enable();
              }
            } else {
              this.dataElementForm = this.fb.group({
                ELEMENT_ID: [this.dataElementMeta.ELEMENT_ID, {
                  updateOn: 'blur'
                }],
                ELEMENT_DESC: [this.dataElementMeta.ELEMENT_DESC],
                LABEL_TEXT: [this.dataElementMeta.LABEL_TEXT],
                LIST_HEADER_TEXT: [this.dataElementMeta.LIST_HEADER_TEXT],
                DOMAIN_ID: [this.dataElementMeta.DOMAIN_ID],
                DATA_TYPE: [{
                  value: this.dataElementMeta.DATA_TYPE,
                  disabled: this.readonly
                }],
                DATA_LENGTH: [this.dataElementMeta.DATA_LENGTH, [this._validateDataLength]],
                DECIMAL: [this.dataElementMeta.DECIMAL, [this._validateDecimal]],
                SEARCH_HELP_ID: [this.dataElementMeta.SEARCH_HELP_ID],
                SEARCH_HELP_EXPORT_FIELD: [{
                  value: this.dataElementMeta.SEARCH_HELP_EXPORT_FIELD,
                  disabled: this.readonly
                }],
                PARAMETER_ID: [this.dataElementMeta.PARAMETER_ID],
                USE_DOMAIN: [{
                  value: this.dataElementMeta.DOMAIN_ID ? 1 : 0,
                  disabled: this.readonly
                }]
              });
            }

            this._setNewModeState();

            if (this.dataElementForm.get('USE_DOMAIN').value) {
              this.dataElementForm.get('DOMAIN_ID').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
              this.onChangeDataDomain(this.dataElementForm);
            } else {
              this.dataElementForm.get('DOMAIN_ID').setErrors(null);
              this.dataElementForm.get('DOMAIN_ID').clearValidators();
            }

            this._updateLengthAndDecimal(this.dataElementForm);
          }
        }, {
          key: "_setNewModeState",
          value: function _setNewModeState() {
            if (this.isNewMode) {
              this.dataElementForm.get('ELEMENT_ID').setValidators(this._validateDataElementID);
              this.dataElementForm.get('ELEMENT_ID').setAsyncValidators(this.uniqueDataElementValidator.validate.bind(this.uniqueDataElementValidator));
              this.dataElementForm.get('USE_DOMAIN').enable();
              this.dataElementForm.get('DATA_TYPE').enable();
              this.dataElementForm.get('DATA_TYPE').markAsDirty(); // Default value mark as dirty

              this.dataElementForm.get('DATA_LENGTH').markAsDirty(); // Default value mark as dirty
            } else {
              this.dataElementForm.get('ELEMENT_ID').clearValidators();
              this.dataElementForm.get('ELEMENT_ID').clearAsyncValidators();
              this.dataElementForm.get('ELEMENT_ID').updateValueAndValidity();
            }
          }
        }, {
          key: "_validateDataElementID",
          value: function _validateDataElementID(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Data Element ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().length > 32) {
              return {
                message: 'Data Element ID must have length less than 32!'
              };
            }

            return null;
          }
        }, {
          key: "_validateDataLength",
          value: function _validateDataLength(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a Length'
              };
            }

            return null;
          }
        }, {
          key: "_validateDecimal",
          value: function _validateDecimal(c) {
            if (c.enabled && !c.value) {
              return {
                message: 'Please give a decimal place'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this40 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Data Element?').subscribe(function (confirm) {
                if (confirm) {
                  _this40._switch2DisplayMode();

                  _this40.dataElementMeta = null;

                  _this40.modelService.sendDialogAnswer('OK');
                } else {
                  _this40.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.dataElementForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this40._generateDataElementForm();

                    _this40.dataElementForm.reset(_this40.dataElementForm.value);

                    _this40._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this._switch2EditMode();
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.dataElementForm.get('USE_DOMAIN').disable();
            this.dataElementForm.get('DATA_TYPE').disable();
            this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').disable();
          }
        }, {
          key: "_switch2EditMode",
          value: function _switch2EditMode() {
            this.readonly = false;
            this.dataElementForm.get('USE_DOMAIN').enable();
            this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').enable();

            this._setUseDomain(this.dataElementForm);
          }
        }, {
          key: "onChangeDataElementID",
          value: function onChangeDataElementID() {
            this.modelService.updateDataElementID(this.dataElementForm.get('ELEMENT_ID').value);
          }
        }, {
          key: "onChangeDataElementDesc",
          value: function onChangeDataElementDesc() {
            this.modelService.updateDataElementDesc(this.dataElementForm.get('ELEMENT_DESC').value);
          }
        }, {
          key: "onChangeUseDomain",
          value: function onChangeUseDomain(formGroup) {
            this._setUseDomain(formGroup, true);
          }
        }, {
          key: "onChangeDataDomain",
          value: function onChangeDataDomain(formGroup) {
            var dataDomainCtrl = formGroup.get('DOMAIN_ID');
            this.entityService.getDataDomain(dataDomainCtrl.value).subscribe(function (data) {
              if (data['msgCat']) {
                dataDomainCtrl.setErrors({
                  message: data['msgShortText']
                });
              } else {
                formGroup.get('DATA_TYPE').setValue(data['DATA_TYPE']);
                formGroup.get('DATA_LENGTH').setValue(data['DATA_LENGTH']);
                formGroup.get('DECIMAL').setValue(data['DECIMAL']);
              }
            });
          }
        }, {
          key: "_setUseDomain",
          value: function _setUseDomain(formGroup) {
            var markAsDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (formGroup.get('USE_DOMAIN').value) {
              formGroup.get('DOMAIN_ID').enable();
              formGroup.get('DOMAIN_ID').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);

              this._invalidField(formGroup.get('DATA_TYPE'), markAsDirty);

              this._invalidField(formGroup.get('DATA_LENGTH'), markAsDirty);

              this._invalidField(formGroup.get('DECIMAL'), markAsDirty);
            } else {
              this._invalidField(formGroup.get('DOMAIN_ID'), markAsDirty);

              formGroup.get('DATA_TYPE').enable();
              formGroup.get('DATA_TYPE').markAsDirty();
              formGroup.get('DATA_LENGTH').enable();
              formGroup.get('DATA_LENGTH').markAsDirty();
              formGroup.get('DECIMAL').enable();
              formGroup.get('DECIMAL').markAsDirty();

              if (!formGroup.get('DATA_TYPE').value) {
                formGroup.get('DATA_TYPE').setValue(1);

                if (!formGroup.get('DATA_LENGTH').value) {
                  formGroup.get('DATA_LENGTH').setValue(10);
                }
              }

              this._updateLengthAndDecimal(formGroup);
            }
          }
        }, {
          key: "_invalidField",
          value: function _invalidField(fieldCtrl) {
            var markAsDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            fieldCtrl.clearValidators();
            fieldCtrl.clearAsyncValidators();
            fieldCtrl.disable();

            if (markAsDirty) {
              fieldCtrl.setValue(null);
              fieldCtrl.markAsDirty();
            }
          }
        }, {
          key: "onChangeDataType",
          value: function onChangeDataType(formGroup) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                formGroup.get('DATA_LENGTH').setValue(10);
                formGroup.get('DECIMAL').setValue(null);
                break;

              case 4:
                // decimal
                formGroup.get('DATA_LENGTH').setValue(23);
                formGroup.get('DECIMAL').setValue(2);
                break;

              default:
                formGroup.get('DATA_LENGTH').setValue(null);
                formGroup.get('DECIMAL').setValue(null);
            }

            formGroup.get('DATA_LENGTH').markAsDirty();
            formGroup.get('DECIMAL').markAsDirty();

            this._updateLengthAndDecimal(formGroup);
          }
        }, {
          key: "_updateLengthAndDecimal",
          value: function _updateLengthAndDecimal(formGroup) {
            switch (+formGroup.get('DATA_TYPE').value) {
              case 1:
                // char
                formGroup.get('DATA_LENGTH').enable();
                formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                formGroup.get('DECIMAL').disable();
                break;

              case 4:
                // decimal
                formGroup.get('DATA_LENGTH').enable();
                formGroup.get('DATA_LENGTH').setValidators(this._validateDataLength);
                formGroup.get('DECIMAL').enable();
                formGroup.get('DATA_LENGTH').setValidators(this._validateDecimal);
                break;

              default:
                formGroup.get('DATA_LENGTH').disable();
                formGroup.get('DECIMAL').disable();
            }
          }
        }, {
          key: "onGoToDataDomain",
          value: function onGoToDataDomain(domainID) {
            this.router.navigate(['/model/data-domain', domainID]);
          }
        }, {
          key: "onGoToSearchHelp",
          value: function onGoToSearchHelp(searchHelpID) {
            this.router.navigate(['/model/search-help', searchHelpID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this41 = this;

            if (this.isNewMode || !this.bypassProtection && this.dataElementForm && this.dataElementForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this41.modelService.sendDialogAnswer('OK');
                } else {
                  _this41.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this42 = this;

            if (!this.dataElementForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (this.dataElementForm.invalid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedDataElement['action'] = 'add';
              this.changedDataElement['ELEMENT_ID'] = this.dataElementForm.get('ELEMENT_ID').value;
            } else {
              this.changedDataElement['action'] = 'update';
              this.changedDataElement['ELEMENT_ID'] = this.dataElementMeta.ELEMENT_ID;
            }

            if (this.dataElementForm.get('ELEMENT_DESC').dirty) {
              this.changedDataElement['ELEMENT_DESC'] = this.dataElementForm.get('ELEMENT_DESC').value;
            }

            if (this.dataElementForm.get('DOMAIN_ID').dirty) {
              this.changedDataElement['DOMAIN_ID'] = this.dataElementForm.get('DOMAIN_ID').value;
            }

            if (this.dataElementForm.get('DATA_TYPE').dirty) {
              this.changedDataElement['DATA_TYPE'] = this.dataElementForm.get('USE_DOMAIN').value ? null : this.dataElementForm.get('DATA_TYPE').value;
            }

            if (this.dataElementForm.get('DATA_LENGTH').dirty) {
              this.changedDataElement['DATA_LENGTH'] = this.dataElementForm.get('USE_DOMAIN').value ? null : this.dataElementForm.get('DATA_LENGTH').value;
            }

            if (this.dataElementForm.get('DECIMAL').dirty) {
              this.changedDataElement['DECIMAL'] = this.dataElementForm.get('USE_DOMAIN').value ? null : this.dataElementForm.get('DECIMAL').value;
            }

            if (this.dataElementForm.get('LABEL_TEXT').dirty) {
              this.changedDataElement['LABEL_TEXT'] = this.dataElementForm.get('LABEL_TEXT').value;
            }

            if (this.dataElementForm.get('LIST_HEADER_TEXT').dirty) {
              this.changedDataElement['LIST_HEADER_TEXT'] = this.dataElementForm.get('LIST_HEADER_TEXT').value;
            }

            if (this.dataElementForm.get('SEARCH_HELP_ID').dirty) {
              this.changedDataElement['SEARCH_HELP_ID'] = this.dataElementForm.get('SEARCH_HELP_ID').value;
            }

            if (this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').dirty) {
              this.changedDataElement['SEARCH_HELP_EXPORT_FIELD'] = this.dataElementForm.get('SEARCH_HELP_EXPORT_FIELD').value;
            }

            if (this.dataElementForm.get('PARAMETER_ID').dirty) {
              this.changedDataElement['PARAMETER_ID'] = this.dataElementForm.get('PARAMETER_ID').value;
            }

            this.entityService.saveDataElement(this.changedDataElement).subscribe(function (data) {
              return _this42._postActivityAfterSavingDataElement(data);
            });
          }
        }, {
          key: "_postActivityAfterSavingDataElement",
          value: function _postActivityAfterSavingDataElement(data) {
            var _this43 = this;

            this.changedDataElement = {};

            if (data['ELEMENT_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/data-element/' + data['ELEMENT_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'DATA_ELEMENT_SAVED', 'S', data['ELEMENT_ID'])
                  }
                });
              } else {
                this._switch2DisplayMode();

                this.dataElementMeta = data;

                this._generateDataElementForm();

                this.messageService.reportMessage('MODEL', 'DATA_ELEMENT_SAVED', 'S', data['ELEMENT_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this43.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }]);

        return DataElementDetailComponent;
      }();

      DataElementDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_5__["UniqueDataElementValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_12__["EntityService"]
        }];
      };

      DataElementDetailComponent.propDecorators = {
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_12__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      DataElementDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-data-element-detail',
        template: _raw_loader_data_element_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_element_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_5__["UniqueDataElementValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_12__["EntityService"]])], DataElementDetailComponent);
      /***/
    },

    /***/
    "SKUw":
    /*!**********************************************!*\
      !*** ./src/app/model/role/role.component.ts ***!
      \**********************************************/

    /*! exports provided: RoleComponent */

    /***/
    function SKUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleComponent", function () {
        return RoleComponent;
      });
      /* harmony import */


      var _raw_loader_role_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./role.component.html */
      "JLII");
      /* harmony import */


      var _role_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role.component.css */
      "X0RI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var RoleComponent = /*#__PURE__*/function () {
        function RoleComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, RoleComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(RoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (term) {
              return _this44.entityService.listRole(term);
            })).subscribe(function (data) {
              _this44.roleList = data;
              var roleID;

              if (_this44.route.snapshot.firstChild) {
                roleID = _this44.route.snapshot.firstChild.paramMap.get('roleID');
              }

              if (roleID) {
                if (roleID === 'new') {
                  _this44._newRole();
                } else {
                  _this44.onSelect(_this44.roleList.find(function (role) {
                    return role.ROLE_ID === roleID;
                  }));
                }
              }
            });
            this.searchRole(''); // The initial list

            this.modelService.theSelectedRole$.subscribe(function (data) {
              if (_this44.theSelectedRole) {
                _this44.theSelectedRole.ROLE_ID = data['ROLE_ID'];
                _this44.theSelectedRole.ROLE_DESC = data['ROLE_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this44.roleList[0] && !_this44.roleList[0].CREATE_TIME) {
                _this44.roleList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var roleID = _this44.route.snapshot.firstChild.paramMap.get('roleID');

                if (roleID) {
                  if (roleID === 'new') {
                    _this44.onSelect(_this44.roleList[0]);
                  } else {
                    _this44.onSelect(_this44.roleList.find(function (role) {
                      return role.ROLE_ID === roleID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this44.isSearchListShown = data;
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(role) {
            if (role) {
              this.theSelectedRole = role;
              this.modelService.setSelectedRole(role);
            }
          }
        }, {
          key: "searchRole",
          value: function searchRole(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "newRole",
          value: function newRole() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('roleID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newRole();

              this.router.navigate(['/model/role/new']);
            }
          }
        }, {
          key: "_newRole",
          value: function _newRole() {
            this.theSelectedRole = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["RoleH"]();
            this.theSelectedRole.ROLE_ID = 'new';
            this.theSelectedRole.ROLE_DESC = 'description';
            this.theSelectedRole.VERSION_NO = 1;
            this.theSelectedRole.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedRole.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedRole(this.theSelectedRole);
            this.roleList.splice(0, 0, this.theSelectedRole);
          }
        }]);

        return RoleComponent;
      }();

      RoleComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      RoleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-role',
        template: _raw_loader_role_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_role_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], RoleComponent);
      /***/
    },

    /***/
    "TZbv":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/role/role-detail/role-detail.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TZbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"roleMeta\" [formGroup]=\"roleForm\">\n  <div class=\"form-group\">\n    <label for=\"role\" class=\"col-form-label form-control-sm\">Role:\n      <span [class.ng-invalid]=\"roleForm.get('ROLE_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{roleForm.get('ROLE_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"role\" [readonly]=\"readonly || !isNewMode\"\n           name=\"role\" formControlName=\"ROLE_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"role-desc\" class=\"col-form-label form-control-sm\">Role Description:</label>\n    <textarea class=\"form-control\" id=\"role-desc\" name=\"role-desc\" rows=\"2\"\n              formControlName=\"ROLE_DESC\" [readonly]=\"readonly\" (change)=\"onChangeRoleDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\"><span class=\"fas fa-user-check\"></span> Relation</div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered table-sm\">\n        <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">Action</th>\n          <th scope=\"col\">Relation</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">Cardinality</th>\n        </tr>\n        </thead>\n\n        <tbody formArrayName=\"RELATIONS\">\n        <tr *ngFor=\"let relationFormGroup of relationFormArray.controls; let i = index\">\n          <td class=\"dk-actions\">\n            <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteRelation(i)\" title=\"Delete\">\n              <span class=\"far fa-trash-alt\"></span>\n            </button>\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <div class=\"input-group\">\n              <input class=\"form-control form-control-sm\" type=\"text\" formControlName=\"RELATION_ID\"\n                     [readonly]=\"readonly || oldRelation(relationFormGroup) && relationFormGroup.valid\" (change)=\"onChangeRelationID(i)\"\n                     (dblclick)=\"onGoToRelation(relationFormGroup.value['RELATION_ID'])\">\n              <div class=\"invalid-tooltip\">\n                {{relationFormGroup.get('RELATION_ID').errors?.message}}\n              </div>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchRelation\"\n                        (click)=\"onSearchHelp(relationFormGroup, i)\">\n                  <span class=\"fas fa-search\"></span>\n                </button>\n              </div>\n            </div>\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <input type=\"text\" formControlName=\"RELATION_DESC\" readonly class=\"form-control form-control-sm dk-description\">\n          </td>\n          <td [formGroup]=\"relationFormGroup\">\n            <select class=\"form-control form-control-sm\" formControlName=\"CARDINALITY\">\n              <option>[0..1]</option>\n              <option>[1..1]</option>\n              <option>[0..n]</option>\n              <option>[1..n]</option>\n            </select>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "UvzV":
    /*!************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type.component.ts ***!
      \************************************************************/

    /*! exports provided: EntityTypeComponent */

    /***/
    function UvzV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityTypeComponent", function () {
        return EntityTypeComponent;
      });
      /* harmony import */


      var _raw_loader_entity_type_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./entity-type.component.html */
      "IRPK");
      /* harmony import */


      var _entity_type_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity-type.component.css */
      "tH2T");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var EntityTypeComponent = /*#__PURE__*/function () {
        function EntityTypeComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, EntityTypeComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }

        _createClass(EntityTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this45 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) {
              return _this45.entityService.listEntityType(term);
            })).subscribe(function (data) {
              _this45.entityTypeList = data;
              var entityID;

              if (_this45.route.snapshot.firstChild) {
                entityID = _this45.route.snapshot.firstChild.paramMap.get('entityID');
              }

              if (entityID) {
                if (entityID === 'new') {
                  _this45._newEntityType();
                } else {
                  _this45.onSelect(_this45.entityTypeList.find(function (entityType) {
                    return entityType.ENTITY_ID === entityID;
                  }));
                }
              }
            });
            this.searchEntityType(''); // The initial list

            this.modelService.theSelectedEntityType$.subscribe(function (data) {
              if (_this45.theSelectedEntityType) {
                _this45.theSelectedEntityType.ENTITY_ID = data.ENTITY_ID;
                _this45.theSelectedEntityType.ENTITY_DESC = data.ENTITY_DESC;
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this45.isSearchListShown = data;
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this45.entityTypeList[0] && !_this45.entityTypeList[0].CREATE_TIME) {
                _this45.entityTypeList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var entityID = _this45.route.snapshot.firstChild.paramMap.get('entityID');

                if (entityID) {
                  if (entityID === 'new') {
                    _this45.onSelect(_this45.entityTypeList[0]);
                  } else {
                    _this45.onSelect(_this45.entityTypeList.find(function (entityType) {
                      return entityType.ENTITY_ID === entityID;
                    }));
                  }
                }
              }
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(entityType) {
            if (entityType) {
              this.theSelectedEntityType = entityType;
              this.modelService.setSelectedEntityType(entityType);
            }
          }
        }, {
          key: "searchEntityType",
          value: function searchEntityType(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "newEntityType",
          value: function newEntityType() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('entityID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newEntityType();

              this.router.navigate(['/model/entity-type/new']);
            }
          }
        }, {
          key: "_newEntityType",
          value: function _newEntityType() {
            this.theSelectedEntityType = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityType"]();
            this.theSelectedEntityType.ENTITY_ID = 'new';
            this.theSelectedEntityType.ENTITY_DESC = 'description';
            this.theSelectedEntityType.VERSION_NO = 1;
            this.theSelectedEntityType.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedEntityType.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedEntityType(this.theSelectedEntityType);
            this.entityTypeList.splice(0, 0, this.theSelectedEntityType);
          }
        }]);

        return EntityTypeComponent;
      }();

      EntityTypeComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      EntityTypeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-entity-type',
        template: _raw_loader_entity_type_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_entity_type_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_7__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_8__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], EntityTypeComponent);
      /***/
    },

    /***/
    "W0Aq":
    /*!******************************************************************************!*\
      !*** ./src/app/model/relation/relation-detail/relation-detail.component.css ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function W0Aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-actions{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvcmVsYXRpb24vcmVsYXRpb24tZGV0YWlsL3JlbGF0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvcmVsYXRpb24vcmVsYXRpb24tZGV0YWlsL3JlbGF0aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLWFjdGlvbnN7XG4gIHdpZHRoOiA1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIG1heC13aWR0aDogNXJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "W0Gm":
    /*!******************************************************************!*\
      !*** ./src/app/model/role/role-detail/role-detail.component.css ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function W0Gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JvbGUvcm9sZS1kZXRhaWwvcm9sZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "X0RI":
    /*!***********************************************!*\
      !*** ./src/app/model/role/role.component.css ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function X0RI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "XNRG":
    /*!*******************************************!*\
      !*** ./src/app/model/model.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function XNRG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-model-content {\n  margin-top: .5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvbW9kZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL21vZGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstbW9kZWwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IC41cmVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    "f15a":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f15a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"dataDomainMeta\" [formGroup]=\"dataDomainForm\">\n  <div class=\"form-group\">\n    <label for=\"dataDomain\" class=\"col-form-label form-control-sm\">Data Domain:\n      <span [class.ng-invalid]=\"dataDomainForm.get('DOMAIN_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{dataDomainForm.get('DOMAIN_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"dataDomain\" [readonly]=\"readonly || !isNewMode\"\n           (change)=\"onChangeDataDomainID()\" name=\"dataDomain\" formControlName=\"DOMAIN_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"dataDomain-desc\" class=\"col-form-label form-control-sm\">Data Domain Description:</label>\n    <textarea class=\"form-control\" id=\"dataDomain-desc\" name=\"dataDomain-desc\" rows=\"2\"\n              formControlName=\"DOMAIN_DESC\" [readonly]=\"readonly\" (change)=\"onChangeDataDomainDesc()\"></textarea>\n  </div>\n\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Data Type</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 mb-2 row\">\n        <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(dataDomainForm)\"\n                class=\"col-sm-8 col-lg-4 form-control form-control-sm\">\n          <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n        </select>\n      </div>\n\n      <div class=\"ml-0 row\">\n        <div class=\"form-group col-8 col-sm-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"data-length\">Length:\n          </label>\n          <input type=\"number\" formControlName=\"DATA_LENGTH\" id=\"data-length\" name=\"data-length\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\" >\n          <span class=\"dk-invalid-feedback\">{{dataDomainForm.get('DATA_LENGTH').errors?.message}}</span>\n        </div>\n\n        <div class=\"form-group col-8 col-sm-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"decimal-place\">Decimal Place:\n          </label>\n          <input type=\"number\" formControlName=\"DECIMAL\" id=\"decimal-place\" name=\"decimal-place\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          <span class=\"dk-invalid-feedback\">{{dataDomainForm.get('DECIMAL').errors?.message}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mt-3\">\n    <div class=\"card-header\">Domain Definition</div>\n    <div class=\"card-body\">\n      <div *ngIf=\"enableGeneralType\" class=\"card mb-3\">\n        <div class=\"ml-2 mt-2 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"general-type\" name=\"DOMAIN_TYPE\"\n                 [value]=\"0\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n          <label class=\"custom-control-label\" for=\"general-type\">General Type</label>\n        </div>\n        <div class=\"card-body row\">\n          <div class=\"form-check col-sm-3 mx-3\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"UNSIGNED\" id=\"unsigned\" name=\"unsigned\">\n            <label class=\"form-check-label\" for=\"unsigned\">Unsigned</label>\n          </div>\n          <div class=\"form-check col-sm-3 mx-3\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"CAPITAL_ONLY\" id=\"CAPITAL_ONLY\" name=\"CAPITAL_ONLY\">\n            <label class=\"form-check-label\" for=\"CAPITAL_ONLY\">Capital Only</label>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"enableRegExpr\" class=\"card mb-3\">\n        <div class=\"ml-2 mt-2 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"regular-expression\" name=\"DOMAIN_TYPE\"\n                 [value]=\"1\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n          <label class=\"custom-control-label\" for=\"regular-expression\">Regular Expression\n            <span [class.ng-invalid]=\"dataDomainForm.get('REG_EXPR').invalid\" class=\"dk-invalid-feedback\">\n              {{dataDomainForm.get('REG_EXPR').errors?.message}}\n            </span>\n          </label>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"REG_EXPR\" id=\"REG_EXPR\" name=\"REG_EXPR\"\n                   class=\"form-control form-control-sm\" [readonly]=\"readonly\" >\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"enableValueRelation\" class=\"card mb-2\">\n        <div class=\"ml-2 mt-2 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"value-relation\" name=\"DOMAIN_TYPE\"\n                 [value]=\"2\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n          <label class=\"custom-control-label\" for=\"value-relation\">Value Entity Relation\n            <span [class.ng-invalid]=\"dataDomainForm.get('ENTITY_ID').invalid\" class=\"dk-invalid-feedback\">\n              {{dataDomainForm.get('ENTITY_ID').errors?.message}}\n            </span>\n          </label>\n        </div>\n        <div class=\"card-body row\">\n          <div class=\"input-group col-lg-4 ml-2 mb-3\">\n            <input type=\"text\" formControlName=\"ENTITY_ID\" id=\"ENTITY_ID\" name=\"ENTITY_ID\" placeholder=\"Entity Type\"\n                   class=\"form-control form-control-sm\" [readonly]=\"readonly\" (change)=\"onChangeEntityID(dataDomainForm)\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchEntity\" (click)=\"onEntitySearchHelp(dataDomainForm)\">\n                <span class=\"fas fa-search\"></span>\n              </button>\n            </div>\n          </div>\n          <select formControlName=\"RELATION_ID\" class=\"form-control form-control-sm col-lg-4 ml-4 mr-3\">\n            <option *ngFor=\"let relation of relationsOfEntity\" [value]=\"relation\">{{relation}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div *ngIf=\"enableArrayOrInterval\" class=\"card mb-3\">\n        <div class=\"ml-2 mt-2 row\">\n          <div class=\"custom-control custom-radio col-3\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"value-array\" name=\"DOMAIN_TYPE\"\n                   [value]=\"3\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n            <label class=\"custom-control-label\" for=\"value-array\">Value Array</label>\n          </div>\n          <div class=\"custom-control custom-radio col-3\">\n            <input type=\"radio\" class=\"custom-control-input\" id=\"value-interval\" name=\"DOMAIN_TYPE\"\n                   [value]=\"4\" formControlName=\"DOMAIN_TYPE\" (change)=\"onChangeDomainType(dataDomainForm)\">\n            <label class=\"custom-control-label\" for=\"value-interval\">Value Interval</label>\n          </div>\n        </div>\n\n        <div class=\"card-body\">\n          <table class=\"table table-bordered dk-table\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">Low Value</th>\n                <th *ngIf=\"dataDomainForm.get('DOMAIN_TYPE').value === 4\" scope=\"col\">High Value</th>\n                <th scope=\"col\">Description</th>\n                <th scope=\"col\">Actions</th>\n              </tr>\n            </thead>\n\n            <tbody formArrayName=\"DOMAIN_VALUES\">\n            <tr *ngFor=\"let domainValueForm of domainValueFormArray.controls; let i = index\">\n              <td [formGroup]=\"domainValueForm\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" type=\"text\" formControlName=\"LOW_VALUE\" maxlength=\"10\"\n                         [readonly]=\"readonly\" (change)=\"onChangeDomainValue(i)\">\n                  <div class=\"invalid-tooltip\">\n                    {{domainValueForm.get('LOW_VALUE').errors?.message}}\n                  </div>\n                </div>\n              </td>\n              <td *ngIf=\"dataDomainForm.get('DOMAIN_TYPE').value === 4\" [formGroup]=\"domainValueForm\">\n                <div class=\"input-group\">\n                  <input class=\"form-control\" type=\"text\" formControlName=\"HIGH_VALUE\"\n                         [readonly]=\"readonly\"  (change)=\"onChangeDomainValue(i)\">\n                  <div class=\"invalid-tooltip\">\n                    {{domainValueForm.get('HIGH_VALUE').errors?.message}}\n                  </div>\n                </div>\n              </td>\n              <td [formGroup]=\"domainValueForm\" class=\"dk-description\">\n                <input  class=\"form-control\" type=\"text\" formControlName=\"LOW_VALUE_TEXT\" maxlength=\"100\"\n                        [readonly]=\"readonly\">\n              </td>\n              <td class=\"dk-actions\">\n                <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"insertDomainValue(i)\" title=\"Insert\">\n                  <span class=\"fas fa-plus\"></span>\n                </button>\n                <button class=\"btn btn-sm\" type=\"button\" [disabled]=\"readonly\" (click)=\"deleteDomainValue(i)\" title=\"Delete\">\n                  <span class=\"far fa-trash-alt\"></span>\n                </button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "gzY6":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/relationship/relationship.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gzY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchRelationship(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedRelationship\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newRelationship()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let relationship of relationshipList\" routerLink=\"/model/relationship/{{relationship.RELATIONSHIP_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(relationship)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{relationship.RELATIONSHIP_ID}}</h5>\n          <small>version: {{relationship.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{relationship.RELATIONSHIP_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{relationship.LAST_CHANGE_BY}} @{{relationship.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "hZqC":
    /*!***************************************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain-detail/data-domain-detail.component.css ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function hZqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dk-table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  border: none;\n}\n.dk-actions{\n  width: 4rem;\n  min-width: 4rem;\n  max-width: 4rem;\n}\n.dk-description{\n  width: 20rem;\n  min-width: 20rem;\n  max-width: 20rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvZGF0YS1kb21haW4vZGF0YS1kb21haW4tZGV0YWlsL2RhdGEtZG9tYWluLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwvZGF0YS1kb21haW4vZGF0YS1kb21haW4tZGV0YWlsL2RhdGEtZG9tYWluLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRrLXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5kay1hY3Rpb25ze1xuICB3aWR0aDogNHJlbTtcbiAgbWluLXdpZHRoOiA0cmVtO1xuICBtYXgtd2lkdGg6IDRyZW07XG59XG4uZGstZGVzY3JpcHRpb257XG4gIHdpZHRoOiAyMHJlbTtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgbWF4LXdpZHRoOiAyMHJlbTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "hvcR":
    /*!************************************************************!*\
      !*** ./src/app/model/search-help/search-help.component.ts ***!
      \************************************************************/

    /*! exports provided: SearchHelpComponent */

    /***/
    function hvcR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchHelpComponent", function () {
        return SearchHelpComponent;
      });
      /* harmony import */


      var _raw_loader_search_help_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./search-help.component.html */
      "uMh+");
      /* harmony import */


      var _search_help_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-help.component.css */
      "2Qad");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var SearchHelpComponent = /*#__PURE__*/function () {
        function SearchHelpComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, SearchHelpComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.searchHelpList = [];
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(SearchHelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this46 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (term) {
              return _this46.entityService.listSearchHelp(term);
            })).subscribe(function (data) {
              _this46.searchHelpList = data;
              var searchHelpID;

              if (_this46.route.snapshot.firstChild) {
                searchHelpID = _this46.route.snapshot.firstChild.paramMap.get('searchHelpID');
              }

              if (searchHelpID) {
                if (searchHelpID === 'new') {
                  _this46._newSearchHelp();
                } else {
                  _this46.onSelect(_this46.searchHelpList.find(function (searchHelp) {
                    return searchHelp.SEARCH_HELP_ID === searchHelpID;
                  }));
                }
              }
            });
            this.searchSearchHelp(''); // The initial list

            this.modelService.theSelectedSearchHelp$.subscribe(function (data) {
              if (_this46.theSelectedSearchHelp) {
                _this46.theSelectedSearchHelp.SEARCH_HELP_ID = data['SEARCH_HELP_ID'];
                _this46.theSelectedSearchHelp.SEARCH_HELP_DESC = data['SEARCH_HELP_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this46.searchHelpList[0] && !_this46.searchHelpList[0].CREATE_TIME) {
                _this46.searchHelpList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var searchHelpID = _this46.route.snapshot.firstChild.paramMap.get('searchHelpID');

                if (searchHelpID) {
                  if (searchHelpID === 'new') {
                    _this46.onSelect(_this46.searchHelpList[0]);
                  } else {
                    _this46.onSelect(_this46.searchHelpList.find(function (searchHelp) {
                      return searchHelp.SEARCH_HELP_ID === searchHelpID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this46.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(searchHelp) {
            if (searchHelp) {
              this.theSelectedSearchHelp = searchHelp;
              this.modelService.setSelectedSearchHelp(searchHelp);
            }
          }
        }, {
          key: "searchSearchHelp",
          value: function searchSearchHelp(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newSearchHelp",
          value: function newSearchHelp() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('searchHelpID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newSearchHelp();

              this.router.navigate(['/model/search-help/new']);
            }
          }
        }, {
          key: "_newSearchHelp",
          value: function _newSearchHelp() {
            this.theSelectedSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpMeta"]();
            this.theSelectedSearchHelp.SEARCH_HELP_ID = 'new';
            this.theSelectedSearchHelp.SEARCH_HELP_DESC = 'description';
            this.theSelectedSearchHelp.VERSION_NO = 1;
            this.theSelectedSearchHelp.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedSearchHelp.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedSearchHelp(this.theSelectedSearchHelp);
            this.searchHelpList.splice(0, 0, this.theSelectedSearchHelp);
          }
        }]);

        return SearchHelpComponent;
      }();

      SearchHelpComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      SearchHelpComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-help',
        template: _raw_loader_search_help_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_help_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_5__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], SearchHelpComponent);
      /***/
    },

    /***/
    "jwam":
    /*!*******************************************!*\
      !*** ./src/app/model/model-validators.ts ***!
      \*******************************************/

    /*! exports provided: UniqueSearchHelpValidator, UniqueDataDomainValidator, UniqueDataElementValidator, UniqueRoleValidator, UniqueRelationValidator, UniqueRelationshipValidator, UniqueEntityTypeValidator */

    /***/
    function jwam(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueSearchHelpValidator", function () {
        return UniqueSearchHelpValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueDataDomainValidator", function () {
        return UniqueDataDomainValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueDataElementValidator", function () {
        return UniqueDataElementValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueRoleValidator", function () {
        return UniqueRoleValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueRelationValidator", function () {
        return UniqueRelationValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueRelationshipValidator", function () {
        return UniqueRelationshipValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UniqueEntityTypeValidator", function () {
        return UniqueEntityTypeValidator;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./model.service */
      "rkAN");

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
      }; // noinspection JSAnnotator


      var UniqueSearchHelpValidator = /*#__PURE__*/function () {
        function UniqueSearchHelpValidator(entityService, modelService) {
          _classCallCheck(this, UniqueSearchHelpValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueSearchHelpValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this47 = this;

            return this.entityService.getSearchHelpDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'SEARCH_HELP_NOT_EXIST') {
                _this47.modelService.updateSearchHelpID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueSearchHelpValidator;
      }();

      UniqueSearchHelpValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueSearchHelpValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueSearchHelpValidator); // noinspection JSAnnotator

      var UniqueDataDomainValidator = /*#__PURE__*/function () {
        function UniqueDataDomainValidator(entityService, modelService) {
          _classCallCheck(this, UniqueDataDomainValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueDataDomainValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this48 = this;

            return this.entityService.getDataDomainDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'DATA_DOMAIN_NOT_EXIST') {
                _this48.modelService.updateDataDomainID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueDataDomainValidator;
      }();

      UniqueDataDomainValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueDataDomainValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueDataDomainValidator); // noinspection JSAnnotator

      var UniqueDataElementValidator = /*#__PURE__*/function () {
        function UniqueDataElementValidator(entityService, modelService) {
          _classCallCheck(this, UniqueDataElementValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueDataElementValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this49 = this;

            return this.entityService.getDataElementDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'DATA_ELEMENT_NOT_EXIST') {
                _this49.modelService.updateDataElementID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueDataElementValidator;
      }();

      UniqueDataElementValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueDataElementValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueDataElementValidator); // noinspection JSAnnotator

      var UniqueRoleValidator = /*#__PURE__*/function () {
        function UniqueRoleValidator(entityService, modelService) {
          _classCallCheck(this, UniqueRoleValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueRoleValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this50 = this;

            return this.entityService.getRoleDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'ROLE_NOT_EXIST') {
                _this50.modelService.updateRoleID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueRoleValidator;
      }();

      UniqueRoleValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueRoleValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueRoleValidator); // noinspection JSAnnotator

      var UniqueRelationValidator = /*#__PURE__*/function () {
        function UniqueRelationValidator(entityService, modelService) {
          _classCallCheck(this, UniqueRelationValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueRelationValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this51 = this;

            if (ctrl.value === 'r_') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }

            return this.entityService.getRelationDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'RELATION_NOT_EXIST') {
                _this51.modelService.updateRelationID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueRelationValidator;
      }();

      UniqueRelationValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueRelationValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueRelationValidator); // noinspection JSAnnotator

      var UniqueRelationshipValidator = /*#__PURE__*/function () {
        function UniqueRelationshipValidator(entityService, modelService) {
          _classCallCheck(this, UniqueRelationshipValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueRelationshipValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this52 = this;

            if (ctrl.value === 'rs_') {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }

            return this.entityService.getRelationshipDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'RELATIONSHIP_NOT_EXIST') {
                _this52.modelService.updateRelationshipID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueRelationshipValidator;
      }();

      UniqueRelationshipValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueRelationshipValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueRelationshipValidator); // noinspection JSAnnotator

      var UniqueEntityTypeValidator = /*#__PURE__*/function () {
        function UniqueEntityTypeValidator(entityService, modelService) {
          _classCallCheck(this, UniqueEntityTypeValidator);

          this.entityService = entityService;
          this.modelService = modelService;
        }

        _createClass(UniqueEntityTypeValidator, [{
          key: "validate",
          value: function validate(ctrl) {
            var _this53 = this;

            return this.entityService.getEntityTypeDesc(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              if (data['msgName'] && data['msgName'] === 'ENTITY_TYPE_NOT_EXIST') {
                _this53.modelService.updateEntityID(ctrl.value);

                return null;
              } else {
                return {
                  message: '"' + ctrl.value + '" already exists'
                };
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
              return null;
            }));
          }
        }]);

        return UniqueEntityTypeValidator;
      }();

      UniqueEntityTypeValidator.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }];
      };

      UniqueEntityTypeValidator = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]])], UniqueEntityTypeValidator);
      /***/
    },

    /***/
    "k5RL":
    /*!******************************************************************************************!*\
      !*** ./src/app/model/data-element/data-element-detail/data-element-detail.component.css ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function k5RL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZWxlbWVudC9kYXRhLWVsZW1lbnQtZGV0YWlsL2RhdGEtZWxlbWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "koh0":
    /*!*****************************************************************************!*\
      !*** ./src/app/model/relation/relation-detail/relation-detail.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: RelationDetailComponent */

    /***/
    function koh0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelationDetailComponent", function () {
        return RelationDetailComponent;
      });
      /* harmony import */


      var _raw_loader_relation_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./relation-detail.component.html */
      "A91A");
      /* harmony import */


      var _relation_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./relation-detail.component.css */
      "W0Aq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../msgStore */
      "uLAD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../attribute-meta/attribute-meta.component */
      "23ty");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");

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

      var RelationDetailComponent = /*#__PURE__*/function () {
        function RelationDetailComponent(route, router, fb, uniqueRelationValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, RelationDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueRelationValidator = uniqueRelationValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.isFieldMapShown = false;
          this.changedRelation = {};
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_7__["msgStore"], 'EN');
        }

        _createClass(RelationDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this54 = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (params) {
              var relationID = params.get('relationID');

              if (relationID === 'new') {
                var relation = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["RelationMeta"]();
                relation.RELATION_ID = 'r_';
                relation.RELATION_DESC = '';
                relation.ATTRIBUTES = [];
                _this54.isNewMode = true;
                _this54.readonly = false;
                _this54.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(relation);
              } else {
                _this54.readonly = true;
                _this54.isNewMode = false;
                return _this54.entityService.getRelationMeta(params.get('relationID'));
              }
            })).subscribe(function (data) {
              if ('RELATION_ID' in data) {
                // If the return data is a message
                _this54.messageService.clearMessages();

                if (history.state.message) {
                  _this54.messageService.report(history.state.message);
                }

                _this54.relationMeta = data;

                _this54._generateRelationForm();
              } else {
                _this54.messageService.clearMessages();

                _this54.relationMeta = null;
                _this54.relationForm = null;

                if (data instanceof Array) {
                  data.forEach(function (err) {
                    return _this54.messageService.add(err);
                  });
                } else {
                  _this54.messageService.report(data);
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this54.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(fieldName, control, rowID) {
            if (!this.relationSearchHelp) {
              this.relationSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelp"]();
              this.relationSearchHelp.OBJECT_NAME = 'Relation';

              this.relationSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRelation(searchTerm);
                };
              }(this.entityService);

              this.relationSearchHelp.BEHAVIOUR = 'A';
              this.relationSearchHelp.MULTI = false;
              this.relationSearchHelp.FUZZY_SEARCH = true;
              this.relationSearchHelp.FIELDS = [{
                FIELD_NAME: 'RELATION_ID',
                LIST_HEADER_TEXT: 'Relation',
                IMPORT: true,
                EXPORT: true,
                IE_FIELD_NAME: fieldName,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'RELATION_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.relationSearchHelp.READ_ONLY = this.readonly;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRightRelationID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.relationSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateRelationForm",
          value: function _generateRelationForm() {
            var _this55 = this;

            this.relationForm = this.fb.group({});
            this.relationForm.addControl('RELATION_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.relationMeta.RELATION_ID, {
              updateOn: 'blur'
            }));

            if (this.isNewMode) {
              this.relationForm.get('RELATION_ID').setValidators(this._validateRelationId);
              this.relationForm.get('RELATION_ID').setAsyncValidators(this.uniqueRelationValidator.validate.bind(this.uniqueRelationValidator));
            }

            this.relationForm.addControl('RELATION_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.relationMeta.RELATION_DESC)); // Compose Associations

            var formArray = [];

            if (this.relationMeta.ASSOCIATIONS) {
              this.relationMeta.ASSOCIATIONS.forEach(function (association) {
                var fieldsMapArray = [];
                association.FIELDS_MAPPING.forEach(function (fieldsMap) {
                  fieldsMapArray.push(_this55.fb.group({
                    LEFT_FIELD: [fieldsMap.LEFT_FIELD],
                    RIGHT_FIELD: [fieldsMap.RIGHT_FIELD]
                  }));
                });
                formArray.push(_this55.fb.group({
                  ASSOCIATION_NAME: [association.ASSOCIATION_NAME],
                  RIGHT_RELATION_ID: [association.RIGHT_RELATION_ID],
                  CARDINALITY: [{
                    value: association.CARDINALITY,
                    disabled: _this55.readonly
                  }],
                  FOREIGN_KEY_CHECK: [{
                    value: association.FOREIGN_KEY_CHECK,
                    disabled: _this55.readonly || association.CARDINALITY === '[0..1]' || association.CARDINALITY === '[0..N]'
                  }],
                  FIELDS_MAPPING: _this55.fb.array(fieldsMapArray)
                }));
              });
            }

            if (this.isNewMode) {
              this._appendEmptyAssociation(formArray);
            }

            this.relationForm.addControl('ASSOCIATIONS', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](formArray));
          }
        }, {
          key: "_appendEmptyAssociation",
          value: function _appendEmptyAssociation(formArray) {
            formArray.push(this.fb.group({
              ASSOCIATION_NAME: [''],
              RIGHT_RELATION_ID: [''],
              CARDINALITY: ['[0..1]'],
              FOREIGN_KEY_CHECK: [{
                value: 0,
                disabled: true
              }],
              FIELDS_MAPPING: this.fb.array([])
            }));
          }
        }, {
          key: "_validateRelationId",
          value: function _validateRelationId(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Relation ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().toLowerCase().substr(0, 2) !== 'r_') {
              return {
                message: 'Relation name must be started with "r_"!'
              };
            }

            if (c.value.toString().length < 3) {
              return {
                message: 'Relation name must have length larger than 2!'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this56 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Entity Type?').subscribe(function (confirm) {
                if (confirm) {
                  _this56._switch2DisplayMode();

                  _this56.relationMeta = null;

                  _this56.modelService.sendDialogAnswer('OK');
                } else {
                  _this56.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.relationForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this56._generateRelationForm();

                    _this56.relationForm.reset(_this56.relationForm.value);

                    _this56._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.associationFormArray.controls.forEach(function (associationFormGroup) {
                associationFormGroup.get('CARDINALITY').enable();

                if (associationFormGroup.get('CARDINALITY').value === '[1..1]' || associationFormGroup.get('CARDINALITY').value === '[1..N]') {
                  associationFormGroup.get('FOREIGN_KEY_CHECK').enable();
                }
              });

              this._appendEmptyAssociation(this.associationFormArray);

              this.attrComponent.switchEditDisplay(this.readonly);
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            var lastIndex = this.associationFormArray.length - 1;

            while (lastIndex >= 0 && this.associationFormArray.controls[lastIndex].get('ASSOCIATION_NAME').value.trim() === '') {
              this.associationFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.associationFormArray.controls.forEach(function (associationFormGroup) {
              associationFormGroup.get('CARDINALITY').disable();
              associationFormGroup.get('FOREIGN_KEY_CHECK').disable();
            });
            this.attrComponent.switchEditDisplay(this.readonly);
          }
        }, {
          key: "onChangeRelationID",
          value: function onChangeRelationID() {
            this.modelService.updateRelationID(this.relationForm.get('RELATION_ID').value);
          }
        }, {
          key: "onChangeRelationDesc",
          value: function onChangeRelationDesc() {
            this.modelService.updateRelationDesc(this.relationForm.get('RELATION_DESC').value);
          }
        }, {
          key: "deleteAssociation",
          value: function deleteAssociation(index) {
            if (index !== this.associationFormArray.length - 1) {
              this.associationFormArray.removeAt(index);
              this.associationFormArray.markAsDirty();
            }
          }
        }, {
          key: "openFieldMapModal",
          value: function openFieldMapModal(index) {
            var _this57 = this;

            this.currentAssociationForm = this.associationFormArray.controls[index];

            if (this.currentAssociationForm.get('RIGHT_RELATION_ID').value.trim() === '') {
              return;
            }

            this.entityService.getRelationMeta(this.currentAssociationForm.get('RIGHT_RELATION_ID').value).subscribe(function (data) {
              _this57.currentRightRelationMeta = data;
            });

            if (this.readonly === false) {
              this.fieldMapFormArray.push(this.fb.group({
                LEFT_FIELD: [''],
                RIGHT_FIELD: ['']
              }));
            }

            this.currentAssociation = this.relationMeta.ASSOCIATIONS ? this.relationMeta.ASSOCIATIONS[index] : null;
            this.isFieldMapShown = true;
          }
        }, {
          key: "closeFieldMapModal",
          value: function closeFieldMapModal() {
            // this.currentAssociationForm.setValue(this.currentAssociationForm.value); // Or the value won't be updated.
            var lastIndex = this.fieldMapFormArray.length - 1;

            while (lastIndex >= 0 && this.fieldMapFormArray.controls[lastIndex].get('RIGHT_FIELD').value.trim() === '') {
              this.fieldMapFormArray.removeAt(lastIndex);
              lastIndex--;
            }

            this.isFieldMapShown = false;
          }
        }, {
          key: "deleteFieldMap",
          value: function deleteFieldMap(index) {
            if (index !== this.fieldMapFormArray.length - 1) {
              this.fieldMapFormArray.removeAt(index);
              this.fieldMapFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeAssociationName",
          value: function onChangeAssociationName(index) {
            var currentAssocFormGroup = this.associationFormArray.at(index);

            if (this.associationFormArray.controls.findIndex(function (assocCtrl, i) {
              return i !== index && assocCtrl.get('ASSOCIATION_NAME').value === currentAssocFormGroup.get('ASSOCIATION_NAME').value;
            }) !== -1) {
              currentAssocFormGroup.get('ASSOCIATION_NAME').setErrors({
                message: 'Duplicate association name!'
              });
              return;
            }

            if (index === this.associationFormArray.length - 1 && currentAssocFormGroup.value.ASSOCIATION_NAME.trim() !== '') {
              this._appendEmptyAssociation(this.associationFormArray);
            }
          }
        }, {
          key: "onChangeRightRelationID",
          value: function onChangeRightRelationID(index, isExportedFromSH) {
            var currentAssocFormGroup = this.associationFormArray.controls[index];

            if (currentAssocFormGroup.get('RIGHT_RELATION_ID').value === this.relationMeta.RELATION_ID) {
              currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({
                message: 'Self association is not allowed'
              });
              return;
            }

            if (!isExportedFromSH) {
              this.entityService.getRelationDesc(currentAssocFormGroup.value.RIGHT_RELATION_ID).subscribe(function (data) {
                if (data['msgCat']) {
                  currentAssocFormGroup.get('RIGHT_RELATION_ID').setErrors({
                    message: data['msgShortText']
                  });
                }
              });
            }
          }
        }, {
          key: "onChangeCardinality",
          value: function onChangeCardinality(formGroup) {
            var cardinality = formGroup.get('CARDINALITY');

            if (cardinality.value === '[1..1]' || cardinality.value === '[1..n]') {
              formGroup.get('FOREIGN_KEY_CHECK').enable();
            } else {
              formGroup.get('FOREIGN_KEY_CHECK').setValue(0);
              formGroup.get('FOREIGN_KEY_CHECK').markAsDirty();
              formGroup.get('FOREIGN_KEY_CHECK').disable();
            }
          }
        }, {
          key: "onChangeLeftField",
          value: function onChangeLeftField(index) {
            var currentFieldMapFormGroup = this.fieldMapFormArray.controls[index];

            if (this.relationMeta.ATTRIBUTES.findIndex(function (attribute) {
              return attribute.ATTR_NAME === currentFieldMapFormGroup.get('LEFT_FIELD').value;
            }) === -1) {
              currentFieldMapFormGroup.get('LEFT_FIELD').setErrors({
                message: 'Field Not Exist'
              });
              return;
            }

            if (this.fieldMapFormArray.controls.findIndex(function (fieldMapCtrl, i) {
              return i !== index && fieldMapCtrl.get('LEFT_FIELD') && fieldMapCtrl.get('RIGHT_FIELD') && fieldMapCtrl.get('LEFT_FIELD').value === currentFieldMapFormGroup.get('LEFT_FIELD').value && fieldMapCtrl.get('RIGHT_FIELD').value === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) !== -1) {
              currentFieldMapFormGroup.get('LEFT_FIELD').setErrors({
                message: 'Duplicate Fields Mapping'
              });
              return;
            }

            if (index === this.fieldMapFormArray.length - 1 && currentFieldMapFormGroup.value.LEFT_FIELD.trim() !== '') {
              this.fieldMapFormArray.push(this.fb.group({
                LEFT_FIELD: [''],
                RIGHT_FIELD: ['']
              }));
            }
          }
        }, {
          key: "onChangeRightField",
          value: function onChangeRightField(index) {
            var currentFieldMapFormGroup = this.fieldMapFormArray.controls[index];

            if (this.currentRightRelationMeta && this.currentRightRelationMeta.ATTRIBUTES.findIndex(function (attribute) {
              return attribute.ATTR_NAME === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) === -1) {
              currentFieldMapFormGroup.get('RIGHT_FIELD').setErrors({
                message: 'Field Not Exist'
              });
              return;
            }

            if (this.fieldMapFormArray.controls.findIndex(function (fieldMapCtrl, i) {
              return i !== index && fieldMapCtrl.get('LEFT_FIELD') && fieldMapCtrl.get('RIGHT_FIELD') && fieldMapCtrl.get('LEFT_FIELD').value === currentFieldMapFormGroup.get('LEFT_FIELD').value && fieldMapCtrl.get('RIGHT_FIELD').value === currentFieldMapFormGroup.get('RIGHT_FIELD').value;
            }) !== -1) {
              currentFieldMapFormGroup.get('RIGHT_FIELD').setErrors({
                message: 'Duplicate Fields Mapping'
              });
              return;
            }

            if (index === this.fieldMapFormArray.length - 1 && currentFieldMapFormGroup.value.RIGHT_FIELD.trim() !== '') {
              this.fieldMapFormArray.push(this.fb.group({
                LEFT_FIELD: [''],
                RIGHT_FIELD: ['']
              }));
            }
          }
        }, {
          key: "oldAssociationName",
          value: function oldAssociationName(formGroup) {
            return this.relationMeta.ASSOCIATIONS ? this.relationMeta.ASSOCIATIONS.findIndex(function (association) {
              return association.ASSOCIATION_NAME === formGroup.get('ASSOCIATION_NAME').value;
            }) !== -1 : false;
          }
        }, {
          key: "oldFieldMap",
          value: function oldFieldMap(formGroup) {
            return this.currentAssociation ? this.currentAssociation.FIELDS_MAPPING.findIndex(function (fieldMap) {
              return fieldMap.LEFT_FIELD === formGroup.get('LEFT_FIELD').value && fieldMap.RIGHT_FIELD === formGroup.get('RIGHT_FIELD').value;
            }) !== -1 : false;
          }
        }, {
          key: "onGoToRelation",
          value: function onGoToRelation(relationID) {
            this.router.navigate(['/model/relation', relationID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this58 = this;

            if (this.isNewMode || !this.bypassProtection && this.relationForm && this.relationForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this58.modelService.sendDialogAnswer('OK');
                } else {
                  _this58.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this59 = this;

            if (!this.relationForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.relationForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedRelation['action'] = 'add';
              this.changedRelation['RELATION_ID'] = this.relationForm.controls['RELATION_ID'].value;
            } else {
              this.changedRelation['action'] = 'update';
              this.changedRelation['RELATION_ID'] = this.relationMeta.RELATION_ID;
            }

            if (this.relationForm.controls['RELATION_DESC'].dirty) {
              this.changedRelation['RELATION_DESC'] = this.relationForm.controls['RELATION_DESC'].value;
            }

            var checkErrs = this.attrComponent.checkAttributes();

            if (checkErrs.length > 0) {
              checkErrs.forEach(function (errMsg) {
                return _this59.messageService.add(errMsg);
              });
              return;
            }

            this.changedRelation['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();

            if (!this._processChangedAssociation()) {
              return;
            }

            this.entityService.saveRelation(this.changedRelation).subscribe(function (data) {
              return _this59._postActivityAfterSavingRelation(data);
            });
          }
        }, {
          key: "_processChangedAssociation",
          value: function _processChangedAssociation() {
            var _this60 = this;

            var changedAssociations = [];
            var errMessages = [];

            if (!this.associationFormArray.dirty) {
              return true;
            }

            this.changedRelation['ASSOCIATIONS'] = changedAssociations;
            this.associationFormArray.controls.forEach(function (associationControl) {
              if (!associationControl.get('ASSOCIATION_NAME').value || !associationControl.get('RIGHT_RELATION_ID').value) {
                return;
              }

              var changedAssociation = {};

              var associationMeta = _this60.relationMeta.ASSOCIATIONS.find(function (association) {
                return associationControl.get('ASSOCIATION_NAME').value === association.ASSOCIATION_NAME;
              });

              if (!associationMeta) {
                // New Add Case
                changedAssociation['action'] = 'add';
                changedAssociation['ASSOCIATION_NAME'] = associationControl.get('ASSOCIATION_NAME').value;
                changedAssociation['RIGHT_RELATION_ID'] = associationControl.get('RIGHT_RELATION_ID').value;
                changedAssociation['CARDINALITY'] = associationControl.get('CARDINALITY').value;
                changedAssociation['FOREIGN_KEY_CHECK'] = associationControl.get('FOREIGN_KEY_CHECK').value;
                changedAssociation['FIELDS_MAPPING'] = [];
                var fieldMapArray = associationControl.get('FIELDS_MAPPING');

                if (fieldMapArray.length === 0) {
                  errMessages.push(_this60.messageService.generateMessage('MODEL', 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING', 'E', changedAssociation['RIGHT_RELATION_ID']));
                  return;
                }

                fieldMapArray.controls.forEach(function (fieldMap) {
                  changedAssociation['FIELDS_MAPPING'].push({
                    action: 'add',
                    RIGHT_FIELD: fieldMap.get('RIGHT_FIELD').value,
                    LEFT_FIELD: fieldMap.get('LEFT_FIELD').value
                  });
                });
                changedAssociations.push(changedAssociation);
              } else {
                if (associationControl.dirty) {
                  // Change Case
                  changedAssociation['action'] = 'update';
                  changedAssociation['ASSOCIATION_NAME'] = associationControl.get('ASSOCIATION_NAME').value;

                  if (associationControl.get('RIGHT_RELATION_ID').dirty) {
                    changedAssociation['RIGHT_RELATION_ID'] = associationControl.get('RIGHT_RELATION_ID').value;
                  }

                  if (associationControl.get('CARDINALITY').dirty) {
                    changedAssociation['CARDINALITY'] = associationControl.get('CARDINALITY').value;
                  }

                  if (associationControl.get('FOREIGN_KEY_CHECK').dirty) {
                    changedAssociation['FOREIGN_KEY_CHECK'] = associationControl.get('FOREIGN_KEY_CHECK').value;
                  }

                  if (associationControl.get('FIELDS_MAPPING').dirty) {
                    changedAssociation['FIELDS_MAPPING'] = [];

                    var _fieldMapArray = associationControl.get('FIELDS_MAPPING');

                    if (_fieldMapArray.length === 0) {
                      errMessages.push(_this60.messageService.generateMessage('MODEL', 'MISS_RELATION_ASSOCIATION_FIELD_MAPPING', 'E', changedAssociation['RIGHT_RELATION_ID']));
                      return;
                    }

                    _fieldMapArray.controls.forEach(function (fieldMap) {
                      if (fieldMap.dirty) {
                        changedAssociation['FIELDS_MAPPING'].push({
                          action: 'add',
                          RIGHT_FIELD: fieldMap.get('RIGHT_FIELD').value,
                          LEFT_FIELD: fieldMap.get('LEFT_FIELD').value
                        });
                      }
                    });

                    associationMeta.FIELDS_MAPPING.forEach(function (oldFieldMap) {
                      var index = _fieldMapArray.controls.findIndex(function (fieldMap) {
                        return fieldMap.get('LEFT_FIELD').value === oldFieldMap.LEFT_FIELD && fieldMap.get('RIGHT_FIELD').value === oldFieldMap.RIGHT_FIELD;
                      });

                      if (index === -1) {
                        changedAssociation['FIELDS_MAPPING'].push({
                          action: 'delete',
                          RIGHT_FIELD: oldFieldMap.LEFT_FIELD,
                          LEFT_FIELD: oldFieldMap.RIGHT_FIELD
                        });
                      }
                    });
                  }

                  changedAssociations.push(changedAssociation);
                }
              }
            });

            if (errMessages.length > 0) {
              errMessages.forEach(function (errMessage) {
                return _this60.messageService.add(errMessage);
              });
              return false;
            } // Deletion Case


            this.relationMeta.ASSOCIATIONS.forEach(function (associationMeta) {
              var index = _this60.associationFormArray.controls.findIndex(function (associationControl) {
                return associationControl.get('ASSOCIATION_NAME').value === associationMeta.ASSOCIATION_NAME;
              });

              if (index === -1) {
                // The association must be deleted
                changedAssociations.push({
                  action: 'delete',
                  ASSOCIATION_NAME: associationMeta.ASSOCIATION_NAME
                });
              }
            });
            return true;
          }
        }, {
          key: "_postActivityAfterSavingRelation",
          value: function _postActivityAfterSavingRelation(data) {
            var _this61 = this;

            this.changedRelation = {};

            if (data['RELATION_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/relation/' + data['RELATION_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'RELATION_SAVED', 'S', data['RELATION_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.relationMeta = data;

                this._generateRelationForm();

                this.messageService.reportMessage('MODEL', 'RELATION_SAVED', 'S', data['RELATION_ID']);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this61.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }, {
          key: "associationFormArray",
          get: function get() {
            return this.relationForm.get('ASSOCIATIONS');
          }
        }, {
          key: "fieldMapFormArray",
          get: function get() {
            if (this.currentAssociationForm) {
              return this.currentAssociationForm.get('FIELDS_MAPPING');
            } else {
              return null;
            }
          }
        }, {
          key: "displayFieldMapModal",
          get: function get() {
            return this.isFieldMapShown ? 'block' : 'none';
          }
        }]);

        return RelationDetailComponent;
      }();

      RelationDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_13__["UniqueRelationValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_11__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]
        }];
      };

      RelationDetailComponent.propDecorators = {
        attrComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_10__["AttributeMetaComponent"], {
            "static": false
          }]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_3__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      RelationDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-relation-detail',
        template: _raw_loader_relation_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_relation_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_13__["UniqueRelationValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_11__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_3__["EntityService"]])], RelationDetailComponent);
      /***/
    },

    /***/
    "lcoD":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/data-element/data-element-detail/data-element-detail.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lcoD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-toolbar mb-2\"  role=\"toolbar\"\n     [ngClass]=\"{'justify-content-end': isSearchListShown, 'justify-content-between': !isSearchListShown}\" >\n  <button *ngIf=\"!isSearchListShown\" class=\"btn\" type=\"button\" title=\"Show List\" (click)=\"showSearchList()\">\n    <span class=\"fas fa-arrow-right\"></span>\n  </button>\n\n  <div class=\"btn-group\" role=\"group\">\n    <button class=\"btn\" type=\"button\" title=\"Edit/Display\" (click)=\"switchEditDisplay()\">\n      <span *ngIf=\"readonly\" class=\"fas fa-edit\"></span>\n      <span *ngIf=\"!readonly\" class=\"fas fa-glasses\"></span>\n    </button>\n    <button class=\"btn\" type=\"button\" title=\"Save\" (click)=\"save()\">\n      <span class=\"fas fa-save\"></span>\n    </button>\n  </div>\n</div>\n\n<dk-message></dk-message>\n<form *ngIf=\"dataElementMeta\" [formGroup]=\"dataElementForm\">\n  <div class=\"form-group\">\n    <label for=\"dataElement\" class=\"col-form-label form-control-sm\">Data Element:\n      <span [class.ng-invalid]=\"dataElementForm.get('ELEMENT_ID').invalid\" class=\"dk-invalid-feedback\">\n        {{dataElementForm.get('ELEMENT_ID').errors?.message}}\n      </span>\n    </label>\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"dataElement\" [readonly]=\"readonly || !isNewMode\"\n           (change)=\"onChangeDataElementID()\" name=\"dataElement\" formControlName=\"ELEMENT_ID\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"dataElement-desc\" class=\"col-form-label form-control-sm\">Data Element Description:\n    </label>\n    <textarea class=\"form-control\" id=\"dataElement-desc\" name=\"dataElement-desc\" rows=\"2\"\n              formControlName=\"ELEMENT_DESC\" [readonly]=\"readonly\" (change)=\"onChangeDataElementDesc()\"></textarea>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Data Type</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 mb-3 row\">\n        <div class=\"col-8 col-lg-3 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"use-domain\" name=\"USE_DOMAIN\"\n                 [value]=\"1\" formControlName=\"USE_DOMAIN\" (change)=\"onChangeUseDomain(dataElementForm)\" required>\n          <label class=\"custom-control-label\" for=\"use-domain\">Data Domain</label>\n        </div>\n        <div class=\"input-group col-8 col-lg-4\">\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"data-domain\" (change)=\"onChangeDataDomain(dataElementForm)\"\n                 [readonly]=\"readonly || !dataElementForm.get('USE_DOMAIN').value\" name=\"dataElement\" formControlName=\"DOMAIN_ID\"\n                 (dblclick)=\"onGoToDataDomain(dataElementForm.value['DOMAIN_ID'])\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchDomain\"\n                    (click)=\"onDataDomainSearchHelp(dataElementForm)\">\n              <span class=\"fas fa-search\"></span>\n            </button>\n          </div>\n        </div>\n        <span [class.ng-invalid]=\"dataElementForm.get('DOMAIN_ID').invalid\" class=\"dk-invalid-feedback\">\n          {{dataElementForm.get('DOMAIN_ID').errors?.required? 'A Data Domain is required': null}}\n          {{dataElementForm.get('DOMAIN_ID').errors?.message}}\n        </span>\n      </div>\n\n      <div class=\"ml-2 mb-2 row\">\n        <div class=\"col-8 col-lg-3 custom-control custom-radio\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"use-data-type\" name=\"USE_DOMAIN\"\n                 [value]=\"0\" formControlName=\"USE_DOMAIN\" (change)=\"onChangeUseDomain(dataElementForm)\" required>\n          <label class=\"custom-control-label\" for=\"use-data-type\">Elementary Type</label>\n        </div>\n        <div class=\"input-group col-8 col-lg-4\">\n          <select formControlName=\"DATA_TYPE\" (change)=\"onChangeDataType(dataElementForm)\"\n                  class=\"form-control form-control-sm\">\n            <option *ngFor=\"let opt of dataTypes\" [value]=\"opt.key\">{{opt.value}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"ml-2 row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"form-group col-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"data-length\">Length:\n          </label>\n          <input type=\"number\" formControlName=\"DATA_LENGTH\" id=\"data-length\" name=\"data-length\" class=\"form-control form-control-sm\"\n                 [readonly]=\"readonly\" >\n          <span class=\"dk-invalid-feedback\">{{dataElementForm.get('DATA_LENGTH').errors?.message}}</span>\n        </div>\n        <div class=\"form-group col-4 col-lg-2\">\n          <label class=\"col-form-label col-form-label-sm\" for=\"decimal-place\">Decimal Place:\n          </label>\n          <input type=\"number\" formControlName=\"DECIMAL\" id=\"decimal-place\" name=\"decimal-place\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n          <span class=\"dk-invalid-feedback\">{{dataElementForm.get('DECIMAL').errors?.message}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Text</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"label-text\">Label Text</label>\n        <input type=\"text\" formControlName=\"LABEL_TEXT\" id=\"label-text\" name=\"label-text\"\n               class=\"form-control form-control-sm col-md-6\" [readonly]=\"readonly\">\n      </div>\n\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"list-header-text\">List Header Text</label>\n        <input type=\"text\" formControlName=\"LIST_HEADER_TEXT\" id=\"list-header-text\" name=\"list-header-text\"\n               class=\"form-control form-control-sm col-md-6\" [readonly]=\"readonly\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card mt-2\">\n    <div class=\"card-header\">Additional Attribute</div>\n    <div class=\"card-body\">\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"search-help\">Search Help</label>\n        <div class=\"input-group col-8 col-lg-4\">\n          <input type=\"text\" formControlName=\"SEARCH_HELP_ID\" id=\"search-help\" name=\"search-help\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\" (change)=\"onChangeSearchHelp(dataElementForm)\"\n                 (dblclick)=\"onGoToSearchHelp(dataElementForm.value['SEARCH_HELP_ID'])\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" id=\"searchSearchHelp\"\n                    (click)=\"onSearchHelpSearchHelp(dataElementForm)\">\n              <span class=\"fas fa-search\"></span>\n            </button>\n          </div>\n        </div>\n        <span [class.ng-invalid]=\"dataElementForm.get('SEARCH_HELP_ID').invalid\" class=\"dk-invalid-feedback\">\n            {{dataElementForm.get('SEARCH_HELP_ID').errors?.message}}\n        </span>\n      </div>\n\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"sh-export-field\">Export Field</label>\n        <div class=\"input-group col-8 col-lg-4\">\n          <select formControlName=\"SEARCH_HELP_EXPORT_FIELD\" class=\"form-control form-control-sm\" id=\"sh-export-field\">\n            <option *ngFor=\"let exportField of searchHelpExportField\" [value]=\"exportField\">{{exportField}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"ml-2 form-group row\">\n        <label class=\"col-form-label col-form-label-sm col-lg-3\" for=\"parameter\">Parameter</label>\n        <div class=\"input-group col-8 col-lg-4\">\n          <input type=\"text\" formControlName=\"PARAMETER_ID\" id=\"parameter\" name=\"parameter\"\n                 class=\"form-control form-control-sm\" [readonly]=\"readonly\">\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n\n<dk-app-search-help></dk-app-search-help>\n";
      /***/
    },

    /***/
    "rMWE":
    /*!*************************************************************!*\
      !*** ./src/app/model/data-domain/data-domain.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function rMWE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2RhdGEtZG9tYWluL2RhdGEtZG9tYWluLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "rkAN":
    /*!****************************************!*\
      !*** ./src/app/model/model.service.ts ***!
      \****************************************/

    /*! exports provided: ModelService */

    /***/
    function rkAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelService", function () {
        return ModelService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ModelService = /*#__PURE__*/function () {
        function ModelService() {
          _classCallCheck(this, ModelService);

          this.dataTypes = [{
            key: 1,
            value: 'Char'
          }, {
            key: 2,
            value: 'Integer'
          }, {
            key: 3,
            value: 'Boolean'
          }, {
            key: 4,
            value: 'Decimal'
          }, {
            key: 5,
            value: 'String'
          }, {
            key: 6,
            value: 'Binary'
          }, {
            key: 7,
            value: 'Date'
          }, {
            key: 8,
            value: 'Timestamp'
          }];
          this.dialogAnswer = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.dialogAnswer$ = this.dialogAnswer.asObservable();
          this.isSearchListShown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.isSearchListShown$ = this.isSearchListShown.asObservable();
          this.selectedEntityTypeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedEntityType$ = this.selectedEntityTypeSource.asObservable();
          this.selectedRelationSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedRelation$ = this.selectedRelationSource.asObservable();
          this.selectedRelationshipSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedRelationship$ = this.selectedRelationshipSource.asObservable();
          this.selectedRoleSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedRole$ = this.selectedRoleSource.asObservable();
          this.selectedDataElementSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedDataElement$ = this.selectedDataElementSource.asObservable();
          this.selectedDataDomainSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedDataDomain$ = this.selectedDataDomainSource.asObservable();
          this.selectedSearchHelpSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.theSelectedSearchHelp$ = this.selectedSearchHelpSource.asObservable();
        }

        _createClass(ModelService, [{
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown.next(true);
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown.next(false);
          }
        }, {
          key: "updateEntityID",
          value: function updateEntityID(entityID) {
            this.theSelectedEntityType.ENTITY_ID = entityID;
            this.selectedEntityTypeSource.next(this.theSelectedEntityType);
          }
        }, {
          key: "updateEntityDesc",
          value: function updateEntityDesc(entityDesc) {
            this.theSelectedEntityType.ENTITY_DESC = entityDesc;
            this.selectedEntityTypeSource.next(this.theSelectedEntityType);
          }
        }, {
          key: "setSelectedEntityType",
          value: function setSelectedEntityType(entityType) {
            this.theSelectedEntityType = entityType;
          }
        }, {
          key: "updateRelationID",
          value: function updateRelationID(relationID) {
            this.theSelectedRelation.RELATION_ID = relationID;
            this.selectedRelationSource.next(this.theSelectedRelation);
          }
        }, {
          key: "updateRelationDesc",
          value: function updateRelationDesc(relationDesc) {
            this.theSelectedRelation.RELATION_DESC = relationDesc;
            this.selectedRelationSource.next(this.theSelectedRelation);
          }
        }, {
          key: "setSelectedRelation",
          value: function setSelectedRelation(relation) {
            this.theSelectedRelation = relation;
          }
        }, {
          key: "updateRelationshipID",
          value: function updateRelationshipID(relationshipID) {
            this.theSelectedRelationship.RELATIONSHIP_ID = relationshipID;
            this.selectedRelationshipSource.next(this.theSelectedRelationship);
          }
        }, {
          key: "updateRelationshipDesc",
          value: function updateRelationshipDesc(relationshipDesc) {
            this.theSelectedRelationship.RELATIONSHIP_DESC = relationshipDesc;
            this.selectedRelationshipSource.next(this.theSelectedRelationship);
          }
        }, {
          key: "setSelectedRelationship",
          value: function setSelectedRelationship(relationship) {
            this.theSelectedRelationship = relationship;
          }
        }, {
          key: "updateRoleID",
          value: function updateRoleID(roleID) {
            this.theSelectedRole.ROLE_ID = roleID;
            this.selectedRoleSource.next(this.theSelectedRole);
          }
        }, {
          key: "updateRoleDesc",
          value: function updateRoleDesc(roleDesc) {
            this.theSelectedRole.ROLE_DESC = roleDesc;
            this.selectedRoleSource.next(this.theSelectedRole);
          }
        }, {
          key: "setSelectedRole",
          value: function setSelectedRole(role) {
            this.theSelectedRole = role;
          }
        }, {
          key: "updateDataElementID",
          value: function updateDataElementID(elementID) {
            this.theSelectedDataElement.ELEMENT_ID = elementID;
            this.selectedDataElementSource.next(this.theSelectedDataElement);
          }
        }, {
          key: "updateDataElementDesc",
          value: function updateDataElementDesc(elementDesc) {
            this.theSelectedDataElement.ELEMENT_DESC = elementDesc;
            this.selectedDataElementSource.next(this.theSelectedDataElement);
          }
        }, {
          key: "setSelectedDataElement",
          value: function setSelectedDataElement(element) {
            this.theSelectedDataElement = element;
          }
        }, {
          key: "updateDataDomainID",
          value: function updateDataDomainID(domainID) {
            this.theSelectedDataDomain.DOMAIN_ID = domainID;
            this.selectedDataDomainSource.next(this.theSelectedDataDomain);
          }
        }, {
          key: "updateDataDomainDesc",
          value: function updateDataDomainDesc(domainDesc) {
            this.theSelectedDataDomain.DOMAIN_DESC = domainDesc;
            this.selectedDataDomainSource.next(this.theSelectedDataDomain);
          }
        }, {
          key: "setSelectedDataDomain",
          value: function setSelectedDataDomain(domain) {
            this.theSelectedDataDomain = domain;
          }
        }, {
          key: "updateSearchHelpID",
          value: function updateSearchHelpID(searchHelpID) {
            this.theSelectedSearchHelp.SEARCH_HELP_ID = searchHelpID;
            this.selectedSearchHelpSource.next(this.theSelectedSearchHelp);
          }
        }, {
          key: "updateSearchHelpDesc",
          value: function updateSearchHelpDesc(searchHelpDesc) {
            this.theSelectedSearchHelp.SEARCH_HELP_DESC = searchHelpDesc;
            this.selectedSearchHelpSource.next(this.theSelectedSearchHelp);
          }
        }, {
          key: "setSelectedSearchHelp",
          value: function setSelectedSearchHelp(searchHelp) {
            this.theSelectedSearchHelp = searchHelp;
          }
        }, {
          key: "sendDialogAnswer",
          value: function sendDialogAnswer(answer) {
            this.dialogAnswer.next(answer);
          }
        }]);

        return ModelService;
      }();

      ModelService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
      })], ModelService);
      /***/
    },

    /***/
    "tH2T":
    /*!*************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type.component.css ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function tH2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsL2VudGl0eS10eXBlL2VudGl0eS10eXBlLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "uMh+":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/model/search-help/search-help.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div *ngIf=\"isSearchListShown\" class=\"col-3\">\n    <div class=\"btn-toolbar justify-content-between mb-2\" role=\"toolbar\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" #searchBox (keyup)=\"searchSearchHelp(searchBox.value)\" >\n      </div>\n\n      <div class=\"btn-group\" role=\"group\">\n        <button class=\"btn\" type=\"button\" title=\"Hide\" (click)=\"hideSearchList()\" [disabled]=\"!theSelectedSearchHelp\">\n          <span class=\"fas fa-arrow-left\"></span>\n        </button>\n        <button class=\"btn\" type=\"button\" title=\"Add\" (click)=\"newSearchHelp()\">\n          <span class=\"fas fa-plus\"></span>\n        </button>\n      </div>\n    </div>\n    <div class=\"list-group\">\n      <a *ngFor=\"let searchHelp of searchHelpList\" routerLink=\"/model/search-help/{{searchHelp.SEARCH_HELP_ID}}\" routerLinkActive=\"active\"\n         (click)=\"onSelect(searchHelp)\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n        <div class=\"d-flex w-100 justify-content-between\">\n          <h5 class=\"mb-1\">{{searchHelp.SEARCH_HELP_ID}}</h5>\n          <small>version: {{searchHelp.VERSION_NO}}</small>\n        </div>\n        <p class=\"mb-1\">{{searchHelp.SEARCH_HELP_DESC}}</p>\n        <!--<small>created by: {{entityType.CREATE_BY}} @{{entityType.CREATE_TIME}}</small> <br/>-->\n        <small>last changed by: {{searchHelp.LAST_CHANGE_BY}} @{{searchHelp.LAST_CHANGE_TIME}}</small>\n      </a>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-9': isSearchListShown, 'col-12': !isSearchListShown}\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "yv1n":
    /*!**************************************************************************************!*\
      !*** ./src/app/model/entity-type/entity-type-detail/entity-type-detail.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: EntityTypeDetailComponent */

    /***/
    function yv1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntityTypeDetailComponent", function () {
        return EntityTypeDetailComponent;
      });
      /* harmony import */


      var _raw_loader_entity_type_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./entity-type-detail.component.html */
      "JpkU");
      /* harmony import */


      var _entity_type_detail_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./entity-type-detail.component.css */
      "AQoV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _msgStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../msgStore */
      "uLAD");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../attribute-meta/attribute-meta.component */
      "23ty");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../model.service */
      "rkAN");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../dialog.service */
      "Cw5F");
      /* harmony import */


      var _model_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../model-validators */
      "jwam");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var EntityTypeDetailComponent = /*#__PURE__*/function () {
        function EntityTypeDetailComponent(route, router, fb, uniqueEntityTypeValidator, messageService, modelService, dialogService, entityService) {
          _classCallCheck(this, EntityTypeDetailComponent);

          this.route = route;
          this.router = router;
          this.fb = fb;
          this.uniqueEntityTypeValidator = uniqueEntityTypeValidator;
          this.messageService = messageService;
          this.modelService = modelService;
          this.dialogService = dialogService;
          this.entityService = entityService;
          this.readonly = true;
          this.isNewMode = false;
          this.changedEntityType = {};
          this.bypassProtection = false;
          this.isSearchListShown = true;
          this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_7__["msgStore"], 'EN');
        }

        _createClass(EntityTypeDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this62 = this;

            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
              var entityID = params.get('entityID');

              if (entityID === 'new') {
                var entityType = new jor_angular__WEBPACK_IMPORTED_MODULE_13__["EntityMeta"]();
                entityType.ENTITY_ID = '';
                entityType.ENTITY_DESC = '';
                entityType.ROLES = [];
                _this62.isNewMode = true;
                _this62.readonly = false;
                _this62.bypassProtection = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(entityType), Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])([]));
              } else {
                _this62.readonly = true;
                _this62.isNewMode = false;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(_this62.entityService.getEntityMeta(entityID), _this62.entityService.getRelationMeta(entityID));
              }
            })).subscribe(function (data) {
              if ('ENTITY_ID' in data[0]) {
                _this62.messageService.clearMessages();

                if (history.state.message) {
                  _this62.messageService.report(history.state.message);
                }

                _this62.entityMeta = data[0];
                _this62.attributes = 'RELATION_ID' in data[1] ? data[1]['ATTRIBUTES'] : [];

                _this62._generateEntityTypeForm();
              } else {
                _this62.messageService.clearMessages();

                _this62.entityMeta = null;
                _this62.entityTypeForm = null;

                if (data[0] instanceof Array) {
                  data[0].forEach(function (err) {
                    return _this62.messageService.add(err);
                  });
                } else {
                  _this62.messageService.report(data[0]);
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this62.isSearchListShown = data;
            });
          }
        }, {
          key: "showSearchList",
          value: function showSearchList() {
            this.isSearchListShown = true;
            this.modelService.showSearchList();
          }
        }, {
          key: "onSearchHelp",
          value: function onSearchHelp(control, rowID) {
            if (!this.roleSearchHelp) {
              this.roleSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_13__["SearchHelp"]();
              this.roleSearchHelp.OBJECT_NAME = 'Role';

              this.roleSearchHelp.METHOD = function (entityService) {
                return function (searchTerm) {
                  return entityService.listRole(searchTerm);
                };
              }(this.entityService);

              this.roleSearchHelp.BEHAVIOUR = 'A';
              this.roleSearchHelp.MULTI = false;
              this.roleSearchHelp.FUZZY_SEARCH = true;
              this.roleSearchHelp.FIELDS = [{
                FIELD_NAME: 'ROLE_ID',
                LIST_HEADER_TEXT: 'Role',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 1,
                FILTER_POSITION: 0
              }, {
                FIELD_NAME: 'ROLE_DESC',
                LIST_HEADER_TEXT: 'Description',
                IMPORT: true,
                EXPORT: true,
                LIST_POSITION: 2,
                FILTER_POSITION: 0
              }];
              this.roleSearchHelp.READ_ONLY = this.readonly || this.oldRole(control) && control.valid;
            }

            var afterExportFn = function (context, ruleIdx) {
              return function () {
                return context.onChangeRoleID(ruleIdx, true);
              };
            }(this, rowID).bind(this);

            this.searchHelpComponent.openSearchHelpModal(this.roleSearchHelp, control, afterExportFn);
          }
        }, {
          key: "_generateEntityTypeForm",
          value: function _generateEntityTypeForm() {
            var _this63 = this;

            this.entityTypeForm = this.fb.group({});
            this.entityTypeForm.addControl('ENTITY_ID', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.entityMeta.ENTITY_ID, {
              updateOn: 'blur'
            }));

            if (this.isNewMode) {
              this.entityTypeForm.get('ENTITY_ID').setValidators(this._validateEntityId);
              this.entityTypeForm.get('ENTITY_ID').setAsyncValidators(this.uniqueEntityTypeValidator.validate.bind(this.uniqueEntityTypeValidator));
            }

            this.entityTypeForm.addControl('ENTITY_DESC', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.entityMeta.ENTITY_DESC)); // Compose roles

            var formArray = [];
            this.entityMeta.ROLES.forEach(function (role) {
              formArray.push(_this63.fb.group({
                ROLE_ID: [role.ROLE_ID],
                ROLE_DESC: [role.ROLE_DESC],
                CONDITIONAL_ATTR: [{
                  value: role.CONDITIONAL_ATTR,
                  disabled: _this63.readonly
                }],
                CONDITIONAL_VALUE: [role.CONDITIONAL_VALUE]
              }));
            });

            if (this.isNewMode) {
              formArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
              }));
            }

            this.entityTypeForm.addControl('ROLES', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"](formArray));
          }
        }, {
          key: "_validateEntityId",
          value: function _validateEntityId(c) {
            if (c.value.trim() === '') {
              return {
                message: 'Entity ID is mandatory'
              };
            }

            if (c.value.toString().toLowerCase() === 'new') {
              return {
                message: '"NEW/new" is reserved, thus is not allowed to use!'
              };
            }

            if (c.value.toString().toLowerCase().substr(0, 2) === 'r_' || c.value.toString().toLowerCase().substr(0, 3) === 'rs_') {
              return {
                message: 'Entity ID cannot be started with "r_" or "rs_"!'
              };
            }

            return null;
          }
        }, {
          key: "switchEditDisplay",
          value: function switchEditDisplay() {
            var _this64 = this;

            if (this.isNewMode) {
              this.dialogService.confirm('Discard the new Entity Type?').subscribe(function (confirm) {
                if (confirm) {
                  _this64._switch2DisplayMode();

                  _this64.entityMeta = null;

                  _this64.modelService.sendDialogAnswer('OK');
                } else {
                  _this64.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return;
            }

            if (!this.readonly) {
              // In Change Mode -> Display Mode
              if (this.entityTypeForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(function (confirm) {
                  if (confirm) {
                    // Discard changes and switch to Display Mode
                    _this64._generateEntityTypeForm();

                    _this64.entityTypeForm.reset(_this64.entityTypeForm.value);

                    _this64._switch2DisplayMode();
                  }
                });
              } else {
                // Switch to display mode
                this._switch2DisplayMode();
              }
            } else {
              // In Display Mode -> Change Mode
              this.readonly = false;
              this.attrComponent.switchEditDisplay(this.readonly);
              this.roleFormArray.controls.forEach(function (roleFormGroup) {
                return roleFormGroup.get('CONDITIONAL_ATTR').enable();
              });
              this.roleFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
              }));
            }

            this.messageService.clearMessages();
          }
        }, {
          key: "_switch2DisplayMode",
          value: function _switch2DisplayMode() {
            this.readonly = true;
            this.attrComponent.switchEditDisplay(this.readonly);
            this.roleFormArray.controls.forEach(function (roleFormGroup) {
              roleFormGroup.get('CONDITIONAL_ATTR').disable();
            });
            var lastIndex = this.roleFormArray.length - 1;

            while (lastIndex >= 0 && this.roleFormArray.controls[lastIndex].get('ROLE_ID').value.trim() === '') {
              this.roleFormArray.removeAt(lastIndex);
              lastIndex--;
            }
          }
        }, {
          key: "onChangeEntityID",
          value: function onChangeEntityID() {
            this.modelService.updateEntityID(this.entityTypeForm.get('ENTITY_ID').value);
          }
        }, {
          key: "onChangeEntityDesc",
          value: function onChangeEntityDesc() {
            this.modelService.updateEntityDesc(this.entityTypeForm.get('ENTITY_DESC').value);
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(index) {
            if (index !== this.roleFormArray.length - 1) {
              this.roleFormArray.removeAt(index);
              this.roleFormArray.markAsDirty();
            }
          }
        }, {
          key: "onChangeRoleID",
          value: function onChangeRoleID(index, isExportedFromSH) {
            var currentRoleFormGroup = this.roleFormArray.controls[index];

            if (this.roleFormArray.controls.findIndex(function (roleCtrl, i) {
              return i !== index && roleCtrl.get('ROLE_ID').value === currentRoleFormGroup.get('ROLE_ID').value;
            }) !== -1) {
              currentRoleFormGroup.get('ROLE_ID').setErrors({
                message: 'Duplicate roles'
              });
              return;
            }

            if (index === this.roleFormArray.length - 1 && currentRoleFormGroup.value.ROLE_ID.trim() !== '') {
              // Only work for the last New line
              this.roleFormArray.push(this.fb.group({
                ROLE_ID: [''],
                ROLE_DESC: [''],
                CONDITIONAL_ATTR: [''],
                CONDITIONAL_VALUE: ['']
              }));
            }

            if (!isExportedFromSH) {
              this.entityService.getRoleDesc(currentRoleFormGroup.value.ROLE_ID).subscribe(function (data) {
                if (data['msgCat']) {
                  currentRoleFormGroup.get('ROLE_ID').setErrors({
                    message: data['msgShortText']
                  });
                } else {
                  currentRoleFormGroup.get('ROLE_DESC').setValue(data);
                }
              });
            }
          }
        }, {
          key: "oldRole",
          value: function oldRole(formGroup) {
            return this.entityMeta.ROLES ? this.entityMeta.ROLES.findIndex(function (role) {
              return role.ROLE_ID === formGroup.get('ROLE_ID').value;
            }) !== -1 : false;
          }
        }, {
          key: "onGoToRole",
          value: function onGoToRole(roleID) {
            this.router.navigate(['/model/role', roleID]);
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this65 = this;

            if (this.isNewMode || !this.bypassProtection && this.entityTypeForm && this.entityTypeForm.dirty) {
              var dialogAnswer = this.dialogService.confirm('Discard changes?');
              dialogAnswer.subscribe(function (confirm) {
                if (confirm) {
                  _this65.modelService.sendDialogAnswer('OK');
                } else {
                  _this65.modelService.sendDialogAnswer('CANCEL');
                }
              });
              return dialogAnswer;
            } else {
              return true;
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this66 = this;

            if (!this.entityTypeForm.dirty) {
              return this.messageService.reportMessage('MODEL', 'NO_CHANGE', 'S');
            }

            if (!this.entityTypeForm.valid) {
              return this.messageService.reportMessage('MODEL', 'INVALID_DATA', 'E');
            }

            if (this.isNewMode) {
              this.changedEntityType['action'] = 'add';
              this.changedEntityType['ENTITY_ID'] = this.entityTypeForm.controls['ENTITY_ID'].value;
            } else {
              this.changedEntityType['action'] = 'update';
              this.changedEntityType['ENTITY_ID'] = this.entityMeta.ENTITY_ID;
            }

            if (this.entityTypeForm.controls['ENTITY_DESC'].dirty) {
              this.changedEntityType['ENTITY_DESC'] = this.entityTypeForm.controls['ENTITY_DESC'].value;
            }

            this.changedEntityType['ATTRIBUTES'] = this.attrComponent.processChangedAttributes();

            this._processChangedRoles();

            this.entityService.saveEntityType(this.changedEntityType).subscribe(function (data) {
              return _this66._postActivityAfterSavingEntityType(data);
            });
          }
        }, {
          key: "_processChangedRoles",
          value: function _processChangedRoles() {
            var _this67 = this;

            var changedRoles = [];

            if (this.roleFormArray.dirty) {
              this.changedEntityType['ROLES'] = changedRoles;
              var action; // Add/Update Case

              this.roleFormArray.controls.forEach(function (role) {
                if (role.get('ROLE_ID').value.trim() === '') {
                  return;
                }

                var index = _this67.entityMeta.ROLES.findIndex(function (existRole) {
                  return role.value.ROLE_ID === existRole.ROLE_ID;
                });

                action = index === -1 ? 'add' : 'update';

                if (role.dirty) {
                  var changedRole = {
                    action: action,
                    ROLE_ID: role.value.ROLE_ID
                  };

                  if (role.get('CONDITIONAL_ATTR').dirty) {
                    changedRole['CONDITIONAL_ATTR'] = role.value.CONDITIONAL_ATTR;
                  }

                  if (role.get('CONDITIONAL_VALUE').dirty) {
                    changedRole['CONDITIONAL_VALUE'] = role.value.CONDITIONAL_VALUE;
                  }

                  changedRoles.push(changedRole);
                }
              }); // Deletion Case

              this.entityMeta.ROLES.forEach(function (role) {
                var index = _this67.roleFormArray.controls.findIndex(function (roleControl) {
                  return roleControl.get('ROLE_ID').value === role.ROLE_ID;
                });

                if (index === -1) {
                  var deletedRole = {
                    action: 'delete',
                    ROLE_ID: role.ROLE_ID
                  };
                  changedRoles.push(deletedRole);
                }
              });
            }
          }
        }, {
          key: "_postActivityAfterSavingEntityType",
          value: function _postActivityAfterSavingEntityType(data) {
            var _this68 = this;

            this.changedEntityType = {};

            if (data[0] && data[0]['ENTITY_ID']) {
              if (this.isNewMode) {
                this.isNewMode = false;
                this.bypassProtection = true;
                this.router.navigate(['/model/entity-type/' + data[0]['ENTITY_ID']], {
                  state: {
                    message: this.messageService.generateMessage('MODEL', 'ENTITY_TYPE_SAVED', 'S', data[0]['ENTITY_ID'])
                  }
                });
              } else {
                this.readonly = true;
                this.entityMeta = data[0];
                this.attributes = data[1].ATTRIBUTES;

                this._generateEntityTypeForm();

                this.messageService.reportMessage('MODEL', 'ENTITY_TYPE_SAVED', 'S', this.entityMeta.ENTITY_ID);
              }
            } else {
              if (data instanceof Array) {
                data.forEach(function (err) {
                  return _this68.messageService.add(err);
                });
              } else {
                this.messageService.report(data);
              }
            }
          }
        }, {
          key: "roleFormArray",
          get: function get() {
            return this.entityTypeForm.get('ROLES');
          }
        }, {
          key: "attrFormArray",
          get: function get() {
            return this.entityTypeForm.get('ATTRIBUTES');
          }
        }]);

        return EntityTypeDetailComponent;
      }();

      EntityTypeDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _model_validators__WEBPACK_IMPORTED_MODULE_12__["UniqueEntityTypeValidator"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_10__["ModelService"]
        }, {
          type: _dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]
        }, {
          type: jor_angular__WEBPACK_IMPORTED_MODULE_13__["EntityService"]
        }];
      };

      EntityTypeDetailComponent.propDecorators = {
        attrComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_attribute_meta_attribute_meta_component__WEBPACK_IMPORTED_MODULE_9__["AttributeMetaComponent"], {
            "static": false
          }]
        }],
        searchHelpComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [jor_angular__WEBPACK_IMPORTED_MODULE_13__["SearchHelpComponent"], {
            "static": false
          }]
        }]
      };
      EntityTypeDetailComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-entity-type-detail',
        template: _raw_loader_entity_type_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_entity_type_detail_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _model_validators__WEBPACK_IMPORTED_MODULE_12__["UniqueEntityTypeValidator"], ui_message_angular__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _model_service__WEBPACK_IMPORTED_MODULE_10__["ModelService"], _dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"], jor_angular__WEBPACK_IMPORTED_MODULE_13__["EntityService"]])], EntityTypeDetailComponent);
      /***/
    },

    /***/
    "zIDo":
    /*!**************************************************************!*\
      !*** ./src/app/model/data-element/data-element.component.ts ***!
      \**************************************************************/

    /*! exports provided: DataElementComponent */

    /***/
    function zIDo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataElementComponent", function () {
        return DataElementComponent;
      });
      /* harmony import */


      var _raw_loader_data_element_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./data-element.component.html */
      "7rfw");
      /* harmony import */


      var _data_element_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data-element.component.css */
      "3UNm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../model.service */
      "rkAN");
      /* harmony import */


      var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ui-message-angular */
      "wNXv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var jor_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jor-angular */
      "mE60");
      /* harmony import */


      var _identity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../identity.service */
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

      var DataElementComponent = /*#__PURE__*/function () {
        function DataElementComponent(entityService, modelService, messageService, identityService, route, router) {
          _classCallCheck(this, DataElementComponent);

          this.entityService = entityService;
          this.modelService = modelService;
          this.messageService = messageService;
          this.identityService = identityService;
          this.route = route;
          this.router = router;
          this.dataElementList = [];
          this.isSearchListShown = true;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(DataElementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this69 = this;

            this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (term) {
              return _this69.entityService.listDataElement(term);
            })).subscribe(function (data) {
              _this69.dataElementList = data;
              var elementID;

              if (_this69.route.snapshot.firstChild) {
                elementID = _this69.route.snapshot.firstChild.paramMap.get('elementID');
              }

              if (elementID) {
                if (elementID === 'new') {
                  _this69._newDataElement();
                } else {
                  _this69.onSelect(_this69.dataElementList.find(function (dataEle) {
                    return dataEle.ELEMENT_ID === elementID;
                  }));
                }
              }
            });
            this.searchDataElement(''); // The initial list

            this.modelService.theSelectedDataElement$.subscribe(function (data) {
              if (_this69.theSelectedDataElement) {
                _this69.theSelectedDataElement.ELEMENT_ID = data['ELEMENT_ID'];
                _this69.theSelectedDataElement.ELEMENT_DESC = data['ELEMENT_DESC'];
              }
            });
            this.modelService.dialogAnswer$.subscribe(function (answer) {
              if (answer === 'OK' && _this69.dataElementList[0] && !_this69.dataElementList[0].CREATE_TIME) {
                _this69.dataElementList.splice(0, 1); // Remove the first one.

              } else if (answer === 'CANCEL') {
                var elementID = _this69.route.snapshot.firstChild.paramMap.get('elementID');

                if (elementID) {
                  if (elementID === 'new') {
                    _this69.onSelect(_this69.dataElementList[0]);
                  } else {
                    _this69.onSelect(_this69.dataElementList.find(function (dataElement) {
                      return dataElement.ELEMENT_ID === elementID;
                    }));
                  }
                }
              }
            });
            this.modelService.isSearchListShown$.subscribe(function (data) {
              return _this69.isSearchListShown = data;
            });
          }
        }, {
          key: "hideSearchList",
          value: function hideSearchList() {
            this.isSearchListShown = false;
            this.modelService.hideSearchList();
          }
        }, {
          key: "onSelect",
          value: function onSelect(dataElement) {
            if (dataElement) {
              this.theSelectedDataElement = dataElement;
              this.modelService.setSelectedDataElement(dataElement);
            }
          }
        }, {
          key: "searchDataElement",
          value: function searchDataElement(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "newDataElement",
          value: function newDataElement() {
            if (this.route.snapshot.firstChild && this.route.snapshot.firstChild.paramMap.get('elementID') === 'new') {
              this.messageService.reportMessage('MODEL', 'UNSAVED_NEW', 'E');
            } else {
              this._newDataElement();

              this.router.navigate(['/model/data-element/new']);
            }
          }
        }, {
          key: "_newDataElement",
          value: function _newDataElement() {
            this.theSelectedDataElement = new jor_angular__WEBPACK_IMPORTED_MODULE_8__["DataElementMeta"]();
            this.theSelectedDataElement.ELEMENT_ID = 'new';
            this.theSelectedDataElement.ELEMENT_DESC = 'description';
            this.theSelectedDataElement.VERSION_NO = 1;
            this.theSelectedDataElement.LAST_CHANGE_BY = this.identityService.Session.USER_ID;
            this.theSelectedDataElement.LAST_CHANGE_TIME = this.identityService.CurrentTime;
            this.modelService.setSelectedDataElement(this.theSelectedDataElement);
            this.dataElementList.splice(0, 0, this.theSelectedDataElement);
          }
        }]);

        return DataElementComponent;
      }();

      DataElementComponent.ctorParameters = function () {
        return [{
          type: jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"]
        }, {
          type: _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }, {
          type: ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }, {
          type: _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      DataElementComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-data-element',
        template: _raw_loader_data_element_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_data_element_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }), __metadata("design:paramtypes", [jor_angular__WEBPACK_IMPORTED_MODULE_8__["EntityService"], _model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"], ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"], _identity_service__WEBPACK_IMPORTED_MODULE_9__["IdentityService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], DataElementComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=model-model-module-es5.js.map