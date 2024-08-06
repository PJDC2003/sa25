const Footer = () => {
    return (
        <footer className="relative z-20 bg-lightgrey">
            {/* CONTACTS */}
            <div className="md:w-3/5 mx-auto py-5 text-center text-white">
                <div className="pt-10 text-xl leading-tight lg:text-2xl">
                    <p>Contactos</p>
                </div>
                <div className="font-sans text-footer">
                    <p>Podes entrar em contacto connosco através de:</p>
                    <div className="mx-auto w-64 mt-6 font-sans text-footer grid grid-cols-5 justify-items-center sm:gap-x-0">
                        {/* FACEBOOK */}
                        <a href="https://www.facebook.com/AeroTecnico/?ref=br_rs" className="block h-auto w-auto mx-auto py-0 transition-colors duration-300">
                            <i className="mx-auto fa-brands fa-facebook fa-2x text-footer hover:text-footer_hover duration-300"></i>
                        </a>
                        {/* INSTAGRAM */}
                        <a href="https://www.instagram.com/aerotec.sa/" className="block h-full py-0 transition-colors duration-300">
                            <i className="mx-auto fab fa-instagram fa-2x text-footer hover:text-footer_hover duration-300"></i>
                        </a>
                        {/* MAIL */}
                        <a href="mailto:semana.aeroespacial@aerotec.tecnico.ulisboa.pt" className="block h-full py-0 transition-colors duration-300">
                            <i className="mx-auto fas fa-envelope fa-2x text-footer hover:text-footer_hover duration-300"></i>
                        </a>
                        {/* LINKEDIN */}
                        <a href="https://www.linkedin.com/company/aerot%C3%A9c/" className="block h-full py-0 transition-colors duration-300">
                            <i className="mx-auto fab fa-linkedin fa-2x text-footer hover:text-footer_hover duration-300"></i>
                        </a>
                        {/* YOUTUBE */}
                        <a href="https://www.youtube.com/channel/UCrTrDSNaMf44AtJlgar5Agw" className="block h-full py-0 transition-colors duration-300">
                            <i className="mx-auto fab fa-youtube fa-2x text-footer hover:text-footer_hover duration-300"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* AEROTEC LOGOS */}
            <div className="w-full mx-auto py-5 text-center lg:w-3/5 flex">
                {/* IST */}
                <div className="h-auto w-1/3 place-self-center">
                    <a href="https://tecnico.ulisboa.pt/pt/" target="_blank">
                        <img src="./src/assets/img/logos/institutional/IST_full_white.png" alt="Instituto Superior Técnico" className="lg:mx-auto clicable" />
                    </a>
                </div>
                {/* AEROTEC */}
                <div className="h-auto w-1/3 place-self-center">
                    <a href="https://aerotec.pt/" target="_blank">
                        <img src="./src/assets/img/logos/institutional/AeroTec_full_white.png" alt="AeroTéc" className="lg:mx-auto clicable" />
                    </a>
                </div>
                {/* EUROAVIA */}
                <div className="h-auto w-1/3 place-self-center">
                    <a href="https://euroavia.eu/" target="_blank">
                        <img src="./src/assets/img/logos/institutional/EURAVIA_mid_white.png" alt="Euroavia" className="lg:mx-auto clicable" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
