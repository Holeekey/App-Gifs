//apikey => Lp8GCeTC2kaPffrtgrT6jvZCe5u1CuRF


import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

  const {images,isLoading} = useFetchGifs(category);

  

  return (
    <>        
      <h3>{category}</h3>

      {//<LoadingMessage isLoading = {isLoading}/>
      }
      {
      
      isLoading && (<h2> Cargando... </h2>)

      }

      <div className="card-grid">

        {
        
         images.map((image) => (
          <GifGridItem 
            key={ image.id }
            { ... image}
          />
        )) 
        
        }

      </div>
      
    </>
  );
};
