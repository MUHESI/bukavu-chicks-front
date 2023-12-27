import { useEffect, useState } from 'react'
import GlobalRoutes from '@/routes/routes'
import { SelectedPage } from '@/types'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  //
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <main className="app bg-gray-20 flex flex-col justify-between min-h-screen">
      <div className="bg-gray-20 flex-grow mt-6">
        <section>
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </section>
        <section className="w-[90%]  mx-auto my-6">
          <GlobalRoutes />
        </section>

      </div>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
