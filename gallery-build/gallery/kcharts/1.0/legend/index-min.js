KISSY.add("gallery/kcharts/1.0/legend/index",function(d,i,g,e){function f(a){this._cfg=d.mix({themeCls:"ks-charts-legend"},a,e,e,!0);this.init()}var h=d.all;d.augment(f,{init:function(){var a=this._cfg,c=a.chart,b=0;if(a.container&&(this.$ctn=h(a.container),!this.$ctn[0]))return;this._infos={};for(var e in c._datas.total)b+=1;d.mix(this._infos,{colors:c.color._colors.slice(0,b),series:c._cfg.series});this.render();this.bindEvt()},render:function(){this._html="<div class="+this._cfg.themeCls+"><ul>";
this.createHtmlIcon();this._html+="</ul></div>";this.$ctn.html(this._html)},createCanvasIcon:function(){},createHtmlIcon:function(){var a=this._cfg.chart,c=this._infos,b;for(b in a._datas.total)this._html+=g("<li class='clearfix'><div class='legend-icon' style='background-color:"+c.colors[b].DEFAULT+"''></div><div class='legend-text'>{{text}}</div></li>").render(c.series[b])},getHtml:function(){return this._html||""},destroy:function(){},bindEvt:function(){}});return f},{requires:["gallery/kcharts/1.0/tools/htmlpaper/index",
"gallery/template/1.0/index","./assets/legend.css"]});