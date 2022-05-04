import React from "react";
import { Layout, Menu } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "../../pages/homePage";
import { Blog } from "../../pages/blogPage";
import { About } from "../../pages/aboutPage";
const { Header } = Layout;

export default function HeaderPage() {
  const arrayForHeader: string[] = ["Home", "Blog", "About"];

  return (
    <div>
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={arrayForHeader.map((item, index) => {
              const key = index + 1;
              return {
                key,
                label: <Link to={String(key)}>{item}</Link>,
              };
            })}
          />
        </Header>
      </Layout>
      <Routes>
        <Route path="1" element={<Home />} />
        <Route path="2" element={<Blog />} />
        <Route path="3" element={<About />} />
      </Routes>
    </div>
  );
}
