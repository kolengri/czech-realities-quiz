---
inject: true
to: src/components/index.ts
append: true
skip_if: "from './<%= h.capitalize(name) %>'"
---
export * from './<%= h.capitalize(name) %>';
