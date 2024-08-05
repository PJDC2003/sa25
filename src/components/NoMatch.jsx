import useDocumentTitle from '../hooks/useDocumentTitle';

const NoMatch = () => {
    useDocumentTitle('404 - SA');

    return (
        <div>
            <div className="bg-lightblue bg-nomatch fixed top-0 left-0 z-10 w-full bg-center bg-cover h-full"></div>
            <div className="container relative z-20 flex items-center w-full h-screen">
                <div className="container flex flex-col gap-10 items-center justify-center px-5 text-black md:flex-row">
                    <div className="max-w-md ml-4 sm:w-full md:w-2/3 lg:w-3/4 flex flex-col gap-4">
                        <p className="text-5xl font-bold text-center text-white md:text-8xl">404</p>
                        <p className="text-lg font-semibold leading-normal text-center text-white md:text-2xl ">Sorry, the page you were looking for seems to be lost in space. </p>
                        <p className="mb-8 text-base text-center text-white md:text-xl ">This page cannot be found, check all the other amazing pages we have for you at our home page. </p>
                    </div>
                    <a href="/">
                        <button className="button w-full">Back to homepage</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;
