import * as echarts from "echarts"

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $charts: {
            get() {
                return {
                    chinaMap(id, data) {
                        this.chart = echarts.init(document.getElementById(id));
                        let option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: true,
                                formatter(data) {
                                    return "<a href='#/city/" + data.name + "' style='color:#fff'><div><p>" + data.seriesName + ":" + data.name + "</p><p>现存确诊:" + data.value + "</p><button style=''>点击查看详情</button></div></a>"
                                }
                            },
                            series: [{
                                name: '省',
                                type: 'map',
                                map: 'china',
                                roam: false,
                                zoom: 1.2,
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,.2)'
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0,0,0,.5)'
                                    }
                                },
                                data: data
                            }]
                        }
                        this.chart.setOption(option);
                    },
                    provinceCity(id, city, data) {
                        this.chart = echarts.init(document.getElementById(id));
                        let option = {
                            tooltip: {
                                triggerOn: "click",
                                enterable: true,
                                formatter(data) {
                                    return "<div><p>" + data.name + "</p><p>现存确诊:" + data.value + "</p></div>"
                                }
                            },
                            title: {
                                text: city
                            },
                            darkMode: true,
                            series: [{
                                type: 'map',
                                map: city,// 只能是中文
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,.2)'
                                    },
                                    emphasis: {
                                        areaColor: 'rgba(255,180,0,.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                        shadowColor: 'rgba(0,0,0,.5)'
                                    }
                                },
                                data: data
                            }]
                        }
                        this.chart.setOption(option);
                    }
                }
            }
        }
    })
}
export default install