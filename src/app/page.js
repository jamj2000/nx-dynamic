import Link from "next/link";



export default async function Home() {

  return (
    <section className="min-h-screen max-w-[1024px] mx-auto px-10">
      <h1 className='py-10 text-4xl text-blue-500 text-center border-b-4 border-b-blue-500'>
        NextJS: contenido dinámico
      </h1>

      <div className="h-[300px] flex flex-col gap-10 justify-center items-center">
        <div>
          <Link href="/productos" className="block text-2xl text-blue-400 font-bold">
            BASE DE DATOS
          </Link>
          Requisitos previos: Deberás tener una base de datos local.
        </div>

        <div>
          <Link href="/products" className="block text-2xl text-blue-400 font-bold">
            API REST
          </Link>
          Requisitos previos: Deberás tener un servidor para la API local.
          <pre className="text-pretty">
            cd  src/lib
            npx  json-server  api.json  -p 3001
          </pre>


        </div>

      </div>

    </section>
  )
}

