import type { NextPage } from 'next'
import Header from '../components/shared/Header'
import Layout from '../components/shared/Layout'
import Option from './../components/createNFT/Option'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const options = [
  {
    title: 'Auction',
    subtitle: 'Sell to the highest bidder',
    image: '/images/createNFT/auction.svg',
    disabled: true,
  },
  {
    title: 'Collection',
    subtitle: 'Make a series of songs',
    image: '/images/createNFT/collection.svg',
    disabled: true,
  },
  {
    title: 'Splits',
    subtitle: 'Share reveneues',
    image: '/images/createNFT/split.svg',
    disabled: true,
  },
  {
    title: 'Unlockable',
    subtitle: 'Reveal exclusive items',
    image: '/images/createNFT/unlock.svg',
  },
  {
    title: 'Pay per play',
    subtitle: 'Get paid per play',
    image: '/images/createNFT/play.svg',
    disabled: true,
  },
]

const Home: NextPage = () => {
  return (
    <Layout className="bg-rays">
      <section className="mt-16">
        <h1 className="text-2xl font-bold">Create a Mozart NFT</h1>
        <h2 className="text-[#9EA0A9]">Choose an option</h2>
      </section>
      <hr className="my-10" />
      <section className="flex flex-wrap mt- gap-7">
        {options.map((opt, index) => (
          <Option
            key={index}
            image={opt.image}
            title={opt.title}
            subtitle={opt.subtitle}
            disabled={opt.disabled}
          />
        ))}
      </section>
    </Layout>
  )
}

export default Home
