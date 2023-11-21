# vue-perfect-signature

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

![Screenshot](https://raw.githubusercontent.com/boy-lin/perfect-signature/main/packages/perfect-signature/assets/IMG_7056.PNG)

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

### Options
| Property           | Type     | Default | Description                                           |
| ------------------ | -------- | ------- | ----------------------------------------------------- |
| `@save`             | ({ base64 })=>void   |        |                |
| `@close`             | ()=>void   |        |                |

## Tips & Tricks

### Freehand Anything

## Development & Contributions

## Community

### Support

### Discussion

### License

- MIT

## Author

- [@haolins]
