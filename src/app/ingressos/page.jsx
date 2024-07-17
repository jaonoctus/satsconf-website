import BtnIngresso from "@/components/(landingpage)/ui/button/BtnIngresso";
import BtnNovidades from "@/components/(landingpage)/ui/button/BtnNovidades";
import BoxTabelaIngresso from "@/components/(landingpage)/pages/ingresso/boxtabelaingresso";
import ImageIgresso from "@/components/(landingpage)/images/ImageIngresso";
import IngressoBtn from "@/components/(landingpage)/ui/modal/modalBtn";
import FAQ from "@/components/(landingpage)/pages/ingresso/faqingresso";

import cookie from "js-cookie";

const Ingressos = ({ children }) => {
  return (
    <section id="Ingressos">
      {/* Aqui é onde você renderiza children */}
      {children}

      <div className="bgContainerImg ">
        <div className="bgContainerPrincipal">
          <div className=" bgContainerMargin">
            <div className="boxprincipal">
              {/* caixa co container com fonte do titulo */}
              <div className="sc-bg-container krona-one-regular ">
                <span>8 e 9 DE NOVEMBRO | SÃO PAULO</span>
                <h1>INGRESSOS SATSCONF</h1>
                {/* gap de 8 com container de botão */}
                <div className="sc-gap-8 container-btn">
                  <BtnIngresso url="#comprarqui"onClick={() =>{
            cookie.set("btn_lp_global-buy", "btn_55117878", {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'strict'
            })
          }}>
                    COMPRAR INGRESSO
                  </BtnIngresso>
                  {/* botão do container principal */}
                  <BtnNovidades url="https://chat.whatsapp.com/JLDl4QZwwXb1htqScSJXgq">COMPRAR EM GRUPO</BtnNovidades>
                </div>
              </div>

              <div className="btningresso-img container-com-gradiente">
                {/* imagem do container principal da pagina de ingresso esportado como componente */}
                <ImageIgresso />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bgContainerComprarIngresso">
        <div className=" krona-one-regular">
          <div className="boxTitle containerFixoIngresso">
            <h2>INGRESSOS</h2>
            <p className="sc-fz-18 sora-light ">
              Garanta seu ingresso para a terceira edição do maior evento 100%
              Bitcoin do Brasil
            </p>
          </div>
          <div>
            <IngressoBtn />
          </div>
        </div>
      </div>
      <div>
        <BoxTabelaIngresso />
      </div>
      <div>
        <FAQ />
      </div>
    </section>
  );
};

export default Ingressos;
