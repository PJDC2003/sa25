import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bgPhotos = [
    '../src/assets/img/home_bg/bg-image1.webp',
    '../src/assets/img/home_bg/bg-image2.webp',
    '../src/assets/img/home_bg/bg-image3.webp',
    '../src/assets/img/home_bg/bg-image4.webp',
    '../src/assets/img/home_bg/bg-image5.webp',
    '../src/assets/img/home_bg/bg-image6.webp',
    '../src/assets/img/home_bg/bg-image7.webp',
    '../src/assets/img/home_bg/bg-image8.webp',
    '../src/assets/img/home_bg/bg-image9.webp',
];

const Welcome = () => {
    const [bgImage, setBgImage] = useState('');

    useEffect(() => {
        const randomImage = bgPhotos[Math.floor(Math.random() * bgPhotos.length)];
        setBgImage(randomImage);
    }, []);

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="relative bg-fixed left-0 top-0 w-full min-h-fit bg-lightblue bg-center bg-cover z-30 flex">
            <div className="z-40 w-full min-h-screen top-0 bg-transparent flex flex-col justify-center items-center">
                <div className="w-full mx-auto text-center shadow-md lg:shadow-xl bg-white bg-opacity-90">
                    <div className="container py-8">
                        <img src="../src/assets/img/logos/institutional/Beyond_Gravity_Powered.png" alt="Semana Aeroespacial" className="mx-auto -mt-4 opacity-100 w-full h-auto sm:w-auto sm:h-36" />
                        <p className="mt-4 font-normal text-muted">
                            The event Semana Aeroespacial is put together by{' '}
                            <a className="text-primary_dark hover:opacity-50 focus:opacity-50 transition duration-300" href="https://aerotec.pt" target="_blank">
                                AeroTéc
                            </a>{' '}
                            and allows for students attending{' '}
                            <a className="text-primary_dark hover:opacity-50 focus:opacity-50 transition duration-300" href="https://tecnico.ulisboa.pt/" target="_blank">
                                IST
                            </a>{' '}
                            to contact with industries of the Aeronautic/Aerospace field.
                        </p>
                    </div>
                </div>
                <div className="w-11/12 mx-auto mt-6 text-center lg:mx-auto xl:mt-10 flex flex-col lg:flex-row gap-6">
                    <div className="mx-auto h-1/3 pt-35">
                        <motion.h1 className="text-center font-light text-white text-8xl 2xl:text-9xl 3xl:text-12xl font-hallo" initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
                            2025
                        </motion.h1>
                        <motion.p
                            className="coords text-center text-white xl:text-lg 2xl:text-2xl 3xl:text-3xl 3xl:pt-10 font-hallo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: 'easeOut',
                                delay: 1,
                            }}
                        >
                            N 38&deg; 44&apos; 7.19&quot; W -9&deg; 08&apos; 12.00&quot;
                        </motion.p>
                        <motion.p
                            className="text-center text-white xl:text-lg 2xl:text-2xl 3xl:text-3xl font-hallo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: 'easeOut',
                                delay: 1.5,
                            }}
                        >
                            17/02 to 21/02
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
