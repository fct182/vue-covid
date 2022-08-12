import {get} from '../utils/request'

const api= {
    /**
     * 获取疫情信息
     * @param {*} params 请求参数key
     * @returns 
     */
    getDataInfo(params){
        return get("http://api.tianapi.com/txapi/ncov/index",params);
    },
    getCaseNum(){
        return get("/news/wap/fymap2020_data.d.json");
    }
}

export default api