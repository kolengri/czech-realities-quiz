---
inject: true
to: <%= subfolder %>.ts
append: true
skip_if: "from './utils/<%= subfolder %>'"
---
export * from './utils/<%= subfolder %>';
