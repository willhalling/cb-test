(function(e){function t(t){for(var s,i,o=t[0],u=t[1],l=t[2],m=0,f=[];m<o.length;m++)i=o[m],n[i]&&f.push(n[i][0]),n[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,o=1;o<r.length;o++){var u=r[o];0!==n[u]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},n={1:0},a=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;a.push([5,0]),r()})({"2YA1":function(e,t,r){},5:function(e,t,r){e.exports=r("Vtdi")},"6y4w":function(e,t,r){"use strict";var s=r("2YA1"),n=r.n(s);n.a},COg4:function(e,t,r){"use strict";var s=r("MK9j"),n=r.n(s);n.a},MK9j:function(e,t,r){},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var s=r("Kw5r"),n=r("L2JU"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("CB Test")]),e.formSubmitted?r("Summary",{attrs:{list:e.formList}}):e._e(),e.formSubmitted?e._e():r("Form")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Summary"},[r("h1",[e._v("Summary")]),r("ol",{staticClass:"Summary__list"},e._l(e.list,function(t,s){return r("li",{key:s,staticClass:"Summary__item",class:{"Summary__item--odd":e.isOdd(s)}},[r("div",[r("h2",[e._v("Query from "+e._s(t.first_name)+" "+e._s(t.surname))]),r("p",[e._v("Email: "),r("a",{attrs:{href:"mailto:"+t.email_address}},[e._v(e._s(t.email_address))])]),r("p",[e._v("Message: "+e._s(t.customer_query)+" ")])])])}))])},u=[],l={name:"Summary",props:{list:{type:Array}},methods:{isOdd:function(e){return e%2==0}}},c=l,m=(r("jQx1"),r("KHd+")),f=Object(m["a"])(c,o,u,!1,null,null,null),d=f.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Form"},[e._m(0),e.errors?r("p",{staticClass:"Form__error"},[e._v("Oh no, you have "+e._s(e.errors)+" errors.")]):e._e(),e._l(e.messages,function(t){return r("p",{staticClass:"Form__message"},[e._v(e._s(t))])}),r("field",{attrs:{name:"First name",required:!0},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),r("field",{attrs:{name:"Surname",required:!0},model:{value:e.form.surname,callback:function(t){e.$set(e.form,"surname",t)},expression:"form.surname"}}),r("field",{attrs:{name:"E-mail address",required:!0},model:{value:e.form.email_address,callback:function(t){e.$set(e.form,"email_address",t)},expression:"form.email_address"}}),r("field",{attrs:{name:"Customer query",type:"textarea"},model:{value:e.form.customer_query,callback:function(t){e.$set(e.form,"customer_query",t)},expression:"form.customer_query"}}),r("button-cta",{attrs:{full:""},on:{click:e.validateForm}},[e._v("Add")])],2)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Fields marked "),r("span",{staticClass:"required"},[e._v("*")]),e._v(" are required.")])}],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field__group",class:{active:e.isActive},on:{click:e.onClick}},[r("div",{staticClass:"field__group__header"},[r("label",{staticClass:"field__group__label"},[e._v("\n      "+e._s(e.name)+"\n      "),e.required?r("span",{staticClass:"required"},[e._v("*")]):e._e()])]),"textarea"===e.type?r("textarea",{staticClass:"field__group__input",attrs:{placeholder:e.placeholder,spellcheck:"false",rows:"5"},domProps:{value:e.value},on:{input:function(t){e.onInput(t.target.value)},focus:function(t){e.isActive=!0},blur:function(t){e.isActive=!1}}}):r("input",{staticClass:"field__group__input",attrs:{placeholder:e.placeholder,autofocus:e.autofocus,type:"text",spellcheck:"false"},domProps:{value:e.value},on:{input:function(t){e.onInput(t.target.value)},focus:function(t){e.isActive=!0},blur:function(t){e.isActive=!1}}})])},h=[],y={name:"field",props:["name","value","type","placeholder","autofocus","maxLength","showCharacters","disabled","required"],data:function(){return{isActive:!1}},methods:{onClick:function(){var e=this.$el.children[1];e.focus()},onInput:function(e){this.$emit("input",e)}}},b=y,g=(r("6y4w"),Object(m["a"])(b,v,h,!1,null,null,null)),C=g.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{class:e.cssClasses,attrs:{type:e.type},on:{click:e.onClick}},[e._t("default")],2)},O=[],S={name:"button",props:{text:{type:String},type:{type:String,default:"button"},full:{type:Boolean,default:!1}},data:function(){return{}},computed:{cssClasses:function(){return"".concat(this.type).concat(this.full?" button--full":"")}},methods:{onClick:function(e){this.$emit("click",e)}}},j=S,k=(r("vkPE"),Object(m["a"])(j,x,O,!1,null,null,null)),E=k.exports,F=r("yT7P"),w={computed:Object(F["a"])({},Object(n["c"])({formList:"form/list"})),methods:Object(F["a"])({},Object(n["b"])({submitForm:"form/addFormItem"}))},$={name:"Summary",mixins:[w],components:{Field:C,ButtonCta:E},data:function(){return{messages:[],form:{first_name:"",surname:"",email_address:"",customer_query:""},errors:0}},methods:{validateForm:function(){this.resetForm(),""===this.form.first_name&&(this.addErrorMessage("First Name"),this.errors++),""===this.form.surname&&(this.addErrorMessage("Surname"),this.errors++),""===this.form.email_address&&(this.addErrorMessage("Email Address"),this.errors++),this.validateEmail(this.form.email_address)||(this.messages.push("Please add a valid Email Address."),this.errors++),this.errors||this.submitForm(this.form)},resetForm:function(){this.messages=[],this.errors=0},addErrorMessage:function(e){return this.messages.push("You need to add a ".concat(e,"."))},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e).toLowerCase())}}},q=$,A=(r("COg4"),Object(m["a"])(q,p,_,!1,null,null,null)),P=A.exports,M={name:"app",mixins:[w],components:{Summary:d,Form:P},computed:{formSubmitted:function(){return this.formList.length>0}}},L=M,I=(r("nNx0"),Object(m["a"])(L,a,i,!1,null,null,null)),J=I.exports,Q={list:[]},T={addFormItem:function(e,t){var r=e.commit;r("setFormList",t)}},K={setFormList:function(e,t){e.list.push(t)}},z={list:function(e){return e.list}},B={namespaced:!0,state:Q,actions:T,mutations:K,getters:z};s["a"].use(n["a"]);var N=new n["a"].Store({modules:{form:B}}),V=N;s["a"].config.productionTip=!1,s["a"].use(n["a"]),new s["a"]({store:V,render:function(e){return e(J)}}).$mount("#app")},c2y1:function(e,t,r){},jQx1:function(e,t,r){"use strict";var s=r("ldQJ"),n=r.n(s);n.a},ldQJ:function(e,t,r){},nNx0:function(e,t,r){"use strict";var s=r("uWEC"),n=r.n(s);n.a},uWEC:function(e,t,r){},vkPE:function(e,t,r){"use strict";var s=r("c2y1"),n=r.n(s);n.a}});
//# sourceMappingURL=app.f19a7d6a.js.map