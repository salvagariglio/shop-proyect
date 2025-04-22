import axios from 'axios'

export async function productsData() {
    const products1 = await axios.get(
        "https://fakestoreapiserver.reactbd.com/products"
    )
    const products2 = await axios.get(
        "https://fakestoreapiserver.reactbd.com/nextamazon"
    )
    const products3 = await axios.get(
        "https://fakestoreapiserver.reactbd.com/amazonproducts"
    )
    // Concatenamos los datos de los tres arrays
    const products = [...products1.data, ...products2.data, ...products3.data];


    return products
}

