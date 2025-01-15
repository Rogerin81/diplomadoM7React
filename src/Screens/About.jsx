import { useState } from "react";
import { useSelector } from "react-redux";
const About = () =>{
    const [nameComponent, setNameComponent] = useState('About')
    const count = useSelector((state) => state.product.initialValue)
    return(
        <>
            <p>Component name: {nameComponent}</p>
            Valor de Initial Value es <span>{count}</span>
            <button onClick={() => {setNameComponent('Curso de React!!!')}}>Press</button>
        </>
    );
}
export default About;