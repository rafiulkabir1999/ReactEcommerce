import SingleProduct from './Singleproduct'
const ProductsList=(props)=>{
    
    return(
        props.products.map(p=>{
            return <SingleProduct product={p}/>
        })
    )
}
export default ProductsList;