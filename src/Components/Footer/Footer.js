import { AiFillTwitterCircle } from "react-icons/ai"
import { GoMail } from "react-icons/go"
import { FaTelegram } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <section className="container-fluid secSpacer">
    <div className="conatiner">
    <footer className="footer border-t border-gray-200">
      <div className="footer__left">
        <p>Copyright {new Date().getFullYear()}</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
      {/* social icons */}
      <div className="flex items-center flex-col sm:flex-row">
        {/* twitter */}
        <AiFillTwitterCircle className="icon" />
        {/* mail */}
        <GoMail className="icon" />
        {/* telegram */}
        <FaTelegram className="icon" />
      </div>
    </footer>
    </div>
    </section>
  )
}

export default Footer
