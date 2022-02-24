import { FC } from 'react';

import classnames from 'classnames'

import styles from './Favicon.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type FaviconProps = {} & OuterProps

export const Favicon: FC<FaviconProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(styles.Favicon, className)} data-testid="Favicon" {...otherProps}>{children}</div>;
};
