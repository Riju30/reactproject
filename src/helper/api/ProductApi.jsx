
const url = "https://fakestoreapi.com/products"

export const productDetails = async (id) => {
    const res = await fetch(`${url}/${id}`)
    const data = await res.json()
    return data
}