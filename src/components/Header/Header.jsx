import React from "react";
import { Menu } from "antd";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-row justify-around items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-900">{https://www.christvilla.org/images/logo/ChristVilla-logo-65_Test.png}</h1>
        <Menu mode="horizontal" className="flex space-x-6 border-none">
          <Menu.Item key="about"><a href="/about">About</a></Menu.Item>
          <Menu.Item key="locations"><a href="/locations">Locations</a></Menu.Item>
          <Menu.Item key="give"><a href="/give">Give</a></Menu.Item>
          <Menu.Item key="sermons"><a href="/sermons">Sermons</a></Menu.Item>
          <Menu.Item key="limitless"><a href="/limitless">Limitless</a></Menu.Item>
        </Menu>
        <div className="flex space-x-4 text-xl">
          <a href="https://www.instagram.com"><InstagramOutlined /></a>
          <a href="https://www.facebook.com"><FacebookOutlined /></a>
          <a href="https://www.youtube.com"><YoutubeOutlined /></a>
        </div>

      </div>
    </header>
  );
};

export default Header;
