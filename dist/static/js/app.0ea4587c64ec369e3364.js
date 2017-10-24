webpackJsonp([3],[,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(15),i=n.n(a),o=i.a.create({baseURL:"https://api.readhub.me"})},function(t,e,n){"use strict";var a=n(3),i=n(57),o=n(51),s=n.n(o),c=function(t){return n.e(0).then(function(){var e=[n(62)];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(1).then(function(){var e=[n(61)];t.apply(null,e)}.bind(this)).catch(n.oe)};a.a.use(i.a),a.a.config.debug=!0,e.a=new i.a({mode:"history",routes:[{path:"/",name:"HotTopic",component:s.a},{path:"/news",name:"TmtNews",component:c},{path:"/tech",name:"DeveloperInfo",component:r}]})},function(t,e,n){n(39);var a=n(1)(n(34),n(52),"data-v-001ed63e",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=n(13),o=n.n(i),s=n(12),c=n(11);a.a.prototype.$http=c.a,new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(48),i=n.n(a),o=n(50),s=n.n(o);e.default={name:"app",components:{vindex:s.a,backTop:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"backTop",data:function(){return{speed:.2,toTop:!1}},mounted:function(){this.$nextTick(function(){window.addEventListener("scroll",this.needToTop)})},methods:{backTop:function(){var t=this,e=document.body.scrollTop,n=setInterval(function(){e-=Math.abs(e*t.speed),e<=1&&(e=0,clearInterval(n)),document.body.scrollTop=e},20);return!1},needToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight;this.toTop=t>e+100}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vheader",data:function(){return{msg:"Readhub"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(49),i=n.n(a);e.default={name:"vindex",components:{vheader:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),i=n.n(a);e.default={name:"HotTopic",data:function(){return{item:"",list:[]}},components:{},created:function(){this.getNews()},methods:{getNews:function(){var t=this;this.$http.get("/topic?lastCursor=&pageSize=10").then(function(e){200===e.status&&(t.list=e.data.data)}).catch(function(t){console.log(t)})},toggle:function(t){t.show=!t.show},getTime:function(t){var e=new Date(t),n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();return i()().format(n,"zh_CN")}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAA4CAYAAACbkeZSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MEIwNUE3NEY0MTFFN0FFNTJDOTE2ODY0MTFGOUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MEIwNUI3NEY0MTFFN0FFNTJDOTE2ODY0MTFGOUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RUU3NzlGRjc0RjExMUU3QUU1MkM5MTY4NjQxMUY5RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RUU3N0EwMDc0RjExMUU3QUU1MkM5MTY4NjQxMUY5RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoBVoykAAAmWSURBVHja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"},function(t,e,n){n(43);var a=n(1)(n(35),n(56),"data-v-cc2511b6",null);t.exports=a.exports},function(t,e,n){n(41);var a=n(1)(n(36),n(54),"data-v-44df2f4c",null);t.exports=a.exports},function(t,e,n){n(40);var a=n(1)(n(37),n(53),"data-v-2dfcb615",null);t.exports=a.exports},function(t,e,n){n(42);var a=n(1)(n(38),n(55),"data-v-c1d7ca5a",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vindex"),t._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1),t._v(" "),n("backTop")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vindex"},[n("vheader"),t._v(" "),n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/",exact:"",tag:"span"}},[t._v("热门话题")]),t._v(" "),n("router-link",{attrs:{to:"/news",tag:"span"}},[t._v("科技动态")]),t._v(" "),n("router-link",{attrs:{to:"/tech",tag:"span"}},[t._v("开发者资讯")])],1)],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vheader"},[a("img",{staticClass:"logo",attrs:{src:n(47),alt:"Readhub"}}),t._v(" "),a("a",{staticClass:"joinUs",attrs:{href:"https://mp.weixin.qq.com/s/kREAGXnuZVNw_DspMeDEwA"}},[t._v("加入我们")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"article"},[n("div",{staticClass:"title"},[t._v("\n      "+t._s(e.title)+"\n      "),n("span",{staticClass:"time"},[t._v("  "+t._s(t.getTime(e.publishDate)))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"info"},[t._v("\n      "+t._s(e.info)+"\n    ")])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{directives:[{name:"show",rawName:"v-show",value:t.toTop,expression:"toTop"}],attrs:{id:"backTop"},on:{click:t.backTop}},[n("a",[t._v("↑")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]}}],[33]);
//# sourceMappingURL=app.0ea4587c64ec369e3364.js.map