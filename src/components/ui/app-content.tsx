import { Layout } from 'antd';
import React, { FC } from 'react';

import styles from './styles.module.css';

const { Content, Header } = Layout;

interface IAppContentProps {
  children: React.ReactNode,
  title: string
}

export const AppContent: FC<IAppContentProps> = ({ children, title }) => {
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

