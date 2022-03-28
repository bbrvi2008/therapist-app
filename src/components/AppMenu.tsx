import React, { FC } from 'react';
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Item } = Menu;
interface IListMenu {
  icon: JSX.Element,
  text: String
}
const ListMenu: Array<IListMenu> = [
  { icon: <UserOutlined />, text: 'nav1' },
  { icon: <VideoCameraOutlined />, text: 'nav1' },
  { icon: <UploadOutlined />, text: 'nav1' },
]

const AppMenu: FC = () => {
  return (
    <Menu inlineCollapsed theme="dark" mode="inline">
      {ListMenu.map((item, index) => <Item key={index} icon={item.icon}>{item.text}</Item>)}
    </Menu>
  );
}

export default AppMenu;