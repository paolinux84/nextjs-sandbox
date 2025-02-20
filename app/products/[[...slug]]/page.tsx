import React from 'react';

interface Props {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ sortOrder: string }>;
}

const ProductsPage = async ({ params, searchParams }: Props) => {
    const { slug } = await params;
    const { sortOrder } = await searchParams;

    return (
        <>
            <div>ProductsPage</div>
            <p>Slug: {JSON.stringify(slug)}</p>
            <p>Sort Order: {sortOrder}</p>
        </>
    );
};

export default ProductsPage;