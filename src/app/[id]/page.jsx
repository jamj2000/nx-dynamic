import { getProductoById } from "@/lib/actions";
import { notFound } from 'next/navigation'

async function ProductoPage({ params }) {
    const [producto] = await getProductoById(params.id)
    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    if (!producto) notFound()

    return ( 
        <div>
            <p>{producto.nombre}</p>
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
        </div>
    );
}

export default ProductoPage;