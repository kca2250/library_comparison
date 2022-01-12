import React from "react";
import { Layout } from "antd";
import CardList from "./components/CardList";

const { Content, Footer, Header, Sider } = Layout;

const bgColor: { backgroundColor: string } = {
  backgroundColor: "white",
};

const App: React.FC = () => {
  return (
    <Layout style={{ width: "1024px", margin: "auto" }}>
      <Header style={bgColor} />
      <Layout>
        <Sider breakpoint="sm" theme="light" />
        <Content style={bgColor}>
          <CardList />
        </Content>
        <Sider breakpoint="sm" theme="light" />
      </Layout>
      <Footer style={bgColor} />
    </Layout>
  );
};

export default App;
