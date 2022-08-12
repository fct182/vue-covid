<template>
  <div class="city">
    <div id="city"></div>
    <p v-if="num!=''">境外输入病例：{{ num }}例</p>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityData: [],
      num: "",
    };
  },
  mounted() {
    const currentCity = this.$route.params.city;
    this.$api.getCaseNum().then((res) => {
    //   console.log(res);
      for (let i = 0; i < res.data.list.length; i++) {
        if (currentCity == res.data.list[i].name) {
          for (let j = 0; j < res.data.list[i].city.length; j++) {
            let temp = {
              name: res.data.list[i].city[j].mapName,
              value: res.data.list[i].city[j].econNum,
              itemStyle: {
                normal: {
                  areaColor: this.setColor(res.data.list[i].city[j].econNum),
                },
              },
            };
            if (j == 0 && temp.name == "") {
              this.num = temp.value;
            }
            this.cityData.push(temp);
          }
        }
      }
        // console.log(this.cityData);
      this.$charts.provinceCity("city", currentCity, this.cityData);
    });
  },
  methods: {
    setColor(value) {
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
    },
  },
};
</script>

<style scoped>
.city{
    background: #fff;
}
#city {
  width: 100%;
  height: 400px;
}
p{
  position: absolute;
  top: 10px;
  right: 20px;
  background: paleturquoise;
  border-radius: 10px;
  padding: 5px;
}
</style>