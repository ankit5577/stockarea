"use strict";(self.webpackChunkreact16=self.webpackChunkreact16||[]).push([[99],{99:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var n=s(942),a=s(413),i=s(152),r=s(791),l=s(871),c=s(105),o=s(924),d="Warehouse-details_imgDiv__0lnhQ",u="Warehouse-details_form__YXBss",h="Warehouse-details_mainDiv__Xu1Es",m="Warehouse-details_detailsDiv__mVmxn",x="Warehouse-details_button__nXO5d",p="Warehouse-details_buttonCancel__tAxXg",g="Warehouse-details_registeredDiv__IZAoU",v="Warehouse-details_notRegisteredDiv__20+S5",f="Warehouse-details_liveDiv__8mAhV",j="Warehouse-details_is_live__VIo9D",_="Warehouse-details_not_live__d-iKW",y="Warehouse-details_actionDiv__ePxn4",b=s(184);var N=function(){var e=(0,l.UO)().id,t=(0,l.s0)(),s=(0,r.useState)({}),N=(0,i.Z)(s,2),S=N[0],Z=N[1],C=(0,r.useState)({}),W=(0,i.Z)(C,2),F=W[0],E=W[1],R=(0,r.useState)(!1),D=(0,i.Z)(R,2),k=D[0],w=(D[1],(0,r.useState)(!1)),U=(0,i.Z)(w,2),K=U[0],T=U[1],L=(0,o.Z)("/warehouse/update/".concat(e),{method:"POST",body:F},(function(){alert("Warehouse updated"),t("/")})),I=(L.isLoading,L.error,L.sendRequest),A=(0,o.Z)("/warehouse/search/".concat(e),{},(function(e){Z((function(){return e}))})),O=(A.isLoading,A.error,A.sendRequest),q=function(e){E((function(){return(0,a.Z)((0,a.Z)({},F),{},(0,n.Z)({},e.name,e.value))}))};return(0,r.useEffect)((function(){O()}),[e]),(0,r.useEffect)((function(){E((function(){return S}))}),[S]),(0,b.jsxs)("div",{className:"flex flex-col container mx-auto p-2",children:[k&&(0,b.jsx)(c.Z,{}),!k&&(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)("h1",{className:"heading-1 font-light letter-spacing-2",children:"Warehouse Details"}),(0,b.jsxs)("div",{className:"".concat(h," p-2"),children:[(0,b.jsxs)("div",{className:"".concat(d," relative"),children:[(0,b.jsx)("img",{alt:"warehouse img",src:null!==S&&void 0!==S&&S.img?S.img:"https://stockarea.io/assets/user/images/home/storage.jpg"}),(0,b.jsx)("div",{className:"".concat(S.is_registered?"".concat(g):"".concat(v)),children:S.is_registered?"REGISTERED \u2705":"NOT REGISTERED \u274c"}),(0,b.jsx)("div",{className:"".concat(f," ").concat(S.is_live?"".concat(j):"".concat(_))})]}),!K&&(0,b.jsxs)("div",{className:"".concat(m," flex-1 flex flex-col gap-2"),children:[(0,b.jsxs)("h1",{children:[S.name," ",S.is_registered?"\u2705":"\u2611\ufe0f"]}),(0,b.jsxs)("h2",{className:"heading-3",children:["\ud83d\udccd",S.city,", India \ud83c\uddee\ud83c\uddf3"]}),(0,b.jsxs)("h3",{className:"heading-3 font-medium text-primary",children:["\ud83d\udce6 Available Space:"," ",(0,b.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",S.space_available]})]}),(0,b.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83e\udd37\u200d\u2642\ufe0f Type:"," ",(0,b.jsxs)("span",{className:"font-medium text-grey",children:[" ",S.type]})]}),(0,b.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\udcad Cluster:"," ",(0,b.jsxs)("span",{className:"font-medium text-grey",children:[" ",S.cluster]})]}),(0,b.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\udd12 Code:"," ",(0,b.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",S.code]})]}),(0,b.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\ude4b\u200d\u2642\ufe0f Status:"," ",(0,b.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",S.is_live?"Live":"Not Live"]})]}),(0,b.jsxs)("p",{className:"heading-3 font-medium text-primary",children:["\ud83d\udd0d Registered:"," ",(0,b.jsxs)("span",{className:"font-bold text-grey numberFont",children:[" ",S.is_registered?"Yes \ud83e\udd29":"No \ud83d\ude36\u200d\ud83c\udf2b\ufe0f"]})]}),(0,b.jsx)("div",{className:"".concat(y),children:(0,b.jsx)("button",{onClick:function(){return T(!0)},className:"".concat(x),children:"Edit"})})]}),K&&(0,b.jsxs)("div",{className:"".concat(m," flex-1 flex flex-col gap-2"),children:[(0,b.jsxs)("h1",{className:"heading-2 font-medium text-primary letter-spacing-1",children:["Editing ",S.name]}),(0,b.jsxs)("form",{className:"".concat(u),children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"name",children:"Name"}),(0,b.jsx)("input",{onKeyUp:function(e){return q(e.target)},name:"name",id:"name",placeholder:F.name})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"city",children:"City"}),(0,b.jsx)("input",{name:"city",onKeyUp:function(e){return q(e.target)},placeholder:F.city,id:"city"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"img",children:"Image"}),(0,b.jsx)("input",{name:"img",onKeyUp:function(e){return q(e.target)},placeholder:F.img,id:"img"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"available_space",children:"Available Space"}),(0,b.jsx)("input",{name:"available_space",id:"available_space",onKeyUp:function(e){return q(e.target)},placeholder:F.space_available})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"type",children:"Type"}),(0,b.jsx)("input",{name:"type",onKeyUp:function(e){return q(e.target)},id:"type",placeholder:F.type})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"cluster",children:"Cluster"}),(0,b.jsx)("input",{name:"cluster",onKeyUp:function(e){return q(e.target)},id:"cluster",placeholder:F.cluster})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"code",children:"Code"}),(0,b.jsx)("input",{name:"code",id:"code",onKeyUp:function(e){return q(e.target)},placeholder:F.code})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"is_live",children:"Status"}),(0,b.jsxs)("select",{name:"is_live",onChange:function(e){return q(e.target)},value:F.is_live,children:[(0,b.jsx)("option",{value:"true",children:"Live"}),(0,b.jsx)("option",{value:"false",children:"Not Live"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{htmlFor:"is_registered",children:"Registered"}),(0,b.jsxs)("select",{name:"is_registered",onChange:function(e){return q(e.target)},value:F.is_registered,children:[(0,b.jsx)("option",{value:"true",children:"Registered"}),(0,b.jsx)("option",{value:"false",children:"Not Registered"})]})]})]}),(0,b.jsxs)("div",{className:"".concat(y," mx-auto"),children:[(0,b.jsx)("button",{type:"button",onClick:function(){F.name&&F.city&&F.space_available&&F.type&&F.cluster&&F.code&&F.city?I():alert("invalid request")},className:"".concat(x),children:"Submit"}),(0,b.jsx)("button",{type:"button",onClick:function(){return T(!1)},className:"".concat(p," my-2"),children:"Cancel"})]})]})]})]})]})}},924:function(e,t,s){var n=s(413),a=s(861),i=s(152),r=s(757),l=s.n(r),c=s(791);t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,r=(0,c.useState)(!1),o=(0,i.Z)(r,2),d=o[0],u=o[1],h=(0,c.useState)(null),m=(0,i.Z)(h,2),x=m[0],p=m[1],g="http://localhost:3000/api",v=function(){var i=(0,a.Z)(l().mark((function a(){var i;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),p(null),a.prev=2,a.next=5,fetch(g+e,{method:t.method?t.method:"GET",mode:"cors",cache:"no-cache",headers:(0,n.Z)({"Content-Type":"application/json"},t.headers),body:t.body?JSON.stringify(t.body):null}).then((function(e){return e.json()}));case 5:(i=a.sent).success||p(i.title),s(i.data),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),console.log(a.t0),p(a.t0.msg||"something went wrong");case 14:return a.prev=14,u(!1),a.finish(14);case 17:case"end":return a.stop()}}),a,null,[[2,10,14,17]])})));return function(){return i.apply(this,arguments)}}();return{isLoading:d,error:x,sendRequest:v}}}}]);
//# sourceMappingURL=99.09678e5d.chunk.js.map