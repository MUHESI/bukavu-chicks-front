import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/home'
import ListProducts from '../pages/products'

function GlobalRoutes() {
  return (
    <div className="rounded-lg bg-[#f8f4eb]">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products/" element={<ListProducts />} />

      </Routes>
    </div>
  )
}

export default GlobalRoutes
