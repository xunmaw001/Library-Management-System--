(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wodedaihai/detail"],{"1c94":function(t,e,n){"use strict";var s=n("4c5e"),a=n.n(s);a.a},"4c5e":function(t,e,n){},5721:function(t,e,n){"use strict";n.r(e);var s=n("dab4"),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);e["default"]=a.a},b1fd:function(t,e,n){"use strict";n.r(e);var s=n("e32d"),a=n("5721");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("1c94");var r,o=n("f0c5"),u=Object(o["a"])(a["default"],s["b"],s["c"],!1,null,"594b1bfa",null,!1,s["a"],r);e["default"]=u.exports},c07c:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");s(n("66fd"));var e=s(n("b1fd"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},dab4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,s,a,i,r){try{var o=t[i](r),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(s,a)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(s,a){var r=t.apply(e,n);function o(t){i(r,s,a,o,u,"next",t)}function u(t){i(r,s,a,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过","待审核"],count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=r(s.default.mark((function t(e){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=r(s.default.mark((function e(n){var a,i;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),a=t.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:i=e.sent,this.user=i.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","wodedaihai"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(e){t.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(e.id,"&userid=")+this.userid)},onAcrossTap:function(e,n,s,a,i){if("是"!=n||"是"==this.detail.sfsh){if(t.setStorageSync("crossTable","wodedaihai"),t.setStorageSync("crossObj",this.detail),t.setStorageSync("statusColumnName",s),t.setStorageSync("statusColumnValue",i),t.setStorageSync("tips",a),""!=s&&!s.startsWith("[")){var r=t.getStorageSync("crossObj");for(var o in r)if(o==s&&r[o]==i)return void this.$utils.msg(a)}this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))}else this.$utils.msg("请审核通过后再操作")},init:function(){var t=r(s.default.mark((function t(){var e;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("wodedaihai",this.id);case 2:e=t.sent,this.detail=e.data,this.swiperList=this.detail.fengmian?this.detail.fengmian.split(","):[];case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(s.default.mark((function t(e){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;e=n.$base.url+e,t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=r(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discusswodedaihai/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=r(s.default.mark((function t(){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),"待审核"==this.detail.sfsh&&(this.detail.sfsh="待审核"),t.next=11,this.$api.update("wodedaihai",this.detail);case 11:this.$utils.msg("审核成功"),this.$refs.popup.close();case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=o}).call(this,n("543d")["default"])},e32d:function(t,e,n){"use strict";var s={"mescroll-uni":()=>Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f05e")),"uni-popup":()=>n.e("components/uni-popup/uni-popup").then(n.bind(null,"1c89"))},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.swiperList,(function(e,n){var s=e.substring(0,4);return{$orig:t.__get_orig(e),g0:s}}))),s=t.isAuth("wodedaihai","审核"),a=t.isAuthFront("wodedaihai","审核");t.$mp.data=Object.assign({},{$root:{l0:n,m0:s,m1:a}})},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s}))}},[["c07c","common/runtime","common/vendor"]]]);