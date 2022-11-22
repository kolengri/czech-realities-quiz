import { FC } from "react"

import classnames from "classnames"

type OuterProps = JSX.IntrinsicElements["main"]

export type MainProps = OuterProps

export const Main: FC<MainProps> = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <main className={classnames("main", className)} data-testid="Main" {...otherProps}>
      {children}
    </main>
  )
}
