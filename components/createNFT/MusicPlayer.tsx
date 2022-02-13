import React from 'react'
import WaveSurfer from 'wavesurfer.js'
import { useRef, useState, useEffect } from 'react'

const tracks = [
  {
    id: 0,
    title: 'Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b',
    url: 'https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3',
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url: 'https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3',
  },
]

const MusicPlayer = () => {
  return <Waveform url={tracks[0].url} />
}

export default MusicPlayer

const formWaveSurferOptions = (ref: WaveSurfer) => ({
  container: ref,
  waveColor: 'rgba(255, 255, 255, 0.12)',
  progressColor: '#A444DE',
  cursorColor: '#A444DE',
  barWidth: 1,
  barRadius: 1,
  responsive: true,
  height: 100,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
})

function Waveform({ url }: { url: string }) {
  const waveformRef = useRef(null)
  const wavesurfer = useRef<WaveSurfer>()
  const [playing, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [timeRemaining, setTimeRemaining] = useState('-0:00')

  useEffect(() => {
    if (playing && wavesurfer.current) {
      wavesurfer.current.on('audioprocess', function () {
        if (wavesurfer.current?.isPlaying()) {
          const totalTime = wavesurfer.current.getDuration()
          const currentTime = wavesurfer.current.getCurrentTime()
          setTimeRemaining(`-${secondsToMinutes(totalTime - currentTime)}`)
        }
      })
    }
  }, [playing])

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    console.log('rerendering')
    if (!waveformRef.current) return
    setPlay(false)

    const options: any = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)

    wavesurfer.current.load(url)

    wavesurfer.current.on('ready', function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume)
        setVolume(volume)
      }
    })

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => {
      if (!wavesurfer.current) return
      return wavesurfer.current.destroy()
    }
  }, [url, volume])

  const handlePlayPause = () => {
    if (!wavesurfer.current) return
    setPlay(!playing)
    wavesurfer.current.playPause()
  }

  return (
    <div className="flex items-center w-full pt-2 pb-4 ">
      <div className="grow max-w-[90%]" id="waveform" ref={waveformRef} />
      <div className="flex flex-col items-center ml-auto">
        <button onClick={handlePlayPause}>
          <img src="/images/createNFT/music-play.svg" alt="play" />
        </button>
        <div className="mt-2 opacity-40">{timeRemaining}</div>
      </div>
    </div>
  )
}

const secondsToMinutes = (seconds: number) =>
  Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2)
