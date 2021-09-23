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


## Checklist for preparing a portfolio project for HR review

1. Don’t forget to add a title for the whole web page (it could be the name of your landing)
2. A landing page is implemented strictly according to the design in Figma
4. Links in the header and footer menus should lead to the corresponding blocks of the landing page
5. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
6. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
7. Make sure everything looks neat on mobile and without horizontal scrolling
8. Add favicon
9. Add a smooth scroll for the whole page
10. When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
11. The video should work. If it is not working, it can confuse the recruiter/user, because then it is not clear why it is on the landing page.
12. After clicking the menu buttons, the landing page should scroll exactly to the beginning of the desired block (exactly where its section begins)
13. It would be more realistic if the "Buy" button was active and clickable (for example, it could scroll the page to a contact form)
14. It is important that in the email field the user has the opportunity to enter the whole mail and the text is not cut off
15. Icons in the “about us” block should be animated on hover
16. The arrow icon in the footer should increase when hovering and when clicked smoothly scroll the page to the top
17. Logos should also become bigger on hover and lead to the first section.
18. Under the button “see more about us”, the strip should stretch to the full width when hovering and lead to the CrazyBaby website
19. The form shouldn’t submit empty
20. All the social icons in the footer should be clickable and open the social networks of Crazybaby in a new tab
21. OPTIONAL: After everything is done you can add a slider in the “features” section (for mobile version)


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
  [DEMO LINK](https://<your_account>.github.io/Kickstarter/)
14. Copy `DEMO LINK` to the PR description

> To update you PR repeat steps 7-11
