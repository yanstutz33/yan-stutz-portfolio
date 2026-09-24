# Yan Stutz — portfólio profissional

Design, conteúdo e tecnologia apresentados por meio de projetos e evidências.

**[Abrir portfólio](https://yanstutz33.github.io/yan-stutz-portfolio/)**

## Dois cases selecionados

| Case | Conteúdo | Evidência e limite |
|---|---|---|
| [Conteúdo e comunidade — @stuttz e @pausapraanime](cases/conteudo-organico.md) | Contexto, resultados históricos e leitura crítica | Números publicados no portfólio; Insights originais e decisões por peça ainda pendentes |
| [IA e automação — Faceless Content Factory](https://github.com/yanstutz33/faceless-content-factory/blob/docs/cases-recrutador-2026-09-24/docs/portfolio/case-ia.md) | Problema, fluxo, stack, demo e validação | Vídeo local de 12 s, screenshot e 63 testes; IA externa não acionada na demo |

As métricas sociais se referem ao recorte de julho/agosto de 2026 e não devem ser
apresentadas como números atuais. Projetos privados são descritos sem links ou código.

## Estrutura

- `index.html`: portfólio estático e responsivo.
- `cases/conteudo-organico.md`: apresentação documentada do case de conteúdo.
- `auditar-portfolio.js`: checagens existentes de estrutura e links.
- `HANDOFF.md`: contexto para manutenção.

## Conferir localmente

```powershell
node auditar-portfolio.js
python -m http.server 8138
```

Abrir `http://127.0.0.1:8138`. A branch de cases contém uma proposta de atualização;
o site público continua refletindo a branch principal até a integração e publicação.
