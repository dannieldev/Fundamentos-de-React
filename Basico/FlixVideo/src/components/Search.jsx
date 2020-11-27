import React from 'react';
import '../assets/style/components/Search.scss'

const Search = () =>(
    <section class="main">
        <h2 class="main__title">¿Que quires ver hoy?</h2>
        <input aria-label="Buscar" class="input-search" tyepe="text" placeholder="Buscar..."/>
    </section>
);

export default Search;