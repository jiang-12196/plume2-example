import React from 'react';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router';
import FaHome from 'react-icons/lib/fa/home';
import MdFormatSize from 'react-icons/lib/md/format-size';
import classnames from 'classnames';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';

@withRouter
class WebTabBar extends React.Component<any, any> {
  getMenuItem = () => {
    interface Item {
      title: string,
      pathname: string,
      icon: any
    }
    const menus = [
      {
        title: '首页',
        pathname: '/',
        icon: FaHome,
      },
      {
        title: '地址',
        pathname: '/addr',
        icon: MdFormatSize,
      }
    ];
    
    menus.map((item: Item) => {
      return (
        <TabBar.Item
            title={item.title}
            key={item.title}
            selected={this._selectStyle(item.pathname)}
            icon={<FaHome className="tabBarIcon" />}
            onPress={() => this._redirectRouter(item.pathname)}
            selectedIcon={<FaHome className={classnames(['tabBarIcon', 'tabBarSelectd'])} />}
            data-seed="logId"
          >
            {this.props.children}
        </TabBar.Item>
      )
    })
  }

  
  render() {
    return (
      <div className={'tabBar'}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="首页"
            selected={this._selectStyle('/')}
            icon={<FaHome className="tabBarIcon" />}
            onPress={() => this._redirectRouter('/')}
            selectedIcon={<FaHome className={classnames(['tabBarIcon', 'tabBarSelectd'])} />}
            data-seed="logId"
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            title="地址"
            key="地址"
            selected={this._selectStyle('/addr')}
            icon={<MdFormatSize className="tabBarIcon" />}
            selectedIcon={<MdFormatSize className={classnames(['tabBarIcon', 'tabBarSelectd'])} />}
            onPress={() => this._redirectRouter('/addr')}
            data-seed="logId"
          >
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            title="商品"
            key="商品"
            selected={this._selectStyle('/good')}
            icon={<MdAddShoppingCart className="tabBarIcon" />}
            selectedIcon={<MdAddShoppingCart className={classnames(['tabBarIcon', 'tabBarSelectd'])} />}
            onPress={() => this._redirectRouter('/good')}
            data-seed="logId"
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
		);
  }
  
  _selectStyle(pathname: string) {
    return this.props.location.pathname == pathname
  }

  _redirectRouter(pathname: string) {
    this.props.router.push({
      pathname,
    })
  }
}

export default WebTabBar;
