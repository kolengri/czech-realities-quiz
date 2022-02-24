---
inject: true
to: src/<%= subfolder %>/index.ts
append: true
skip_if: "from './<%= name %>'"
---
export * from './<%= name %>';
