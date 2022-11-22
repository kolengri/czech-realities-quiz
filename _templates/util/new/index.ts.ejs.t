---
to: utils/<%= subfolder %>/<%= name %>/index.ts
---
export { <%= name %> } from './<%= name %>';
export type { <%= h.capitalize(name) %>, <%= h.capitalize(name) %>Arg, <%= h.capitalize(name) %>Args, <%= h.capitalize(name) %>Result } from './<%= name %>';
