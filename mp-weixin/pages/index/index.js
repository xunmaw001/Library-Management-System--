(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"4d10":function(n,t,e){},8069:function(n,t,e){"use strict";e.r(t);var i=e("da67"),u=e.n(i);for(var c in i)"default"!==c&&function(n){e.d(t,n,(function(){return i[n]}))}(c);t["default"]=u.a},c284:function(n,t,e){"use strict";var i,u=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.menuList,(function(t,e){var i=n.__map(t.frontMenu,(function(t,e){var i=n.__map(t.child,(function(t,e){var i=t.menu.split("列表");return{$orig:n.__get_orig(t),g0:i}}));return{$orig:n.__get_orig(t),l0:i}}));return{$orig:n.__get_orig(t),l1:i}}))),i=n.tushuxinxilist[0].fengmian.substring(0,4),u=n.tushuxinxilist[0].fengmian.split(","),c=n.tushuxinxilist[1].fengmian.substring(0,4),s=n.tushuxinxilist[1].fengmian.split(","),a=n.tushuxinxilist[2].fengmian.substring(0,4),o=n.tushuxinxilist[2].fengmian.split(","),r=n.tushuxinxilist[3].fengmian.substring(0,4),l=n.tushuxinxilist[3].fengmian.split(","),f=n.tushuxinxilist[4].fengmian.substring(0,4),d=n.tushuxinxilist[4].fengmian.split(","),h=n.tushuxinxilist[5].fengmian.substring(0,4),p=n.tushuxinxilist[5].fengmian.split(",");n.$mp.data=Object.assign({},{$root:{l2:e,g1:i,g2:u,g3:c,g4:s,g5:a,g6:o,g7:r,g8:l,g9:f,g10:d,g11:h,g12:p}})},c=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return i}))},d508:function(n,t,e){"use strict";var i=e("4d10"),u=e.n(i);u.a},d537:function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");i(e("66fd"));var t=i(e("f75a"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},da67:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(e("a34a")),u=c(e("2971"));function c(n){return n&&n.__esModule?n:{default:n}}function s(n,t,e,i,u,c,s){try{var a=n[c](s),o=a.value}catch(r){return void e(r)}a.done?t(o):Promise.resolve(o).then(i,u)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(i,u){var c=n.apply(t,e);function a(n){s(c,i,u,a,o,"next",n)}function o(n){s(c,i,u,a,o,"throw",n)}a(void 0)}))}}e("651d");var o=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(e.bind(null,"b704"))},r={components:{uniIcons:o},data:function(){return{options2:{effect:"flip",loop:!0},options3:{effect:"cube",loop:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}},rows:1,column:6,iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"],role:"",aboutUsDetail:{},menuList:[],swiperMenuList:[],user:{},tableName:"",btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"图书名称"}],queryIndex:0,searchForm:{tushuxinxitushumingcheng:""},CustomBar:"0",swiperList:[],tushuxinxilist:[],news:[]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=a(i.default.mark((function t(){var e,c,s,a=this;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.role=n.getStorageSync("role"),e=n.getStorageSync("nowTable"),t.next=4,this.$api.session(e);case 4:c=t.sent,this.user=c.data,this.tableName=e,s=u.default.list(),this.menuList=s,this.menuList.forEach((function(n,t){a.role==n.roleName&&n.frontMenu.forEach((function(n,t){n.child[0].buttons.indexOf("查看")>-1&&a.swiperMenuList.push(n)}))}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){var t=a(i.default.mark((function t(){var e,u,c,s,a,o,r,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),e=[],t.next=4,this.$api.page("config",{page:1,limit:5});case 4:for(u=t.sent,c=!0,s=!1,a=void 0,t.prev=8,o=u.data.list[Symbol.iterator]();!(c=(r=o.next()).done);c=!0)l=r.value,l.name.indexOf("picture")>=0&&l.value&&""!=l.value&&null!=l.value&&e.push({img:l.value,title:l.name});t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](8),s=!0,a=t.t0;case 16:t.prev=16,t.prev=17,c||null==o.return||o.return();case 19:if(t.prev=19,!s){t.next=22;break}throw a;case 22:return t.finish(19);case 23:return t.finish(16);case 24:return e&&(this.swiperList=e),this.getAboutUs(),t.next=28,this.$api.list("news",{page:1,limit:6});case 28:if(u=t.sent,this.news=u.data.list,null===n.getStorageSync("userid")){t.next=36;break}return t.next=33,this.$api.recommend2("tushuxinxi",{page:1,limit:6});case 33:u=t.sent,t.next=39;break;case 36:return t.next=38,this.$api.recommend("tushuxinxi",{page:1,limit:6});case 38:u=t.sent;case 39:this.tushuxinxilist=u.data.list;case 40:case"end":return t.stop()}}),t,this,[[8,12,16,24],[17,,19,23]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.tushuxinxitushumingcheng=""},onSwiperTap:function(n){},getAboutUs:function(){var n=a(i.default.mark((function n(){var t;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$api.info("aboutus",1);case 2:t=n.sent,this.aboutUsDetail=t.data;case 4:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){0==this.queryIndex&&(n.setStorageSync("indexQueryCondition",this.searchForm.tushuxinxitushumingcheng),this.searchForm.tushuxinxitushumingcheng=""),n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})},onPageTap2:function(t){n.setStorageSync("useridTag",0),n.navigateTo({url:t,fail:function(){n.switchTab({url:t})}})}}};t.default=r}).call(this,e("543d")["default"])},f75a:function(n,t,e){"use strict";e.r(t);var i=e("c284"),u=e("8069");for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);e("d508");var s,a=e("f0c5"),o=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"0cd66614",null,!1,i["a"],s);t["default"]=o.exports}},[["d537","common/runtime","common/vendor"]]]);