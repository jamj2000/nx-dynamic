import Link from "next/link";



export default async function Home() {

  return (
    <section className="min-h-screen max-w-[1024px] mx-auto px-10">
      <h1 className='py-10 text-4xl text-blue-500 text-center border-b-4 border-b-blue-500'>
        NextJS: contenido dinámico
      </h1>

      <div className="h-[300px] flex flex-col gap-10 justify-center items-center">
        <Link href="/productos" className="block text-2xl text-blue-400 font-bold">
          BASE DE DATOS (productos)
        </Link>
        <Link href="/products" className="block text-2xl text-blue-400 font-bold">
          API REST (products)
        </Link>
      </div>

    </section>
  )
}

