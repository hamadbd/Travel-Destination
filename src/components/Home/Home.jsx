import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";
import "./Home.css";
function Home({ data }) {
    return (
        <>
            <Header/>
            <Tours data={data} />
            <Footer/>
        </>
    )
}

export default Home;