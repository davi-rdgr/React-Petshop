// import de css
import '../css/Header.css'
import '../css/Footer.css'
import '../css/Produtos.css'

// import de components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Produtos from '../components/Produtos'

const PageHomepage = () => {

    return (
        <>
            <Header />
            <Produtos />
            <Footer />
        </>
    )
}

export default PageHomepage;