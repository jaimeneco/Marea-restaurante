"use client";
import Image from "next/image";
import { useState } from "react";

const datosPlatos = [
  {
    id: 1,
    name: "Ostras del mediterráneo con limón",
    price: 14,
    img: "/imgs/pescado-1.webp",
    layout: "izquierda",
  },
  {
    id: 2,
    name: "Ostras del mediterráneo con limón",
    price: 14,
    img: "/imgs/pescado-1.webp",
    layout: "izquierda",
  },
  {
    id: 3,
    name: "Ostras del mediterráneo con limón",
    price: 14,
    img: "/imgs/pescado-1.webp",
    layout: "derecha",
  },
  {
    id: 4,
    name: "Ostras del mediterráneo con limón",
    price: 14,
    img: "/imgs/pescado-1.webp",
    layout: "derecha",
  },
];

const Platos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxImagePerPage = 10;
  const start = (currentPage - 1) * maxImagePerPage;
  const end = start + maxImagePerPage;
  const totalPages = Math.ceil(datosPlatos.length / maxImagePerPage);
  const displayData = datosPlatos.slice(start, end);

  const handleMorePage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handleLessPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

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
      <main className="flex flex-col items-center bg-fondo flex-1 pb-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {datosPlatos.map((plato) => (
            <div
              key={plato.id}
              className={`w-full border-t-6 border-t-primario flex justify-between ${plato.layout === "izquierda" ? "flex" : "flex-row-reverse"}`}
            >
              <div className="p-4 flex flex-col lg:p-8 justify-between">
                <p className="text-pretty">{plato.name}</p>
                <p className="text-right">{plato.price} €</p>
              </div>
              <Image
                src={plato.img}
                alt="imagen de un plato"
                width={400}
                height={200}
                className="object-cover max-w-40 lg:max-w-60 w-full"
              />
            </div>
          ))}
        </section>
        <div className="w-full border-t-6 border-t-primario p-4 flex justify-center">
          <p>
            {currentPage} de {totalPages}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Platos;
