import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className='App'>
          {/* represents all of the children underneath */}
          <Outlet />
      </main>
    </>
    
  )
}

export default Layout