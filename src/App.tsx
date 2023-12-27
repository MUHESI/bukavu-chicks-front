import { useEffect, useState } from 'react'
import GlobalRoutes from '@/routes/routes'
import { SelectedPage } from '@/types'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

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
    <div className="app bg-gray-20 flex flex-col justify-between min-h-screen">
      <div className="bg-gray-20 flex-grow mt-6">
        <div className="w-[90%]  mx-auto my-6">
          <GlobalRoutes />
        </div>
      </div>
    </div>
  )
}

export default App
