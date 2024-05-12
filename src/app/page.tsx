import LandingPage from '@/assets/landing-page.png';

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-text md:text-7xl">¡Bienvenido!</h1>
            <p className="text-lg mb-6 px-4 ">
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
              que me proporcionaron. 😬😅
              <br/>
              ¡Espero que te guste el proyecto tanto como a
              mí y que estés tan emocionado como yo por esta oportunidad! 
            </p>  
          </div>
          <div className="hidden md:block">
            <img src={LandingPage.src} alt="Tu imagen" className="mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
