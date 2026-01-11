export default function Pagination({ page, total, limit, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / limit))

  if (totalPages <= 1) return null

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 bg-white"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`px-3 py-1 border rounded-md text-sm ${
              p === page ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'
            }`}
          >
            {p}
          </button>
        )
      })}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 bg-white"
      >
        ›
      </button>
    </div>
  )
}
