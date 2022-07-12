import { useState } from "react";

import { AddCategory, GrifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GrifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch']);
    //console.log(categories);
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //console.log(newCategory);
        //categories.push(newCategory);
        // const entrada = document.querySelector('input');
        //console.log(entrada);
        // setCategories( cat => [...cat, 'Valor']);
        // setCategories([entrada.value,...categories]);
    }

    return(
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory //setCategories={ setCategories }
                onNewCategory={event => onAddCategory(event) }
            />

            {/* Listado de Gif */}
            {categories.map(category =>
            (
                <GrifGrid key={category} category={category} />
            )
            )}
        </>
    )
}