import Header from "../Header/Header";
import Tours from "../Tours/Tours";
import Footer from "../Footer/Footer";

function Home({ data }) {
    return (
        <>
            <Header/>
            <h1>hello</h1>
            <Tours data={data} />
            <Footer/>
        </>
    )
}

export default Home;