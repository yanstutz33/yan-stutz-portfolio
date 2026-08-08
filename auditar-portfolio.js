Exit code: 0
Wall time: 0.4 seconds
Output:
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const falhas = [];
const exigir = (condicao, texto) => { if (!condicao) falhas.push(texto); };

exigir(/<meta name="viewport"/i.test(html), "viewport mobile ausente");
exigir(/<main[\s>]/i.test(html), "conteúdo principal ausente");
exigir(/class="skip-link"/i.test(html), "atalho de teclado ausente");
exigir(!/href="#"/i.test(html), "link vazio encontrado");
exigir(/https:\/\/www\.behance\.net\/yanstutz1/i.test(html), "Behance ausente");
exigir(/https:\/\/github\.com\/yanstutz33/i.test(html), "GitHub ausente");
exigir(/https:\/\/wa\.me\/5521967079828/i.test(html), "WhatsApp pessoal ausente");
exigir(!/CURR[IÍ]CULO/i.test(html), "projeto de currículo removido voltou ao portfólio");

const externos = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)].map(match => match[0]);
exigir(externos.length > 0, "links externos ausentes");
exigir(externos.every(tag => /rel="[^"]*noopener[^"]*"/i.test(tag)), "link externo sem proteção noopener");

if (falhas.length) {
  console.error("PORTFÓLIO REPROVADO:\n- " + falhas.join("\n- "));
  process.exit(1);
}
console.log(`PORTFÓLIO APROVADO: ${externos.length} links externos protegidos.`);

