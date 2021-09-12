# Kickstarter landing page

Implement landing page according to [Figma design](https://www.figma.com/file/Ujp7bCFuvuJlkn8TSbQPSZ/%E2%84%9611-(kickstarter)?node-id=0%3A1) - Use BEM and SCSS
- The design 1440px
- Notebook 1280px
- Tablet 768px
- Mobile (> 320px)

1. Implement the header with `nav`.
1. Implement `Benefits` block.
1. Implement `Presentation` block.
1. Implement `About us` block with the card reused 3 times.
1. Implement `Technology` block with 4 process cards.
1. Implement `Testimonilas` block.
1. Implement `Features` block.
1. Implement `Questions` block
1. Implement the footer.


## HR important moments

- Скорость анимаций на всем лендинге одинаковые (например увеличение при наведении или выезд блоков при скроле)
- Placeholder в формах подсказывают что именно ввести, а если стоит валидация формы, то понятно в каком формате вводить номер телефона 
- Убедитесь, что с мобильных выглядит все аккуратно и без горизонтальной прокрутки
- Добавьте favicon
- Добавьте мягкий скрол при клике на меню до соответствующего блока страницы
- Видео в лендинге должно работать. Если оно будет нерабочее, это может смутить рекрутера/пользователя, так как тогда совсем не понятно зачем оно в лендинге.
- После нажатия кнопок меню лендинг должен скролить именно на начало нужного блока (именно, туда, где начинается его секция)
- Было бы реалистичней, если бы кнопка "Buy" была активной и кликабельной (например она может переводить на контактную форму)
- Важно, чтобы в поле e-mail пользователь имел возможность полностью ввести почту и текст не обрезался
- Иконки в блоке “about us” должны быть анимированы при ховере
- Иконка стрелочки в футере должны увеличиваться при ховере и при клике плавно прокручивать страницу к верхнему блоку
- Логотипы также должны увеличиваться при ховере и вести на главную страницу
- Под кнопкой “see more about us” полоска должна растягиваться на всю ширину при ховере и вести на сайт [CrazyBaby](https://www.crazybaby.com/)
- Форма не должна отправляться пустой
- Все иконки соцсетей должны менять цвет при ховере и вести на реальные соц сети бренда
- На мобильной версии в секции “features” должен быть слайдер


## Github flow

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
  [DEMO LINK](https://yevhenpecherskyi.github.io/Kickstarter/)
14. Copy `DEMO LINK` to the PR description

> To update you PR repeat steps 7-11
