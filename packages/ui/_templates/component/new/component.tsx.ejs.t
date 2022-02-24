---
to: src/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.tsx
---
import { FC } from 'react';

import classnames from 'classnames'

import styles from './<%= h.capitalize(name) %>.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type <%= h.capitalize(name) %>Props = {} & OuterProps

export const <%= h.capitalize(name) %>: FC<<%= h.capitalize(name) %>Props> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(styles.<%= h.capitalize(name) %>, className)} data-testid="<%= h.capitalize(name) %>" {...otherProps}>{children}</div>;
};
