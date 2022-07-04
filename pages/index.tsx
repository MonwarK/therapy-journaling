import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Lottie from "lottie-react";
import psychotherapyAnimation from "../animations/psychotherapy.json"
import { CheckCircleIcon, EmojiHappyIcon, GiftIcon } from "@heroicons/react/outline"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Feature */}
        <div className='bg-[#f3f4f5]'>
          <div className='h-[50vh] grid grid-cols-2 items-center p-5 uppercase max-w-screen-xl mx-auto'> 
            <div>
              <h1 className='text-4xl font-black text-gray-600'>Welcome to the <span className='text-indigo-500'>stress relieving</span> journaling app.</h1>
            </div>
            <div>
              <Lottie 
                animationData={psychotherapyAnimation} 
                loop={true} 
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className='max-w-screen-xl mx-auto p-5 my-10'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center'> 
              <div className='bg-white cursor-pointer p-3 rounded-lg shadow-md duration-100 hover:scale-110 active:text-indigo-500 group'>
                <EmojiHappyIcon className='h-10 mb-3 mx-auto text-gray-600 group-active:text-indigo-500' />
                <p>Easy to understand.</p>
              </div>
              <div className='bg-white cursor-pointer p-3 rounded-lg shadow-md duration-100 hover:scale-110 active:text-indigo-500 group'>
                <GiftIcon className='h-10 mb-3 mx-auto text-gray-600 group-active:text-indigo-500' />
                <p>Free and easily accessible at all times.</p>
              </div>
              <div className='sm:col-span-2 md:col-span-1 bg-white cursor-pointer p-3 rounded-lg shadow-md duration-100 hover:scale-110 active:text-indigo-500 group'>
                <CheckCircleIcon className='h-10 mb-3 mx-auto text-gray-600 group-active:text-indigo-500' />
                <p>Helps use proven techinques to improve mindset.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto p-5 my-10 space-y-8 text-lg'>
          <h2 className='text-3xl uppercase'>Why use our service?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas integer eget aliquet. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Interdum varius sit amet mattis vulputate enim nulla. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Tempor commodo ullamcorper a lacus. Diam ut venenatis tellus in. At erat pellentesque adipiscing commodo elit at imperdiet dui. Dolor sit amet consectetur adipiscing. Molestie a iaculis at erat pellentesque adipiscing commodo.</p>
          <p>Viverra mauris in aliquam sem fringilla ut. Enim tortor at auctor urna nunc id. Mattis vulputate enim nulla aliquet porttitor lacus. Ornare suspendisse sed nisi lacus sed viverra tellus. Habitant morbi tristique senectus et netus et malesuada. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Nisl tincidunt eget nullam non nisi est. Id velit ut tortor pretium. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Dignissim convallis aenean et tortor at risus viverra adipiscing. In pellentesque massa placerat duis ultricies. Enim nunc faucibus a pellentesque sit. Volutpat est velit egestas dui id.</p>
        </div>
      </main>
    </div>
  )
}

export default Home
