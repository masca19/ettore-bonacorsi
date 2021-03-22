import React from 'react';
import { Link } from "gatsby"
import './style.scss';
 
const Footer = () => {
 
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <span class="footer-column-title">Ettore Bonaccorsi</span>
          <a class="footer-column-link" href="#">Chi siamo</a>
          <a class="footer-column-link" href="#">I nostri fornitori</a>
          <a class="footer-column-link" href="#">Sei un produttore?</a>
        </div>
        <div class="footer-column">
          <span class="footer-column-title">Supporto</span>
          <a class="footer-column-link" href="#">Domande frequenti</a>
          <a class="footer-column-link" href="#">Spedizione</a>
          <a class="footer-column-link" href="#">Termini e condizioni</a>
          <a class="footer-column-link" href="#">Privacy</a>
        </div>
        <div class="footer-column">
          <span class="footer-column-title">Contatti</span>
          <a class="footer-column-link" href="#">email@ciao.com</a>
          <a class="footer-column-link" href="#">tel: 12345678</a>
        </div>
        <div class="footer-column">
          <span class="footer-column-title">Seguici</span>
          <a class="footer-column-link" href="#">ico</a>
          <a class="footer-column-link" href="#">ico</a>
          <a class="footer-column-link" href="#">ico</a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;