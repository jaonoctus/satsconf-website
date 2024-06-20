import Link from "next/link";
import MeuComponenteLogo from "../images/MeuComponenteLogo";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bgContainerFooter">
      <div className="footerContainer">
        <div className="logo">
          <div className="containerLogoFooter">
            <MeuComponenteLogo /> {/* Use the imported component */}
          </div>

          <div>
            <p>Satsconf. &copy; 2024 </p>
            <Link href="https://www.satsconf.com.br/politica">
              Política de Privacidade
            </Link>
          </div>
          <div className="collumn">
            <h2>Nos acompanhe</h2>
            <ul>
              <li>
                <Link href="https://t.me/satsconf">
                  <FaTelegramPlane style={{ color: "white" }} />
                  Entre no grupo do Telegram
                </Link>
              </li>
              <li>
                <Link href="https://x.com/satsconf_">
                  <FaTwitter style={{ color: "white" }} /> Acompanhe o Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/satsconf.btc">
                  <FaInstagram style={{ color: "white" }} />
                  Acompanhe o Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
