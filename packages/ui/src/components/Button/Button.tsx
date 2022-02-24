import { FC } from 'react';

import classnames from 'classnames'

import styles from './Button.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type ButtonProps = {} & OuterProps

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(styles.Button, className)} data-testid="Button" {...otherProps}>{children}</div>;
};
