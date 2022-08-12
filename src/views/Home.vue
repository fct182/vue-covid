<template>
  <div class="home">
    <Header />
    <Info :infoData="infoData" />
    <CaseNum :caseNumData="caseNumData" />
    <Map />
    <TreeChart />
    <News :newsData="newsData" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header.vue"
import Info from '../components/Info.vue'
import CaseNum from '../components/CaseNum.vue'
import Map from '../components/map.vue'
import TreeChart from '../components/TreeChart.vue'
import News from '../components/News.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "Home",
  components: {
    Header,
    Info,
    CaseNum,
    Map,
    TreeChart,
    News,
    Footer
  },
  data() {
    return {
      infoData: {},
      caseNumData: {},
      newsData: []
    };
  },
  created() {
    this.$api.getDataInfo({
      key: "056aa5aad5aa730fe3f1c4707808bdbf",
    }).then(res => {
      this.infoData = {
        note1:res.newslist[0].desc.note1,
        note2:res.newslist[0].desc.note2,
        note3:res.newslist[0].desc.note3,
        remark1:res.newslist[0].desc.remark1,
        remark2:res.newslist[0].desc.remark2,
        remark3:res.newslist[0].desc.remark3,
      };
      this.newsData = res.newslist[0].news;
      this.caseNumData = {
        modifyTime: res.newslist[0].desc.modifyTime,
        // 现存确诊
        currentConfirmedCount:  res.newslist[0].desc.currentConfirmedCount,
        currentConfirmedIncr: res.newslist[0].desc.currentConfirmedIncr,
        // 现存无症状
        seriousCount: res.newslist[0].desc.seriousCount,
        seriousIncr: res.newslist[0].desc.seriousIncr,
        // 累计确诊
        confirmedCount: res.newslist[0].desc.confirmedCount,
        confirmedIncr: res.newslist[0].desc.confirmedIncr,
        // 累计死亡
        deadCount: res.newslist[0].desc.deadCount,
        deadIncr: res.newslist[0].desc.deadIncr,
        //累计治愈
        curedCount: res.newslist[0].desc.curedCount,
        curedIncr: res.newslist[0].desc.curedIncr,
        // 累计境外输入
        suspectedCount: res.newslist[0].desc.suspectedCount,
        suspectedIncr: res.newslist[0].desc.suspectedIncr,
      }
    })
  },
};
</script>
