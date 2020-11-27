import React from 'react';
import '../assets/style/components/Categories.scss'

const Categories = ({children}) =>(
    <div className="categories">
        <h2 class="categories__title">Mi lista</h2>
        {children}
    </div>
);

export default Categories;