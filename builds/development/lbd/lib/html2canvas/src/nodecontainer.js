function NodeContainer(t,e){this.node=t,this.parent=e,this.stack=null,this.bounds=null,this.borders=null,this.clip=[],this.backgroundClip=[],this.offsetBounds=null,this.visible=null,this.computedStyles=null,this.colors={},this.styles={},this.backgroundImages=null,this.transformData=null,this.transformMatrix=null,this.isPseudoElement=!1,this.opacity=null}function selectionValue(t){var e=t.options[t.selectedIndex||0];return e?e.text||"":""}function parseMatrix(t){if(t&&"matrix"===t[1])return t[2].split(",").map(function(t){return parseFloat(t.trim())})}function isPercentage(t){return-1!==t.toString().indexOf("%")}function parseBackgrounds(t){var e,o,s,i,r,n,a,h=[],p=0,u=0,d=function(){e&&('"'===o.substr(0,1)&&(o=o.substr(1,o.length-2)),o&&a.push(o),"-"===e.substr(0,1)&&(i=e.indexOf("-",1)+1)>0&&(s=e.substr(0,i),e=e.substr(i)),h.push({prefix:s,method:e.toLowerCase(),value:r,args:a,image:null})),a=[],e=s=o=r=""};return a=[],e=s=o=r="",t.split("").forEach(function(t){if(!(0===p&&" \r\n\t".indexOf(t)>-1)){switch(t){case'"':n?n===t&&(n=null):n=t;break;case"(":if(n)break;if(0===p)return p=1,void(r+=t);u++;break;case")":if(n)break;if(1===p){if(0===u)return p=0,r+=t,void d();u--}break;case",":if(n)break;if(0===p)return void d();if(1===p&&0===u&&!e.match(/^url$/i))return a.push(o),o="",void(r+=t)}r+=t,0===p?e+=t:o+=t}}),d(),h}function removePx(t){return t.replace("px","")}function asFloat(t){return parseFloat(t)}function getBounds(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect(),o=null==t.offsetWidth?e.width:t.offsetWidth;return{top:e.top,bottom:e.bottom||e.top+e.height,right:e.left+o,left:e.left,width:o,height:null==t.offsetHeight?e.height:t.offsetHeight}}return{}}function offsetBounds(t){var e=t.offsetParent?offsetBounds(t.offsetParent):{top:0,left:0};return{top:t.offsetTop+e.top,bottom:t.offsetTop+t.offsetHeight+e.top,right:t.offsetLeft+e.left+t.offsetWidth,left:t.offsetLeft+e.left,width:t.offsetWidth,height:t.offsetHeight}}NodeContainer.prototype.cloneTo=function(t){t.visible=this.visible,t.borders=this.borders,t.bounds=this.bounds,t.clip=this.clip,t.backgroundClip=this.backgroundClip,t.computedStyles=this.computedStyles,t.styles=this.styles,t.backgroundImages=this.backgroundImages,t.opacity=this.opacity},NodeContainer.prototype.getOpacity=function(){return null===this.opacity?this.opacity=this.cssFloat("opacity"):this.opacity},NodeContainer.prototype.assignStack=function(t){this.stack=t,t.children.push(this)},NodeContainer.prototype.isElementVisible=function(){return this.node.nodeType===Node.TEXT_NODE?this.parent.visible:"none"!==this.css("display")&&"hidden"!==this.css("visibility")&&!this.node.hasAttribute("data-html2canvas-ignore")&&("INPUT"!==this.node.nodeName||"hidden"!==this.node.getAttribute("type"))},NodeContainer.prototype.css=function(t){return this.computedStyles||(this.computedStyles=this.isPseudoElement?this.parent.computedStyle(this.before?":before":":after"):this.computedStyle(null)),this.styles[t]||(this.styles[t]=this.computedStyles[t])},NodeContainer.prototype.prefixedCss=function(t){var e=["webkit","moz","ms","o"],o=this.css(t);return void 0===o&&e.some(function(e){return void 0!==(o=this.css(e+t.substr(0,1).toUpperCase()+t.substr(1)))},this),void 0===o?null:o},NodeContainer.prototype.computedStyle=function(t){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,t)},NodeContainer.prototype.cssInt=function(t){var e=parseInt(this.css(t),10);return isNaN(e)?0:e},NodeContainer.prototype.color=function(t){return this.colors[t]||(this.colors[t]=new Color(this.css(t)))},NodeContainer.prototype.cssFloat=function(t){var e=parseFloat(this.css(t));return isNaN(e)?0:e},NodeContainer.prototype.fontWeight=function(){var t=this.css("fontWeight");switch(parseInt(t,10)){case 401:t="bold";break;case 400:t="normal"}return t},NodeContainer.prototype.parseClip=function(){var t=this.css("clip").match(this.CLIP);return t?{top:parseInt(t[1],10),right:parseInt(t[2],10),bottom:parseInt(t[3],10),left:parseInt(t[4],10)}:null},NodeContainer.prototype.parseBackgroundImages=function(){return this.backgroundImages||(this.backgroundImages=parseBackgrounds(this.css("backgroundImage")))},NodeContainer.prototype.cssList=function(t,e){var o=(this.css(t)||"").split(",");return o=o[e||0]||o[0]||"auto",1===(o=o.trim().split(" ")).length&&(o=[o[0],o[0]]),o},NodeContainer.prototype.parseBackgroundSize=function(t,e,o){var s,i,r=this.cssList("backgroundSize",o);if(isPercentage(r[0]))s=t.width*parseFloat(r[0])/100;else{if(/contain|cover/.test(r[0])){var n=t.width/t.height,a=e.width/e.height;return n<a^"contain"===r[0]?{width:t.height*a,height:t.height}:{width:t.width,height:t.width/a}}s=parseInt(r[0],10)}return i="auto"===r[0]&&"auto"===r[1]?e.height:"auto"===r[1]?s/e.width*e.height:isPercentage(r[1])?t.height*parseFloat(r[1])/100:parseInt(r[1],10),"auto"===r[0]&&(s=i/e.height*e.width),{width:s,height:i}},NodeContainer.prototype.parseBackgroundPosition=function(t,e,o,s){var i,r,n=this.cssList("backgroundPosition",o);return i=isPercentage(n[0])?(t.width-(s||e).width)*(parseFloat(n[0])/100):parseInt(n[0],10),r="auto"===n[1]?i/e.width*e.height:isPercentage(n[1])?(t.height-(s||e).height)*parseFloat(n[1])/100:parseInt(n[1],10),"auto"===n[0]&&(i=r/e.height*e.width),{left:i,top:r}},NodeContainer.prototype.parseBackgroundRepeat=function(t){return this.cssList("backgroundRepeat",t)[0]},NodeContainer.prototype.parseTextShadows=function(){var t=this.css("textShadow"),e=[];if(t&&"none"!==t)for(var o=t.match(this.TEXT_SHADOW_PROPERTY),s=0;o&&s<o.length;s++){var i=o[s].match(this.TEXT_SHADOW_VALUES);e.push({color:new Color(i[0]),offsetX:i[1]?parseFloat(i[1].replace("px","")):0,offsetY:i[2]?parseFloat(i[2].replace("px","")):0,blur:i[3]?i[3].replace("px",""):0})}return e},NodeContainer.prototype.parseTransform=function(){if(!this.transformData)if(this.hasTransform()){var t=this.parseBounds(),e=this.prefixedCss("transformOrigin").split(" ").map(removePx).map(asFloat);e[0]+=t.left,e[1]+=t.top,this.transformData={origin:e,matrix:this.parseTransformMatrix()}}else this.transformData={origin:[0,0],matrix:[1,0,0,1,0,0]};return this.transformData},NodeContainer.prototype.parseTransformMatrix=function(){if(!this.transformMatrix){var t=this.prefixedCss("transform"),e=t?parseMatrix(t.match(this.MATRIX_PROPERTY)):null;this.transformMatrix=e||[1,0,0,1,0,0]}return this.transformMatrix},NodeContainer.prototype.parseBounds=function(){return this.bounds||(this.bounds=this.hasTransform()?offsetBounds(this.node):getBounds(this.node))},NodeContainer.prototype.hasTransform=function(){return"1,0,0,1,0,0"!==this.parseTransformMatrix().join(",")||this.parent&&this.parent.hasTransform()},NodeContainer.prototype.getValue=function(){var t=this.node.value||"";return"SELECT"===this.node.tagName?t=selectionValue(this.node):"password"===this.node.type&&(t=Array(t.length+1).join("•")),0===t.length?this.node.placeholder||"":t},NodeContainer.prototype.MATRIX_PROPERTY=/(matrix)\((.+)\)/,NodeContainer.prototype.TEXT_SHADOW_PROPERTY=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,NodeContainer.prototype.TEXT_SHADOW_VALUES=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,NodeContainer.prototype.CLIP=/^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;