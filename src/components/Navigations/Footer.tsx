import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import YUVTARANG_TEXT from "../../../public/assets/images/yuvtarang-text.png";
import GAUTAMANKOJI from "../../../public/assets/images/team/gautamankoji.jpg";
import RAHUL from "../../../public/assets/images/team/rahul.png";


const TextScrambleHover = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className={`${className}`}>
      {text}
    </div>
  )
}

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className='flex flex-col items-center justify-center min-h-60 xl:h-auto bg-[#553919]/80 text-primary border-b '>
        <div className='grid grid-cols-12 w-full h-full '>
          <div className='col-span-4 xl:col-span-6 sm:!col-span-12  p-5 flex flex-col justify-start gap-4'>
            <div className='h-auto uppercase  text-xs tracking- -space-y-16 flex flex-col items-center justify-center'>
              <Image alt='yuvtarang' src={YUVTARANG_TEXT} className='w-60 mb-20 select-none' />
              <p className='text-sm'>
                A 2 day cultural fest.
              </p>
            </div>
          </div>
          <div className='col-span-3 xl:col-span-6 sm:!col-span-12 p-5 flex flex-col justify-between lg:justify-start gap-4'>
            <div className='h-40 lg:h-auto uppercase text-sm tracking-tight -space-y-1 flex flex-col  gap-2 font-medium'>
              <Link href={`/`} className={`${router.pathname == "/" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="Home" className='' />
              </Link>
              <Link href={`/timeline`} className={`${router.pathname == "/timeline" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="Timeline" className='' />
              </Link>
              <Link href={`/prizes`} className={`${router.pathname == "/prizes" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="Prizes" className='' />
              </Link>
              <Link href={`/sponsors`} className={`${router.pathname == "/sponsors" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="Sponsors" className='' />
              </Link>
              <Link href={`/gallery`} className={`${router.pathname == "/gallery" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="Gallery" className='' />
              </Link>
              <Link href={`/#about`} className={`${router.pathname == "/#about" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="About" className='' />
              </Link>
              <Link href={`/#faq`} className={`${router.pathname == "/#faqs" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="FAQs" className='' />
              </Link>
            </div>
          </div>
          <div className='col-span-3 xl:col-span-6 sm:!col-span-12  p-5 flex flex-col justify-between lg:justify-start gap-4'>
            <div className='h-40 lg:!h-auto uppercase text-sm tracking-tight -space-y-1 flex flex-col  gap-2 font-medium'>

              
            <div className="text-center md:text-left">
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center justify-center md:justify-start text-white">
                            <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            Vignan's IIT, Visakhapatnam
                        </li>
                        <li className="flex items-center justify-center md:justify-start text-white">
                            <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            yuvtarang2k25.viit@gmail.com
                        </li>
                         <li className="flex items-center justify-center md:justify-start text-white">
                            <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            +91 00000 00000
                        </li> 
                    </ul>
                </div>
            </div>

          </div>
          <div className='col-span-2 xl:col-span-6 sm:!col-span-12 p-5 flex flex-col justify-between lg:justify-start gap-0 lg:gap-10'>
            <div className='h-40 lg:h-auto space-y-6'>
              <li className='text-sm  uppercase list-[none]'>Website Team</li>
              <div className='flex flex-wrap gap-2 overflow-clip'>
                <Link href={"https://github.com/gautamankoji/"} target='_blank' title='Gautam Ankoji'>
                  <Image src={GAUTAMANKOJI} alt='gautamankoji' className='w-8 h-8 bg-primary border border-[#271d12] rounded-full' />
                </Link>
                <Link href={"https://github.com/rahul-9429/"} target='_blank' title='Rahul Kasimikota'>
                <Image src={RAHUL} alt='gautamankoji' className='w-8 h-8 bg-primary border border-[#271d12] rounded-full' />
                </Link>
                {/* <Link href={"#"} target='_blank' title='Contributor 3'>
                  <div className='w-8 h-8 bg-[#4d3923] border border-[#271d12] rounded-full' />
                </Link>
                <Link href={"#"} target='_blank' title='Contributor 4'>
                  <div className='w-8 h-8 bg-[#4d3923] border border-[#271d12] rounded-full' />
                </Link> */}
              </div>
            </div>
          </div>

        </div>  
        <div className="mt-12 w-full pt-8 pb-12 border-t border-yellow-900/80 text-center">
                <p className="text-sm text-yellow-100/60">© 2025 Yuvtarang - VIGNAN'S IIT . All rights reserved.
                </p>
                {/* <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-sm text-yellow-100/60 hover:text-yellow-300 transition-colors">Privacy
                        Policy</a>
                    <a href="#" className="text-sm text-yellow-100/60 hover:text-yellow-300 transition-colors">Terms of
                        Service</a>
                    <a href="#" className="text-sm text-yellow-100/60 hover:text-yellow-300 transition-colors">Cookie
                        Policy</a>
                </div> */}
            </div>
      </footer>
    </>
  )
}

export default Footer