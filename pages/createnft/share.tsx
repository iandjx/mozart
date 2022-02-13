import Layout from '../../components/shared/Layout'
import dynamic from 'next/dynamic'
import ContinueButton from '../../components/shared/ContinueButton'
import { useRouter } from 'next/router'

const MusicPlayer = dynamic(
  () => import('../../components/createNFT/MusicPlayer'),
  { ssr: false }
)

const Share = () => {
  const router = useRouter()
  return (
    <Layout className="bg-glow">
      <main className="flex justify-center mt-24">
        <div className="w-4/5 bg-[#1D1E27] bg-opacity-50 py-16 px-48 flex flex-col ">
          <img
            src="/images/createNFT/check.svg"
            alt="check"
            className="mx-auto"
          />
          <div className="mx-auto mt-5 text-xl font-semibold">
            Successfully created NFT
          </div>
          <h1 className="mx-auto mt-12 text-4xl font-bold">
            Share your NFT store with fans!
          </h1>
          <img
            src="/images/createNFT/cd.webp"
            className="z-10 w-56 h-auto mx-auto mt-12"
            alt="cd"
          />
          <div className="bg-[#15161E] -mt-36 pt-36 px-5 rounded-lg flex flex-col pb-24 ">
            <div className="mt-12 text-xl font-semibold">Disco Nights</div>
            <div className="mt-1 text-lg opacity-80">
              A cool nft drop by yvncc
            </div>

            <div className="mt-20 text-xl font-semibold">
              Click below to share your NFTs with your fans!
            </div>

            <div className="bg-[#1D1E27] px-5 py-3 text-[#565963] mt-5">
              https://mozart.audio/arman
            </div>
            <div className="w-full mx-auto mt-10">
              <ContinueButton
                text="Share"
                variant="large"
                onClick={() => router.push('/createnft/share')}
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Share
