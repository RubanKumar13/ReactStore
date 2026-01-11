import { useEffect, useMemo, useState } from 'react'
import { getProducts, deleteProduct } from '../api/client.js'

export default function useProduct() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [page, setPage] = useState(1)
  const [limit] = useState(8)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sortField, setSortField] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)

  const query = useMemo(
    () => ({ page, limit, search, category, sortField, sortOrder }),
    [page, limit, search, category, sortField, sortOrder]
  )

  async function load() {
    try {
      setLoading(true)
      setError(null)
      const { data, total } = await getProducts(query)
      setItems(data)
      setTotal(total)
    } catch (err) {
      setError(err?.message || 'Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [query])

  async function handleDelete(id) {
    await deleteProduct(id)
    await load()
  }

  return {
    items,
    total,
    page,
    limit,
    loading,
    error,
    search,
    category,
    sortField,
    sortOrder,
    setPage,
    setSearch,
    setCategory,
    setSortField,
    setSortOrder,
    reload: load,
    handleDelete
  }
}
