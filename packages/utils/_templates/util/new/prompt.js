module.exports = {
  prompt: ({ prompter }) =>
    prompter.prompt({
      message: 'Util name:',
      name: 'name',
      type: 'input',
    }),
};
