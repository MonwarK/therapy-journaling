import Link from 'next/link';
import React, { useContext } from 'react';
import { Journal } from '../@types/journal.context.type';
import { JournalContext } from '../context/journal.context';

export default function JournalCollection() {
  const journalContext = useContext(JournalContext);
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-5'>
        {journalContext?.journals?.length == 0 ? (
          <p>You have no journal entries...</p>
        ) : (
          journalContext?.journals?.map((journal: Journal, i) => (
            <Link href={`/journals/${journal.id}`}>            
              <div className='bg-white p-5 shadow-md space-y-4 cursor-pointer hover:rotate-3 duration-100'>
                <h3 className='font-bold'>{journal.title}</h3>
                <p className='line-clamp-3'>{journal.negativeThoughts}</p>
                <div className='flex justify-end text-xs text-gray-400'>
                  <p>Created at {new Date(journal?.dateCreated?.toDate()).toDateString()}</p>
                </div>
              </div>
            </Link>
          ) 
        ))}
      </div>
    </div>
  )
}
