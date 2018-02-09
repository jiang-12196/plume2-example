import { Actor, Action, IMap } from 'plume2';
import fetch from 'node-fetch';

class GoodsListActor extends Actor {
	defaultState() {
		return {
			regionValue: []
		};
	}

	@Action('getGoodsList')
	getGoodsList(state: IMap, value: Array<number>) {
    const request = {
			cache: 'no-store',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				D2pAuthorization:
				'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aWNrZXRJZCI6InFtMTk1NzBzaU4iLCJ1c2VySWQiOiJBOTA0MTY0IiwiaWF0IjoxNTE3OTg1OTUyLCJleHAiOjQxMDk5ODU5NTJ9.IGF6gs9TajJBv5H1FrqCPoL9pAmGPqQIVhnLJSowTzI',
				Platform: 'wechat',
				supId: '',
			},
			method: 'GET',
		};
		return fetch('http://172.21.3.131:8080/goods/v2/list?goodsShowType=1&fromOwner=1&pageNum=0&pageSize=10', request)
    .then(res => res.json())
    .then(body => {
      state.set('regionValue', body.data.dataList)
    });
	}
}
 
export default GoodsListActor;
