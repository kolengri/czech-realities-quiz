import { FC } from 'react';

import classnames from 'classnames'

import styles from './PageLayout.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type PageLayoutProps = {} & OuterProps

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(styles.PageLayout, className)} data-testid="PageLayout" {...otherProps}>{children}</div>;
};
