webpackJsonp([33],{102:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),s=a(0),l=a.n(s),c=a(7),u=a(24),p=a(9),d=a(5),f=a(12),h=(a(194),a(195)),m=a(132),v=a(196),b=(a.n(v),function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}()),g=function(e){function t(e){r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.inputsMap={pwd:{placeholder:function(){return o.a.lang("m.register.1")},isRequired:!0,type:"password",validator:function(e){return a.checkPassword(e)},newVersion:!0},pwd_repeat:{placeholder:function(){return o.a.lang("register.password.confirm")},isRequired:!0,type:"password",validator:function(e){return a.checkConfirmPassword(e)},newVersion:!0}},a.inputs=Object.keys(a.inputsMap),a.data={},a.inputValid={},a.state={error:"",activate:0},a}return i(t,e),b(t,[{key:"componentWillMount",value:function(){this.activateReset()}},{key:"activateReset",value:function(){var e=this,t=this.props.location.query.token,a=this;p.a.httpRequest("user/forget",{Token:t},function(t){0==t.Status?(f.a.loginedAfter(t),console.log(t),a.setState({activate:1})):(t.Data?e.setState({error:Object(d.d)(t.Error,t.Data)}):t.Error&&e.setState({error:t.Error}),setTimeout(function(){c.a.replace("/login")},2e3))},this)}},{key:"onValidForm",value:function(){return!(!this.inputValid.pwd||!this.inputValid.pwd_repeat||this.inputValid.pwd!=this.inputValid.pwd_repeat)}},{key:"onInputError",value:function(e,t){t?"empty"==t?this.setState({error:"form.error.empty"}):this.setState({error:"error."+e+"."+t}):this.setState({error:""})}},{key:"checkPassword",value:function(e){return!!this.data.email||m.a.password(e)}},{key:"checkConfirmPassword",value:function(e){return e==this.data.pwd}},{key:"onChange",value:function(e,t,a){if(this.data[e]=t,this.inputValid[e]!=a){this.inputValid[e]=a;var r=!this.onValidForm();r!=this.state.disable&&this.setState({disable:r})}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=!1;for(var r in this.inputsMap){this.refs[r].onCheckValid()||(a=!0)}if(a)return!1;var n={NewPWD:Object(d.f)(this.data.pwd)},i=this;p.a.httpRequest("user/password",n,function(e){0==e.Status?i.setState({activate:2}):e.Data?t.setState({error:Object(d.d)(e.Error,e.Data)}):e.Error&&t.setState({error:e.Error})},this,"put")}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,r=t.disable,n=t.activate;return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login-box"},l.a.createElement("h3",null,o.a.lang("reset.title")),2==n?l.a.createElement("div",{className:"login-input-box"},l.a.createElement("div",{className:"land_text pdt-72"},l.a.createElement("p",null,l.a.createElement("span",null,o.a.lang("resetPassword.succ")),l.a.createElement("span",{className:"fem875 gold cursor",onClick:function(){c.a.replace("/login")}},o.a.lang("activateSucc.1_6"))))):l.a.createElement("div",{className:"login-input-box"},l.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},this.inputs&&this.inputs.map(function(t,r){var n=e.inputsMap[t];return l.a.createElement("div",{className:"login-input-text",key:r},l.a.createElement(h.a,Object.assign({onChange:e.onChange.bind(e,t),onError:e.onInputError.bind(e,t)},n,{ref:t})),a&&0==r&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"iconfont icon-tips"}),o.a.lang(a)))}),l.a.createElement("button",{className:"active"+(r?" btnDis":""),type:"submit"},o.a.lang("common.confirm"))),l.a.createElement("div",{className:"register-input-right-text"},l.a.createElement("div",{className:"register-right-bg"}),l.a.createElement("p",null,o.a.lang("reset.tip"))))))}}]),t}(u.a);t.default=g}});