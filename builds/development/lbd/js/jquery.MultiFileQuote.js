window.jQuery&&function(e){e.fn.MultiFile=function(t){if(0==this.length)return this;if("string"==typeof arguments[0]){if(this.length>1){var i=arguments;return this.each(function(){e.fn.MultiFile.apply(e(this),i)})}return e.fn.MultiFile[arguments[0]].apply(this,e.makeArray(arguments).slice(1)||[]),this}var t=e.extend({},e.fn.MultiFile.options,t||{});e("form").not("MultiFile-intercepted").addClass("MultiFile-intercepted").submit(e.fn.MultiFile.disableEmpty),e.fn.MultiFile.options.autoIntercept&&(e.fn.MultiFile.intercept(e.fn.MultiFile.options.autoIntercept),e.fn.MultiFile.options.autoIntercept=null),this.not(".MultiFile-applied").addClass("MultiFile-applied").each(function(){window.MultiFile=(window.MultiFile||0)+1;var i=window.MultiFile,a={e:this,E:e(this),clone:e(this).clone()};"number"==typeof t&&(t={max:t});var l=e.extend({},e.fn.MultiFile.options,t||{},(e.metadata?a.E.metadata():e.meta?a.E.data():null)||{},{});l.max>0||(l.max=a.E.attr("maxlength")),l.max>0||(l.max=(String(a.e.className.match(/\b(max|limit)\-([0-9]+)\b/gi)||[""]).match(/[0-9]+/gi)||[""])[0],l.max>0?l.max=String(l.max).match(/[0-9]+/gi)[0]:l.max=-1),l.max=new Number(l.max),l.accept=l.accept||a.E.attr("accept")||"",l.accept||(l.accept=a.e.className.match(/\b(accept\-[\w\|]+)\b/gi)||"",l.accept=new String(l.accept).replace(/^(accept|ext)\-/i,"")),e.extend(a,l||{}),a.STRING=e.extend({},e.fn.MultiFile.options.STRING,a.STRING),e.extend(a,{n:0,slaves:[],files:[],instanceKey:a.e.id||"MultiFile"+String(i),generateID:function(e){return a.instanceKey+(e>0?"_F"+String(e):"")},trigger:function(t,i){var l=a[t],n=e(i).attr("value");if(l){var r=l(i,n,a);if(null!=r)return r}return!0}}),String(a.accept).length>1&&(a.accept=a.accept.replace(/\W+/g,"|").replace(/^\W|\W$/g,""),a.rxAccept=new RegExp("\\.("+(a.accept?a.accept:"")+")$","gi")),a.wrapID=a.instanceKey+"_wrap",a.E.wrap('<div class="MultiFile-wrap" id="'+a.wrapID+'"></div>'),a.wrapper=e("#"+a.wrapID),a.e.name=a.e.name||"file"+i+"[]",a.list||(a.wrapper.append('<div class="MultiFile-list" id="'+a.wrapID+'_list"></div>'),a.list=e("#"+a.wrapID+"_list")),a.list=e(a.list),a.addSlave=function(t,l){a.n++,t.MultiFile=a,l>0&&(t.id=t.name=""),l>0&&(t.id=a.generateID(l)),t.name=String(a.namePattern.replace(/\$name/gi,e(a.clone).attr("name")).replace(/\$id/gi,e(a.clone).attr("id")).replace(/\$g/gi,i).replace(/\$i/gi,l)),a.max>0&&a.n-1>a.max&&(t.disabled=!0),a.current=a.slaves[l]=t,(t=e(t)).val("").attr("value","")[0].value="",t.addClass("MultiFile-applied"),t.change(function(){if(e(this).blur(),!a.trigger("onFileSelect",this,a))return!1;var i="",n=String(this.value||"");a.accept&&n&&!n.match(a.rxAccept)&&(i=a.STRING.denied.replace("$ext",String(n.match(/\.\w{1,4}$/gi))));for(var r in a.slaves)a.slaves[r]&&a.slaves[r]!=this&&a.slaves[r].value==n&&(i=a.STRING.duplicate.replace("$file",n.match(/[^\/\\]+$/gi)));var c=e(a.clone).clone();return c.addClass("MultiFile"),""!=i?(a.error(i),a.n--,a.addSlave(c[0],l),t.parent().prepend(c),t.remove(),!1):(e(this).css({position:"absolute",top:"-3000px"}),t.after(c),a.addToList(this,l),a.addSlave(c[0],l+1),!!a.trigger("afterFileSelect",this,a)&&void 0)}),e(t).data("MultiFile",a)},a.addToList=function(t,i){if(!a.trigger("onFileAppend",t,a))return!1;var l=e('<div class="MultiFile-label"></div>'),n=String(t.value||""),r=e('<span class="MultiFile-title span5" title="'+a.STRING.selected.replace("$file",n)+'">'+a.STRING.file.replace("$file",n.match(/[^\/\\]+$/gi)[0])+'</span> <input type="text" name="document_name[]" class="validate[required] span5" value="'+a.STRING.file.replace("$file",n.match(/[^\/\\]+(?=\.\w+$)/)[0])+'" />');return b=e('<a class="MultiFile-remove" href="#'+a.wrapID+'"><i class="splashy-error_x"></i></a>'),a.list.append(l.append(r," ",b)),b.click(function(){return!!a.trigger("onFileRemove",t,a)&&(a.n--,a.current.disabled=!1,a.slaves[i]=null,e(t).remove(),e(this).parent().remove(),e(a.current).css({position:"",top:""}),e(a.current).reset().val("").attr("value","")[0].value="",a.trigger("afterFileRemove",t,a),!1)}),!!a.trigger("afterFileAppend",t,a)&&void 0},a.MultiFile||a.addSlave(a.e,0),a.n++,a.E.data("MultiFile",a)})},e.extend(e.fn.MultiFile,{reset:function(){var t=e(this).data("MultiFile");return t&&t.list.find("a.MultiFile-remove").click(),e(this)},disableEmpty:function(t){t=("string"==typeof t?t:"")||"mfD";var i=[];return e("input:file.MultiFile").each(function(){""==e(this).val()&&(i[i.length]=this)}),e(i).each(function(){this.disabled=!0}).addClass(t)},reEnableEmpty:function(t){return t=("string"==typeof t?t:"")||"mfD",e("input:file."+t).removeClass(t).each(function(){this.disabled=!1})},intercepted:{},intercept:function(t,i,a){var l,n;if((a=a||[]).constructor.toString().indexOf("Array")<0&&(a=[a]),"function"==typeof t)return e.fn.MultiFile.disableEmpty(),n=t.apply(i||window,a),setTimeout(function(){e.fn.MultiFile.reEnableEmpty()},1e3),n;t.constructor.toString().indexOf("Array")<0&&(t=[t]);for(var r=0;r<t.length;r++)(l=t[r]+"")&&function(t){e.fn.MultiFile.intercepted[t]=e.fn[t]||function(){},e.fn[t]=function(){return e.fn.MultiFile.disableEmpty(),n=e.fn.MultiFile.intercepted[t].apply(this,arguments),setTimeout(function(){e.fn.MultiFile.reEnableEmpty()},1e3),n}}(l)}}),e.fn.MultiFile.options={accept:"doc|xls|zip|docx|xlsx|dot|html|pdf|jpg|png|xml|rar|ppt|pptx|csv|txt",max:-1,namePattern:"$name",STRING:{remove:"x",denied:"You cannot select a $ext file.\nTry again...",file:"$file",selected:"File selected: $file",duplicate:"This file has already been selected:\n$file"},autoIntercept:["submit","ajaxSubmit","ajaxForm","validate","valid"],error:function(e){alert(e)}},e.fn.reset=function(){return this.each(function(){try{this.reset()}catch(e){}})},e(function(){e("input[type=file].multi").MultiFile()})}(jQuery);