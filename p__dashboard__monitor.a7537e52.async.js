(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1XEM":function(M,z,i){M.exports={tagCloud:"antd-pro-pages-dashboard-monitor-components-charts-tag-cloud-index-tagCloud"}},2:function(M,z){},CIdX:function(M,z,i){M.exports={waterWave:"antd-pro-pages-dashboard-monitor-components-charts-water-wave-index-waterWave",text:"antd-pro-pages-dashboard-monitor-components-charts-water-wave-index-text",waterWaveCanvasWrapper:"antd-pro-pages-dashboard-monitor-components-charts-water-wave-index-waterWaveCanvasWrapper"}},"H+7v":function(M,z,i){M.exports={activeChart:"antd-pro-pages-dashboard-monitor-components-active-chart-index-activeChart",activeChartGrid:"antd-pro-pages-dashboard-monitor-components-active-chart-index-activeChartGrid",activeChartLegend:"antd-pro-pages-dashboard-monitor-components-active-chart-index-activeChartLegend",dashedLine:"antd-pro-pages-dashboard-monitor-components-active-chart-index-dashedLine",line:"antd-pro-pages-dashboard-monitor-components-active-chart-index-line"}},Wnft:function(M,z,i){M.exports={mapChart:"antd-pro-pages-dashboard-monitor-style-mapChart",pieCard:"antd-pro-pages-dashboard-monitor-style-pieCard"}},a5Wf:function(M,z,i){"use strict";i.r(z);var ft=i("IzEo"),V=i("bx4M"),gt=i("14J3"),ne=i("BMrR"),yt=i("jCWc"),S=i("kPKH"),H=i("fWQN"),k=i("mtLc"),I=i("yKVA"),U=i("879j"),Et=i("aHsQ"),q=i("sGsY"),y=i("9kvl"),W=i("q1tI"),t=i.n(W),Le=i("FRQA"),Ne=i("ZhIB"),ve=i.n(Ne),v=i("yP6+"),me=i("0Owb");function fe(u){var s=u.style;s.height="100%";var l=parseInt("".concat(getComputedStyle(u).height),10),e=parseInt("".concat(getComputedStyle(u).paddingTop),10)+parseInt("".concat(getComputedStyle(u).paddingBottom),10);return l-e}function ge(u){if(!u)return 0;var s=u,l=fe(s),e=s.parentNode;return e&&(l=fe(e)),l}function Pe(){return function(u){var s=function(l){Object(I.a)(a,l);var e=Object(U.a)(a);function a(){var r;Object(H.a)(this,a);for(var n=arguments.length,d=new Array(n),c=0;c<n;c++)d[c]=arguments[c];return r=e.call.apply(e,[this].concat(d)),r.state={computedHeight:0},r.root=null,r.handleRoot=function(m){r.root=m},r}return Object(k.a)(a,[{key:"componentDidMount",value:function(){var n=this.props.height;if(!n&&this.root){var d=ge(this.root);this.setState({computedHeight:d}),d<1&&(d=ge(this.root),this.setState({computedHeight:d}))}}},{key:"render",value:function(){var n=this.props.height,d=this.state.computedHeight,c=n||d;return t.a.createElement("div",{ref:this.handleRoot},c>0&&t.a.createElement(u,Object(me.a)({},this.props,{height:c})))}}]),a}(t.a.Component);return s}}var _=Pe,ye=v.Guide.Arc,Re=v.Guide.Html,he=v.Guide.Line,Be=function(s){switch(s){case"2":return"\u5DEE";case"4":return"\u4E2D";case"6":return"\u826F";case"8":return"\u4F18";default:return""}};v.Shape.registerShape&&v.Shape.registerShape("point","pointer",{drawShape:function(s,l){var e=s.points[0];e=this.parsePoint(e);var a=this.parsePoint({x:0,y:0});return l.addShape("line",{attrs:{x1:a.x,y1:a.y,x2:e.x,y2:e.y,stroke:s.color,lineWidth:2,lineCap:"round"}}),l.addShape("circle",{attrs:{x:a.x,y:a.y,r:6,stroke:s.color,lineWidth:3,fill:"#fff"}})}});var Ge=function(s){var l=s.title,e=s.height,a=e===void 0?1:e,r=s.percent,n=s.forceFit,d=n===void 0?!0:n,c=s.formatter,m=c===void 0?Be:c,h=s.color,p=h===void 0?"#2F9CFF":h,o=s.bgColor,C=o===void 0?"#F0F2F5":o,A={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},f=[{value:r/10}],E=function(){return`
  <div style="width: 300px;text-align: center;font-size: 12px!important;">
    <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">`.concat(l,`</div>
    <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">
      `).concat((f[0].value*10).toFixed(2),`%
    </div>
  </div>`)},D={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return t.a.createElement(v.Chart,{height:a,data:f,scale:A,padding:[-16,0,16,0],forceFit:d},t.a.createElement(v.Coord,{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),t.a.createElement(v.Axis,{name:"1",line:void 0}),t.a.createElement(v.Axis,{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:m,textStyle:D}}),t.a.createElement(v.Guide,null,t.a.createElement(he,{start:[3,.905],end:[3,.85],lineStyle:{stroke:p,lineDash:void 0,lineWidth:2}}),t.a.createElement(he,{start:[5,.905],end:[5,.85],lineStyle:{stroke:p,lineDash:void 0,lineWidth:3}}),t.a.createElement(he,{start:[7,.905],end:[7,.85],lineStyle:{stroke:p,lineDash:void 0,lineWidth:3}}),t.a.createElement(ye,{start:[0,.965],end:[10,.965],style:{stroke:C,lineWidth:10}}),t.a.createElement(ye,{start:[0,.965],end:[f[0].value,.965],style:{stroke:p,lineWidth:10}}),t.a.createElement(Re,{position:["50%","95%"],html:E()})),t.a.createElement(v.Geom,{line:!1,type:"point",position:"value*1",shape:"pointer",color:p,active:!1}))},Ee=_()(Ge),Y=i("k1fw"),He=i("iz+Y"),xe=i.n(He),ke=function(s){var l=s.height,e=l===void 0?1:l,a=s.data,r=a===void 0?[]:a,n=s.forceFit,d=n===void 0?!0:n,c=s.color,m=c===void 0?"rgba(24, 144, 255, 0.2)":c,h=s.borderColor,p=h===void 0?"#1089ff":h,o=s.scale,C=o===void 0?{x:{},y:{}}:o,A=s.borderWidth,f=A===void 0?2:A,E=s.line,D=s.xAxis,g=s.yAxis,T=s.animate,x=T===void 0?!0:T,b=[36,5,30,5],F={x:Object(Y.a)({type:"cat",range:[0,1]},C.x),y:Object(Y.a)({min:0},C.y)},X=["x*y",function(Q,L){return{name:Q,value:L}}],$=e+54;return t.a.createElement("div",{className:xe.a.miniChart,style:{height:e}},t.a.createElement("div",{className:xe.a.chartContent},e>0&&t.a.createElement(v.Chart,{animate:x,scale:F,height:$,forceFit:d,data:r,padding:b},t.a.createElement(v.Axis,Object(me.a)({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},D)),t.a.createElement(v.Axis,Object(me.a)({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},g)),t.a.createElement(v.Tooltip,{showTitle:!1,crosshairs:!1}),t.a.createElement(v.Geom,{type:"area",position:"x*y",color:m,tooltip:X,shape:"smooth",style:{fillOpacity:1}}),E?t.a.createElement(v.Geom,{type:"line",position:"x*y",shape:"smooth",color:p,size:f,tooltip:!1}):t.a.createElement("span",{style:{display:"none"}}))))},Ce=_()(ke),xt=i("/zsF"),Ie=i("PArb"),be=i("jrin"),Me=i("cQSq"),Ue=i.n(Me),Je=i("9/5/"),Ae=i.n(Je),Qe=i("Jssm"),Ve=i.n(Qe),Ye=i("TSYQ"),Se=i.n(Ye),Xe=i("d9mD"),O=i.n(Xe),Ze=function(u){Object(I.a)(l,u);var s=Object(U.a)(l);function l(){var e;Object(H.a)(this,l);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),e.state={legendData:[],legendBlock:!1},e.chart=void 0,e.root=void 0,e.requestRef=0,e.resize=Ae()(function(){var d=e.props.hasLegend,c=e.state.legendBlock;if(!d||!e.root){window.removeEventListener("resize",e.resize);return}e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?c||e.setState({legendBlock:!0}):c&&e.setState({legendBlock:!1})},300),e.getG2Instance=function(d){e.chart=d,requestAnimationFrame(function(){e.getLegendData(),e.resize()})},e.getLegendData=function(){if(!!e.chart){var d=e.chart.getAllGeoms()[0];if(!!d){var c=d.get("dataArray")||[],m=c.map(function(h){var p=h[0]._origin;return p.color=h[0].color,p.checked=!0,p});e.setState({legendData:m})}}},e.handleRoot=function(d){e.root=d},e.handleLegendClick=function(d,c){var m=d;m.checked=!m.checked;var h=e.state.legendData;h[c]=m;var p=h.filter(function(o){return o.checked}).map(function(o){return o.x});e.chart&&e.chart.filter("x",function(o){return p.indexOf("".concat(o))>-1}),e.setState({legendData:h})},e}return Object(k.a)(l,[{key:"componentDidMount",value:function(){var a=this;window.addEventListener("resize",function(){a.requestRef=requestAnimationFrame(function(){return a.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.data;r!==a.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var a,r=this,n=this.props,d=n.valueFormat,c=n.subTitle,m=n.total,h=n.hasLegend,p=h===void 0?!1:h,o=n.className,C=n.style,A=n.height,f=A===void 0?0:A,E=n.forceFit,D=E===void 0?!0:E,g=n.percent,T=n.color,x=n.inner,b=x===void 0?.75:x,F=n.animate,X=F===void 0?!0:F,$=n.colors,Q=n.lineWidth,L=Q===void 0?1:Q,Z=this.state,ie=Z.legendData,se=Z.legendBlock,K=Se()(O.a.pie,o,(a={},Object(be.a)(a,O.a.hasLegend,!!p),Object(be.a)(a,O.a.legendBlock,se),a)),N=this.props,pe=N.data,le=N.selected,de=le===void 0?!0:le,P=N.tooltip,R=P===void 0?!0:P,B=pe||[],G=de,w=R,ce=$;B=B||[],G=G||!0,w=w||!0;var ee,te={x:{type:"cat",range:[0,1]},y:{min:0}};(g||g===0)&&(G=!1,w=!1,ee=function(ae){return ae==="\u5360\u6BD4"?T||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},B=[{x:"\u5360\u6BD4",y:parseFloat("".concat(g))},{x:"\u53CD\u6BD4",y:100-parseFloat("".concat(g))}]);var pt=["x*percent",function(j,ae){return{name:j,value:"".concat((ae*100).toFixed(2),"%")}}],vt=[12,0,12,0],$e=new Me.DataView;return $e.source(B).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),t.a.createElement("div",{ref:this.handleRoot,className:K,style:C},t.a.createElement(Ve.a,{maxFontSize:25},t.a.createElement("div",{className:O.a.chart},t.a.createElement(v.Chart,{scale:te,height:f,forceFit:D,data:$e,padding:vt,animate:X,onGetG2Instance:this.getG2Instance},!!w&&t.a.createElement(v.Tooltip,{showTitle:!1}),t.a.createElement(v.Coord,{type:"theta",innerRadius:b}),t.a.createElement(v.Geom,{style:{lineWidth:L,stroke:"#fff"},tooltip:w?pt:void 0,type:"intervalStack",position:"percent",color:["x",g||g===0?ee:ce],selected:G})),(c||m)&&t.a.createElement("div",{className:O.a.total},c&&t.a.createElement("h4",{className:"pie-sub-title"},c),m&&t.a.createElement("div",{className:"pie-stat"},typeof m=="function"?m():m)))),p&&t.a.createElement("ul",{className:O.a.legend},ie.map(function(j,ae){return t.a.createElement("li",{key:j.x,onClick:function(){return r.handleLegendClick(j,ae)}},t.a.createElement("span",{className:O.a.dot,style:{backgroundColor:j.checked?j.color:"#aaa"}}),t.a.createElement("span",{className:O.a.legendTitle},j.x),t.a.createElement(Ie.a,{type:"vertical"}),t.a.createElement("span",{className:O.a.percent},"".concat((Number.isNaN(j.percent)?0:j.percent*100).toFixed(2),"%")),t.a.createElement("span",{className:O.a.value},d?d(j.y):j.y))})))}}]),l}(W.Component),re=_()(Ze),We=i("tJVT"),Ke=i("1XEM"),qe=i.n(Ke),_e="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",et=function(u){Object(I.a)(l,u);var s=Object(U.a)(l);function l(){var e;Object(H.a)(this,l);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),e.state={dv:null,height:0,width:0},e.requestRef=0,e.isUnmount=!1,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame(function(){e.renderChart(e.props)})},e.saveRootRef=function(d){e.root=d},e.initTagCloud=function(){function d(c){return Object(Y.a)(Object(Y.a)({},c.style),{},{fillOpacity:c.opacity,fontSize:c.origin._origin.size,rotate:c.origin._origin.rotate,text:c.origin._origin.text,textAlign:"center",fontFamily:c.origin._origin.font,fill:c.color,textBaseline:"Alphabetic"})}v.Shape.registerShape("point","cloud",{drawShape:function(m,h){var p=d(m);return h.addShape("text",{attrs:Object(Y.a)(Object(Y.a)({},p),{},{x:m.x,y:m.y})})}})},e.renderChart=Ae()(function(d){var c=d||e.props,m=c.data,h=c.height;if(!(m.length<1||!e.root)){var p=h,o=e.root.offsetWidth,C=function(){var f=new Ue.a.View().source(m),E=f.range("value"),D=Object(We.a)(E,2),g=D[0],T=D[1];f.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[o,p],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(b){var F=Math.pow((b.value-g)/(T-g),2);return F*(17.5-5)+5}}),!e.isUnmount&&e.setState({dv:f,width:o,height:p})};e.imageMask?C():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=_e,e.imageMask.onload=C)}},200),e}return Object(k.a)(l,[{key:"componentDidMount",value:function(){var a=this;requestAnimationFrame(function(){a.initTagCloud(),a.renderChart(a.props)}),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.data;a&&JSON.stringify(a.data)!==JSON.stringify(r)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var a=this.props,r=a.className,n=a.height,d=this.state,c=d.dv,m=d.width,h=d.height;return t.a.createElement("div",{className:Se()(qe.a.tagCloud,r),style:{width:"100%",height:n},ref:this.saveRootRef},c&&t.a.createElement(v.Chart,{width:m,height:h,data:c,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},t.a.createElement(v.Tooltip,{showTitle:!1}),t.a.createElement(v.Coord,{reflect:"y"}),t.a.createElement(v.Geom,{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(o,C){return{name:o,value:C}}]})))}}]),l}(W.Component),Fe=_()(et),tt=i("CIdX"),ue=i.n(tt),at=function(u){Object(I.a)(l,u);var s=Object(U.a)(l);function l(){var e;Object(H.a)(this,l);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var d=e.props.height,c=d===void 0?1:d,m=e.root.parentNode,h=m.offsetWidth;e.setState({radio:h<c?h/c:1})}},e}return Object(k.a)(l,[{key:"componentDidMount",value:function(){var a=this;this.renderChart(),this.resize(),window.addEventListener("resize",function(){requestAnimationFrame(function(){return a.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.percent;a.percent!==r&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(a){var r=this,n=this.props,d=n.percent,c=n.color,m=c===void 0?"#1890FF":c,h=d/100;if(cancelAnimationFrame(this.timer),!(!this.node||h!==0&&!h)){var p=this.node,o=p.getContext("2d");if(!!o){var C=p.width,A=p.height,f=C/2,E=2,D=f-E;o.beginPath(),o.lineWidth=E*2;for(var g=C-E,T=g/8,x=.2,b=x,F=E,X=0,$=0,Q=.005,L=[],Z=f-E,ie=-(Math.PI/2),se=!0,K=ie;K<ie+2*Math.PI;K+=1/(8*Math.PI))L.push([f+Z*Math.cos(K),f+Z*Math.sin(K)]);var N=L.shift();o.strokeStyle=m,o.moveTo(N[0],N[1]);var pe=function(){if(!!o){o.beginPath(),o.save();for(var P=[],R=F;R<=F+g;R+=20/g){var B=X+(F+R)/T,G=Math.sin(B)*b,w=R,ce=2*D*(1-$)+(f-D)-T*G;o.lineTo(w,ce),P.push([w,ce])}var ee=P.shift();o.lineTo(F+g,A),o.lineTo(F,A),o.lineTo(ee[0],ee[1]);var te=o.createLinearGradient(0,0,0,A);te.addColorStop(0,"#ffffff"),te.addColorStop(1,m),o.fillStyle=te,o.fill(),o.restore()}},le=function de(){if(!!o){if(o.clearRect(0,0,C,A),se&&a!=="update")if(L.length){var P=L.shift();o.lineTo(P[0],P[1]),o.stroke()}else se=!1,o.lineTo(N[0],N[1]),o.stroke(),L=[],o.globalCompositeOperation="destination-over",o.beginPath(),o.lineWidth=E,o.arc(f,f,Z,0,2*Math.PI,!0),o.beginPath(),o.save(),o.arc(f,f,f-3*E,0,2*Math.PI,!0),o.restore(),o.clip(),o.fillStyle=m;else{if(h>=.85){if(b>x/4){var R=x*.01;b-=R}}else if(h<=.1){if(b<x*1.5){var B=x*.01;b+=B}}else{if(b<=x){var G=x*.01;b+=G}if(b>=x){var w=x*.01;b-=w}}h-$>0&&($+=Q),h-$<0&&($-=Q),X+=.07,pe()}r.timer=requestAnimationFrame(de)}};le()}}}},{key:"render",value:function(){var a=this,r=this.state.radio,n=this.props,d=n.percent,c=n.title,m=n.height,h=m===void 0?1:m;return t.a.createElement("div",{className:ue.a.waterWave,ref:function(o){return a.root=o},style:{transform:"scale(".concat(r,")")}},t.a.createElement("div",{style:{width:h,height:h,overflow:"hidden"}},t.a.createElement("canvas",{className:ue.a.waterWaveCanvasWrapper,ref:function(o){return a.node=o},width:h*2,height:h*2})),t.a.createElement("div",{className:ue.a.text,style:{width:h}},c&&t.a.createElement("span",null,c),t.a.createElement("h4",null,d,"%")))}}]),l}(W.Component),je=_()(at),nt=i("WmNS"),De=i.n(nt),rt=i("9og8"),oe=i("68d/"),ot=i("95SA"),it=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],Oe=function(u){Object(I.a)(l,u);var s=Object(U.a)(l);function l(){var e;Object(H.a)(this,l);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),e.state={data:null,grid:null,loading:!1},e}return Object(k.a)(l,[{key:"componentDidMount",value:function(){var e=Object(rt.a)(De.a.mark(function r(){var n,d,c,m;return De.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then(function(o){return o.json()}),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then(function(o){return o.json()})]);case 2:n=p.sent,d=Object(We.a)(n,2),c=d[0],m=d[1],this.setState({data:c,grid:m,loading:!0});case 7:case"end":return p.stop()}},r,this)}));function a(){return e.apply(this,arguments)}return a}()},{key:"render",value:function(){var a=this.state,r=a.data,n=a.grid,d=a.loading;return d===!1?W.createElement(ot.a,null):W.createElement(oe.b,{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"}},n&&W.createElement(oe.a,{key:"1",source:{data:n,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}}),r&&[W.createElement(oe.c,{key:"2",options:{autoFit:!0},source:{data:r},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:it},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}}),W.createElement(oe.c,{key:"5",source:{data:r},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(m){return m>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}})])}}]),l}(W.Component),Ct={Pie:re,WaterWave:je,Gauge:Ee,MiniArea:Ce,TagCloud:Fe,Map:Oe},we=i("oBTY"),st=i("H+7v"),J=i.n(st);function lt(u){return u*1<10?"0".concat(u):u}function ze(){for(var u=[],s=0;s<24;s+=1)u.push({x:"".concat(lt(s),":00"),y:Math.floor(Math.random()*200)+s*50});return u}var dt=function(u){Object(I.a)(l,u);var s=Object(U.a)(l);function l(){var e;Object(H.a)(this,l);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=s.call.apply(s,[this].concat(r)),e.state={activeData:ze()},e.timer=void 0,e.requestRef=void 0,e.loopData=function(){e.requestRef=requestAnimationFrame(function(){e.timer=window.setTimeout(function(){e.setState({activeData:ze()},function(){e.loopData()})},1e3)})},e}return Object(k.a)(l,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var a=this.state.activeData,r=a===void 0?[]:a;return t.a.createElement("div",{className:J.a.activeChart},t.a.createElement(q.a,{title:"\u76EE\u6807\u8BC4\u4F30",value:"\u6709\u671B\u8FBE\u5230\u9884\u671F"}),t.a.createElement("div",{style:{marginTop:32}},t.a.createElement(Ce,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:void 0,label:void 0,title:void 0,line:void 0},data:r})),r&&t.a.createElement("div",null,t.a.createElement("div",{className:J.a.activeChartGrid},t.a.createElement("p",null,Object(we.a)(r).sort()[r.length-1].y+200," \u4EBF\u5143"),t.a.createElement("p",null,Object(we.a)(r).sort()[Math.floor(r.length/2)].y," \u4EBF\u5143")),t.a.createElement("div",{className:J.a.dashedLine},t.a.createElement("div",{className:J.a.line})),t.a.createElement("div",{className:J.a.dashedLine},t.a.createElement("div",{className:J.a.line}))),r&&t.a.createElement("div",{className:J.a.activeChartLegend},t.a.createElement("span",null,"00:00"),t.a.createElement("span",null,r[Math.floor(r.length/2)].x),t.a.createElement("span",null,r[r.length-1].x)))}}]),l}(W.Component),ct=i("Wnft"),Te=i.n(ct),mt=q.a.Countdown,ht=Date.now()+1e3*60*60*24*2+1e3*30,ut=function(u){Object(I.a)(l,u);var s=Object(U.a)(l);function l(){return Object(H.a)(this,l),s.apply(this,arguments)}return Object(k.a)(l,[{key:"componentDidMount",value:function(){var a=this.props.dispatch;a({type:"dashboardAndmonitor/fetchTags"})}},{key:"render",value:function(){var a=this.props,r=a.dashboardAndmonitor,n=a.loading,d=r.tags;return t.a.createElement(Le.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement(ne.a,{gutter:24},t.a.createElement(S.a,{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},t.a.createElement(ne.a,null,t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",value:ve()(124543233).format("0,0")})),t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.sales-target",defaultMessage:"Sales target completion rate"}),value:"92%"})),t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(mt,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),value:ht,format:"HH:mm:ss:SSS"})),t.a.createElement(S.a,{md:6,sm:12,xs:24},t.a.createElement(q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",value:ve()(234).format("0,0")}))),t.a.createElement("div",{className:Te.a.mapChart},t.a.createElement(Oe,null)))),t.a.createElement(S.a,{xl:6,lg:24,md:24,sm:24,xs:24},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},t.a.createElement(dt,null)),t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},t.a.createElement(Ee,{title:Object(y.d)({id:"dashboardandmonitor.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),t.a.createElement(ne.a,{gutter:24},t.a.createElement(S.a,{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:Te.a.pieCard},t.a.createElement(ne.a,{style:{padding:"16px 0"}},t.a.createElement(S.a,{span:8},t.a.createElement(re,{animate:!1,percent:28,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),t.a.createElement(S.a,{span:8},t.a.createElement(re,{animate:!1,color:"#5DDECF",percent:22,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),t.a.createElement(S.a,{span:8},t.a.createElement(re,{animate:!1,color:"#2FC25B",percent:32,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),t.a.createElement(S.a,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:n,bordered:!1,bodyStyle:{overflow:"hidden"}},t.a.createElement(Fe,{data:d||[],height:161}))),t.a.createElement(S.a,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},t.a.createElement(je,{height:161,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34}))))))}}]),l}(W.Component),bt=z.default=Object(y.c)(function(u){var s=u.dashboardAndmonitor,l=u.loading;return{dashboardAndmonitor:s,loading:l.models.dashboardAndmonitor}})(ut)},d9mD:function(M,z,i){M.exports={pie:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-pie",chart:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-chart",hasLegend:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-hasLegend",legend:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-legend",dot:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-dot",line:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-line",legendTitle:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-legendTitle",percent:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-percent",value:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-value",title:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-title",total:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-total",legendBlock:"antd-pro-pages-dashboard-monitor-components-charts-pie-index-legendBlock"}},"iz+Y":function(M,z,i){M.exports={miniChart:"antd-pro-pages-dashboard-monitor-components-charts-index-miniChart",chartContent:"antd-pro-pages-dashboard-monitor-components-charts-index-chartContent",chartLoading:"antd-pro-pages-dashboard-monitor-components-charts-index-chartLoading"}}}]);
