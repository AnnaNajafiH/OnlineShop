import axios from "axios";

const client=axios.create({
    baseURL:"http://localhost:8001"
})

export async function getProducts(){
    const {data}=await client("/Products")
    console.log(data);
    return data
}

export async function getProduct(id: string|number){
    const {data}=await client(`/Products/${id}`)
    return data
}


