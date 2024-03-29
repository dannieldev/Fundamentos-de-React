import React from 'react';
import '../assets/style/components/Categories.scss'

const Categories = ({children,title}) =>(
    <div className="categories">
        <h2 class="categories__title">{title}</h2>
        {children}
    </div>
);

export default Categories;