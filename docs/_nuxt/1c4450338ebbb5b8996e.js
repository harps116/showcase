(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{170:function(t,n,e){"use strict";var o=new(e(0).a);n.a=o},171:function(t,n,e){"use strict";var o=e(170),c={props:{title:{String:String,required:!0},showButton:{Boolean:Boolean,default:!1}},methods:{onToggle:function(t){o.a.$emit("button-toggled",{value:t.value})}}},l=e(6),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"section-title text-center"},[e("h2",{staticClass:"animate text-over-block"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"divider-draft center"}),t._v(" "),e("br"),t._v(" "),e("no-ssr",[t.showButton?e("toggle-button",{attrs:{value:!1,color:"#82C7EB",width:"95",height:"30",labels:{checked:"Glance",unchecked:"Read"}},on:{change:function(n){return t.onToggle(n)}}}):t._e()],1)],1)])])])])}),[],!1,null,"5c8c689a",null);n.a=component.exports},172:function(t,n,e){"use strict";var o=e(170),c=e(171),l={props:{title:String,showButton:{Boolean:Boolean,default:!1}},data:function(){return{showAltContent:!1}},created:function(){var t=this;o.a.$on("button-toggled",(function(n){t.showAltContent=n.value}))},components:{SectionTitle:c.a}},r=e(6),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"section-container active fadeIn"},[e("div",{staticClass:"section-block"},[e("div",{staticClass:"container"},[t.title?e("section-title",{attrs:{showButton:t.showButton,title:t.title}}):t._e()],1)]),t._v(" "),t.showAltContent?t._e():e("div",[t._t("content")],2),t._v(" "),t.showAltContent?e("div",[t._t("altContent")],2):t._e()])])}),[],!1,null,"cd1b07ec",null);n.a=component.exports},212:function(t,n,e){"use strict";e.r(n);var o={components:{SectionContainer:e(172).a}},c=e(6),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section-container",{attrs:{title:"404"},scopedSlots:t._u([{key:"content",fn:function(){return[e("p",{staticClass:"text-center four0four-text"},[t._v("We all get lost from time to time...")]),t._v(" "),e("div",{staticClass:"footer bg-lightgray section-block"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"text-center"},[e("span",{staticClass:"link"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v("\n              ::\n              "),e("span",{staticClass:"link"},[e("nuxt-link",{attrs:{to:"/readme"}},[t._v("README")])],1),t._v("\n              ::\n              "),e("span",{staticClass:"link"},[e("nuxt-link",{attrs:{to:"/now"}},[t._v("Now")])],1),t._v("\n              ::\n            ")])])])])])]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports}}]);