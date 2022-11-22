---
to: utils/<%= subfolder %>/<%= name %>/<%= name %>.ts
---

export type <%= h.capitalize(name) %>Arg = {}

export type <%= h.capitalize(name) %>Args = [<%= h.capitalize(name) %>Arg];

export type <%= h.capitalize(name) %>Result = void;

export interface <%= h.capitalize(name) %> {
  (...args: <%= h.capitalize(name) %>Args): <%= h.capitalize(name) %>Result
}

export const <%= name %>: <%= h.capitalize(name) %> = (...args) => {
  return;
};
