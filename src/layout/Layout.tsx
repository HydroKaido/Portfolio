import Sidebar from "../components/Sidebar";


type MyComponentProps = React.PropsWithChildren<{}>;
function Layout({children}: MyComponentProps) {
  
  return (
    <>  
        <Sidebar/>
        <div className='w-auto h-auto'>{children}</div>
    </>

  )
}

export default Layout