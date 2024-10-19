import {
    createProducto,
    updateProducto,
    deleteProducto,
    getProductos
} from '@/lib/actions'

import Buscar from '@/components/buscar'
import Link from 'next/link'


async function Productos({ query }) {

    const productos = await getProductos(query)

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))


    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de productos
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {
                    productos
                        .sort((a, b) => b.id - a.id)  // Orden inverso, de id mayor a menor
                        .map((producto) => (
                            <div key={producto.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                                <Link href={producto.id.toString()}>{producto.nombre}</Link>
                                <div className='flex gap-6'>
                                    <form>
                                        <input type="hidden" name='id' value={producto.id} />
                                        <button formAction={deleteProducto} title='ELIMINAR'>❌</button>
                                    </form>
                                </div>
                            </div>
                        ))

                }
            </div>
        </>
    )
}

export default Productos



