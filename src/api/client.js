import axios from 'axios'

export const API_URL = 'http://localhost:3001'
export const PRODUCTS_URL = `${API_URL}/products`

const client = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
})

export default client

export async function getProducts({
  page = 1,
  limit = 8,
  category,
  sortField,
  sortOrder,
  search
}) {
  const params = {
    _page: page,
    _limit: limit
  }

  
  if (category && category !== 'All') params.category = category

 
  if (sortField && sortOrder) {
    params._sort = sortField
    params._order = sortOrder
  }
  if (search) params.title_like = search

  const res = await client.get('/products', { params })
  const total = Number(res.headers['x-total-count'] || 0)
  return { data: res.data, total }
}



export async function createProduct(payload) {
  const res = await client.post('/products', payload)
  return res.data
}

export async function updateProduct(id, payload) {
  const res = await client.put(`/products/${id}`, payload)
  return res.data
}

export async function deleteProduct(id) {
  await client.delete(`/products/${id}`)
}
