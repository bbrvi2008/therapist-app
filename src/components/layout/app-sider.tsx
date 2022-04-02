import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from "antd";
import { Properties } from 'csstype';
import React, { FC, useState } from 'react';

import {AppMenu} from './app-menu';
import styles from './styles.module.css';

const { Sider } = Layout;
const triggerCloseStyle: Properties = {
  transition: 'all 0.2s',
  position: 'fixed',
  left: '0',
  top: '50vh',
}
const triggerOpenStyle: Properties = {
  transition: 'all 0.2s',
  position: 'fixed',
  left: '200px',
  top: '50vh',
}

export const AppSider: FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout hasSider className={collapsed ? styles['layout-sider-closed'] : styles['layout-sider-opened']}>
      <Sider
        className={styles.sider}
        trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onCollapse={toggle}
        collapsedWidth={0}
        zeroWidthTriggerStyle={collapsed ? triggerCloseStyle : triggerOpenStyle}
        collapsible
        collapsed={collapsed}>
        <div className={styles.logo}>LOGO</div>
        <AppMenu />
      </Sider>
    </Layout>
  );
};

