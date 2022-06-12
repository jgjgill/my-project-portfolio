import { NextPage } from 'next'
import Head from 'next/head'

import MyProjectContainer from '@components/home/myProjectContainer'
import MyStackContainer from '@components/home/myStackContainer'
import MyInfoContainer from '@components/home/myInfoContainer'
import ImageContainer from '@components/home/imageContainer'
import UpButton from '@components/common/upButton'

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
