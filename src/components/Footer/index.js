import React from "react"
import Facebook from "../../../static/icons/facebook.svg"
import Youtube from "../../../static/icons/youtube.svg"
import Instagram from "../../../static/icons/instagram.svg"
import "./style.scss"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column main">
          <span class="footer-column-title">Ettore Bonaccorsi</span>
          <a class="footer-column-link" href="#">
            Chi siamo
          </a>
          <a class="footer-column-link" href="#">
            I nostri fornitori
          </a>
          <a class="footer-column-link" href="#">
            Sei un produttore?
          </a>
        </div>
        <div class="footer-column support">
          <span class="footer-column-title">Supporto</span>
          <a class="footer-column-link" href="#">
            Domande frequenti
          </a>
          <a class="footer-column-link" href="#">
            Spedizione
          </a>
          <a class="footer-column-link" href="#">
            Termini e condizioni
          </a>
          <a class="footer-column-link" href="#">
            Privacy
          </a>
        </div>
        <div class="footer-column contacts">
          <span class="footer-column-title">Contatti</span>
          <a class="footer-column-link" href="#">
            email@ciao.com
          </a>
          <a class="footer-column-link" href="#">
            tel: 12345678
          </a>
        </div>
        <div class="footer-column social">
          <span class="footer-column-title">Seguici</span>
          <a class="footer-column-link" href="#">
            <Facebook />
          </a>
          <a class="footer-column-link" href="#">
            <Youtube />
          </a>
          <a class="footer-column-link" href="#">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
