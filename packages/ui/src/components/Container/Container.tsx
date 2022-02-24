import { FC } from "react"

import classnames from "classnames"

import styles from "./Container.module.css"

type OuterProps = JSX.IntrinsicElements["div"]

export type ContainerProps = {} & OuterProps

export const Container: FC<ContainerProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={classnames(styles.Container, className, "max-w-[1200px] mx-auto p-4")}
      data-testid="Container"
      {...otherProps}
    >
      {children}
    </div>
  )
}
