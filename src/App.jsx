import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ProductsPage from './components/ProductPage.jsx'
import AdminPage from './components/AdminPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mt-6">
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  )
}
