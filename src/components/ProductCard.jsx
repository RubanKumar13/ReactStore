
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
        <p className="mt-1 text-xs text-gray-500">{product.category}</p>
        <p className="mt-2 text-base font-bold">₹ {product.price}</p>
        <p className="mt-2 text-xs text-gray-600 line-clamp-3">{product.description}</p>
      </div>
    </div>
  )
}

