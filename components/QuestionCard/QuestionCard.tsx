import { ChangeEvent, FC, useMemo, useState } from "react"

import classnames from "classnames"
import { Question } from "../../models"
import Image from "next/image"
import { shuffle } from "../../array"

export type QuestionCardProps = {
  item: Question
  onChange: (isCorrect: boolean) => void
}

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { item, onChange, ...otherProps } = props
  const { title, variants, article, img } = item
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const correctAnswer = variants.find((item) => item.isCorrect)!
  const randomVariants = useMemo(() => shuffle([...variants]), [variants])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const correct = event.target.value === "true"
    onChange(correct)
    setIsCorrect(correct)
  }

  return (
    <div
      className={classnames(
        "question-card",

        "mb-3 shadow-md bg-slate-50 p-5 rounded-md hover:shadow-lg hover:bg-blue-50",
        {
          "!bg-green-100": isCorrect,
          "!bg-red-100": isCorrect === false,
        }
      )}
      data-testid="QuestionCard"
      {...otherProps}
    >
      <header>
        <h2 className="text-md font-medium mb-2">
          Č{article}. {title}
        </h2>
      </header>
      <div
        className={classnames({
          "flex gap-4 items-center": !!img,
        })}
      >
        {img && <Image height={250} width={250} src={img} alt={title} objectFit="scale-down" />}
        <div className="flex-1">
          {randomVariants.map((item) => (
            <label key={item.title} className="mb-1 flex gap-2 items-center cursor-pointer p-1">
              <input type="radio" name={article.toString()} value={String(item.isCorrect)} onChange={handleChange} />
              {item.title}
            </label>
          ))}
          {isCorrect === false && (
            <div className="p-2 bg-white rounded-sm w-full">Spravna odpoved: {correctAnswer.title}</div>
          )}
        </div>
      </div>
    </div>
  )
}
