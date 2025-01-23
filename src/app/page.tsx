import Image from "next/image";
import Rotate from '../components/motion/Rotate';
import RevealText from "../components/motion/RevealText";
import { Audiowide, Inter } from "next/font/google";

const audioWide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});

const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export default function Home() {

  const welcomeText = `Hi, I'm Misael Nivio, developer with 5+ years working in amazing projects. Take a look to my experience. 👨🏽‍💻`;

  return (
    <div className="relative z-10 flex flex-col justify-center items-center w-full h-screen">
      <Rotate
        delaySecs={3}
        element={<Image src="/logomisanc21.png" alt="logo" width={70} height={70} />}
        scaleArray={[1, 1.5, 1, 1.3, .7, 1]}
        rotateArray={[0, 0, 0, 360, 0]}
        borderRadiusArray={["50%", "50%", "50%", "50%", "50%"]}
        timesArray={[0, 0.2, 0.5, 0.8, 1]}
        flex={true}
      />
      <h1 className={`text-5xl font-bold mt-2 ${audioWide.className}`} >Misanc21</h1>
      <p className={`text-[25px] font-light text-gray-500 ${interFont.className}`}>
        Fullstack Developer
      </p>
      <div className={`mt-24 w-full flex justify-center flex-col px-10 items-center ${interFont.className}`}>
        <p className={`text-base sm:text-xl w-4/5 font-bold text-center`}>
          <RevealText text={welcomeText} />
        </p>
      </div>
    </div>
  );
}
