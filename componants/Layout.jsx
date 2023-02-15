import Header from "./Header"
import Footer from "./Footer"
// import { Children } from "react"

const Layout = (props) => {
  // console.log('Children', Children)
  // console.log('props', props)
  const Children = props.children;
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  )
}

export default Layout;
