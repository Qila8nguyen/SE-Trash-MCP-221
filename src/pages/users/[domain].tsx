import { Card, Table } from 'antd'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Page404 from '../../components/Page/404'
import { wrapper } from '../../redux/store'
import { getPreProcessProps } from '../../utils'

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  const preProcessProps = await getPreProcessProps(context, store, true)

  return {
    props: {
      ...preProcessProps
    }
  }
})