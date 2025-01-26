import AnimatedLink from "../AnimatedLink";
import Image from "next/image"

export const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-aroun items-center min-h-48">
      <h3 className="text-gray-300 font-bold text-2xl sm:text-3xl"> {`Let's connect!`}</h3>
      <p className="text-gray-300 text-base sm:text-xl mt-3 text-center">
        {`Send me a message and let's start to dev!`}
      </p>
      <div className="w-3/5 sm:w-full my-4 sm:my-10 flex justify-around items-center flex-wrap">
        <div className="w-1/2 p-2 sm:w-fit">
          <AnimatedLink url="https://wa.me/7713593993" target="_blank">
            <Image
              src="/socials/whatsapp.png"
              alt="whatsapp"
              width={70}
              height={70}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </AnimatedLink>
        </div>
        <div className="w-1/2 p-2 sm:w-fit">
          <AnimatedLink url="https://www.linkedin.com/in/misanc21/" target="_blank">
            <Image
              src="/socials/linkedin.png"
              alt="linkedin"
              width={70}
              height={70}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </AnimatedLink>
        </div>
        <div className="w-1/2 p-2 sm:w-fit">
          <AnimatedLink url="https://mail.google.com/mail/?view=cm&fs=1&to=misanc21@gmail.com" target="_blank">
            <Image
              src="/socials/gmail.png"
              alt="gmail"
              width={70}
              height={70}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </AnimatedLink>
        </div>
        <div className="w-1/2 p-2 sm:w-fit">
          <AnimatedLink url="https://twitter.com/misanc21" target="_blank">
            <Image
              src="/socials/twitter.png"
              alt="twitter"
              width={70}
              height={70}
              sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 5vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </AnimatedLink>
        </div>
      </div>
      <span className="text-gray-300  text-lg sm:text-xl my-5">
        However, here is my info 🤓 :
      </span>
      <div className="w-5/6 bg-slate-900 rounded-md flex flex-col justify-center items-center py-5 gap-2">
        <span className="text-gray-300 font-bold text-sm sm:text-lg">
          E-mail: misanc21@gmail.com
        </span>
        <span className="text-gray-300 font-bold text-sm sm:text-lg">
          Phone: +527713593993
        </span>
        <span className="text-gray-300 font-bold text-sm sm:text-lg">
          Misael Nivio Cortes
        </span>
      </div>
    </div>
  )
};