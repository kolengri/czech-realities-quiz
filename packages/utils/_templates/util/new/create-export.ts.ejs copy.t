---
to: src/<%= subfolder %>/index.ts
unless_exists: true
---
export * from './<%= name %>';
