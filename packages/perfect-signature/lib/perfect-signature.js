"use strict";var e=require("./node_modules/.pnpm/perfect-freehand@1.2.0/node_modules/perfect-freehand/dist/esm/index.js"),t=require("./utils.js"),n=require("./line.js"),s=require("vue");require("./perfect-signature.vue_vue_type_style_index_0_scoped_true_lang.js");const i={name:"VuePerfectSignature",computed:{options:()=>({size:32,thinning:.5,smoothing:.5,streamline:.5,easing:e=>e,start:{taper:0,easing:e=>e,cap:!0},end:{taper:100,easing:e=>e,cap:!0}}),pathData(){const n=e.getStroke(points,this.options);return t.getSvgPathFromStroke(n)}},methods:{handlePointStarts(e){e.stopPropagation();const t=e.targetTouches[0];let n=t.clientX-this.cvsRect.left,s=t.clientY-this.cvsRect.top;[-90,90].includes(window.orientation)||(n=t.clientY-this.cvsRect.top,s=this.cvsRect.right-t.clientX);const i={points:[{time:(new Date).getTime(),x:n,y:s,dis:0}]};this.line.pushLine(i),this.drawerLine()},drawerLine(){const n=e.getStroke(this.line.getLatestPoints),s=t.getSvgPathFromStroke(n);if(this.line.getLatestPoints.length>2){const e=new Path2D(s);this.canvasCtx.fill(e)}},handlePointMoves(e){e.stopPropagation(),e.preventDefault();const t=e.targetTouches[0];let n=t.clientX-this.cvsRect.left,s=t.clientY-this.cvsRect.top;[-90,90].includes(window.orientation)||(n=t.clientY-this.cvsRect.top,s=this.cvsRect.right-t.clientX),this.line.lastPoint=this.line.currentPoint,this.line.pushLatestPoint({time:(new Date).getTime(),x:n,y:s}),this.drawerLine()},handlePointEnd(e){this.canvasCtx.closePath()},handleClear(){const e=this.$refs.canvasRef;this.canvasCtx.clearRect(0,0,e.width,e.height)},handleSave(){const e=this.$refs.canvasRef.toDataURL("image/png");this.$emit("save",{base64:e})},initCtx(){this.handleCvsRsize();const e=this.$refs.canvasRef;this.canvasCtx=e.getContext("2d")},handleBack(){this.$emit("close",!0)},handlePointerDown(e){e.target.setPointerCapture(e.pointerId),setPoints([[e.pageX,e.pageY,e.pressure]]);const t={points:[{time:(new Date).getTime(),x:e.pageX,y:e.pageY,pressure:e.pressure,dis:0}]};this.line.pushLine(t),this.drawerLine()},handlePointerMove(e){this.line.lastPoint=this.line.currentPoint,this.line.pushLatestPoint({time:(new Date).getTime(),x:e.pageX,y:e.pageY,pressure:e.pressure}),this.drawerLine()}},created(){this.line=new n,this.handleCvsRsize=t.debounce((()=>{if(!this.$refs)return;const e=this.$refs.signatureBox,{innerWidth:t,innerHeight:n}=window;let s=`height:${t}px;width:${n}px;`;[-90,90].includes(window.orientation)?s=`height:${n}px;width:${t}px;`:s+=`transform:rotate(90deg) translateX(-${t}px);`,e.style=s;const i=this.$refs.canvasRef,{height:a,width:o}=this.$refs.topBar.getBoundingClientRect(),{height:r,width:c}=this.$refs.bottomBar.getBoundingClientRect();[-90,90].includes(window.orientation)?(i.width=t,i.height=n-a-r):(i.height=t-o-c,i.width=n);const d=this.$refs.canvasWrapperRef;this.cvsRect=d.getBoundingClientRect()}))},mounted(){console.log("signa mounted!"),document.body.classList.add("of-hidden"),this.initCtx(),window.addEventListener("resize",this.handleCvsRsize)},unmounted(){document.body.classList.remove("of-hidden"),window.removeEventListener("resize",this.handleCvsRsize)}},a=s.withScopeId("data-v-b39a1cbc");s.pushScopeId("data-v-b39a1cbc");const o={class:"signature-box",ref:"signatureBox"},r={class:"top-bar",ref:"topBar"},c=s.createVNode("span",{class:"icon"},null,-1),d=s.createVNode("div",{class:"title"},"Handwritten signature",-1),l=s.createVNode("div",null,null,-1),h={class:"canvas-wrapper",ref:"canvasWrapperRef"},p={class:"bottom-bar",ref:"bottomBar"},u={class:"bar-left"},v=s.createVNode("div",{class:"gap-line"},null,-1),g=s.createVNode("i",null,null,-1),f=s.createTextVNode("Save");s.popScopeId();const w=a(((e,t,n,i,a,w)=>(s.openBlock(),s.createBlock("div",o,[s.createVNode("div",r,[s.renderSlot(e.$slots,"topBar",{},(()=>[s.createVNode("div",{class:"back",onClick:t[1]||(t[1]=(...e)=>w.handleBack&&w.handleBack(...e))},[c]),d,l]))],512),s.createVNode("div",h,[s.createVNode("canvas",{class:"canvas","disable-scroll":"true",ref:"canvasRef",onTouchstart:t[2]||(t[2]=(...e)=>w.handlePointStarts&&w.handlePointStarts(...e)),onTouchmove:t[3]||(t[3]=(...e)=>w.handlePointMoves&&w.handlePointMoves(...e)),onTouchend:t[4]||(t[4]=(...e)=>w.handlePointEnd&&w.handlePointEnd(...e))},null,544)],512),s.createVNode("div",p,[s.createVNode("div",u,[s.createVNode("div",{class:"cancel-btn",onClick:t[5]||(t[5]=(...e)=>w.handleClear&&w.handleClear(...e))}),v,s.createVNode("div",{class:"back",onClick:t[6]||(t[6]=(...e)=>w.handleBack&&w.handleBack(...e))})]),s.createVNode("div",{class:"save-btn",onClick:t[7]||(t[7]=(...e)=>w.handleSave&&w.handleSave(...e))},[g,f])],512)],512))));i.render=w,i.__scopeId="data-v-b39a1cbc",module.exports=i;
