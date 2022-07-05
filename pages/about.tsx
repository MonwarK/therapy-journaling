import Head from 'next/head'
import React from 'react'
import AuthGuard from '../components/auth-guard.component'

export default function about() {
  return (
    <AuthGuard>
      <Head>
        <title>About | Stress Reliever</title>
      </Head>
      <div className='max-w-screen-xl mx-auto p-5 space-y-5'>
        <div>
          <h1 className='text-3xl font-bold'>About</h1>
          <h2 className='text-xl font-medium'>The Three Column Technique</h2>
          <hr className='my-3' />
          <h3 className="text-xl font-medium italic text-center">“Your mind believes what you tell it.” — Paul J. Meyer</h3>
          <hr className='my-3' />
        </div>
        <div className='space-y-3'>
          <div className='bg-white p-4 shadow-md'>
            <h3 className='text-xl font-medium mb-3'>There are different faces of cognitive distortions:</h3>
            <ul className='list-disc px-5'>
              <li>The blamer</li>
              <li>The catastrophizer</li>
              <li>The downplayer of positives</li>
              <li>The all-or-nothing thinker</li>
              <li>The conclusion jumper</li>
              <li>The denier</li>
              <li>The uncertainty hater</li>
              <li>The fortune teller</li>
              <li>The negative filterer</li>
              <li>The personalizer</li>
              <li>The fairness judger</li>
              <li>The mind reader</li>
              <li>The labeler</li>
            </ul>
          </div>
        </div>
        <div className='space-y-3'>
          <div>
            <p>Cognitive distortions can increase stress, anxiety, and depression. Everyone has them, some people have them more often.</p>
            <p>The Three Column Technique is a proven practice for improving your internal self-critical dialogue. Here are the key points:</p>
          </div>
          <ul className='list-disc px-5'>
            <li>Train yourself to write down your critical thoughts.</li>
            <li>Train yourself to write down critical thoughts that run through your mind. Identify distortions. Learn why these thoughts are distorted.</li>
            <li>Talk back to your distorted thoughts. Practice talking back to them to develop a more realistic self-evaluation system.</li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h3 className='text-xl font-medium'>What do studies say about this method?</h3>
          <ul className='list-disc px-5'>
            <li>A 2012 meta-study of 269 studies about CBT found that there is “very strong” evidence that CBT successfully treats anxiety, anger management, and stress. — Department of Psychology, Boston University</li>
            <li>A 2008 study found that Cognitive Behavioral Therapy is as effective as antidepressant drug therapy at reducing depression symptoms. — University of Pennsylvania School of Medicine</li>
            <li>A 2008 study examined 300 CBT patients and determined that CBT significantly alleviated symptoms of worrying and depression. — Department for Anxiety Disorders Overwaal, Forum GGz Nijmegen, The Netherlands</li>
          </ul>
        </div>
      </div>
    </AuthGuard>
  )
}
