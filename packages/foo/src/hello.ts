export const hello = (...dependencies: string[]) =>
  console.log(`hello using:\n${['foo', ...dependencies].map(dep => `  - ${dep}`).join('\n')}`);
