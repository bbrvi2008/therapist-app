import React, { FC } from 'react';
import { Layout } from 'antd';
import styles from './styles.module.css';

const { Content, Header } = Layout;

interface IAppContentProps {
  children: React.ReactNode,
  title: String
}

const AppContent: FC<IAppContentProps> = ({ children, title }) => {
  return (
    <Layout>
      <Header className={styles.header} style={{ padding: 0 }}>
        {title}
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>

  );
};

export default AppContent;
