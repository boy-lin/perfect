import PerfectSignature from './perfect-signature.vue';

export const install = {
  install(app) {
    app.component('PerfectSignature', PerfectSignature);
  },
}

PerfectSignature.install = install

export default PerfectSignature;
