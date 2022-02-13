import { useRouter } from 'next/router'

interface OptionProps {
  image: string
  title: string
  subtitle: string
  disabled?: boolean
}
const Option = ({ image, title, subtitle, disabled }: OptionProps) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/createnft/steptwo')}
      className="font-inter text-white h-24 w-[408px] bg-gradient-to-tr from-gray-800 to-white p-[1px] rounded-xl"
    >
      <div
        className={`flex w-full h-full px-6 py-4 bg-[#1D1E27] opacity-80 rounded-xl gap-x-4 ${
          disabled && 'opacity-40'
        }`}
      >
        <img src={image} alt="icon" />
        <div>
          <div className="text-2xl">{title}</div>
          <div className="text-xl opacity-50">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}

export default Option
