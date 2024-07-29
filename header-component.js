class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
               
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #f8f9fa; /* Light background color */
                padding: 15px 30px;
                color: #333; /* Dark text color for contrast */
                position: relative;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
              }
              
              .navbar a {
                color: #333; /* Dark text color */
                text-decoration: none;
                padding: 8px 16px;
                transition: color 0.3s ease; /* Smooth transition for hover effect */
              }
              
              .navbar a:hover {
                color: #007bff; /* Light blue color on hover */
              }
              
              .navbar .menu-toggle {
                display: none;
                color: #333; /* Dark text color */
                font-size: 24px;
                cursor: pointer;
                transition: transform 0.3s ease;
              }
              
              .navbar .menu-toggle.open {
                transform: rotate(90deg);
              }
              
              /* Nav Links */
              .nav-links {
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 0;
                transition: max-height 0.7s ease-out, opacity 0.7s ease-out;
                max-height: none;
                opacity: 1;
              }
              
              .nav-links.open {
                max-height: 500px;
                opacity: 1;
              }
              
              .nav-links li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                position: relative;
                cursor: pointer;
              }
              
              .nav-links li a {
                text-decoration: none;
                font-weight: 600;
                text-align: center;
                display: flex;
                align-items: center;
              }
              
              .nav-links .dropdown-content {
                display: none;
                position: absolute;
                top: 100%;
                background-color: #fff; /* White background for dropdown */
                list-style: none;
                padding: 0;
                margin: 0;
                min-width: 200px;
                z-index: 1;
                max-height: 0;
                overflow: hidden;
                opacity: 0;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow for dropdown */
                transition: max-height 0.7s ease-out, opacity 0.7s ease-out;
              }
              
              .nav-links .dropdown-content li a {
                padding: 10px;
                text-align: left;
                transition: background-color 0.3s ease; /* Smooth transition for hover effect */
                display: block; /* Ensure it takes up the full width */
                width: 100%; /* Ensure full width */
                box-sizing: border-box; /* Include padding in width calculation */
              }
              
              .nav-links .dropdown-content li a:hover {
                background-color: #f1f1f1; /* Light grey background on hover */
              }
              
              .nav-links li.active .dropdown-content {
                display: block;
                max-height: 500px;
                opacity: 1;
              }
              
              .arrow {
                margin-left: 5px;
                transition: transform 0.3s ease;
              }
              
              .nav-links li.active .arrow {
                transform: rotate(180deg);
              }
              
              /* Responsive Design */
              @media (max-width: 768px) {
                .navbar {
                  flex-direction: column;
                  justify-content: flex-end;
                  align-items: flex-end;
                }
              
                .nav-links {
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  max-height: 0;
                  overflow: hidden;
                  opacity: 0;
                }
              
                .navbar .menu-toggle {
                  display: block;
                }
              
                .nav-links.open {
                  max-height: 500px;
                  opacity: 1;
                }
              
                .nav-links .dropdown {
                  width: 100%;
                  text-align: center;
                  padding: 10px 0;
                  // border-top: 1px solid #333;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
              
                .nav-links .dropdown-content {
                  position: relative;
                  top: 0;
                  width: 100%;
                  max-height: 0;
                  opacity: 0;
                  transition: max-height 0.7s ease-out, opacity 0.7s ease-out;
                }
              
                .nav-links li.active .dropdown-content {
                  max-height: 500px;
                  opacity: 1;
                }
              
                /* Disable hover effects for mobile */
                .nav-links a:hover, 
                .navbar a:hover,
                .nav-links .dropdown-content li a:hover {
                  color: inherit;
                  background-color: inherit;
                }
              
              
              }
            </style>
            <header>
            <nav class="navbar">
                <div class="toglo">
                    <div class="menu-toggle" id="menu-toggle" aria-label="Menu">☰</div>
                </div>
                <ul class="nav-links" id="nav-links">
                    <li><a href="index.html">Accueil</a></li>
                    <li class="dropdown">
                        <a href="#business-law" aria-haspopup="true" aria-expanded="false">Droit des affaires <span class="arrow">▼</span></a>
                        <ul class="dropdown-content">
                            <li><a href="#societies">Droit des sociétés</a></li>
                            <li><a href="#commercial-law">Droit commercial & économique</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#tax-law" aria-haspopup="true" aria-expanded="false">Droit fiscal <span class="arrow">▼</span></a>
                        <ul class="dropdown-content">
                            <li><a href="fiscalité-des-entreprises.html">Fiscalité des entreprises</a></li>
                            <li><a href="#patrimonial-tax">Fiscalité patrimoniale</a></li>
                            <li><a href="#real-estate-tax">Fiscalité immobilière</a></li>
                            <li><a href="#indirect-tax">Avocat fiscalité indirecte</a></li>
                            <li><a href="#tax-disputes">Avocat contrôles et contentieux fiscaux</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#social-law" aria-haspopup="true" aria-expanded="false">Droit social <span class="arrow">▼</span></a>
                        <ul class="dropdown-content">
                            <li><a href="#dismissal">Licenciement</a></li>
                            <li><a href="#conventional-break">Rupture conventionnelle</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#real-estate" aria-haspopup="true" aria-expanded="false">Immobilier et entreprise <span class="arrow">▼</span></a>
                        <ul class="dropdown-content">
                            <li><a href="#property-sale">Bien à vendre</a></li>
                        </ul>
                    </li>
                    <li><a href="#fees">Honoraire</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);
