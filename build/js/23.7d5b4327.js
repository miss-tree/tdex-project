webpackJsonp([23],{105:function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),o=a(0),l=a.n(o),c=a(25),u=a(7),d=a(24),p=a(9),h=a(5),g=a(12),m=a(132),f=a(194),v=a(195),w=a(6),b=a(196),E=(a.n(b),function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}()),y=function(e){function t(e){r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.isMobile=Object(w.h)(),a.inputsMap={email:{placeholder:function(){return s.a.lang("Login.105")},isRequired:!0,validator:function(e){return m.a.email(e)},newVersion:!0},pwd:{placeholder:function(){return s.a.lang("m.register.1")},isRequired:!0,type:"password",validator:function(e){return a.checkPassword(e)},unFill:!0,newVersion:!0},pwd_repeat:{placeholder:function(){return s.a.lang("m.register.2")},isRequired:!0,type:"password",validator:function(e){return a.checkConfirmPassword(e)},unFill:!0,newVersion:!0},agent:{placeholder:function(){return s.a.lang("m.register.4")},match:"^[a-zA-Z0-9]{6}$",value:a.getAgentId(),inputClassName:"hide",newVersion:!0}},a.inputs=Object.keys(a.inputsMap),a.data={agree:!1},a.errors={},a.lastErrName="",a.inputValid={},a.state={error:"",errorData:{},disable:!a.onValidForm(),actRegisterSuc:!1,showActivate:!0,activateCode:"",showPWdLimit:!1,pwPass:{1:"",2:"",3:""},showAgent:!1},a}return i(t,e),E(t,[{key:"componentDidMount",value:function(){}},{key:"getAgentId",value:function(){var e=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),a=window.location.search.substr(1).match(t);if(null!==a)return decodeURIComponent(a[2])}("ref");return e||""}},{key:"onChangeAgree",value:function(e){e.stopPropagation();var t=e.target.checked;this.data.agree=t;var a=!this.onValidForm();!a&&t?this.setState({disable:a}):this.setState({disable:!0})}},{key:"onValidForm",value:function(){return!!(this.inputValid.email&&this.inputValid.pwd&&this.inputValid.pwd_repeat&&this.data.agree&&this.inputValid.pwd==this.inputValid.pwd_repeat)}},{key:"onInputError",value:function(e,t){return this.errors[e]=t,void this.onInputErrorData(e,t);var e}},{key:"onInputErrorData",value:function(e,t){var a=this,r=this.state.errorData;t?(!function(e,t){r[t]="empty"==e?"error."+t+".empty":"error."+t+"."+e,a.setState({errorData:r})}(t,e),this.lastErrName=e):r[e]&&(r[e]="",this.setState({errorData:r}))}},{key:"checkPasswordValue",value:function(e){var t=/\s+/g.test(e),a=e.length,r=/^(?![^A-Z]+$)(?!\D+$)/g.test(e),n={1:"",2:"",3:""};t||(n[1]=!0),a>7&&a<25&&(n[2]=!0),r&&(n[3]=!0),this.setState({pwPass:n})}},{key:"checkOnFocus",value:function(e){this.state.showPWdLimit||this.setState({showPWdLimit:!0})}},{key:"checkPassword",value:function(e){return!(!this.data.email||!g.a.isTestAcount(this.data.email))||m.a.password(e)}},{key:"checkConfirmPassword",value:function(e){return e==this.data.pwd}},{key:"onChange",value:function(e,t,a,r){if(this.data[e]=t,"pwd"==e){if(r)return this.checkOnFocus(e),!1;t&&this.checkPasswordValue(t)}if(this.inputValid[e]!=a){this.inputValid[e]=a;var n=!this.onValidForm();n!=this.state.disable&&this.setState({disable:n})}}},{key:"handleSubmit",value:function(e,t){var a=this;for(var r in this.inputsMap){if(!this.refs[r].onCheckValid())return this.refs[r].focusInput(),void(t&&t(!1))}if(this.data.agree){var n={Email:this.data.email,Password:Object(h.f)(this.data.pwd),AgentUid:this.data.agent,GeetestChallenge:e.geetest_challenge,GeetestValidate:e.geetest_validate,GeetestSeccode:e.geetest_seccode};if(this.props.isActivity)n.Channel="activity";else{var i=g.a.getChannel();i&&(n.Channel=i)}this.isMobile&&(n.IsMobile=!0);var o=this;p.a.httpRequest("user/register",n,function(e){if(0==e.Status){var r=e.Data;r.Email=a.data.email,t&&t(!0),g.a.registerAfter(e),Object(h.g)(s.a.lang("register.emailVerification.send")),r.ActivateCode?o.setState({actRegisterSuc:!0,activateCode:r.ActivateCode}):o.props.isActivity?o.setState({actRegisterSuc:!0}):u.a.replace({pathname:"/emailVerification"})}else t&&t(!1),e.Data?o.setState({error:Object(h.d)(e.Error,e.Data),errorData:{email:Object(h.d)(e.Error,e.Data)}}):e.Error&&o.setState({error:e.Error,errorData:{email:e.Error}})},this)}}},{key:"showAgent",value:function(){var e=this.state.showAgent;this.inputsMap.agent.inputClassName=e?"hide":"",this.setState({showAgent:!e})}},{key:"closeVerify",value:function(){this.setState({actRegisterSuc:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.error,t.errorData),r=t.disable,n=(t.actRegisterSuc,t.activateCode,t.showPWdLimit),i=t.pwPass,o=t.showAgent;this.props.isMobile;return l.a.createElement("div",{className:"register"},l.a.createElement("div",{className:"register-box"},l.a.createElement("h3",null,s.a.lang("header.1_10")),l.a.createElement("div",{className:"register-input-box"},l.a.createElement("form",null,this.inputs&&this.inputs.map(function(t,r){var c=e.inputsMap[t];return"agent"==t&&(c.maxLength=6),l.a.createElement("div",{className:"register-input-text",key:r},"agent"==t&&l.a.createElement("div",{className:"referee-text"+(o?"":" agentHide"),onClick:e.showAgent.bind(e)},l.a.createElement("p",null,l.a.createElement("i",{className:"iconfont icon-dropDown"}),s.a.lang("register.agent"))),l.a.createElement(v.a,Object.assign({ref:t,onChange:e.onChange.bind(e,t),onError:e.onInputError.bind(e,t)},c)),"pwd"!=t&&a[t]&&l.a.createElement("p",{className:"input-error"},l.a.createElement("i",{className:"iconfont icon-tips"}),s.a.lang(a[t])),"pwd"==t&&n&&l.a.createElement("div",{className:"register-error-text"},l.a.createElement("p",null,l.a.createElement("i",{className:i[1]?"iconfont icon-true":"iconfont icon-tips"}),s.a.lang("register.pwd.1")),l.a.createElement("p",null,l.a.createElement("i",{className:i[2]?"iconfont icon-true":"iconfont icon-tips"}),s.a.lang("register.pwd.2",8,24)),l.a.createElement("p",null,l.a.createElement("i",{className:i[3]?"iconfont icon-true":"iconfont icon-tips"}),s.a.lang("register.pwd.3"))))}),l.a.createElement("p",{className:"agree-clause-text"},l.a.createElement("label",null,l.a.createElement("span",null,l.a.createElement("input",{className:"input-agree",type:"checkbox",defaultChecked:this.data.agree,onChange:this.onChangeAgree.bind(this)}),l.a.createElement("span",null)),l.a.createElement("span",null,s.a.lang("register.agreement.agree"))),l.a.createElement(c.Link,{to:"/clause",target:"_blank"},s.a.lang("register.agreement"))),l.a.createElement(f.a,{onSuccess:this.handleSubmit.bind(this),onValidForm:this.onValidForm.bind(this),width:"100%",disable:r,type:"register"},l.a.createElement("button",{type:"submit",className:"active"},s.a.lang("header.1_10")))),l.a.createElement("div",{className:"register-input-right-text"},l.a.createElement("div",{className:"register-right-bg"}),l.a.createElement("p",null,s.a.lang("register.tips.1")),l.a.createElement("p",null,s.a.lang("register.tips.2")),l.a.createElement("p",null,s.a.lang("register.tips.3")),l.a.createElement("div",{className:"pos-rz"},s.a.lang("Register.100"),l.a.createElement(c.Link,{to:"/login",className:"text-action"},s.a.lang("activateSucc.1_6")))))))}}]),t}(d.a);t.default=y}});