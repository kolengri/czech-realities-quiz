import { FC } from "react"

import classnames from "classnames"
import { getYear } from "date-fns"

import styles from "./Footer.module.css"

type OuterProps = JSX.IntrinsicElements["footer"]

export type FooterProps = {} & OuterProps
const startYear = 2022

export const Footer: FC<FooterProps> = (props) => {
  const { className, children, ...otherProps } = props

  const currentYear = getYear(new Date())
  const yearToDisplay = currentYear === startYear ? startYear : `${startYear} - ${currentYear}`

  return (
    <footer
      className={classnames(
        styles.Footer,
        className,
        "p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 text-gray-300"
      )}
      data-testid="Footer"
      {...otherProps}
    >
      © {yearToDisplay}
      {children}
    </footer>
  )
}
