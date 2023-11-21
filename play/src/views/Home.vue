<template>
  <div
    class="page"
    ref="capture"
  >
    <div class="contract-main">
      <div class="title">Arrival confirmation form from xx company</div>
      <div class="info">
        <dl>
          <dt>Contract No</dt>
          <dd>{{info.contractNo || '-'}}</dd>
        </dl>
        <dl>
          <dt>project name</dt>
          <dd>{{info.projectName || '-'}}</dd>
        </dl>
        <dl>
          <dt>client's name</dt>
          <dd>{{info.custName || '-'}}</dd>
        </dl>
        <dl>
          <dt>Ship date</dt>
          <dd>{{info.deliverDate || '-'}}</dd>
        </dl>
        <dl>
          <dt>harvest address</dt>
          <dd>{{info.address || '-'}}</dd>
        </dl>
      </div>
      <div class="table-list">
        <table>
          <tr>
            <th>No.</th>
            <th>Material name</th>
            <th>Models</th>
            <th>quantity</th>
          </tr>
          <template v-if="list.length>0">
            <tr
              v-for="(it, i) in list"
              :key="i"
            >
              <td>{{i + 1}}</td>
              <td>{{it && it.deliverContent || '-'}}</td>
              <td>{{it && it.model || '-'}}</td>
              <td>{{typeof it.count === 'number' ? it.count : '-'}}</td>
            </tr>
          </template>
          <tr
          v-else
          class="no-data"
        >
          <td colspan="4">没有数据</td>
        </tr>
        </table>
      </div>
      <div class="tip">
        <p>Confirm that the goods have been received, the quantity is accurate, and the goods have passed the acceptance inspection.</p>
      </div>
    </div>
    <div class="contract-bottom">
      <div class="signa-show">
        <div class="title">Consignee's signature</div>
        <div class="signa-con">
          <div
            class="signa-img"
            @click="changeSignaStatus"
          >
            <img
              v-if="signatureImgSrc"
              :src="signatureImgSrc"
              alt=""
            />
            <div
              v-else
              class="no-img"
            >
              <p class="tip">点击签名</p>
            </div>
          </div>
          <div class="ymd">{{nowDate}}</div>
        </div>
      </div>
    </div>

    <div class="form-button">
      <van-button
        class="primary"
        type="primary"
        round
        :loading="submitLoading"
        @click.stop="handleSubmitSigna"
      >Submit</van-button>
    </div>

    <Teleport v-if="signaStatus === 0" to="body" >
      <vue-perfect-signature
        @save="handleSave"
        @close="changeSignaStatus"
      />
    </Teleport>

  </div>
</template>

<script>
import dayjs from 'dayjs'
import { dataURLtoFile } from '@/utils/methods/common'
import { uploadFile } from '@/api/common'
import { Toast } from 'vant';

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      info: {},
      list: [],
      signatureImgSrc: '',
      signaStatus: 1, // 0-待签名；1-签名完成；
      submitLoading: false,
      nowDate: dayjs().format("YYYY.MM.DD")
    };
  },
  methods: {
    changeSignaStatus() {
      this.signaStatus = this.signaStatus === 0 ? 1 : 0
    },
    handleSave({ base64 }) {
      this.signatureImgSrc = base64
      this.changeSignaStatus()
    },
    async handleSubmitSigna() {
      if (!this.signatureImgSrc) {
        Toast('请先点击签名')
        return;
      }
      this.submitLoading = true
      try {
        const { code, msg, data } = await uploadFile({
          name: 'file',
          file: dataURLtoFile(this.signatureImgSrc, 'user_signature.png')
        })
        Toast.success(msg)
      } catch (e) {
        console.error({ e });
        Toast.fail(e.message)
      } finally {
        this.submitLoading = false
      }
    },
    async initData() {
      this.info = {}
      this.list = [{}]
      
    }
  },

  mounted() {
    this.initData()
  }
};
</script>

<style lang="less" scoped>
.page {
  padding-bottom: 20px;
}
.contract-main {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.contract-main img {
  width: 100%;
}
.contract-main .title {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  color: var(--title-color);
  font-weight: 500;
}

.contract-main .info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  & > dl {
    margin: 0;
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    justify-content: start;
    gap: 10px;
    margin-bottom: 20px;
  }
  & > dl dt {
    flex-shrink: 0;
    max-width: 8em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > dl dd {
    margin: 0;
  }
}

.table-list table {
  border-spacing: 1px;
  background-color: var(--border-color);
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
}

.table-list th {
  white-space: nowrap;
  font-weight: 500;
  background-color: #f2f2f2;
}
.table-list td,
.table-list th {
  padding: 0.5em;
}
.table-list td {
  background-color: white;
}

.table-list + .tip {
  margin-block-start: 1em;
  margin-block-end: 1em;
}

.contract-bottom {
  overflow: hidden;
  margin-bottom: 60px;
}

.signa-show {
  float: right;
  margin: 10px;
  border: 1px solid var(--border-color);
}

.signa-show .title {
  padding: 5px 10px;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
  font-size: 12px;
}
.signa-show .title span {
  font-size: 14px;
}
.signa-show .signa-con {
  padding: 5px 10px;
  text-align: center;
}

.signa-img {
  width: 20vh;
  margin-bottom: 10px;
  margin: 0;
  display: inline-block;
}
.signa-img img {
  width: 100%;
  height: 100%;
}
.signa-img .no-img {
  width: 100%;
  padding-top: 56.22%;
  position: relative;
  .tip {
    position: absolute;
    color: #999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.signa-show .connect {
  margin-bottom: 5px;
}

.form-button {
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  background-color: white;
  padding-bottom: 10px;
}
.form-button .primary {
  flex-grow: 1;
}

@media (orientation: portrait) {
  .signa-img {
    width: 20vh;
  }
}
@media (orientation: landscape) {
  .signa-img {
    width: 20vw;
  }
}
</style>
