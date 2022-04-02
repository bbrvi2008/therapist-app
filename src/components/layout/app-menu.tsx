import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { FC } from 'react';

const { Item } = Menu;
interface IListMenu {
  icon: JSX.Element,
  text: string
}
const ListMenu: Array<IListMenu> = [
  { icon: <UserOutlined />, text: 'nav1' },
  { icon: <VideoCameraOutlined />, text: 'nav2' },
  { icon: <UploadOutlined />, text: 'nav3' },
]

export const AppMenu: FC = () => {
  return (
    <Menu theme="dark" mode="inline">
      {ListMenu.map((item, index) => {return <Item key={index} icon={item.icon}>{item.text}</Item>})}
    </Menu>
  );
}
