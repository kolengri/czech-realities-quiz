---
inject: true
to: <%= subfolder %>.ts
append: true
skip_if: "from './src/<%= subfolder %>'"
---
export * from './src/<%= subfolder %>';
