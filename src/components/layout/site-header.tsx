"use client";

import { useNavigation } from "@/hooks/use-navigation";
import { ThemeToggle } from "@/components/interactive/theme-toggle";

export function SiteHeader() {
  const {
    ready,
    isDesktop,
    open,
    setOpen,
    activeSection,
    toggleRef,
    headerRef,
  } = useNavigation();
  return (
    <header
      ref={headerRef}
      className={ready ? "site-header navigation-ready" : "site-header"}
    >
      <div className="container header-inner">
        <a className="brand" href="#topo" aria-label="ADIA Framework — início">
          <img src="/img/logo-adia.png" alt="ADIA" width={180} height={90} />
          <span className="brand-divider" aria-hidden="true"></span>
          <span className="brand-caption">
            FRAMEWORK
            <br />
            EDUCACIONAL
          </span>
        </a>
        <nav
          id="menu"
          className="nav"
          hidden={!isDesktop && !open}
          onClick={(event) => {
            if ((event.target as Element).closest("a")) setOpen(false);
          }}
          aria-label="Navegação principal"
        >
          <ul>
            <li>
              <a
                href="#solucao"
                aria-current={
                  activeSection === "solucao" ? "location" : undefined
                }
              >
                A proposta
              </a>
            </li>
            <li>
              <a
                href="#como-funciona"
                aria-current={
                  activeSection === "como-funciona" ? "location" : undefined
                }
              >
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#resultados"
                aria-current={
                  activeSection === "resultados" ? "location" : undefined
                }
              >
                Evidências
              </a>
            </li>
            <li>
              <a
                href="#educacao"
                aria-current={
                  activeSection === "educacao" ? "location" : undefined
                }
              >
                Educação em MT
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="btn btn-dark btn-small" href="#contato">
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            hidden={!ready || isDesktop}
            ref={toggleRef}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
