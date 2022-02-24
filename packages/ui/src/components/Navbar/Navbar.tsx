import { FC } from "react"

import classnames from "classnames"

import styles from "./Navbar.module.css"

type OuterProps = JSX.IntrinsicElements["div"]

export type NavbarProps = {} & OuterProps

export const Navbar: FC<NavbarProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={classnames(styles.Navbar, className, "border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800")}
      data-testid="Navbar"
      {...otherProps}
    >
      {children}
    </div>
  )
}
