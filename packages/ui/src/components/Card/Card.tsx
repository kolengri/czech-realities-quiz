import { FC } from 'react';

import classnames from 'classnames'

import styles from './Card.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type CardProps = {} & OuterProps

export const Card: FC<CardProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(styles.Card, className)} data-testid="Card" {...otherProps}>{children}</div>;
};
