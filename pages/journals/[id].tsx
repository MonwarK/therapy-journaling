import { doc, getDoc, Timestamp } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { Journal } from '../../@types/journal.context.type'
import { UserContext } from '../../context/user.context'
import { db } from '../../utilities/firebase.utilities'

interface Props {
  stringifiedJournal: string
}

export default function JournalId({ stringifiedJournal } : Props) {
  const journal = JSON.parse(stringifiedJournal);
  const auth = useContext(UserContext);

  useEffect(() => {
    if(journal.uid !== auth?.user?.uid) {
      Router.push("/journals")
    }
  }, [])
  
  return (
    <div className='p-5 max-w-xl mx-auto'>
      <Head>
        <title>Journal Entry - {journal?.title} | Stress Reliever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-white p-5 shadow-lg space-y-5'>
        <h1 className='text-2xl uppercase font-medium text-center'>{journal.title}</h1>
        <div>
          <h2 className='font-bold mb-1'>Negative thoughts:</h2>
          <p>{journal?.negativeThoughts}</p>
        </div>
        <div>
          <h2 className='font-bold mb-1'>Cognitive errors:</h2>
          <p>{journal?.cognitiveError}</p>
        </div>
        <div>
          <h2 className='font-bold mb-1'>The rational alternative:</h2>
          <p>{journal?.rationalAlternative}</p>
        </div>
        <div className='flex justify-between items-center text-xs text-gray-400'>
          <div>
            <Link href='/journals'>
              <p className='cursor-pointer hover:underline'>Go back</p>
            </Link>
          </div>
          <div>
            Created at {new Date(new Timestamp(journal.dateCreated.seconds, journal.dateCreated.nanoseconds).toDate()).toDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const ref = doc(db, "journals", context.query.id);
  const docSnap = await getDoc(ref);
  const journal = { 
    id: docSnap.id, 
    ...docSnap.data() 
  }

  return{
    props: {
      stringifiedJournal: JSON.stringify(journal)
    }
  }
}