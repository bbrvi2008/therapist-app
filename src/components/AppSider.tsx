import React, { FC, useState } from 'react';
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styles from './styles.module.css';
import AppMenu from './AppMenu';
import { Properties } from 'csstype';

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


const AppSider: FC = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout hasSider style={collapsed ? { minWidth: 0, transition: 'all 0.3s' } : { minWidth: 200, transition: 'all 0.3s' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}

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

export default AppSider;
