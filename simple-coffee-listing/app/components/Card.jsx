import React from 'react';
import Image from 'next/image';

const Card = ({ product }) => {
    const { name, image, price, rating, votes, popular, available } = product;

    return (
        <section className="flex w-64 flex-col gap-2 pb-3 font-semibold text-cream">
            <figure>
                {popular && (
                    <span className="absolute m-2 rounded-full bg-yellow px-2 py-0.5 text-[10px] text-black">
                        Popular
                    </span>
                )}
                <Image
                    className="rounded-xl"
                    src={image}
                    alt="ima"
                    width={260}
                    height={160}
                />
            </figure>
            <div className="mt-1 flex items-center justify-between">
                <span className="">{name}</span>
                <span className="rounded bg-lime px-2 py-1 text-xs font-bold text-black">
                    {price}
                </span>
            </div>
            <footer className="flex items-center gap-1 text-sm">
                <Image
                    src={rating ? '/images/Star_fill.svg' : '/images/Star.svg'}
                    alt="star"
                    width={24}
                    height={24}
                />
                <span>{rating}</span>
                <span className="text-grey">
                    {rating ? `(${votes} votes)` : 'No ratings'}
                </span>
                {!available && (
                    <span className="ml-auto text-sm text-orange">
                        Sold out
                    </span>
                )}
            </footer>
        </section>
    );
};

export default Card;
