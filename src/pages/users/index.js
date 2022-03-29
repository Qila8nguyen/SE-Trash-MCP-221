import { Button, Card, Result, Table } from 'antd'
import React from 'react'
import Page404 from '../../components/Page/404'
import { getLayout, isAccessAllowed } from '../../utils'

const Users = (props) => {
  const { isAllowed } = props
  console.log('props :>> ', props)
  if (!isAllowed) return <Page404/>

  return (
    <div>
      <Card title='Users (100)'>
        <Table pagination/>
      </Card>
    </div>
  )
}

export default Users

export const getServerSideProps = async (context) => {
  const layout = await getLayout(context)
  const isAllowed = await isAccessAllowed(layout, context.resolvedUrl)

  return { props: {isAllowed, layout} }
}
