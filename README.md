# Create React Component Library

![Create React Component Library Logo](https://raw.githubusercontent.com/sasibhumaraju/create-react-component-library/refs/heads/main/.storybook/crcl.png?text=Create+React+Component+Library)


This is a **starter template** for creating a React component library. It comes pre-configured with **Rollup** for bundling, **Babel** for transpiling, and **Storybook** for interactive component development and documentation. Ideal for developers who want to build reusable UI components for React applications, this template simplifies the process of creating, building, and publishing React component libraries. 🚀


## Features ✨

- 📦 **Bundling with Rollup**: Package your components efficiently for both CommonJS and ES module formats.
- 🛠 **Transpiling with Babel**: Use modern ES6+ and JSX syntax, ensuring compatibility across environments.
- 📚 **Storybook Integration**: Document and test your components in isolation with live previews.
- 🎨 **CSS Modules**: Scoped styling with PostCSS support.
- 🔄 **PropTypes and TypeScript Support**: Type-check your props and ensure proper usage.

## Installation ⚙️

To get started, simply run the following command:

```bash
npx create-react-component-library
```

### Scripts

Here's a list of the most important scripts included in the template:

- **Start Storybook**: Run Storybook to develop and preview your components interactively.

  ```bash
  npm start
  ```

  This will open Storybook in your browser at [http://localhost:6006](http://localhost:6006).

- **Build the Library**: Bundle your components into distributable formats.

  ```bash
  npm run build-lib
  ```

  This will output your library to the `dist/` folder, creating both `CommonJS` and `ESM` versions.

## Folder Structure 🗂️

After running the starter, the basic folder structure will look like this:

```
├── dist/                     # Compiled and bundled files
├── src/                      # Source files (React components)
│   └── index.jsx             # Entry point for your library
├── .storybook/               # Storybook configuration
├── rollup.config.js          # Rollup bundling configuration
├── package.json              # Project configuration and dependencies
└── README.md                 # Project documentation
```

## Example Component

To add a component to your library, create it under the `src/` folder. Here's an example `Button.jsx` component:

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ label, onClick, primary }) => (
  <button
    className={primary ? 'btn-primary' : 'btn-secondary'}
    onClick={onClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};
```

### Building Your Library

To bundle the library and make it distributable, run:

```bash
npm run build-lib
```

The bundled files will appear in the `dist/` folder. These files are ready for use in other projects or publishing to npm.

## Publishing to npm 📦

To publish your library on npm:

1. Ensure your package name in `package.json` is unique.
2. Run the following command to log in to npm:

   ```bash
   npm login
   ```

3. Publish the package:

   ```bash
   npm publish
   ```

Developers can now install your library in their projects using:

```bash
npm install your-library-name
```

## Storybook 📚

Storybook is set up in this template for interactive component development. To run Storybook locally, use:

```bash
npm start
```

This will open the Storybook dashboard where you can view and interact with your components. You can add stories for new components under the `src/stories/` folder.

## Dependencies and DevDependencies 🔧

### Peer Dependencies

- **react**: Ensures the consuming project provides React.
- **react-dom**: Provides DOM-specific methods for React.

### DevDependencies

- **@babel/plugin-transform-runtime**: Optimizes Babel's runtime helpers.
- **@rollup/plugin-node-resolve**: Helps Rollup find `node_modules`.
- **rollup-plugin-postcss**: Adds support for processing CSS files.
- **Storybook**: Provides a UI for developing and testing components in isolation.

### Example `package.json`

```json
{
  "name": "react-component-library",
  "version": "1.0.0",
  "description": "Template for creating React component libraries",
  "main": "dist/index.jsx",
  "module": "dist/index.es.js",
  "scripts": {
    "start": "storybook dev -p 6006",
    "build-lib": "rollup -c"
  },
  "author": "@sasibhumaraju",
  "license": "MIT",
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.25.4",
    "@babel/preset-react": "^7.24.7",
    "@babel/runtime": "^7.25.6",
    "rollup": "^4.22.0",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "storybook-css-modules-preset": "^1.1.1",
    "@storybook/react-vite": "^8.3.2",
    "@storybook/addon-essentials": "^8.3.2"
  },
  "peerDependencies": {
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

## Author 🤵
- [@sasibhumaraju](https://www.github.com/sasibhumaraju)


## License 📜

This project is licensed under the MIT License.



