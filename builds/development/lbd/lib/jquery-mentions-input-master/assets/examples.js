$(function(){$("textarea.mention").mentionsInput({onDataRequest:function(t,a,n){var e=[{id:1,name:"Kenneth Auchenberg",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:2,name:"Jon Froda",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:3,name:"Anders Pollas",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:4,name:"Kasper Hulthin",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:5,name:"Andreas Haugstrup",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:6,name:"Pete Lacey",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:7,name:"kenneth@auchenberg.dk",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:8,name:"Pete Awesome Lacey",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"},{id:9,name:"Kenneth Hulthin",avatar:"http://cdn0.4dots.com/i/customavatars/avatar7112_1.gif",type:"contact"}];e=_.filter(e,function(t){return t.name.toLowerCase().indexOf(a.toLowerCase())>-1}),n.call(this,e)},onCaret:!0}),$(".get-syntax-text").click(function(){$("textarea.mention").mentionsInput("val",function(t){alert(t)})}),$(".get-mentions").click(function(){$("textarea.mention").mentionsInput("getMentions",function(t){alert(JSON.stringify(t))})})});