import Image from "next/image"
import Link from "next/link"

export const Building = () => {
  return (
    <div className="w-screen h-screen flex-col flex items-center justify-center gap-3">
      <div className="w-1/2 sm:w-1/4">
        <Image
          src="/building.png"
          alt="in construction"
          width={100}
          height={70}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 80vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <span className="text-3xl md:text-5xl">
        {`<This page is in building />`}
      </span>
      <Link className="text-2xl text-gray-500 mt-5" href={"/"}>
        Go to home
      </Link>
    </div>
  )
}