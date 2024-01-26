const Header = () => {

    return (
            <header>
                <section className="header-section">
                    <div className="header-topside">
                        <a href="/páginas/index.html"><img className="petshop-icon" src="\images\petshopIcon.svg" alt="icone petshop" /></a>
                        <div className="header-group-bar">
                            <form action="/resultado-da-pesquisa" method="get">
                                <span className="header-lupa"></span>
                                <input className="header-searchbar" type="text" name="q" placeholder="Pesquisar" />
                            </form>
                            <a href="/páginas/carrinhoVazio.html"><img className="carrinhoSvg" src="/images/carrinhoIcon.svg"
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
                                    <a href="/páginas/produtos.html">
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