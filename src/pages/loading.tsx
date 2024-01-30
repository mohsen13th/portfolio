import Image from 'next/image'

const Loading = () => {
  return (
    <div className="absolute left-0 top-0 h-full w-full bg-slate-600 bg-opacity-25">
      <Image
        src="loading.svg"
        width={100}
        height={100}
        alt="loading"
        className="absolute inset-x-0 top-1/3 mx-auto  animate-spin"
      />
    </div>
  )
}

export default Loading
