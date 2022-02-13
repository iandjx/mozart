import Layout from '../../components/shared/Layout'
import dynamic from 'next/dynamic'
import ContinueButton from '../../components/shared/ContinueButton'
import { useRouter } from 'next/router'

const MusicPlayer = dynamic(
  () => import('../../components/createNFT/MusicPlayer'),
  { ssr: false }
)

const StepFive = () => {
  const router = useRouter()
  return (
    <Layout className="bg-glow">
      <main className="flex justify-center mt-24">
        <div className="w-4/5 bg-[#1D1E27] bg-opacity-50 py-16 px-48 flex flex-col ">
          <h1 className="mx-auto text-4xl font-bold">Confirm your new NFT</h1>
          <img
            src="/images/createNFT/cd.webp"
            className="z-10 w-56 h-auto mx-auto mt-12"
            alt="cd"
          />
          <div className="bg-[#15161E] -mt-36 pt-36 px-5 rounded-t-lg flex flex-col pb-9 ">
            <div className="mt-12 text-xl">Seasons</div>
            <div className="mt-1 text-base text-white opacity-50">
              Complete the following steps to make an audio NFT
            </div>

            <section className="grid w-4/5 grid-cols-2 mx-auto mt-10 text-sm gap-x-5 gap-y-6">
              <div className="flex">
                <img src="/images/createNFT/composer-logo.svg" alt="composer" />
                <div className="ml-3">
                  <div className="line-clamp-1">Satoshi Nakamura</div>
                  <div className="opacity-50">Composer</div>
                </div>
              </div>
              <div className="flex">
                <img src="/images/createNFT/artist-logo.svg" alt="artist" />
                <div className="ml-3">
                  <div className="line-clamp-1">Mozart</div>
                  <div className="opacity-50">Artist</div>
                </div>
              </div>
              <div className="flex">
                <img src="/images/createNFT/ethereum.svg" alt="ethereum" />
                <div className="ml-5">
                  <div>0.001 ETH</div>
                  <div className="opacity-50">To Play</div>
                </div>
              </div>
              <div className="flex">
                <img src="/images/createNFT/ethereum.svg" alt="ethereum" />
                <div className="ml-5">
                  <div>0.115 ETH</div>
                  <div className="opacity-50">To Own</div>
                </div>
              </div>
            </section>
          </div>
          <section className="pt-9 bg-[#1B1C27] px-7 rounded-b-lg">
            <MusicPlayer />
          </section>
          <div className="w-full mx-auto mt-6">
            <ContinueButton
              text="Mint Audio NFT"
              variant="large"
              onClick={() => router.push('/createnft/share')}
            />
          </div>
          <div className="grid grid-cols-2 mt-10">
            <div className="opacity-50">Minting Fees</div>
            <div className="ml-auto">0.021 ETH</div>
            <div className="opacity-50">Estimated Gas</div>
            <div className="ml-auto">0.021 ETH</div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default StepFive
