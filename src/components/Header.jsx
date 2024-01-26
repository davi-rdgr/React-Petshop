import petshopIcon from '../assets/svg/petshopIcon.svg';
import carrinhoIcon from '../assets/svg/carrinhoIcon.svg'
import PageProdutos from '../pages/PageProdutos'

const Header = () => {

    return (
        <header>
            <section className="header-section">
                <div className="header-topside">
                    <a href="/páginas/index.html"><img className="petshop-icon" src={petshopIcon} alt="icone petshop" /></a>

                    <div className="header-group-bar">
                        <form action="/resultado-da-pesquisa" method="get">
                            <span className="header-lupa"></span>
                            <input className="header-searchbar" type="text" name="q" placeholder="Pesquisar" />
                        </form>
                        <a href="/páginas/carrinhoVazio.html"><img className="carrinhoSvg" src={carrinhoIcon}
                            alt="icone carrinho" /></a>
                    </div>
                    <nav className="header-nave">
                        <ul>
                            <a href="/páginas/cadastroLogin.html">
                                <li>Entrar|Cadastrar</li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <div className="header-botside">
                    <div>
                        <nav className="header-nave header-nave1">
                            <ul>
                                <a href="mano nao sei mesmo.">
                                    <li>Produtos</li>
                                </a>
                                <a href="/páginas/serviços.html">
                                    <li>Serviços</li>
                                </a>
                                <a href="/páginas/cadastroPet.html">
                                    <li>Meus Pets</li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav className="header-nave">
                            <ul>
                                <li>Mais</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;