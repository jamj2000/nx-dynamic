import Productos from '@/components/productos'
import { createProducto } from '@/lib/actions';
import { Suspense } from 'react';


export default async function Home({ searchParams }) {
  const query = searchParams?.query || '';

  return (
    <section className="min-h-screen max-w-[1024px] mx-auto px-10">
      <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
        NextJS: contenido dinámico
      </h1>
      <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

        <label htmlFor='nombre'>Nombre</label>
        <input id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

        <label htmlFor='descripcion'>Descripcion:</label>
        <input id='descripcion' name='descripcion' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

        <label htmlFor='precio'>Precio</label>
        <input id='precio' name='precio' type='number' step='0.01' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

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
  )
}

