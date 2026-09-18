class FooterInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer" style="margin-top: 10px;">
            <marquee behavior="scroll" direction="right">
                <a href="https://www.firefox.com" target="_blank"><img src="https://pixelsafari.neocities.org/buttons/1bw19.gif" alt="firefoxXD"></a>
                <img src="imagens/footer/miku.gif" alt="">
                <a href="https://neocities.org/" target="_blank"><img src="https://pixelsafari.neocities.org/buttons/1neo18.gif" alt="Neocities"></a>
                <img src="https://pixelsafari.neocities.org/buttons/2privacy.gif" alt="internetprivacy">
                <img src="https://pixelsafari.neocities.org/buttons/1nft.png" alt="antinft">
                <a href="https://pixelsafari.neocities.org/"><img src="https://pixelsafari.neocities.org/about/pixelsafari.gif" alt="pixelsafaributton"></a>
                <a href="https://dcavederps.neocities.org/" target="_blank"><img src="https://dcavederps.neocities.org/staticFiles/images/buttons/dcaveDerpsModernButton.gif" alt="dcavederpbutton"></a>
                <a href="https://daikonet.neocities.org/" target="_blank" style="display: inline-block;"><img src="https://daikonet.neocities.org/img/daikonet4.gif" alt="daikonetbutton"></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="https://pixelsafari.neocities.org/buttons/3no.png" alt="naoclica"></a>
                <a href="https://samtlokomemo.atabook.org/" target="_blank"><img src="https://pixelsafari.neocities.org/buttons/signguest.gif" alt="guestbook"></a>          
                <a href="https://scripted.neocities.org/" target="_blank"><img src="https://scripted.neocities.org/SCRIPTED-BUTTON.gif" alt="scripted"></a>
                <img src="https://cyber.dabamos.de/88x31/keep.gif" alt="fvckweb3">
            </marquee>
        </footer>
        <footer>
            Samtlokomemo © 2026
        </footer>
        `;
    }
}
customElements.define('footer-info', FooterInfo);

class HeaderInfo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header" style="height: 152px;">
                
        </header>
        <div id="headerArea">
            <nav id="navbar" style="margin-bottom: 10px;">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="gamedev.html">Gamedev</a></li>
                    <div style="display: inline-block; position: relative;">
                        <li style="position: relative;" id="updatesLink">
                            <a href="updates.html">Updates</a>
                        </li>
                    <p class="orbitingElement" style="position: absolute; top: -12px; left: -25px;" id="novoFloating">Novo!</p>
                    </div>
                    <li><a href="https://backloggd.com/u/Samtlokomemo/" target="_blank">Backloggd</a></li>
                </ul>
            </nav>
        </div>
        `;
    }
}
customElements.define('header-info', HeaderInfo);