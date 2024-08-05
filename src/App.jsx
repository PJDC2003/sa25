import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const LineUp = lazy(() => import('./pages/LineUp'));
const Companies = lazy(() => import('./pages/Companies'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Prizes = lazy(() => import('./pages/Prizes'));
const AndMore = lazy(() => import('./pages/AndMore'));
const SignUp = lazy(() => import('./pages/SignUp'));
const NoMatch = lazy(() => import('./components/NoMatch'));

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Suspense fallback={<div className="flex-grow flex items-center justify-center">Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/line-up" element={<LineUp />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/prizes" element={<Prizes />} />
                    <Route path="/and-more" element={<AndMore />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
};

export default App;
