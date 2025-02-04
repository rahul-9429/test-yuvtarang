import React from 'react'
import Image, { StaticImageData } from 'next/image';
import VIGNAN_LOGO from "../../public/assets/svgs/vignan-logo.svg";
import SKYLARK from "../../public/assets/images/sponsors/skylarkoe-logo.png";
import AECC from "../../public/assets/images/sponsors/aecc-logo.jpg";
import IDP from "../../public/assets/images/sponsors/idp-logo-.png";
import INVICTA from "../../public/assets/images/sponsors/invicta-logo.jpg";
import SAC_LOGO from "../../public/assets/images/sponsors/sac-logo.jpg";
import MagicButton from '@/components/Elements/MagicButton';
import Link from 'next/link';

const SponsorCard = ({ src, alt, className }: { src: string | StaticImageData; alt: string; className?: string }) => {
  return (
    <div className="relative group min-h-28 bg-white flex items-center justify-center rounded-lg">
      <Image src={src} alt={alt} className={`${className} w-60 h-28 object-center object-contain rounded-md bg-white`} />

      {/* Tooltip */}
      <div className="absolute -bottom-10 mb-2 left-1/2 transform -translate-x-1/2 text-xs font-serif font-semibold tracking-wider uppercase bg-white text-foreground rounded py-1 px-2 whitespace-nowrap transition-all duration-300 ease-in-out scale-0 group-hover:scale-110 z-10">
        {alt}
      </div>
    </div>
  )
}



const sponsors = () => {
  return (
    <div className='min-h-screen max-w-7xl justify-self-center max-container'>
      <div id='sponsors' className='flex flex-col items-center justify-center text-center scroll-m-10'>

        <div className="space-y-3 mb-6">
          <Link href="/" className="hidden lg:flex items-center">
            <button className="flex items-center p-3 py-2 border border-[--border] rounded-lg bg-[--primary] text-[--foreground] font-serif uppercase text-sm transition-all duration-200 ease-in-out hover:bg-[--primary-light] hover:text-[--footer] group">
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-all duration-200 ease-in-out"
                xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5m7 7l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Back</span>
            </button>
          </Link>
          <div className="flex flex-col items-center justify-center">
            <MagicButton title='Event Sponsors' />
            <p className='mt-3 max-w-[80rem] text-lg text-center'>Our mission wouldn't be possible without the support of our amazing sponsors! <span className='inline-block lg:hidden'>They're the true crewmates behind the scenes, fueling this hackathon with resources and opportunities.</span> A big thank you to them for helping us reach new heights!</p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col flex-wrap gap-2 items-center justify-center w-full">
        <div className='w-fit'>
          <div className='font-semibold tracking-wide'>Sponsors</div>
          <div className='w-full bg-background-seconday py-4 grid grid-cols-4 lg:grid-cols-2 xs:!grid-cols-2 gap-3'>
            <SponsorCard src={SKYLARK} alt={"Skylark"} />
            <SponsorCard src={AECC} alt={"AECC"} />
            <SponsorCard src={IDP} alt={"IDP"} />
            <SponsorCard src={INVICTA} alt={"Invicta"} />
          </div>
        </div>
        <div className='w-fit'>
          <div className='font-semibold tracking-wide'>Event Partners</div>
          <div className='w-full bg-background-seconday py-4 grid grid-cols-2 lg:grid-cols-2 xs:!grid-cols-2 gap-3'>
            <SponsorCard src={VIGNAN_LOGO} alt={"Vignan's IIT"} />
            <div className='-mt-10'>
              <div className='font-semibold tracking-wide mb-4'>Community Partner</div>
              <SponsorCard src={SAC_LOGO} className={`h-[4rem]`} alt={"SAC"} />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default sponsors