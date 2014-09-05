Yogurt.Alert=CLASS({preset:function(){"use strict";return UUI.MODAL},params:function(){"use strict";return{wrapperStyle:{backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:function(t){return t>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,fontSize:20}}},init:function(t,o,e){"use strict";o.append(e),UANI.FADE_IN({node:o.getNode()})}}),Yogurt.BottomTap=CLASS({preset:function(){"use strict";return NODE},init:function(t){"use strict";var o=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor;t.setDom({style:{height:60,color:"#fff"},c:content=DIV({style:{position:"fixed",bottom:0,backgroundColor:o,height:60,width:"100%",textAlign:"center"}})})}}),Yogurt.Button=CLASS({preset:function(){"use strict";return UUI.BUTTON},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;return{style:{paddingTop:20,paddingBottom:20,color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,backgroundColor:"#fff"},spacing:5,on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Checkbox=CLASS({preset:function(){"use strict";return UUI.FULL_CHECKBOX},params:function(){"use strict";return{wrapperStyle:{padding:5}}}}),Yogurt.Confirm=CLASS({preset:function(){"use strict";return Yogurt.Alert},init:function(t,o,e,r){"use strict";o.append(DIV({style:{marginTop:20},c:[Yogurt.Button({style:{width:"47%",flt:"left"},c:"Yes",on:{tap:function(){r(),o.remove()}}}),Yogurt.Button({style:{width:"47%",flt:"right"},c:"No",on:{tap:function(){o.close()}}}),CLEAR_BOTH()]}))}}),Yogurt.Input=CLASS({preset:function(){"use strict";return UUI.FULL_INPUT},params:function(){"use strict";return{wrapperStyle:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.MenuLayout=CLASS(function(t){"use strict";var o,e;return t.menuWidth=o=200,t.hideMenuWinWidth=e=800,{preset:function(){return NODE},init:function(t,r,n){var i,u,f,d,s,l,a,c,g,p,S,m,E,C,I=n.toolbar,A=n.leftMenu,R=n.rightMenu,y=!0,h=!0,v=0;void 0!==A&&(v+=1),void 0!==R&&(v+=1),f=DIV({c:[void 0!==A?d=DIV({style:{position:"fixed",top:0,backgroundColor:"#222",width:o,height:"100%",overflowY:"scroll",onDisplayResize:function(t){return t>e?{left:0}:{left:-o}}},c:A}):"",void 0!==R?s=DIV({style:{position:"fixed",top:0,backgroundColor:"#222",width:o,height:"100%",overflowY:"scroll",onDisplayResize:function(t){return t>e?{right:0}:{right:-o}}},c:R}):"",I,l=DIV({style:{onDisplayResize:function(t){return t>e?{marginLeft:o,width:BODY.getWidth()-o*v}:{marginLeft:0,width:"100%"}}}})]}),t.setWrapperDom(f),t.setContentDom(l),r.showLeftMenu=g=function(){WIN_WIDTH()>e||y===!0&&i!==!0&&(ANIMATE({node:l,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:o}})},function(){i=!0}),ANIMATE({node:I.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:o}})}),ANIMATE({node:d,keyframes:KEYFRAMES({from:{left:-o},to:{left:0}})}),y=!1,a=EVENT({node:I,name:"touchstart"},function(){S()}),c=EVENT({node:l,name:"touchstart"},function(){S()}))},r.hideLeftMenu=p=function(){WIN_WIDTH()>e||y!==!0&&i===!0&&(ANIMATE({node:l,keyframes:KEYFRAMES({from:{marginLeft:o},to:{marginLeft:0}})},function(){y=!0}),ANIMATE({node:I.getContentDom(),keyframes:KEYFRAMES({from:{left:o},to:{left:0}})}),ANIMATE({node:d,keyframes:KEYFRAMES({from:{left:0},to:{left:-o}})}),i=!1,a.remove(),c.remove())},r.toggleLeftMenu=S=function(){WIN_WIDTH()>e||(y===!0&&i!==!0&&g(),y!==!0&&i===!0&&p())},r.showRightMenu=m=function(){WIN_WIDTH()>e||h===!0&&u!==!0&&(ANIMATE({node:l,keyframes:KEYFRAMES({from:{marginLeft:0},to:{marginLeft:-o}})},function(){u=!0}),ANIMATE({node:I.getContentDom(),keyframes:KEYFRAMES({from:{left:0},to:{left:-o}})}),ANIMATE({node:s,keyframes:KEYFRAMES({from:{right:-o},to:{right:0}})}),h=!1,a=EVENT({node:I,name:"touchstart"},function(){C()}),c=EVENT({node:l,name:"touchstart"},function(){C()}))},r.hideRightMenu=E=function(){WIN_WIDTH()>e||h!==!0&&u===!0&&(ANIMATE({node:l,keyframes:KEYFRAMES({from:{marginLeft:-o},to:{marginLeft:0}})},function(){h=!0}),ANIMATE({node:I.getContentDom(),keyframes:KEYFRAMES({from:{left:-o},to:{left:0}})}),ANIMATE({node:s,keyframes:KEYFRAMES({from:{right:0},to:{right:-o}})}),u=!1,a.remove(),c.remove())},r.toggleRightMenu=C=function(){WIN_WIDTH()>e||(h===!0&&u!==!0&&m(),h!==!0&&u===!0&&E())}}}}),Yogurt.Prompt=CLASS({preset:function(){"use strict";return Yogurt.Alert},init:function(t,o,e,r){"use strict";var n;o.append(FORM({c:[n=Yogurt.Input({style:{marginTop:10}}),Yogurt.Submit({style:{marginTop:20}})],on:{submit:function(){r(n.getValue()),o.remove()}}}))}}),Yogurt.Select=CLASS({preset:function(){"use strict";return UUI.FULL_SELECT},params:function(){"use strict";return{wrapperStyle:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666",borderLeft:"5px solid #666"}}}}),Yogurt.Submit=CLASS({preset:function(){"use strict";return UUI.FULL_SUBMIT},params:function(){"use strict";var t=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ButtonColor?"#333":BROWSER_CONFIG.Yogurt.ButtonColor;return{style:{display:"block",textAlign:"center",paddingTop:20,paddingBottom:20,cursor:"pointer",textDecoration:"none",color:t,fontSize:24,border:"1px solid "+t,borderRadius:5,touchCallout:"none",userSelect:"none",backgroundColor:"#fff",width:"100%"},on:{mouseover:function(o,e){e.addStyle({color:"#fff",backgroundColor:t})},mouseout:function(o,e){e.addStyle({color:t,backgroundColor:"#fff"})}}}}}),Yogurt.Textarea=CLASS({preset:function(){"use strict";return UUI.FULL_TEXTAREA},params:function(){"use strict";return{wrapperStyle:{padding:5,backgroundColor:"#FFF",position:"relative",border:"1px solid #666"}}}}),Yogurt.Toolbar=CLASS(function(){"use strict";var t=999,o=50;return{preset:function(){return NODE},init:function(e,r,n){var i,u,f,d,s=void 0===n?void 0:n.left,l=void 0===n?void 0:n.title,a=void 0===n?void 0:n.right,c=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarColor?"#333":BROWSER_CONFIG.Yogurt.ToolbarColor,g=void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.ToolbarTextColor?"#fff":BROWSER_CONFIG.Yogurt.ToolbarTextColor,p=void 0===n?void 0:n.wrapperStyle,S=void 0===n?void 0:n.contentStyle;i=DIV({style:{backgroundColor:c,height:o,color:g},c:u=DIV({style:{position:"fixed",top:0,backgroundColor:c,height:o,width:"100%",zIndex:t},c:[void 0===s?"":DIV({style:{position:"absolute",top:0,left:0},c:s}),H1({style:{paddingTop:13,fontSize:20,textAlign:"center",fontWeight:"bold"},c:void 0===l?"":l}),void 0===a?"":DIV({style:{position:"absolute",top:0,right:0},c:a})]})}),e.setWrapperDom(i),e.setContentDom(u),r.addWrapperStyle=f=function(t){i.addStyle(t)},void 0!==p&&f(p),r.addContentStyle=d=function(t){u.addStyle(t)},void 0!==S&&d(S)}}}),Yogurt.ToolbarButton=CLASS({preset:function(){"use strict";return NODE},init:function(t,o,e){"use strict";var r,n,i,u,f,d,s,l=e.img,a=e.title,c=e.href,g=e.target;r=A({style:{display:"block",padding:"16px 10px",cursor:"pointer",fontSize:16},href:c,target:g,c:[n=DIV({style:{flt:"left"},c:i=SPAN({c:void 0===a?"":a})}),CLEAR_BOTH()]}),void 0!==l&&(l.addStyle({flt:"left"}),void 0===l.getStyle("margin")&&void 0===l.getStyle("marginRight")&&l.addStyle({marginRight:5}),r.prepend(l),u=EVENT({node:l,name:"load"},function(){n.addStyle({marginTop:(l.getHeight()-n.getHeight())/2}),u.remove()})),t.setDom(r),o.setTitle=f=function(t){i.empty(),i.append(t)},o.getImg=d=function(){return l},o.tap=s=function(){EVENT.fireAll({node:o,name:"tap"})}}}),Yogurt.Wrapper=CLASS({preset:function(){"use strict";return NODE},init:function(t){"use strict";t.setDom(DIV({style:COMBINE([{backgroundColor:"#fff",color:"#000",fontSize:16},void 0===BROWSER_CONFIG.Yogurt||void 0===BROWSER_CONFIG.Yogurt.WrapperStyle?{}:BROWSER_CONFIG.Yogurt.WrapperStyle])}))}});