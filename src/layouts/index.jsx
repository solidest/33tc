
import { Component } from 'react'
import { Layout } from 'antd';

import GlobalHeader from "../components/GlobalHeader";

const { Header, Content, Footer } = Layout;

class BasicLayout extends Component {
  
  render() {
    const { children } = this.props;
    return (
    <Layout>
      <Header>
        <GlobalHeader/>
      </Header>
      <Content style={{ margin: '20px auto', height: '100%', width: "100%" }} >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>旋极科技 @2020 </Footer>
    </Layout>
    );
  }
}

export default BasicLayout;