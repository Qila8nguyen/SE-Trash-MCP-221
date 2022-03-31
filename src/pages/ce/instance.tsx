import Text from 'antd/lib/typography/Text'
import { GetServerSideProps } from 'next'
import React from 'react'
import Page404 from '../../components/Page/404'
import { wrapper } from '../../redux/store'
import { getPreProcessProps } from '../../utils'

const Instance = (props) => {
  const { isAllowed } = props
  if (!isAllowed) return <Page404/>

  return (
    <div>
      <Text>
        Instance
      </Text>
    </div>
  )
}

export default Instance

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
  const preProcessProps = await getPreProcessProps(context, store)

  return {
    props: {
      ...preProcessProps
    }
  }
})
