(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{cAcB:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),a=function(){},t=u("pMnS"),s=u("gIcY"),e=u("Ip0R"),i=u("9W44"),r=u("SHZb"),c=u("AytR"),d=u("Ocbj"),g=function(){function l(){}return l.PasswordMustHaveNumbers=function(l){return/\d/.test(l.value)?null:{passwordMustHaveNumbers:"Password without numbers are not allowed"}},l.MatchPassword=function(l){if(l.get("password").value===l.get("confirmPassword").value)return null;l.get("confirmPassword").setErrors({matchPassword:!0})},l}(),p=u("Y9ZX"),b=function(){function l(l,n,u,o){var a=this;this.fb=l,this.http=n,this.formTools=u,this.globalStore=o,this.isNewAccount=!1,this.url=c.a.apiUrl+"pub/credentials/",this.onSuccess=function(l){a.globalStore.dispatchUserMessage("Wellcome"),a.globalStore.dispatchToken(l.token),a.globalStore.dispatchLoginNeeded(!1)},this.onError=function(l){a.isNewAccount?(a.globalStore.dispatchUserMessage("Account already exists"),a.form.reset()):a.globalStore.dispatchUserMessage("Invalid credentials"),a.globalStore.dispatchToken("")}}return l.prototype.ngOnInit=function(){this.onAccount()},l.prototype.onNoAccount=function(){this.form=this.fb.group({name:["",[s.l.required]],email:["",[s.l.required,s.l.email]],password:["",[s.l.required,s.l.minLength(4),g.PasswordMustHaveNumbers]],confirmPassword:["",[s.l.required,s.l.minLength(4)]]},{validator:g.MatchPassword}),this.isNewAccount=!0},l.prototype.onAccount=function(){this.form=this.fb.group({email:["",[s.l.required,s.l.email]],password:["",[s.l.required,s.l.minLength(4),g.PasswordMustHaveNumbers]]}),this.isNewAccount=!1},l.prototype.onLogin=function(){this.http.post(this.url+"login",this.form.value).subscribe(this.onSuccess,this.onError)},l.prototype.onRegister=function(){this.http.post(this.url+"registration",this.form.value).subscribe(this.onSuccess,this.onError)},l.prototype.getErrors=function(l){return this.formTools.getErrors(this.form,l)},l.prototype.mustShowError=function(l){return this.formTools.mustShowError(this.form,l)},l.prototype.hasError=function(l,n){return this.formTools.hasError(this.form,l,n)},l}(),m=u("t/Na"),f=o.Qa({encapsulation:2,styles:[],data:{}});function h(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["We need a name"]))],null,null)}function w(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,11,"div",[["class","field"]],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"label",[["class","label"],["for","name"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["Name"])),(l()(),o.Sa(3,0,null,null,6,"div",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(4,0,null,null,5,"input",[["class","input"],["formControlName","name"],["name","name"],["placeholder","Your name, please"],["type","text "]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==o.cb(l,5)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==o.cb(l,5).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.cb(l,5)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.cb(l,5)._compositionEnd(u.target.value)&&a),a},null,null)),o.Ra(5,16384,null,0,s.c,[o.F,o.l,[2,s.a]],null,null),o.gb(1024,null,s.g,function(l){return[l]},[s.c]),o.Ra(7,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.g],[2,s.q]],{name:[0,"name"]},null),o.gb(2048,null,s.h,null,[s.e]),o.Ra(9,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),o.Ja(16777216,null,null,1,null,h)),o.Ra(11,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,7,0,"name"),l(n,11,0,u.mustShowError("name"))},function(l,n){l(n,4,0,o.cb(n,9).ngClassUntouched,o.cb(n,9).ngClassTouched,o.cb(n,9).ngClassPristine,o.cb(n,9).ngClassDirty,o.cb(n,9).ngClassValid,o.cb(n,9).ngClassInvalid,o.cb(n,9).ngClassPending)})}function v(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["We need a valid email"]))],null,null)}function S(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["We need a password"]))],null,null)}function R(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(l()(),o.ib(1,null,["We need at least "," digits"]))],null,function(l,n){l(n,1,0,n.component.getErrors("password").minlength.requiredLength)})}function C(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(l()(),o.ib(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.getErrors("password").passwordMustHaveNumbers)})}function I(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,6,"span",[],null,null,null,null,null)),(l()(),o.Ja(16777216,null,null,1,null,S)),o.Ra(2,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Ja(16777216,null,null,1,null,R)),o.Ra(4,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Ja(16777216,null,null,1,null,C)),o.Ra(6,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.hasError("password","required")),l(n,4,0,u.hasError("password","minlength")),l(n,6,0,u.hasError("password","passwordMustHaveNumbers"))},null)}function k(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,1,"p",[["class","help is-danger"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["Passwords do not match"]))],null,null)}function P(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),o.Ja(16777216,null,null,1,null,k)),o.Ra(2,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.hasError("confirmPassword","matchPassword"))},null)}function y(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,11,"div",[["class","field"]],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"label",[["class","label"],["for","confirmPassword"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["Confirm Password"])),(l()(),o.Sa(3,0,null,null,6,"div",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(4,0,null,null,5,"input",[["class","input"],["formControlName","confirmPassword"],["name","confirmPassword"],["placeholder","repeat password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==o.cb(l,5)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==o.cb(l,5).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.cb(l,5)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.cb(l,5)._compositionEnd(u.target.value)&&a),a},null,null)),o.Ra(5,16384,null,0,s.c,[o.F,o.l,[2,s.a]],null,null),o.gb(1024,null,s.g,function(l){return[l]},[s.c]),o.Ra(7,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.g],[2,s.q]],{name:[0,"name"]},null),o.gb(2048,null,s.h,null,[s.e]),o.Ra(9,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),o.Ja(16777216,null,null,1,null,P)),o.Ra(11,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,7,0,"confirmPassword"),l(n,11,0,u.mustShowError("confirmPassword"))},function(l,n){l(n,4,0,o.cb(n,9).ngClassUntouched,o.cb(n,9).ngClassTouched,o.cb(n,9).ngClassPristine,o.cb(n,9).ngClassDirty,o.cb(n,9).ngClassValid,o.cb(n,9).ngClassInvalid,o.cb(n,9).ngClassPending)})}function N(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"button",[["class","button is-warning is-large"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onLogin()&&o),o},null,null)),(l()(),o.ib(-1,null,["Login"]))],null,function(l,n){l(n,1,0,n.component.form.invalid)})}function E(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"button",[["class","button is-info is-large"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onRegister()&&o),o},null,null)),(l()(),o.ib(-1,null,["Register"]))],null,function(l,n){l(n,1,0,n.component.form.invalid)})}function A(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"button",[["class","button is-outlined is-large"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onNoAccount()&&o),o},null,null)),(l()(),o.ib(-1,null,["I don\xb4t have an account yet."]))],null,null)}function O(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,2,"span",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(1,0,null,null,1,"button",[["class","button is-outlined is-large"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.onAccount()&&o),o},null,null)),(l()(),o.ib(-1,null,["I already have an account."]))],null,null)}function J(l){return o.kb(2,[(l()(),o.Sa(0,0,null,null,47,"app-card",[["caption","Access to autobot"]],null,null,null,i.b,i.a)),o.Ra(1,114688,null,0,r.a,[],{caption:[0,"caption"]},null),(l()(),o.Sa(2,0,null,0,35,"main",[],null,null,null,null,null)),(l()(),o.Sa(3,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"submit"],[null,"reset"]],function(l,n,u){var a=!0,t=l.component;return"submit"===n&&(a=!1!==o.cb(l,5).onSubmit(u)&&a),"reset"===n&&(a=!1!==o.cb(l,5).onReset()&&a),"keyup.enter"===n&&(a=!1!==(t.isNewAccount?t.onRegister():t.onLogin())&&a),a},null,null)),o.Ra(4,16384,null,0,s.o,[],null,null),o.Ra(5,540672,null,0,s.f,[[8,null],[8,null]],{form:[0,"form"]},null),o.gb(2048,null,s.b,null,[s.f]),o.Ra(7,16384,null,0,s.j,[[4,s.b]],null,null),(l()(),o.Sa(8,0,null,null,1,"legend",[],null,null,null,null,null)),(l()(),o.ib(-1,null,[" Use your account or create a new one "])),(l()(),o.Ja(16777216,null,null,1,null,w)),o.Ra(11,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Sa(12,0,null,null,11,"div",[["class","field"]],null,null,null,null,null)),(l()(),o.Sa(13,0,null,null,1,"label",[["class","label"],["for","email"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["Email"])),(l()(),o.Sa(15,0,null,null,6,"div",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(16,0,null,null,5,"input",[["class","input"],["formControlName","email"],["name","email"],["placeholder","Email address"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==o.cb(l,17)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==o.cb(l,17).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.cb(l,17)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.cb(l,17)._compositionEnd(u.target.value)&&a),a},null,null)),o.Ra(17,16384,null,0,s.c,[o.F,o.l,[2,s.a]],null,null),o.gb(1024,null,s.g,function(l){return[l]},[s.c]),o.Ra(19,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.g],[2,s.q]],{name:[0,"name"]},null),o.gb(2048,null,s.h,null,[s.e]),o.Ra(21,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),o.Ja(16777216,null,null,1,null,v)),o.Ra(23,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Sa(24,0,null,null,11,"div",[["class","field"]],null,null,null,null,null)),(l()(),o.Sa(25,0,null,null,1,"label",[["class","label"],["for","password"]],null,null,null,null,null)),(l()(),o.ib(-1,null,["Password"])),(l()(),o.Sa(27,0,null,null,6,"div",[["class","control"]],null,null,null,null,null)),(l()(),o.Sa(28,0,null,null,5,"input",[["class","input"],["formControlName","password"],["name","password"],["placeholder","4 digits password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0;return"input"===n&&(a=!1!==o.cb(l,29)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==o.cb(l,29).onTouched()&&a),"compositionstart"===n&&(a=!1!==o.cb(l,29)._compositionStart()&&a),"compositionend"===n&&(a=!1!==o.cb(l,29)._compositionEnd(u.target.value)&&a),a},null,null)),o.Ra(29,16384,null,0,s.c,[o.F,o.l,[2,s.a]],null,null),o.gb(1024,null,s.g,function(l){return[l]},[s.c]),o.Ra(31,671744,null,0,s.e,[[3,s.b],[8,null],[8,null],[6,s.g],[2,s.q]],{name:[0,"name"]},null),o.gb(2048,null,s.h,null,[s.e]),o.Ra(33,16384,null,0,s.i,[[4,s.h]],null,null),(l()(),o.Ja(16777216,null,null,1,null,I)),o.Ra(35,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Ja(16777216,null,null,1,null,y)),o.Ra(37,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Sa(38,0,null,1,9,"footer",[],null,null,null,null,null)),(l()(),o.Sa(39,0,null,null,8,"section",[["class","field is-grouped"]],null,null,null,null,null)),(l()(),o.Ja(16777216,null,null,1,null,N)),o.Ra(41,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Ja(16777216,null,null,1,null,E)),o.Ra(43,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Ja(16777216,null,null,1,null,A)),o.Ra(45,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null),(l()(),o.Ja(16777216,null,null,1,null,O)),o.Ra(47,16384,null,0,e.m,[o.R,o.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,"Access to autobot"),l(n,5,0,u.form),l(n,11,0,u.isNewAccount),l(n,19,0,"email"),l(n,23,0,u.mustShowError("email")),l(n,31,0,"password"),l(n,35,0,u.mustShowError("password")),l(n,37,0,u.isNewAccount),l(n,41,0,!u.isNewAccount),l(n,43,0,u.isNewAccount),l(n,45,0,!u.isNewAccount),l(n,47,0,u.isNewAccount)},function(l,n){l(n,3,0,o.cb(n,7).ngClassUntouched,o.cb(n,7).ngClassTouched,o.cb(n,7).ngClassPristine,o.cb(n,7).ngClassDirty,o.cb(n,7).ngClassValid,o.cb(n,7).ngClassInvalid,o.cb(n,7).ngClassPending),l(n,16,0,o.cb(n,21).ngClassUntouched,o.cb(n,21).ngClassTouched,o.cb(n,21).ngClassPristine,o.cb(n,21).ngClassDirty,o.cb(n,21).ngClassValid,o.cb(n,21).ngClassInvalid,o.cb(n,21).ngClassPending),l(n,28,0,o.cb(n,33).ngClassUntouched,o.cb(n,33).ngClassTouched,o.cb(n,33).ngClassPristine,o.cb(n,33).ngClassDirty,o.cb(n,33).ngClassValid,o.cb(n,33).ngClassInvalid,o.cb(n,33).ngClassPending)})}var T=o.Oa("app-access",b,function(l){return o.kb(0,[(l()(),o.Sa(0,0,null,null,1,"app-access",[],null,null,null,J,f)),o.Ra(1,114688,null,0,b,[s.d,m.c,p.a,d.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=u("ZYCi"),q=function(){},_=u("PCNd");u.d(n,"AuthModuleNgFactory",function(){return U});var U=o.Pa(a,[],function(l){return o.Za([o.ab(512,o.k,o.Ea,[[8,[t.a,T]],[3,o.k],o.z]),o.ab(4608,e.o,e.n,[o.w,[2,e.w]]),o.ab(4608,s.d,s.d,[]),o.ab(4608,s.p,s.p,[]),o.ab(4608,p.a,p.a,[]),o.ab(1073742336,e.c,e.c,[]),o.ab(1073742336,M.p,M.p,[[2,M.w],[2,M.n]]),o.ab(1073742336,q,q,[]),o.ab(1073742336,s.m,s.m,[]),o.ab(1073742336,s.k,s.k,[]),o.ab(1073742336,_.a,_.a,[]),o.ab(1073742336,a,a,[]),o.ab(1024,M.l,function(){return[[{path:"",component:b}]]},[])])})}}]);