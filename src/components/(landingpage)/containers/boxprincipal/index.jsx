import MeuComponenteEvento from "../../images/MeuComponenteEvento";
import BtnIngresso from "../../ui/button/BtnIngresso";
import BtnNovidades from "../../ui/button/BtnNovidades";

const BoxPrincipal = () => {

  
  return (
    <section id="BoxPrincipal">
      <div className="bgContainerImg">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin ">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>8 e 9 DE NOVEMBRO | SÃO PAULO</span>
                <h1>MAIOR EVENTO 100% BITCOIN DO BRASIL</h1>
                {/* gap de 16 com container de botão */}
                <div className="sc-gap-16 container-btn">
                  <BtnIngresso url="/ingressos">COMPRAR INGRESSO</BtnIngresso>
                  {/* botão do container principal */}
                  <BtnNovidades url="/">RECEBER NOVIDADES</BtnNovidades>
                </div>
              </div>

              <div className="btningresso-img container-com-gradiente ">
                {/* imagem do container principal esportado como componente */}
                <MeuComponenteEvento />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxPrincipal;
