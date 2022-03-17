import { Card, Table } from 'antd'
import React from 'react'

const Users = (props) => {
  return (
    <div>
      <Card title='Users (100)'>
        <Table pagination/>
      </Card>
    </div>
  )
}

export default Users