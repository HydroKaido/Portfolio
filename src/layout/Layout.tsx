
import Header from '../components/Header'

type MyComponentProps = React.PropsWithChildren<{}>;
function Layout({children}: MyComponentProps) {
  
  return (
    <>
          <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light h-screen w-screen">
            <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
            </filter>
            <rect className='h-screen w-screen' filter="url(#noise)"></rect>
          </svg>
        <Header/>
        <div className='w-auto h-auto'>{children}</div>

    </>

  )
}

export default Layout