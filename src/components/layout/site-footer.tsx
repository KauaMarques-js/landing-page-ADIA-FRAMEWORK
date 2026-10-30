import { CurrentYear } from "@/components/interactive/current-year";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a className="footer-brand" href="#topo">
            ADIA<span>FRAMEWORK</span>
            <span className="footer-brand-dot" aria-hidden="true">
              ↗
            </span>
          </a>
          <p>
            Aprendizado inteligente.
            <br />
            Pessoas em evolução.
          </p>
          <a className="back-top" href="#topo">
            Voltar ao início <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © <CurrentYear /> ADIA Framework
          </p>
          <nav aria-label="Navegação do rodapé">
            <a href="#pesquisa">Pesquisa e referências</a>
            <a href="#contato">Contato</a>
            <a href="#educacao">Imagens e contexto</a>
          </nav>
          <span>Inteligência artificial. Autonomia humana.</span>
        </div>
      </div>
    </footer>
  );
}
