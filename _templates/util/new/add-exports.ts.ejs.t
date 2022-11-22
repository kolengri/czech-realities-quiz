---
inject: true
to: utils/<%= subfolder %>/index.ts
append: true
skip_if: "from './<%= name %>'"
---
export * from './<%= name %>';
