---
to: components/<%= h.capitalize(name) %>/index.ts
---
export { <%= h.capitalize(name) %> } from './<%= h.capitalize(name) %>';
export type { <%= h.capitalize(name) %>Props } from './<%= h.capitalize(name) %>';
