
const CONTACT_EMAIL = (window.ADIA_CONTACT_EMAIL || "kaua.marquesal@gmail.com").trim();

(function () {
  "use strict";

  const REVEAL_SELECTOR = [
    ".hero-copy > *", ".journey",
    ".section-head", ".card", ".callout", ".risk",
    ".steps > li", ".note", ".block-title", ".block > .table-wrap", ".panel",
    ".metrics > li", ".disclaimer", ".chart figcaption", ".group", ".data-table",
    ".layers li", ".chips-lg", ".refs",
    ".cta-copy", ".form"
  ].join(",");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

    // Escalonamento: itens irmãos do mesmo tipo entram em sequência (máx. 4 passos).
    const seen = new Map();
    targets.forEach((el) => {
      const key = el.parentElement;
      const index = seen.get(key) || 0;
      seen.set(key, index + 1);
      el.setAttribute("data-reveal", "");
      el.style.setProperty("--d", Math.min(index, 4) * 90 + "ms");
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    document.documentElement.classList.add("reveal-ready");
    targets.forEach((el) => io.observe(el));
  }

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Ao voltar para o layout desktop, o menu volta ao estado normal.
    window.matchMedia("(min-width: 960px)").addEventListener("change", (mq) => {
      if (mq.matches) setOpen(false);
    });
  }

  const form = document.getElementById("contact-form");
  if (!form) return;

  const submit = document.getElementById("form-submit");
  const notice = document.getElementById("form-aviso");
  const status = document.getElementById("form-status");
  const configured = CONTACT_EMAIL.trim() !== "";

  if (configured) {
    submit.disabled = false;
    notice.hidden = true;
  }

  const messages = {
    nome: "Informe seu nome.",
    email: "Informe um e-mail válido, como nome@instituicao.com.br.",
    instituicao: "Informe a sua instituição.",
    mensagem: "Escreva uma mensagem para a equipe.",
  };

  const isValid = (field) => {
    const value = field.value.trim();
    if (!value) return false;
    if (field.name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return true;
  };

  const showError = (field, invalid) => {
    const out = document.getElementById(field.id + "-erro");
    field.setAttribute("aria-invalid", String(invalid));
    out.textContent = invalid ? messages[field.name] : "";
  };

  const fields = Array.from(form.querySelectorAll("input, textarea"));

  fields.forEach((field) => {
    // Valida ao sair do campo e limpa o erro quando o usuário corrige.
    field.addEventListener("blur", () => {
      if (field.value !== "" || field.getAttribute("aria-invalid") === "true") {
        showError(field, !isValid(field));
      }
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true" && isValid(field)) showError(field, false);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    status.classList.remove("is-error");

    if (!configured) return;

    let firstInvalid = null;
    fields.forEach((field) => {
      const invalid = !isValid(field);
      showError(field, invalid);
      if (invalid && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      status.textContent = "Revise os campos destacados antes de enviar.";
      status.classList.add("is-error");
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const body = [
      "Nome: " + data.get("nome").trim(),
      "E-mail: " + data.get("email").trim(),
      "Instituição: " + data.get("instituicao").trim(),
      "",
      data.get("mensagem").trim(),
    ].join("\r\n");

    const subject = "Solicitação de demonstração — ADIA Framework";
    window.location.href =
      "mailto:" + encodeURIComponent(CONTACT_EMAIL.trim()) +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    status.textContent =
      "Abrimos o seu aplicativo de e-mail com a mensagem pronta. Envie-a para concluir. " +
      "Se nada abriu, escreva diretamente para " + CONTACT_EMAIL.trim() + ".";
  });
})();
