import Head from "next/head"
import { useState } from "react"
import { shuffle } from "../array"
import { QuestionsWithCategories } from "../models"
import { Main, Container, QuestionCard } from "../components"
import { GetServerSidePropsContext, NextPage } from "next"
import absoluteUrl from "next-absolute-url"

const title = "Interaktivní modelový test z českých reálií"

const getQuestions = async (baseUrl: string): Promise<QuestionsWithCategories[]> => {
  const res = await fetch(`${baseUrl}/api/questions`)
  return res.json()
}

const shuffleQuestions = (questions: QuestionsWithCategories[], count: number) => {
  const shuffled = shuffle(questions)
  return shuffled.slice(0, count)
}

type Props = { data: QuestionsWithCategories[] }

const DEFAULT_COUNT = 30

const Home: NextPage<Props> = (props) => {
  const { data } = props
  const maxQuestions = data?.length ?? 0
  const [questionsCount, setQuestionsCount] = useState(DEFAULT_COUNT)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [questions, setQuestions] = useState(data)
  const correctPercentage = Math.round((correctAnswers / questionsCount) * 100)
  const seed = questions.map((q) => q.id).join("")

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="sticky text-center md:text-inherit md:flex justify-between items-center top-0 right-0 p-3 bg-gray-100 rounded-md z-50 shadow-md">
        <div>
          Spravnych odpovedi: {correctAnswers} z {questionsCount} ({correctPercentage}%)
        </div>
        <div className="md:text-right flex-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
            onClick={() => setQuestions(shuffleQuestions(data, questionsCount))}
          >
            Začít novy test?
          </button>
        </div>
      </div>
      <Main className="my-2">
        <Container>
          <h1 className="text-2xl mb-2">{title}</h1>
          <div className="mb-3">
            <div className="flex gap-4 items-center flex-col md:flex-row">
              <div>
                Kolik otažek chcete zobrazit?
                <input
                  className="ml-2 rounded-sm border-2 border-gray-300 px-2 py-1 w-17"
                  type="number"
                  value={questionsCount}
                  max={maxQuestions}
                  min={30}
                  onChange={(event) =>
                    setQuestionsCount(
                      event.target.valueAsNumber > maxQuestions ? maxQuestions : event.target.valueAsNumber
                    )
                  }
                />
              </div>
            </div>
          </div>
          {questions.map((item) => (
            <QuestionCard
              seed={seed}
              item={item}
              key={`${item.id}`}
              onChange={(c) => setCorrectAnswers((i) => (c ? i + 1 : i))}
            />
          ))}
        </Container>
      </Main>
    </>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const url = absoluteUrl(context.req)

  const data = await getQuestions(url.origin)

  return {
    props: {
      data: shuffleQuestions(data, DEFAULT_COUNT),
    }, // will be passed to the page component as props
  }
}

export default Home
