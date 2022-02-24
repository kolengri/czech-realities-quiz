import { FC } from "react"

import classnames from "classnames"

import styles from "./AppLayout.module.css"

type OuterProps = JSX.IntrinsicElements["div"]

export type AppLayoutProps = {} & OuterProps

export const AppLayout: FC<AppLayoutProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={classnames(styles.AppLayout, className, "flex flex-col min-h-screen min-w-full")}
      data-testid="AppLayout"
      {...otherProps}
    >
      {children}
    </div>
  )
}
