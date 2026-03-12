import Image from "next/image";
import menu from "./menu-data.json";

const precio = menu.find((item) => item.precio)?.precio;
const Menu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col bg-primario justify-center ">
        <h1 className="text-white text-8xl mx-auto p-8">MAREA</h1>
        {/* <img src="" alt="Imagen del mar" /> */}
        <Image
          src={"/imgs/B&W-sea.webp"}
          alt="Imagen del mar"
          width={2000}
          height={200}
          className="object-cover max-h-40"
        />
      </header>
      <main className="flex flex-col items-center  bg-fondo flex-1 p-6 gap-6">
        {menu
          .filter((item) => item.platos)
          .map((categoria) => (
            <div key={categoria.categoria}>
              <div>
                {(categoria.categoria === "Principales" ||
                  categoria.categoria === "Postres") && <div>1</div>}
              </div>
              {categoria.platos.map((plato) => (
                <div key={plato.id}>
                  <h3>{plato.nombre}</h3>
                  <p>{plato.descripcion}</p>
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
