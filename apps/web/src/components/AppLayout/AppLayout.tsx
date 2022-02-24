import { FC } from 'react';

import classnames from 'classnames'

import styles from './AppLayout.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type AppLayoutProps = {} & OuterProps

export const AppLayout: FC<AppLayoutProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(styles.AppLayout, className)} data-testid="AppLayout" {...otherProps}>{children}</div>;
};
