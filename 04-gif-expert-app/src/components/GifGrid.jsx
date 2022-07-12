// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";


export const GrifGrid = ({category}) =>{
    const { images, isLoading } = useFetchGifs( category );

    //console.log({isLoading});
    // const [images, setImages] = useState([]);
    // const getImages = async () =>{
    //     const imgs = await getGifs(category);
    //     setImages(imgs);
    // }

    // useEffect( () =>{
    //     getImages();
    // },[] )

    return(
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                images.map( (image) => (
                    <GifItem
                        key={image.id}
                        // title={image.title}
                        // url={image.url}
                        {...image}
                    />
                ))
                }
            </div>
        </>
    )
}

GrifGrid.propTypes = {
    category: PropTypes.string.isRequired
}