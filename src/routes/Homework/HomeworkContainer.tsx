import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { toast } from 'react-toastify'

import { SUBMIT_HOMEWORK } from './HomeworkQueries'
import useInput from 'hooks/useInput'
import HomeworkPresenter from './HomeworkPresenter'
import Complete from 'components/Complete'

export default function HomeworkContainer() {
  const [submitHomework, { loading, error }] = useMutation(SUBMIT_HOMEWORK)

  const [action, setAction] = useState<'submit' | 'complete'>('submit')

  const github = useInput('')
  const week = useInput('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      await submitHomework({
        variables: {
          github: github.value,
          week: Number.parseInt(week.value),
        },
      })
      if (error) throw Error(error.message)
      setAction('complete')
    } catch (e) {
      toast.error(`업로드 실패. 에러코드: ${e}`)
    }
  }

  return action === 'submit' ? (
    <HomeworkPresenter
      github={github}
      week={week}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  ) : (
    <Complete
      title='과제 등록 성공'
      desc={`${week.value}주차 과제 등록에 성공하셨습니다. 수고하셨습니다.`}
    />
  )
}
