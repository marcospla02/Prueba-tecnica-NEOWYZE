import Link from "next/link";

import LayoutMain from "@/components/layout";

const Home = () => {
  return (
    <LayoutMain>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">¡Bienvenido!</h1>
        <p className="text-xl mb-8 py-4 px-4">
          ¡Hola! Espero que estés muy bien. Quería compartir contigo el proyecto
          que preparé para la entrevista en NEOWYZE. Fue una experiencia
          increíble donde tuve la oportunidad de aprender a utilizar Tailwind
          CSS. Aunque nunca había utilizado Tailwind antes, gracias a la
          documentación disponible y a la ayuda de ChatGPT, pude sacarlo
          adelante. 😊
          <br />
          <br />
          Por cierto, quiero pedirte disculpas si no estaba permitido utilizar
          ChatGPT, ya que no vi ninguna indicación al respecto en el documento
          que me proporcionaron.😬😅
          <br/>
          ¡Espero que te guste el proyecto tanto como a
          mí y que estés tan emocionado como yo por esta oportunidad! 
        </p>
        <div className="flex justify-center">
          <div className="m-4">
            <Link href="/peliculas">Películas</Link>
          </div>
          <div className="m-4">
            <Link href="/personajes">Personajes</Link>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Home;
