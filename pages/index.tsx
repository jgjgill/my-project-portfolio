import { NextPage } from 'next'
import MyInfoContainer from '@components/home/myInfoContainer'
import Head from 'next/head'
import ImageContainer from '@components/home/imageContainer'
import UpButton from '@components/upButton'
import MyStackContainer from '@components/home/myStackContainer'
import MyProjectContainer from '@components/home/myProjectContainer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className='space-y-20'>
        <ImageContainer />
        <MyInfoContainer />
        <MyStackContainer />
        <MyProjectContainer />
        <UpButton />
      </div>
    </>
  )
}

export default Home
