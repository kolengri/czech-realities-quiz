import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useMemo, useState } from "react"
import { shuffle } from "../array"
import { Categories } from "../models"
import { Main, Container, QuestionCard, Loader } from "../components"
import { useGetQuestions } from "../hooks/api"

const title = "Test: otázky pro způsobilost"

const Home: NextPage = () => {
  const [category, setCategories] = useState<Categories>(Categories.M)
  const { data, isValidating } = useGetQuestions(category)
  const [questionsCount, setQuestionsCount] = useState(30)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [nextTest, setNextTest] = useState(0)
  const questions = useMemo(
    () => shuffle([...(data ?? [])]).splice(0, questionsCount),
    [data, questionsCount, nextTest]
  )

  useEffect(() => {
    setCorrectAnswers(0)
  }, [questions])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="fixed top-1 right-1 p-3 bg-teal-300 rounded-md">
        <p>
          Spravnych odpovedi: {correctAnswers} z {questionsCount}
        </p>
      </div>
      <Main className="my-2">
        <Container>
          <h1 className="text-2xl mb-2">{title}</h1>
          <div className="mb-3">
            <div className="flex gap-4 items-center">
              <div>
                Kterou kategorii chcete zobrazit?
                <select
                  onChange={(e) => setCategories(e.target.value as Categories)}
                  className="bg-slate-100 px-3 py-2 ml-2 rounded-sm"
                >
                  {Object.keys(Categories).map((key) => (
                    <option key={key} value={key} selected={key === category}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                Kolik otažek chcete zobrazit?
                <input
                  className="ml-2 rounded-sm border-2 border-gray-300 px-2 py-1"
                  type="number"
                  value={questionsCount}
                  onChange={(event) => setQuestionsCount(Number(event.target.value))}
                />
              </div>

              <div className="text-right flex-1">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
                  onClick={() => setNextTest((c) => c + 1)}
                >
                  Začít novy test?
                </button>
              </div>
            </div>
          </div>
          <div>
            <Loader loading={isValidating}>
              {questions.map((item) => (
                <QuestionCard
                  item={item}
                  key={`${item.article}${nextTest}`}
                  onChange={(c) => setCorrectAnswers((i) => (c ? i + 1 : i))}
                />
              ))}
            </Loader>
          </div>
        </Container>
      </Main>
    </>
  )
}

export default Home
