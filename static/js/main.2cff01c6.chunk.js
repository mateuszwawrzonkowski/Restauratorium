(this.webpackJsonprestauratorium=this.webpackJsonprestauratorium||[]).push([[0],{19:function(n,e,t){n.exports=t.p+"static/media/search-solid.8297cd8d.svg"},20:function(n,e,t){n.exports=t.p+"static/media/background.68cbbfcb.png"},22:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),c=t(5),u=t(2),l=t(1),s=t(4),d=t(7),p=t(21),f=t(3),m="SHOW_ALL",h="SHOW_LIKED",b="SHOW_UNVISITED",g="SHOW_NOTLIKED",v="SHOW_SEARCHED",k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_VISIBILITY_FILTER":return e.filter;default:return n}},x=function(n){switch(n){case"liked":return"unvisited";case"unvisited":return"notliked";case"notliked":return"liked";default:return"unvisited"}},w={cards:[{id:0,name:"Kura",link:"https://www.facebook.com/restauracjakura",imageUrl:"https://graph.facebook.com/restauracjakura/picture?type=large",description:"Restaurant with the best chicken in the world",status:"liked"},{id:1,name:"Ciao a tutti",link:"https://www.facebook.com/ciaotuttipizza",imageUrl:"https://graph.facebook.com/ciaotuttipizza/picture?type=large",description:"Restaurant with pizza, medium prices",status:"notliked"},{id:2,name:"Shuk",link:"https://www.facebook.com/SHUK.grojecka107",imageUrl:"https://graph.facebook.com/SHUK.grojecka107/picture?type=large",description:"Restaurant with mezze",status:"unvisited"},{id:3,name:"Bar Pacyfik",link:"https://www.facebook.com/barpacyfik",imageUrl:"https://graph.facebook.com/barpacyfik/picture?type=large",description:"Coctails and food",status:"liked"},{id:4,name:"Pumpui Thai Food",link:"https://www.facebook.com/pumpuithaifood",imageUrl:"https://graph.facebook.com/pumpuithaifood/picture?type=large",description:"Authenthic thai food",status:"liked"},{id:5,name:"Kura Warzywa",link:"https://www.facebook.com/kurawarzywwarszawa",imageUrl:"https://graph.facebook.com/kurawarzywwarszawa/picture?type=large",description:"Gemuse kebab, medium price",status:"notliked"},{id:6,name:"Casa Mia Pizza",link:"https://www.facebook.com/casamiawarszawa",imageUrl:"https://graph.facebook.com/casamiawarszawa/picture?type=large",description:"Very good, neapolitan pizza, medium price",status:"liked"},{id:7,name:"Belvedere",link:"https://www.facebook.com/BelvedereLazienkiKrolewskie",imageUrl:"https://graph.facebook.com/BelvedereLazienkiKrolewskie/picture?type=large",description:"Restauracja Belvedere to jedno z najpi\u0119kniejszych i najbardziej oryginalnych miejsc na kulinarnej mapie Polski",status:"liked"}],value:"k"},E=Object(d.b)({rootReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CARD":return Object(f.a)(Object(f.a)({},n),{},{cards:[].concat(Object(p.a)(n.cards),[e.payload.card])});case"REMOVE_CARD":return Object(f.a)(Object(f.a)({},n),{},{cards:n.cards.filter((function(n){return n.id!==e.payload.id}))});case"SEARCH_CARD":return Object(f.a)(Object(f.a)({},n),{},{value:e.value});case"CHANGE_STATUS":return Object(f.a)(Object(f.a)({},n),{},{cards:n.cards.map((function(n){return n.id===e.payload.id?Object(f.a)(Object(f.a)({},n),{},{status:x(n.status)}):Object(f.a)({},n)}))});default:return n}},visibilityFilter:k}),j=Object(d.c)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function O(){var n=Object(u.a)(['\n*,*::before,*::after{\n    box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n    margin:0;\n    padding: 0;\n\n /* The emerging W3C standard\nthat is currently Firefox-only */\n  scrollbar-width: thin;\n  scrollbar-color: #264182 #4488D1;\n}\n\n/* Works on Chrome/Edge/Safari */\n*::-webkit-scrollbar {\n  width: 15px;\n}\n*::-webkit-scrollbar-track {\n  background: #4488D1;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: #264182;\n  border-radius: 20px;\n  border: 2px solid #4488D1;\n  box-shadow: inset 0 -90px 0px 0px #4488D1;\n}\n\nhtml{\n    font-size: 62.5%;\n   \n}\n\nbody{\n    font-size: 1.6rem;\n    font-family: "Montserrat", sans-serif;\n    background-color: #4488D1;\n}\n\na{\n    word-wrap: break-all;\n}\n']);return O=function(){return n},n}var y=Object(l.b)(O()),z={background:"#4488D1",backgroundTransparent:"#5D9BDD80",scrollbar:"#3A6AB3",liked:"#A4BD57",notliked:"#D9502E",unvisited:"#D3D3D3",all:"#FFFFFF",button:"#F5D44F",buttonCross:"#F2A034",lines:"#57A8FF",normal:400,medium:600,bold:700},C=t(19),S=t.n(C);function D(){var n=Object(u.a)(["\n    padding: 10px 20px 10px 50px;\n    margin: 24px 0 16px 0;\n    font-size: 1.6rem;\n    font-weight: ",";\n    background-color: ",";\n    color: white;\n    border-radius: 20px;\n    border: none;\n    background-image: url(",");\n    background-size:25px;\n    background-position:15px 50%;\n    background-repeat:no-repeat;\n\n    ::placeholder{\n      text-transform: uppercase;\n      font-size: 1.6rem;\n      color: white;\n      letter-spacing: 1px;\n    }\n    :focus{\n        outline: none;\n    }\n    :focus::placeholder {\n     color: transparent;\n    }\n"]);return D=function(){return n},n}var F=l.d.input(D(),(function(n){return n.theme.bold}),(function(n){return n.theme.backgroundTransparent}),S.a),_=Object(s.b)(null,(function(n){return{onChange:function(){return n({type:"SET_VISIBILITY_FILTER",filter:"SHOW_SEARCHED"})},onValueChange:function(e){return n({type:"SEARCH_CARD",value:e.target.value})}}}))((function(n){var e=n.onChange,t=n.onValueChange;return a.a.createElement(F,{placeholder:"search",onChange:function(n){e(),t(n)}})}));function A(){var n=Object(u.a)(["\n  display:flex;\n  justify-content:center;\n  flex-basis:33.33%;\n  color: ",";\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n  font-size: 3.6rem;\n  font-weight:",";\n  text-transform: uppercase;\n  cursor: pointer;\n  background-color:transparent;\n  border:none;\n  outline:none;\n  transition:0.4s;\n      :nth-child(1){\n      color: ",";\n    }\n      :nth-child(5){\n        color: ",";\n    }\n      :nth-child(7){\n        color: ",";\n    }\n      :hover{\n      transform:scale(1.15);\n    }\n"]);return A=function(){return n},n}var R=l.d.button(A(),(function(n){return n.theme.unvisited}),(function(n){return n.theme.bold}),(function(n){return n.theme.liked}),(function(n){return n.theme.notliked}),(function(n){return n.theme.all})),T=Object(s.b)((function(n,e){return{active:n.filter===e.filter}}),(function(n,e){return{onClick:function(){return n({type:"SET_VISIBILITY_FILTER",filter:e.filter})}}}))((function(n){var e=n.onClick,t=n.active,r=n.children;return a.a.createElement(R,{onClick:e,disabled:t},r)}));function I(){var n=Object(u.a)(["\n    position: absolute;\n    display:block;\n    left:25%;\n    top:50%;\n    transform: translate(-50%,-50%);\n    height: 20px;\n    width:3px;\n    background-color: #57A8FF;\n    :nth-child(4){\n      left: 50%;\n    }\n    :nth-child(6) {\n      left:75%;\n}\n    \n"]);return I=function(){return n},n}function U(){var n=Object(u.a)(["\n    display:flex;\n    position: relative;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 1165px;\n    height: 70px;\n    background-color: ",";\n    border-radius: 45px;\n    margin-top:45px;\n    margin-bottom: 45px;\n"]);return U=function(){return n},n}var L=l.d.div(U(),(function(n){return n.theme.backgroundTransparent})),H=l.d.span(I()),B=function(){return a.a.createElement(L,null,a.a.createElement(T,{filter:h},"liked"),a.a.createElement(H,null),a.a.createElement(T,{filter:b},"unvisited"),a.a.createElement(H,null),a.a.createElement(T,{filter:g},"not liked"),a.a.createElement(H,null),a.a.createElement(T,{filter:m},"ALL"))};function V(){var n=Object(u.a)(["\n    color: white;\n    margin: 0 20px 30px 20px;\n    text-decoration:none;\n    overflow-wrap: anywhere;\n    line-height: 20px;\n"]);return V=function(){return n},n}var W=l.d.a(V());function K(){var n=Object(u.a)(["\n 0% {\n      transform:rotate(0);\n    }\n    80% {\n      transform:rotate(180deg);\n    }\n    85% {\n      transform:rotate(165deg);\n    }\n    90% {\n      transform:rotate(180deg);\n    }\n    95% {\n      transform:rotate(175deg);\n    }\n    100% {\n      transform:rotate(180deg);\n    }\n"]);return K=function(){return n},n}var N=Object(l.e)(K());function P(){var n=Object(u.a)(["\n    height:35px;\n    width: 85px;\n    border-radius: 0px;\n    font-size:2.4rem;\n    font-weight:",";\n    background-color: #F5D44F;\n    color: #F2A034;\n    text-transform: uppercase;\n    padding:0;\n    border-radius: 5px;\n    :hover{\n        animation:none;\n    }\n    :focus{\n      box-shadow: inset 0 0 10px #000000;\n      background-color: black;\n    }\n    "]);return P=function(){return n},n}function M(){var n=Object(u.a)(['\n    position:absolute;\n    height:35px;\n    width:35px;\n    top:10px;\n    right:10px;\n    padding:0;\n    transform:rotate(45deg);\n    animation: none;\n    :hover{\n        animation:none;\n    }\n    span{\n    width: 20px;\n    height: 4px;\n    &::before{\n        content:"";\n        width: 20px;\n        height: 4px;\n    }\n    ']);return M=function(){return n},n}function X(){var n=Object(u.a)(['\n    position:absolute;\n    height:35px;\n    width:35px;\n    bottom:10px;\n    right:10px;\n    padding:0;\n    transform:rotate(45deg);\n    animation: none;\n    :hover{\n        animation:none;\n    }\n    span{\n    width: 20px;\n    height: 4px;\n    &::before{\n        content:"";\n        width: 20px;\n        height: 4px;\n    }\n    ']);return X=function(){return n},n}function G(){var n=Object(u.a)(["\nposition: fixed;\nright: 10px;\nbottom: 10px;\nheight:70px;\nwidth:70px;\nbackground-color: ",";\npadding: 25px;\nborder: none;\nborder-radius: 50%;\noutline: none;\n:hover{\n        animation: "," 1.5s ease-in infinite;\n        cursor: pointer;\n    }\nspan{\n    position: absolute;\n    display:block;\n    top:50%;\n    left:50%;\n    transform:translate(-50%,-50%);\n    width: 40px;\n    height: 6px;\n    border-radius: 2px;\n    background-color: ",';\n    &::before{\n        content:"";\n        display:block;\n        transform:rotate(90deg);\n        width: 40px;\n        height: 6px;\n        border-radius: 2px;\n        background-color: ',";\n    }\n}\n\n","\n\n    ","\n\n    ","\n"]);return G=function(){return n},n}var Y=l.d.button(G(),(function(n){return n.theme.button}),N,(function(n){return n.theme.buttonCross}),(function(n){return n.theme.buttonCross}),(function(n){return n.remove&&Object(l.c)(X())}),(function(n){return n.close&&Object(l.c)(M())}),(function(n){return n.modalAdd&&Object(l.c)(P(),(function(n){return n.theme.bold}))}));function J(){var n=Object(u.a)(["\n    margin:0 15px;\n    line-height: 20px;\n    font-size:1.8rem;\n"]);return J=function(){return n},n}function q(){var n=Object(u.a)(["\n    color: white;\n    text-align: uppercase;\n    font-size:2.8rem;\n"]);return q=function(){return n},n}function Q(){var n=Object(u.a)(["\n    display: flex;\n    position:relative;\n    height: 100%;\n    width: 100%;\n    font-size: 1.4rem;\n    color: white;\n    justify-content: center;\n    align-items:center;\n    align-content: space-evenly;\n    text-align:center;\n    flex-wrap:wrap;\n    background-color: #00000099;\n    opacity:0;\n    transition:0.4s;\n    font-weight: ",";\n"]);return Q=function(){return n},n}function Z(){var n=Object(u.a)(["\ndisplay: flex;\njustify-content:center;\nalign-items: center;\nheight: 50px;\nwidth: 100%;\nbackground-color: ",";\ncursor: pointer;\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n   display:flex;\n   flex-direction:column;\n   height: 295px;\n   width: 310px;\n   margin-bottom: 50px;\n   border-radius:5px;\n   background-image: url(",");\n   background-size:cover;\n   background-repeat:no-repeat;\n   border: 3px solid ",";\n   :hover > *{\n       opacity:1;\n   }\n"]);return $=function(){return n},n}var nn=l.d.div($(),(function(n){return n.imageUrl}),(function(n){var e=n.status,t=n.theme;return e?t[e]:t.unvisited})),en=l.d.div(Z(),(function(n){var e=n.status,t=n.theme;return e?t[e]:t.unvisited})),tn=l.d.div(Q(),(function(n){return n.theme.medium})),rn=l.d.h1(q()),an=l.d.p(J()),on=function(n){var e=n.id,t=n.name,r=n.link,o=n.imageUrl,i=n.description,c=n.status,u=n.removeCard,l=n.changeStatus;return a.a.createElement(nn,{id:e,status:c,imageUrl:o},a.a.createElement(en,{status:c,onClick:function(){return l(e,c)}},a.a.createElement(rn,null,t)),a.a.createElement(tn,null,a.a.createElement(an,null,i),a.a.createElement(W,{href:r,target:"_blank"},r),a.a.createElement(Y,{onClick:function(){return u(e)},remove:!0},a.a.createElement("span",null))))};on.defaultProps={name:"",link:"",imageUrl:"",description:"",status:"unvisited"};var cn=Object(s.b)(null,(function(n){return{removeCard:function(e){return n(function(n){return{type:"REMOVE_CARD",payload:{id:n}}}(e))},changeStatus:function(e,t){return n(function(n,e){return{type:"CHANGE_STATUS",payload:{id:n,status:e}}}(e,t))}}}))(on);function un(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding-bottom:50px;\n  flex-wrap: wrap;\n  overflow: auto;\n  max-height:84vh;\n"]);return un=function(){return n},n}var ln=l.d.div(un()),sn=function(n){var e=n.cards;return a.a.createElement(ln,null,e.map((function(n){var e=n.id,t=n.name,r=n.imageUrl,o=n.link,i=n.description,c=n.status;return a.a.createElement(cn,{key:e,id:e,name:t,imageUrl:r,link:o,description:i,status:c})})))};sn.defaultProps={cards:[]};var dn=function(n,e,t){switch(e){case m:return n.filter((function(n){return n}));case h:return n.filter((function(n){return"liked"===n.status}));case b:return n.filter((function(n){return"unvisited"===n.status}));case g:return n.filter((function(n){return"notliked"===n.status}));case v:return n.filter((function(n){return n.name.toLowerCase().includes(t)}));default:return n}},pn=Object(s.b)((function(n){return{cards:dn(n.rootReducer.cards,n.visibilityFilter,n.rootReducer.value)}}))(sn);function fn(){var n=Object(u.a)(["\n  width:100%;\n  min-height:100px;\n  background-color: transparent;\n  border:none;\n  border-bottom: 3px solid #F2A034;\n  outline:none;\n  resize:none;\n  font-size: 2rem;\n  padding:10px;\n  :focus{\n    +label{\n      transform:scale(0.8);\n    }\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  position: absolute;\n  top:20px;\n  left: 20px;\n  transition:0.3s;\n  top:0;\n"]);return mn=function(){return n},n}function hn(){var n=Object(u.a)(["\n  background-color: transparent;\n  border:none;\n  border-bottom: 3px solid #F2A034;\n  outline: none;\n  width: 100%;\n  color: gray;\n  :focus{\n    +label{\n      transform:scale(0.8);\n    }\n  }\n  :not(:placeholder-shown){\n    font-size:1.6rem;\n  }\n"]);return hn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  position:relative;\n  padding: 20px;\n  :first-child{\n    input{\n      text-transform: capitalize;\n    }\n  }\n"]);return bn=function(){return n},n}function gn(){var n=Object(u.a)(["\n  display:flex;\n  flex-direction: column;\n  width:80%;\n"]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    font-size: 2.4rem;\n    font-weight: ",";\n"]);return vn=function(){return n},n}function kn(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    color: #D17272;\n    width:100%;\n"]);return kn=function(){return n},n}var xn=l.d.div(kn()),wn=l.d.div(vn(),(function(n){return n.theme.bold})),En=l.d.form(gn()),jn=l.d.div(bn()),On=l.d.input(hn()),yn=l.d.label(mn()),zn=l.d.textarea(fn()),Cn=Object(s.b)(null,(function(n){return{addCard:function(e){return n(function(n){return{type:"ADD_CARD",payload:{card:Object(f.a)({id:"_".concat(Math.random().toString(36).substr(2,9))},n)}}}(e))}}}))((function(n){var e=n.addCard,t=Object(r.useState)(""),o=Object(c.a)(t,2),i=o[0],u=o[1],l=Object(r.useState)(""),s=Object(c.a)(l,2),d=s[0],p=s[1],f=Object(r.useState)(""),m=Object(c.a)(f,2),h=m[0],b=m[1],g=Object(r.useState)(""),v=Object(c.a)(g,2),k=v[0],x=v[1];return Object(r.useEffect)((function(){b((function(){for(var n=[],e=d.length;e>=0&&"/"!==d[e];e-=1)n.push(d[e]);return"https://graph.facebook.com/".concat(n.reverse().join(""),"/picture?type=large")}))}),[d]),a.a.createElement(xn,null,a.a.createElement(wn,null,"Add new restaurant"),a.a.createElement(En,null,a.a.createElement(jn,null,a.a.createElement(On,{type:"text",name:"name",id:"name",value:i,onChange:function(n){return u(n.target.value)}}),a.a.createElement(yn,{htmlFor:"name"},"Restaurant name")),a.a.createElement(jn,null,a.a.createElement(On,{type:"text",name:"link",id:"link",value:d,onChange:function(n){return p(n.target.value)}}),a.a.createElement(yn,{htmlFor:"link"},"Facebook link")),a.a.createElement(jn,null,a.a.createElement(zn,{name:"description",id:"description",maxlength:"20",placeholder:"Short description about restaurant (type of food, prices)",value:k,onChange:function(n){return x(n.target.value)}}),a.a.createElement(yn,{htmlFor:"description"},"Description"))),a.a.createElement(Y,{onClick:function(){return e({name:i,link:d,imageUrl:h,description:k})},modalAdd:!0},"Add"))}));function Sn(){var n=Object(u.a)(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    height: 500px;\n    width: 450px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: #CEF6FF;\n    border: 5px solid #006299;\n    border-radius:5px;\n    z-index: 999;\n"]);return Sn=function(){return n},n}var Dn=l.d.div(Sn()),Fn=function(n){var e=n.isShowing,t=n.toggle;return e&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Dn,null,a.a.createElement(Y,{onClick:t,close:!0},a.a.createElement("span",null)),a.a.createElement(Cn,{toggle:t})))};Fn.defaultProps={isShowing:!1};var _n=Fn,An=t(20),Rn=t.n(An);function Tn(){var n=Object(u.a)(["\n   margin: 0 auto;\n   width: 1165px;\n   max-height: 100vh;\n   overflow: hidden;\n"]);return Tn=function(){return n},n}function In(){var n=Object(u.a)(["\n   background: url(",");\n   background-size:cover;\n   height:100vh;\n"]);return In=function(){return n},n}var Un=l.d.div(In(),Rn.a),Ln=l.d.div(Tn());var Hn=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];function i(){o(!t)}return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{store:j},a.a.createElement(y,null),a.a.createElement(l.a,{theme:z},a.a.createElement(a.a.Fragment,null,a.a.createElement(Un,null,a.a.createElement(Ln,null,a.a.createElement(_,null),a.a.createElement(B,null),a.a.createElement(pn,null)),a.a.createElement(Y,{onClick:i},a.a.createElement("span",null)),a.a.createElement(_n,{isShowing:t,toggle:i}))))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Hn,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2cff01c6.chunk.js.map