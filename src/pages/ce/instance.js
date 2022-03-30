import Text from 'antd/lib/typography/Text'
import React from 'react'
import Page404 from '../../components/Page/404'
import { getLayout, isAccessAllowed } from '../../utils'

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

export const getServerSideProps = async (context) => {
  const layout = await getLayout(context)
  const isAllowed = await isAccessAllowed(layout, context)

  return { props: {isAllowed, layout} }
}
