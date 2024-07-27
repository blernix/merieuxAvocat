class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
               
.footer {
    background-color: #1B3A57;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
            </style>
            <footer class="footer">
            <span>&copy; 2024 Cabinet de Maître Jean-Claude MÉRIEUX. Tous droits réservés.</span>
        </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);