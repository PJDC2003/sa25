// import SideNavbar from '../components/SideNavbar';
import Welcome from '../components/home/Welcome';
import Activities from '../components/home/Activities';
// import Team from '../components/home/Team';

const Home = () => {
    return (
        <div>
            {/* <SideNavbar /> */}
            <Welcome id="welcome" />
            <Activities id="activities" />
            {/* <Team id="team" /> */}
        </div>
    );
};

export default Home;
