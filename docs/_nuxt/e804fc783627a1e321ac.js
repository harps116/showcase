(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{174:function(t,e,n){"use strict";var o=new(n(1).a);e.a=o},175:function(t,e,n){"use strict";var o=n(174),r={props:{title:{String:String,required:!0},showButton:{Boolean:Boolean,default:!1}},methods:{onToggle:function(t){o.a.$emit("button-toggled",{value:t.value})}}},l=n(7),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"section-title text-center"},[n("h2",{staticClass:"animate text-over-block"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"divider-draft center"}),t._v(" "),n("br"),t._v(" "),n("no-ssr",[t.showButton?n("toggle-button",{attrs:{value:!1,color:"#82C7EB",width:"95",height:"30",labels:{checked:"Glance",unchecked:"Read"}},on:{change:function(e){return t.onToggle(e)}}}):t._e()],1)],1)])])])])}),[],!1,null,"5c8c689a",null);e.a=component.exports},176:function(t,e,n){"use strict";var o=n(174),r=n(175),l={props:{title:String,showButton:{Boolean:Boolean,default:!1}},data:function(){return{showAltContent:!1}},created:function(){var t=this;o.a.$on("button-toggled",(function(e){t.showAltContent=e.value}))},components:{SectionTitle:r.a}},c=n(7),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section-container active fadeIn"},[n("div",{staticClass:"section-block"},[n("div",{staticClass:"container"},[t.title?n("section-title",{attrs:{showButton:t.showButton,title:t.title}}):t._e()],1)]),t._v(" "),t.showAltContent?t._e():n("div",[t._t("content")],2),t._v(" "),t.showAltContent?n("div",[t._t("altContent")],2):t._e()])])}),[],!1,null,"cd1b07ec",null);e.a=component.exports},184:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0256b27b",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";var o=n(184);n.n(o).a},206:function(t,e,n){(e=n(22)(!1)).push([t.i,".readme[data-v-7abd3738]{padding:1em;font-size:23px!important}",""]),t.exports=e},214:function(t,e,n){"use strict";n.r(e);var o={components:{SectionContainer:n(176).a}},r=(n(205),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section-container",{attrs:{title:"README"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("pre",{staticClass:"readme"},[t._v("     \n\n          This is a way for me to give a recruiter, manager, team mate (present or future) some context of who I am \n          and what I'm about.    \n\n          This is not a resume, just a high level over view.\n\n          ## About Me\n\n          ### Personal\n\n          - I have travelled extensively and lived in a number of countries and states.\n\n          - I love to snowboard, surf and wakeboard and don't do it nearly as much as I'd like to.\n\n          - I value family, friends, truth, creativity, thought, care, exercise, disciplined practice and a \n            good laugh now and again.\n\n          - I want to have a meaningful live and positively impact others around me.\n\n          ### Professional\n\n          - I am full stack developer, but often find myself tinkering with the frontend.\n\n          - My primary language is JavaScript. I can also write PHP, Python and I am happy to learn any other language or \n            framework aslong as I am given the time and resources to do so.\n\n          - I have used strongly typed languages such as TypeScript (and a little Java in school) and enjoy using them.\n\n          - I like to work in teams that communicate well and open the doors to collabaration.\n\n          - A big motivator for me is being given a small section of the work week to improve my skillset relevant to the \n            job at hand.\n\n          - I really love writing code and always strive to make it readable and maintainable. \n          \n          ## My Current Toolbelt:\n\n          - Node on the server side. I am open to new approaches and languages.\n          \n          - Databases - whatever SQL or NoSQL is just fine.\n          \n          - I quite like Vue on the front end but have used React alongside TypeScript along with\n            jQuery, AngularJS, Knocokout (and a host of other JS libs).\n\n          - I generally deploy to Digital Ocean, but have used AWS.\n\n          - For managing projects, I just fit-in with whatever the team is using.\n\n          - I have a some DevOps experience with Docker, Ansible and Terraform.\n\n          - I use Linux for an OS (currently Arch), I can use other systems but I would rather not.\n\n          - vim > nano when on a server\n\n          - vscode for a text editor\n\n          That's about it, I look forward to working with you!\n\n    ")])])])]},proxy:!0}])})}),[],!1,null,"7abd3738",null);e.default=component.exports}}]);