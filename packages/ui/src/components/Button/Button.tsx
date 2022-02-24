import { FC } from "react"

import classnames from "classnames"

import styles from "./Button.module.css"

type OuterProps = JSX.IntrinsicElements["button"]

export type ButtonProps = {
  kind?: "default" | "primary" | "secondary" | "tertiary"
} & OuterProps

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, kind = "default", ...otherProps } = props
  return (
    <button
      className={classnames(styles.Button, className, {
        "button-default": kind === "default",
      })}
      data-testid="Button"
      {...otherProps}
    >
      {children}
    </button>
  )
}
