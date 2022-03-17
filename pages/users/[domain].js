import { Card, Table } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'

const UserByDomain = (props) => {
  const router = useRouter()
  const { domain } = router.query

  return (
    <div>
      <Card title={domain}>
        <Table/>
      </Card>
    </div>
  )
}

export default UserByDomain
