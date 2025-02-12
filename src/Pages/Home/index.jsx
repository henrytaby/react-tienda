import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {  
  const [items, setItems] = useState(null)

  useEffect(()=>{
    const fetchData = async () => {
        try {
          // const response = await fetch("https://api.escuelajs.co/api/v1/products");
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      };
    fetchData();

  }, []);


  return (
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            items?.map(item =>(
              <Card key={item.id} data={item} />
            ))
          }
        </div>
        
      </Layout>
  )
}

export default Home
