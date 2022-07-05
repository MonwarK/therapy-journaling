import dynamic from 'next/dynamic'
import React, { useContext, useEffect } from 'react'
import AuthGuard from '../components/auth-guard.component'
import SentimentInfo from '../components/sentiment-info.component'

export default function sentimentscore() {

  return (
    <AuthGuard>
      <div className='max-w-screen-xl mx-auto p-5 space-y-5'>
        <h1 className='text-2xl uppercase font-bold'>Sentiment Score</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora a, iusto tempore odit officia quaerat placeat, incidunt sunt nulla, porro obcaecati officiis quasi assumenda soluta iure nostrum corrupti sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum eius porro! Eius quaerat ipsam in iure quam, consequuntur quasi illum modi cumque ducimus dolorum est eligendi alias sapiente quas!</p>
        <SentimentInfo />
      </div>
    </AuthGuard>
  )
}
