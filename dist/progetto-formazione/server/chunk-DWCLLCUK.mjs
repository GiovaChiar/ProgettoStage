import './polyfills.server.mjs';
import{$ as ke,A as p,B as C,Ba as Ue,C as F,D as H,Da as We,E as Se,Ea as Qe,F as f,Fa as Je,G as ie,H as V,I as l,J as c,K as ne,L as _,M as Me,N as Ee,O as $,P as y,Q as L,R as se,S as b,T as Ce,U as oe,V as ae,W as re,X as le,Y as Ie,Z as Ne,_ as Re,a as ge,b as T,c as me,d as Z,da as Ae,e as K,f as E,g as be,ga as j,h as P,ha as Pe,i as ve,ia as z,j as B,k as x,ka as xe,l as ye,la as Fe,m as we,ma as Be,n as g,na as O,o as Te,oa as Ge,p as X,pa as He,q as D,qa as Ve,r as d,ra as U,s as De,sa as $e,t as Oe,ta as Le,u as h,ua as je,v as m,w as u,x as ee,xa as ze,y as G,z as te}from"./chunk-V5R2GKLP.mjs";import{a as q,b as _e}from"./chunk-KRLCULJA.mjs";var Et=i=>({color:i}),Ct=(i,e)=>({"border-color":i,"border-width":e}),It=()=>({color:"red"}),W=(()=>{let e=class e{constructor(){this.type="text",this.wrong=!1,this.message="missing field",this.value="",this.inputEmitter=new F}onInput(t){this.value=t.target.value}emitInput(){this.inputEmitter.emit(this.value)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-input-tile"]],inputs:{title:"title",type:"type",wrong:"wrong",message:"message"},outputs:{inputEmitter:"inputEmitter"},standalone:!0,features:[b],decls:7,vars:18,consts:[[3,"ngClass"],[3,"for","ngStyle"],[3,"id","ngStyle","type","input","change"],[3,"hidden","ngStyle"]],template:function(n,s){n&1&&(l(0,"div",0)(1,"label",1),y(2),re(3,"titlecase"),c(),l(4,"input",2),_("input",function(a){return s.onInput(a)})("change",function(){return s.emitInput()}),c(),l(5,"p",3),y(6),c()()),n&2&&(f("ngClass",s.type),p(1),$("for",s.title),f("ngStyle",oe(12,Et,s.wrong?"red":"")),p(1),L(le(3,10,s.title)),p(2),$("id",s.title),$("type",s.type),f("ngStyle",ae(14,Ct,s.wrong?"red":"",s.wrong?"3px":"")),p(1),f("hidden",!s.wrong)("ngStyle",Ce(17,It)),p(1),L(s.message))},dependencies:[O,xe,Fe,Be],styles:[".password[_ngcontent-%COMP%]{padding-bottom:20px}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:7px;border-top:none;border-left:none;border-color:gray;outline:none;font-size:smaller}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .password[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{background-color:azure;border-color:#ff4500}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {padding-inline-start:5px}.text[_ngcontent-%COMP%]{padding-bottom:10px}.text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:7px;border-top:none;border-color:gray;border-left:none;outline:none;font-size:smaller}.text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block}.text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{background-color:azure;border-color:#ff4500}.text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {padding-inline-start:5px}"]});let i=e;return i})();var Q=(()=>{let e=class e{constructor(t){this.http=t,this.user={username:"",email:"",password:""}}setEmail(t){return t.toLocaleLowerCase().match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")?(this.user.email=t,!0):!1}setUsername(t){return this.user.username=t,!0}setPassword(t){this.user.password=t}tryLogin(){return this.user.email===""&&this.user.username===""&&this.user.password===""?0:this.user.password===""?1:this.user.email===""&&this.user.username===""?2:(localStorage.setItem("user",JSON.stringify(this.user)),3)}};e.\u0275fac=function(n){return new(n||e)(Oe(Ge))},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ye=(()=>{let e=class e{constructor(t){this.autService=t,this.id="email",this.id2="username",this.wrongUsername=!1,this.messageUsername="",this.pw="password",this.wrongPassword=!1,this.messagePassword=""}changeId(){var t=this.id;this.id=this.id2,this.id2=t,this.wrongUsername=!1,this.autService.setUsername(""),this.autService.setEmail("")}handleUsernameEmitted(t){this.id==="email"?this.autService.setEmail(t)?this.wrongUsername=!1:(this.wrongUsername=!0,this.messageUsername="write an existing mail"):this.autService.setUsername(t)}handlePasswordEmitted(t){this.wrongPassword=!1,this.autService.setPassword(t)}loginRequest(){switch(this.autService.tryLogin()){case 0:this.wrongPassword=!0,this.wrongUsername=!0,this.messageUsername="missing username",this.messagePassword="missing password";break;case 1:this.wrongPassword=!0,this.messagePassword="missing password";break;case 2:this.wrongUsername=!0,this.messageUsername="missing username";break;case 3:this.wrongPassword=!0,this.wrongUsername=!0,this.messageUsername="wrong credentials",this.messagePassword="wrong credentials";break}}};e.\u0275fac=function(n){return new(n||e)(C(Q))},e.\u0275cmp=m({type:e,selectors:[["app-login"]],standalone:!0,features:[se([U,Q]),b],decls:12,vars:7,consts:[[1,"h-100","d-flex","align-items-center","justify-content-center","p-3","bg-primary"],[1,"bg-light","border","rounded","border-top-start-0","border-dark","p-3"],[1,"d-flex","justify-content-center"],[3,"title","wrong","message","inputEmitter"],["type","button",1,"register",3,"click"],[3,"title","type","wrong","message","inputEmitter"],[1,"mx-auto","d-flex","justify-content-center"],["type","button","routerLink","/homepage",1,"login",3,"click"],["type","button","routerLink","/registration-page",1,"register"]],template:function(n,s){n&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-input-tile",3),_("inputEmitter",function(a){return s.handleUsernameEmitted(a)}),c(),l(4,"button",4),_("click",function(){return s.changeId()}),y(5,"change"),c()(),l(6,"app-input-tile",5),_("inputEmitter",function(a){return s.handlePasswordEmitted(a)}),c(),l(7,"div",6)(8,"button",7),_("click",function(){return s.loginRequest()}),y(9,"Login"),c(),l(10,"button",8),y(11,"Not registered, yet?"),c()()()()),n&2&&(p(3),f("title",s.id)("wrong",s.wrongUsername)("message",s.messageUsername),p(3),f("title",s.pw)("type",s.pw)("wrong",s.wrongPassword)("message",s.messagePassword))},dependencies:[O,W,Qe],styles:["body[_ngcontent-%COMP%]{height:100%}.login[_ngcontent-%COMP%]{background-color:#ff4500;border-radius:25%;border-top:none;border-left:none;border-width:3px;border-color:#a9a9a9;color:#faebd7}.register[_ngcontent-%COMP%]{border-radius:25%;background-color:transparent;border:none;border-color:gray;font-size:smaller;font-weight:lighter;text-decoration:underline}"]});let i=e;return i})();var qe=(()=>{let e=class e{constructor(){this.user={username:"",email:"",name:"",surname:"",password:""},this.confirmpw=!1}setUsername(t){this.user.username=t}setEmail(t){return t.toLocaleLowerCase().match("[a-z0-9]+@[a-z]+.[a-z]{2,3}")?(this.user.email=t,!0):!1}setSurname(t){this.user.surname=t}setName(t){this.user.name=t}setPassword(t){this.user.password=t}setConfirmPassword(t){return this.confirmpw=this.user.password===t,this.confirmpw}tryRegister(){var t=1;return this.user.username===""&&(t=t*2),this.user.email===""&&(t=t*3),this.user.name===""&&(t=t*5),this.user.surname===""&&(t=t*7),this.user.password===""&&(t=t*11),this.confirmpw||(t=t*13),t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ze=(()=>{let e=class e{constructor(t,n){this.regService=t,this.router=n,this.email="email",this.wrongEmail=!1,this.messageEmail="",this.username="username",this.wrongUsername=!1,this.messageUsername="",this.name="name",this.wrongName=!1,this.messageName="",this.surname="surname",this.wrongSurname=!1,this.messageSurname="",this.pw="password",this.wrongPassword=!1,this.messagePassword="",this.pwconfirm="confirm password",this.wrongPwconfirm=!1,this.messagePwconfirm="passwords do not match"}handleUsernameEmitted(t){this.regService.setUsername(t),this.wrongUsername=!1}handleEmailEmitted(t){this.regService.setEmail(t)?this.wrongEmail=!1:(this.wrongEmail=!0,this.messageEmail="write an existing mail")}handleNameEmitted(t){this.regService.setName(t),this.wrongName=!1}handleSurnameEmitted(t){this.regService.setSurname(t),this.wrongSurname=!1}handlePasswordEmitted(t){this.regService.setPassword(t),this.wrongPassword=!1}handlePwconfirmEmitted(t){this.regService.setConfirmPassword(t)?this.wrongPwconfirm=!1:this.wrongPwconfirm=!0}modifyView(t){switch(t){case 2:this.wrongUsername=!0,this.messageUsername="missing Username";break;case 3:this.wrongEmail=!0,this.messageEmail="missing Email";break;case 5:this.wrongName=!0,this.messageName="missing Name";break;case 7:this.wrongSurname=!0,this.messageSurname="missing Username";break;case 11:this.wrongPassword=!0,this.messagePassword="missing Password";break;case 13:this.wrongPwconfirm=!0;break;case 17:this.wrongUsername=!0,this.messageUsername="Username already exist";break;case 19:this.wrongEmail=!0,this.messageEmail="Email already used"}}registrationRequest(){var t=this.regService.tryRegister();t===1&&this.router.navigate([".."]);for(var n=0,s=[2,3,5,7,11,13,17,19];t!==1&&s[n]!==null;)t%s[n]===0&&(t=t/s[n],this.modifyView(s[n])),++n}};e.\u0275fac=function(n){return new(n||e)(C(qe),C(We))},e.\u0275cmp=m({type:e,selectors:[["app-registration"]],standalone:!0,features:[b],decls:11,vars:20,consts:[[1,"h-100","d-flex","align-items-center","justify-content-center","p-3","bg-primary"],[1,"bg-light","rounded","border-top-start-0","border-dark","p-3"],[3,"title","wrong","message","inputEmitter"],[3,"title","type","wrong","message","inputEmitter"],[1,"d-flex","justify-content-center"],["type","button",1,"register",3,"click"]],template:function(n,s){n&1&&(l(0,"div",0)(1,"div",1)(2,"app-input-tile",2),_("inputEmitter",function(a){return s.handleUsernameEmitted(a)}),c(),l(3,"app-input-tile",2),_("inputEmitter",function(a){return s.handleEmailEmitted(a)}),c(),l(4,"app-input-tile",2),_("inputEmitter",function(a){return s.handleNameEmitted(a)}),c(),l(5,"app-input-tile",2),_("inputEmitter",function(a){return s.handleSurnameEmitted(a)}),c(),l(6,"app-input-tile",3),_("inputEmitter",function(a){return s.handlePasswordEmitted(a)}),c(),l(7,"app-input-tile",3),_("inputEmitter",function(a){return s.handlePwconfirmEmitted(a)}),c(),l(8,"div",4)(9,"button",5),_("click",function(){return s.registrationRequest()}),y(10,"Confirm"),c()()()()),n&2&&(p(2),f("title",s.username)("wrong",s.wrongUsername)("message",s.messageUsername),p(1),f("title",s.email)("wrong",s.wrongEmail)("message",s.messageEmail),p(1),f("title",s.name)("wrong",s.wrongName)("message",s.messageName),p(1),f("title",s.surname)("wrong",s.wrongSurname)("message",s.messageSurname),p(1),f("title",s.pw)("type",s.pw)("wrong",s.wrongPassword)("message",s.messagePassword),p(1),f("title",s.pwconfirm)("type",s.pw)("wrong",s.wrongPwconfirm)("message",s.messagePwconfirm))},dependencies:[O,W],styles:[".register[_ngcontent-%COMP%]{background-color:#ff4500;border-radius:25%;border-top:none;border-left:none;border-width:3px;border-color:#a9a9a9;color:#faebd7}"]});let i=e;return i})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-homepage"]],standalone:!0,features:[b],decls:2,vars:0,template:function(n,s){n&1&&(l(0,"p"),y(1,"homepage works!"),c())},dependencies:[O]});let i=e;return i})();var At=["*"];var Pt=["dialog"];var Xe={animation:!0,transitionTimerDelayMs:5},xt=(()=>{let e=class e{constructor(){this.animation=Xe.animation}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Ft(i){let{transitionDelay:e,transitionDuration:r}=window.getComputedStyle(i),t=parseFloat(e),n=parseFloat(r);return(t+n)*1e3}function et(i){return typeof i=="string"}function ce(i){return i!=null}function Bt(i){return i&&i.then}function tt(i){return(i||document.body).getBoundingClientRect()}function Gt(i){return e=>new ge(r=>{let t=o=>i.run(()=>r.next(o)),n=o=>i.run(()=>r.error(o)),s=()=>i.run(()=>r.complete());return e.subscribe({next:t,error:n,complete:s})})}var Ht=()=>{},{transitionTimerDelayMs:Vt}=Xe,J=new Map,R=(i,e,r,t)=>{let n=t.context||{},s=J.get(e);if(s)switch(t.runningTransition){case"continue":return me;case"stop":i.run(()=>s.transition$.complete()),n=Object.assign(s.context,n),J.delete(e)}let o=r(e,t.animation,n)||Ht;if(!t.animation||window.getComputedStyle(e).transitionProperty==="none")return i.run(()=>o()),Z(void 0).pipe(Gt(i));let a=new T,v=new T,w=a.pipe(ye(!0));J.set(e,{transition$:a,complete:()=>{v.next(),v.complete()},context:n});let S=Ft(e);return i.runOutsideAngular(()=>{let A=E(e,"transitionend").pipe(g(w),P(({target:I})=>I===e)),M=be(S+Vt).pipe(g(w));ve(M,A,v).pipe(g(w)).subscribe(()=>{J.delete(e),i.run(()=>{o(),a.next(),a.complete()})})}),a.asObservable()};var it=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var nt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var st=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})(),ot=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var he=function(i){return i[i.Tab=9]="Tab",i[i.Enter=13]="Enter",i[i.Escape=27]="Escape",i[i.Space=32]="Space",i[i.PageUp=33]="PageUp",i[i.PageDown=34]="PageDown",i[i.End=35]="End",i[i.Home=36]="Home",i[i.ArrowLeft=37]="ArrowLeft",i[i.ArrowUp=38]="ArrowUp",i[i.ArrowRight=39]="ArrowRight",i[i.ArrowDown=40]="ArrowDown",i}(he||{});var $n=(()=>{let i=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(i()||e()):!1})();var $t=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function at(i){let e=Array.from(i.querySelectorAll($t)).filter(r=>r.tabIndex!==-1);return[e[0],e[e.length-1]]}var Lt=(i,e,r,t=!1)=>{i.runOutsideAngular(()=>{let n=E(e,"focusin").pipe(g(r),K(s=>s.target));E(e,"keydown").pipe(g(r),P(s=>s.which===he.Tab),X(n)).subscribe(([s,o])=>{let[a,v]=at(e);(o===a||o===e)&&s.shiftKey&&(v.focus(),s.preventDefault()),o===v&&!s.shiftKey&&(a.focus(),s.preventDefault())}),t&&E(e,"click").pipe(g(r),X(n),K(s=>s[1])).subscribe(s=>s.focus())})};var Ln=new Date(1882,10,12),jn=new Date(2174,10,25);var zn=1e3*60*60*24;var pe=1080,jt=24*pe,zt=12*pe+793,Un=29*jt+zt,Wn=11*pe+204;var rt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var lt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})(),Ut=(()=>{let e=class e{constructor(){this._ngbConfig=h(xt),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),k=class{constructor(e,r,t){this.nodes=e,this.viewRef=r,this.componentRef=t}};var Wt=(()=>{let e=class e{constructor(){this._document=h(z)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,s=n.style,{overflow:o,paddingRight:a}=s;if(t>0){let v=parseFloat(window.getComputedStyle(n).paddingRight);s.paddingRight=`${v+t}px`}return s.overflow="hidden",()=>{t>0&&(s.paddingRight=a),s.overflow=o}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Qt=(()=>{let e=class e{constructor(){this._nativeElement=h(te).nativeElement,this._zone=h(H)}ngOnInit(){this._zone.onStable.asObservable().pipe(x(1)).subscribe(()=>{R(this._zone,this._nativeElement,(t,n)=>{n&&tt(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return R(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(n,s){n&2&&(V("modal-backdrop"+(s.backdropClass?" "+s.backdropClass:"")),ie("show",!s.animation)("fade",s.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[b],decls:0,vars:0,template:function(n,s){},encapsulation:2});let i=e;return i})(),Y=class{update(e){}close(e){}dismiss(e){}},Jt=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Yt=["animation","backdropClass"],de=class{_applyWindowOptions(e,r){Jt.forEach(t=>{ce(r[t])&&(e[t]=r[t])})}_applyBackdropOptions(e,r){Yt.forEach(t=>{ce(r[t])&&(e[t]=r[t])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(g(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(g(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,r,t,n){this._windowCmptRef=e,this._contentRef=r,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new T,this._dismissed=new T,this._hidden=new T,e.instance.dismissEvent.subscribe(s=>{this.dismiss(s)}),this.result=new Promise((s,o)=>{this._resolve=s,this._reject=o}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let r=this._beforeDismiss();Bt(r)?r.then(t=>{t!==!1&&this._dismiss(e)},()=>{}):r!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),r=this._backdropCmptRef?this._backdropCmptRef.instance.hide():Z(void 0);e.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),r.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),B(e,r).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},ue=function(i){return i[i.BACKDROP_CLICK=0]="BACKDROP_CLICK",i[i.ESC=1]="ESC",i}(ue||{}),qt=(()=>{let e=class e{constructor(){this._document=h(z),this._elRef=h(te),this._zone=h(H),this._closed$=new T,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new F,this.shown=new T,this.hidden=new T}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":et(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(x(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:t}=this._elRef,n={animation:this.animation,runningTransition:"stop"},s=R(this._zone,t,()=>t.classList.remove("show"),n),o=R(this._zone,this._dialogEl.nativeElement,()=>{},n),a=B(s,o);return a.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),a}_show(){let t={animation:this.animation,runningTransition:"continue"},n=R(this._zone,this._elRef.nativeElement,(o,a)=>{a&&tt(o),o.classList.add("show")},t),s=R(this._zone,this._dialogEl.nativeElement,()=>{},t);B(n,s).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{E(t,"keydown").pipe(g(this._closed$),P(s=>s.which===he.Escape)).subscribe(s=>{this.keyboard?requestAnimationFrame(()=>{s.defaultPrevented||this._zone.run(()=>this.dismiss(ue.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let n=!1;E(this._dialogEl.nativeElement,"mousedown").pipe(g(this._closed$),Te(()=>n=!1),we(()=>E(t,"mouseup").pipe(g(this._closed$),x(1))),P(({target:s})=>t===s)).subscribe(()=>{n=!0}),E(t,"click").pipe(g(this._closed$)).subscribe(({target:s})=>{t===s&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!n&&this._zone.run(()=>this.dismiss(ue.BACKDROP_CLICK))),n=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let n=t.querySelector("[ngbAutofocus]"),s=at(t)[0];(n||s||t).focus()}}_restoreFocus(){let t=this._document.body,n=this._elWithFocus,s;n&&n.focus&&t.contains(n)?s=n:s=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>s.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&R(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(n,s){if(n&1&&Re(Pt,7),n&2){let o;Ne(o=ke())&&(s._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(n,s){n&2&&(Se("aria-modal",!0)("aria-labelledby",s.ariaLabelledBy)("aria-describedby",s.ariaDescribedBy),V("modal d-block"+(s.windowClass?" "+s.windowClass:"")),ie("fade",s.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[b],ngContentSelectors:At,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(n,s){n&1&&(Me(),l(0,"div",0,1)(2,"div",2),Ee(3),c()()),n&2&&V("modal-dialog"+(s.size?" modal-"+s.size:"")+(s.centered?" modal-dialog-centered":"")+s.fullscreenClass+(s.scrollable?" modal-dialog-scrollable":"")+(s.modalDialogClass?" "+s.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let i=e;return i})(),Zt=(()=>{let e=class e{constructor(){this._applicationRef=h(Ae),this._injector=h(G),this._environmentInjector=h(ee),this._document=h(z),this._scrollBar=h(Wt),this._activeWindowCmptHasChanged=new T,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new F;let t=h(H);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let n=this._windowCmpts[this._windowCmpts.length-1];Lt(t,n.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(n.location.nativeElement)}})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,n,s){let o=s.container instanceof HTMLElement?s.container:ce(s.container)?this._document.querySelector(s.container):this._document.body;if(!o)throw new Error(`The specified modal container "${s.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let a=new Y;t=s.injector||t;let v=t.get(ee,null)||this._environmentInjector,w=this._getContentRef(t,v,n,a,s),S=s.backdrop!==!1?this._attachBackdrop(o):void 0,A=this._attachWindowComponent(o,w.nodes),M=new de(A,w,S,s.beforeDismiss);return this._registerModalRef(M),this._registerWindowCmpt(A),M.hidden.pipe(x(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),a.close=I=>{M.close(I)},a.dismiss=I=>{M.dismiss(I)},a.update=I=>{M.update(I)},M.update(s),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),S&&S.instance&&S.changeDetectorRef.detectChanges(),A.changeDetectorRef.detectChanges(),M}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(n=>n.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let n=j(Qt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_attachWindowComponent(t,n){let s=j(qt,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(s.hostView),t.appendChild(s.location.nativeElement),s}_getContentRef(t,n,s,o,a){return s?s instanceof Ie?this._createFromTemplateRef(s,o):et(s)?this._createFromString(s):this._createFromComponent(t,n,s,o,a):new k([])}_createFromTemplateRef(t,n){let s={$implicit:n,close(a){n.close(a)},dismiss(a){n.dismiss(a)}},o=t.createEmbeddedView(s);return this._applicationRef.attachView(o),new k([o.rootNodes],o)}_createFromString(t){let n=this._document.createTextNode(`${t}`);return new k([[n]])}_createFromComponent(t,n,s,o,a){let v=G.create({providers:[{provide:Y,useValue:o}],parent:t}),w=j(s,{environmentInjector:n,elementInjector:v}),S=w.location.nativeElement;return a.scrollable&&S.classList.add("component-host-scrollable"),this._applicationRef.attachView(w.hostView),new k([[S]],w.hostView,w)}_setAriaHidden(t){let n=t.parentElement;n&&t!==this._document.body&&(Array.from(n.children).forEach(s=>{s!==t&&s.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}),this._setAriaHidden(n))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,n)=>{t?n.setAttribute("aria-hidden",t):n.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){let n=()=>{let s=this._modalRefs.indexOf(t);s>-1&&(this._modalRefs.splice(s,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(n,n)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{let n=this._windowCmpts.indexOf(t);n>-1&&(this._windowCmpts.splice(n,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),fe=(()=>{let e=class e{constructor(){this._injector=h(G),this._modalStack=h(Zt),this._config=h(Ut)}open(t,n={}){let s=q(_e(q({},this._config),{animation:this._config.animation}),n);return this._modalStack.open(this._injector,t,s)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ct=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({providers:[fe]});let i=e;return i})();var dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var ut=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var pt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var ft=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var _t=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var gt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var mt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var bt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var Qn=new De("live announcer delay",{providedIn:"root",factory:()=>100});var vt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})();var yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({});let i=e;return i})(),Kt=[it,nt,st,ot,rt,lt,ct,dt,yt,ut,ht,pt,ft,_t,gt,mt,bt,vt],wt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=u({type:e}),e.\u0275inj=d({imports:[Kt,it,nt,st,ot,rt,lt,ct,dt,yt,ut,ht,pt,ft,_t,gt,mt,bt,vt]});let i=e;return i})();var Tt=(()=>{let e=class e{constructor(t){this.modalService=t,this.title="progettoFormazione"}open(t){this.modalService.open(t)}};e.\u0275fac=function(n){return new(n||e)(C(fe))},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(n,s){n&1&&ne(0,"router-outlet")},dependencies:[O,Ue,wt,U]});let i=e;return i})();var Dt=(i,e)=>!!localStorage.getItem("user");var Ot=[{path:"",component:Ye},{path:"registration-page",component:Ze},{path:"homepage",canActivate:[Dt],component:Ke}];var St={providers:[Je(Ot),Le(),je(),He(Ve())]};var ei={providers:[ze()]},Mt=Pe(St,ei);var ti=()=>$e(Tt,Mt),Ss=ti;export{Ss as a};
