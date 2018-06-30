/* eslint-env node */

module.exports = function (plop) {

  // create your generators here
  plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Component name (ie. MyComponent)',
        },
        {
          type: 'confirm',
          name: 'isClass',
          message: 'Is this a class component?',
        },
      ], // array of inquirer prompts
      actions: [
        {
          type: 'add',
          path: '../src/components/{{ dashCase name }}/component.tsx',
          templateFile: 'templates/component/component.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{ dashCase name }}/index.ts',
          templateFile: 'templates/component/index.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{ dashCase name }}/styles.css',
          templateFile: 'templates/component/styles.hbs',
        },
      ],  // array of actions
  });
};
