# i18n Module / Módulo de Internacionalização

> Bilingual Internationalization module with dynamic language switching, DOM updates and localStorage persistence.
> 
> Módulo bilíngue de internacionalização com troca dinâmica de idioma, atualização do DOM e persistência em localStorage.

---

## Description / Descrição

This module provides a reusable JavaScript solution to internationalize static or dynamic pages. It supports:
- Language switching via clickable links
- DOM text replacement using `data-i18n`
- Placeholder updates (e.g. forms)
- `localStorage` to remember selected language
- CSS class toggling for animation support

---

Este módulo oferece uma solução JavaScript reutilizável para internacionalizar páginas estáticas ou dinâmicas. Ele suporta:
- Troca de idioma via links clicáveis
- Substituição de textos com `data-i18n`
- Atualização de placeholders (ex: formulários)
- Uso de `localStorage` para lembrar o idioma escolhido
- Alternância de classes CSS para suportar animações

---

## File Structure / Estrutura de Arquivos

```text
/modules/i18n/
├── index.js            # Module entry point / Ponto de entrada do módulo
├── config.js           # Language dictionaries / Dicionários de idiomas
├── constants.js        # Selectors and defaults / Seletores e padrões
├── dom.js              # DOM operations / Operações com o DOM
├── storage.js          # localStorage support / Suporte a localStorage
├── transition.js       # Transition effect (CSS) / Efeito de transição (CSS)
├── i18n.js             # Core logic / Lógica principal
├── lang-en.js          # English dictionary / Dicionário em inglês
└── lang-pt.js          # Portuguese dictionary / Dicionário em português
````

---

## Usage / Uso

### Import and initialize:

```js
import { initI18n } from './modules/i18n/index.js';

initI18n();
```

---

### HTML setup:

```html
<body data-lang="en">
  <nav>
    <a href="#" class="change-language">English</a>
    <a href="#" class="change-language">Português</a>
  </nav>

  <h1 data-i18n="hero_title"></h1>
  <input type="text" id="email" />
</body>
```

---

## Language Switching / Troca de Idioma

1. Language is set based on localStorage (`lang`) or defaults to `en`.
2. Clicking a `.change-language` link triggers:

   * DOM updates (text, placeholders)
   * CSS class transitions (optional)
   * Storage of selected language

---

1. O idioma é definido com base no `localStorage` (`lang`) ou usa `en` por padrão.
2. Ao clicar em um link `.change-language`, o sistema:

   * Atualiza o DOM (textos, placeholders)
   * Aplica classes CSS de transição (opcional)
   * Salva o idioma escolhido

---

## Adding New Languages / Adicionando Novos Idiomas

1. Create a new dictionary file, e.g. `lang-es.js`:

```js
export const langES = {
  hero_title: "Bienvenido a nuestro sitio",
  // ...
};
```

2. Import and register it in `config.js`:

```js
import { langES } from './lang-es.js';

export const translations = {
  en: langEN,
  pt: langPT,
  es: langES,
};
```

3. Add corresponding links in your HTML:

```html
<a href="#" class="change-language">Español</a>
```

---

## CSS Transitions (Optional) / Transições CSS (Opcional)

Add support for visual language switching effects using classes like:

```css
.lang-changing {
  opacity: 0.5;
  transition: opacity 0.25s ease;
}
```

---

## Author / Autor

Created by Jorge Menezes Jr. & Atlas (chatGPT)


---

## License / Licença

MIT License
