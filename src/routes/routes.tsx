import { Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/home'
import ListProducts from '@/pages/products'
import Market from '@/pages/market'
import DetailVision from '@/pages/detailVision'
import ListCommand from '@/pages/listCommand'
import ProfileUser from '@/pages/profileUser'

function GlobalRoutes() {
  return (
    <div className="rounded-lg bg-[#f8f4eb]">
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products/" element={<ListProducts />} />
        <Route path="/market/" element={<Market />} />
        <Route path="/detailVision/" element={<DetailVision />} />
        <Route path="/market/commands/" element={<ListCommand />} />
        <Route path="/user/profile/:id/" element={<ProfileUser />} />
      </Routes>
    </div>
  )
}

export default GlobalRoutes
