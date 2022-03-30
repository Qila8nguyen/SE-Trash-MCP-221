import { Card, Table } from 'antd'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Page404 from '../../components/Page/404'
import { getLayout, isAccessAllowed } from '../../utils'

const UserByDomain = (props) => {
  const router = useRouter()
  const { domain } = router.query

  const { isAllowed } = props
  if (!isAllowed) return <Page404/>

  return (
    <div>
      <Card title={domain}>
        <Table/>
      </Card>
    </div>
  )
}

export default UserByDomain

export const getServerSideProps : GetServerSideProps = async (context) => {
  const layout = await getLayout(context)
  const isAllowed = await isAccessAllowed(layout, context, true)

  return { props: {isAllowed, layout} }
}
