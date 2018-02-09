import { Store } from 'plume2';
import GoodsListActor from './actor/goods-actor';

class AppStore extends Store {
	bindActor() {
		return [ new GoodsListActor() ];
	}

  getGoodList() {
    this.dispatch('getGoodsList');
  }
}

export default AppStore;
