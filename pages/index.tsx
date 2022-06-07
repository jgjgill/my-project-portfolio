import { NextPage } from 'next'
import Introduce from '@components/home/introduce'
import Project from '@components/home/project'
import Head from 'next/head'
import MyStack from '@components/home/myStack'
import Intro from '@components/home/intro'
import UpButton from '@components/upButton'

const Home: NextPage = () => {
  return (
    <div className='space-y-20'>
      <Head>
        <title>Home</title>
      </Head>
      <Intro />
      <Introduce />
      <MyStack />
      <Project />
      <UpButton />
    </div>
  )
}

export default Home
