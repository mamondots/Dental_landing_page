import About from "../About/About";
import Appartment from "../Appartment/Appartment";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Blogs from "../Blogs/Blogs";
import Brands from "../Brands/Brands";
import Department from "../Department/Department";
import Doctors from "../Doctors/Doctors";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Benefits></Benefits>
            <About></About>
            <Services></Services>
            <Department></Department>
            <Appartment></Appartment>
            <Doctors></Doctors>
            <Subscribe></Subscribe>
            <Blogs></Blogs>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;