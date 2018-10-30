import { Toast } from 'antd-mobile-rn';

const defaultFailSolution = (res) => {
	if(typeof res !== 'object') {
		Toast.info(res);
	}
};
/**
 * 异步获取数据方法
 * @param method 'GET' 'POST' 'HEAD' 'PUT' 'DELETE'等，必填
 * @param url api.config.js中定义的常量名，必填
 * @param success 成功处理函数，必填，参数为responseJson
 * @param otherHeader 其他的头部配置 比如content-type等
 * @param corsSetting 跨域设置，默认为same-origin 严格不跨域，可选值为cors，no-cors. same-origin
 * same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；其对应的response type为basic。
 * cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；
 * no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；其对应的response type为opaque。
 * @param fail 失败处理函数，默认为defaultFailSolution，效果为将message填充到消息通知栏。参数为msg和http code，自行处理303的状态
 */
global.fetchData = ({url="", params={}, method='POST', success=()=>{}, fail=defaultFailSolution, otherHeader={}}={}) => {
	if(!url) {
		Toast.info('请填写接口地址!');
		return;
	}

	Toast.loading('Loading...',0,()=>{},true);
	fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json",
			...otherHeader
		},
		body:JSON.stringify(params)
	}).then((response) => {
		return response.json();
	}).then((responseJson) => {
		Toast.hide();
		if (responseJson.code == 0) {
			success && success(responseJson);
			return;
		}
		Toast.info(responseJson.msg);
	}).catch((err)=>{
		fail(err);
	})
}

export default fetchData;