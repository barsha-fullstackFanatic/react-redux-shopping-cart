import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add,remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,index}) => {
const dispatch=useDispatch();
console.log(item);


function deltecartitem(item){
dispatch(remove(item.id));
toast.error("Item removed");
}


  return <div className="flex flex-col h-[200px] w-[500px] border-b-[1px] border-b-black">
     <div><p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1 text-left">{item.title}</p></div>
      <img className="h-[120px] w-[160px] " src={item.image}/>
   <div className="flex flex-row gap-8">
    <div><p>{item.description.split(" ").slice(0,12).join(" ")}....</p></div> 
    <div><p className="text-green-600">${item.price}<span className="text-red-800 text-xl bg-red-400 hover:cursor-pointer scale-105 transition duration-200 "><MdDelete onClick={() => deltecartitem(item)}></MdDelete></span></p></div></div>
         </div>;
};

export default CartItem;
