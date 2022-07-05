import dynamic from 'next/dynamic';
import React, { useContext } from 'react'
import { JournalContext } from '../context/journal.context';

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)

export default function SentimentInfo() {
  const journalContext = useContext(JournalContext);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
      <div className='col-span-2 bg-white rounded-lg shadow-lg p-3'>
        <h2 className='text-xl font-semibold'>Journal Entries</h2>
        <div className='max-w-lg'>         
          <Chart
            options={{
              chart: {
                type: 'donut',
              },
              labels: ['positive', 'neutral', 'negative'],
              colors: ['#008FFB', '#FEB019', '#fc3b19']
            }}
            series={[10, 60, 30]}
            type="donut"
          />
        </div>
      </div>  
      <div className='grid col-span-2 grid-cols-2 md:col-span-1 md:grid-cols-1 md:grid-rows-3 gap-3'>
        <div className='bg-white rounded-lg shadow-lg p-3'>
          <h2 className='text-xl font-semibold mb-2'>Average Sentiment Score</h2>
          <p>0.33</p>
        </div>  
        <div className='bg-white rounded-lg shadow-lg p-3'>
          <h2 className='text-xl font-semibold mb-2'>Total Entries</h2>
          <p>{journalContext?.journals.length}</p>
        </div>  
        <div className='bg-white rounded-lg shadow-lg p-3'>
          <h2 className='text-xl font-semibold mb-2'>Total Scores</h2>
          <p>Positive: 10</p>
          <p>Neutral: 60</p>
          <p>Negative: 30</p>
        </div> 
      </div>
    </div>
  )
}
