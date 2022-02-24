import { FC } from "react"

import classnames from "classnames"

import styles from "./Main.module.css"

type OuterProps = JSX.IntrinsicElements["main"]

export type MainProps = {} & OuterProps

export const Main: FC<MainProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <main className={classnames(styles.Main, className)} data-testid="Main" {...otherProps}>
      {children}
    </main>
  )
}
