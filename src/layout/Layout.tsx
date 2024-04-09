import React from 'react'
import Header from '../components/Header'


type MyComponentProps = React.PropsWithChildren<{}>;
function Layout({children}: MyComponentProps) {
    
  return (
    <>
        <Header/>
    <div>{children}</div>
    </>

  )
}

export default Layout