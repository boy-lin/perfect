# vue-perfect-signature/手写签名

Practical Vue handwritten signature component.

实用的vue手写签名组件。

🔗 Curious? Try out a [demo](https://perfect-signature-play.vercel.app/#/).

## Installation

```bash
npm install vue-perfect-signature
```

## Introduction

* Only supports mobile devices
// 仅支持移动设备
* Even when the screen is locked, it is also forced to display horizontally.
// 锁屏情况下，也强制横屏显示
* Prevent the vue-perfect-signature toolbar from safari and chrome. When the title bar slides, it will pull down to refresh the page.
// 阻止在safari,chrome里在vue-perfect-signature工具栏，标题栏滑动会下拉刷新页面

![Screenshot](https://raw.githubusercontent.com/boy-lin/perfect-signature/main/packages/perfect-signature/assets/preview.png)

## Usage

install component
```js
import VuePerfectSignature from "vue-perfect-signature";
import "vue-perfect-signature/lib/style.css";

const app = createApp(App);

app.use(VuePerfectSignature.install);
```
use vue-perfect-signature component
```vue
<template>
  <img
    :src="signatureImgSrc"
    alt="signature preview"
  />
  <Teleport v-if="isShow" to="body" >
    <vue-perfect-signature
      @save="handleSave"
      @close="isShow=false"
    />
  </Teleport>
</template>

<script>
export default {
  data() { return { isShow: true } }
  methods: {
    handleSave({ base64 }) {
      this.signatureImgSrc = base64
    }
  }
}
</script>
```

## Example
[demo](https://perfect-signature-play.vercel.app/#/).
## Documentation

#### Attributes
| Property           | Type     | Default | Description                                           |
| ------------------ | -------- | ------- | ----------------------------------------------------- |
| `drawOptions`             | Object   |        |Depends on perfect-freehand, so refer to its [options](https://github.com/steveruizok/perfect-freehand#options)|

#### Events

| Property           | Type     | Default | Description                                           |
| ------------------ | -------- | ------- | ----------------------------------------------------- |
| `@save`             | ({ base64 })=>void   |        |                |
| `@close`             | ()=>void   |        |                |

#### Slots

| Name           | Type     | Default | Description                                           |
| ------------------ | -------- | ------- | ----------------------------------------------------- |
| `topBar`             | ({ base64 })=>void   |        |                |

### Discussion

[issues](https://github.com/boy-lin/perfect-signature/issues)

### License

- MIT

## Author

- [@haolins](https://twitter.com/evilHolly1)