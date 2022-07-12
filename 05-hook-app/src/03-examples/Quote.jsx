import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({quote, author}) => {
    const pRef =  useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
    
    useLayoutEffect(() => {
        //console.log(pRef.current.getBoundingClientRect());
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });

    },[]);

    return (
        <>
            <blockquote
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-2">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote> 

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    );
}