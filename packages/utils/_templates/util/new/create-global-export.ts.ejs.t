---
to: <%= subfolder %>.ts
unless_exists: true
---
export * from './src/<%= subfolder %>';
