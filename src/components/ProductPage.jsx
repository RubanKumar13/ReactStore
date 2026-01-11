import useProduct from '../hooks/useProduct.jsx'
import ProductCard from './ProductCard.jsx'
import Filters from './Filters.jsx'
import Pagination from './Pagination.jsx'

export default function ProductPage() {
  const {
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
    setSortOrder
  } = useProduct()

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'> 
      <div className="mb-4">
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortField={sortField}
          sortOrder={sortOrder}
          setSortField={setSortField}
          setSortOrder={setSortOrder}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Pagination page={page} total={total} limit={limit} onChange={setPage} />
    </section>
  )
}

