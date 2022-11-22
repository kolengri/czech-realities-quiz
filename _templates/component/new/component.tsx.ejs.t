---
to: components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.tsx
---
import { FC } from 'react';

import classnames from 'classnames';

type OuterProps = JSX.IntrinsicElements['div'];

export type <%= h.capitalize(name) %>Props = OuterProps;

export const <%= h.capitalize(name) %>: FC<<%= h.capitalize(name) %>Props> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={classnames('<%= h.changeCase.paramCase(name) %>', className)}
      data-testid="<%= h.capitalize(name) %>"
      {...otherProps}
    >
      {children}
    </div>
  );
};
