import Navbar from './navbar'
import Footer from './footbar'
 
export default function Layout({ children }:any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}