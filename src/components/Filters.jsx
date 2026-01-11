import { CATEGORIES } from '../utils/categories.js'

export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sortField,
  sortOrder,
  setSortField,
  setSortOrder
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-4 bg-white p-4 border rounded-xl">
      <div className="flex-1">
        <label className="block text-xs text-gray-600">Search products</label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title..."
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="block text-xs text-gray-600">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-44 rounded-md border px-3 py-2 text-sm"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-600">Sort</label>
        <select
          value={`${sortField || ''}:${sortOrder || ''}`}
          onChange={(e) => {
            const [field, order] = e.target.value.split(':')
            setSortField(field || null)
            setSortOrder(order || null)
          }}
          className="mt-1 w-56 rounded-md border px-3 py-2 text-sm"
        >
          <option value=":">None</option>
          <option value="price:asc">Price: Low → High</option>
          <option value="price:desc">Price: High → Low</option>
          <option value="title:asc">Title: A → Z</option>
          <option value="title:desc">Title: Z → A</option>
        </select>
      </div>
    </div>
  )
}
