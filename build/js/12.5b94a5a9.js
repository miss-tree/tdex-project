webpackJsonp([12],{114:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),s=a(0),l=a.n(s),c=a(7),u=a(24),d=a(9),p=a(28),y=a.n(p),h=a(231),f=a(186),m=(a.n(f),a(16)),g=a(15),b=a(5),w=a(130),E=a(36),T=a(29),P=a(1),D=a(623),O=a(3),k=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),C=function(e){function t(e){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={tab:a.props.location.query.t||1,dateType:1,startDate:y()().subtract(24,"hours"),endDate:y()(),historys:{List:[],PageSize:100},pHistorys:{List:[],PageSize:100}},a}return i(t,e),k(t,[{key:"componentWillMount",value:function(){this.turnPage(this.state.tab,1),O.a.addListener(O.a.EventName.LANG_SELECT,this.onChangeLang.bind(this),this)}},{key:"onChangeLang",value:function(){2==this.state.tab&&this.loadPositionHistory(this.state.pHistorys.Page)}},{key:"handleSubmit",value:function(e){e.preventDefault(),e.stopPropagation(),this.turnPage(1)}},{key:"turnPage",value:function(e,t,a){1==e?this.loadHistory(t,this.state.startDate.format("YYYY-MM-DD"),this.state.endDate.format("YYYY-MM-DD")):this.loadPositionHistory(t)}},{key:"componentWillReceiveProps",value:function(e){e.location.query.t!=this.props.location.query.t&&this.onChangeTab(e.location.query.t)}},{key:"loadPositionHistory",value:function(e){var t=this;T.a.loadPositionHistory(e,this.state.pHistorys.PageSize,this,function(e){t.setState({pHistorys:e})})}},{key:"loadHistory",value:function(e,t,a){var n=this;if(!(e<1)){this.state.historys&&this.state.historys.PageCount&&e>this.state.historys.PageCount&&(e=this.state.historys.PageCount);d.a.httpRequest("spot/history",{PageSize:this.state.historys.PageSize,Page:parseInt(e),BeginTime:t,EndTime:a},function(e){0==e.Status&&n.setState({historys:e.Data})},this)}}},{key:"endDateChange",value:function(e){this.setState({endDate:data,dateType:0})}},{key:"startDateChange",value:function(e){this.setState({startDate:data,dateType:0})}},{key:"changeDateType",value:function(e){if(e>0){var t,a=y()();t=2==e?y()().subtract(7,"days"):3==e?y()().subtract(1,"month"):y()().subtract(24,"hours"),this.setState({startDate:t,endDate:a,dateType:e})}else this.setState({dateType:e})}},{key:"onToggleTab",value:function(e){this.state.tab!=e&&c.a.push("/history?t="+e)}},{key:"onChangeTab",value:function(e){e=e||1,this.setState({tab:e}),this.turnPage(e,1)}},{key:"render",value:function(){var e=this,t=this,a=this.state,n=a.startDate,r=a.endDate,i=a.historys,s=a.dateType,c=a.tab,u=a.pHistorys,d=[],p=[];if(1==c)d=[{id:"CreateTime",display:o.a.lang("accountSafe.1_102")},{id:"Code",display:o.a.lang("TradeHistory.103")},{id:"Direction",display:o.a.lang("TradeHistory.104")},{id:"Price",display:o.a.lang("TradeHistory.105")},{id:"Volume",display:o.a.lang("tradeHistory.1_9")},{id:"Amount",display:o.a.lang("TradeHistory.106")},{id:"Fee",display:o.a.lang("tradeHistory.2_69")},{id:"State",display:o.a.lang("recharge.1_23")}],i&&i.List&&i.List.length&&(p=i.List.map(function(e){var t=Object(b.c)(e.Currency),a=E.a.getOrderCode(e.Rid,e.Currency),n=E.a.getProduct(a);if(n){var r=g.a.accMul(e.Reality,e.Quantity,n.PriceFixed),i=g.a.toFixed(e.Commission,n.PriceFixed);return{CreateTime:e.CreateTime.substring(5,16),Code:e.Rid?a:"",Direction:e.Direction==m.a.TRADE.DIRECTION.BID?o.a.lang("TradeForm.108"):o.a.lang("TradeForm.109"),Price:g.a.toFixed(e.Reality,n.PriceFixed),Volume:g.a.toFixed(e.Quantity,n.VolFixed),Amount:t.sb+r,Fee:t.sb+i,State:o.a.lang("SORDER.STATE."+e.State)}}}));else{d=[{id:"ID",display:o.a.lang("trade.history.ID")},{id:"CName",display:o.a.lang("trade.history.CName"),width:"6%"},{id:"SideTxt",display:o.a.lang("trade.history.SideTxt"),width:"5%"},{id:"ScaleTxt",display:o.a.lang("trade.history.ScaleTxt"),width:"5%"},{id:"Volume",display:o.a.lang("trade.history.Volume")},{id:"PriceDesc",display:o.a.lang("trade.history.PriceDesc")},{id:"Margin",display:o.a.lang("trade.history.MarginTotalDesc")},{id:"OperateDesc",display:o.a.lang("trade.history.TypeDesc_O")},{id:"DealPrice",display:o.a.lang("trade.history.tab5_t11")},{id:"ProfitCalc",display:o.a.lang("trade.history.tab5_t14")},{id:"Fee",display:o.a.lang("trade.history.FeeDesc")},{id:"CreatedAt",display:o.a.lang("trade.history.CreatedAt_O"),width:"12%"},{id:"Notes",display:o.a.lang("trade.history.Notes")}];var f=d.map(function(e){return e.id});u&&u.List&&u.List.length&&(p=u.List.map(function(e,t){var a={};for(var n in e)-1!=f.indexOf(n)&&(a[n]=e[n]);return a}))}var T=d.length;return l.a.createElement("div",{className:"okk-trade-contain"},l.a.createElement("div",{className:"contain pd-tb-50"},l.a.createElement("div",null,l.a.createElement("ul",{className:"personal-box-record-title head-li-pd0 f-clear"},P.k?l.a.createElement("li",null,l.a.createElement("span",{className:1==c?"active":"",onClick:function(){return e.onToggleTab(1)}},o.a.lang("HistoryLog.100")),l.a.createElement("span",{className:2==c?"active":"",onClick:function(){return e.onToggleTab(2)}},o.a.lang("HistoryLog.101"))):l.a.createElement("li",null,l.a.createElement("span",{style:{cursor:"default"}},o.a.lang("HistoryLog.100")))),l.a.createElement("div",{className:"trade-order-log"},l.a.createElement("div",{className:"account-log-box "},l.a.createElement("form",{onSubmit:this.handleSubmit.bind(t)},1==c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"pdl-20 pdr-5"},o.a.lang("Asset.106")),l.a.createElement("span",{className:"date-picket-box"},l.a.createElement("i",{className:"iconfont icon-date pdl-5 pos-a"}),l.a.createElement(h.a,{dateFormat:"YYYY-MM-DD",selected:n,locale:"zh-gb",minDate:y()().subtract(1,"year"),maxDate:y()(),onChange:this.startDateChange})),l.a.createElement("span",{className:"pd010"},"--"),l.a.createElement("span",null,l.a.createElement("span",{className:"date-picket-box"},l.a.createElement("i",{className:"iconfont icon-date pdl-5 pos-a"}),l.a.createElement(h.a,{dateFormat:"YYYY-MM-DD",locale:"zh-gb",selected:r,minDate:y()().subtract(1,"year"),maxDate:y()(),onChange:this.endDateChange}))),l.a.createElement("span",{className:"date-time-box"},l.a.createElement("span",{className:1==s?"current":"",onClick:function(){return e.changeDateType(1)}},o.a.lang("Asset.108")),l.a.createElement("span",{className:2==s?"current":"",onClick:function(){return e.changeDateType(2)}},o.a.lang("Asset.109")),l.a.createElement("span",{className:3==s?"current":"",onClick:function(){return e.changeDateType(3)}},o.a.lang("Asset.110"))),l.a.createElement("button",{className:"btn with-btn logBtn ml-50 date-picket-box-btn",type:"submit"},o.a.lang("Asset.111"))),l.a.createElement(D.a,{headers:d,rows:p,filename:(1==c?"Spot":"Fut")+"History"+y()().format("YYYYMMDD")},l.a.createElement("span",{className:"fr pdr-20 cursor"},o.a.lang("Asset.112"),l.a.createElement("i",{className:"iconfont icon-download"}))))),l.a.createElement("dl",{className:"log-title trade-new bg-26 f-clear"},d.map(function(e,t){return l.a.createElement("dd",{style:{width:e.hasOwnProperty("width")?e.width:100/T+"%"},key:c+"_"+t},e.display)})),1==c?l.a.createElement("div",{className:"log-contain bg-white log-list trade-new h-570"},i.hasOwnProperty("Total")&&0==i.Total&&l.a.createElement("p",{className:"mt-30 tc"},o.a.lang("bank.1_27")),i.hasOwnProperty("Total")&&i.Total>0&&p.map(function(e,t){return l.a.createElement("dl",{className:"f-clear",key:t},d.map(function(e,t){return l.a.createElement("dd",{style:{width:e.hasOwnProperty("width")?e.width:100/T+"%"},key:c+"1_"+t},v[e.id])}))}),i.hasOwnProperty("Total")&&i.Total>0&&l.a.createElement(w.a,{className:"mt-10",data:i,onChange:this.turnPage.bind(t)})):l.a.createElement("div",{className:"log-contain bg-white log-list trade-new2 h-570"},u.hasOwnProperty("Total")&&0==u.Total&&l.a.createElement("p",{className:"mt-30 tc"},o.a.lang("bank.1_27")),u.hasOwnProperty("Total")&&u.Total>0&&p.map(function(e,t){return l.a.createElement("dl",{className:"f-clear",key:t},d.map(function(t,a){return l.a.createElement("dd",{style:{width:t.hasOwnProperty("width")?t.width:100/T+"%"},key:c+"2_"+a},e[t.id])}))}),u.hasOwnProperty("Total")&&u.Total>0&&l.a.createElement(w.a,{className:"mt-10",data:u,onChange:this.turnPage.bind(t)}))))))}}]),t}(u.a);t.default=C},623:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(0),s=a.n(o),l=a(14),c=a.n(l),u=a(624),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"formatData",value:function(e,t){var a="\ufeff",n=[],r=[];return e.forEach(function(e){r.push(e.id)}),t.forEach(function(e){Object.keys(e).forEach(function(e){-1===r.indexOf(e)&&r.push(e)})}),e.length>0&&n.push(e.reduce(function(e,t){return e.push(t.display||t.id||" "),e},[])),n=n.concat(t.map(function(e){return r.map(function(t){return'"'+e[t]+'"'||""})})),n.forEach(function(e,n){var r=e.join(",");a+=n<t.length?r+"\n":r}),a}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.disabled,n=e.headers,r=e.filename,i=e.rows,o=e.className,l=e.style,c=this.formatData(n,i);return s.a.createElement(u.a,{className:o?o+(a?" disabled":""):a?"disabled":"",style:l,file:r+".csv",content:c},t)}}]),t}(o.Component);p.propTypes={children:c.a.object.isRequired,disabled:c.a.bool,headers:c.a.arrayOf(c.a.object),filename:c.a.string,rows:c.a.arrayOf(c.a.object).isRequired},t.a=p},624:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(0),s=a.n(o),l=a(14),c=a.n(l),u=a(125),d=a.n(u),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),y=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),p(t,[{key:"downloadFile",value:function(e,t){function a(e){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}!function(e,t){var n=window.URL||window.webkitURL||window,r=new Blob([t]);if("msSaveBlob"in navigator)navigator.msSaveBlob(r,e);else{if(!("download"in HTMLAnchorElement.prototype))throw new Error("Neither a[download] nor msSaveBlob is available");var i=document.createElementNS("http://www.w3.org/1999/xhtml","a");i.href=n.createObjectURL(r),i.download=e,a(i)}}(e,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.file,r=t.content,i=t.style,o=t.className,l={};if(a.hasOwnProperty("length"))return l.className=d()("react-download-container",o),l.style=i,l.onClick=function(){return e.downloadFile(n,r)},s.a.createElement("div",l,a);var c=s.a.Children.only(a);l.className=d()("react-download-container",o,c.props.className);var u={};return Object.assign(u,i||{},c.props.style||{}),l.style=u,l.onClick=function(){return e.downloadFile(n,r)},s.a.cloneElement(c,l)}}]),t}(o.Component);y.propTypes={file:c.a.string.isRequired,content:c.a.string.isRequired},t.a=y}});