# Kickstarter landing page (HARD)

# Kickstarter - Strona Landingowa dla Głośnika Bezprzewodowego "Luna"

**⚠️ Attention: this is a hard landing page for development. We highly recommend choosing this landing page only if you didn't have a lot of troubles with previous homework tasks and if you sent all homework in time (didn't miss deadlines).**
Jest to responsywna strona landingowa dla futurystycznego głośnika bezprzewodowego "Luna", zaprojektowana jako koncept dla kampanii na Kickstarterze. Strona prezentuje cechy produktu, jego historię oraz specyfikacje techniczne.

Implement landing page according to [Figma design](<https://www.figma.com/file/Ujp7bCFuvuJlkn8TSbQPSZ/%E2%84%9611-(kickstarter)?node-id=19655%3A33>) - Use BEM and SCSS

- The design 1440px
- Desktop 1280px
- Tablet 640px
- Mobile (> 320px)

## Podgląd

1. Implement the header with `nav`.
1. Implement `Benefits` block.
1. Implement `Presentation` block.
1. Implement `About us` block.
1. Implement `Technology` block.
1. Implement `Testimonilas` block.
1. Implement `Features` block.
1. Implement `Questions` block
1. Implement the footer.
   _(W tym miejscu możesz dodać zrzut ekranu lub link do działającej wersji demonstracyjnej)_

<!-- [Link do Live Demo](https://twoj-link-do-demo.com) -->

## Github flow

## Funkcjonalności

1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`)
4. Run `npm start`.
5. Open one more terminal window for the next steps
6. `git checkout -b develop` - to create new branch and switch on it
7. Write you code in `src` folder
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`
10. `git add . && git commit -m 'solution'` to save your changes
11. `git push origin develop` - to send you code for PR
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
    [DEMO LINK](https://bagirovoleg.github.io/Kickstarter/)
14. Copy `DEMO LINK` to the PR description

- **Responsywny Design**: Strona jest w pełni dostosowana do urządzeń mobilnych, tabletów i komputerów stacjonarnych.
- **Interaktywne Sekcje**: System zakładek do przełączania treści w sekcjach "Benefits" i "Features".
- **Nawigacja Mobilna**: Rozwijane menu (tzw. "hamburger menu") dla mniejszych ekranów.
- **Płynne Przewijanie**: Animowane przewijanie do sekcji po kliknięciu w linki nawigacyjne.
- **Modularna Struktura SCSS**: Użycie metodologii zbliżonej do BEM dla łatwiejszego zarządzania stylami.
- **Formularz Kontaktowy**: Prosty formularz z walidacją po stronie klienta.

> To update you PR repeat steps 7-11

## Użyte Technologie

- **HTML5**: Semantyczna struktura dokumentu.
- **SCSS**: Preprocesor CSS z modularną architekturą (pliki `utils`, `blocks`).
- **JavaScript (ES6+)**: Czysty JavaScript do obsługi interaktywności (menu, zakładki, animacje).
- **Parcel**: Bundler do kompilacji zasobów (SCSS, JS) i uruchamiania serwera deweloperskiego.

## Struktura Projektu

```
kickstarter/
├── dist/              # Skompilowane pliki gotowe do publikacji
├── src/               # Pliki źródłowe
│   ├── images/        # Zasoby graficzne
│   ├── scripts/       # Moduły JavaScript
│   ├── styles/        # Arkusze stylów SCSS
│   │   ├── blocks/    # Komponenty/bloki (np. header, footer)
│   │   └── utils/     # Zmienne, mixiny, media queries
│   ├── index.html     # Główny plik HTML
└── package.json       # Definicje projektu i zależności
```

## Uruchomienie Projektu

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki.

### Wymagania

- Node.js (wersja 14.x lub nowsza)
- npm

### Instalacja

1.  Sklonuj repozytorium (lub pobierz pliki):
    ```bash
    git clone <URL-do-repozytorium>
    cd kickstarter
    ```
2.  Zainstaluj zależności projektu:
    ```bash
    npm install
    ```

### Uruchomienie Serwera Deweloperskiego

Uruchom serwer deweloperski Parcel, który automatycznie odświeży stronę po każdej zmianie w kodzie.

```bash
npm start
```

Strona będzie dostępna pod adresem `http://localhost:1234`.

### Budowanie Projektu

Aby zbudować projekt do wersji produkcyjnej (pliki zostaną umieszczone w folderze `dist`), użyj polecenia:

```bash
npm run build
```
