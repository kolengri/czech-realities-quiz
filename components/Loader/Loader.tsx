import { FC } from "react"

import classnames from "classnames"

import styles from "./Loader.module.css"

type OuterProps = JSX.IntrinsicElements["div"]

export type LoaderProps = OuterProps & {
  loading?: boolean
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className, children, loading, ...otherProps } = props

  return (
    <div
      className={classnames("loader", "relative", className, {
        "min-h-[300px]": loading,
      })}
      data-testid="Loader"
      {...otherProps}
    >
      {loading && (
        <div
          className={classnames(
            "absolute absolute-center w-full h-full bg-slate-400/40 flex items-center justify-center"
          )}
        >
          <div className={styles.loader} />
        </div>
      )}
      {children}
    </div>
  )
}
