import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add,remove } from "../redux/Slices/CartSlice";
const Product = ({post}) => {

  const dispatch=useDispatch();

  function removefromcart(post){
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  function addtocart(post){
    dispatch(add(post));
    toast.success("Item added to cart");
  }


  const cart=useSelector((state)=>state.cart);
  return <div className="flex flex-col items-center justify-between line-clamp-1 w-[250px] h-[388px] hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
  
      <div className="text-gray-700 font-semibold text-lg truncate w-40 mt-1 text-left">{post.title.substring(0,16)}...</div>
      <div className="w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").slice(0,8).join(" ")}...</div>
      <div className="h-[180px]">
        <img className="h-full w-full object-contain" src={post.image}/>
     </div>
     
     <div className="flex justify-between gap-8 items-center w-full mt-5">
       <div><p>${post.price}</p></div>
      {<div>{
        cart.some((p)=> p.id===post.id)?(<button className="text-gray-700 border-2 mt-auto transition duration-300 ease-in border-gray-700 rounded-full font-semibold text-[12px] px-3 p-1 uppercase hover:bg-gray-700 hover:text-white" onClick={() => removefromcart(post)}>Remove from cart</button>):
        (<button className="text-gray-700 border-2 mt-auto transition duration-300 ease-in border-gray-700 rounded-full font-semibold text-[12px] px-3 p-1 uppercase hover:bg-gray-700 hover:text-white" onClick={() => addtocart(post)}>Add to cart</button>)}
</div>

      }
     
    </div>



  </div>;
};

export default Product;
