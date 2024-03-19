'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import defaultList from '../simple-coffee-listing-data.json';
import getProductList from '../controllers/productListController';
import ProductList from './ProductList';
import Image from 'next/image';

const Collection = () => {
    const [productList, setProductList] = useState(null);
    const [showAvailable, setShowAvailable] = useState(false);

    useEffect(() => {
        getProductList()
            .then((data) => setProductList(data))
            .catch(() => {
                return setProductList(defaultList);
            });
    }, []);

    const filteredList = showAvailable
        ? productList.filter((product) => product.available)
        : productList;

    return (
        <main className="z-10 w-full mt-40 flex max-w-96 flex-col items-center gap-5 rounded-xl bg-dark-grey bg-[url('/images/vector.svg')] bg-[right_-63px_top_35px] bg-no-repeat p-7 pb-12 md:max-w-none md:w-[70%] md:bg-[right_100px_top_40px] xl:w-[85.5%] xl:bg-[right_305px_top_40px]">
            <Header />
            <nav className="ml-6 flex justify-center gap-2 text-sm font-semibold text-cream md:ml-0 md:gap-4">
                <button
                    onClick={() => setShowAvailable(false)}
                    className={`${!showAvailable ? 'bg-opacity-100' : 'bg-opacity-0 hover:bg-opacity-25'} rounded-lg bg-grey px-3 py-2`}
                >
                    All Products
                </button>
                <button
                    onClick={() => setShowAvailable(true)}
                    className={`${showAvailable ? 'bg-opacity-100' : 'bg-opacity-0 hover:bg-opacity-25'} rounded-lg bg-grey px-3 py-2`}
                >
                    Available Now
                </button>
            </nav>
            {productList ? (
                <ProductList list={filteredList} />
            ) : (
                <div className="animate-pulse-fast my-4 w-28 text-cream">
                    <Image
                        src="/images/dots.png"
                        alt="loading"
                        width={256}
                        height={128}
                    />
                </div>
            )}
        </main>
    );
};

export default Collection;
