import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/home'

function GlobalRoutes() {
  return (
    <div className="rounded-lg bg-[#f8f4eb]">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default GlobalRoutes
