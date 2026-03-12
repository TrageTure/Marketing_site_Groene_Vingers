import footerLogo from '../../assets/logo.svg'
import footerBg from '../../assets/ac38f520fbd768ad0d6909296c2636f27e95881e.svg'
import iconMail from '../../assets/37013c985bad02b576587cca014104caa75f712b.svg'
import iconPhone from '../../assets/2c1d53a461ba82114f7ef7c6069048a8f8eac9d2.svg'
import iconLocation from '../../assets/b069155a30e7b9064b32a6df1832e4c932be061b.svg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <img src={footerBg} alt="" />
      </div>
      <div className="footer__inner">
        <div className="footer__logo">
          <img src={footerLogo} alt="Groene Vingers" />
        </div>
        <div className="footer__right">
          <nav className="footer__nav">
            <a href="#" className="footer__nav-link">Home</a>
            <a href="#zoek" className="footer__nav-link">Zoek een tuin</a>
            <a href="#hoe-werkt-het" className="footer__nav-link">Hoe werkt het?</a>
            <a href="#over-ons" className="footer__nav-link">Over ons</a>
          </nav>
          <div className="footer__divider" />
          <div className="footer__contact">
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <img src={iconMail} alt="" />
              </div>
              <span className="footer__contact-text">info@groenevingers.be</span>
            </div>
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <img src={iconPhone} alt="" />
              </div>
              <span className="footer__contact-text">+32 456 32 38 61</span>
            </div>
            <div className="footer__contact-item footer__contact-item--top">
              <div className="footer__contact-icon">
                <img src={iconLocation} alt="" />
              </div>
              <span className="footer__contact-text footer__contact-text--multiline">
                {`Merbeekstraat 1,\n3360 Bierbeek`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
