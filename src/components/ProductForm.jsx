import { useEffect, useState } from 'react'
import { CATEGORIES } from '../utils/categories.js'

const initial = {
  title: '',
  price: '',
  category: 'Men',
  description: '',
  image: ''
}

export default function ProductForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState(initial)

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || '',
        price: initialData.price || '',
        category: initialData.category || 'Men',
        description: initialData.description || '',
        image: initialData.image || ''
      })
    } else {
      setForm(initial)
    }
  }, [initialData])

  function updateField(k, v) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      ...form,
      price: Number(form.price)
    }
    onSubmit(payload)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div>
        <label className="block text-xs text-gray-600">Title</label>
        <input
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={form.title}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="Enter title"
          required
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600">Price</label>
        <input
          type="number"
          min="0"
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={form.price}
          onChange={(e) => updateField('price', e.target.value)}
          placeholder="Enter price"
          required
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs text-gray-600">Image URL</label>
        <input
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={form.image}
          onChange={(e) => updateField('image', e.target.value)}
          placeholder="https://..."
          required
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600">Category</label>
        <select
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={form.category}
          onChange={(e) => updateField('category', e.target.value)}
        >
          {CATEGORIES.filter((c) => c !== 'All').map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-xs text-gray-600">Description</label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={form.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter description"
          required
        />
      </div>

      <div className="md:col-span-2 flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-md border bg-white text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
        >
          Save Product
        </button>
      </div>
    </form>
  )
}
