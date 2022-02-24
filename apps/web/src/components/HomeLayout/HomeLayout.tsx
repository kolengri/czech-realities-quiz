import { FC } from "react"

import classnames from "classnames"

import styles from "./HomeLayout.module.css"
import { PageLayout } from "../PageLayout"

type OuterProps = JSX.IntrinsicElements["div"]

export type HomeLayoutProps = {} & OuterProps

export const HomeLayout: FC<HomeLayoutProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <PageLayout className={classnames(styles.HomeLayout, className)} data-testid="HomeLayout" {...otherProps}>
      {children}
    </PageLayout>
  )
}
