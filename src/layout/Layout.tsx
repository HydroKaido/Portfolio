
import Header from '../components/Header'

type MyComponentProps = React.PropsWithChildren<{}>;
function Layout({children}: MyComponentProps) {
  
  return (
    <>

        {children}

    </>

  )
}

export default Layout