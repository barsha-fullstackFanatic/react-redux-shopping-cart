import {useEffect} from "react"
import Product from "../components/Product"
import {useState} from "react"
import Spinner from "../components/Spinner"
const Home = () => {
  
  const API_URL = "https://fakestoreapi.com/products";

  
  const[loading,setloading]=useState(false);
  const [posts,setposts]=useState([]);
  
async function fetchData(){
   
    setloading(true);
  try{
  const output =await fetch(API_URL);
  const content= await output.json();
  setposts(content);
  console.log(content);
  
}catch(error){
    console.log("no data received")
    setposts([]);
  }
  setloading(false);


}
// console.log(posts);

useEffect(()=>{
  fetchData();
},[])



  return <div>
 {
  <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">{
loading ? (<Spinner></Spinner>):( posts.length>0 ?
  posts.map((post) => {
    return <Product key={post.id} post={post}></Product>
  }): (<div>No Products available</div>)
)
}</div>
 }




  </div>
};

export default Home;
