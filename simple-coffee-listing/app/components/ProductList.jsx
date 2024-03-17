import React from 'react';
import Card from './Card';

const ProductList = ({ list }) => {
    return (
        <section className="my-4 flex w-full max-w-[1024px] flex-col items-center gap-14 md:flex-row md:flex-wrap md:justify-center md:gap-8">
            {list.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;
