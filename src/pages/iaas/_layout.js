
import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class BasicLayout extends Component {
  
  render() {
    console.log(this.props)
    const { children } = this.props;
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            inlineCollapsed={true}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="appstore" />
                  计算资源
                </span>
              }
            >
              <Menu.Item key="1">主机管理</Menu.Item>
              <Menu.Item key="2">主机监控</Menu.Item>
              <Menu.Item key="4">资源分配</Menu.Item>
              <Menu.Item key="3">资源池状态</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="database" />
                  存储资源
                </span>
              }
            >
              <Menu.Item key="5">存储配置</Menu.Item>
              <Menu.Item key="6">使用状态</Menu.Item>
              <Menu.Item key="7">云盘管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="apartment" />
                  接口管理
                </span>
              }
            >
              <Menu.Item key="9">网络接口</Menu.Item>
              <Menu.Item key="10">USB管控</Menu.Item>
              <Menu.Item key="11">串口服务器</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="cloud-server" />
                  虚拟机
                </span>
              }
            >
              <Menu.Item key="12">查看全部</Menu.Item>
              <Menu.Item key="13">添加虚拟机</Menu.Item>
              <Menu.Item key="14">动态迁移</Menu.Item>
              <Menu.Item key="15">配置更新</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <Icon type="security-scan" />
                  安全设置
                </span>
              }
            >
              <Menu.Item key="16">密钥管理</Menu.Item>
              <Menu.Item key="17">集群配置</Menu.Item>
              <Menu.Item key="18">审计日志</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{ children }</Content>
      </Layout>
    );
  }
}

export default connect(state => {
  return {
    proj: state.proj,
  };
}) (BasicLayout);