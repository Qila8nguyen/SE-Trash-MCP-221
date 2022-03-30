import { Result } from "antd"

type Props = {

}

const Page404 = (props: Props) => {
  return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
  />
}

export default Page404
