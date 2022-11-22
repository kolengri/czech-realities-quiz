import { FC } from "react"

import classnames from "classnames"

type OuterProps = JSX.IntrinsicElements["div"]

export type ContainerProps = OuterProps

export const Container: FC<ContainerProps> = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={classnames("container", "max-w-7xl mx-auto px-3", className)}
      data-testid="Container"
      {...otherProps}
    >
      {children}
    </div>
  )
}
