"use strict";var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,a=require("perfect-freehand"),o=require("./utils.js"),r=require("./line.js"),c=require("vue");require("./perfect-signature.vue_vue_type_style_index_0_scoped_true_lang.js");const d={name:"VuePerfectSignature",props:{drawOptions:{type:Object,default:()=>{}}},computed:{options(){return((e,a)=>{for(var o in a||(a={}))n.call(a,o)&&s(e,o,a[o]);if(t)for(var o of t(a))i.call(a,o)&&s(e,o,a[o]);return e})({size:32,thinning:.5,smoothing:.5,streamline:.5},this.drawOptions)},pathData(){const e=a.getStroke(points,this.options);return o.getSvgPathFromStroke(e)}},created(){this.line=new r,this.handleCvsRsize=o.debounce((()=>{if(!this.$refs)return;const e=this.$refs.signatureBox,{innerWidth:t,innerHeight:n}=window;let i=`height:${t}px;width:${n}px;`;[-90,90].includes(window.orientation)?i=`height:${n}px;width:${t}px;`:i+=`transform:rotate(90deg) translateX(-${t}px);`,e.style=i;const s=this.$refs.canvasRef,{height:a,width:o}=this.$refs.topBar.getBoundingClientRect(),{height:r,width:c}=this.$refs.bottomBar.getBoundingClientRect();[-90,90].includes(window.orientation)?(s.width=t,s.height=n-a-r):(s.height=t-o-c,s.width=n);const d=this.$refs.canvasWrapperRef;this.cvsRect=d.getBoundingClientRect()}))},mounted(){document.body.classList.add("of-hidden"),this.initCtx(),window.addEventListener("resize",this.handleCvsRsize),window.addEventListener("orientationchange",this.handleOrientationChange)},unmounted(){document.body.classList.remove("of-hidden"),window.removeEventListener("resize",this.handleCvsRsize),window.removeEventListener("orientationchange",this.handleOrientationChange)},methods:{handlePointStarts(e){e.stopPropagation();const t=e.targetTouches[0];let n=t.clientX-this.cvsRect.left,i=t.clientY-this.cvsRect.top;[-90,90].includes(window.orientation)||(n=t.clientY-this.cvsRect.top,i=this.cvsRect.right-t.clientX);const s={points:[{time:(new Date).getTime(),x:n,y:i,dis:0}]};this.line.pushLine(s),this.drawerLine()},drawerLine(){const e=a.getStroke(this.line.getLatestPoints),t=o.getSvgPathFromStroke(e);if(this.line.getLatestPoints.length>2){const e=new Path2D(t);this.canvasCtx.fill(e)}},handlePointMoves(e){e.stopPropagation(),e.preventDefault();const t=e.targetTouches[0];let n=t.clientX-this.cvsRect.left,i=t.clientY-this.cvsRect.top;[-90,90].includes(window.orientation)||(n=t.clientY-this.cvsRect.top,i=this.cvsRect.right-t.clientX),this.line.lastPoint=this.line.currentPoint,this.line.pushLatestPoint({time:(new Date).getTime(),x:n,y:i}),this.drawerLine()},handlePointEnd(e){this.canvasCtx.closePath()},handleClear(){const e=this.$refs.canvasRef;this.canvasCtx.clearRect(0,0,e.width,e.height)},handleSave(){const e=this.$refs.canvasRef.toDataURL("image/png");this.$emit("save",{base64:e})},initCtx(){this.handleCvsRsize();const e=this.$refs.canvasRef;this.canvasCtx=e.getContext("2d")},handleBack(){this.$emit("close",!0)},handlePointerDown(e){e.target.setPointerCapture(e.pointerId),setPoints([[e.pageX,e.pageY,e.pressure]]);const t={points:[{time:(new Date).getTime(),x:e.pageX,y:e.pageY,pressure:e.pressure,dis:0}]};this.line.pushLine(t),this.drawerLine()},handlePointerMove(e){this.line.lastPoint=this.line.currentPoint,this.line.pushLatestPoint({time:(new Date).getTime(),x:e.pageX,y:e.pageY,pressure:e.pressure}),this.drawerLine()},stopMoves(e){e.stopPropagation(),e.preventDefault()},handleOrientationChange(){this.initCtx()}}},l=c.withScopeId("data-v-41d66205");c.pushScopeId("data-v-41d66205");const h={class:"signature-box",ref:"signatureBox"},p=c.createVNode("span",{class:"icon"},null,-1),v=c.createVNode("div",{class:"title"},"Handwritten signature",-1),u=c.createVNode("div",null,null,-1),g={class:"canvas-wrapper",ref:"canvasWrapperRef"},w={class:"bar-left"},f=c.createVNode("div",{class:"gap-line"},null,-1),m=c.createVNode("i",null,null,-1),P=c.createTextVNode("Save");c.popScopeId();const b=l(((e,t,n,i,s,a)=>(c.openBlock(),c.createBlock("div",h,[c.createVNode("div",{class:"top-bar",ref:"topBar",onTouchmove:t[2]||(t[2]=(...e)=>a.stopMoves&&a.stopMoves(...e))},[c.renderSlot(e.$slots,"topBar",{},(()=>[c.createVNode("div",{class:"back",onClick:t[1]||(t[1]=(...e)=>a.handleBack&&a.handleBack(...e))},[p]),v,u]))],544),c.createVNode("div",g,[c.createVNode("canvas",{class:"canvas","disable-scroll":"true",ref:"canvasRef",onTouchstart:t[3]||(t[3]=(...e)=>a.handlePointStarts&&a.handlePointStarts(...e)),onTouchmove:t[4]||(t[4]=(...e)=>a.handlePointMoves&&a.handlePointMoves(...e)),onTouchend:t[5]||(t[5]=(...e)=>a.handlePointEnd&&a.handlePointEnd(...e))},null,544)],512),c.createVNode("div",{class:"bottom-bar",ref:"bottomBar",onTouchmove:t[9]||(t[9]=(...e)=>a.stopMoves&&a.stopMoves(...e))},[c.createVNode("div",w,[c.createVNode("div",{class:"cancel-btn",onClick:t[6]||(t[6]=(...e)=>a.handleClear&&a.handleClear(...e))}),f,c.createVNode("div",{class:"back",onClick:t[7]||(t[7]=(...e)=>a.handleBack&&a.handleBack(...e))})]),c.createVNode("div",{class:"save-btn",onClick:t[8]||(t[8]=(...e)=>a.handleSave&&a.handleSave(...e))},[m,P])],544)],512))));d.render=b,d.__scopeId="data-v-41d66205",module.exports=d;
