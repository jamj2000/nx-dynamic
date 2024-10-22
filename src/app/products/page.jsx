import Link from "next/link";
import Fallback from "@/components/fallback";
import ProductList from "@/components/product-list";
import ProductNew from "@/components/product-new";
import { Suspense } from "react";



function ProductosPage({ searchParams }) {
    const query = searchParams?.query || '';

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed right- text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                API REST
            </h1>

            <Suspense fallback={ <Fallback>New product ... </Fallback> }>
                <ProductNew  />
            </Suspense>

            <Suspense fallback={ <Fallback>Retrieving data ... </Fallback> }>
                <ProductList query={query} />
            </Suspense>
        </section>
    );
}

export default ProductosPage;