import { Layout } from 'antd';
import React, { FC } from 'react';

import styles from './styles.module.css';

const { Content, Header } = Layout;

interface IAppContentProps {
  children?: React.ReactNode,
  title: string
}

export const AppContent: FC<IAppContentProps> = ({ children, title }) => {
  return (
    <Layout className={styles['layout-content']}>
      <Header className={styles.header}>
        {title}
      </Header>
      <Content className={styles.content}>
        {children}
      </Content>
    </Layout>

  );
};

