(function(){/*
 http://pcjs.org/modules/devices/device.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/input.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/led.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/rom.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/time.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/tms1500.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/machine.js (C) Jeff Parsons 2012-2017
*/
var p,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ya:!0},ea={};try{ea.__proto__=da;ca=ea.ya;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ia(){ia=function(){};t.Symbol||(t.Symbol=ja)}var ja=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function ka(){ia();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});ka=function(){}}function la(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function ma(a){ka();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function na(a){ka();var b=a[Symbol.iterator];return b?b.call(a):la(a)}function oa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function u(a,b){if(b){var c=t;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ha(c,a,{configurable:!0,writable:!0,value:b})}}u("Number.parseInt",function(a){return a||parseInt});
u("Math.trunc",function(a){return a?a:function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});u("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});u("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});var pa="Machine";
function x(a,b,c,d){this.M=d||{};this.w=a;this.na=b;this.version=c||0;this.O={};y[this.w]||(y[this.w]=[]);y[this.w].push(this);qa(this,this.M);ra(this,this.M);sa(this,this.M.bindings);this.ha=""}var ta;
x.prototype.fa=function(a,b){var c=this;switch(a){case ua:b.onclick=function(){var a=wa(c);a&&(a.value="")};break;case xa:b.value="",b.addEventListener("keypress",function(a){a=a||window.event;var d=a.which||a.keyCode;if(d){var f=b.value;b.setSelectionRange(f.length,f.length);a.stopPropagation();13==d&&(a.preventDefault(),f=b.value+="\n",b.blur(),b.focus(),ya(c,f))}})}};function sa(a,b){var c=Array.isArray(b),d;for(d in b){var e=b[d];c&&(d=e);if(e=document.getElementById(e))a.O[d]=e,a.fa(d,e)}}
function ra(a,b){if(b.overrides){var c,d=ta;if(!d){d={};if(window){c||(c=window.location.search.substr(1));for(var e,f=/\+/g,h=/([^&=]+)=?([^&]*)/g;e=h.exec(c);)d[decodeURIComponent(e[1].replace(f," ")).trim()]=decodeURIComponent(e[2].replace(f," ")).trim()}ta=d}c=d;for(var g in c)0<=b.overrides.indexOf(g)&&(e=c[g],e.match(/^[+-]?[0-9.]+$/)?d=Number.parseInt(e,10):"true"==e?d=!0:"false"==e?d=!1:(d=e,e='"'+e+'"'),b[g]=d,z(a,"overriding "+a.na+" property '"+g+"' with "+e))}}
function qa(a,b){if(a.version){var c="",d=za(a,a.w);if(d.version!=a.version){c="Machine";var e=d.version}else b.version&&b.version>a.version&&(c="Config",e=b.version);c&&(b="Error: "+a.ca("%s Device version (%3.2f) incompatible with %s version (%3.2f)",b.Ea,a.version,c,e)+"\n\nClearing your browser's cache may resolve the issue.",(c=Aa)&&0>Ba.indexOf(c)&&(alert(b),Ba.push(c)),z(a,b))}}
function ya(a,b){var c=Ca(a);if(c){var d=b.slice(b.lastIndexOf("\n",b.length-2)+1,-1)||a.ha;a.ha="";d=d.trim();b=d.split(" ");switch(b[0]){case "c":(c=b[1])?(z(a,"set category '"+c+"'"),Da(a,c)):(c=Da(a))?z(a,"cleared category '"+c+"'"):z(a,"no category set");break;case "?":var e="";Ea.forEach(function(a){e+="\n"+a});e&&z(a,"default commands:"+e);default:for(b.unshift(d),d=0;d<c.length&&!c[d](b,a);d++);}}}
function wa(a){var b=xa,c=a.O[b];if(void 0===c){var d=y[a.w],e;for(e in d)if(c=d[e].O[b])break;c||(c=null);a.O[b]=c}return c}function za(a,b){if(a=y[a.w])for(var c in a)if(a[c].na==b){var d=a[c];break}return d}function A(a,b){if(a=y[a.w])for(var c in a)if(a[c].M["class"]==b){var d=a[c];break}return d}function Ca(a){var b=Fa;return B[a.w]&&B[a.w][b]}function Ga(a){var b=Ha;return a.M.bindings&&a.M.bindings[b]}function Ia(a){if(a=a.O[Ja])var b=a.textContent;return b}
function C(a,b,c){a=+a||0;a<b&&(a=b);a>c&&(a=c);return a}function D(a,b,c){a=a.M[b];void 0===a?a=c:(b=typeof c,typeof a!=b&&("boolean"==b?a=!!a:"number"==typeof c&&(a=+a)));return a}
function Ka(a,b){var c=0,d=null,e=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");e.onreadystatechange=function(){4===e.readyState&&(d=e.responseText,200==e.status||!e.status&&d.length&&"file:"==(window?window.location.protocol:"file:")||(c=e.status||-1));b(a,d,e.readyState,c)};e.open("GET",a,!0);e.send()}
function La(a){if(void 0===Ma){var b=!1;if(window)try{window.localStorage.setItem(E,E),b=window.localStorage.getItem(E)==E,window.localStorage.removeItem(E)}catch(c){z(a,c.message),b=!1}Ma=b}return!!Ma}function Na(a){if(window){var b=window.navigator.userAgent;return"iOS"==a&&!!b.match(/(iPod|iPhone|iPad)/)&&!!b.match(/AppleWebKit/)||"MSIE"==a&&!!b.match(/(MSIE|Trident)/)||0<=b.indexOf(a)}return!1}
function Oa(a,b){if(F&&0<=F.indexOf(Pa))G+=b;else{if(a=wa(a))a.value+=b,8192<a.value.length&&(a.value=a.value.substr(a.value.length-4096)),a.scrollTop=a.scrollHeight;a||(a=b.lastIndexOf("\n"),0<=a&&(console.log(G+b.substr(0,a)),G="",b=b.substr(a+1)),G+=b)}}function z(a,b){Oa(a,b+"\n")}x.prototype.ga=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];Oa(this,this.ca.apply(this,[].concat([a],c instanceof Array?c:oa(na(c)))))};function H(a,b,c){if(a=a.O[b])a.textContent=c}
function Da(a,b){b=void 0===b?"":b;var c=F,d=!b&&F&&0<=F.indexOf(Pa);F=b;d&&(b=G,G="",Oa(a,b));return c}
x.prototype.ca=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d="";var e=a.split(/%([-+ 0#]?)([0-9]*)(\.?)([0-9]*)([hlL]?)([A-Za-z%])/),f=0,h;for(h=0;h<e.length-7;h+=7){d+=e[h];var g=c[f++],m=e[h+1],k=+e[h+2]||0,q=+e[h+4]||0,l=e[h+6],n=null;switch(l){case "d":g=Math.trunc(g);case "f":l=Math.trunc(g)+"";q&&(k-=q+1);l.length<k&&("0"==m?(0>g&&k--,l=("0000000000"+Math.abs(g)).slice(-k),0>g&&(l="-"+l)):l=("          "+l).slice(-k));q&&(g=Math.round((g-Math.trunc(g))*Math.pow(10,
q)),l+="."+("0000000000"+Math.abs(g)).slice(-q));d+=l;break;case "c":g=String.fromCharCode(g);case "s":for(;g.length<k;)g="-"==m?g+" ":" "+g;d+=g;break;case "X":n=I;case "x":n||(n=Qa);l="";do l=n[g&15]+l,g>>>=4;while(0<--k||g);d+=l;break;default:d+="(unrecognized printf conversion %"+l+")"}}return d+=e[h]};var ua="clear",xa="print",Pa="buffer",Ea=["c\t\tset category"],Fa="command",Ba=[],Aa="version",Ma=void 0,E="PCjs.localStorage",B={},y={},F="",G="",Qa="0123456789abcdef",I="0123456789ABCDEF";
function J(a,b,c){x.call(this,a,b,Ra,c);this.time=A(this,K);this.N=this.L=this.f=this.K=null;this.la=D(this,"drag",!1);this.V=D(this,"scroll",!1);this.h=!1;if(a=this.O[Sa]){b=this.M.location;this.oa=b[0];this.pa=b[1];this.g=b[2];this.s=b[3];this.v=b[4]||1;this.I=b[5]||1;this.ia=b[6]||a.naturalWidth||this.g;this.ka=b[7]||a.naturalHeight||this.s;this.Z=b[8]||0;this.$=b[9]||0;this.da=b[10]||0;this.ja=b[11]||0;(this.b=this.M.map)?(this.H=this.b.length,this.l=this.b[0].length):(this.l=this.v,this.H=this.I,
this.v=this.I=0);this.aa=D(this,"hexagonal",!1);this.a=D(this,"buttonDelay",0);this.S=this.g/(this.l+this.l*this.v)|0;this.T=this.s/(this.H+this.H*this.I)|0;this.ba=this.S*this.v|0;this.U=this.T*this.I|0;this.m=this.J=-1;Ta(this,a);Ua(this,a);if(this.time){var d=this;this.a&&(this.Y=Va(this.time,"timerInputRelease",function(){0>d.m&&0>d.J&&L(d,-1,-1)}));this.b&&(this.a&&(this.ma=Va(this.time,"timerKeyRelease",function(){Wa(d)})),this.j=0,this.u=[],Xa(this))}this.R=this.X=-1}}r(J,x);
J.prototype.fa=function(a,b){var c=this;switch(a){case Ya:b.onclick=function(){c.f&&c.f()};break;case Za:b.onclick=function(){c.L&&c.L()}}x.prototype.fa.call(this,a,b)};function $a(a,b){a.N=b}function ab(a){a.a?M(a.time,a.ma,a.a):Wa(a)}
function Xa(a){var b=document;b.addEventListener("keydown",function(b){b=b||window.event;if(document.activeElement==a.O[Ya]){var c=bb[b.which||b.keyCode];c&&cb(a,c)&&b.preventDefault()}});b.addEventListener("keypress",function(b){b=b||window.event;var c=String.fromCharCode(b.which||b.charCode);c&&cb(a,c)&&b.preventDefault()})}
function Ta(a,b){b.addEventListener("mousedown",function(c){if(!a.h){var d=a.O[Ya];if(d){var e=window.scrollX,f=window.scrollY;d.focus();window.scrollTo(e,f)}c.button||N(a,b,db,c)}});b.addEventListener("mousemove",function(c){a.h||N(a,b,eb,c)});b.addEventListener("mouseup",function(c){a.h||c.button||N(a,b,O,c)});b.addEventListener("mouseout",function(c){a.h||(0>a.m?N(a,b,eb,c):N(a,b,O,c))})}
function Ua(a,b){b.addEventListener("touchstart",function(c){a.V&&(a.h=!0);N(a,b,db,c)});b.addEventListener("touchmove",function(c){N(a,b,eb,c)});b.addEventListener("touchend",function(c){N(a,b,O,c)})}function cb(a,b){for(var c=0;c<a.b.length;c++)for(var d=a.b[c],e=0;e<d.length;e++)if(0<=d[e].split("|").indexOf(b))return a.j?16>a.u.length&&a.u.push(b):(a.j=1,L(a,e,c),ab(a)),!0;a.ga("unrecognized key '%s' (0x%02x)\n",b,b.charCodeAt(0));return!1}
function Wa(a){1==a.j?(a.j++,L(a,-1,-1),ab(a)):(a.j=0,a.u.length&&cb(a,a.u.shift()))}
function N(a,b,c,d){var e=-1,f=-1,h=!1,g;if(c<O){d=d||window.event;if(d.targetTouches&&d.targetTouches.length){var m=d.targetTouches[0].pageX;var k=d.targetTouches[0].pageY;h=1<d.targetTouches.length}else m=d.pageX,k=d.pageY;var q=g=0;var l=b;do isNaN(l.offsetLeft)||(g+=l.offsetLeft,q+=l.offsetTop);while(l=l.offsetParent);m=a.ia/b.offsetWidth*(m-g)|0;k=a.ka/b.offsetHeight*(k-q)|0;b=m-a.oa;var n=k-a.pa;q=g=!1;l=m>=a.Z&&m<a.Z+a.da&&k>=a.$&&k<a.$+a.ja;if(0<=b&&b<a.g&&0<=n+a.U||l)if(h||a.V||d.preventDefault(),
0<=b&&b<a.g&&0<=n&&n<a.s){q=!0;d=a.g/a.l|0;var v=a.s/a.H|0,w=b/d|0,va=n/v|0;!a.aa||va&1||(b-=d>>1,w=b/d|0,w==a.l-1&&(b=-1));v=va*v+(a.U>>1);b-=w*d+(a.ba>>1);n-=v;0<=b&&b<a.S&&0<=n&&n<a.T&&(e=w,f=va,g=!0)}}if(!h)if(c==db)a.m=m,a.J=k,q?(L(a,e,f),g&&a.a&&M(a.time,a.Y,a.a,!0)):l&&a.f&&a.f();else if(c==eb)0<=a.m&&0<=a.J&&a.la?L(a,e,f):a.N&&a.N(e,f);else if(c==O){if(c=a.a)c=a.time,e=a.Y,c=c.a&&0<e&&e<=c.b.length?0<=c.b[e-1].W:!1;c||L(a,-1,-1);a.m=a.J=-1}else z(a,"unrecognized action: "+c)}
function L(a,b,c){if(b!=a.R||c!=a.X)a.R=b,a.X=c,a.K&&a.K(b,c)}var db=1,eb=2,O=3,Ya="power",Za="reset",Sa="surface",bb={8:"\b"},Ra=1.2;
function fb(a,b,c){x.call(this,a,b,gb,c);a=this.O[hb];if(!a)throw Error("LED binding for '"+hb+"' missing: '"+this.M.O[hb]+"'");b=document.createElement("canvas");if(!b||!b.getContext)throw a.innerHTML="LED device requires HTML5 canvas support",Error("LED device requires HTML5 canvas support");this.ia=a;this.type=C(D(this,"type",ib),jb,kb);this.f=lb[this.type][0];this.j=lb[this.type][1];this.width=D(this,"width",this.f);this.height=D(this,"height",this.j);this.g=D(this,"cols",1);this.H=this.g+D(this,
"colsExtra",0);this.S=D(this,"rows",1);this.K=this.S+D(this,"rowsExtra",0);this.U=this.width*this.g;this.N=this.height*this.S;this.s=P("black",0);this.h=mb(this.M.color)||this.s;this.Z=P(this.h,1,.25);this.Y=P(this.h,1,2);this.m=mb(this.M.backgroundColor);this.$=D(this,"fixed",!1);this.$||(b.style.width="100%",b.style.height="auto");this.X=D(this,"hexagonal",!1);this.aa=D(this,"highlight",!0);this.L=D(this,"persistent",this.type<kb);b.setAttribute("width",this.U.toString());b.setAttribute("height",
this.N.toString());b.style.backgroundColor=this.s;a.appendChild(b);this.V=b.getContext("2d");if(this.l=document.createElement("canvas"))this.l.width=this.T=this.f*this.g,this.l.height=this.v=this.j*this.S,this.a=this.l.getContext("2d");this.ba=(this.K+1)*this.H*4;this.b=Array(this.ba);this.da=this.g<this.H?4*(this.H-this.g):0;this.I=this.J=!1;this.u=0;this.R=-1;var d=this;(this.time=A(this,K))&&nb(this.time,function(){Q(d)})}r(fb,x);
function ob(a){for(var b=a.b,c=0;c<b.length;c+=4){var d=a,e=b,f=c;e[f]=d.type<kb?pb:" ";e[f+1]=d.h==d.s?null:d.h;e[f+2]=0;e[f+3]=R}a.I=a.J=!0;Q(a,!0)}function qb(a){a.m?(a.a.fillStyle=a.m,a.a.fillRect(0,0,a.T,a.v)):a.a.clearRect(0,0,a.T,a.v)}
function Q(a,b){b=void 0===b?!1:b;if(a.I||b){if(a.type<kb){var c=0;if(!a.L||b)qb(a);else if(a.u){c=a.g-a.u;var d=a.f*c;a.a.drawImage(a.l,a.f*a.u,0,d,a.v,0,0,d,a.v)}for(var e=d=0;e<a.K;e++){for(var f=0;f<a.g;f++){var h=a.b[d],g=a.b[d+1]||a.s,m=a.aa&&d==a.R;if(a.b[d+3]&R||m||b){if(f>=c)a:{var k=a,q=h;h=g;var l=f;g=e;var n=m;l=void 0===l?0:l;g=void 0===g?0:g;n=void 0===n?!1:n;var v=0;if(k.X&&!(g&1)&&(v=k.f>>1,l==k.g-1))break a;if(h&&h!=k.h){n=n?P(h,1,2):h;var w=P(h,1,.25)}else n=n?k.Y:k.h,w=k.Z;h=!1;
q=q?n:w;n==k.s&&(q=k.m,h=!0);n=l*k.f+v;w=g*k.j;k.L&&(l=l*k.f+v,g*=k.j,k.m?(k.a.fillStyle=k.m,k.a.fillRect(l,g,k.f,k.j)):k.a.clearRect(l,g,k.f,k.j));k.a.fillStyle=q;g=rb[k.type];3==g.length?(k.a.beginPath(),k.a.arc(n+g[0],w+g[1],g[2],0,2*Math.PI),h?(k.a.globalCompositeOperation="destination-out",k.a.fill(),k.a.globalCompositeOperation="source-over"):k.a.fill()):k.a.fillRect(n+g[0],w+g[1],g[2],g[3])}a.b[d+3]=m?a.b[d+3]|R:a.b[d+3]&~R}d+=4}d+=a.da}a.u=0}else{b="";for(c=0;c<a.b.length;c+=4)b+=a.b[c]||
" ",a.b[c+3]&sb&&(b+=".");qb(a);for(e=d=c=0;c<b.length;c++){g=b[c];"."==g&&d&&d--;f=a;m=d;k=e;m=void 0===m?0:m;k=void 0===k?0:k;if(g=tb[g])for(h=0;h<g.length;h++)if(l=f,v=ub[g[h]]){q=(void 0===m?0:m)*l.f;n=(void 0===k?0:k)*l.j;l.a.fillStyle=l.h;l.a.beginPath();if(3==v.length)l.a.arc(q+v[0],n+v[1],v[2],0,2*Math.PI);else for(w=0;w<v.length;w+=2)w?l.a.lineTo(q+v[w],n+v[w+1]):l.a.moveTo(q+v[w],n+v[w+1]);l.a.closePath();l.a.fill()}if(++d==a.g&&(d=0,++e==a.K))break}}a.V.globalCompositeOperation=a.m&&a.h!=
a.s?"source-over":"copy";a.V.drawImage(a.l,0,0,a.T,a.v,0,0,a.U,a.N);a.I=!1;a.R=-1}else a.L||a.J||ob(a);a.J=!1}function mb(a){return(a=a||void 0)&&vb[a]||a}
function P(a,b,c){b=void 0===b?1:b;c=void 0===c?1:c;if(a){var d=[];a=vb[a]||a;var e=a;var f=16;var h=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);h||(f=10,h=e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(\d+|)\)$/i));if(h){for(e=1;e<h.length;e++)d[e-1]=Number.parseInt(h[e],f);d.length=e-1;f=!0}else f=!1;if(f){a="rgba(";for(f=0;3>f;f++)h=Math.round(d[f]*c),h=0>h?0:255<h?255:h,a+=h+",";a+=(f<d.length?d[f]:b)+")"}}return a}
function wb(a,b,c,d,e){var f=!1;e=(void 0===e?0:e)&xb;b=4*(c*a.H+b);if(b<=a.b.length-4){if(a.b[b]!==d||(a.b[b+3]&xb)!==e)a.b[b]=d,a.b[b+3]=a.b[b+3]&~xb|e|R,a.I=f=!0;a.R=b;a.J=!0;a.u=0}return f}
var jb=0,ib=1,kb=3,hb="container",vb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",
slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},pb=0,xb=129,sb=1,R=128,yb={},rb=(yb[jb]=[4,4,4],yb[ib]=[16,16,14],yb[2]=[2,2,28,28],yb),lb=[[8,8],[32,32],[32,32],[96,128]],ub={A:[30,8,79,8,67,19,37,19],B:[83,10,77,52,67,46,70,22],C:[77,59,71,100,61,89,64,64],
D:[28,91,58,91,69,104,15,104],E:[18,59,28,64,25,88,12,100],F:[24,10,34,21,31,47,18,52],G:[24,56,34,50,60,50,71,56,61,61,33,61],P:[80,102,8]},tb={" ":[],0:"ABCDEF".split(""),1:["B","C"],2:["A","B","D","E","G"],3:["A","B","C","D","G"],4:["B","C","F","G"],5:["A","C","D","F","G"],6:"ACDEFG".split(""),7:["A","B","C"],8:"ABCDEFG".split(""),9:"ABCDFG".split(""),"-":["G"],E:["A","D","E","F","G"],".":["P"]},gb=1.2;
function zb(a,b,c){x.call(this,a,b,Ab,c);this.data=c.values;this.h=this.data.length-1;if(this.O[Ha]){var d=this;c=Math.log2(this.data.length)/2;this.f=Math.pow(2,Math.ceil(c));this.g=Math.pow(2,Math.floor(c));this.a=new fb(a,b+"LEDs",{"class":"LED",bindings:{container:Ga(this)},type:ib,cols:this.f,rows:this.g,color:D(this,"colorROM","green"),backgroundColor:D(this,"backgroundColorROM","black"),persistent:!0}),ob(this.a);this.j=new J(a,b+"Input",{"class":"Input",location:[0,0,this.a.U,this.a.N,this.f,
this.g],bindings:{surface:Ga(this)}});this.l=Ia(this);$a(this.j,function(a,b){if(d.b){var c=d.l;0<=a&&0<=b&&(a=b*d.f+a,c=Bb(d.b,d.data[a],a));H(d,Ja,c)}})}}r(zb,x);function Cb(a,b,c){a.a&&!c&&wb(a.a,b%a.f,b/a.f|0,1,R);return a.data[b]}function Db(a,b){(b=b.shift())&&a.a&&a.a.b.length==b.length&&(a.a.b=b,Q(a.a,!0))}function Eb(a,b){a.a&&b.push(a.a.b)}var Ha="array",Ja="cellDesc",Ab=1.2;
function S(a,b,c){x.call(this,a,b,Fb,c);this.da=D(this,"cyclesMinimum",1E5);this.oa=D(this,"cyclesMaximum",3E6);this.S=C(D(this,"cyclesPerSecond",65E4),this.da,this.oa);this.L=C(D(this,"yieldsPerSecond",Gb),30,120);this.pa=C(D(this,"yieldsPerUpdate",Hb),1,this.L);this.aa=(this.j=D(this,"clockByFrame",120>=this.S))||D(this,"requestAnimationFrame",!0);this.ka=this.la=this.V=1;this.ba=this.S/1E4/100;this.h=this.v=this.ba*this.V;this.H=0;this.Y=Math.round(1E3/this.L);this.Z=[];this.X=[];this.b=[];this.$=
[];this.a=this.I=this.s=!1;this.J=this.g=0;this.sa=this.Ca.bind(this);this.ra=this.ja.bind(this);this.ia=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout).bind(window);if(this.j)this.K=this.ma=0;else{var d=this;Va(this,"timerYield",function(){d.I=!0;var a=d.H,b=Ib(d);b>=d.L?d.H++:d.H+=Math.ceil(d.L/b);d.H>=d.pa&&a<d.pa&&T(d);d.H>=d.L&&(d.H=0)},this.Y)}this.T=this.R=this.m=0;Jb(this)||Kb(this,this.ka)}r(S,x);function nb(a,b){a.Z.push(b)}
S.prototype.fa=function(a,b){var c=this;switch(a){case Lb:b.onclick=function(){c.a?U(c):c.start()};break;case Mb:b.onclick=function(){Nb(c)};break;case Ob:b.addEventListener("mousedown",function(){c.s=!0}),b.addEventListener("mouseup",function(){Jb(c);c.s=!1}),b.addEventListener("mousemove",function(){c.s&&Jb(c)}),b.addEventListener("change",function(){c.s=!0;Jb(c);c.s=!1})}x.prototype.fa.call(this,a,b)};
function Va(a,b,c,d){d=void 0===d?-1:d;var e=a.b.length+1;a.b.push({id:b,za:c,qa:d,W:-1});0<=d&&M(a,e,d);return e}S.prototype.ja=function(){if(this.j){if(!this.a)return;Pb(this);try{this.I=!1;do Qb(this,V(this,Rb(this,Sb(this))));while(this.a&&!this.I)}catch(b){z(this,b.message);U(this);return}Tb(this)}for(var a=0;a<this.Z.length;a++)this.Z[a]();this.a&&this.aa&&this.ia(this.ra)};function Ub(a){var b=a.h/a.ba;if(!b||b>a.V)b=a.V;a.Ba=a.S/a.L*b;a.la=b}
function Rb(a,b){a.R=a.m=b;if(!a.X.length)return a.m=0,a.R;for(var c=0;0<a.m;)c<a.X.length?b=a.X[c++](b)||1:c=b=0,a.m-=b;return a.R-a.m}function Vb(a,b){var c=Date.now();b()&&(a.N+=Date.now()-c)}function V(a,b){b=void 0===b?a.R-a.m:b;a.j&&(a.K-=b,1>a.K&&(a.I=!0));a.R=a.m=0;a.U+=b;a.T+=b;a.a||(a.T=0);return b}function Ib(a,b){return Math.ceil(a.S*a.la/1E3*(void 0===b?1E3:b))}
function Sb(a){var b=a.K+=a.ma;if(1>b)b=0;else{b|=0;for(var c=a.b.length;0<c;c--){var d=a.b[c-1];!(0>d.W)&&b>d.W&&(b=d.W)}}return b}function Wb(a){1<=a?a=a.toFixed(2)+"Mhz":(a=Math.round(1E6*a),a=999>=a?a+"Hz":Math.ceil(a/1E3)+"Khz");return a}function Nb(a,b){a.a?z(a,"already running"):a.g?U(a):Xb(a,b)}
S.prototype.Ca=function(){this.J=0;if(this.a){Pb(this);try{this.I=!1;do{for(var a=Ib(this,this.Y),b=this.b.length;0<b;b--){var c=this.b[b-1];!(0>c.W)&&a>c.W&&(a=c.W)}Qb(this,V(this,Rb(this,a)))}while(this.a&&!this.I)}catch(d){z(this,d.message);U(this);return}this.a&&(this.J=setTimeout(this.sa,Tb(this)),this.aa||this.ja())}};function Jb(a){var b=a.O[Ob];return b?(Kb(a,Math.floor((b.value-b.min)/(b.max-b.min)*(a.oa-a.da)+a.da)/a.S),!0):!1}
function Kb(a,b){void 0!==b&&(!a.s&&0<a.h&&a.h<.9*a.v&&(b=a.ka),a.V=b,b=a.ba*a.V,a.v!=b&&(a.v=b,H(a,Yb,Wb(a.v))),a.h=a.v);a.j&&(a.ma=1E6*a.h/60+1e-8,a.K=0);a.T=0;a.f=a.l=0;Ub(a);for(b=a.b.length;0<b;b--){var c=a.b[b-1];0<=c.qa&&M(a,b,c.qa,!0)}}function M(a,b,c,d){0<b&&b<=a.b.length&&(b=a.b[b-1],d||0>b.W)&&(c=Ib(a,c),a.a&&(c+=V(a)),b.W=c)}function Pb(a){Ub(a);a.U=0;a.N=0;a.u=Date.now();a.f||(a.f=a.u);if(a.l){var b=a.u-a.l;b>a.Y&&(a.f+=b,a.f>a.u&&(a.f=a.u))}}
function Tb(a){a.l=Date.now();a.N&&(a.f+=a.N,a.u+=a.N);var b=a.Y;a.U&&(b=Math.round(b*a.U/a.Ba));b-=a.l-a.u;var c=a.l-a.f;c&&(a.h=a.T/(10*c)/100);0>b?(-1E3>b&&(a.f-=b),b=0):a.h<a.v&&(b=0);a.l+=b;F&&0<=F.indexOf("time")&&a.ga("after running %d cycles, resting for %dms\n",a.U,b);return b}S.prototype.start=function(){if(this.a||this.g)return!1;this.J&&(clearTimeout(this.J),this.J=0);this.a=!0;this.f=this.l=0;T(this,!0);this.j||(this.J=setTimeout(this.sa,0));this.aa&&this.ia(this.ra);return!0};
function Xb(a,b){b=void 0===b?1:b;a.a||(b&&!a.g&&(a.g=b),a.g&&(b=a.j?Sb(a)||1:1,a.g--,Qb(a,V(a,Rb(a,b))),T(a),a.g&&setTimeout(function(){Xb(a,0)},0)))}function U(a){return a.g?(a.g=0,T(a,!0),!0):a.a?(a.a=!1,V(a),T(a,!0),!0):!1}function T(a,b){b&&(a.a?(z(a,"starting ("+Wb(a.v)+" target by "+(a.j?"frame":"timer")+")"),b=!1):z(a,"stopping"));H(a,Lb,a.a?"Halt":"Run");H(a,Mb,a.g?"Stop":"Step");a.s||H(a,Yb,a.a&&a.h?Wb(a.h):"Stopped");for(var c=0;c<a.$.length;c++)a.$[c](b)}
function Qb(a,b){if(1<=b)for(var c=a.b.length;0<c;c--){var d=a.b[c-1];0>d.W||(d.W-=b,0>=d.W&&(d.W=-1,d.za(),0<=d.qa&&M(a,c,d.qa)))}}var Lb="run",Yb="speed",Mb="step",Ob="throttle",Gb=120,Hb=60,Fb=1.2;function W(a,b,c){x.call(this,a.w,b,a.version);this.b=a;this.name=b;this.c=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];if(!c){b=[];c="reg"+this.name;b.push(c);a.Y[c]=[this,-1];for(var d=0;d<this.c.length;d++)c=this.ca("reg%s-%02d",this.name,d),b.push(c),a.Y[c]=[this,d];sa(a,b)}}r(W,x);p=W.prototype;
p.add=function(a,b,c,d){for(var e=0,f=c[0],h=c[1];f<=h;f++)this.c[f]=a.c[f]+b.c[f]+e,e=0,this.c[f]>=d&&(this.c[f]-=d,e=1);e&&(this.b.l=!0);X(this,c)};p.get=function(){return this.c};function Zb(a,b,c){c=void 0===c?[0,15]:c;for(var d=0;d<a.c.length;d++)a.c[d]=0;d=c[0];for(c=c[1];d<=c;d++)a.c[d]=b&15,b>>>=4;return a}p.move=function(a,b){for(var c=b[0],d=b[1];c<=d;c++)this.c[c]=a.c[c];X(a,b)};p.set=function(a){if(a&&a.length==this.c.length)for(var b=0;b<this.c.length;b++)this.c[b]=a[b]};
p.store=function(a){for(var b=0,c=this.c.length;b<c;b++)this.c[b]=a.c[b]};p.sub=function(a,b,c,d){for(var e=0,f=c[0],h=c[1];f<=h;f++)this.c[f]=a.c[f]-b.c[f]-e,e=0,0>this.c[f]&&(this.c[f]+=d,e=1);e&&(this.b.l=!0);X(this,c)};p.toString=function(a){a=void 0===a?!1:a;var b=this.na+"\x3d";a&&3>b.length&&(b+=" ");for(var c=this.c.length-1;0<=c;c--)b=a?b+I[this.c[c]]:b+(Qa[this.c[c]]+(c%4?"":" "));return b};function X(a,b){a.b.j=a.c[b[0]];b[0]<b[1]&&(a.b.j|=a.c[b[0]+1]<<4)}
function $b(a,b,c){x.call(this,a,b,ac,c);this.type=Number.parseInt(D(this,"type","1501").slice(-4),10);this.Y={};this.a=Array(4);for(a=0;4>a;a++)this.a[a]=new W(this,String.fromCharCode(65+a));this.I=this.a[0];this.L=this.a[1];this.aa=this.a[2];this.ba=this.a[3];this.u=Array(8);for(a=0;8>a;a++)this.u[a]=new W(this,"X"+a);this.J=Array(8);for(a=0;8>a;a++)this.J[a]=new W(this,"Y"+a);this.Z=new W(this,"Supp",!0);this.R=new W(this,"Temp",!0);this.s=10;this.l=!1;this.N=this.b=this.j=this.m=0;this.h=[-1,
-1,-1];this.v=0;this.$=za(this,this.M.input);this.$.K=this.va.bind(this);a=this.$;b=this.wa.bind(this);a.f=this.ea.bind(this);a.L=b;this.g=za(this,this.M.output);if(this.f=A(this,bc))this.f.b=this;(this.time=A(this,K))&&this.f&&(this.time.X.push(this.Aa.bind(this)),this.time.$.push(this.xa.bind(this)));this.V=this.X=this.K=void 0;this.U=this.S=-1;this.H={};this.T=cc;a=this.Da.bind(this);b=Fa;B[this.w]||(B[this.w]={});B[this.w][b]||(B[this.w][b]=[]);B[this.w][b].push(a)}r($b,x);
function dc(a,b){a.H[b]&&(a.H[b]=!1,z(a,"break on "+ec[b]),U(a.time))}function fc(a){a.g&&ob(a.g);if(a.f){var b=a.f;b.a&&ob(b.a)}gc(a,!1)}p=$b.prototype;p.Aa=function(a){a=void 0===a?0:a;for(this.v=0;this.v<=a;){if(this.U==this.b){this.U=-1;z(this,"break");U(this.time);break}var b=Cb(this.f,this.b),c=this.b;this.b=c+1&this.f.h;if(void 0==b||!hc(this,b,c)){this.b=c;z(this,"unimplemented opcode");U(this.time);break}this.v+=ic}if(0>=a){var d=this;Vb(this.time,function(){var a=d.f;a.a&&Q(a.a);z(d,d.toString())})}return this.v};
function hc(a,b,c){if(b&4096)return b&2048?!!(b&1024)==a.l&&(a.b=c&1024|b&1023):(a.push(a.b),a.b=b&2047),a.l=!1,!0;var d;c=b&jc;switch(c){case kc:case lc:case mc:case nc:case oc:case pc:case qc:case rc:case sc:case tc:case uc:case vc:c=wc[c];var e=(b&xc)>>yc;var f=(b&zc)>>Ac;var h=(b&Bc)>>Cc;var g=(d=b&Dc)?Ec:Fc;switch(f){case 0:case 1:case 2:case 3:var m=a.a[f];break;case 4:m=Zb(a.R,1,c);break;case 5:g=d?Gc:Hc;break;case 6:m=Zb(a.R,a.j&15,c);break;case 7:m=Zb(a.R,a.j&255,c)}switch(h){case 0:var k=
a.a[e];break;case 1:k=4>f?a.a[f]:void 0;break;case 2:k=5>f?a.Z:5==f?a.a[e]:void 0;break;case 3:if(d)a.a[e].move(m,c);else{a=a.I;e=m;b=c[0];for(m=c[1];b<=m;b++)k=a.c[b],a.c[b]=e.c[b],e.c[b]=k;X(e,c)}return!0}if(!k)break;b=b>=rc?16:a.s;switch(g){case Fc:k.add(a.a[e],m,c,b);break;case Ec:k.sub(a.a[e],m,c,b);break;case Hc:b=k;a=a.a[e];e=c[1];for(m=c[0];e>m;e--)b.c[e]=a.c[e-1];b.c[e]=0;X(b,c);break;case Gc:b=k;a=a.a[e];e=c[0];for(m=c[1];e<m;e++)b.c[e]=a.c[e+1];b.c[e]=0;X(b,c)}return!0;case Ic:e=(b&Jc)>>
Kc;c=(b&Lc)>>Mc;m=1<<((b&Nc)>>Oc);if(!c)break;c+=12;switch(b&Pc){case Qc:a.a[e].c[c]|=m;break;case Rc:a.a[e].c[c]&=~m;break;case Sc:a.a[e].c[c]&m&&(a.l=!0);break;case Tc:a.a[e].c[c]^=m}return!0;case Uc:switch(b&Vc){case Wc:a.I.store(a.J[a.m]);break;case Xc:a.m=b>>4&7;break;case Yc:a.b=a.j;break;case Zc:a.l=!1;c=a.h[0];e=0;for(b=a.h.length-1;e<b;)a.h[e]=a.h[++e];a.h[e]=-1;a.b=c;break;case $c:a.u[a.m].store(a.I);break;case ad:a.I.store(a.u[a.m]);break;case bd:a.J[a.m].store(a.I);break;case cd:dc(a,
"o");if(a.g){c=0;for(e=11;0<=e;c++,e--)b=void 0,a.L.c[e]&8?b=" ":a.L.c[e]&1?b="-":b=I[a.I.c[e]],wb(a.g,c,0,b,a.L.c[e]&2?sb:0)&&dc(a,"om");gc(a)}a.v+=31*ic;a.N&&(a.j=a.N,a.l=!0,dc(a,"i"));break;case dd:a.s=10;break;case ed:a.s=16;break;case fd:a.m=a.j&7;break;default:return!1}return!0}return!1}
function Bb(a,b,c,d){var e="???",f="";if(b&4096)b&2048?(e="BR",e=b&1024?e+"C":e+"NC",f=c&1024|b&1023):(e="CALL",f=b&2047),f=a.ca("0x%04x",f);else if(0<=b){var h=b&jc;switch(h){case kc:case lc:case mc:case nc:case oc:case pc:case qc:case rc:case sc:case tc:case uc:case vc:f="";e=wc[h];for(h=0;16>h;h++)h%4||(f=" "+f),f=(e?h>=e[0]&&h<=e[1]?"F":"0":"?")+f;h=(b&xc)>>yc;var g=(b&zc)>>Ac,m=(b&Bc)>>Cc,k=b&Dc;e="LOAD";var q="?",l="?";var n=k?5==g?"\x3e\x3e":"-":5==g?"\x3c\x3c":"+";switch(m){case 0:q=Y[h];
break;case 1:4>g&&(q=Y[g]);break;case 2:6>g&&(q="NUL");break;case 3:k?(e="MOVE",q=Y[h],l=Y[g]):(e="XCHG",h||(q="A"),4>g&&(l=Y[g])),g=-1}switch(g){case 0:case 1:case 2:case 3:l=Y[h]+n+Y[g];break;case 4:case 5:l=Y[h]+n+"1";break;case 6:l=Y[h]+n+"R5L";break;case 7:l=Y[h]+n+"R5"}f=q+","+l+","+f;break;case Ic:switch(b&Pc){case Qc:e="SET";break;case Rc:e="CLR";break;case Sc:e="TST";break;case Tc:e="NOT"}f=a.a[(b&Jc)>>Kc].name;h=(b&Lc)>>Mc;f+="["+(h?h+12:"?")+":"+((b&Nc)>>Oc)+"]";break;case Uc:switch(b&
Vc){case Wc:e="STORE";f="A,Y[RAB]";break;case Xc:e="STORE";f="RAB,"+((b&112)>>4);break;case Yc:e="BR";f="R5";break;case Zc:e="RET";break;case $c:e="STORE";f="X[RAB],A";break;case ad:e="STORE";f="A,X[RAB]";break;case bd:e="STORE";f="Y[RAB],A";break;case cd:e="DISP";break;case dd:e="BCDS";break;case ed:e="BCDR";break;case fd:e="STORE",f="RAB,R5L"}}}return a.ca((void 0===d?0:d)?"%03X %04X\n":"0x%04x: 0x%04x  %-8s%s\n",c,b,e,f)}
function gd(a,b){if(b){var c=b.stateChip||b[0];if(c&&c.length){var d=c.shift();if((d|0)!==(ac|0))a.ga("Saved state version mismatch: %3.2f\n",d);else{try{a.a.forEach(function(a){return a.set(c.shift())}),a.u.forEach(function(a){return a.set(c.shift())}),a.J.forEach(function(a){return a.set(c.shift())}),a.Z.set(c.shift()),a.R.set(c.shift()),a.s=c.shift(),a.l=c.shift(),a.m=c.shift(),a.j=c.shift(),a.b=c.shift(),a.h=c.shift(),a.N=c.shift()}catch(e){z(a,"Chip state error: "+e.message);return}(b=b.stateROM||
b[1])&&a.f&&Db(a.f,b)}}else z(a,"Invalid saved state")}}
p.Da=function(a,b){var c="",d=a[1],e=Number.parseInt(a[2],16);isNaN(e)&&(e=-1);var f=Number.parseInt(a[3],10)||8;this.T=cc;switch(d[0]){case "b":a=d.substr(1);if("l"==a){for(a in ec)b=ec[a],c+="break on "+b+" (b"+a+"): "+(this.H[a]||!1)+"\n";break}(b=ec[a])?(this.H[a]=!this.H[a],c="break on "+b+" (b"+a+"): "+this.H[a]):a&&(c="unrecognized break option '"+a+"'");break;case "g":this.time.start()?this.U=e:c="already started";break;case "h":U(this.time)||(c="already stopped");break;case "t":"c"==d[1]&&
(this.T=hd);f=Number.parseInt(a[2],10)||1;Nb(this.time,f);b&&(b.ha=a[0]);break;case "r":"c"==d[1]&&(this.T=hd);id(this,d.substr(1),e);c+=this.toString(d[1]);b&&(b.ha=a[0]);break;case "u":for(e=0<=e?e:0<=this.S?this.S:this.b;f--;){d=this.f&&Cb(this.f,e,!0);if(void 0==d)break;c+=Bb(this,d,e++)}this.S=e;b&&(b.ha=a[0]);break;case "?":c="additional commands:";jd.forEach(function(a){c+="\n"+a});break;default:a[0]&&(c="unrecognized command '"+a[0]+"' (try '?')")}c&&z(this,c.trim());return!0};
p.va=function(a,b){var c=0;0<=a&&0<=b&&(c=b|a+1<<4);this.N=c};p.ta=function(){var a=null;if(La(this)){var b;if(window)try{(b=window.localStorage.getItem(this.w))&&(a=JSON.parse(b))}catch(c){z(this,c.message)}}gd(this,a)};p.ea=function(a){void 0==a&&(a=!this.time.a)&&(this.b=0);a?this.time.start():(U(this.time),fc(this))};p.wa=function(){z(this,"reset");this.b=0;fc(this);this.time.a||this.status()};
p.ua=function(){var a=kd(this);if(La(this)){a=JSON.stringify(a);try{window.localStorage.setItem(this.w,a)}catch(b){z(this,b.message)}}};p.push=function(a){for(var b=this.h.length-1;0<b;)this.h[b]=this.h[--b];this.h[0]=a};
function kd(a){var b=[[],[]],c=b[0],d=b[1];c.push(ac);a.a.forEach(function(a){return c.push(a.get())});a.u.forEach(function(a){return c.push(a.get())});a.J.forEach(function(a){return c.push(a.get())});c.push(a.Z.get());c.push(a.R.get());c.push(a.s);c.push(a.l);c.push(a.m);c.push(a.j);c.push(a.b);c.push(a.h);c.push(a.N);a.f&&Eb(a.f,d);return b}function id(a,b,c){if(b&&!(0>c))switch(b){case "pc":a.b=c;break;default:z(a,"unrecognized register: "+b)}}p.status=function(){z(this,this.toString())};
p.toString=function(a,b){var c=this;a=void 0===a?"":a;b=void 0===b?null:b;var d="";if(this.T){this.f&&(d+=Bb(this,Cb(this.f,this.b,!0),this.b,!0));d+="  ";b=0;for(a=this.a.length;b<a;b++)d+=this.a[b].toString()+" ";d+="\n ";d+=" COND\x3d"+(this.l?1:0);d+=" BASE\x3d"+this.s;d+=" R5\x3d"+this.ca("%02X",this.j);d+=" RAB\x3d"+this.m+" ST\x3d";this.h.forEach(function(a){d+=c.ca("%03X ",0>a?0:a&4095)});return d.trim()}if(b){var e=0;for(a=b.length>>1;e<a;e++)d+=b[e].toString(!0)+"  "+b[e+a].toString(!0)+
"\n";return d}d+=this.toString(a,this.a);0<=a.indexOf("a")&&(d+=this.toString(a,this.u),d+=this.toString(a,this.J));d+="COND\x3d"+(this.l?1:0);d+=" BASE\x3d"+this.s;d+=" R5\x3d"+this.ca("0x%02x",this.j);d+=" RAB\x3d"+this.m+" ";this.h.forEach(function(a,b){d+=c.ca("ST%d\x3d0x%04x ",b,a&65535)});this.f&&(d+="\n"+Bb(this,Cb(this.f,this.b,!0),this.b));this.S=this.b;return d.trim()};
function gc(a,b){b=void 0===b?!0:b;var c,d=b&&(a.type==ld?!!(a.aa.c[14]&8):!!(a.L.c[15]&4));if(a.V!==d){if(c=a.O["2nd"])c.style.opacity=d?"1":"0",void 0===a.V&&a.g&&(c.style.color=a.g.color);a.V=d}d=b&&(a.type==ld?!!(a.L.c[15]&4):!!(a.ba.c[15]&8));if(a.X!==d){if(c=a.O.INV)c.style.opacity=d?"1":"0",void 0===a.X&&a.g&&(c.style.color=a.g.color);a.X=d}c=a.type==ld?a.u[4].c[15]>>2:a.aa.c[15];b=b?c?1==c?md:nd:od:pd;if(a.K!==b){if(c=a.O.Deg)c.style.opacity=b==od?"1":"0",void 0===a.K&&a.g&&(c.style.color=
a.g.color);if(c=a.O.Rad)c.style.opacity=b==md?"1":"0",void 0===a.K&&a.g&&(c.style.color=a.g.color);if(c=a.O.Grad)c.style.opacity=b==nd?"1":"0",void 0===a.K&&a.g&&(c.style.color=a.g.color);a.K=b}}p.xa=function(a){for(var b in this.O){var c=this.Y[b];if(c){var d=c[0];c=c[1];H(this,b,0>c?d.toString():I[d.c[c]])}}if(a||!this.time.a)a=this.f,a.a&&Q(a.a),z(this,this.toString())};
var jc=3840,kc=0,lc=256,mc=512,nc=768,oc=1024,pc=1280,qc=1792,rc=2048,sc=2304,tc=2560,Ic=3072,uc=3328,Uc=3584,vc=3840,xc=192,yc=6,zc=56,Ac=3,Bc=6,Cc=1,Dc=1,Pc=3,Qc=0,Rc=1,Sc=2,Tc=3,Jc=192,Kc=6,Lc=48,Mc=4,Nc=12,Oc=2,Vc=15,Wc=0,Xc=1,Yc=2,Zc=3,$c=4,ad=5,bd=6,cd=7,dd=8,ed=9,fd=10,Z={},wc=(Z[kc]=[12,12],Z[lc]=[0,15],Z[mc]=[2,12],Z[nc]=[0,12],Z[oc]=[2,2],Z[pc]=[0,1],Z[qc]=[0,13],Z[rc]=[14,14],Z[sc]=[13,15],Z[tc]=[14,15],Z[uc]=[13,13],Z[vc]=[15,15],Z),ic=128,Fc=0,Ec=1,Hc=2,Gc=3,ld=1501,pd=0,od=1,md=2,nd=
3,ec={i:"input",o:"output",om:"output modification"},cc=0,hd=1,Y="A B C D 1 ? R5L R5".split(" "),jd="b[c]\t\tbreak on condition c;bl\t\tlist break conditions;g [addr]\trun (to addr);h\t\thalt;r[a]\t\tdump (all) registers;t [n]\t\tstep (n instructions);u [addr] [n]\tdisassemble (at addr)".split(";"),ac=1.2;pa="TMS1500";
function qd(a,b){x.call(this,a,a,rd);var c=this;this.b=null;this.a="";this.f=this.g=!1;b=b.trim();"{"==b[0]?sd(this,b):(this.a=b,Ka(this.a,function(a,b,f,h){4==f&&(!h&&b?(sd(c,b),td(c)):c.ga("Error (%d) loading configuration: %s\n",h,a))}));window.addEventListener("load",function(){c.g=!0;td(c)});window.addEventListener((Na("iOS")?"pagehide":Na("Opera")?"unload":void 0)||"beforeunload",function(){var a;if(a=c.b)a.ua&&a.ua(),a.ea&&a.ea(!1)})}r(qd,x);
function td(a){if(a.f&&a.g){for(var b=0;b<ud.length;b++)for(var c in a.M){var d=void 0;try{var e=a.M[c],f="";var h=e["class"];if(h==ud[b]){switch(h){case vd:d=new $b(a.w,c,e);a.b=d;break;case wd:new J(a.w,c,e);break;case xd:new fb(a.w,c,e);break;case bc:d=new zb(a.w,c,e);d.M.revision&&(f="revision "+d.M.revision);break;case K:new S(a.w,c,e);break;case yd:a.ga("PCjs %s v%3.2f\n",e.name,rd);z(a,zd);z(a,Ad);a.a&&z(a,"Configuration: "+a.a);continue;default:z(a,"unrecognized device class: "+h);continue}z(a,
h+" device initialized"+(f?" ("+f+")":""))}}catch(m){a:{z(a,"error initializing "+h+" device '"+c+"':\n"+m.message),d=void 0;f=c;var g=y[a.w];if(g)for(d in g)if(g[d].na==f){g.splice(d,1);break a}}}}if(b=a.b)b.ta&&a.h&&b.ta(),b.ea&&a.j&&b.ea(!0)}}
function sd(a,b){try{a.M=JSON.parse(b);var c=a.M[a.w];qa(a,c);ra(a,c);sa(a,c.bindings);a.j=!1!==c.autoStart;a.h=!1!==c.autoRestore;a.f=!0}catch(e){c=e.message;var d=c.match(/position ([0-9]+)/);d&&(c+=" ('"+b.substr(+d[1],40).replace(/\s+/g," ")+"...')");z(a,"machine '"+a.w+"' initialization error: "+c)}}
var vd="Chip",wd="Input",xd="LED",yd="Machine",bc="ROM",K="Time",ud=[yd,K,xd,wd,bc,vd],zd="Copyright \u00a9 2012-2018 Jeff Parsons \x3cJeff@pcjs.org\x3e",Ad="License: GPL version 3 or later \x3chttp://gnu.org/licenses/gpl.html\x3e",rd=1.2;window[pa]=qd;})()
//# sourceMappingURL=ti55.js.map
