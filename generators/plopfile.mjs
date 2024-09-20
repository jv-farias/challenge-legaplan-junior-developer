const plopConfig = (/** @type {import('plop').NodePlopAPI} */ plop) => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.index.tsx',
          templateFile: 'templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/stories.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/test.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/index.ts.hbs',
        },
      ],
    });
  };
  
  export default plopConfig;
  