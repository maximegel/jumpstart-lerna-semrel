export const hello = (...dependencies: string[]): void =>
  console.log(`hello using:\n${['foo', ...dependencies].map(dep => `  - ${dep}`).join('\n')}`);
