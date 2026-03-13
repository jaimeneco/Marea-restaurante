import Image from "next/image";
const Nosotros = () => {
  return (
    <div className="bg-fondo w-screen overflow-x-hidden">
      <div className="grid grid-cols-1 min-h-screen w-[90%] md:w-[85%] lg:max-w-360 mx-auto items-center lg:grid-cols-3 ">
        <div className="hidden lg:flex justify-center pr-12">
          <h2 className="text-2xl font-medium text-primario lg:text-4xl lg:text-center lg:text-balance">
            Una nueva forma de saborear el Mediterráneo
          </h2>
        </div>
        <header className="relative flex flex-col items-center mt-20 lg:mt-12">
          <h1 className="absolute -top-4 left-1/2 -translate-1/2 text-primario text-[6.4rem] sm:text-[8.4rem] lg:text-[12rem] lg:top-0 font-semibold px-4 z-99">
            MAREA
          </h1>
          <div className="relative w-full overflow-hidden mx-auto">
            <nav className="z-2">
              <ul className="absolute top-46 left-1/2 -translate-1/2 text-white flex flex-col gap-6 lg:flex-row lg:top-40 lg:gap-8">
                <li className="cursor-pointer font-medium text-xl sm:text-2xl">
                  NOSOTROS
                </li>
                <li className="cursor-pointer font-medium text-xl sm:text-2xl">
                  CARTA
                </li>
                <li className="cursor-pointer font-medium text-xl sm:text-2xl">
                  CONTACTO
                </li>
              </ul>
            </nav>
            <Image
              src={"/imgs/B&W-sea.webp"}
              alt="Mar en blanco y negro"
              width={600}
              height={1200}
              priority
              className="object-cover object-top h-140 z-1 lg:h-160"
            />
          </div>
        </header>
        <div className="inline lg:hidden">
          <h2 className="text-2xl font-medium text-center text-balance text-primario">
            Una nueva forma de saborear el Mediterráneo
          </h2>
        </div>
        <div className="lg:pl-8 content-center">
          <h2 className="text-2xl font-medium text-primario lg:text-4xl text-center text-balance">
            Sabores que nacen del mar, diseñados para sorprender
          </h2>
        </div>
      </div>
      <main>
        <span className="h-2 bg-primario w-full block"></span>
        <section className="min-h-screen flex flex-col justify-between text-pretty w-[90%] md:w-[85%] lg:max-w-360 mx-auto py-6 lg:py-24">
          <p className="sm:text-lg font-normal lg:text-3xl lg:py-12">
            En MAREA creemos que el mar tiene historias que contar en cada
            plato.
          </p>
          <p className="sm:text-lg font-normal lg:text-3xl">
            Todo comenzó con nuestra pasión por el Mediterráneo y los sabores
            auténticos de sus costas. Cada mañana, antes de que amanezca,
            nuestro equipo recorre la lonja de Valencia en busca del mejor
            pescado y marisco.
          </p>
          <p className="sm:text-lg font-normal lg:text-3xl">
            Nos movemos entre redes recién recogidas, olor a sal y el bullicio
            de los pescadores que conocen cada secreto del mar. Seleccionamos
            cada pieza con mimo, pensando en cómo llegará a tu mesa y cómo te
            hará sentir. No es solo un pescado; es la memoria del Mediterráneo
            en su estado más puro.
          </p>
          <p className="sm:text-lg font-normal lg:text-3xl">
            Nuestra cocina transforma ese producto fresco en platos que cuentan
            historias, sabores que evocan olas y brisa marina. Cada plato es un
            viaje desde la lonja hasta tu paladar, donde tradición y creatividad
            se encuentran.
          </p>
          <p className="sm:text-lg font-normal lg:text-3xl">
            En MAREA no vendemos solo comida, compartimos una experiencia que
            conecta con el mar y con quienes lo respetan. Ven, siéntate y deja
            que cada bocado te transporte a la costa, donde todo empezó con
            pasión y un atardecer sobre el Mediterráneo.
          </p>
        </section>
        <span className="h-2 bg-primario w-full block"></span>
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[85%] lg:max-w-360 mx-auto py-6 place-content-between gap-6 lg:py-12">
          <Image
            src={"/imgs/pescado-1.webp"}
            width={600}
            height={400}
            alt="Imagen de pescadores"
            className="lg:justify-self-start"
          />
          <Image
            src={"/imgs/pescado-2.webp"}
            width={600}
            height={400}
            alt="Imagen de pescadores"
            className="lg:justify-self-end"
          />
          <Image
            src={"/imgs/pescado-3.webp"}
            width={600}
            height={400}
            alt="Imagen de pescadores"
            className="lg:justify-self-start"
          />
          <Image
            src={"/imgs/pescador.webp"}
            width={600}
            height={400}
            alt="Imagen de pescadores"
            className="lg:justify-self-end"
          />
        </section>
        <span className="h-2 bg-primario w-full block"></span>

        <section className="w-[90%] md:w-[85%] lg:max-w-360 mx-auto py-6 flex justify-start items-center gap-4 lg:py-12">
          <span className="text-4xl lg:text-6xl text-primario">➜</span>
          <h3 className="text-2xl lg:text-4xl text-primario">
            Una nueva forma de saborear el Mediterréano
          </h3>
        </section>
      </main>
    </div>
  );
};

export default Nosotros;
