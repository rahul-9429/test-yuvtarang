import React from 'react';
import YUVTARANG_LOGO from "../../../public/assets/images/yuvtarang-logo.png";
import YUVTARANG_TEXT from "../../../public/assets/images/yuvtarang-text.png";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RangoliArt } from "@/components/Vectors/Icons";
import SQUAREPATTERN from "../../../public/assets/images/squarepattern.png";
import GAUTAMANKOJI from "../../../public/assets/images/team/gautamankoji.jpg"
import Link from 'next/link';

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
      <footer className='flex items-center justify-center h-60 xl:h-auto bg-[#271d12] text-primary border-b border-[#271d12]'>
        <div className='grid grid-cols-12 w-full h-full '>
          <div className='col-span-3 xl:col-span-6 sm:!col-span-12 border-r border-[#271d12] p-5 flex flex-col justify-start gap-4'>
            <div className='h-auto uppercase font-serif text-xs tracking- -space-y-16 flex flex-col items-center justify-center'>
              <Image alt='yuvtarang' src={YUVTARANG_TEXT} className='w-60 mb-20 select-none' />
              <p className=''>
                "Yuvtarang" is an annual cultural 2-Day festival org by all the students belonging to all the institutions forming the Vignan Vizag group.
              </p>
            </div>
          </div>
          <div className='col-span-3 xl:col-span-6 sm:!col-span-12 border-r border-[#271d12] p-5 flex flex-col justify-between lg:justify-start gap-4'>
            <div className='h-40 lg:h-auto uppercase text-sm tracking-tight -space-y-1 flex flex-col font-serif gap-2 font-medium'>
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
              <Link href={`/#faqs`} className={`${router.pathname == "/#faqs" ? "bg-primary text-black " : "text-primary"} leading-4 w-fit`}>
                <TextScrambleHover text="FAQs" className='' />
              </Link>
            </div>
          </div>
          <div className='col-span-3 xl:col-span-6 sm:!col-span-12 border-r border-[#271d12] p-5 flex flex-col justify-between lg:justify-start gap-4'>
            <div className='h-40 lg:!h-auto uppercase text-sm tracking-tight -space-y-1 flex flex-col font-serif gap-2 font-medium'>
              <Link href={`https://www.linkedin.com/company/vignan-s-student-activity-council`} target='_blank'><TextScrambleHover text="linkedin" className='' /></Link>
              <Link href={`https://www.instagram.com/vsac.viit`} target='_blank'><TextScrambleHover text="instagram" className='' /></Link>
              <li className='text-[11px] font-serif uppercase list-[square] pt-6'>Contact Us At</li>
              <Link href={`mailto:yuvtarang2k25.viit@gmail.com`} target='_blank'><TextScrambleHover text="yuvtarang2k25.viit@gmail.com" className='' /></Link>
              <div className=''>Vignan's Institute Of Information Technology</div>
            </div>

          </div>
          <div className='col-span-3 xl:col-span-6 sm:!col-span-12 p-5 flex flex-col justify-between lg:justify-start gap-0 lg:gap-10'>
            <div className='h-40 lg:h-auto space-y-8'>
              <li className='text-[11px] font-serif uppercase list-[square]'>Website Team</li>
              <div className='flex flex-wrap gap-2 overflow-clip'>
                <Link href={"https://github.com/gautamankoji/"} target='_blank' title='Gautam Ankoji'>
                  <Image src={GAUTAMANKOJI} alt='gautamankoji' className='w-8 h-8 bg-primary border border-[#271d12] rounded-full' />
                </Link>
                <Link href={"#"} target='_blank' title='Contributor 2'>
                  <div className='w-8 h-8 bg-[#4d3923] border border-[#271d12] rounded-full' />
                </Link>
                <Link href={"#"} target='_blank' title='Contributor 3'>
                  <div className='w-8 h-8 bg-[#4d3923] border border-[#271d12] rounded-full' />
                </Link>
                <Link href={"#"} target='_blank' title='Contributor 4'>
                  <div className='w-8 h-8 bg-[#4d3923] border border-[#271d12] rounded-full' />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
      <div className="relative overflow-clip">
        <div className="abolute top-0 flex items-center justify-center w-full -mx-3 h-6 select-none">
          {[...Array(320)].map((_, index) => (
            <div key={index} className="flex-none p-px">
              <Image src={SQUAREPATTERN} alt={`square-${index}`} width={100} height={100} className="w-5" />
            </div>
          ))}
        </div>
        <div className='flex flex-col justify-center items-center h-[calc(100vh-6.5rem)] select-none'>
          <Image className="p-10" alt="yuvtarang" src={YUVTARANG_LOGO} />
        </div>
        <div className="sticky bottom-0 flex items-center justify-between h-20 w-full bg-primary uppercase font-serif p-5 tracking-tight text-xs z-50">
          <div className='w-10 lg:hidden flex items-center justify-end'></div>
          <div className='flex gap-20 lg:gap-10 items-center'>
            {/* <Link href={'/policy'}>
              <TextScrambleHover text="Policy" className='whitespace-nowrap' />
            </Link> */}
            <Link href={'/coc'}>
              <TextScrambleHover text="Code of Conduct" className='whitespace-nowrap' />
            </Link>
            {/* <Link href={'/terms'}>
              <TextScrambleHover text="Terms" className='whitespace-nowrap' />
            </Link> */}
          </div>
          <div className='w-10 flex items-center justify-end text-[#4d3923] font-medium whitespace-nowrap'>&copy; {new Date().getFullYear()}</div>
        </div>
        <div className='overflow'>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-0 z-[40] opacity-5">
            <RangoliArt className="" />
          </div>
          <div className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 right-0 z-[40] opacity-5">
            <RangoliArt className="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer