import { FC } from "react"

import classnames from "classnames"

import styles from "./Header.module.css"
import { Navbar } from "../Navbar"

type OuterProps = JSX.IntrinsicElements["header"]

export type HeaderProps = {} & OuterProps

export const Header: FC<HeaderProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <header className={classnames(styles.Header, className)} data-testid="Header" {...otherProps}>
      <Navbar />
      {children}
    </header>
  )
}
