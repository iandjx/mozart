import Layout from '../../components/shared/Layout'

import React, { useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/router'
import ContinueButton from '../../components/shared/ContinueButton'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: 2,
  backgroundColor: 'rgba(25, 26, 35, 0.41)',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const Steptwo = () => {
  const router = useRouter()
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: 'audio/*', maxSize: 100 * 1000 * 1000 })

  const style: any = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  )
  const next = () => {
    router.push('/createnft/stepthree')
  }

  return (
    <Layout className="bg-glow">
      <main className="mt-24">
        <div className="w-full bg-[#1D1E27] bg-opacity-50 p-16 flex flex-col ">
          <h1 className="mx-auto text-4xl font-bold">
            Create your new audio NFT
          </h1>
          <div className="mt-12 text-2xl">Step 1: Upload your music</div>

          {/* React DropZone */}
          <section className="mt-7">
            <div {...getRootProps({ style })}>
              <input {...getInputProps()} />
              <div className="flex w-full p-11">
                <img src="/images/createNFT/cloud-upload.svg" alt="upload" />
                <div className="ml-32">
                  <div className="text-2xl">
                    Drag and drop a song here or click here
                  </div>
                  <div className="text-base text-white">UPLOAD UPTO 100MB</div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 text-2xl">Step 2: Upload album art</div>
          <section className="flex w-full mt-7">
            <div className="h-24 w-24 bg-[#191A23] bg-opacity-40 p-7">
              <img src="/images/createNFT/add.svg" alt="add" />
            </div>
            <div className="flex flex-col text-base ml-7">
              <div className="text-white">Upload Album art</div>
              <div className="text-white opacity-50">
                This image will be displayed on the cover
              </div>
              <div className="mt-auto text-white opacity-70">
                UPLOAD UPTO 10MB
              </div>
            </div>
            <button className="grid ml-auto w-44 h-11 place-items-center bg-[#252732] bg-opacity-60">
              UPLOAD
            </button>
          </section>
          <section className="mx-auto mt-14 ">
            <ContinueButton onClick={next} />
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default Steptwo
