import axios from 'axios';
axios.defaults.baseURL = 'http://api.duyiedu.com';


axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config)
    config.params = {
        ...config.params,
        appkey:'just_be_happy_1547734649125'
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  export default axios; 