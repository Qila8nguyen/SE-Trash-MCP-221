import { Card, Table } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import { getLayout, isAccessAllowed } from '../../utils'

const UserByDomain = (props) => {
  console.log('props :>> ', props)
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

export const getServerSideProps = async (context) => {
  console.log('context :>> ', context)
  const layout = await getLayout(context)
  const isAllowed = await isAccessAllowed(layout, context.resolvedUrl)

  return { props: {isAllowed, layout} }
}
