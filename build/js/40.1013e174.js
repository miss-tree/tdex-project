webpackJsonp([40],{96:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=a(0),s=a.n(c),u=a(24),o=a(2),l=a(130),m=a(9),v=a(138),f=(a.n(v),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),g=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.curLang="",a.state={curPage:1,activityList:[],activityData:""},a}return r(t,e),f(t,[{key:"componentDidMount",value:function(){this.curLang=o.a.getLang(),this.requestActivity()}},{key:"componentWillReceiveProps",value:function(e){var t=o.a.getLang();this.curLang!=t&&(this.curLang=t,this.requestActivity())}},{key:"requestActivity",value:function(e){var t=e||this.state.curPage,a=this;m.a.httpRequest("news/activities",{Page:t,PageSize:4},function(e){if(0==e.Status){var t=e.Data;a.setState({activityData:t}),a.setState({activityList:t.List,curPage:t.Page})}})}},{key:"setTimeFormat",value:function(e,t){return-1!=t.indexOf("0000-00-00")?(t="",o.a.lang("activity.Status.start",this.setNewDate(e))):this.compareDate(e,t)?this.setNewDate(e)+" ~ "+this.setNewDate(t):o.a.lang("activity.Status.start",this.setNewDate(e))}},{key:"setNewDate",value:function(e){return e.slice(0,e.indexOf(" "))}},{key:"compareDate",value:function(e,t){return new Date(e.replace(/-/g,"/"))<new Date(t.replace(/-/g,"/"))}},{key:"turnPage",value:function(e){this.requestActivity(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.activityList,n=t.activityData;return s.a.createElement("div",{className:"inside-page-web advert-page"},s.a.createElement("div",{className:"advert-flex"},a?a.map(function(t,a){return s.a.createElement("div",{key:a},s.a.createElement("a",{href:t.Url,target:"_blank"},s.a.createElement("div",{className:"advert-pic"},s.a.createElement("div",null,s.a.createElement("img",{src:t.ImageLarge})),s.a.createElement("div",{className:"advert-mask"}),s.a.createElement("span",{className:"advert-start "},o.a.lang("activity.Status"+t.Status))),s.a.createElement("h4",null,t.Title),s.a.createElement("p",null,o.a.lang("activity.time"),e.setTimeFormat(t.BeginTime,t.EndTime))))}):s.a.createElement("div",{className:"no-data"},s.a.createElement("div",null,s.a.createElement("img",{src:"https://res1.tdex.com/images/mining/dig-emojy.png"})),s.a.createElement("p",{className:"dig-no-data-p"},o.a.lang("mimic.panel.trading.15")))),n.hasOwnProperty("PageCount")&&n.PageCount>1&&s.a.createElement(l.a,{data:n,onChange:this.turnPage.bind(this)}))}}]),t}(u.a);t.default=g}});