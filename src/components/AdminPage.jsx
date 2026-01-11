import { useState } from 'react'
import ProductForm from '../components/ProductForm.jsx'
import { createProduct, updateProduct, deleteProduct } from '../api/client.js'
import useProduct  from '../hooks/useProduct.jsx'
import Pagination from '../components/Pagination.jsx'

export default function AdminPage() {
  const {
    items,
    total,
    page,
    limit,
    setPage,
    reload
  } = useProduct()

  const [editing, setEditing] = useState(null)

  async function handleCreate(payload) {
    await createProduct(payload)
    await reload()
  }

  async function handleUpdate(payload) {
    await updateProduct(editing.id, payload)
    setEditing(null)
    await reload()
  }

  async function handleRemove(id) {
    await deleteProduct(id)
    await reload()
  }

  return (
    <section className="space-y-10 max-w-7xl mx-auto mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Add New Product</h2>
          <ProductForm onSubmit={handleCreate} onCancel={() => {}} />
        </div>

        {editing && (
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              Edit Product: {editing.title}
            </h2>
            <ProductForm
              initialData={editing}
              onSubmit={handleUpdate}
              onCancel={() => setEditing(null)}
            />
          </div>
        )}
      </div>

      <div className='px-4 sm:px-6 lg:px-8 mb-10'>
        <h3 className="text-lg font-semibold mb-4">All Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-4 flex flex-col"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold">{p.title}</h4>
                <p className="text-xs text-gray-500">{p.category}</p>
                <p className="mt-1 text-base font-bold">₹ {p.price}</p>
                <p className="mt-2 text-xs text-gray-600 line-clamp-3">{p.description}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setEditing(p)}
                  className="flex-1 px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleRemove(p.id)}
                  className="flex-1 px-3 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <Pagination page={page} total={total} limit={limit} onChange={setPage} />
      </div>
    </section>
  )
}
