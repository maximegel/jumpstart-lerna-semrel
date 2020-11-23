export const hello = (...dependencies: string[]): void =>
  console.log(`hello from v1.4.x using:\n${['foo', ...dependencies].map(dep => `  - ${dep}`).join('\n')}`);
