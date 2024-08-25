import CarouselSponsors from './CarouselSponsors';

const Atividades = () => {
    return (
        <div className="relative z-10 w-full py-10 flex flex-col items-center justify-center bg-lightgrey text-white">
            {/* CV Box */}
            <div className="flex flex-col items-center justify-center w-full px-6 py-6 mx-auto bg-white shadow-lg rounded-lg lg:w-10/12">
                <h1 className="mb-3 text-xl font-bold md:text-2xl text-gray-800">Faz upload do teu CV!</h1>

                <p className="text-base font-medium text-center md:text-lg text-gray-700">Queres ter o teu CV disponível para que empresas do ramo possam reconhecer o teu potencial?</p>
                <p className="text-sm text-center md:text-base text-gray-700">Submete o teu curriculum vitae e dá o próximo passo no teu percurso profissional!</p>
                <p className="text-sm text-center md:text-base text-gray-700">
                    Se a sua empresa participou no nosso evento, conheça os nossos currículos{' '}
                    <a href="https://aerotec.pt/cv-auth" target="_blank" className="text-primary_dark hover:opacity-50 focus:opacity-50 transition duration-300">
                        aqui
                    </a>
                    .
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-4">
                    <a href="https://forms.gle/UxH7dQQxbJtMgjcz6" target="_blank" className="transition duration-200 transform hover:scale-105 hover:shadow-xl">
                        <button className="p-2 text-white rounded-md bg-deepblue w-52 lg:px-10">SUBMETE AQUI</button>
                    </a>
                </div>
            </div>

            {/* <CarouselSponsors /> */}
        </div>
    );
};

export default Atividades;
