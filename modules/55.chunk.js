(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{Heq1:function(l,n){l.exports="const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));\n\n@NgModule({\n    declarations: [\n        upgradeAdapter.upgradeNg1Component('dynamicSelect') // Upgrade 'dynamic-select' directive\n    ]\n})\nexport class AppModule() {}"},bxl4:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("5h3g"),d=function(){return function(l){this.appConfig=l,this.version=this.appConfig.get("version"),this.angularJs=u("jMo7"),this.stylesheetCss=u("pB7L"),this.angularUpgradeTs=u("Heq1")}}(),a=function(){return function(){}}(),o=u("WmtN"),c=u("HRZI"),i=u("pMnS"),r=u("GBPT"),s=u("umu3"),p=u("f/B4"),g=u("7eYo"),m=u("0FDo"),h=u("ZYCi"),f=u("Ip0R"),b=u("f5YR"),y=u("r1ng"),v=u("COk8"),C=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]  .nav-tabs{margin-bottom:15px}[_nghost-%COMP%]  .tab-content pre[class*=language-]{border-top:1px solid #ddd}"]],data:{}});function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"uxd-page-header",[["header","Getting Started"]],null,null,null,s.b,s.a)),e["\u0275did"](1,49152,null,0,p.a,[],{header:[0,"header"]},null),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](3,0,null,null,137,"uxd-text-page-layout",[],null,null,null,g.b,g.a)),e["\u0275did"](4,49152,null,0,m.a,[],null,null),(l()(),e["\u0275ted"](-1,0,["\n    "])),(l()(),e["\u0275eld"](6,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Installation"])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](9,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        UX Aspects (AngularJS) components can be used in AngularJS projects, and those shown in the\n        "])),(l()(),e["\u0275eld"](11,0,null,null,2,"a",[["routerLink","/css"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](12,671744,null,0,h.o,[h.m,h.a,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["CSS"])),(l()(),e["\u0275ted"](-1,null,[" section can be used in non-Angular projects. Details on installing and using the\n        components are shown below.\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](16,0,null,0,14,"ol",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](18,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            Install "])),(l()(),e["\u0275eld"](20,0,null,null,2,"a",[["href","https://nodejs.org/"]],null,null,null,null,null)),e["\u0275did"](21,212992,null,0,b.W,[e.ElementRef,b.Ob,b.c,e.NgZone,[2,b.fc]],null,null),(l()(),e["\u0275ted"](-1,null,["Node.js"])),(l()(),e["\u0275ted"](-1,null,[", which provides the NPM package manager. Select the LTS\n            version when downloading.\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](25,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            Install the UX Aspects (AngularJS) package and its dependencies:\n            "])),(l()(),e["\u0275eld"](27,0,null,null,1,"kbd",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["npm install @ux-aspects/ux-aspects-ng1 --save"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](32,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Applying the Stylesheet"])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](35,0,null,0,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        The stylesheet can be found within the "])),(l()(),e["\u0275eld"](37,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["@ux-aspects/ux-aspects-ng1"])),(l()(),e["\u0275ted"](-1,null,[" package, in\n        "])),(l()(),e["\u0275eld"](40,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["styles/ux-aspects.css"])),(l()(),e["\u0275ted"](-1,null,[". If using webpack, this can be imported directly into the main stylesheet of\n        the application:\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](44,0,null,0,1,"uxd-snippet",[["language","css"]],null,null,null,y.b,y.a)),e["\u0275did"](45,114688,null,0,v.a,[],{language:[0,"language"],code:[1,"code"]},null),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](47,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Using UX Aspects (AngularJS)"])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](50,0,null,0,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        The AngularJS library can be loaded from "])),(l()(),e["\u0275eld"](52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["@ux-aspects/ux-aspects-ng1/ng1/ux-aspects-ng1.js"])),(l()(),e["\u0275ted"](-1,null,[". Include\n        "])),(l()(),e["\u0275eld"](55,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["'ux-aspects'"])),(l()(),e["\u0275ted"](-1,null,[" in the module dependencies, e.g.:\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](59,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,y.b,y.a)),e["\u0275did"](60,114688,null,0,v.a,[],{language:[0,"language"],code:[1,"code"]},null),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](62,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        The AngularJS components can also be used in a hybrid Angular app. However, please check the\n        "])),(l()(),e["\u0275eld"](64,0,null,null,2,"a",[["href","https://uxaspects.github.io/UXAspects/"]],null,null,null,null,null)),e["\u0275did"](65,212992,null,0,b.W,[e.ElementRef,b.Ob,b.c,e.NgZone,[2,b.fc]],null,null),(l()(),e["\u0275ted"](-1,null,["UX Aspects documentation"])),(l()(),e["\u0275ted"](-1,null,[" for a native Angular version of\n        the required component before taking this option.\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](69,0,null,0,53,"ul",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](71,0,null,null,37,"li",[["class","m-b"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](73,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                If the component is marked "])),(l()(),e["\u0275eld"](75,0,null,null,1,"span",[["class","label label-accent"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Angular Compatible"])),(l()(),e["\u0275ted"](-1,null,[" in the\n                documentation, you can use it by importing "])),(l()(),e["\u0275eld"](78,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["HybridModule"])),(l()(),e["\u0275ted"](-1,null,[" into the module where it will be\n                used.\n            "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](82,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                The component name remains the same; however, the following should be considered when using this\n                component in an Angular template:\n            "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](85,0,null,null,22,"ul",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](87,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    Property names use camel case, so a property named "])),(l()(),e["\u0275eld"](89,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["on-next"])),(l()(),e["\u0275ted"](-1,null,[" becomes "])),(l()(),e["\u0275eld"](92,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["onNext"])),(l()(),e["\u0275ted"](-1,null,[".\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](96,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    Angular binding syntax must be used, so a property with variable or function binding named\n                    "])),(l()(),e["\u0275eld"](98,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["valid"])),(l()(),e["\u0275ted"](-1,null,[" would be written as "])),(l()(),e["\u0275eld"](101,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["[valid]"])),(l()(),e["\u0275ted"](-1,null,[" for one-way binding, or\n                    "])),(l()(),e["\u0275eld"](104,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["[(valid)]"])),(l()(),e["\u0275ted"](-1,null,[" for two-way binding (if supported).\n                "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n\n        "])),(l()(),e["\u0275eld"](110,0,null,null,11,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](112,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                Otherwise, the component should be upgraded using Angular's\n                "])),(l()(),e["\u0275eld"](114,0,null,null,2,"a",[["href","https://angular.io/api/upgrade/UpgradeAdapter"]],null,null,null,null,null)),e["\u0275did"](115,212992,null,0,b.W,[e.ElementRef,b.Ob,b.c,e.NgZone,[2,b.fc]],null,null),(l()(),e["\u0275ted"](-1,null,["UpgradeAdapter"])),(l()(),e["\u0275ted"](-1,null,[".\n            "])),(l()(),e["\u0275ted"](-1,null,["\n\n            "])),(l()(),e["\u0275eld"](119,0,null,null,1,"uxd-snippet",[["language","javascript"]],null,null,null,y.b,y.a)),e["\u0275did"](120,114688,null,0,v.a,[],{language:[0,"language"],code:[1,"code"]},null),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](124,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Additional Information"])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](127,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        The "])),(l()(),e["\u0275eld"](129,0,null,null,2,"a",[["routerLink","/changelog"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,130).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](130,671744,null,0,h.o,[h.m,h.a,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["changelog"])),(l()(),e["\u0275ted"](-1,null,[" contains details of current and previous releases of UX Aspects\n        (AngularJS).\n    "])),(l()(),e["\u0275ted"](-1,0,["\n\n    "])),(l()(),e["\u0275eld"](134,0,null,0,5,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        The "])),(l()(),e["\u0275eld"](136,0,null,null,2,"a",[["routerLink","/licenses"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,137).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](137,671744,null,0,h.o,[h.m,h.a,f.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),e["\u0275ted"](-1,null,["licenses page"])),(l()(),e["\u0275ted"](-1,null,[" contains the licensing details for UX Aspects and the 3rd party\n        libraries that it depends upon.\n    "])),(l()(),e["\u0275ted"](-1,0,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,"Getting Started"),l(n,12,0,"/css"),l(n,21,0),l(n,45,0,"css",u.stylesheetCss),l(n,60,0,"javascript",u.angularJs),l(n,65,0),l(n,115,0),l(n,120,0,"javascript",u.angularUpgradeTs),l(n,130,0,"/changelog"),l(n,137,0,"/licenses")},function(l,n){l(n,11,0,e["\u0275nov"](n,12).target,e["\u0275nov"](n,12).href),l(n,129,0,e["\u0275nov"](n,130).target,e["\u0275nov"](n,130).href),l(n,136,0,e["\u0275nov"](n,137).target,e["\u0275nov"](n,137).href)})}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"uxd-getting-started",[],null,null,null,A,C)),e["\u0275did"](1,49152,null,0,d,[t.a],null,null)],null,null)}var x=e["\u0275ccf"]("uxd-getting-started",d,k,{},{},[]),w=u("dWZg"),N=u("lLAP"),M=u("gIcY"),L=u("Fzqc"),U=u("qAlS"),O=u("eDkP"),S=u("M2Lx"),T=u("qina"),j=u("zCE2"),D=u("4c35"),I=u("FLOw"),R=u("XtaT");u.d(n,"GettingStartedPageModuleNgFactory",function(){return E});var E=e["\u0275cmf"](a,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,c.q,c.a,i.a,r.a,x]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[e.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,w.a,w.a,[]),e["\u0275mpd"](4608,N.i,N.i,[w.a]),e["\u0275mpd"](4608,N.h,N.h,[N.i,e.NgZone,f.DOCUMENT]),e["\u0275mpd"](136192,N.c,N.b,[[3,N.c],f.DOCUMENT]),e["\u0275mpd"](5120,N.l,N.k,[[3,N.l],[2,N.j],f.DOCUMENT]),e["\u0275mpd"](5120,N.g,N.e,[[3,N.g],e.NgZone,w.a]),e["\u0275mpd"](5120,b.C,b.p,[[3,b.C],[2,b.q]]),e["\u0275mpd"](4608,b.c,b.c,[[2,b.a]]),e["\u0275mpd"](4608,b.I,b.I,[]),e["\u0275mpd"](5120,b.Nb,b.gb,[[3,b.Nb]]),e["\u0275mpd"](4608,b.Ob,b.Ob,[N.g,b.c,b.Nb,[2,b.a],e.RendererFactory2]),e["\u0275mpd"](4608,b.gc,b.gc,[e.RendererFactory2]),e["\u0275mpd"](4608,M.p,M.p,[]),e["\u0275mpd"](4608,b.Zc,b.Zc,[]),e["\u0275mpd"](6144,L.b,null,[f.DOCUMENT]),e["\u0275mpd"](4608,L.c,L.c,[[2,L.b]]),e["\u0275mpd"](5120,U.c,U.a,[[3,U.c],e.NgZone,w.a]),e["\u0275mpd"](5120,U.f,U.e,[[3,U.f],w.a,e.NgZone]),e["\u0275mpd"](4608,O.f,O.f,[U.c,U.f,e.NgZone,f.DOCUMENT]),e["\u0275mpd"](5120,O.b,O.g,[[3,O.b],f.DOCUMENT]),e["\u0275mpd"](4608,O.e,O.e,[U.f,f.DOCUMENT]),e["\u0275mpd"](5120,O.c,O.j,[[3,O.c],f.DOCUMENT]),e["\u0275mpd"](4608,O.a,O.a,[O.f,O.b,e.ComponentFactoryResolver,O.e,O.c,e.ApplicationRef,e.Injector,e.NgZone,f.DOCUMENT]),e["\u0275mpd"](5120,O.h,O.i,[O.a]),e["\u0275mpd"](4608,S.b,S.b,[]),e["\u0275mpd"](4608,b.Be,b.Be,[]),e["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),e["\u0275mpd"](1073742336,w.b,w.b,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,b.D,b.D,[]),e["\u0275mpd"](1073742336,b.b,b.b,[]),e["\u0275mpd"](1073742336,b.i,b.i,[]),e["\u0275mpd"](1073742336,T.a,T.a,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,b.fb,b.fb,[]),e["\u0275mpd"](1073742336,M.n,M.n,[]),e["\u0275mpd"](1073742336,M.d,M.d,[]),e["\u0275mpd"](1073742336,b.Yc,b.Yc,[]),e["\u0275mpd"](1073742336,L.a,L.a,[]),e["\u0275mpd"](1073742336,D.c,D.c,[]),e["\u0275mpd"](1073742336,U.b,U.b,[]),e["\u0275mpd"](1073742336,O.d,O.d,[]),e["\u0275mpd"](1073742336,S.c,S.c,[]),e["\u0275mpd"](1073742336,b.y,b.y,[]),e["\u0275mpd"](1073742336,b.Ae,b.Ae,[]),e["\u0275mpd"](1073742336,b.cd,b.cd,[]),e["\u0275mpd"](1073742336,h.p,h.p,[[2,h.v],[2,h.m]]),e["\u0275mpd"](1073742336,b.wd,b.wd,[]),e["\u0275mpd"](1073742336,I.a,I.a,[]),e["\u0275mpd"](1073742336,R.a,R.a,[]),e["\u0275mpd"](1073742336,b.je,b.je,[]),e["\u0275mpd"](1073742336,a,a,[]),e["\u0275mpd"](1024,h.k,function(){return[[{path:"",component:d}]]},[])])})},jMo7:function(l,n){l.exports="angular.module('app', ['ux-aspects']);"},pB7L:function(l,n){l.exports='@import url("~@ux-aspects/ux-aspects-ng1/styles/ux-aspects.css");'},r1ng:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u.d(n,"b",function(){return d});var e=u("CcnG"),t=(u("COk8"),e["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function d(l){return e["\u0275vid"](2,[e["\u0275qud"](402653184,1,{codeContainer:0}),(l()(),e["\u0275eld"](1,16777216,[[1,3],["code",1]],null,0,"pre",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"language-",n.component.language,""))})}}}]);