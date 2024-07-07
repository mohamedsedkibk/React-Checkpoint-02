import Cart from "./Cart";
const CartList = ({data}) => {
  return (
    <div>

      {data.map((elm) => (
        <Cart data={elm}  />
      ))}
    
    
    </div>
  );
} ;

export default CartList 

