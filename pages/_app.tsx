import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header.component'
import { UserContextProvider } from '../context/user.context'
import Footer from '../components/footer.component'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      <UserContextProvider>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <div className='flex-1'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </UserContextProvider>
    </div>
  )
}

export default MyApp
