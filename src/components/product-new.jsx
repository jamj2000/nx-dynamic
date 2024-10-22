import { revalidatePath } from "next/cache";


async function createProducto(formData) {
    'use server'
    const [name, description, price] = formData.values()

    const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        body: JSON.stringify({ name, description, price: +price, created: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/products')
}



function ProductNew() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Name</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='descripcion'>Description:</label>
            <input required id='descripcion' name='descripcion' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='precio'>Price</label>
            <input required id='precio' name='precio' type='number' step='0.01' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={createProducto} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Save product
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Reset fields
                </button>
            </div>
        </form>
    );
}

export default ProductNew;