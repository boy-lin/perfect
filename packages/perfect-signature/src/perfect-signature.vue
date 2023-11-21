<template>
  <div
    class="signature-box"
    ref="signatureBox"
  >
    <div
      class="top-bar"
      ref="topBar"
    >
      <slot name="topBar">
        <div
          class="back"
          @click="handleBack"
        >
          <span class="icon"></span>
        </div>
        <div class="title">Handwritten signature</div>
        <div></div>
      </slot>
    </div>
    <div
      class="canvas-wrapper"
      ref="canvasWrapperRef"
    >
      <canvas
        class="canvas"
        disable-scroll="true"
        ref="canvasRef"
        @touchstart="handlePointStarts"
        @touchmove="handlePointMoves"
        @touchend="handlePointEnd"
      ></canvas>
    </div>
    <div
      class="bottom-bar"
      ref="bottomBar"
    >
      <div class="bar-left">
        <div
          class="cancel-btn"
          @click="handleClear"
        ></div>
        <div class="gap-line"></div>
        <div
          class="back"
          @click="handleBack"
        ></div>
      </div>
      <div
        class="save-btn"
        @click="handleSave"
      ><i></i>Save</div>
    </div>
  </div>
</template>

<script>
import { getStroke } from 'perfect-freehand'
import { debounce, getSvgPathFromStroke } from './utils';
import Line from './line'

export default {
  name: "VuePerfectSignature",
  computed: {
    options() {
      return {
        size: 32,
        thinning: 0.5,
        smoothing: 0.5,
        streamline: 0.5,
        easing: (t) => t,
        start: {
          taper: 0,
          easing: (t) => t,
          cap: true
        },
        end: {
          taper: 100,
          easing: (t) => t,
          cap: true
        }
      };
    },
    pathData() {
      const stroke = getStroke(points, this.options);
      return getSvgPathFromStroke(stroke);
    }
  },
  methods: {
    handlePointStarts(e) {
      e.stopPropagation();

      const touch = e.targetTouches[0];
      let x = touch.clientX - this.cvsRect.left;
      let y = touch.clientY - this.cvsRect.top;

      if (![-90, 90].includes(window.orientation)) {
        x = touch.clientY - this.cvsRect.top;
        y = this.cvsRect.right - touch.clientX;
      }

      const currentLine = {
        points: [
          {
            time: new Date().getTime(),
            x,
            y,
            dis: 0,
          },
        ],
      }

      this.line.pushLine(currentLine)
      this.drawerLine();
    },

    drawerLine() {
      const outlinePoints = getStroke(this.line.getLatestPoints)
      const pathData = getSvgPathFromStroke(outlinePoints)
      if (this.line.getLatestPoints.length > 2) {
        const myPath = new Path2D(pathData)
        this.canvasCtx.fill(myPath)
      }
    },
    handlePointMoves(e) {
      e.stopPropagation();
      e.preventDefault();
      const touch = e.targetTouches[0];
      let x = touch.clientX - this.cvsRect.left;
      let y = touch.clientY - this.cvsRect.top;

      if (![-90, 90].includes(window.orientation)) {
        x = touch.clientY - this.cvsRect.top;
        y = this.cvsRect.right - touch.clientX;
      }
      // console.debug("debug:", "moves", { force: touch.force });
      this.line.lastPoint = this.line.currentPoint;
      this.line.pushLatestPoint({
        time: new Date().getTime(),
        x,
        y,
      });
      this.drawerLine();
    },

    handlePointEnd(e) {
      this.canvasCtx.closePath();
    },

    handleClear() {
      const dom = this.$refs.canvasRef;
      this.canvasCtx.clearRect(0, 0, dom.width, dom.height);
    },

    handleSave() {
      const base64 = this.$refs.canvasRef.toDataURL("image/png");
      this.$emit('save', { base64 })
    },

    initCtx() {
      this.handleCvsRsize();
      const canvasDom = this.$refs.canvasRef;
      this.canvasCtx = canvasDom.getContext("2d");
    },

    handleBack() {
      this.$emit('close', true)
    },
    handlePointerDown(e) {
      e.target.setPointerCapture(e.pointerId);
      setPoints([[e.pageX, e.pageY, e.pressure]]);
      const currentLine = {
        points: [
          {
            time: new Date().getTime(),
            x: e.pageX,
            y: e.pageY,
            pressure: e.pressure,
            dis: 0,
          },
        ],
      }

      this.line.pushLine(currentLine)
      this.drawerLine();
    }, 
    handlePointerMove(e) {
      this.line.lastPoint = this.line.currentPoint;
      this.line.pushLatestPoint({
        time: new Date().getTime(),
        x: e.pageX,
        y: e.pageY,
        pressure: e.pressure
      });
      this.drawerLine();
    }
  },

  created() {
    this.line = new Line()
    this.handleCvsRsize = debounce(() => {
      if (!this.$refs) return;
      const sDom = this.$refs.signatureBox;
      const { innerWidth: iWidth, innerHeight: iHeight } = window;
      let style = `height:${iWidth}px;width:${iHeight}px;`

      if (![-90, 90].includes(window.orientation)) {
        style += `transform:rotate(90deg) translateX(-${iWidth}px);`
      } else {
        style = `height:${iHeight}px;width:${iWidth}px;`
      }

      sDom.style = style

      const cDom = this.$refs.canvasRef;
      const { height: tHeigth, width: tWidth } = this.$refs.topBar.getBoundingClientRect()
      const { height: bHeigth, width: bWidth } = this.$refs.bottomBar.getBoundingClientRect();

      if ([-90, 90].includes(window.orientation)) {
        cDom.width = iWidth;
        cDom.height = iHeight - tHeigth - bHeigth;
      } else {
        cDom.height = iWidth - tWidth - bWidth;
        cDom.width = iHeight;
      }
      const cmDom = this.$refs.canvasWrapperRef;
      this.cvsRect = cmDom.getBoundingClientRect();
    })

  },

  mounted() {
    console.log(`signa mounted!`);
    document.body.classList.add("of-hidden");
    this.initCtx();
    window.addEventListener("resize", this.handleCvsRsize);
  },

  unmounted() {
    document.body.classList.remove("of-hidden");
    window.removeEventListener("resize", this.handleCvsRsize);
  }
}
</script>


<style scoped>
.signature-box {
  position: fixed;
  overflow: hidden;
  background-color: #fbfbfb;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
}

.signature-box .top-bar {
  flex-grow: 0;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  box-sizing: border-box;
}

.top-bar .title {
  text-align: center;
  flex-grow: 1;
  color: var(--title-color);
  font-size: 16px;
}
.top-bar > div {
  flex-basis: 40px;
}

.top-bar .back .icon {
  display: block;
  width: 18px;
  height: 18px;
  background: url("./left.svg") no-repeat center;
  background-size: cover;
}

.signature-box .canvas {
  background-color: #ffffff;
  max-width: 100%;
  max-height: 100%;
}

.signature-box .canvas-wrapper {
  font-size: 0;
}

.signature-box .bottom-bar {
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  background-color: white;
  padding: 10px;
  border-top: 1px solid var(--border-color);
  align-items: center;
  justify-content: space-between;
}

.signature-box .bottom-bar .cancel-btn {
  background: url("./clear.svg") no-repeat center;
  background-size: cover;
  width: 18px;
  height: 18px;
}
.signature-box .bottom-bar .save-btn {
  display: flex;
  gap: 5px;
  align-items: center;
}
.signature-box .bottom-bar .save-btn i {
  display: inline-block;
  background: url("./save.svg") no-repeat center;
  background-size: cover;
  width: 18px;
  height: 18px;
}

.bottom-bar .back {
  background: url("./back.svg") no-repeat center;
  background-size: cover;
  width: 18px;
  height: 18px;
}

.bottom-bar .bar-left {
  display: flex;
}

.bottom-bar .gap-line {
  margin: 0 10px;
  width: 1px;
  background-color: var(--border-color);
}

@media (orientation: portrait) {
  .signature-box {
    transform-origin: bottom left;
  }
}
@media (orientation: landscape) {
}
</style>