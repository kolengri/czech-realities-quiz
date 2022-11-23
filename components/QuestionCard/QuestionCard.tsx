/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FC, memo, useMemo, useState } from "react"

import classnames from "classnames"
import { QuestionsWithCategories } from "../../models"
import { shuffle } from "../../array"

export type QuestionCardProps = {
  item: QuestionsWithCategories
  seed: string
  onChange: (isCorrect: boolean) => void
}

const questionAlpha = ["A", "B", "C", "D"]

const QuestionCardMemo: FC<QuestionCardProps> = (props) => {
  const { item, onChange, seed, ...otherProps } = props
  const { title, variants, img, id } = item
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>()
  const correctAnswer = variants.find((item) => item.isCorrect)!
  const randomVariants = useMemo(() => shuffle(variants, seed), [variants, seed])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const correct = event.target.value === "true"
    onChange(correct)
    setIsCorrect(correct)
  }

  const imageCase = randomVariants.every((item) => item.img)

  return (
    <div
      className={classnames(
        "question-card",

        "mb-3 shadow-sm bg-slate-50 p-5 rounded-md hover:shadow-lg hover:bg-blue-50",
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
          {id}. {title}
        </h2>
      </header>
      <div
        className={classnames({
          "md:flex gap-4 items-center": !!img,
        })}
      >
        {img && <img height={400} width={400} src={img} alt={title} />}
        <div className={classnames("flex-1", { "grid grid-cols-1 md:grid-cols-2": imageCase })}>
          {randomVariants.map((item, index) => (
            <label key={item.title} className="mb-1 flex gap-2 items-center cursor-pointer p-1">
              <input
                type="radio"
                name={`${title}-${id}`}
                value={String(item.isCorrect)}
                onChange={handleChange}
                disabled={typeof isCorrect === "boolean"}
              />
              {`${questionAlpha[index]})`} {item.title}
              {item.img && <img height={250} width={250} src={item.img} alt={item.title} />}
            </label>
          ))}

          {isCorrect === false && (
            <div className="p-2 bg-white rounded-sm w-full">
              Spravna odpoved: {correctAnswer.title}
              {correctAnswer.img && (
                <>
                  <br />
                  <img height={250} width={250} src={correctAnswer.img} alt={correctAnswer.title} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-3">
        <div>
          {item.mainTheme} - {item.subThemes}
        </div>
        {item.actuality}
      </div>
    </div>
  )
}

export const QuestionCard = memo(QuestionCardMemo)
