(self.webpackChunkepic=self.webpackChunkepic||[]).push([[26],{2026:function(t,e,n){"use strict";n.r(e);var r,i=n(168),s=n(5751),u=n(8858),a=n(7892),o=n.n(a),h=n(184),c=s.ZP.div(r||(r=(0,i.Z)(["\n  flex:1;\n  border:1px dashed #ccc;\n  padding:36px;\n  width:100vw;\n"])));e.default=function(){var t=(0,u.m)().UserStore;return(0,h.jsxs)(c,{children:[(0,h.jsx)("h1",{children:"About"}),t.currentUser?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h3",{children:["\u7528\u6237\u540d\uff1a",t.currentUser.attributes.username]}),(0,h.jsxs)("h3",{children:["\u521b\u5efa\u65f6\u95f4\uff1a",o()(t.currentUser.createdAt).format("YYYY\u5e74MM\u6708DD\u65e5")]})]}):(0,h.jsx)("h2",{children:"\u7a7a\u7a7a\u5982\u4e5f\uff0c\u5feb\u767b\u5f55\u5427"})]})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",h="month",c="quarter",f="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,h),s=n-i<0,u=e.clone().add(r+(s?-1:1),h);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:h,y:f,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",g={};g[D]=m;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return D;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,i=a}return!r&&i&&(D=i),i||!r&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=y;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return O},v.isValid=function(){return!(this.$d.toString()===l)},v.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return w(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<w(t)},v.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!O.u(e)||e,c=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},M=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case f:return r?l(1,0):l(31,11);case h:return r?l(1,m):l(0,m+1);case o:var D=this.$locale().weekStart||0,g=(M<D?M+7:M)-D;return l(r?v-g:v+(6-g),m);case a:case d:return $(y+"Hours",0);case u:return $(y+"Minutes",1);case s:return $(y+"Seconds",2);case i:return $(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,o=O.p(t),c="set"+(this.$u?"UTC":""),l=(n={},n[a]=c+"Date",n[d]=c+"Date",n[h]=c+"Month",n[f]=c+"FullYear",n[u]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===h||o===f){var M=this.clone().set(d,1);M.$d[l]($),M.init(),this.$d=M.set(d,Math.min(this.$D,M.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[O.p(t)]()},v.add=function(r,c){var d,l=this;r=Number(r);var $=O.p(c),M=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===h)return this.set(h,this.$M+r);if($===f)return this.set(f,this.$y+r);if($===a)return M(1);if($===o)return M(7);var m=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,v=this.$d.getTime()+r*m;return O.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,h=n.months,c=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},f=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:c(n.monthsShort,a,h,3),MMMM:c(h,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(M,(function(t,e){return e||$[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,l){var $,M=O.p(d),m=w(r),v=(m.utcOffset()-this.utcOffset())*e,y=this-m,D=O.m(this,m);return D=($={},$[f]=D/12,$[h]=D,$[c]=D/3,$[o]=(y-v)/6048e5,$[a]=(y-v)/864e5,$[u]=y/n,$[s]=y/e,$[i]=y/t,$)[M]||y,l?D:O.a(D)},v.daysInMonth=function(){return this.endOf(h).$D},v.$locale=function(){return g[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return O.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),x=_.prototype;return w.prototype=x,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",h],["$y",f],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=g[D],w.Ls=g,w.p={},w}()}}]);
//# sourceMappingURL=26.93a13d5e.chunk.js.map