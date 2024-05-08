
import Header from '../components/Header'

type MyComponentProps = React.PropsWithChildren<{}>;
function Layout({children}: MyComponentProps) {
  
  return (
    <>
          <svg className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light h-screen w-full">
            <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
            </filter>
            <rect className='h-screen w-full' filter="url(#noise)"></rect>
          </svg>
        <Header/>
        <div>{children}</div>

    </>

  )
}

export default Layout