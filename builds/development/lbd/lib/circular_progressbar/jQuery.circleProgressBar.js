!function(t){t.fn.percentageLoader=function(e){this.each(function(){function r(t,e,r,a,o){i?a.animate({arc:[t,e,r]},900,">"):t&&t!=e?a.animate({arc:[t,e,r]},750,"elastic"):(t=e,a.animate({arc:[t,e,r]},750,"bounce",function(){a.attr({arc:[0,e,r]})}))}var a=t(this),o=t.extend({},t.fn.percentageLoader.defaultConfig,e),n=parseInt(a.children(o.valElement).text()),i=!0,l=parseInt(a.css("width")),c=parseInt(a.css("height")),s=l/2,f=c/2,h=s-o.strokeWidth/2,d=null,u=Raphael(this,l,c);u.customAttributes.arc=function(t,e,r){var a,o=360/e*t,n=(90-o)*Math.PI/180,i=s+r*Math.cos(n),l=f-r*Math.sin(n);return a=e==t?[["M",s,f-r],["A",r,r,0,1,1,s-.01,f-r]]:[["M",s,f-r],["A",r,r,0,+(o>180),1,i,l]],{path:a}},u.path().attr({arc:[100,100,h],"stroke-width":o.strokeWidth,stroke:o.bgColor}),n&&(d=u.path().attr({arc:[.01,100,h],"stroke-width":o.strokeWidth,stroke:o.ringColor,cursor:"pointer"}),r(n,100,h,d)),0==o.valstyl&&u.text(s,f,n+"%").attr({font:o.fontWeight+" "+o.fontSize+" Arial",fill:o.textColor}),1==o.valstyl&&u.text(s,f,o.cpercent+"/"+o.totlvolume).attr({font:o.fontWeight+" "+o.fontSize+" Arial",fill:o.textColor})})},t.fn.percentageLoader.defaultConfig={valElement:"p",valstyl:0,totlvolume:0,cpercent:0,strokeWidth:8,bgColor:"#d9d9d9",ringColor:"#d53f3f",textColor:"#9a9a9a",fontSize:"12px",fontWeight:"normal"}}(jQuery);