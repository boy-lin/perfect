import VuePerfectSignature from './perfect-signature.vue';

export const install = {
  install(app) {
    app.component('VuePerfectSignature', VuePerfectSignature);
  },
}

VuePerfectSignature.install = install

export default VuePerfectSignature;
