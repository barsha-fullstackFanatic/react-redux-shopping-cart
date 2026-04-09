import Product from "../components/Product";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { products } from "../data"; // ✅ IMPORT YOUR DATA

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);

    // ✅ use local data instead of API
    setPosts(products);

    setLoading(false);
  }, []);

  return (
    <div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        
        {
          loading ? (
            <Spinner />
          ) : (
            posts.length > 0 ? (
              posts.map((post) => (
                <Product key={post.id} post={post} />
              ))
            ) : (
              <div>No Products available</div>
            )
          )
        }

      </div>
    </div>
  );
};

export default Home;
