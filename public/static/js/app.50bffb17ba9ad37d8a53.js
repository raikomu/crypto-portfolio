webpackJsonp([1],{CHzS:function(t,e,n){"use strict";(function(t){var n=("undefined"!=typeof window?window:void 0!==t?t:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__;function r(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function o(t){return null!==t&&"object"==typeof t}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){r(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&r(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&r(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&r(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,s);var i=function(t){this.register([],t,!1)};i.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},i.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},i.prototype.update=function(t){!function t(e,n,r){0;n.update(r);if(r.modules)for(var o in r.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},i.prototype.register=function(t,e,n){var o=this;void 0===n&&(n=!0);var s=new a(e,n);0===t.length?this.root=s:this.get(t.slice(0,-1)).addChild(t[t.length-1],s);e.modules&&r(e.modules,function(e,r){o.register(t.concat(r),e,n)})},i.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var c;var u=function(t){var e=this;void 0===t&&(t={}),!c&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new i(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c,this._makeLocalGettersCache=Object.create(null);var a=this,s=this.dispatch,u=this.commit;this.dispatch=function(t,e){return s.call(a,t,e)},this.commit=function(t,e,n){return u.call(a,t,e,n)},this.strict=o;var l=this._modules.root.state;h(this,l,[],this._modules.root),f(this,l),r.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:c.config.devtools)&&function(t){n&&(t._devtoolHook=n,n.emit("vuex:init",t),n.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){n.emit("vuex:mutation",t,e)}))}(this)},l={state:{configurable:!0}};function d(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function p(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;h(t,n,[],t._modules.root,!0),f(t,n,e)}function f(t,e,n){var o=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var a={};r(t._wrappedGetters,function(e,n){a[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=c.config.silent;c.config.silent=!0,t._vm=new c({data:{$$state:e},computed:a}),c.config.silent=s,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),o&&(n&&t._withCommit(function(){o._data.$$state=null}),c.nextTick(function(){return o.$destroy()}))}function h(t,e,n,r,o){var a=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!a&&!o){var i=m(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){c.set(i,u,r.state)})}var l=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var a=v(n,r,o),s=a.payload,i=a.options,c=a.type;return i&&i.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,o){var a=v(n,r,o),s=a.payload,i=a.options,c=a.type;i&&i.root||(c=e+c),t.commit(c,s,i)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var a=o.slice(r);Object.defineProperty(n,a,{get:function(){return t.getters[o]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}(t,e)}},state:{get:function(){return m(t.state,n)}}}),o}(t,s,n);r.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,s+n,e,l)}),r.forEachAction(function(e,n){var r=e.root?n:s+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e){var o,a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return(o=a)&&"function"==typeof o.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}(t,r,o,l)}),r.forEachGetter(function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,s+n,e,l)}),r.forEachChild(function(r,a){h(t,e,n.concat(a),r,o)})}function m(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function v(t,e,n){return o(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function g(t){c&&t===c||
/**
 * vuex v3.1.2
 * (c) 2019 Evan You
 * @license MIT
 */
function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(c=t)}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(t){0},u.prototype.commit=function(t,e,n){var r=this,o=v(t,e,n),a=o.type,s=o.payload,i=(o.options,{type:a,payload:s}),c=this._mutations[a];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(i,r.state)}))},u.prototype.dispatch=function(t,e){var n=this,r=v(t,e),o=r.type,a=r.payload,s={type:o,payload:a},i=this._actions[o];if(i){try{this._actionSubscribers.filter(function(t){return t.before}).forEach(function(t){return t.before(s,n.state)})}catch(t){0}return(i.length>1?Promise.all(i.map(function(t){return t(a)})):i[0](a)).then(function(t){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(s,n.state)})}catch(t){0}return t})}},u.prototype.subscribe=function(t){return d(t,this._subscribers)},u.prototype.subscribeAction=function(t){return d("function"==typeof t?{before:t}:t,this._actionSubscribers)},u.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},u.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},u.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),h(this,this.state,t,this._modules.get(t),n.preserveState),f(this,this.state)},u.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=m(e.state,t.slice(0,-1));c.delete(n,t[t.length-1])}),p(this)},u.prototype.hotUpdate=function(t){this._modules.update(t),p(this,!0)},u.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(u.prototype,l);var _=x(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=S(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),b=x(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var a=S(this.$store,"mapMutations",t);if(!a)return;r=a.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),y=x(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||S(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),w=x(function(t,e){var n={};return C(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var a=S(this.$store,"mapActions",t);if(!a)return;r=a.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n});function C(t){return function(t){return Array.isArray(t)||o(t)}(t)?Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function x(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function S(t,e,n){return t._modulesNamespaceMap[n]}var $={Store:u,install:g,version:"3.1.2",mapState:_,mapMutations:b,mapGetters:y,mapActions:w,createNamespacedHelpers:function(t){return{mapState:_.bind(null,t),mapGetters:y.bind(null,t),mapMutations:b.bind(null,t),mapActions:w.bind(null,t)}}};e.a=$}).call(e,n("DuR2"))},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o={name:"Header",created:function(){this.signedIn()},methods:{setError:function(t,e){this.error=t.response&&t.response.data&&t.response.data.error||e},signedIn:function(){return localStorage.signedIn},signOut:function(){var t=this;this.$http.secured.delete("/signin").then(function(e){delete localStorage.csrf,delete localStorage.signedIn,t.$store.dispatch("logout"),t.$router.replace("/")}).catch(function(e){return t.setError(e,"Sign out failed")})}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-blue mb-8 py-4"},[n("div",{staticClass:"container m-auto flex flex-wrap items-center justify-end"},[t._m(0),t._v(" "),n("div",[t.isAuthenticated?t._e():n("router-link",{staticClass:"px-2 no-underline",attrs:{to:"/"}},[t._v("Sign in")]),t._v(" "),t.isAuthenticated?t._e():n("router-link",{staticClass:"px-2 no-underline",attrs:{to:"/signup"}},[t._v("Sign Up")]),t._v(" "),t.isAuthenticated?n("router-link",{staticClass:"px-2 no-underline",attrs:{to:"/currencies"}},[t._v("My Currencies")]):t._e(),t._v(" "),t.isAuthenticated?n("a",{staticClass:"px-2 no-underline",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("Sign out")]):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-1 flex items-center"},[e("a",{staticClass:"uppercase font-bold no-underline",attrs:{href:"/"}},[this._v("Crypto Portfolio")])])}]},s={name:"App",components:{Header:n("VU/8")(o,a,!1,null,null,null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},c=n("VU/8")(s,i,!1,null,null,null).exports,u=n("/ocq"),l={name:"Signin",data:function(){return{name:"",password:"",error:""}},created:function(){this.checkSignedIn()},updated:function(){this.checkSignedIn()},methods:{signin:function(){var t=this;this.$http.plain.post("/signin",{name:this.name,password:this.password}).then(function(e){return t.signinSuccessful(e)}).catch(function(e){return t.signinFailed(e)})},signinSuccessful:function(t){var e=this;t.data.csrf?(localStorage.csrf=t.data.csrf,localStorage.signedIn=!0,this.error="",this.$store.dispatch("login",{name:this.name,password:this.password}).then(function(){e.$router.replace("/currencies")})):this.signinFailed(t)},signinFailed:function(t){this.error=t.response&&t.response.data&&t.response.data.error||"",delete localStorage.csrf,delete localStorage.signedIn},checkSignedIn:function(){localStorage.signedIn&&this.$router.replace("/currencies")}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-sm m-auto"},[n("div",{staticClass:"border p-10 border-grey rounded"},[n("h3",{staticClass:"text-2xl mb-6 text-black"},[t._v("Sign In")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[t.error?n("div",{staticClass:"text-red"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"bg-white focus:outline-none focus:shadow-outline border\n               border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none\n               leading-normal",attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-white focus:outline-none focus:shadow-outline border\n               border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none\n               leading-normal",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4\n              border border-blue-700 rounded",attrs:{type:"submit"}},[t._v("\n        Sign In\n      ")]),t._v(" "),n("div",{staticClass:"my-4"},[n("router-link",{staticClass:"bg-transparent text-blue-700 font-semibold py-2 px-4",attrs:{to:"/signup"}},[t._v("\n          Sign Up\n        ")])],1)])])])},staticRenderFns:[]},p=n("VU/8")(l,d,!1,null,null,null).exports,f={name:"Signup",data:function(){return{name:"",password:"",password_confirmation:"",error:""}},created:function(){this.checkSignedIn()},updated:function(){this.checkSignedIn()},methods:{signup:function(){var t=this;this.$http.plain.post("/signup",{name:this.name,password:this.password,password_confirmation:this.password_confirmation}).then(function(e){return t.signupSuccessful(e)}).catch(function(e){return t.signupFailed(e)})},signupSuccessful:function(t){var e=this;t.data.csrf?(localStorage.csrf=t.data.csrf,localStorage.signedIn=!0,this.error="",this.$store.dispatch("login",{name:this.name,password:this.password}).then(function(){e.$router.replace("/currencies")})):this.signupFailed(t)},signupFailed:function(t){this.error=t.response&&t.response.data&&t.response.data.error||"Something went wrong",delete localStorage.csrf,delete localStorage.signedIn},checkSignedIn:function(){localStorage.signedIn&&this.$router.replace("/currencies")}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-sm m-auto"},[n("div",{staticClass:"border p-10 border-grey rounded"},[n("h3",{staticClass:"text-2xl mb-6 text-black"},[t._v("Create Account")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[t.error?n("div",{staticClass:"text-red"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"bg-white focus:outline-none focus:shadow-outline border\n               border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none\n               leading-normal",attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bg-white focus:outline-none focus:shadow-outline border\n               border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none\n               leading-normal",attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-6"},[n("label",{attrs:{for:"password"}},[t._v("Confirm Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password_confirmation,expression:"password_confirmation"}],staticClass:"bg-white focus:outline-none focus:shadow-outline border\n               border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none\n               leading-normal",attrs:{type:"password",id:"password_confirmation"},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4\n              border border-blue-700 rounded",attrs:{type:"submit"}},[t._v("\n        Create Account\n      ")]),t._v(" "),n("div",{staticClass:"my-4"},[n("router-link",{staticClass:"bg-transparent text-blue-700 font-semibold py-2 px-4",attrs:{to:"/"}},[t._v("\n          Sign In\n        ")])],1)])])])},staticRenderFns:[]},m=n("VU/8")(f,h,!1,null,null,null).exports,v={name:"Currencies",data:function(){return{currencies:[],newCurrency:[],error:""}},created:function(){var t=this;localStorage.signedIn?this.$http.secured.get("/currencies").then(function(e){t.currencies=e.data}).catch(function(e){return t.setError(e,"Something went wrong")}):this.$router.replace("/")},methods:{setError:function(t,e){this.error=t.response&&t.response.data&&t.response.data.error||e},addCurrency:function(){var t=this;this.newCurrency&&this.$http.secured.post("/currencies",{currency:{name:this.newCurrency.name,amount:this.newCurrency.amount,purchased_at:this.newCurrency.purchased_at,wallet:this.newCurrency.wallet}}).then(function(e){t.currencies.push(e.data),t.newCurrency=""}).catch(function(e){return t.setError(e,"Couldn't add currency")})},deleteCurrency:function(t){var e=this;confirm("Are you sure?")&&this.$http.secured.delete("/currencies/"+t.id).then(function(n){e.currencies.splice(e.currencies.indexOf(t),1)}).catch(function(t){return e.setError(t,"Couldn't delete currency")})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-auto py-6"},[t.error?n("div",{staticClass:"text-red"},[t._v(t._s(t.error))]):t._e(),t._v(" "),n("h3",{staticClass:"text-3xl mb-6",attrs:{align:"center"}},[t._v("Add a new Currency")]),t._v(" "),n("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.addCurrency(e)}}},[n("div",{staticClass:"mb-6 m-auto max-w-md"},[n("label",{staticClass:"block font-bold mb-2",attrs:{for:"currency_name"}},[t._v("Type")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newCurrency.name,expression:"newCurrency.name"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight\n      focus:outline-none focus:shadow-outline",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.newCurrency,"name",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Bitcoin"}},[t._v("Bitcoin")]),t._v(" "),n("option",{attrs:{value:"Ethereum"}},[t._v("Ethereum")]),t._v(" "),n("option",{attrs:{value:"Ripple"}},[t._v("Ripple")])]),t._v(" "),n("label",{staticClass:"block font-bold mb-2",attrs:{for:"currency_amount"}},[t._v("Amount")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCurrency.amount,expression:"newCurrency.amount"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight\n             focus:outline-none focus:shadow-outline",attrs:{type:"number"},domProps:{value:t.newCurrency.amount},on:{input:function(e){e.target.composing||t.$set(t.newCurrency,"amount",e.target.value)}}}),t._v(" "),n("label",{staticClass:"block font-bold mb-2",attrs:{for:"currency_purchased_at"}},[t._v("Date of purchase")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCurrency.purchased_at,expression:"newCurrency.purchased_at"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight\n             focus:outline-none focus:shadow-outline",attrs:{type:"date"},domProps:{value:t.newCurrency.purchased_at},on:{input:function(e){e.target.composing||t.$set(t.newCurrency,"purchased_at",e.target.value)}}}),t._v(" "),n("label",{staticClass:"block font-bold mb-2",attrs:{for:"currency_wallet"}},[t._v("Wallet")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCurrency.wallet,expression:"newCurrency.wallet"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 mb-4 rounded shadow leading-tight\n             focus:outline-none focus:shadow-outline",attrs:{type:"text"},domProps:{value:t.newCurrency.wallet},on:{input:function(e){e.target.composing||t.$set(t.newCurrency,"wallet",e.target.value)}}}),t._v(" "),n("input",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",attrs:{type:"submit",value:"Add Currency"}})])]),t._v(" "),n("h3",{staticClass:"text-3xl mb-6",attrs:{align:"center"}},[t._v("My Cryptocurrencies")]),t._v(" "),n("table",{staticClass:"table-auto m-auto"},[t._m(0),t._v(" "),n("tbody",t._l(t.currencies,function(e){return n("tr",{key:e.id},[n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.amount))]),t._v(" "),n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.purchased_at))]),t._v(" "),n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.wallet))]),t._v(" "),n("td",{staticClass:"border px-4 py-2"}),t._v(" "),n("td",{staticClass:"border px-4 py-2"},[n("button",{staticClass:"bg-transparent hover:bg-red-500 text-red-700 font-bold\n                  hover:text-white py-2 px-4 border border-red-500\n                  hover:border-transparent rounded",on:{click:function(n){return n.preventDefault(),t.deleteCurrency(e)}}},[t._v("\n            Delete\n          ")])])])}),0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"border px-4 py-2"},[t._v("Cryptocurrency")]),t._v(" "),n("th",{staticClass:"border px-4 py-2"},[t._v("Amount")]),t._v(" "),n("th",{staticClass:"border px-4 py-2"},[t._v("Date of purchase")]),t._v(" "),n("th",{staticClass:"border px-4 py-2"},[t._v("Wallet location")]),t._v(" "),n("th",{staticClass:"border px-4 py-2"},[t._v("Current market value (EUR)")]),t._v(" "),n("th",{staticClass:"border px-4 py-2"},[t._v("Option")])])])}]},_=n("VU/8")(v,g,!1,null,null,null).exports;r.a.use(u.a);var b,y=new u.a({mode:"history",routes:[{path:"/",name:"Signin",component:p},{path:"/signup",name:"Signup",component:m},{path:"/currencies",name:"Currencies",component:_}]}),w=n("//Fk"),C=n.n(w),x=n("bOdI"),S=n.n(x),$=n("CHzS");r.a.use($.a);var k=new $.a.Store({state:{isAuthenticated:!!localStorage.getItem("token")},mutations:(b={},S()(b,"LOGIN_SUCCESS",function(t){t.isAuthenticated=!0,t.pending=!1}),S()(b,"LOGOUT",function(t){t.isAuthenticated=!1}),b),actions:{login:function(t,e){var n=t.commit;return new C.a(function(t){setTimeout(function(){localStorage.setItem("token","jwt"),n("LOGIN_SUCCESS"),t()},1e3)})},logout:function(t){var e=t.commit;localStorage.removeItem("token"),e("LOGOUT")}},getters:{isAuthenticated:function(t){return t.isAuthenticated}}}),E=n("Rf8U"),O=n.n(E),A=n("Dd8w"),M=n.n(A),I=n("mtWM"),N=n.n(I),j=N.a.create({baseURL:"http://localhost:3000",withCredentials:!0,headers:{"Content-Type":"application/json"}}),G=N.a.create({baseURL:"http://localhost:3000",withCredentials:!0,headers:{"Content-Type":"application/json"}});j.interceptors.request.use(function(t){var e=t.method.toUpperCase();return"OPTIONS"!==e&&"GET"!==e&&(t.headers=M()({},t.header,{"X-CSRF-TOKEN":localStorage.csrf})),t}),j.interceptors.response.use(null,function(t){return t.response&&t.response.config&&401===t.response.status?G.post("/refresh",{},{headers:{"X-CSRF-TOKEN":localStorage.csrf}}).then(function(e){localStorage.csrf=e.data.csrf,localStorage.signedIn=!0;var n=t.response.config;return n.headers["X-CSRF-TOKEN"]=localStorage.csrf,G.request(n)}).catch(function(t){return delete localStorage.csrf,delete localStorage.signedIn,location.replace("/"),C.a.reject(t)}):C.a.reject(t)});n("Q00M");r.a.config.productionTip=!1,r.a.use(O.a,{secured:j,plain:G}),new r.a({el:"#app",router:y,store:k,securedAxiosInstance:j,plainAxiosInstance:G,components:{App:c},template:"<App/>"})},Q00M:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.50bffb17ba9ad37d8a53.js.map