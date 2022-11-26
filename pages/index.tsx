import Head from "next/head"
import { useCallback, useMemo, useState } from "react"
import { shuffle } from "../array"
import { QuestionCategory, QuestionsWithCategories } from "../models"
import { Main, Container, QuestionCard } from "../components"
import { GetServerSidePropsContext, NextPage } from "next"
import absoluteUrl from "next-absolute-url"

type Props = { data: QuestionCategory[]; seed: string }

const title = "Interaktivní modelový test z českých reálií"

const getQuestions = async (baseUrl: string): Promise<QuestionCategory[]> => {
  const res = await fetch(`${baseUrl}/api/questions`)
  return res.json()
}

const backTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

const generateTest = (mainCategories: QuestionCategory[], seed: string): QuestionsWithCategories[] => {
  const categories = shuffle(mainCategories, seed)
  return categories.flatMap((category, categoryIndex) => {
    return category.themes.flatMap((theme, themeIndex): QuestionsWithCategories => {
      const [question] = shuffle(theme.questions, seed)

      return {
        ...question,
        mainTheme: category.name,
        subTheme: theme.name,
        id: `${categoryIndex}-${themeIndex}-${seed}`,
      }
    })
  })
}

const newSeed = () => Math.random().toString(36).substring(2, 12)

const Home: NextPage<Props> = (props) => {
  const { data, seed } = props
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [questions, setQuestions] = useState(generateTest(data, seed))
  const total = questions.length
  const correctPercentage = Math.round((correctAnswers / total) * 100)

  const handleNewTest = useCallback(() => {
    setCorrectAnswers(0)
    setQuestions(generateTest(data, newSeed()))
    backTop()
  }, [data])

  const handleQuestionAnswer = useCallback(
    (isCorrect: boolean) => {
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1)
      }
    },
    [setCorrectAnswers]
  )

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="h-2 bg-blue-200" />

      <div className="sticky text-center md:text-inherit md:flex justify-between items-center top-0 right-0 p-3 bg-gray-100 rounded-md z-50 shadow-md">
        <div>
          Spravnych odpovedi: {correctAnswers} z {total} ({correctPercentage}%)
        </div>
        <div className="md:text-right flex-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
            onClick={handleNewTest}
          >
            Začít novy test?
          </button>
        </div>
      </div>
      <Main className="my-2">
        <Container>
          <h1 className="text-2xl mb-2">{title}</h1>

          {questions.map((item, index) => (
            <QuestionCard index={index} seed={seed} item={item} key={item.id} onChange={handleQuestionAnswer} />
          ))}
        </Container>
      </Main>
      <footer className="bg-sky-100 p-2">
        {/* copiright with year */}
        <div className="text-center text-gray-500 text-sm py-2">© {new Date().getFullYear()}</div>
      </footer>
    </>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const url = absoluteUrl(context.req)

  const data = await getQuestions(url.origin)

  return {
    props: {
      seed: newSeed(),
      data,
    },
  }
}

export default Home
