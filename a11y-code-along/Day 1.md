## Goals

1. Intro to basic a11y concepts
1. Create a new Vite React App
1. Set up the basic HTML to support the full site

## Helpful links

1. [POUR](https://equalizedigital.com/web-accessibility-p-o-u-r-acronym/)
2. [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)\
3. [WCAG 2.2](https://www.w3.org/TR/WCAG22/#new-features-in-wcag-2-2)
4. [Headings with Context API](https://beta.reactjs.org/learn/passing-data-deeply-with-context)
5. [FF a11y inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
6. [Chrome a11y tools](https://developer.chrome.com/docs/devtools/accessibility/reference/)

## Walkthrough

### Review POUR & WCAG

#### [POUR](https://equalizedigital.com/web-accessibility-p-o-u-r-acronym/)

- Perceivable. Everything should be equally perceivable by everyone. This means vision, hearing, and/or touch.
- Operable. Every piece of functionality or action that a user can take should be doable for all users.
- Understandable. Content should be equally understandable for all users (eg: consider cognitively impaired users as well)
- Robust. POUR should be similar for as wide a range of current _and future_ assistive devices as possible

Things to consider:

- Physical impairment, can the user navigate the page with keyboard only?
- Is focus clearly indicated?
- Are hitboxes large enough?
- Vision impairment, is colour the only indicator of state?
- Are text alternatives presented for all meaningful items? (includes img, icon, etc.)

#### [WCAG 2.1](https://www.w3.org/TR/WCAG21/)

Also [WCAG 2.2](https://www.w3.org/TR/WCAG22/#new-features-in-wcag-2-2)

A set of standards for websites to use
Levels: A, AA, AAA (aim for AA+ where possible)

- Show for example [focus appearance](https://www.w3.org/TR/WCAG22/#focus-appearance) with both AA and AAA success criteria

#### Automated Checking

- [Built-in a11y checker (FF)](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
- [Built-in a11y checker (Chrome)](https://developer.chrome.com/docs/devtools/accessibility/reference/)
- [Automated React a11y Checkers](https://web.dev/accessibility-auditing-react/)

### Create the Project

```bash
pnpm create vite a11y-code-along  --template react-ts
yarn create vite a11y-code-along  --template react-ts
npx create vite a11y-code-along  --template react-ts
```

Delete all unused code

### Set up linting formatting

Install [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

```bash
pnpm install eslint prettier vite-plugin-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-react --save-dev
pnpm install eslint eslint-plugin-jsx-a11y --save-dev
```

Set up the following files:

```
.prettierignore
.prettierrc.json
.eslintrc.js
.editorconfig
```

Point out editorconfig with tabs.
Show the "tab size" setting in VS Code to illustrate

### Start Basic Setup

- Lang in index.html
- Title in index.html to "Minerva"
