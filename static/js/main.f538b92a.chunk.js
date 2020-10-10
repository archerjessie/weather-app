(this["webpackJsonpweather-forecaster-app"]=this["webpackJsonpweather-forecaster-app"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"Melbourne":2158177,"Sydney":2147714,"Brisbane":2174003,"Perth":2063523}')},,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),s=(a(17),a(1)),l=a.n(s),o=a(2),u=a(7),m=a(8),h=a(3),p=a(11),d=a(10),f=a(4),v="https://api.openweathermap.org/data/2.5/",y="f5643f5079967c1f0bede471b1ef7e27";function E(e){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"weather?id=").concat(f[t],"&units=metric&appid=").concat(y));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"group?id=").concat(Object.values(f).join(","),"&units=metric&appid=").concat(y));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"forecast?id=").concat(f[t],"&cnt=33&units=metric&appid=").concat(y));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,e.currentWeather.temperature,"\xb0C"),r.a.createElement("div",{className:"weather-main"},r.a.createElement("span",null,e.currentWeather.main)),r.a.createElement("div",{className:"row current-left-bottom justify-content-around"},r.a.createElement("div",{className:"col-6 humidity"},r.a.createElement("span",null,"Humidity"),r.a.createElement("br",null),r.a.createElement("span",null,e.currentWeather.humidity)),r.a.createElement("div",{className:"col-6 wind"},r.a.createElement("span",null,"WIND"),r.a.createElement("br",null),r.a.createElement("span",null,e.currentWeather.wind," K/M"))))},W=(a(19),function(e){return r.a.createElement("div",{className:"jr_current-weather ".concat(e.city.toLowerCase())},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 order-lg-last current-right"},r.a.createElement("span",null," ",e.city," ")),r.a.createElement("div",{className:"col-lg-6 order-lg-first current-left"},r.a.createElement(N,{currentWeather:e.currentWeather}))),r.a.createElement("div",{className:"bottom-strip"}))}),O=(a(20),a(9)),x=(a(21),function(e){return r.a.createElement("img",{className:"city-weather",src:"https://openweathermap.org/img/wn/"+e.weatherIcon+".png",alt:"weather picture"})}),C=function(e){return r.a.createElement("div",{onClick:function(){return e.onclick(e.city.name)},className:"row justify-content-space-around"},r.a.createElement("div",{className:"col-4"},e.city.name),r.a.createElement("div",{className:"col-2"},Math.round(e.city.temp),"\xb0C"),r.a.createElement("div",{className:"col-3"},r.a.createElement(x,{weatherIcon:e.city.icon})))},S=function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:"jr_other-cities"},r.a.createElement("div",{className:c?"":"d-none d-lg-block"},r.a.createElement("h4",null,"Other Cities"),r.a.createElement("ul",null,e.allCities.map((function(t){return r.a.createElement("li",{key:t.name},r.a.createElement(C,{city:t,onclick:e.onCitySelected}))})))),r.a.createElement("div",{className:"d-lg-none"},r.a.createElement("a",{onClick:function(){i(!c)},href:"#"},c?"hide other cities":"show other cities")))},I=function(e){return r.a.createElement("ul",null,r.a.createElement("li",null,e.weekday.day),r.a.createElement("li",null,Math.round(e.weekday.temp),"\xb0C"),r.a.createElement("li",null,r.a.createElement(x,{weatherIcon:e.weekday.icon})))},D=(a(22),function(e){return r.a.createElement("div",{className:"jr_forecast"},r.a.createElement("h3",null,"Forecast"),r.a.createElement("div",{className:"row justify-content-between"},e.weekdays.map((function(e){return r.a.createElement("div",{className:"col-2",key:e.day},r.a.createElement(I,{weekday:e}))}))))}),F=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onCitySelected=function(e){n.setState({city:e})},n.state={city:"Melbourne",currentWeather:{temperature:"",main:"",humidity:"",wind:""},allCities:[],forecast:[],intervalId:null},n.getWeather=n.getWeather.bind(Object(h.a)(n)),n.getWeatherGroup=n.getWeatherGroup.bind(Object(h.a)(n)),n.getForecast=n.getForecast.bind(Object(h.a)(n)),n}return Object(m.a)(a,[{key:"getWeather",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(this.state.city);case 2:t=e.sent,a={temperature:t.main.temp,main:t.weather[0].main,humidity:t.main.humidity,wind:t.wind.speed},this.setState({currentWeather:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getWeatherGroup",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,a=t.list.map((function(e){return{name:e.name,temp:e.main.temp,icon:e.weather[0].icon}})),this.setState({allCities:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getForecast",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(this.state.city);case 2:t=e.sent,a=t.list.filter((function(e,t){return t%8===0})).map((function(e){return{day:n.getWeekDay(e.dt),temp:e.main.temp,icon:e.weather[0].icon}})),this.setState({forecast:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getWeekDay",value:function(e){var t=new Date(1e3*e),a=[];return a[0]="SUN",a[1]="MON",a[2]="TUE",a[3]="WED",a[4]="THU",a[5]="FRI",a[6]="SAT",a[t.getDay()]}},{key:"componentDidMount",value:function(){var e=this;this.getWeather(),this.getWeatherGroup(),this.getForecast();var t=setInterval((function(){e.getWeather()}),6e4);this.setState({intervalId:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.city!==t.city&&(this.getWeather(),this.getForecast())}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"jr_container"},r.a.createElement("div",{className:"jr_card"},r.a.createElement(W,{city:this.state.city,currentWeather:this.state.currentWeather}),r.a.createElement("div",{className:"row jr_bottom"},r.a.createElement("div",{className:"col-lg-5 order-last order-lg-first"},r.a.createElement(S,{allCities:this.state.allCities.filter((function(t){return t.name!==e.state.city})),onCitySelected:this.onCitySelected})),r.a.createElement("div",{className:"col-lg-7 oder-first order-lg-last"},r.a.createElement(D,{weekdays:this.state.forecast})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.f538b92a.chunk.js.map