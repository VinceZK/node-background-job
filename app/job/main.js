(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+IsF":
/*!*************************************************************************!*\
  !*** ./src/app/job-detail/job-occurrences/job-occurrences.component.ts ***!
  \*************************************************************************/
/*! exports provided: JobOccurrencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobOccurrencesComponent", function() { return JobOccurrencesComponent; });
/* harmony import */ var _job_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../job-types */ "ZmxW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../job.service */ "zbxD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _job_occurrence_detail_job_occurrence_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job-occurrence-detail/job-occurrence-detail.component */ "j/PZ");
/* harmony import */ var _date_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../date.directive */ "C7e6");









const _c0 = function (a0) { return { "active": a0 }; };
function JobOccurrencesComponent_div_1_a_45_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobOccurrencesComponent_div_1_a_45_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const jobOcc_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.showOccurrence(jobOcc_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Scheduled Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Actual Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobOcc_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, jobOcc_r2.uuid === (ctx_r1.jobOccurrence == null ? null : ctx_r1.jobOccurrence.uuid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.occStatusColors[jobOcc_r2.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.occStatuses[jobOcc_r2.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.toLocaleString(jobOcc_r2.scheduledDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.toLocaleString(jobOcc_r2.actualStartDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.toLocaleString(jobOcc_r2.endDateTime));
} }
function JobOccurrencesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobOccurrencesComponent_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r5.status[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobOccurrencesComponent_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r7.status[3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobOccurrencesComponent_div_1_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r8.status[1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobOccurrencesComponent_div_1_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r9.status[4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobOccurrencesComponent_div_1_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r10.status[2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JobOccurrencesComponent_div_1_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r11.status[5] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "From:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function JobOccurrencesComponent_div_1_Template_input_dateChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function JobOccurrencesComponent_div_1_Template_input_dateChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobOccurrencesComponent_div_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, JobOccurrencesComponent_div_1_a_45_Template, 18, 8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.status[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.occStatuses[0], "(", ctx_r0.numOfOccs[0], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.status[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.occStatuses[3], "(", ctx_r0.numOfOccs[3], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.status[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.occStatuses[1], "(", ctx_r0.numOfOccs[1], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.status[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.occStatuses[4], "(", ctx_r0.numOfOccs[4], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.status[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.occStatuses[2], "(", ctx_r0.numOfOccs[2], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.status[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.occStatuses[5], "(", ctx_r0.numOfOccs[5], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("date", ctx_r0.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("date", ctx_r0.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.jobOccurrences);
} }
const _c1 = function (a0, a1) { return { "col-8": a0, "col-12": a1 }; };
class JobOccurrencesComponent {
    constructor(fb, router, messageService, jobService) {
        this.fb = fb;
        this.router = router;
        this.messageService = messageService;
        this.jobService = jobService;
        this.mode = 0;
        this.isSearchListShown = true;
        this.status = [true, true, true, true, true, true];
        this.numOfOccs = [0, 0, 0, 0, 0, 0];
        this.occStatuses = [];
        this.occStatusColors = [];
        this.occStatuses = this.jobService.occStatuses;
        this.occStatusColors = this.jobService.occStatusColors;
    }
    ngOnInit() {
        var _a;
        this.mode = (_a = this.mainForm.get('mode')) === null || _a === void 0 ? void 0 : _a.value;
        if (this.mode >= 2 && !this.displayStatistics) { // On set start and end dates for recursive and event-based jobs.
            const now = new Date();
            this.startDate = new Date();
            this.endDate = new Date();
            this.startDate.setDate(now.getDate() - 15);
            this.endDate.setDate(now.getDate() + 15);
        }
        switch (this.displayStatistics) {
            case 'displayFinished':
                this.status = [false, false, false, true, false, false];
                break;
            case 'displayFailed':
                this.status = [false, false, false, false, true, false];
                break;
            case 'displayCanceled':
                this.status = [false, false, false, false, false, true];
                break;
            default:
        }
        this.search();
    }
    search() {
        var _a;
        const jobName = (_a = this.mainForm.get('name')) === null || _a === void 0 ? void 0 : _a.value;
        if (!jobName) {
            return;
        }
        const statusArray = [];
        let startDate = '';
        let endDate = '';
        if (this.mode >= 2) {
            this.status.forEach((value, index) => {
                if (value) {
                    statusArray.push(index);
                }
            });
            if (this.startDate) {
                startDate = this.startDate.toISOString().slice(0, 19).replace('T', ' ');
            }
            if (this.endDate) {
                endDate = this.endDate.toISOString().slice(0, 19).replace('T', ' ');
            }
        }
        this.jobService.searchJobOccurrences(jobName, statusArray, startDate, endDate)
            .subscribe(data => {
            this.jobOccurrences = data;
            if (this.jobOccurrences.length === 0) {
                return;
            }
            this.isSearchListShown = this.mode >= 2;
            this.numOfOccs = [0, 0, 0, 0, 0, 0];
            this.jobOccurrences.forEach(occ => this.numOfOccs[occ.status]++);
            if (this.numOfOccs[0] === 51) {
                this.numOfOccs[0] = '50+';
            }
            this.showOccurrence(this.jobOccurrences[0]);
        });
    }
    showOccurrence(jobOccurrence) {
        var _a;
        if (((_a = this.jobOccurrence) === null || _a === void 0 ? void 0 : _a.uuid) === jobOccurrence.uuid) {
            return;
        }
        if (jobOccurrence.status === 0) { // Initial
            const job = this.mainForm.getRawValue();
            this.jobOccurrence = new _job_types__WEBPACK_IMPORTED_MODULE_0__["JobOccurrence"]();
            this.jobOccurrence.uuid = jobOccurrence.uuid;
            this.jobOccurrence.status = jobOccurrence.status;
            this.jobOccurrence.jobName = jobOccurrence.jobName;
            this.jobOccurrence.scheduledDateTime = jobOccurrence.scheduledDateTime;
            this.jobOccurrence.actualStartDateTime = '';
            this.jobOccurrence.endDateTime = '';
            this.jobOccurrence.identity = job.identity;
            this.jobOccurrence.steps = job.steps;
            this.jobOccurrence.startCondition = job.startCondition;
            this.jobOccurrence.outputSetting = job.outputSetting;
            this.jobOccurrence.applicationLog = [];
            return;
        }
        this.jobService.getOccurrence(jobOccurrence.uuid).subscribe(data => {
            if ('uuid' in data) {
                this.jobOccurrence = data;
            }
            else {
                const errorMessages = data;
                errorMessages.forEach(msg => this.messageService.add(msg));
            }
        });
    }
    toLocaleString(dateStr) {
        return this.jobService.toLocaleString(dateStr);
    }
}
JobOccurrencesComponent.ɵfac = function JobOccurrencesComponent_Factory(t) { return new (t || JobOccurrencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"])); };
JobOccurrencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobOccurrencesComponent, selectors: [["app-job-occurrences"]], inputs: { readonly: "readonly", mainForm: "mainForm", displayStatistics: "displayStatistics" }, decls: 4, vars: 6, consts: [[1, "row"], ["class", "col-4", 4, "ngIf"], [3, "ngClass"], [3, "jobOccurrence"], [1, "col-4"], [1, "row", "mb-2"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "statusInitial", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "statusInitial", 1, "form-check-label", 3, "ngClass"], ["type", "checkbox", "id", "statusFinished", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "statusFinished", 1, "form-check-label", 3, "ngClass"], ["type", "checkbox", "id", "statusReady", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "statusReady", 1, "form-check-label", 3, "ngClass"], ["type", "checkbox", "id", "statusFailed", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "statusFailed", 1, "form-check-label", 3, "ngClass"], ["type", "checkbox", "id", "statusRunning", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "statusRunning", 1, "form-check-label", 3, "ngClass"], ["type", "checkbox", "id", "statusCanceled", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "statusCanceled", 1, "form-check-label", 3, "ngClass"], [1, "row", "ml-2", "mt-2"], [1, "col-10"], [1, "form-group", "row"], ["for", "startFrom", 1, "col-sm-2", "col-form-label", "col-form-label-sm"], [1, "col-sm-10"], ["id", "startFrom", "name", "startFrom", "type", "datetime-local", 1, "form-control", "form-control-sm", 3, "date", "dateChange"], ["for", "endAt", 1, "col-sm-2", "col-form-label", "col-form-label-sm"], ["id", "endAt", "name", "endAt", "type", "datetime-local", 1, "form-control", "form-control-sm", 3, "date", "dateChange"], [1, "col-2", "form-group"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "position-absolute", "fixed-bottom", 3, "click"], [1, "list-group", "dk-scroll-list"], ["class", "list-group-item list-group-item-action flex-column align-items-start", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", 3, "ngClass", "click"], [1, "mb-1", 3, "ngClass"], [1, "col-sm-6"]], template: function JobOccurrencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JobOccurrencesComponent_div_1_Template, 46, 27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-job-occurrence-detail", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSearchListShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx.isSearchListShown, !ctx.isSearchListShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("jobOccurrence", ctx.jobOccurrence);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _job_occurrence_detail_job_occurrence_detail_component__WEBPACK_IMPORTED_MODULE_7__["JobOccurrenceDetailComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _date_directive__WEBPACK_IMPORTED_MODULE_8__["DateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".dk-scroll-list[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 60vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1vY2N1cnJlbmNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJqb2Itb2NjdXJyZW5jZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1zY3JvbGwtbGlzdCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiA2MHZoO1xufVxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/VinceZK/workspace/javascript/node-background-job/src/main.ts */"zUnb");


/***/ }),

/***/ "3Sam":
/*!***********************************************************************!*\
  !*** ./src/app/job-detail/job-parameters/job-parameters.component.ts ***!
  \***********************************************************************/
/*! exports provided: JobParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobParametersComponent", function() { return JobParametersComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function JobParametersComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](group_r1.label);
} }
function JobParametersComponent_div_0_div_4_dk_app_attribute_form2_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "dk-app-attribute-form2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function JobParametersComponent_div_0_div_4_dk_app_attribute_form2_1_Template_dk_app_attribute_form2_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r8.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("attributeControl", parameter_r5["attributeControl"])("formGroup", ctx_r6.paramFormGroup)("readonly", ctx_r6.readonly || parameter_r5["paramDefinition"].readOnly)("isSmallSize", true);
} }
function JobParametersComponent_div_0_div_4_dk_app_attribute_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "dk-app-attribute", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function JobParametersComponent_div_0_div_4_dk_app_attribute_2_Template_dk_app_attribute_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r11.onChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("attributeControl", parameter_r5["attributeControl"])("formGroup", ctx_r7.paramFormGroup)("readonly", ctx_r7.readonly || parameter_r5["paramDefinition"].readOnly)("isSmallSize", true);
} }
const _c0 = function (a0) { return { "display": a0 }; };
function JobParametersComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JobParametersComponent_div_0_div_4_dk_app_attribute_form2_1_Template, 1, 4, "dk-app-attribute-form2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, JobParametersComponent_div_0_div_4_dk_app_attribute_2_Template, 1, 4, "dk-app-attribute", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("className", "col-" + parameter_r5["paramDefinition"].columnSpan)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, parameter_r5["paramDefinition"].hidden ? "none" : "block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !parameter_r5["paramDefinition"]["hideLabel"] && parameter_r5["attributeControl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", parameter_r5["paramDefinition"]["hideLabel"] && parameter_r5["attributeControl"]);
} }
function JobParametersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JobParametersComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, JobParametersComponent_div_0_div_4_Template, 3, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", group_r1["displayIn"] === "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("row", group_r1["displayIn"] === "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.getGroupParameters(group_r1.name));
} }
class JobParametersComponent {
    constructor(fb, entityService, messageService, attributeControlService) {
        this.fb = fb;
        this.entityService = entityService;
        this.messageService = messageService;
        this.attributeControlService = attributeControlService;
        this.groups = [];
        this.parameters = [];
        this.boolExpressions = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        var _a, _b, _c;
        this.groups = [];
        this.parameters = [];
        this.paramFormGroup = this.fb.group({});
        if (!this.parameterDefinitions) {
            return;
        }
        for (const [groupName, parameterDefinition] of Object.entries(this.parameterDefinitions)) {
            this.groups.push({
                name: groupName,
                label: (_a = parameterDefinition.text) === null || _a === void 0 ? void 0 : _a.DEFAULT,
                displayIn: parameterDefinition.displayIn,
            });
            for (const [paramName, paramDefinition] of Object.entries(parameterDefinition.parameters)) {
                const parameter = {
                    name: paramName,
                    paramDefinition,
                    group: groupName,
                    attributeControl: new jor_angular__WEBPACK_IMPORTED_MODULE_1__["AttributeBase"]()
                };
                // evaluate boolean expression
                this.registerBoolExpressions(paramName, paramDefinition);
                // get the parameter values
                const paramValueStr = (_b = this.currentJobStep.get('parameters')) === null || _b === void 0 ? void 0 : _b.value;
                let paramValues = {};
                try {
                    if (paramValueStr && typeof paramValueStr === 'string') {
                        paramValues = JSON.parse(paramValueStr);
                    }
                    else {
                        paramValues = paramValueStr;
                    }
                }
                catch (e) {
                    this.messageService.reportMessage('JOB', 'GENERAL', 'E', e.message);
                }
                // @ts-ignore
                const paramValue = paramValues[paramName] || paramDefinition.defaultValue;
                if (paramDefinition.mandatory) {
                    this.paramFormGroup.addControl(paramName, this.fb.control(paramValue, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required));
                }
                else {
                    this.paramFormGroup.addControl(paramName, this.fb.control(paramValue));
                }
                // parameter visualization
                if (paramDefinition.dataElement) {
                    this.entityService.getElementMeta(paramDefinition.dataElement)
                        .subscribe(attrCtrl => {
                        var _a, _b;
                        const attribute = attrCtrl;
                        attribute.ATTR_GUID = paramName;
                        attribute.ATTR_NAME = paramName;
                        attribute.DATA_ELEMENT = paramDefinition.dataElement;
                        attribute.PRIMARY_KEY = paramDefinition.mandatory;
                        if (((_a = paramDefinition.text) === null || _a === void 0 ? void 0 : _a.DEFAULT) !== paramName) {
                            attribute.LABEL_TEXT = (_b = paramDefinition.text) === null || _b === void 0 ? void 0 : _b.DEFAULT;
                        }
                        // @ts-ignore
                        parameter.attributeControl = this.attributeControlService.toSingleAttributeControl(attribute);
                        this.adjustAttributeControl(parameter.attributeControl, paramDefinition);
                        this.parameters.push(parameter);
                    });
                }
                else {
                    const paramAttribute = new jor_angular__WEBPACK_IMPORTED_MODULE_1__["Attribute"]();
                    paramAttribute.ATTR_GUID = paramName;
                    paramAttribute.ATTR_NAME = paramName;
                    paramAttribute.LABEL_TEXT = paramAttribute.LIST_HEADER_TEXT = (_c = paramDefinition.text) === null || _c === void 0 ? void 0 : _c.DEFAULT;
                    paramAttribute.DATA_TYPE = paramDefinition.type || 1; // 1 = Char
                    paramAttribute.PRIMARY_KEY = paramDefinition.mandatory;
                    // @ts-ignore
                    parameter.attributeControl = this.attributeControlService.toSingleAttributeControl(paramAttribute);
                    this.adjustAttributeControl(parameter.attributeControl, paramDefinition);
                    this.parameters.push(parameter);
                }
            }
        }
        // evaluate boolean expressions
        this.evaluateBoolExpressions();
    }
    adjustAttributeControl(attributeControl, paramDefinition) {
        if (paramDefinition.pattern) {
            attributeControl.pattern = paramDefinition.pattern;
        }
        switch (paramDefinition.displayAs) {
            case 'dropdown':
                // @ts-ignore
                attributeControl.controlType = 'dropdown';
                attributeControl.dropdownList = [];
                // @ts-ignore
                for (const [key, value] of Object.entries(paramDefinition.domain)) {
                    // @ts-ignore
                    attributeControl.dropdownList.push({ key, value: value.DEFAULT });
                }
                break;
            case 'password':
                attributeControl.controlType = 'password';
                break;
            case 'text':
                attributeControl.controlType = 'textarea';
                attributeControl.rows = 3;
                break;
            default:
        }
    }
    registerBoolExpressions(paramName, paramDefinition) {
        if (paramDefinition.readOnly && typeof paramDefinition.readOnly !== 'boolean') {
            this.boolExpressions.push({
                paramName,
                attribute: 'readOnly',
                expression: paramDefinition.readOnly
            });
        }
        if (paramDefinition.hidden && typeof paramDefinition.hidden !== 'boolean') {
            this.boolExpressions.push({
                paramName,
                attribute: 'hidden',
                expression: paramDefinition.hidden
            });
        }
    }
    getGroupParameters(groupName) {
        return this.parameters.filter(param => param.group === groupName);
    }
    generateParamValues() {
        var _a;
        if (this.paramFormGroup.invalid) {
            this.messageService.reportMessage('JOB', 'INVALID_PARAMETER_VALUE', 'E');
            return false;
        }
        if (this.paramFormGroup.dirty) {
            (_a = this.currentJobStep.get('parameters')) === null || _a === void 0 ? void 0 : _a.setValue(JSON.stringify(this.paramFormGroup.getRawValue()));
            this.currentJobStep.markAsDirty();
        }
        return true;
    }
    onChange($event) {
        this.evaluateBoolExpressions();
    }
    evaluateBoolExpressions() {
        const parameters = this.paramFormGroup.getRawValue();
        this.boolExpressions.forEach(boolExpr => {
            var _a;
            const parameter = this.parameters.filter(param => param.name === boolExpr.paramName)[0];
            if (!parameter) {
                return;
            }
            const bool = evaluateBoolExpression(boolExpr.expression);
            if (parameter.paramDefinition[boolExpr.attribute] !== bool) {
                parameter.paramDefinition[boolExpr.attribute] = bool;
                (_a = this.paramFormGroup.get(boolExpr.paramName)) === null || _a === void 0 ? void 0 : _a.setValue('');
            }
        });
        function evaluateBoolExpression(expression) {
            const str = '"use strict";return ( function(parameters) { return (' + expression + ') } );';
            return Function(str)()(parameters);
        }
    }
}
JobParametersComponent.ɵfac = function JobParametersComponent_Factory(t) { return new (t || JobParametersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_3__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_1__["AttributeControlService"])); };
JobParametersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JobParametersComponent, selectors: [["app-job-parameters"]], inputs: { parameterDefinitions: "parameterDefinitions", currentJobStep: "currentJobStep", readonly: "readonly" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "card mt-2", 4, "ngFor", "ngForOf"], [1, "card", "mt-2"], ["class", "card-header", 4, "ngIf"], [1, "card-body"], [3, "className", "ngStyle", 4, "ngFor", "ngForOf"], [1, "card-header"], [3, "className", "ngStyle"], [3, "attributeControl", "formGroup", "readonly", "isSmallSize", "change", 4, "ngIf"], [3, "attributeControl", "formGroup", "readonly", "isSmallSize", "change"]], template: function JobParametersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, JobParametersComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.groups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], jor_angular__WEBPACK_IMPORTED_MODULE_1__["AttributeForm2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], jor_angular__WEBPACK_IMPORTED_MODULE_1__["AttributeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItcGFyYW1ldGVycy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "4J20":
/*!******************************************!*\
  !*** ./src/app/work-protection.guard.ts ***!
  \******************************************/
/*! exports provided: WorkProtectionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkProtectionGuard", function() { return WorkProtectionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WorkProtectionGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
WorkProtectionGuard.ɵfac = function WorkProtectionGuard_Factory(t) { return new (t || WorkProtectionGuard)(); };
WorkProtectionGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkProtectionGuard, factory: WorkProtectionGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7qF7":
/*!*********************************************************************************!*\
  !*** ./src/app/job-detail/job-start-condition/job-start-condition.component.ts ***!
  \*********************************************************************************/
/*! exports provided: JobStartConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStartConditionComponent", function() { return JobStartConditionComponent; });
/* harmony import */ var _job_recursive_schedule_job_recursive_schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-recursive-schedule/job-recursive-schedule.component */ "WPXZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _date_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../date.directive */ "C7e6");






function JobStartConditionComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Job will start at the given datetime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function JobStartConditionComponent_div_15_Template_input_dateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.specificTime = $event; })("dateChange", function JobStartConditionComponent_div_15_Template_input_dateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onChangeSpecificDate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r0.readonly)("date", ctx_r0.specificTime);
} }
function JobStartConditionComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Job starts recursively with the given rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-job-recursive-schedule", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("startConditionForm", ctx_r1.jobStartConditionFormGroup)("readonly", ctx_r1.readonly)("hasSimulation", ctx_r1.hasSimulation);
} }
class JobStartConditionComponent {
    constructor() { }
    ngOnInit() {
        var _a;
        this.jobStartConditionFormGroup = this.mainForm.get('startCondition');
        this.specificTime = new Date(((_a = this.jobStartConditionFormGroup.get('specificTime')) === null || _a === void 0 ? void 0 : _a.value) + ' UTC');
    }
    updateMainForm() {
        const modeCtrl = this.jobStartConditionFormGroup.get('mode');
        if ((modeCtrl === null || modeCtrl === void 0 ? void 0 : modeCtrl.value) === 2) {
            this.jobRecursiveScheduleComponent.updateMainForm();
        }
    }
    onChangeSpecificDate(newDate) {
        var _a, _b;
        const mySQLDateStr = newDate.toISOString().slice(0, 19).replace('T', ' ');
        (_a = this.jobStartConditionFormGroup.get('specificTime')) === null || _a === void 0 ? void 0 : _a.setValue(mySQLDateStr);
        (_b = this.jobStartConditionFormGroup.get('specificTime')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
    }
    onChangeMode() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const modeCtrl = this.jobStartConditionFormGroup.get('mode');
        (_a = this.mainForm.get('mode')) === null || _a === void 0 ? void 0 : _a.setValue(modeCtrl === null || modeCtrl === void 0 ? void 0 : modeCtrl.value);
        switch (modeCtrl === null || modeCtrl === void 0 ? void 0 : modeCtrl.value) {
            case 0:
                (_b = this.jobStartConditionFormGroup.get('specificTime')) === null || _b === void 0 ? void 0 : _b.setValue(null);
                (_c = this.jobStartConditionFormGroup.get('cronString')) === null || _c === void 0 ? void 0 : _c.setValue(null);
                (_d = this.jobStartConditionFormGroup.get('cronCurrentDate')) === null || _d === void 0 ? void 0 : _d.setValue(null);
                (_e = this.jobStartConditionFormGroup.get('cronEndDate')) === null || _e === void 0 ? void 0 : _e.setValue(null);
                (_f = this.jobStartConditionFormGroup.get('tz')) === null || _f === void 0 ? void 0 : _f.setValue(null);
                break;
            case 1:
                (_g = this.jobStartConditionFormGroup.get('cronString')) === null || _g === void 0 ? void 0 : _g.setValue(null);
                (_h = this.jobStartConditionFormGroup.get('cronCurrentDate')) === null || _h === void 0 ? void 0 : _h.setValue(null);
                (_j = this.jobStartConditionFormGroup.get('cronEndDate')) === null || _j === void 0 ? void 0 : _j.setValue(null);
                (_k = this.jobStartConditionFormGroup.get('tz')) === null || _k === void 0 ? void 0 : _k.setValue(null);
                break;
            case 2:
                (_l = this.jobStartConditionFormGroup.get('specificTime')) === null || _l === void 0 ? void 0 : _l.setValue(null);
                break;
            case 3:
                break;
        }
    }
}
JobStartConditionComponent.ɵfac = function JobStartConditionComponent_Factory(t) { return new (t || JobStartConditionComponent)(); };
JobStartConditionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobStartConditionComponent, selectors: [["app-job-start-condition"]], viewQuery: function JobStartConditionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_job_recursive_schedule_job_recursive_schedule_component__WEBPACK_IMPORTED_MODULE_0__["JobRecursiveScheduleComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.jobRecursiveScheduleComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm", hasSimulation: "hasSimulation" }, decls: 17, vars: 7, consts: [[1, "container-fluid", 3, "formGroup"], [1, "mb-2"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "mode", "id", "ImmediatelyMode", "formControlName", "mode", 1, "form-check-input", 3, "value", "change"], ["for", "ImmediatelyMode", 1, "form-check-label"], ["type", "radio", "name", "mode", "id", "SpecificTimeMode", "formControlName", "mode", 1, "form-check-input", 3, "value", "change"], ["for", "SpecificTimeMode", 1, "form-check-label"], ["type", "radio", "name", "mode", "id", "RecursivelyMode", "formControlName", "mode", 1, "form-check-input", 3, "value", "change"], ["for", "RecursivelyMode", 1, "form-check-label"], [1, "mt-2", 3, "ngSwitch"], ["class", "card", 4, "ngSwitchCase"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "form-group", "row", "col-6"], ["id", "startFrom", "name", "startFrom", "type", "datetime-local", 1, "form-control", 3, "readOnly", "date", "dateChange"], [3, "startConditionForm", "readonly", "hasSimulation"]], template: function JobStartConditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function JobStartConditionComponent_Template_input_change_3_listener() { return ctx.onChangeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Immediately");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function JobStartConditionComponent_Template_input_change_7_listener() { return ctx.onChangeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "At Specific Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function JobStartConditionComponent_Template_input_change_11_listener() { return ctx.onChangeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Recursively");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, JobStartConditionComponent_div_15_Template, 7, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, JobStartConditionComponent_div_16_Template, 5, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.jobStartConditionFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", (tmp_4_0 = ctx.jobStartConditionFormGroup.get("mode")) == null ? null : tmp_4_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", 2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _date_directive__WEBPACK_IMPORTED_MODULE_4__["DateDirective"], _job_recursive_schedule_job_recursive_schedule_component__WEBPACK_IMPORTED_MODULE_0__["JobRecursiveScheduleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2Itc3RhcnQtY29uZGl0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Aa57":
/*!****************************************************!*\
  !*** ./src/app/job-detail/job-detail.component.ts ***!
  \****************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _async_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../async-validators */ "QLkK");
/* harmony import */ var _job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-start-condition/job-start-condition.component */ "7qF7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog.service */ "Cw5F");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../job.service */ "zbxD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _job_steps_job_steps_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job-steps/job-steps.component */ "lxnR");
/* harmony import */ var _job_occurrences_job_occurrences_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./job-occurrences/job-occurrences.component */ "+IsF");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "qHae");

















function JobDetailComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobDetailComponent_button_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobDetailComponent_button_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobDetailComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.switchEditDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, JobDetailComponent_button_9_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, JobDetailComponent_button_9_span_2_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.readonly);
} }
function JobDetailComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.cancelJob(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobDetailComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.schedule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobDetailComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobDetailComponent_div_17_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_div_17_li_28_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r21.switchTabStrip(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r16.tabStrip === 4);
} }
function JobDetailComponent_div_17_app_job_steps_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-job-steps", 62);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r17.mainForm)("readonly", ctx_r17.readonly);
} }
function JobDetailComponent_div_17_app_job_start_condition_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-job-start-condition", 63);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r18.mainForm)("readonly", ctx_r18.readonly)("hasSimulation", true);
} }
function JobDetailComponent_div_17_app_job_occurrences_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-job-occurrences", 64);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r19.mainForm)("displayStatistics", ctx_r19.displayStatistics)("readonly", ctx_r19.readonly);
} }
function JobDetailComponent_div_17_app_admin_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-admin", 65);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mainForm", ctx_r20.mainForm);
} }
function JobDetailComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, JobDetailComponent_div_17_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Job Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Job Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_div_17_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.switchTabStrip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_div_17_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.switchTabStrip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Start Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_div_17_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.switchTabStrip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Occurrence");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, JobDetailComponent_div_17_li_28_Template, 3, 2, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, JobDetailComponent_div_17_app_job_steps_30_Template, 1, 2, "app-job-steps", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, JobDetailComponent_div_17_app_job_start_condition_31_Template, 1, 3, "app-job-start-condition", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, JobDetailComponent_div_17_app_job_occurrences_32_Template, 1, 3, "app-job-occurrences", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, JobDetailComponent_div_17_app_admin_33_Template, 1, 1, "app-admin", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0 = null;
    let tmp_3_0 = null;
    let tmp_7_0 = null;
    let tmp_8_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.workInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ng-invalid", (tmp_2_0 = ctx_r4.mainForm.get("name")) == null ? null : tmp_2_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r4.mainForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx_r4.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.textForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx_r4.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r4.jobStatusColors[(tmp_7_0 = ctx_r4.mainForm.get("status")) == null ? null : tmp_7_0.value]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.jobStatuses[(tmp_8_0 = ctx_r4.mainForm.get("status")) == null ? null : tmp_8_0.value]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r4.tabStrip === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Steps(", ctx_r4.numberOfSteps, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r4.tabStrip === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r4.tabStrip === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.mainForm.get("createdBy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx_r4.tabStrip);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 4);
} }
const _c0 = function (a0) { return { "display": a0 }; };
class JobDetailComponent {
    constructor(fb, route, router, dialogService, jobService, messageService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dialogService = dialogService;
        this.jobService = jobService;
        this.messageService = messageService;
        this.readonly = true;
        this.isNewMode = false;
        this.tabStrip = 1;
        this.workInProgress = false;
        this.showScheduleConfirmation = false;
        this.showChangeConfirmation = false;
        this.showCancelConfirmation = false;
        this.displayStatistics = '';
        this.jobStatuses = this.jobService.jobStatuses;
        this.jobStatusColors = this.jobService.jobStatusColors;
    }
    get numberOfSteps() {
        const stepsArray = this.mainForm.get('steps');
        return stepsArray.length;
    }
    get displayScheduleConfirmation() { return this.showScheduleConfirmation ? 'block' : 'none'; }
    get displayChangeConfirmation() { return this.showChangeConfirmation ? 'block' : 'none'; }
    get displayCancelConfirmation() { return this.showCancelConfirmation ? 'block' : 'none'; }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((params) => {
            this.action = params.get('action');
            if (this.action === 'new') {
                this.isNewMode = true;
                return this._createNewEntity();
            }
            else {
                this.isNewMode = false;
                if (this.action === 'displayFinished' || this.action === 'displayFailed' || this.action === 'displayCanceled') {
                    this.tabStrip = 3;
                    this.displayStatistics = this.action;
                }
                return this.jobService.getJob(params.get('name'));
            }
        })).subscribe(data => {
            if ('name' in data) {
                this._generateMainForm(data);
                if (this.isNewMode || this.action === 'change') {
                    this._switch2EditMode();
                }
                else {
                    this._switch2DisplayMode();
                }
            }
            else {
                // @ts-ignore
                const errorMessages = data;
                if (errorMessages && Array.isArray(errorMessages)) {
                    errorMessages.forEach(msg => this.messageService.add(msg));
                }
            }
        });
    }
    switchTabStrip(tabStripID) {
        if (this.tabStrip === 2) {
            this.jobStartConditionComponent.updateMainForm();
            if (this.mainForm.invalid) {
                this.messageService.reportMessage('JOB', 'INVALID', 'E');
                return;
            }
        }
        this.tabStrip = tabStripID;
    }
    return2List() {
        this.router.navigate(['jobs']);
    }
    refresh() {
        this.messageService.clearMessages();
        this.jobService.getJobStatus(this.originalValue.name)
            .subscribe(status => {
            var _a, _b;
            const currentStatus = (_a = this.mainForm.get('status')) === null || _a === void 0 ? void 0 : _a.value;
            if (status !== null && currentStatus === 1) {
                (_b = this.mainForm.get('status')) === null || _b === void 0 ? void 0 : _b.setValue(status);
                if (this.tabStrip === 3) {
                    this.tabStrip = 0;
                    setTimeout(() => { this.tabStrip = 3; }, 200);
                }
            }
        });
    }
    switchEditDisplay() {
        if (this.readonly) {
            this._switch2EditMode();
        }
        else {
            if (this.mainForm.dirty) {
                this.dialogService.confirm('Discard changes?').subscribe(confirm => {
                    if (confirm) {
                        this.mainForm.reset(this.originalValue);
                        this._switch2DisplayMode();
                    }
                });
            }
            else {
                this._switch2DisplayMode();
            }
        }
        this.messageService.clearMessages();
    }
    _switch2DisplayMode() {
        var _a, _b;
        this.readonly = true;
        this.isNewMode = false;
        const jobNameCtrl = this.mainForm.get('name');
        jobNameCtrl.clearAsyncValidators();
        const startConditionCtrl = this.mainForm.get('startCondition');
        (_a = startConditionCtrl.get('mode')) === null || _a === void 0 ? void 0 : _a.disable();
        const outputSettingCtrl = this.mainForm.get('outputSetting');
        (_b = outputSettingCtrl.get('console2ApplicationLog')) === null || _b === void 0 ? void 0 : _b.disable();
        this.mainForm.markAsPristine();
        // Replace the URL from change to display
        window.history.replaceState({}, '', `/jobs/${jobNameCtrl.value};action=display`);
    }
    _switch2EditMode() {
        var _a, _b;
        this.readonly = false;
        const jobNameCtrl = this.mainForm.get('name');
        if (this.isNewMode) {
            jobNameCtrl.setAsyncValidators(Object(_async_validators__WEBPACK_IMPORTED_MODULE_4__["existingJobNameValidator"])(this.jobService, this.messageService));
        }
        const startConditionCtrl = this.mainForm.get('startCondition');
        (_a = startConditionCtrl.get('mode')) === null || _a === void 0 ? void 0 : _a.enable();
        const outputSettingCtrl = this.mainForm.get('outputSetting');
        (_b = outputSettingCtrl.get('console2ApplicationLog')) === null || _b === void 0 ? void 0 : _b.enable();
        // Replace the URL from to display
        if (this.action === 'display') {
            this.action = 'change';
        }
        window.history.replaceState({}, '', `/jobs/${jobNameCtrl.value};action=` + this.action);
    }
    _createNewEntity() {
        const jobDetail = {
            name: '', status: 0, mode: 0,
            description: { DEFAULT: '' },
            identity: { id: '' },
            steps: [],
            startCondition: { mode: 0, specificTime: null, cronString: null, cronCurrentDate: null, cronEndDate: null,
                tz: Intl.DateTimeFormat().resolvedOptions().timeZone },
            outputSetting: { console2ApplicationLog: false }
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(jobDetail);
    }
    _generateMainForm(data) {
        var _a;
        this.mainForm = this.fb.group({
            name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            status: [data.status],
            mode: [data.mode],
            finishedOccurrences: [data.finishedOccurrences],
            failedOccurrences: [data.failedOccurrences],
            canceledOccurrences: [data.canceledOccurrences],
            createdBy: [data.createdBy],
            createTime: [this.jobService.toLocaleString(data.createTime)],
            lastChangedBy: [data.lastChangedBy],
            lastChangeTime: [this.jobService.toLocaleString(data.lastChangeTime)],
            startCondition: this.fb.group({
                mode: [data.startCondition.mode],
                specificTime: [data.startCondition.specificTime],
                cronString: [data.startCondition.cronString],
                cronCurrentDate: [data.startCondition.cronCurrentDate],
                cronEndDate: [data.startCondition.cronEndDate],
                tz: [data.startCondition.tz],
            }),
            outputSetting: this.fb.group({
                console2ApplicationLog: [(_a = data.outputSetting) === null || _a === void 0 ? void 0 : _a.console2ApplicationLog]
            })
        });
        this.textForm = this.fb.group({});
        if (!data.description) {
            data.description = { DEFAULT: '' };
        }
        for (const [key, value] of Object.entries(data.description)) {
            this.textForm.addControl(key, this.fb.control(value));
        }
        this.mainForm.addControl('description', this.textForm);
        this.mainForm.addControl('identity', this.fb.group({
            id: [data.identity ? data.identity.id : '']
        }));
        this.mainForm.addControl('steps', 
        // @ts-ignore
        this.fb.array(data.steps.map(step => this.fb.group({
            program: [step.program],
            parameters: [step.parameters]
        }))));
        this.originalValue = this.mainForm.getRawValue();
    }
    save(needConfirm = true) {
        this.messageService.clearMessages();
        if (needConfirm && !this.isNewMode) {
            this.showChangeConfirmation = true;
            return;
        }
        this.workInProgress = true;
        if (this._composeChanges()) {
            this.jobService.saveJob(this.isNewMode, this.changedValue).subscribe(data => {
                const messages = data;
                messages.forEach(msg => this.messageService.add(msg));
                if (messages[0].msgName === 'JOB_IS_SAVED') {
                    this._retrieveUpdatedValue();
                    if (this.isNewMode) {
                        this.showScheduleConfirmation = true;
                    }
                }
                this.workInProgress = false;
            });
        }
    }
    change() {
        this.save(false);
        this.showChangeConfirmation = false;
    }
    cancelChange() {
        this.showChangeConfirmation = false;
    }
    schedule() {
        var _a;
        this.messageService.clearMessages();
        this.workInProgress = true;
        this.jobService.scheduleJobs([(_a = this.mainForm.get('name')) === null || _a === void 0 ? void 0 : _a.value]).subscribe(data => {
            const messages = data;
            messages.forEach(msg => this.messageService.add(msg));
            if (messages[0].msgName === 'JOB_IS_SCHEDULED') {
                this._retrieveUpdatedValue();
            }
            this.workInProgress = false;
            this.showScheduleConfirmation = false;
        });
    }
    cancelSchedule() {
        this.showScheduleConfirmation = false;
    }
    cancelJob() {
        this.showCancelConfirmation = true;
    }
    cancelCancelJob() {
        this.showCancelConfirmation = false;
    }
    confirmCancelJob() {
        var _a;
        this.jobService.cancelJobs([(_a = this.mainForm.get('name')) === null || _a === void 0 ? void 0 : _a.value])
            .subscribe(data => {
            this.showCancelConfirmation = false;
            const messages = data;
            messages.forEach(msg => this.messageService.add(msg));
            this.refresh();
        });
    }
    _composeChanges() {
        var _a;
        (_a = this.jobStartConditionComponent) === null || _a === void 0 ? void 0 : _a.updateMainForm();
        if (this.mainForm.invalid) {
            this.messageService.reportMessage('JOB', 'INVALID', 'E');
            return false;
        }
        if (!this.mainForm.dirty) {
            this.messageService.reportMessage('JOB', 'NO_CHANGE', 'W');
            return false;
        }
        const stepsFormArray = this.mainForm.get('steps');
        if (stepsFormArray.length === 0) {
            this.messageService.reportMessage('JOB', 'NO_STEPS', 'E');
            return false;
        }
        this.changedValue = this.mainForm.getRawValue();
        // console.log(this.changedValue);
        return true;
    }
    _retrieveUpdatedValue() {
        var _a;
        // tslint:disable-next-line:no-shadowed-variable
        this.jobService.getJob((_a = this.mainForm.get('name')) === null || _a === void 0 ? void 0 : _a.value).subscribe(data => {
            if (data instanceof ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["Message"]) {
                this.messageService.add(data);
            }
            else {
                this._switch2DisplayMode();
                this.originalValue = data;
                this.mainForm.reset(this.originalValue);
            }
        });
    }
    canDeactivate() {
        if (this.isNewMode || (this.mainForm && this.mainForm.dirty)) {
            return this.dialogService.confirm('Discard changes?');
        }
        else {
            return true;
        }
    }
}
JobDetailComponent.ɵfac = function JobDetailComponent_Factory(t) { return new (t || JobDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_9__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
JobDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: JobDetailComponent, selectors: [["app-job-detail"]], viewQuery: function JobDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_5__["JobStartConditionComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.jobStartConditionComponent = _t.first);
    } }, decls: 71, vars: 22, consts: [[1, "navbar", "dk-fixed-top", "navbar-light", "bg-light"], [1, "font-weight-bold", "mb-0", "mx-1"], [1, "flex-row-reverse"], ["class", "btn btn-sm btn-light mr-2", "type", "button", "title", "Return to List", "id", "refresh", 3, "click", 4, "ngIf"], ["type", "button", "title", "Return to List", "id", "toList", 1, "btn", "btn-sm", "btn-outline-info", "mr-2", 3, "click"], [1, "fas", "fa-list-ul"], ["class", "btn btn-sm btn-outline-primary mr-2", "type", "button", "title", "Edit/Display", "id", "editDisplay", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-secondary mr-2", "type", "button", "title", "Schedule Job", "id", "cancel", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-success mr-2", "type", "button", "title", "Schedule Job", "id", "schedule", 3, "click", 4, "ngIf"], ["type", "button", "title", "Save", "id", "save", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "disabled", "click"], [1, "fas", "fa-save"], [1, "mt-2", "mb-2"], ["class", "ml-2", 4, "ngIf"], ["id", "scheduleConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmSchedule", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["id", "changeConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["id", "confirmChange", 1, "modal-title"], ["id", "cancelConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["id", "confirmCancel", 1, "modal-title"], ["type", "button", "title", "Return to List", "id", "refresh", 1, "btn", "btn-sm", "btn-light", "mr-2", 3, "click"], [1, "fas", "fa-sync-alt"], ["type", "button", "title", "Edit/Display", "id", "editDisplay", 1, "btn", "btn-sm", "btn-outline-primary", "mr-2", 3, "click"], ["class", "fas fa-edit", 4, "ngIf"], ["class", "fas fa-glasses", 4, "ngIf"], [1, "fas", "fa-edit"], [1, "fas", "fa-glasses"], ["type", "button", "title", "Schedule Job", "id", "cancel", 1, "btn", "btn-sm", "btn-outline-secondary", "mr-2", 3, "click"], [1, "fas", "fa-times-circle"], ["type", "button", "title", "Schedule Job", "id", "schedule", 1, "btn", "btn-sm", "btn-outline-success", "mr-2", 3, "click"], [1, "fas", "fa-calendar-plus"], [1, "ml-2"], ["class", "overlay", 4, "ngIf"], [1, "mt-2", "ml-1", "row"], [1, "form-group", "col-md-6", "col-lg-4", 3, "formGroup"], ["for", "jobName", 1, "col-form-label", "form-control-sm"], [1, "dk-invalid-feedback"], ["id", "jobName", "name", "jobName", "formControlName", "name", 1, "form-control", "form-control-sm", 3, "readonly"], ["for", "description", 1, "col-form-label", "form-control-sm"], ["id", "description", "name", "description", "rows", "1", "formControlName", "DEFAULT", 1, "form-control", "form-control-sm", 3, "readonly"], [1, "col-md-6", "col-lg-4"], ["for", "status", 1, "col-form-label", "form-control-sm"], ["id", "status", 1, "ml-2", 3, "ngClass"], [1, "nav", "nav-tabs", "mt-1"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], ["class", "nav-item", 4, "ngIf"], [1, "mt-2", 3, "ngSwitch"], [3, "mainForm", "readonly", 4, "ngSwitchCase"], [3, "mainForm", "readonly", "hasSimulation", 4, "ngSwitchCase"], [3, "mainForm", "displayStatistics", "readonly", 4, "ngSwitchCase"], [3, "mainForm", 4, "ngSwitchCase"], [1, "overlay"], ["role", "status", 1, "spinner-border"], [3, "mainForm", "readonly"], [3, "mainForm", "readonly", "hasSimulation"], [3, "mainForm", "displayStatistics", "readonly"], [3, "mainForm"]], template: function JobDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, JobDetailComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_6_listener() { return ctx.return2List(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " To List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, JobDetailComponent_button_9_Template, 3, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, JobDetailComponent_button_10_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, JobDetailComponent_button_11_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_12_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, JobDetailComponent_div_17_Template, 34, 23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Schedule the Job?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_24_listener() { return ctx.cancelSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Do you want to schedule the job right now?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_31_listener() { return ctx.cancelSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_33_listener() { return ctx.schedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Confirm the Change?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_41_listener() { return ctx.cancelChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Changing of a scheduled job will cancel all its ready occurrences, and then re-schedule them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Do you want to process?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_50_listener() { return ctx.cancelChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_52_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Cancel the Job?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_60_listener() { return ctx.cancelCancelJob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Are you sure to cancel the job?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_67_listener() { return ctx.cancelCancelJob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobDetailComponent_Template_button_click_69_listener() { return ctx.confirmCancelJob(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isNewMode ? "New Job" : ctx.readonly ? "Display Job" : "Change Job");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.mainForm == null ? null : (tmp_1_0 = ctx.mainForm.get("status")) == null ? null : tmp_1_0.value) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isNewMode && (ctx.mainForm == null ? null : (tmp_2_0 = ctx.mainForm.get("status")) == null ? null : tmp_2_0.value) !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isNewMode && (ctx.mainForm == null ? null : (tmp_3_0 = ctx.mainForm.get("status")) == null ? null : tmp_3_0.value) < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isNewMode && (ctx.mainForm == null ? null : (tmp_4_0 = ctx.mainForm.get("status")) == null ? null : tmp_4_0.value) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.showScheduleConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c0, ctx.displayScheduleConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.showChangeConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](18, _c0, ctx.displayChangeConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.showCancelConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c0, ctx.displayCancelConfirmation));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ui_message_angular__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _job_steps_job_steps_component__WEBPACK_IMPORTED_MODULE_11__["JobStepsComponent"], _job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_5__["JobStartConditionComponent"], _job_occurrences_job_occurrences_component__WEBPACK_IMPORTED_MODULE_12__["JobOccurrencesComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 9999;\n  cursor: pointer;\n}\ninput.ng-invalid[_ngcontent-%COMP%], select.ng-invalid[_ngcontent-%COMP%]{\n  border-color: #dc3545;\n}\n.ng-invalid[_ngcontent-%COMP%]    + .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n  max-width: inherit;\n}\n.ng-invalid.dk-invalid-feedback[_ngcontent-%COMP%], .ng-invalid[_ngcontent-%COMP%]    + .dk-invalid-feedback[_ngcontent-%COMP%]{\n  display: inline;\n}\n.dk-invalid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: .25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJqb2ItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pbnB1dC5uZy1pbnZhbGlkLFxuc2VsZWN0Lm5nLWludmFsaWR7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cbi5uZy1pbnZhbGlkICsgLmludmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG4ubmctaW52YWxpZC5kay1pbnZhbGlkLWZlZWRiYWNrLFxuLm5nLWludmFsaWQgKyAuZGstaW52YWxpZC1mZWVkYmFja3tcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmRrLWludmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLjI1cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    redirectPath: '',
    redirectUrl: '/jor',
    originalHost: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C7e6":
/*!**********************************************!*\
  !*** ./src/app/job-detail/date.directive.ts ***!
  \**********************************************/
/*! exports provided: DateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDirective", function() { return DateDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DateDirective {
    constructor() {
        this.dateStr = '';
        this.date = new Date();
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set date(d) { this.dateStr = this.toDateString(d); }
    toDateString(date) {
        return date ? (date.getFullYear().toString() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2)
            + 'T' + date.toTimeString().slice(0, 5)) : '';
    }
    parseDateString(date) {
        date = date.replace('T', '-');
        const parts = date.split('-');
        const timeParts = parts[3].split(':');
        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), Number(timeParts[0]), Number(timeParts[1]));
    }
    onDateChange(value) {
        if (value !== this.dateStr) {
            const parsedDate = this.parseDateString(value);
            if (!isNaN(parsedDate.getTime())) {
                this.dateStr = value;
                this.dateChange.emit(parsedDate);
            }
        }
    }
}
DateDirective.ɵfac = function DateDirective_Factory(t) { return new (t || DateDirective)(); };
DateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DateDirective, selectors: [["input", "type", "datetime-local"]], hostVars: 1, hostBindings: function DateDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DateDirective_change_HostBindingHandler($event) { return ctx.onDateChange($event.target.value); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("value", ctx.dateStr);
    } }, inputs: { date: "date" }, outputs: { dateChange: "dateChange" } });


/***/ }),

/***/ "Cw5F":
/*!***********************************!*\
  !*** ./src/app/dialog.service.ts ***!
  \***********************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DialogService {
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    confirm(message) {
        const confirmation = window.confirm(message || 'Is it OK?');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(confirmation);
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F0jV":
/*!******************************************!*\
  !*** ./src/app/custom.reuse.strategy.ts ***!
  \******************************************/
/*! exports provided: CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomReuseStrategy {
    constructor() {
        this.routesToCache = ['jobs'];
        this.storedRouteHandles = new Map();
    }
    /**
     * When navigation from a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the current route should be stored.
     */
    shouldDetach(route) {
        // @ts-ignore
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    }
    /**
     * If the current route need to be stored, that is shouldDetach return true,
     * then on this method, you can implement a way to store routes. Usually in a Map.
     */
    store(route, handle) {
        // console.log('store', route);
        // @ts-ignore
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    }
    /**
     * When navigation to a reusable component, and if shouldReuseRoute return false,
     * this method is invoked to decide whether the target component can be get from a reuse buffer.
     */
    shouldAttach(route) {
        // console.log('shouldAttach', route);
        // @ts-ignore
        return this.storedRouteHandles.has(route.routeConfig.path);
    }
    /**
     * If shouldAttach return true, then this method is invoke to retrieve the component from the buffer.
     */
    retrieve(route) {
        // @ts-ignore
        return this.storedRouteHandles.get(route.routeConfig.path);
    }
    /**
     * By default, Angular doesn't re-initializing the same component if the navigation is not to
     * a different one. For example, you switch different entity ID in the same entity type detail page.
     * In this way, shouldReuseRoute should return true to avoid executing other methods in this Class.
     * However, if you navigate from search&list component to entity detail component, then the method should return false.
     * So that other methods can be executed to decide whether the search&list component should be stored for future reuse.
     */
    shouldReuseRoute(future, curr) {
        // console.log('shouldReuseRoute, future:', future, 'current:', curr);
        return future.routeConfig === curr.routeConfig;
    }
}
CustomReuseStrategy.ɵfac = function CustomReuseStrategy_Factory(t) { return new (t || CustomReuseStrategy)(); };
CustomReuseStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomReuseStrategy, factory: CustomReuseStrategy.ɵfac });


/***/ }),

/***/ "QLkK":
/*!*************************************!*\
  !*** ./src/app/async-validators.ts ***!
  \*************************************/
/*! exports provided: existingJobNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existingJobNameValidator", function() { return existingJobNameValidator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function existingJobNameValidator(jobService, messageService) {
    return (control) => {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => jobService.getJob(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            // @ts-ignore
            if ((data === null || data === void 0 ? void 0 : data.name) === control.value) {
                return { message: messageService.generateMessage('JOB', 'JOB_EXISTS', 'E', control.value).msgShortText };
            }
            else {
                return null;
            }
        }))));
    };
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _msgStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msgStore */ "uLAD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job.service */ "zbxD");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(jobService, entityService, messageService) {
        this.jobService = jobService;
        this.entityService = entityService;
        this.messageService = messageService;
        this.entityService.setOriginalHost(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].originalHost);
        this.messageService.setMessageStore(_msgStore__WEBPACK_IMPORTED_MODULE_0__["msgStore"], 'EN');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](jor_angular__WEBPACK_IMPORTED_MODULE_4__["EntityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UtLR":
/*!************************************************!*\
  !*** ./src/app/job-list/job-list.component.ts ***!
  \************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job.service */ "zbxD");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return { action: "display" }; };
const _c1 = function (a1, a2) { return ["/jobs", a1, a2]; };
const _c2 = function () { return { action: "displayFinished" }; };
const _c3 = function () { return { action: "displayFailed" }; };
const _c4 = function () { return { action: "displayCanceled" }; };
function JobListComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_tr_72_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const job_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.display(job_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_tr_72_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const job_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.change(job_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_tr_72_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const job_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancel(job_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c1, job_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r1.description == null ? null : job_r1.description.DEFAULT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.jobStatusColors[job_r1.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.jobStatuses[job_r1.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.jobModes[job_r1.mode]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.occStatusColors[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, job_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r1.finishedOccurrences, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.occStatusColors[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](30, _c1, job_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r1.failedOccurrences, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.occStatusColors[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](34, _c1, job_r1.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r1.canceledOccurrences, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", job_r1.status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", job_r1.status === 2);
} }
const _c5 = function (a0) { return { "display": a0 }; };
class JobListComponent {
    constructor(jobService, messageService, router) {
        this.jobService = jobService;
        this.messageService = messageService;
        this.router = router;
        this.jobName = '';
        this.program = '';
        this.jobs = [];
        this.status = [true, true, true];
        this.mode = [true, true, true, false];
        this.showCancelConfirmation = false;
        this.toBeCanceledJobName = '';
        this.jobStatuses = this.jobService.jobStatuses;
        this.jobStatusColors = this.jobService.jobStatusColors;
        this.occStatusColors = this.jobService.occStatusColors;
        this.jobModes = this.jobService.jobModes;
    }
    get displayCancelConfirmation() { return this.showCancelConfirmation ? 'block' : 'none'; }
    ngOnInit() {
    }
    search(clearMsg = true) {
        if (clearMsg) {
            this.messageService.clearMessages();
        }
        this.jobs = [];
        this.jobName = this.jobName ? this.jobName.trim() : '';
        this.program = this.program ? this.program.trim() : '';
        let statusArray = [];
        this.status.forEach((value, index) => {
            if (value) {
                statusArray.push(index);
            }
        });
        if (statusArray.length === 0) {
            this.messageService.reportMessage('JOB', 'AT_LEAST_ONE_JOB_STATUS', 'E');
            return;
        }
        let modeArray = [];
        this.mode.forEach((value, index) => {
            if (value) {
                modeArray.push(index);
            }
        });
        if (modeArray.length === 0 || statusArray.length === 0) {
            this.messageService.reportMessage('JOB', 'AT_LEAST_ONE_JOB_MODE', 'E');
            return;
        }
        this.jobService.searchJobs(this.jobName, statusArray, modeArray, this.program)
            .subscribe(data => {
            this.jobs = data;
        });
    }
    enterSearch($event) {
        if ($event.keyCode === 13) {
            this.search();
        }
    }
    new() {
        this.router.navigate(['jobs', '/', { action: 'new' }]);
    }
    display(jobName) {
        this.router.navigate(['jobs', jobName, { action: 'display' }]);
    }
    change(jobName) {
        this.router.navigate(['jobs', jobName, { action: 'change' }]);
    }
    cancel(jobName) {
        this.toBeCanceledJobName = jobName;
        this.showCancelConfirmation = true;
    }
    cancelCancel() {
        this.showCancelConfirmation = false;
    }
    confirmCancel() {
        this.jobService.cancelJobs([this.toBeCanceledJobName])
            .subscribe(data => {
            this.showCancelConfirmation = false;
            const messages = data;
            messages.forEach(msg => this.messageService.add(msg));
            this.search(false);
        });
    }
}
JobListComponent.ɵfac = function JobListComponent_Factory(t) { return new (t || JobListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
JobListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobListComponent, selectors: [["app-job-list"]], decls: 90, vars: 27, consts: [[1, "card", "mb-3", "pt-3"], [1, "pl-4", "row"], [1, "col-6", "form-group"], ["for", "jobName", 1, "col-sm-3", "col-form-label"], ["id", "jobName", "name", "jobName", "type", "text", "autofocus", "", 1, "ml-3", "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "program", 1, "col-sm-3", "col-form-label"], ["id", "program", "name", "app_name", "type", "text", 1, "ml-3", "col-sm-6", "form-control", "form-control-sm", 3, "ngModel", "ngModelChange", "keyup"], ["for", "mode", 1, "col-sm-3", "col-form-label"], ["id", "mode", 1, "ml-3"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "mode0", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "mode0", 1, "form-check-label"], ["type", "checkbox", "id", "mode1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "mode1", 1, "form-check-label"], ["type", "checkbox", "id", "mode2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "mode2", 1, "form-check-label"], ["for", "status", 1, "col-sm-3", "col-form-label"], ["id", "status", 1, "ml-3"], ["type", "checkbox", "id", "status0", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "status0", 1, "form-check-label"], ["type", "checkbox", "id", "status1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "status1", 1, "form-check-label"], ["type", "checkbox", "id", "status2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "status2", 1, "form-check-label"], [1, "mb-4"], ["type", "button", "id", "search", 1, "btn", "btn-primary", "btn-sm", "float-right", "mr-4", 3, "click"], [1, "mt-2", "mb-4"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end", "my-2"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "click"], [1, "fas", "fa-plus"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "deletionConfirmation", "tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-md", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "confirmDeletion", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "id", "no", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", "id", "yes", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "routerLink"], [1, "dk-statistic"], [1, "dk-actions"], ["title", "Display", "id", "display", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-search"], ["title", "Change", "id", "change", "type", "button", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-pen"], ["title", "Cancel", "id", "cancel", "type", "button", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-times-circle"]], template: function JobListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Job Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.jobName = $event; })("keyup", function JobListComponent_Template_input_keyup_5_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Program:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.program = $event; })("keyup", function JobListComponent_Template_input_keyup_9_listener($event) { return ctx.enterSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Job Mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_16_listener($event) { return (ctx.mode[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_20_listener($event) { return (ctx.mode[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_24_listener($event) { return (ctx.mode[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Job Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_32_listener($event) { return (ctx.status[0] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_36_listener($event) { return (ctx.status[1] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function JobListComponent_Template_input_ngModelChange_40_listener($event) { return (ctx.status[2] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_Template_button_click_44_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_Template_button_click_49_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Finished");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Canceled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, JobListComponent_tr_72_Template, 26, 37, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Confirm Cancel?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_Template_button_click_79_listener() { return ctx.cancelCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_Template_button_click_86_listener() { return ctx.cancelCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobListComponent_Template_button_click_88_listener() { return ctx.confirmCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.jobName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.program);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobModes[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobModes[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mode[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobModes[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.jobStatusColors[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobStatuses[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.jobStatusColors[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobStatuses[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.status[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.jobStatusColors[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobStatuses[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.showCancelConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c5, ctx.displayCancelConfirmation));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure to cancel the job '", ctx.toBeCanceledJobName, "'?");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".dk-statistic[_ngcontent-%COMP%]{\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiam9iLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kay1zdGF0aXN0aWN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "WPXZ":
/*!***********************************************************************************************************!*\
  !*** ./src/app/job-detail/job-start-condition/job-recursive-schedule/job-recursive-schedule.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: JobRecursiveScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobRecursiveScheduleComponent", function() { return JobRecursiveScheduleComponent; });
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _job_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../job-types */ "ZmxW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../job.service */ "zbxD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _date_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../date.directive */ "C7e6");








const _c0 = ["cronForm"];
function JobRecursiveScheduleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.cronString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.copyCronString(_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.pasteCronString(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Paste");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.simulate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Simulate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.cronString);
} }
function JobRecursiveScheduleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.cronString = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.copyCronString(_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.pasteCronString(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Paste");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.cronString);
} }
function JobRecursiveScheduleComponent_div_18_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _r21.errors), " ");
} }
const _c1 = function (a0) { return { "show": a0 }; };
function JobRecursiveScheduleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_18_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r23.cronArrayAt[0] = $event); })("keyup", function JobRecursiveScheduleComponent_div_18_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.onKeyup(0); })("keydown", function JobRecursiveScheduleComponent_div_18_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, JobRecursiveScheduleComponent_div_18_div_7_Template, 4, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every(/):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_18_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r27.cronArrayEvery[0] = $event); })("keyup", function JobRecursiveScheduleComponent_div_18_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.onKeyup(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_18_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.onOpenDocumentation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Help(?) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "0-59");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "allowed values; 0 is the top of the minute");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "first-last (every second)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "a list of seconds; ie. 0,30 would be the 0 AND 30th seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "a range of seconds; ie. 0-5 would be seconds 0, 1, 2, 3, 4, and 5 (you can also specify a list of ranges 0-5,30-35)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " step values will skip the specified number within a range; ie */5 is every 5 seconds, and 0-30/2 is every 2 seconds between 0 and 30 seconds ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.cronArrayAt[0])("readOnly", ctx_r3.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r21.invalid && (_r21.dirty || _r21.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx_r3.readonly)("ngModel", ctx_r3.cronArrayEvery[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r3.isDocumentationOpen));
} }
function JobRecursiveScheduleComponent_div_19_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _r30.errors), " ");
} }
function JobRecursiveScheduleComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_19_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r32.cronArrayAt[1] = $event); })("keyup", function JobRecursiveScheduleComponent_div_19_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.onKeyup(1); })("keydown", function JobRecursiveScheduleComponent_div_19_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, JobRecursiveScheduleComponent_div_19_div_7_Template, 4, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every(/):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_19_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r36.cronArrayEvery[1] = $event); })("keyup", function JobRecursiveScheduleComponent_div_19_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r37.onKeyup(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_19_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.onOpenDocumentation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Help(?) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "0-59");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "allowed values; 0 is the top of the hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "first-last (every minute)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "a list of minutes; ie. 0,30 would be the 0 AND 30th minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "a range of minutes; ie. 0-5 would be minutes 0, 1, 2, 3, 4, and 5 (you can also specify a list of ranges 0-5,30-35)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " step values will skip the specified number within a range; ie */5 is every 5 minutes, and 0-30/2 is every 2 minutes between 0 and 30 minutes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.cronArrayAt[1])("readOnly", ctx_r4.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r30.invalid && (_r30.dirty || _r30.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx_r4.readonly)("ngModel", ctx_r4.cronArrayEvery[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r4.isDocumentationOpen));
} }
function JobRecursiveScheduleComponent_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _r39.errors), " ");
} }
function JobRecursiveScheduleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_20_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r41.cronArrayAt[2] = $event); })("keyup", function JobRecursiveScheduleComponent_div_20_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.onKeyup(2); })("keydown", function JobRecursiveScheduleComponent_div_20_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, JobRecursiveScheduleComponent_div_20_div_7_Template, 4, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every(/):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_20_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r45.cronArrayEvery[2] = $event); })("keyup", function JobRecursiveScheduleComponent_div_20_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.onKeyup(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_20_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.onOpenDocumentation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Help(?) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "0-23");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "allowed values; 0 is midnight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "first-last (every hour)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "a list of hours; ie. 0,12 would be the 0 AND 12th hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "a range of hours; ie. 19-23 would be hours 19, 20, 21, 22, and 23 (you can also specify a list of ranges 0-5,12-16)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "step values will skip the specified number within a range; ie */4 is every 4 hours, and 0-20/2 is every 2 hours between 0 and the 20th hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.cronArrayAt[2])("readOnly", ctx_r5.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx_r5.readonly)("ngModel", ctx_r5.cronArrayEvery[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r5.isDocumentationOpen));
} }
function JobRecursiveScheduleComponent_div_21_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _r48.errors), " ");
} }
function JobRecursiveScheduleComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_21_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r50.cronArrayAt[3] = $event); })("keyup", function JobRecursiveScheduleComponent_div_21_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.onKeyup(3); })("keydown", function JobRecursiveScheduleComponent_div_21_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r53.onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, JobRecursiveScheduleComponent_div_21_div_7_Template, 4, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every(/):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_21_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r54.cronArrayEvery[3] = $event); })("keyup", function JobRecursiveScheduleComponent_div_21_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r55.onKeyup(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_21_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r56.onOpenDocumentation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Help(?) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "1-31");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "allowed values");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "first-last (every day of the month)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "a list of days; ie. 1,15 would be the 1st AND 15th day of the month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "a range of days; ie. 1-5 would be days 1, 2, 3, 4, and 5 (you can also specify a list of ranges 1-5,14-30)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "step values will skip the specified number within a range; ie */4 is every 4 days, and 1-20/2 is every 2 days between 1st and the 20th day of the month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.cronArrayAt[3])("readOnly", ctx_r6.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r48.invalid && (_r48.dirty || _r48.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx_r6.readonly)("ngModel", ctx_r6.cronArrayEvery[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r6.isDocumentationOpen));
} }
function JobRecursiveScheduleComponent_div_22_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _r57.errors), " ");
} }
function JobRecursiveScheduleComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_22_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r59.cronArrayAt[4] = $event); })("keyup", function JobRecursiveScheduleComponent_div_22_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r61.onKeyup(4); })("keydown", function JobRecursiveScheduleComponent_div_22_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, JobRecursiveScheduleComponent_div_22_div_7_Template, 4, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every(/):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_22_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r63.cronArrayEvery[4] = $event); })("keyup", function JobRecursiveScheduleComponent_div_22_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r64.onKeyup(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_22_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r65.onOpenDocumentation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Help(?) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "1-12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "allowed values");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "JAN-DEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "allowed values");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "first-last (every month)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "a list of months; ie. 1,6 would be the jan AND jun");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "a range of months; ie. 1-3 would be jan, feb, and mar (you can also specify a list of ranges 1-4,8-12)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "step values will skip the specified number within a range; ie */4 is every 4 months, and 1-8/2 is every 2 months between jan and aug");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.cronArrayAt[4])("readOnly", ctx_r7.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r57.invalid && (_r57.dirty || _r57.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx_r7.readonly)("ngModel", ctx_r7.cronArrayEvery[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r7.isDocumentationOpen));
} }
function JobRecursiveScheduleComponent_div_23_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, _r66.errors), " ");
} }
function JobRecursiveScheduleComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 84, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_23_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r68.cronArrayAt[5] = $event); })("keyup", function JobRecursiveScheduleComponent_div_23_Template_input_keyup_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r70.onKeyup(5); })("keydown", function JobRecursiveScheduleComponent_div_23_Template_input_keydown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r71.onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, JobRecursiveScheduleComponent_div_23_div_7_Template, 4, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Every(/):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobRecursiveScheduleComponent_div_23_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r72.cronArrayEvery[5] = $event); })("keyup", function JobRecursiveScheduleComponent_div_23_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r73.onKeyup(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_div_23_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r74.onOpenDocumentation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Help(?) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "0-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "allowed values; 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "SUN-SAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "allowed values");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "first-last (every day of the week)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "a list of days; ie. 1,5 would be the mon AND fri");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "a range of days; ie. 1-5 would be mon, tue, wed, thu, and fri (you can also specify a list of ranges 0-2,4-6)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "step values will skip the specified number within a range; ie */4 is every 4 days, and 1-5/2 is every 2 days between mon and fri");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r8.cronArrayAt[5])("readOnly", ctx_r8.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r66.invalid && (_r66.dirty || _r66.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx_r8.readonly)("ngModel", ctx_r8.cronArrayEvery[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r8.isDocumentationOpen));
} }
function JobRecursiveScheduleComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const scheduleDateTime_r75 = ctx.$implicit;
    const i_r76 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r76 < 50 ? ctx_r9.toLocaleString(scheduleDateTime_r75) : "There is more...", " ");
} }
const _c2 = function (a0, a1) { return { "btn-outline-primary": a0, "btn-primary": a1 }; };
const _c3 = function (a0) { return { "display": a0 }; };
class JobRecursiveScheduleComponent {
    constructor(jobService, messageService) {
        this.jobService = jobService;
        this.messageService = messageService;
        this.currentSection = 0; // 0: seconds, 1: minutes, 2: hours, 3: day of month, 4: month, 5: day of week
        this.isDocumentationOpen = false;
        this.cronArrayAt = ['0', '*', '*', '*', '*', '*'];
        this.cronArrayEvery = [0, 0, 0, 0, 0, 0];
        this.cronString = '';
        this.tz = null;
        this.isSimulationModalShown = false;
    }
    get displaySimulationModal() { return this.isSimulationModalShown ? 'block' : 'none'; }
    ngOnInit() {
    }
    ngOnChanges() {
        var _a, _b, _c, _d, _e;
        const cronStringCtrl = this.startConditionForm.get('cronString');
        if (cronStringCtrl) {
            if (cronStringCtrl.value) {
                this.cronString = cronStringCtrl.value;
            }
            else {
                this.cronString = '0 * * * * *';
                cronStringCtrl.setValue(this.cronString);
            }
        }
        if ((_a = this.startConditionForm.get('cronCurrentDate')) === null || _a === void 0 ? void 0 : _a.value) {
            // @ts-ignore
            this.cronCurrentDate = new Date(((_b = this.startConditionForm.get('cronCurrentDate')) === null || _b === void 0 ? void 0 : _b.value) + ' UTC');
        }
        if ((_c = this.startConditionForm.get('cronEndDate')) === null || _c === void 0 ? void 0 : _c.value) {
            // @ts-ignore
            this.cronEndDate = new Date(((_d = this.startConditionForm.get('cronEndDate')) === null || _d === void 0 ? void 0 : _d.value) + ' UTC');
        }
        this.tz = (_e = this.startConditionForm.get('tz')) === null || _e === void 0 ? void 0 : _e.value;
        this._convertCronString2Array();
    }
    _convertCronString2Array() {
        this.cronArray = this.cronString.split(` `);
        for (let i = 0; i < 6; i++) {
            const sectionArray = this.cronArray[i].split(`/`);
            this.cronArrayAt[i] = sectionArray[0];
            this.cronArrayEvery[i] = +sectionArray[1] || 0;
        }
    }
    onOpenSection(section) {
        if (!this.cronForm.valid) {
            return;
        }
        this.currentSection = section;
    }
    onOpenDocumentation() {
        this.isDocumentationOpen = !this.isDocumentationOpen;
    }
    copyCronString(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    }
    pasteCronString() {
        navigator.clipboard.readText()
            .then(text => {
            this.cronString = text;
            this._convertCronString2Array();
        });
    }
    simulate() {
        var _a, _b, _c;
        const startCondition = new _job_types__WEBPACK_IMPORTED_MODULE_1__["StartCondition"]();
        startCondition.cronString = this.cronString;
        startCondition.cronCurrentDate = (_a = this.startConditionForm.get('cronCurrentDate')) === null || _a === void 0 ? void 0 : _a.value;
        startCondition.cronEndDate = (_b = this.startConditionForm.get('cronEndDate')) === null || _b === void 0 ? void 0 : _b.value;
        startCondition.tz = (_c = this.startConditionForm.get('tz')) === null || _c === void 0 ? void 0 : _c.value;
        this.jobService.simulateRecurrences(startCondition).subscribe(data => {
            if (data instanceof ui_message_angular__WEBPACK_IMPORTED_MODULE_0__["Message"]) {
                this.messageService.add(data);
            }
            else {
                this.recurrences = data;
                this.isSimulationModalShown = true;
            }
        });
    }
    close() {
        this.isSimulationModalShown = false;
    }
    toLocaleString(dateStr) {
        return this.jobService.toLocaleString(dateStr);
    }
    onKeyup(section) {
        this.cronArray[section] = this.cronArrayEvery[section] ?
            `${this.cronArrayAt[section]}/${this.cronArrayEvery[section]}` : this.cronArrayAt[section];
        this.cronString = this.cronArray.join(` `);
    }
    onKeydown(e) {
        return e.keyCode !== 32;
    }
    onChangeCurrentDate(newDate) {
        var _a, _b;
        const mySQLDateStr = newDate ? this._convert2MySQLDateTime(newDate) : null;
        (_a = this.startConditionForm.get('cronCurrentDate')) === null || _a === void 0 ? void 0 : _a.setValue(mySQLDateStr);
        (_b = this.startConditionForm.get('cronCurrentDate')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
    }
    onChangeEndDate(newDate) {
        var _a, _b;
        const mySQLDateStr = newDate ? this._convert2MySQLDateTime(newDate) : null;
        (_a = this.startConditionForm.get('cronEndDate')) === null || _a === void 0 ? void 0 : _a.setValue(mySQLDateStr);
        (_b = this.startConditionForm.get('cronEndDate')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
    }
    _convert2MySQLDateTime(date) {
        return date.toISOString().slice(0, 19).replace('T', ' ');
    }
    updateMainForm() {
        var _a, _b;
        if (!this.cronForm.dirty || this.cronForm.pristine) {
            return;
        }
        if (this.cronForm.invalid) {
            this.startConditionForm.setErrors({ message: 'Errors in start condition' });
            return;
        }
        const cronStringCtrl = this.startConditionForm.get('cronString');
        const tzCtrl = this.startConditionForm.get('tz');
        if (cronStringCtrl && this.cronString !== ((_a = this.startConditionForm.get('cronString')) === null || _a === void 0 ? void 0 : _a.value)) {
            cronStringCtrl.setValue(this.cronString);
            cronStringCtrl.markAsDirty();
        }
        if (tzCtrl && this.tz !== ((_b = this.startConditionForm.get('tz')) === null || _b === void 0 ? void 0 : _b.value)) {
            tzCtrl.setValue(this.tz);
            tzCtrl.markAsDirty();
        }
    }
}
JobRecursiveScheduleComponent.ɵfac = function JobRecursiveScheduleComponent_Factory(t) { return new (t || JobRecursiveScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_0__["MessageService"])); };
JobRecursiveScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JobRecursiveScheduleComponent, selectors: [["app-job-recursive-schedule"]], viewQuery: function JobRecursiveScheduleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cronForm = _t.first);
    } }, inputs: { startConditionForm: "startConditionForm", readonly: "readonly", hasSimulation: "hasSimulation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 52, vars: 44, consts: [["class", "row", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], [1, "mt-2"], ["type", "button", 1, "btn", "mt-2", 3, "ngClass", "click"], ["type", "button", 1, "btn", "ml-2", "mt-2", 3, "ngClass", "click"], ["cronForm", "ngForm"], [1, "mt-2", 3, "ngSwitch"], ["class", "card card-body", 4, "ngSwitchCase"], [1, "card", "card-body"], [1, "row"], [1, "form-group", "row", "col-xl-6"], ["for", "startFrom", 1, "col-md-3", "col-form-label", "form-control-sm"], [1, "col-md-9"], ["id", "startFrom", "name", "startFrom", "type", "datetime-local", 1, "form-control", "form-control-sm", 3, "readOnly", "date", "dateChange"], ["for", "endAt", 1, "col-md-3", "col-form-label", "form-control-sm"], ["id", "endAt", "name", "endAt", "type", "datetime-local", 1, "form-control", "form-control-sm", 3, "readOnly", "date", "dateChange"], ["id", "simulatedRecurrences", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "addAuthObjectTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group", "list-group-flush", "dk-modal-simulate"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "input-group", "col-11"], ["name", "cronString", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], ["cronStringInput", ""], [1, "input-group-append"], ["title", "copy to clipboard", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["title", "paste from clipboard", "type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "col-1"], ["title", "Simulate", "type", "button", 1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "input-group"], [1, "form-group", "row"], ["for", "seconds", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], [1, "col-md-9", "col-xl-4"], ["id", "seconds", "name", "seconds", "type", "text", "required", "", "pattern", "^\\*$|^((\\d+)|(\\d+-\\d+))((,\\d+)|(,\\d+-\\d+))*$", "placeholder", "0,1,2,... or 1-59 or *", 1, "form-control", "form-control-sm", 3, "ngModel", "readOnly", "ngModelChange", "keyup", "keydown"], ["seconds", "ngModel"], ["class", "col-xl-6", 4, "ngIf"], ["for", "everySecond", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], [1, "col-6", "col-md-4", "col-xl-2"], ["id", "everySecond", "name", "everySecond", "type", "number", 1, "form-control", "form-control-sm", 3, "readOnly", "ngModel", "ngModelChange", "keyup"], ["for", "everySecond", 1, "col-6", "col-md-5", "col-xl-2", "col-form-label", "form-control-sm"], [1, "col-md-6", "col-xl-1"], ["type", "button", 1, "col-md-4", "col-xl-2", "btn", "btn-info", "btn-sm", "mt-2", "mx-3", 3, "click"], ["id", "secondsDoc", 1, "collapse", 3, "ngClass"], [1, "table", "table-striped", "tips-table", 2, "margin-bottom", "0px"], [2, "width", "24%"], [1, "tips-cell-title"], [2, "width", "76%"], [1, "tips-cell-desc"], [1, "col-xl-6"], [1, "ng-invalid", "dk-invalid-feedback"], ["for", "minutes", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "minutes", "name", "minutes", "type", "text", "required", "", "pattern", "^\\*$|^((\\d+)|(\\d+-\\d+))((,\\d+)|(,\\d+-\\d+))*$", "placeholder", "0,1,2,... or 1-20 or *", 1, "form-control", "form-control-sm", 3, "ngModel", "readOnly", "ngModelChange", "keyup", "keydown"], ["minutes", "ngModel"], ["for", "everyMinute", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "everyMinute", "name", "everyMinute", "type", "number", 1, "form-control", "form-control-sm", 3, "readOnly", "ngModel", "ngModelChange", "keyup"], ["id", "minutesDoc", 1, "collapse", 3, "ngClass"], ["for", "hours", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "hours", "name", "hours", "type", "text", "required", "", "pattern", "^\\*$|^((\\d+)|(\\d+-\\d+))((,\\d+)|(,\\d+-\\d+))*$", "placeholder", "0,1,2,... or 0-23 or *", 1, "form-control", "form-control-sm", 3, "ngModel", "readOnly", "ngModelChange", "keyup", "keydown"], ["hours", "ngModel"], ["id", "everyHour", "name", "everyHour", "type", "number", 1, "form-control", "form-control-sm", 3, "readOnly", "ngModel", "ngModelChange", "keyup"], ["for", "everyHour", 1, "col-6", "col-md-5", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "hoursDoc", 1, "collapse", 3, "ngClass"], ["for", "dayOfMonth", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "dayOfMonth", "name", "dayOfMonth", "type", "text", "required", "", "pattern", "^\\*$|^((\\d+)|(\\d+-\\d+))((,\\d+)|(,\\d+-\\d+))*$", "placeholder", "1,2,3,... or 1-31 or *", 1, "form-control", "form-control-sm", 3, "ngModel", "readOnly", "ngModelChange", "keyup", "keydown"], ["dayOfMonth", "ngModel"], ["for", "everyDay", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "everyDay", "name", "everyDay", "type", "number", 1, "form-control", "form-control-sm", 3, "readOnly", "ngModel", "ngModelChange", "keyup"], ["for", "everyDay", 1, "col-6", "col-md-5", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "dayOfMonthDoc", 1, "collapse", 3, "ngClass"], ["for", "month", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "month", "name", "month", "type", "text", "required", "", "pattern", "^\\*$|^((\\d+)|(\\d+-\\d+))((,\\d+)|(,\\d+-\\d+))*$", "placeholder", "1,2,3,... or 1-12 or *", 1, "form-control", "form-control-sm", 3, "ngModel", "readOnly", "ngModelChange", "keyup", "keydown"], ["month", "ngModel"], ["for", "everyMonth", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "everyMonth", "name", "everyMonth", "type", "number", 1, "form-control", "form-control-sm", 3, "readOnly", "ngModel", "ngModelChange", "keyup"], ["for", "everyMonth", 1, "col-6", "col-md-5", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "monthDoc", 1, "collapse", 3, "ngClass"], ["for", "dayOfWeek", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "dayOfWeek", "name", "dayOfWeek", "type", "text", "required", "", "pattern", "^\\*$|^((\\d+)|(\\d+-\\d+))((,\\d+)|(,\\d+-\\d+))*$", "placeholder", "0,1,2,... or 0-6 or *", 1, "form-control", "form-control-sm", 3, "ngModel", "readOnly", "ngModelChange", "keyup", "keydown"], ["dayOfWeek", "ngModel"], ["for", "everyDayOfWeek", 1, "col-md-3", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "everyDayOfWeek", "name", "everyDayOfWeek", "type", "number", 1, "form-control", "form-control-sm", 3, "readOnly", "ngModel", "ngModelChange", "keyup"], ["for", "everyDayOfWeek", 1, "col-6", "col-md-5", "col-xl-2", "col-form-label", "form-control-sm"], ["id", "everyDayOfWeekDoc", 1, "collapse", 3, "ngClass"], [1, "list-group-item"]], template: function JobRecursiveScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, JobRecursiveScheduleComponent_div_0_Template, 12, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JobRecursiveScheduleComponent_div_1_Template, 8, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_3_listener() { return ctx.onOpenSection(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Seconds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_5_listener() { return ctx.onOpenSection(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Minutes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_7_listener() { return ctx.onOpenSection(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_9_listener() { return ctx.onOpenSection(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Day of Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_11_listener() { return ctx.onOpenSection(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_13_listener() { return ctx.onOpenSection(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Day of Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, JobRecursiveScheduleComponent_div_18_Template, 56, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, JobRecursiveScheduleComponent_div_19_Template, 56, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, JobRecursiveScheduleComponent_div_20_Template, 56, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, JobRecursiveScheduleComponent_div_21_Template, 56, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, JobRecursiveScheduleComponent_div_22_Template, 63, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, JobRecursiveScheduleComponent_div_23_Template, 63, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Start:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dateChange", function JobRecursiveScheduleComponent_Template_input_dateChange_31_listener($event) { return ctx.cronCurrentDate = $event; })("dateChange", function JobRecursiveScheduleComponent_Template_input_dateChange_31_listener($event) { return ctx.onChangeCurrentDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dateChange", function JobRecursiveScheduleComponent_Template_input_dateChange_36_listener($event) { return ctx.cronEndDate = $event; })("dateChange", function JobRecursiveScheduleComponent_Template_input_dateChange_36_listener($event) { return ctx.onChangeEndDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Simulated Recurrences");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_43_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, JobRecursiveScheduleComponent_li_48_Template, 2, 1, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobRecursiveScheduleComponent_Template_button_click_50_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasSimulation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasSimulation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](22, _c2, ctx.currentSection !== 0, ctx.currentSection === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c2, ctx.currentSection !== 1, ctx.currentSection === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](28, _c2, ctx.currentSection !== 2, ctx.currentSection === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](31, _c2, ctx.currentSection !== 3, ctx.currentSection === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](34, _c2, ctx.currentSection !== 4, ctx.currentSection === 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](37, _c2, ctx.currentSection !== 5, ctx.currentSection === 5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.currentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx.readonly)("date", ctx.cronCurrentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", ctx.readonly)("date", ctx.cronEndDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c1, ctx.isSimulationModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](42, _c3, ctx.displaySimulationModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recurrences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _date_directive__WEBPACK_IMPORTED_MODULE_6__["DateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: [".ng-invalid.dk-invalid-feedback[_ngcontent-%COMP%], .ng-invalid[_ngcontent-%COMP%]    + .dk-invalid-feedback[_ngcontent-%COMP%]{\n  display: inline;\n}\n.dk-invalid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: .25rem;\n  \n  color: #dc3545;\n}\n.dk-modal-simulate[_ngcontent-%COMP%] {\n  height: 30rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1yZWN1cnNpdmUtc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEIiLCJmaWxlIjoiam9iLXJlY3Vyc2l2ZS1zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLWludmFsaWQuZGstaW52YWxpZC1mZWVkYmFjayxcbi5uZy1pbnZhbGlkICsgLmRrLWludmFsaWQtZmVlZGJhY2t7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5kay1pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgLypmb250LXNpemU6IDEwMCU7Ki9cbiAgY29sb3I6ICNkYzM1NDU7XG59XG4uZGstbW9kYWwtc2ltdWxhdGUge1xuICBoZWlnaHQ6IDMwcmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-list/job-list.component */ "UtLR");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "Aa57");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom.reuse.strategy */ "F0jV");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _job_detail_job_steps_job_steps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-detail/job-steps/job-steps.component */ "lxnR");
/* harmony import */ var _job_detail_job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job-detail/job-start-condition/job-start-condition.component */ "7qF7");
/* harmony import */ var _job_detail_job_occurrences_job_occurrences_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./job-detail/job-occurrences/job-occurrences.component */ "+IsF");
/* harmony import */ var _job_detail_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./job-detail/admin/admin.component */ "qHae");
/* harmony import */ var _job_detail_job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job-detail/job-parameters/job-parameters.component */ "3Sam");
/* harmony import */ var _job_detail_job_start_condition_job_recursive_schedule_job_recursive_schedule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./job-detail/job-start-condition/job-recursive-schedule/job-recursive-schedule.component */ "WPXZ");
/* harmony import */ var _job_detail_date_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./job-detail/date.directive */ "C7e6");
/* harmony import */ var _job_detail_job_occurrences_job_occurrence_detail_job_occurrence_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./job-detail/job-occurrences/job-occurrence-detail/job-occurrence-detail.component */ "j/PZ");
/* harmony import */ var _work_protection_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./work-protection.guard */ "4J20");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















const appRoutes = [
    // {
    //   path: 'logon', component: LogonComponent,
    //   data: {
    //     title: 'Logon Portal (DH001/Dark1234)', userLabel: 'User ID', pwdLabel: 'Password', btnLabel: 'Sign In',
    //     redirectPath: environment.redirectPath, redirectUrl: environment.redirectUrl, host: environment.originalHost
    //   }
    // },
    { path: 'jobs', component: _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_4__["JobListComponent"] },
    { path: 'jobs/:name', component: _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_5__["JobDetailComponent"], canDeactivate: [_work_protection_guard__WEBPACK_IMPORTED_MODULE_18__["WorkProtectionGuard"]] },
    { path: '**', redirectTo: 'jobs', pathMatch: 'full' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_8__["CustomReuseStrategy"] }
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ui_message_angular__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
            jor_angular__WEBPACK_IMPORTED_MODULE_1__["JorAngularModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_4__["JobListComponent"],
        _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_5__["JobDetailComponent"],
        _job_detail_job_steps_job_steps_component__WEBPACK_IMPORTED_MODULE_10__["JobStepsComponent"],
        _job_detail_job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_11__["JobStartConditionComponent"],
        _job_detail_job_occurrences_job_occurrences_component__WEBPACK_IMPORTED_MODULE_12__["JobOccurrencesComponent"],
        _job_detail_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
        _job_detail_job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_14__["JobParametersComponent"],
        _job_detail_job_start_condition_job_recursive_schedule_job_recursive_schedule_component__WEBPACK_IMPORTED_MODULE_15__["JobRecursiveScheduleComponent"],
        _job_detail_date_directive__WEBPACK_IMPORTED_MODULE_16__["DateDirective"],
        _job_detail_job_occurrences_job_occurrence_detail_job_occurrence_detail_component__WEBPACK_IMPORTED_MODULE_17__["JobOccurrenceDetailComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ui_message_angular__WEBPACK_IMPORTED_MODULE_9__["MessageModule"],
        jor_angular__WEBPACK_IMPORTED_MODULE_1__["JorAngularModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "ZmxW":
/*!******************************!*\
  !*** ./src/app/job-types.ts ***!
  \******************************/
/*! exports provided: Job, JobOccurrence, Identity, Step, ParameterValueParis, StartCondition, OutputSetting, ApplicationLog, JobProgram, ParameterDefinitions, ParameterDefinition, Parameter, Parameters, Text, Domain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobOccurrence", function() { return JobOccurrence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterValueParis", function() { return ParameterValueParis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartCondition", function() { return StartCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputSetting", function() { return OutputSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationLog", function() { return ApplicationLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobProgram", function() { return JobProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterDefinitions", function() { return ParameterDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterDefinition", function() { return ParameterDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameter", function() { return Parameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return Parameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
class Job {
}
class JobOccurrence {
}
class Identity {
}
class Step {
}
class ParameterValueParis {
}
class StartCondition {
}
class OutputSetting {
}
class ApplicationLog {
}
class JobProgram {
}
class ParameterDefinitions {
}
class ParameterDefinition {
}
class Parameter {
    constructor() {
        this.mandatory = false;
        this.readOnly = false;
        this.hidden = false;
    }
}
class Parameters {
}
class Text {
}
class Domain {
}


/***/ }),

/***/ "j/PZ":
/*!*****************************************************************************************************!*\
  !*** ./src/app/job-detail/job-occurrences/job-occurrence-detail/job-occurrence-detail.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: JobOccurrenceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobOccurrenceDetailComponent", function() { return JobOccurrenceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../job.service */ "zbxD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../job-parameters/job-parameters.component */ "3Sam");
/* harmony import */ var _job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../job-start-condition/job-start-condition.component */ "7qF7");







function JobOccurrenceDetailComponent_div_0_tr_40_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_div_0_tr_40_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const step_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.openParameters(step_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_div_0_tr_40_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const step_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openOutput(step_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.occStatusColors[step_r4.status || 0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.occStatuses[step_r4.status || 0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r4.program);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !step_r4.output);
} }
function JobOccurrenceDetailComponent_div_0_tr_61_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_div_0_tr_61_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const log_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.openLongMessage(log_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.toLocaleString(log_r8.time));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.messageTypes[log_r8.message.msgType].color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.messageTypes[log_r8.message.msgType].text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](log_r8.message.msgShortText);
} }
function JobOccurrenceDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Scheduled Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Actual Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openStartCondition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Parameters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Output");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, JobOccurrenceDetailComponent_div_0_tr_40_Template, 11, 4, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Store console log into application log");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Application Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "thead", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, JobOccurrenceDetailComponent_div_0_tr_61_Template, 10, 4, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.occStatusColors[ctx_r0.jobOccurrence.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.occStatuses[ctx_r0.jobOccurrence.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.toLocaleString(ctx_r0.jobOccurrence.scheduledDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.toLocaleString(ctx_r0.jobOccurrence.actualStartDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.toLocaleString(ctx_r0.jobOccurrence.endDateTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.jobOccurrence.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.jobOccurrence.outputSetting == null ? null : ctx_r0.jobOccurrence.outputSetting.console2ApplicationLog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.jobOccurrence.applicationLog);
} }
function JobOccurrenceDetailComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-job-start-condition", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainForm", ctx_r1.reducedMainForm)("readonly", true);
} }
const _c0 = function (a0) { return { "show": a0 }; };
const _c1 = function (a0) { return { "display": a0 }; };
class JobOccurrenceDetailComponent {
    constructor(fb, route, jobService) {
        this.fb = fb;
        this.route = route;
        this.jobService = jobService;
        this.occStatuses = [];
        this.occStatusColors = [];
        this.uuid = '';
        this.isParametersModalShown = false;
        this.isOutputModalShown = false;
        this.isLongMessageShown = false;
        this.isStartConditionShown = false;
        this.occStatuses = this.jobService.occStatuses;
        this.occStatusColors = this.jobService.occStatusColors;
        this.messageTypes = this.jobService.messageTypes;
    }
    get displayParametersModal() { return this.isParametersModalShown ? 'block' : 'none'; }
    get displayOutputModal() { return this.isOutputModalShown ? 'block' : 'none'; }
    get displayLongMessageModal() { return this.isLongMessageShown ? 'block' : 'none'; }
    get displayStartConditionModal() { return this.isStartConditionShown ? 'block' : 'none'; }
    ngOnChanges() {
        if (!this.jobOccurrence) {
            return;
        }
        this.reducedMainForm = this.fb.group({
            mode: this.jobOccurrence.startCondition.mode,
            startCondition: this.fb.group({
                mode: [{ value: this.jobOccurrence.startCondition.mode, disabled: true }],
                specificTime: this.jobOccurrence.startCondition.specificTime,
                cronString: this.jobOccurrence.startCondition.cronString,
                cronCurrentDate: this.jobOccurrence.startCondition.cronCurrentDate,
                cronEndDate: this.jobOccurrence.startCondition.cronEndDate,
                tz: this.jobOccurrence.startCondition.tz
            }),
        });
    }
    ngOnInit() {
    }
    openParameters(step) {
        this.isParametersModalShown = true;
        this.jobService.getJobProgramDefinition(step.program)
            .subscribe(programDefinition => {
            if (programDefinition && programDefinition.parameterDefinitions) {
                this.currentParamDefinitions = programDefinition.parameterDefinitions;
            }
        });
        this.currentJobStep = this.fb.group({
            program: step.program,
            parameters: step.parameters,
        });
    }
    closeParameters() {
        this.isParametersModalShown = false;
    }
    openOutput(step) {
        try {
            this.currentOutput = JSON.parse(step.output);
        }
        catch (e) {
            this.currentOutput = step.output;
        }
        this.isOutputModalShown = true;
    }
    closeOutput() {
        this.isOutputModalShown = false;
    }
    openLongMessage(log) {
        this.currentLongMessage = log.message.msgLongText;
        this.isLongMessageShown = true;
    }
    closeLongMessage() {
        this.isLongMessageShown = false;
    }
    openStartCondition() {
        this.isStartConditionShown = true;
    }
    closeStartCondition() {
        this.isStartConditionShown = false;
    }
    toLocaleString(dateStr) {
        return this.jobService.toLocaleString(dateStr);
    }
}
JobOccurrenceDetailComponent.ɵfac = function JobOccurrenceDetailComponent_Factory(t) { return new (t || JobOccurrenceDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"])); };
JobOccurrenceDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobOccurrenceDetailComponent, selectors: [["app-job-occurrence-detail"]], inputs: { jobOccurrence: "jobOccurrence" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 57, vars: 33, consts: [[4, "ngIf"], ["id", "parametersModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-xl", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "parametersTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "container-fluid", "dk-scroll-area"], [3, "parameterDefinitions", "currentJobStep", "readonly"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["id", "outputModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-lg", "modal-dialog-centered"], ["id", "outputTitle", 1, "modal-title"], ["id", "longMessageModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["id", "longMessageTitle", 1, "modal-title"], [1, "modal-body", "container-fluid", "dk-scroll-area", 3, "innerHtml"], ["id", "startConditionModal", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["id", "startConditionTitle", 1, "modal-title"], ["class", "modal-body container-fluid dk-scroll-area", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-sm-4", "col-lg-3"], [1, "text-center", "mt-2", 3, "ngClass"], [1, "col-sm-8", "col-lg-6"], [1, "row"], [1, "col-md-6"], [1, "col-lg-3", "text-center", "mt-2"], ["type", "button", "id", "checkStartCondition", 1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "card", "mt-2"], [1, "card-header"], [1, "card-body"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], ["scope", "col", 1, "dk-status"], ["scope", "col"], ["scope", "col", 1, "dk-icon-para"], ["scope", "col", 1, "dk-icon-output"], [4, "ngFor", "ngForOf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "console2AppLog", "disabled", "", 1, "form-check-input", 3, "ngModel"], ["for", "console2AppLog", 1, "form-check-label"], ["scope", "col", 1, "dk-time"], ["scope", "col", 1, "dk-type"], ["scope", "col", 1, "dk-icon-detail"], [1, "dk-status", 3, "ngClass"], [1, "dk-icon-para"], ["title", "Parameters", "id", "parameters", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "dk-icon-output"], ["title", "Output", "id", "output", "type", "button", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-stream"], [1, "dk-time"], [1, "dk-type", 3, "ngClass"], [1, "dk-icon-detail"], ["title", "Detail", "id", "detail", "type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-info-circle"], [3, "mainForm", "readonly"]], template: function JobOccurrenceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobOccurrenceDetailComponent_div_0_Template, 62, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_7_listener() { return ctx.closeParameters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-job-parameters", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_13_listener() { return ctx.closeParameters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_21_listener() { return ctx.closeOutput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_29_listener() { return ctx.closeOutput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Long Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_37_listener() { return ctx.closeLongMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_42_listener() { return ctx.closeLongMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Start Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_50_listener() { return ctx.closeStartCondition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, JobOccurrenceDetailComponent_div_53_Template, 2, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobOccurrenceDetailComponent_Template_button_click_55_listener() { return ctx.closeStartCondition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobOccurrence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isParametersModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.displayParametersModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parameterDefinitions", ctx.currentParamDefinitions)("currentJobStep", ctx.currentJobStep)("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.isOutputModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.displayOutputModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 15, ctx.currentOutput));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.isLongMessageShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, ctx.displayLongMessageModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.currentLongMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.isStartConditionShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, ctx.displayStartConditionModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reducedMainForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_5__["JobParametersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _job_start_condition_job_start_condition_component__WEBPACK_IMPORTED_MODULE_6__["JobStartConditionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], styles: [".dk-icon-para[_ngcontent-%COMP%]{\n  width: 7rem;\n  min-width: 7rem;\n  max-width: 7rem;\n  text-align: center;\n}\n.dk-icon-output[_ngcontent-%COMP%]{\n  width: 5rem;\n  min-width: 5rem;\n  max-width: 5rem;\n  text-align: center;\n}\n.dk-icon-detail[_ngcontent-%COMP%]{\n  width: 4rem;\n  min-width: 4rem;\n  max-width: 4rem;\n  text-align: center;\n}\n.dk-status[_ngcontent-%COMP%]{\n  width: 6rem;\n  min-width: 6rem;\n  max-width: 6rem;\n}\n.dk-time[_ngcontent-%COMP%]{\n  width: 12rem;\n  min-width: 12rem;\n  max-width: 12rem;\n}\n.dk-type[_ngcontent-%COMP%]{\n  width: 6rem;\n  min-width: 6rem;\n  max-width: 6rem;\n}\n.dk-collapse-btn[_ngcontent-%COMP%]{\n  padding: 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1vY2N1cnJlbmNlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiam9iLW9jY3VycmVuY2UtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGstaWNvbi1wYXJhe1xuICB3aWR0aDogN3JlbTtcbiAgbWluLXdpZHRoOiA3cmVtO1xuICBtYXgtd2lkdGg6IDdyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kay1pY29uLW91dHB1dHtcbiAgd2lkdGg6IDVyZW07XG4gIG1pbi13aWR0aDogNXJlbTtcbiAgbWF4LXdpZHRoOiA1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGstaWNvbi1kZXRhaWx7XG4gIHdpZHRoOiA0cmVtO1xuICBtaW4td2lkdGg6IDRyZW07XG4gIG1heC13aWR0aDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRrLXN0YXR1c3tcbiAgd2lkdGg6IDZyZW07XG4gIG1pbi13aWR0aDogNnJlbTtcbiAgbWF4LXdpZHRoOiA2cmVtO1xufVxuLmRrLXRpbWV7XG4gIHdpZHRoOiAxMnJlbTtcbiAgbWluLXdpZHRoOiAxMnJlbTtcbiAgbWF4LXdpZHRoOiAxMnJlbTtcbn1cbi5kay10eXBle1xuICB3aWR0aDogNnJlbTtcbiAgbWluLXdpZHRoOiA2cmVtO1xuICBtYXgtd2lkdGg6IDZyZW07XG59XG4uZGstY29sbGFwc2UtYnRue1xuICBwYWRkaW5nOiAwIDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ "lxnR":
/*!*************************************************************!*\
  !*** ./src/app/job-detail/job-steps/job-steps.component.ts ***!
  \*************************************************************/
/*! exports provided: JobStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStepsComponent", function() { return JobStepsComponent; });
/* harmony import */ var jor_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jor-angular */ "lxcQ");
/* harmony import */ var _job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-parameters/job-parameters.component */ "3Sam");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../job.service */ "zbxD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function JobStepsComponent_table_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_table_5_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.delete(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_table_5_tr_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.up(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_table_5_tr_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.down(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_table_5_tr_8_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const i_r5 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.adjust(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stepForm_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.castFormGroup(stepForm_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.readonly || i_r5 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.readonly || i_r5 === ctx_r3.jobStepFormArray.length - 1);
} }
function JobStepsComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "thead", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Program");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, JobStepsComponent_table_5_tr_8_Template, 12, 4, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.jobStepFormArray.controls);
} }
const _c0 = function () { return { display: "block" }; };
function JobStepsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Program:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function JobStepsComponent_div_22_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onChangeProgram(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_div_22_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onSearchHelp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.currentJobStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readOnly", !ctx_r1.isNewProgram);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
} }
function JobStepsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-job-parameters", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("parameterDefinitions", ctx_r2.currentParamDefinitions)("currentJobStep", ctx_r2.currentJobStep)("readonly", ctx_r2.readonly);
} }
const _c1 = function (a0) { return { "show": a0 }; };
const _c2 = function (a0) { return { "display": a0 }; };
class JobStepsComponent {
    constructor(fb, messageService, jobService) {
        this.fb = fb;
        this.messageService = messageService;
        this.jobService = jobService;
        this.isAddProgramModalShown = false;
        this.isNewProgram = true;
    }
    get displayAddProgramModal() { return this.isAddProgramModalShown ? 'block' : 'none'; }
    ngOnInit() {
        this.jobStepFormArray = this.mainForm.get('steps');
        this.jobOutputSetting = this.mainForm.get('outputSetting');
    }
    castFormGroup(ctrl) {
        return ctrl;
    }
    add() {
        this.currentJobStep = this.fb.group({
            program: '',
            parameters: ''
        });
        this.onChangeProgram();
        this.isAddProgramModalShown = true;
        this.isNewProgram = true;
    }
    onSearchHelp() {
        if (!this.programSearchHelp) {
            this.programSearchHelp = new jor_angular__WEBPACK_IMPORTED_MODULE_0__["SearchHelp"]();
            this.programSearchHelp.OBJECT_NAME = 'Data Domain';
            // tslint:disable-next-line:only-arrow-functions
            this.programSearchHelp.METHOD = function (jobService) {
                return (searchTerm) => jobService.searchJobPrograms(searchTerm);
            }(this.jobService);
            this.programSearchHelp.BEHAVIOUR = 'A';
            this.programSearchHelp.MULTI = false;
            this.programSearchHelp.FUZZY_SEARCH = true;
            this.programSearchHelp.FIELDS = [
                // tslint:disable-next-line:max-line-length
                { FIELD_NAME: 'name', LIST_HEADER_TEXT: 'Program', IE_FIELD_NAME: 'program', IMPORT: true, EXPORT: true, LIST_POSITION: 1, FILTER_POSITION: 0 },
                { FIELD_NAME: 'description', LIST_HEADER_TEXT: 'Description', IMPORT: true, EXPORT: true, LIST_POSITION: 2, FILTER_POSITION: 0 }
            ];
            this.programSearchHelp.READ_ONLY = this.readonly;
        }
        // tslint:disable-next-line:only-arrow-functions typedef
        const afterExportFn = function (context) {
            return () => context.onChangeProgram();
        }(this).bind(this);
        this.searchHelpComponent.openSearchHelpModal(this.programSearchHelp, this.currentJobStep, afterExportFn);
    }
    onChangeProgram() {
        var _a;
        const programName = (_a = this.currentJobStep.get('program')) === null || _a === void 0 ? void 0 : _a.value;
        if (!programName) {
            this.currentParamDefinitions = {};
            this.currentJobProgramDesc = '';
            return;
        }
        this.jobService.getJobProgramDefinition(programName)
            .subscribe(programDefinition => {
            var _a;
            if (!programDefinition) {
                this.currentParamDefinitions = {};
                this.currentJobProgramDesc = '';
                return;
            }
            this.currentJobProgramDesc = (_a = programDefinition.description) === null || _a === void 0 ? void 0 : _a.DEFAULT;
            this.currentParamDefinitions = programDefinition.parameterDefinitions;
        });
    }
    close() {
        this.currentParamDefinitions = {};
        this.currentJobProgramDesc = '';
        this.isAddProgramModalShown = false;
    }
    confirm() {
        var _a;
        if (!((_a = this.currentJobStep.get('program')) === null || _a === void 0 ? void 0 : _a.value)) {
            this.messageService.reportMessage('JOB', 'INVALID_OR_MISSING_JOB_PROGRAM', 'E');
            return;
        }
        if (!this.jobParametersComponent.generateParamValues()) {
            return;
        }
        if (this.isNewProgram) {
            this.jobStepFormArray.push(this.currentJobStep);
        }
        this.close();
    }
    delete(index) {
        this.jobStepFormArray.removeAt(index);
        this.jobStepFormArray.markAsDirty();
    }
    up(index) {
        if (index > 0) {
            const jobSteps = this.jobStepFormArray.value;
            const newJobSteps = this._swap(jobSteps, index - 1, index);
            this.jobStepFormArray.setValue(newJobSteps);
            this.jobStepFormArray.markAsDirty();
        }
    }
    down(index) {
        const jobSteps = this.jobStepFormArray.value;
        if (index < jobSteps.length - 1) {
            const newJobSteps = this._swap(jobSteps, index, index + 1);
            this.jobStepFormArray.setValue(newJobSteps);
            this.jobStepFormArray.markAsDirty();
        }
    }
    _swap(arr, index1, index2) {
        arr = [...arr];
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }
    adjust(index) {
        this.currentJobStep = this.jobStepFormArray.at(index);
        this.onChangeProgram();
        this.isAddProgramModalShown = true;
        this.isNewProgram = false;
    }
}
JobStepsComponent.ɵfac = function JobStepsComponent_Factory(t) { return new (t || JobStepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"])); };
JobStepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JobStepsComponent, selectors: [["app-job-steps"]], viewQuery: function JobStepsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_1__["JobParametersComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](jor_angular__WEBPACK_IMPORTED_MODULE_0__["SearchHelpComponent"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.jobParametersComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchHelpComponent = _t.first);
    } }, inputs: { readonly: "readonly", mainForm: "mainForm" }, decls: 33, vars: 12, consts: [[1, "dk-job-step-main", "mx-3"], ["role", "toolbar", 1, "btn-toolbar", "justify-content-end"], ["type", "button", "id", "new", 1, "btn", "btn-light", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["class", "table table-bordered table-sm", 4, "ngIf"], [1, "form-check", "form-check-inline", 3, "formGroup"], ["type", "checkbox", "id", "console2AppLog", "formControlName", "console2ApplicationLog", 1, "form-check-input"], ["for", "console2AppLog", 1, "form-check-label"], ["id", "addJobProgram", "tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "ngClass", "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["id", "addAuthObjectTitle", 1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row", "ml-1"], ["class", "input-group col-6", 3, "formGroup", 4, "ngIf"], [1, "col-6"], [1, "text-secondary"], ["class", "container-fluid dk-scroll-area", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "table", "table-bordered", "table-sm"], [1, "thead-light"], [1, "dk-name"], [1, "dk-actions"], [4, "ngFor", "ngForOf"], [1, "dk-program", 3, "formGroup"], ["type", "text", "formControlName", "program", "readonly", "", 1, "form-control", "form-control-sm"], ["type", "button", "id", "delete", "title", "Delete", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "far", "fa-trash-alt"], ["type", "button", "id", "up", "title", "Up", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-chevron-up"], ["type", "button", "id", "down", "title", "Down", 1, "btn", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-chevron-down"], ["type", "button", "id", "adjust", "title", "Adjust", 1, "btn", "btn-sm", 3, "click"], [1, "fas", "fa-sliders-h"], [1, "input-group", "col-6", 3, "formGroup"], ["for", "newProgram", 1, "col-form-label", "form-control-sm"], ["id", "newProgram", "type", "text", "formControlName", "program", 1, "form-control", "form-control-sm", 3, "readOnly", "change"], [1, "input-group-append"], ["type", "button", "id", "searchPermission", 1, "btn", "btn-sm", "btn-outline-secondary", "btn-light", 3, "click"], [1, "fas", "fa-search"], [1, "container-fluid", "dk-scroll-area"], [3, "parameterDefinitions", "currentJobStep", "readonly"]], template: function JobStepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_Template_button_click_2_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, JobStepsComponent_table_5_Template, 9, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Store console log into application log");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Add Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_Template_button_click_16_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "dk-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, JobStepsComponent_div_22_Template, 7, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, JobStepsComponent_div_26_Template, 2, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_Template_button_click_28_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobStepsComponent_Template_button_click_30_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "dk-app-search-help");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobStepFormArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.jobOutputSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx.isAddProgramModalShown))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx.displayAddProgramModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentJobStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.currentJobProgramDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentParamDefinitions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ui_message_angular__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"], jor_angular__WEBPACK_IMPORTED_MODULE_0__["SearchHelpComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _job_parameters_job_parameters_component__WEBPACK_IMPORTED_MODULE_1__["JobParametersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2Itc3RlcHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "qHae":
/*!*****************************************************!*\
  !*** ./src/app/job-detail/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], inputs: { mainForm: "mainForm" }, decls: 17, vars: 4, consts: [[1, "mt-4", "ml-2", "row"], [1, "form-group", "col-md-6", "col-lg-4", 3, "formGroup"], ["for", "createdBy", 1, "col-form-label", "form-control-sm"], ["id", "createdBy", "name", "createdBy", "formControlName", "createdBy", "readonly", "", 1, "form-control", "form-control-sm"], ["for", "createTime", 1, "col-form-label", "form-control-sm"], ["id", "createTime", "name", "createTime", "formControlName", "createTime", "readonly", "", 1, "form-control", "form-control-sm"], ["for", "lastChangedBy", 1, "col-form-label", "form-control-sm"], ["id", "lastChangedBy", "name", "lastChangedBy", "formControlName", "lastChangedBy", "readonly", "", 1, "form-control", "form-control-sm"], ["for", "lastChangeTime", 1, "col-form-label", "form-control-sm"], ["id", "lastChangeTime", "name", "lastChangeTime", "formControlName", "lastChangeTime", "readonly", "", 1, "form-control", "form-control-sm"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Created by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Changed by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Change Time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "uLAD":
/*!*****************************!*\
  !*** ./src/app/msgStore.ts ***!
  \*****************************/
/*! exports provided: msgStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgStore", function() { return msgStore; });
const msgStore = [
    { msgCat: 'JOB',
        msgName: 'GENERAL',
        msgText: {
            EN: { shortText: '%s',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'AT_LEAST_ONE_JOB_MODE',
        msgText: {
            EN: { shortText: 'You need choose at least one job mode',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'AT_LEAST_ONE_JOB_STATUS',
        msgText: {
            EN: { shortText: 'You need choose at least one job status',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'JOB_EXISTS',
        msgText: {
            EN: { shortText: 'Job %s already exists',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'INVALID',
        msgText: {
            EN: { shortText: 'Job contains invalid inputs, correct it before doing next actions',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'NO_CHANGE',
        msgText: {
            EN: { shortText: 'The data has no change',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'INVALID_OR_MISSING_JOB_PROGRAM',
        msgText: {
            EN: { shortText: 'The job program is missing or invalid',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'INVALID_PARAMETER_VALUE',
        msgText: {
            EN: { shortText: 'Invalid parameter value',
                longText: 'dummy' }
        }
    },
    { msgCat: 'JOB',
        msgName: 'NO_STEPS',
        msgText: {
            EN: { shortText: 'You must at least assign one job step',
                longText: 'dummy' }
        }
    }
];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zbxD":
/*!********************************!*\
  !*** ./src/app/job.service.ts ***!
  \********************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ui_message_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-message-angular */ "NlSJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");









const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class JobService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.jobStatuses = ['Initial', 'Ready', 'Completed'];
        this.jobStatusColors = ['text-secondary', 'text-warning', 'text-info'];
        this.occStatuses = ['Initial', 'Ready', 'Running', 'Finished', 'Failed', 'Canceled'];
        this.occStatusColors = ['text-secondary', 'text-info', 'text-warning', 'text-success', 'text-danger', 'text-muted'];
        this.jobModes = ['Immediately', 'Specific-time', 'Recursively', 'Event-based'];
        this.messageTypes = {
            S: { text: 'Success', color: 'text-success' },
            W: { text: 'Warning', color: 'text-warning' },
            E: { text: 'Error', color: 'text-danger' },
            I: { text: 'Information', color: 'text-info' },
            X: { text: 'Exception', color: 'text-danger' }
        };
        this.originalHost = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].originalHost;
    }
    get CurrentTime() {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
    }
    toLocaleString(dateStr) {
        if (dateStr) {
            // to support Safari and Firefox, the dateStr format 'yyyy-MM-dd HH:mm:ss' needs to be converted to 'yyyy/MM/dd HH:mm:ss'
            const dateStrConverted = dateStr.replace(/-/g, '/');
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(dateStrConverted + ' UTC'), 'yyyy-MM-dd HH:mm:ss', 'en-US');
        }
        else {
            return '';
        }
    }
    saveJob(isNew, jobDefinition) {
        if (isNew) {
            return this.http.post(this.originalHost + `/api/jobs`, jobDefinition, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('createJob')));
        }
        else {
            return this.http.put(this.originalHost + `/api/jobs`, jobDefinition, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('changeJob')));
        }
    }
    getJob(jobName) {
        return this.http.get(this.originalHost + `/api/jobs/${jobName}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getJob')));
    }
    getJobStatus(jobName) {
        return this.http.get(this.originalHost + `/api/jobs/${jobName}/status`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getJobStatus')));
    }
    simulateRecurrences(startCondition) {
        return this.http.post(this.originalHost + `/api/simulate/recurrences`, startCondition, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('simulateRecurrences')));
    }
    scheduleJobs(JobNames) {
        return this.http.post(this.originalHost + `/api/jobs/schedule`, JobNames, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('scheduleJobs')));
    }
    cancelJobs(JobNames) {
        return this.http.post(this.originalHost + `/api/jobs/cancel`, JobNames, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('cancelJobs')));
    }
    searchJobs(jobName, status = [0, 1, 2, 3], mode = [0, 1, 2, 3], program) {
        let queryString = '';
        if (jobName) {
            queryString += `&name_includes=${jobName}`;
        }
        status.forEach(s => queryString += `&status=${s}`);
        mode.forEach(m => queryString += `&mode=${m}`);
        if (program) {
            queryString += `&program=${program}`;
        }
        queryString = queryString.replace('&', '?');
        return this.http.get(this.originalHost + `/api/jobs${queryString}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('searchJobs')));
    }
    searchJobOccurrences(jobName, status = [0, 1, 2, 3, 4, 5], startDate, endDate) {
        let queryString = '';
        status.forEach(s => queryString += `&status=${s}`);
        if (startDate) {
            queryString += `&startDate=${startDate}`;
        }
        if (endDate) {
            queryString += `&endDate=${endDate}`;
        }
        queryString = queryString.replace('&', '?');
        return this.http.get(this.originalHost + `/api/jobs/${jobName}/occurrences` + queryString, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('searchJobOccurrences')));
    }
    getOccurrence(uuid) {
        return this.http.get(this.originalHost + `/api/occurrences/${uuid}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getOccurrence')));
    }
    cancelOccurrences(uuids) {
        return this.http.post(this.originalHost + `/api/occurrences/cancel`, uuids, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('cancelOccurrences')));
    }
    searchJobPrograms(nameFilter) {
        return this.http.get(this.originalHost + `/api/jobPrograms?nameFilter=${nameFilter}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('searchJobPrograms')));
    }
    getJobProgramDefinition(name) {
        return this.http.get(this.originalHost + `/api/jobPrograms/${name}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getJobProgramDefinition')));
    }
    // tslint:disable-next-line:typedef
    handleError(operation = 'operation', result) {
        return (error) => {
            if (error.status === 401) {
                this.messageService.addMessage('EXCEPTION', 'NOT_AUTHENTICATED_OR_SESSION_EXPIRED', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Exception);
            }
            else {
                this.messageService.addMessage('EXCEPTION', 'GENERIC', ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["messageType"].Exception, operation, error.message);
            }
            // this.router.navigate(['errors']);
            console.error(operation, error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
}
JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](ui_message_angular__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map