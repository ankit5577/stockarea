"use strict";(self.webpackChunkreact16=self.webpackChunkreact16||[]).push([[825],{825:function(e,t,n){function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return N}});var r=n(152),c=n(791),l=n(871),o=n(105),d="Warehouse-details_imgDiv__0lnhQ",u="Warehouse-details_form__YXBss",h="Warehouse-details_mainDiv__Xu1Es",m="Warehouse-details_detailsDiv__mVmxn",p="Warehouse-details_button__nXO5d",x="Warehouse-details_buttonCancel__tAxXg",f="Warehouse-details_registeredDiv__IZAoU",j="Warehouse-details_notRegisteredDiv__20+S5",v="Warehouse-details_liveDiv__8mAhV",g="Warehouse-details_is_live__VIo9D",_="Warehouse-details_not_live__d-iKW",b="Warehouse-details_actionDiv__ePxn4",y=n(184);var N=function(){var e=(0,l.UO)().id,t=(0,l.s0)(),n=(0,c.useState)({}),a=(0,r.Z)(n,2),N=a[0],O=a[1],S=(0,c.useState)({}),C=(0,r.Z)(S,2),D=C[0],W=C[1],E=(0,c.useState)(!1),w=(0,r.Z)(E,2),F=w[0],P=w[1],k=(0,c.useState)(!1),R=(0,r.Z)(k,2),U=R[0],K=R[1],T=function(e){W((function(){return i(i({},D),{},s({},e.name,e.value))}))};return(0,c.useEffect)((function(){var t="/api/warehouse/search/".concat(e);P((function(){return!0})),fetch(t).then((function(e){return e.json()})).then((function(e){return O((function(){return e.data}))})).then((function(){return P((function(){return!1}))}))}),[e]),(0,c.useEffect)((function(){W((function(){return N}))}),[N]),(0,y.jsxs)("div",{className:"flex flex-col container mx-auto p-2",children:[F&&(0,y.jsx)(o.Z,{}),!F&&(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("h1",{className:"heading-1 font-light letter-spacing-2",children:"Warehouse Details"}),(0,y.jsxs)("div",{className:"".concat(h," p-2"),children:[(0,y.jsxs)("div",{className:"".concat(d," relative"),children:[(0,y.jsx)("img",{alt:"warehouse img",src:null!==N&&void 0!==N&&N.img?N.img:"https://stockarea.io/assets/user/images/home/storage.jpg"}),(0,y.jsx)("div",{className:"".concat(N.is_registered?"".concat(f):"".concat(j)),children:N.is_registered?"REGISTERED \u2705":"NOT REGISTERED \u274c"}),(0,y.jsx)("div",{className:"".concat(v," ").concat(N.is_live?"".concat(g):"".concat(_))})]}),!U&&(0,y.jsxs)("div",{className:"".concat(m," flex-1 flex flex-col gap-2"),children:[(0,y.jsxs)("h1",{children:[N.name," ",N.is_registered?"\u2705":"\u2611\ufe0f"]}),(0,y.jsxs)("h2",{className:"heading-3",children:["\ud83d\udccd",N.city,", India \ud83c\uddee\ud83c\uddf3"]}),(0,y.jsxs)("h3",{className:"heading-3 font-medium text-primary",children:["\ud83d\udce6 Available Space:"," ",(0,y.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",N.space_available]})]}),(0,y.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83e\udd37\u200d\u2642\ufe0f Type:"," ",(0,y.jsxs)("span",{className:"font-medium text-grey",children:[" ",N.type]})]}),(0,y.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\udcad Cluster:"," ",(0,y.jsxs)("span",{className:"font-medium text-grey",children:[" ",N.cluster]})]}),(0,y.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\udd12 Code:"," ",(0,y.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",N.code]})]}),(0,y.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\ude4b\u200d\u2642\ufe0f Status:"," ",(0,y.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",N.is_live?"Live":"Not Live"]})]}),(0,y.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\udd0d Registered:"," ",(0,y.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",N.is_registered?"Yes \ud83e\udd29":"No \ud83d\ude36\u200d\ud83c\udf2b\ufe0f"]})]}),(0,y.jsx)("div",{className:"".concat(b),children:(0,y.jsx)("button",{onClick:function(){return K(!0)},className:"".concat(p),children:"Edit"})})]}),U&&(0,y.jsxs)("div",{className:"".concat(m," flex-1 flex flex-col gap-2"),children:[(0,y.jsxs)("h1",{className:"heading-2 font-medium text-primary letter-spacing-1",children:["Editing ",N.name]}),(0,y.jsxs)("form",{className:"".concat(u),children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"name",children:"Name"}),(0,y.jsx)("input",{onKeyUp:function(e){return T(e.target)},name:"name",id:"name",placeholder:D.name})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"city",children:"City"}),(0,y.jsx)("input",{name:"city",onKeyUp:function(e){return T(e.target)},placeholder:D.city,id:"city"})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"available_space",children:"Available Space"}),(0,y.jsx)("input",{name:"available_space",id:"available_space",onKeyUp:function(e){return T(e.target)},placeholder:D.space_available})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"type",children:"Type"}),(0,y.jsx)("input",{name:"type",onKeyUp:function(e){return T(e.target)},id:"type",placeholder:D.type})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"cluster",children:"Cluster"}),(0,y.jsx)("input",{name:"cluster",onKeyUp:function(e){return T(e.target)},id:"cluster",placeholder:D.cluster})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"code",children:"Code"}),(0,y.jsx)("input",{name:"code",id:"code",onKeyUp:function(e){return T(e.target)},placeholder:D.code})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"is_live",children:"Status"}),(0,y.jsxs)("select",{name:"is_live",onChange:function(e){return T(e.target)},value:D.is_live,children:[(0,y.jsx)("option",{value:"true",children:"Live"}),(0,y.jsx)("option",{value:"false",children:"Not Live"})]})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("label",{htmlFor:"is_registered",children:"Registered"}),(0,y.jsxs)("select",{name:"is_registered",onChange:function(e){return T(e.target)},value:D.is_registered,children:[(0,y.jsx)("option",{value:"true",children:"Registered"}),(0,y.jsx)("option",{value:"false",children:"Not Registered"})]})]})]}),(0,y.jsxs)("div",{className:"".concat(b," mx-auto"),children:[(0,y.jsx)("button",{type:"button",onClick:function(){D.name&&D.city&&D.space_available&&D.type&&D.cluster&&D.code&&D.city?fetch("/api/warehouse/update/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).then((function(){alert("Warehouse updated"),t("/")})):alert("invalid request")},className:"".concat(p),children:"Submit"}),(0,y.jsx)("button",{type:"button",onClick:function(){return K(!1)},className:"".concat(x," my-2"),children:"Cancel"})]})]})]})]})]})}}}]);
//# sourceMappingURL=825.218f0a25.chunk.js.map