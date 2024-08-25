import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';

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
const Login = lazy(() => import('./pages/Login'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

const Loading = () => <div className="flex-grow flex items-center justify-center">Loading...</div>;

const routes = [
    { path: '/', element: <Home /> },
    { path: '/line-up', element: <LineUp /> },
    { path: '/companies', element: <Companies /> },
    { path: '/speakers', element: <Speakers /> },
    { path: '/prizes', element: <Prizes /> },
    { path: '/and-more', element: <AndMore /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NoMatch /> },
];

const App = () => {
    return (
        <AuthProvider>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        {routes.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </AuthProvider>
    );
};

export default App;
