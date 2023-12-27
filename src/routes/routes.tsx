import { Route, Routes } from 'react-router-dom'
import Home from '@/pages'

function GlobalRoutes () {
  return (
    <div className="rounded-lg bg-[#f8f4eb]">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default GlobalRoutes
