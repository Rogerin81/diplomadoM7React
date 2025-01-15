import Home from '../../Screens/Home';
import Product from '../../Screens/Product';
import About from '../../Screens/About';
import Think from '../../Screens/Thinks';
import Counter from '../Counter/Counter';

import { Routes, Route } from 'react-router';
const Router =() => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="think" element={<Think />} />
            <Route path="about" element={<About />} />
            <Route path="counter" element={<Counter />} />
        </Routes>
    );
}
export default Router;