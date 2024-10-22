import Productos from "@/components/productos";
import { Suspense } from "react";
import Link from "next/link";
import { db } from '@/lib/db'
import { revalidatePath } from "next/cache";


async function createProducto(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = formData.get('precio')

    const sql = 'insert into `productos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?)'
    const values = [nombre, descripcion, precio];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/productos')
}


function ProductosPage({ searchParams }) {
    const query = searchParams?.query || '';

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed right- text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                BASE DE DATOS (productos)
            </h1>
            <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

                <label htmlFor='nombre'>Nombre</label>
                <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

                <label htmlFor='descripcion'>Descripción:</label>
                <input required id='descripcion' name='descripcion' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

                <label htmlFor='precio'>Precio</label>
                <input required id='precio' name='precio' type='number' step='0.01' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

                <div className='col-span-2 grid gap-2'>
                    <button formAction={createProducto} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                        Guardar producto
                    </button>
                    <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                        Limpiar campos
                    </button>
                </div>
            </form>


            <Suspense fallback={
                <p className="text-5xl text-blue-200 font-bold animate-pulse">
                    Obteniendo datos ...
                </p>
            }>
                <Productos query={query} />
            </Suspense>
        </section>
    );
}

export default ProductosPage;