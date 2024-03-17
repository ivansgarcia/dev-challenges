import React from 'react';

const Header = () => {
    return (
        <section className="mt-[60px] flex w-full flex-col items-center gap-2">
            <h1 className="text-[32px] font-bold text-cream">Our Collection</h1>
            <p className="text-center font-semibold leading-tight text-grey md:px-20 xl:px-72">
                Introducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in
                small batches and shipped fresh weekly.
            </p>
        </section>
    );
};

export default Header;
