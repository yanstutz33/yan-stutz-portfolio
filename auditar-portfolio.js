const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const falhas = [];
const exigir = (condicao, texto) => { if (!condicao) falhas.push(texto); };

exigir(/<meta name="viewport"/i.test(html), "viewport mobile ausente");
exigir(/<main[\s>]/i.test(html), "conteúdo principal ausente");
exigir(/class="skip"/i.test(html), "atalho de teclado ausente");
exigir(!/href="#"/i.test(html), "link vazio encontrado");
exigir(/rel="canonical"/i.test(html), "URL canônica ausente");
exigir(/property="og:image"/i.test(html), "imagem social ausente");
exigir(/application\/ld\+json/i.test(html), "dados estruturados ausentes");
exigir(/https:\/\/www\.behance\.net\/yanstutz1/i.test(html), "Behance ausente");
exigir(/https:\/\/github\.com\/yanstutz33/i.test(html), "GitHub ausente");
exigir(/https:\/\/wa\.me\/5521967079828/i.test(html), "WhatsApp pessoal ausente");
exigir(/myPOKYcards/i.test(html), "myPOKYcards ausente");
exigir(/YAMI.?TCG/i.test(html), "origem YAMI-TCG ausente");
exigir(/HUB<br>PUBLICAÇÃO/i.test(html), "Hub Publicação ausente");
exigir(/projeto privado/i.test(html), "tratamento de projeto privado ausente");
exigir(!/github\.com\/yanstutz33\/(hub-publicacao|faceless-content-factory)/i.test(html), "link de repositório privado exposto");
exigir(!/Curr-culo|CURR[IÍ]CULO/i.test(html), "projeto de currículo removido voltou ao portfólio");

const externos = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)].map(match => match[0]);
exigir(externos.length > 0, "links externos ausentes");
exigir(externos.every(tag => /rel="[^"]*noopener[^"]*"/i.test(tag)), "link externo sem proteção noopener");

if (falhas.length) {
  console.error("PORTFÓLIO REPROVADO:\n- " + falhas.join("\n- "));
  process.exit(1);
}
console.log(`PORTFÓLIO APROVADO: ${externos.length} links externos protegidos.`);

