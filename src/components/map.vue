<template>
  <div>
      <p class="title">
          <i></i>
          疫情地图
      </p>
    <div id="chinaMap"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      mapData: [],
    };
  },
  mounted() {
    this.$api.getCaseNum().then((res) => {
        console.log(res);
        for(let i=0;i<res.data.list.length;i++){
            let temp={
                name:res.data.list[i].name,
                value:res.data.list[i].econNum,
                itemStyle:{
                    normal:{
                        areaColor:this.setColor(res.data.list[i].econNum)
                    }
                }
            }
            this.mapData.push(temp);
        }
        this.$charts.chinaMap("chinaMap",this.mapData);
      });
  },
  methods:{
      setColor(value){
          let currentColor = "";
            switch (true) {
                case value == 0:
                    currentColor = "#fff";
                    break;
                case value > 0 && value < 10:
                    currentColor = "#FDFDCF";
                    break;
                case value >= 10 && value < 100:
                    currentColor = "#FE9E83";
                    break;
                case value >= 100 && value < 500:
                    currentColor = "#E55A4E";
                    break;
                case value >= 500 && value < 10000:
                    currentColor = "#DC143C";
                    break;
            }
            return currentColor;
      }
  }
};
</script>

<style scoped>
#chinaMap {
  width: 100%;
  height: 400px;
}
.title{
    border-top: .005rem solid #ebebeb;
    font-size: 0.17rem;
    background: #fff;
    padding-left: 0.16rem;
    padding-top: 0.10rem;
    padding-bottom: 0.10rem;
}

.title i{
    display: inline-block;
    width: 0.04rem;
    height: 0.18rem;
    margin-right: 0.03rem;
    vertical-align: middle;
    background: #4169e2;
}
</style>