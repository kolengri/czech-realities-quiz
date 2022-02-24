import { FC } from "react"

import classnames from "classnames"
import { Header, Footer, Main } from "ui"

import styles from "./PageLayout.module.css"

type OuterProps = JSX.IntrinsicElements["div"]

export type PageLayoutProps = {} & OuterProps

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={classnames(styles.PageLayout, className, "flex-1 flex flex-col")}
      data-testid="PageLayout"
      {...otherProps}
    >
      <Header />
      <Main className="flex-1">{children}</Main>
      <Footer />
    </div>
  )
}
