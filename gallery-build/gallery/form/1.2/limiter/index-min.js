KISSY.add("gallery/form/1.2/limiter/index",function(d,g,h){function c(a,b){b=d.merge({target:e(a)},b);c.superclass.constructor.call(this,b)}var e=g.all;d.mix(c,{tpl:{DEFAULT:'<span class="ks-letter-count">你还可以输入<em class="J_LetterRemain">{remain}</em>个汉字</span>'},event:{RENDER:"render",COUNT:"count"}});d.extend(c,h,{render:function(){var a=this,b=a.get("target");if(!b.length)return!1;a.set("tpl",a.get("defaultTpl"));a.count();b.on("keyup blur",function(){a.count()});a.fire(c.event.RENDER)},count:function(){var a=
this.get("len"),b=this.get("max"),d=this.get("defaultTpl"),f=this.get("exceedTpl");this.set("tpl",a>b&&f||d);this._create();this.fire(c.event.COUNT)},_create:function(){var a=this.get("wrapper"),b=this.get("target"),c=this.get("tpl"),f=this.get("max"),e=this.get("len");if(!b.length)return!1;b=d.substitute(c,{len:e,max:f,remain:Math.abs(f-e)});a.html(b)}},{ATTRS:{wrapper:{value:"",getter:function(a){return e(a)}},target:{value:""},el:{value:""},tpl:{value:""},defaultTpl:{value:'<span class="ks-letter-count">你还可以输入<em class="J_LetterRemain">{remain}</em>个汉字</span>'},
exceedTpl:{value:'<span class="ks-letter-count">已经超出<em class="J_LetterRemain exceed-letter">{remain}</em>个汉字</span>'},max:{value:50},len:{value:0,getter:function(){var a=this.get("target").val();this.get("isRejectTag")&&(a=a.replace(/<[^>]*>/g,""));return a.length}},isRejectTag:{value:!1}}});return c},{requires:["node","base"]});