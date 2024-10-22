import Buscar from '@/components/buscar'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'


async function deleteProduct(formData) {
    'use server'
    const id = formData.get('id')
    const response = await fetch('http://localhost:3001/products/' + id, {
        method: 'DELETE'
    })
    const data = await response.json()
    revalidatePath('/products')
}


async function Productos({ query }) {

    const response = await fetch('http://localhost:3001/products')
    const data = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))


    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                List of products
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {
                    data.sort((a, b) => b.id - a.id)  // Orden inverso, de id mayor a menor
                        .map((product) => (
                            <div key={product.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                                <Link href={`/products/${product.id}`}>{product.name}</Link>
                                <div className='flex gap-6'>
                                    <form>
                                        <input type="hidden" name='id' value={product.id} />
                                        <button formAction={deleteProduct} title='REMOVE'>❌</button>
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



