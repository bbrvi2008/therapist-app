import { Layout, Row } from 'antd'
import React, { FC } from 'react'

import { AppContent, AppSider } from '../components/layout'

export const PageLayout: FC = () => {
  return (
    <Layout>
      <Row wrap={false}>
        <AppSider />
        <AppContent title={'TITLE'}>asdasd</AppContent>
      </Row>
    </Layout>
  )
}
