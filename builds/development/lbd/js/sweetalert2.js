!function(e,t){"use strict";function n(){if(void 0===arguments[0])return e.console.error("sweetAlert expects at least 1 attribute!"),!1;var n=a({},y);switch(typeof arguments[0]){case"string":n.title=arguments[0],n.text=arguments[1]||"",n.type=arguments[2]||"";break;case"object":n.title=arguments[0].title||y.title,n.text=arguments[0].text||y.text,n.html=arguments[0].html||y.html,n.type=arguments[0].type||y.type,n.animation=void 0!==arguments[0].animation?arguments[0].animation:y.animation,n.customClass=arguments[0].customClass||n.customClass,n.allowOutsideClick=void 0!==arguments[0].allowOutsideClick?arguments[0].allowOutsideClick:y.allowOutsideClick,n.allowEscapeKey=void 0!==arguments[0].allowEscapeKey?arguments[0].allowEscapeKey:y.allowEscapeKey,n.showConfirmButton=void 0!==arguments[0].showConfirmButton?arguments[0].showConfirmButton:y.showConfirmButton,n.showCancelButton=void 0!==arguments[0].showCancelButton?arguments[0].showCancelButton:y.showCancelButton,n.closeOnConfirm=void 0!==arguments[0].closeOnConfirm?arguments[0].closeOnConfirm:y.closeOnConfirm,n.closeOnCancel=void 0!==arguments[0].closeOnCancel?arguments[0].closeOnCancel:y.closeOnCancel,n.timer=parseInt(arguments[0].timer)||y.timer,n.width=parseInt(arguments[0].width)||y.width,n.padding=parseInt(arguments[0].padding)||y.padding,n.background=void 0!==arguments[0].background?arguments[0].background:y.background,n.confirmButtonText=arguments[0].confirmButtonText||y.confirmButtonText,n.confirmButtonColor=arguments[0].confirmButtonColor||y.confirmButtonColor,n.confirmButtonClass=arguments[0].confirmButtonClass||n.confirmButtonClass,n.cancelButtonText=arguments[0].cancelButtonText||y.cancelButtonText,n.cancelButtonColor=arguments[0].cancelButtonColor||y.cancelButtonColor,n.cancelButtonClass=arguments[0].cancelButtonClass||n.cancelButtonClass,n.imageUrl=arguments[0].imageUrl||y.imageUrl,n.imageSize=arguments[0].imageSize||y.imageSize,n.callback=arguments[1]||null,e.sweetAlert.callback=e.swal.callback=function(e){"function"==typeof n.callback&&n.callback(e)};break;default:return e.console.error('Unexpected type of argument! Expected "string" or "object", got '+typeof arguments[0]),!1}o(n),r(),i();var s=v();n.timer&&(s.timeout=setTimeout(function(){c(),"function"==typeof n.callback&&n.callback()},n.timer));var m,p=function(t){var o=t||e.event,a=o.target||o.srcElement,l=b(a,"confirm"),i=(b(a,"cancel"),b(s,"visible"));switch(o.type){case"mouseover":case"mouseup":case"focus":break;case"mouseout":case"blur":case"mousedown":break;case"click":if(l&&n.callback&&i)n.callback(!0),n.closeOnConfirm&&c();else if(n.callback&&i){var r=String(n.callback).replace(/\s/g,"");"function("===r.substring(0,9)&&")"!==r.substring(9,10)&&n.callback(!1),n.closeOnCancel&&c()}else c()}},g=s.querySelectorAll("button");for(m=0;m<g.length;m++)g[m].onclick=p,g[m].onmouseover=p,g[m].onmouseout=p,g[m].onmousedown=p;u=t.onclick,t.onclick=function(t){var o=t||e.event;(o.target||o.srcElement)===w()&&n.allowOutsideClick&&c()};var h=s.querySelector("button.confirm"),C=s.querySelector("button.cancel"),k=s.querySelectorAll("button, input:not([type=hidden]), textarea");for(m=0;m<k.length;m++)k[m].addEventListener("focus",p,!0),k[m].addEventListener("blur",p,!0);d=e.onkeydown,e.onkeydown=function(t){var o=t||e.event,a=o.keyCode||o.which;if(-1!==[9,13,32,27].indexOf(a)){for(var i=o.target||o.srcElement,c=-1,r=0;r<k.length;r++)if(i===k[r]){c=r;break}9===a?(i=-1===c?h:o.shiftKey?0===c?k[k.length-1]:k[c-1]:c===k.length-1?k[0]:k[c+1],L(o),l(i)):13===a||32===a?-1===c&&O(h,o):27===a&&!0===n.allowEscapeKey&&O(C,o)}},e.swal.toggleLoading=function(){h.disabled=!h.disabled,C.disabled=!C.disabled},e.swal.enableButtons=function(){h.disabled=!1,C.disabled=!1},e.swal.disableButtons=function(){h.disabled=!0,C.disabled=!0},swal.enableButtons(),e.onfocus=function(){e.setTimeout(function(){void 0!==f&&(f.focus(),f=void 0)},0)}}function o(n){var o=v();o.style.width=n.width+"px",o.style.padding=n.padding+"px",o.style.marginLeft=-n.width/2+"px",o.style.background=n.background;var a=t.getElementsByTagName("head")[0],l=t.createElement("style");l.type="text/css",l.id=m,l.innerHTML="@media screen and (max-width: "+n.width+"px) {.sweet-alert {max-width: 100%;left: 0 !important;margin-left: 0 !important;}}",a.appendChild(l);var i=o.querySelector("h2"),c=o.querySelector("p"),r=o.querySelector("button.cancel"),s=o.querySelector("button.confirm"),u=o.querySelector("hr");if(i.innerHTML=C(n.title).split("\n").join("<br>"),c.innerHTML=C(n.text.split("\n").join("<br>"))||n.html,c.innerHTML&&B(c),n.customClass&&g(o,n.customClass),S(o.querySelectorAll(".icon")),n.type){for(var d=!1,f=0;f<p.length;f++)if(n.type===p[f]){d=!0;break}if(!d)return e.console.error("Unknown alert type: "+n.type),!1;var y=o.querySelector(".icon."+n.type);switch(B(y),n.type){case"success":g(y,"animate"),g(y.querySelector(".tip"),"animate-success-tip"),g(y.querySelector(".long"),"animate-success-long");break;case"error":g(y,"animate-error-icon"),g(y.querySelector(".x-mark"),"animate-x-mark");break;case"warning":g(y,"pulse-warning"),g(y.querySelector(".body"),"pulse-warning-ins"),g(y.querySelector(".dot"),"pulse-warning-ins")}}if(n.imageUrl){var w=o.querySelector(".icon.custom");if(w.style.backgroundImage="url("+n.imageUrl+")",B(w),n.imageSize){var b=n.imageSize.match(/(\d+)x(\d+)/);b?w.setAttribute("style",w.getAttribute("style")+"width:"+b[1]+"px; height:"+b[2]+"px"):e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+n.imageSize)}}n.showCancelButton?r.style.display="inline-block":S(r),n.showConfirmButton?s.style.display="inline-block":S(s),n.showConfirmButton||n.showCancelButton||S(u),s.innerHTML=C(n.confirmButtonText),r.innerHTML=C(n.cancelButtonText),n.confirmButtonClass||(s.style.backgroundColor=n.confirmButtonColor),n.cancelButtonClass||(r.style.backgroundColor=n.cancelButtonColor),g(s,n.confirmButtonClass),g(r,n.cancelButtonClass),!0===n.animation?h(o,"no-animation"):g(o,"no-animation")}function a(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function l(e){e.focus()}function i(){var e=v();T(w(),10),B(e),g(e,"show-sweet-alert"),h(e,"hide-sweet-alert"),s=t.activeElement,setTimeout(function(){g(e,"visible")},500)}function c(){var n=v();q(w(),5),q(n,5),h(n,"showSweetAlert"),g(n,"hideSweetAlert"),h(n,"visible");var o=n.querySelector(".icon.success");h(o,"animate"),h(o.querySelector(".tip"),"animate-success-tip"),h(o.querySelector(".long"),"animate-success-long");var a=n.querySelector(".icon.error");h(a,"animate-error-icon"),h(a.querySelector(".x-mark"),"animate-x-mark");var l=n.querySelector(".icon.warning");h(l,"pulse-warning"),h(l.querySelector(".body"),"pulse-warning-ins"),h(l.querySelector(".dot"),"pulse-warning-ins"),e.onkeydown=d,t.onclick=u,s&&s.focus(),f=void 0,clearTimeout(n.timeout);var i=t.getElementsByTagName("head")[0],c=t.getElementById(m);i.removeChild(c)}function r(){v().style.marginTop=E(v())}var s,u,d,f,m="sweet-alert-mediaquery",p=["error","warning","info","success"],y={title:"",text:"",html:"",type:null,animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#3085d6",confirmButtonClass:"btn btn-primary btn-fill",cancelButtonText:"Cancel",cancelButtonColor:"#aaa",cancelButtonClass:"btn btn-default",imageUrl:null,imageSize:null,timer:null,width:500,padding:20,background:"#fff"},v=function(){return t.querySelector(".sweet-alert")},w=function(){return t.querySelector(".sweet-overlay")},b=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},g=function(e,t){t&&!b(e,t)&&(e.className+=" "+t)},h=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(b(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},C=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},k=function(e){e.style.opacity="",e.style.display="block"},B=function(e){if(e&&!e.length)return k(e);for(var t=0;t<e.length;++t)k(e[t])},x=function(e){e.style.opacity="",e.style.display="none"},S=function(e){if(e&&!e.length)return x(e);if(null!=e)for(var t=0;t<e.length;++t)x(e[t])},E=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt(n/2+t)+"px"},T=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)};o()}e.style.display="block"},q=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"};o()},O=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},L=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};e.sweetAlert=e.swal=function(){var e=arguments;if(null!==v())n.apply(this,e);else var t=setInterval(function(){null!==v()&&(clearInterval(t),n.apply(this,e))},100)},e.sweetAlert.closeModal=e.swal.closeModal=function(){c()},e.swal.init=function(){var e=t.createElement("div");e.innerHTML='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><hr><button class="confirm">OK</button><button class="cancel">Cancel</button></div>',t.body.appendChild(e)},e.swal.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");a(y,e)},"complete"===t.readyState||"interactive"===t.readyState&&t.body?swal.init():t.addEventListener?t.addEventListener("DOMContentLoaded",function e(){t.removeEventListener("DOMContentLoaded",e,!1),swal.init()},!1):t.attachEvent&&t.attachEvent("onreadystatechange",function e(){"complete"===t.readyState&&(t.detachEvent("onreadystatechange",e),swal.init())})}(window,document);