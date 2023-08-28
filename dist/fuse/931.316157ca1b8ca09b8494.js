"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[931],{5931:(g,i,a)=>{a.r(i),a.d(i,{AccountTransactionModule:()=>b});var s=a(3423),t=a(7716),d=a(5848);const m=[{path:"",component:(()=>{class e{constructor(n){this._accountOperationDataShareService=n,this.accountBalanceAfterTransaction=0}ngOnInit(){this._accountOperationDataShareService.account$.subscribe({next:n=>{this.account=n,this.accountBalanceAfterTransaction=this.account.accountBalance}})}validateAccount(){document.getElementById("accountNumber")}calculateBalance(n){const o=n.target;o.value=""==o.value||parseFloat(o.value)<0?"0":o.value;const l=this.account.accountBalance-parseFloat(o.value);this.accountBalanceAfterTransaction=l<0?0:l}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.H))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-account-transaction"]],decls:52,vars:3,consts:[[1,"flex","flex-col","flex-auto","min-w-0","bg-white"],[1,"flex-auto","p-4","sm:p-2"],[1,"h-4/6","min-h-full","max-h-full"],[1,"m-4"],[1,"text-4xl","font-bold"],[1,"text-gray-400","font-light"],[1,"border-b"],[1,"mt-6","mx-4"],[1,"font-semibold"],["type","text","id","accountNumber","placeholder","Ingresa el n\xfamero de cuenta",1,"mt-2","mr-2","max-w-sm","px-4","py-2","border","rounded-lg","text-gray-700","focus:outline-none","focus:border-blue-500"],["type","button",1,"text-white","bg-primary-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","mr-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800",3,"click"],[1,"m-4","flex","justify-center"],[1,"max-w-sm","p-6","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700","mr-8"],[1,"mb-2","text-2xl","font-semibold","tracking-tight","text-primary-500","dark:text-white"],[1,"mb-3","font-normal","text-gray-500","dark:text-gray-400"],[1,"max-w-sm","p-6","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700"],[1,"mt-12","flex","flex-col","items-center"],[1,"text-sm","font-semibold","text-primary-500"],["type","number","min","0","step","0.01","placeholder","Ingresa el monto a transferir",1,"mt-2","mr-2","max-w-sm","px-4","py-2","border","rounded-lg","text-gray-700","focus:outline-none","focus:border-blue-500",3,"keyup"],["type","button",1,"mt-3","text-white","bg-primary-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","mr-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h1",4),t._uU(5,"Transferencias"),t.qZA(),t.TgZ(6,"p",5),t._uU(7,"Ingresa la cuenta destino a la que deseas transferir"),t.qZA(),t.qZA(),t._UZ(8,"div",6),t.TgZ(9,"div",7),t.TgZ(10,"p",8),t._uU(11,"Nro. Cuenta Destino"),t.qZA(),t._UZ(12,"input",9),t.TgZ(13,"button",10),t.NdJ("click",function(){return o.validateAccount()}),t._uU(14,"Validar Cuenta"),t.qZA(),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"div",12),t.TgZ(17,"h5",13),t._uU(18,"Datos de la cuenta origen"),t.qZA(),t.TgZ(19,"p",14),t.TgZ(20,"b"),t._uU(21,"Nro. Cuenta:"),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"p",14),t.TgZ(24,"b"),t._uU(25,"Saldo antes del movimiento:"),t.qZA(),t._uU(26),t.qZA(),t.TgZ(27,"p",14),t.TgZ(28,"b"),t._uU(29,"Saldo despu\xe9s del movimiento: "),t.qZA(),t._uU(30),t.qZA(),t.qZA(),t.TgZ(31,"div",15),t.TgZ(32,"h5",13),t._uU(33,"Datos de la cuenta Destino"),t.qZA(),t.TgZ(34,"p",14),t.TgZ(35,"b"),t._uU(36,"Nombre del Propietario:"),t.qZA(),t._uU(37," AHO497923232332"),t.qZA(),t.TgZ(38,"p",14),t.TgZ(39,"b"),t._uU(40,"Identificaci\xf3n:"),t.qZA(),t._uU(41," CED 1719053672 "),t.qZA(),t.TgZ(42,"p",14),t.TgZ(43,"b"),t._uU(44,"Correo electr\xf3nico: "),t.qZA(),t._uU(45," user@gmail.com "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div",16),t.TgZ(47,"p",17),t._uU(48,"Monto a transferir"),t.qZA(),t.TgZ(49,"input",18),t.NdJ("keyup",function(Z){return o.calculateBalance(Z)}),t.qZA(),t.TgZ(50,"button",19),t._uU(51,"Transferir"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(22),t.hij(" ",o.account.accountNumber," "),t.xp6(4),t.hij(" $ ",o.account.accountBalance," USD"),t.xp6(4),t.hij(" $ ",o.accountBalanceAfterTransaction.toFixed(2)," USD "))},styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),e})();var p=a(4466);let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.m,u]]}),e})()},5848:(g,i,a)=>{a.d(i,{H:()=>d});var s=a(6215),t=a(7716);let d=(()=>{class r{constructor(){this._account=new s.X({accountTypeId:"",accountType:"",accountBalance:0,accountNumber:""})}get account$(){return this._account.asObservable()}set account(u){this._account.next(u)}}return r.\u0275fac=function(u){return new(u||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);