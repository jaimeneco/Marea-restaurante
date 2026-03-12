import Image from "next/image";
import menu from "./menu-data.json";

const Menu = () => {
  const precio = menu.find((item) => item.precio)?.precio;

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex flex-col bg-primario justify-center ">
        <h1 className="text-white text-8xl lg:text-[10rem] mx-auto p-4">
          MAREA
        </h1>
        {/* <img src="" alt="Imagen del mar" /> */}
        <Image
          src={"/imgs/B&W-sea.webp"}
          alt="Imagen del mar"
          width={2000}
          height={200}
          className="object-cover max-h-24 lg:max-h-32 w-full"
        />
      </header>
      <main className="flex flex-col items-center  bg-fondo flex-1 p-6">
        {menu
          .filter((item) => item.platos)
          .map((categoria) => (
            <div key={categoria.categoria}>
              <div className="my-2">
                {(categoria.categoria === "Principales" ||
                  categoria.categoria === "Postres") && (
                  <span className="h-1 w-40 bg-secundario block mx-auto"></span>
                )}
              </div>
              {categoria.platos.map((plato) => (
                <div key={plato.id} className="py-4 flex flex-col gap-1 ">
                  <h3 className="text-lg text-center">{plato.nombre}</h3>
                  <p className="text-sm text-center">{plato.descripcion}</p>
                </div>
              ))}
            </div>
          ))}
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-primario">{precio}</p>
          <p> (IVA incluido)</p>
        </div>
      </main>
    </div>
  );
};

export default Menu;
