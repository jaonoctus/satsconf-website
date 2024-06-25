import BoxPrincipal from "../components/(landingpage)/containers/boxprincipal";
import BoxBeneficios from "../components/(landingpage)/containers/boxbeneficios";
import BoxConvidados from "../components/(landingpage)/containers/boxconvidados";
import BoxGarante from "../components/(landingpage)/containers/boxgarante";
import BoxParceiros from "../components/(landingpage)/containers/boxparceiros";
// import BoxPatrocinadores from "../components/(landingpage)/containers/boxpatrocinadores";
import BoxSobre from "../components/(landingpage)/containers/boxsobre";


import FAQComponent from "../components/(landingpage)/containers/faq";

const Home = () => {

  return (
    
      <main>  
        <section className="container">
          <BoxPrincipal />
          <BoxBeneficios />
          <BoxSobre />
          <BoxConvidados />
          <BoxGarante />
          <BoxParceiros />
          <FAQComponent />
        </section>
      </main>
   
  );
};

export default Home;
