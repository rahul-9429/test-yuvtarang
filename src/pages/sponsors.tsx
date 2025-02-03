import React from 'react'
import Image, { StaticImageData } from 'next/image';
import VIGNAN_LOGO from "../../public/assets/svgs/vignan-logo.svg";
import SKYLARK from "../../public/assets/images/sponsors/skylarkoe-logo.png";
import AECC from "../../public/assets/images/sponsors/aecc-logo.jpg";
import IDP from "../../public/assets/images/sponsors/idp-logo-.png";
import INVICTA from "../../public/assets/images/sponsors/invicta-logo.jpg";
import SAC_LOGO from "../../public/assets/images/sponsors/sac-logo.jpg";
import MagicButton from '@/components/Elements/MagicButton';

const SponsorCard = ({ src, alt }: { src: string | StaticImageData; alt: string; }) => {
  return (
    <div className="relative group inline-block">
      <Image src={src} alt={alt} className="w-60 h-28 object-contain rounded-md bg-white" />

      {/* Tooltip */}
      <div className="absolute -bottom-10 mb-2 left-1/2 transform -translate-x-1/2 text-xs font-serif font-semibold tracking-wider uppercase bg-white text-foreground rounded py-1 px-2 whitespace-nowrap transition-all duration-300 ease-in-out scale-0 group-hover:scale-110 z-10">
        {alt}
      </div>
    </div>
  )
}


const sponsors = () => {
  return (
    <div className='min-h-screen max-w-7xl justify-self-center'>
      <div className='flex flex-col items-center justify-center text-center'>
        <MagicButton title='Event Sponsors' />
        <p className='mt-3 max-w-[80rem] text-lg'>Our mission wouldn't be possible without the support of our amazing sponsors! They're the true crewmates behind the scenes, fueling this hackathon with resources and opportunities. A big thank you to them for helping us reach new heights!</p>
        <div>
        </div>
      </div>
      <div className="relative flex flex-col gap-2">
        <div>
          {/* <div>Platinum Sponsors</div>
                        <div>Gold Sponsors</div> */}
          <div className='font-semibold tracking-wide'>Sponsors</div>
          <div className='w-full bg-background-seconday py-4 grid grid-cols-5 lg:grid-cols-4 xs:!grid-cols-2 gap-3'>
            <SponsorCard src={SKYLARK} alt={"Skylark"} />
            <SponsorCard src={AECC} alt={"AECC"} />
            <SponsorCard src={IDP} alt={"IDP"} />
            <SponsorCard src={INVICTA} alt={"Invicta"} />
          </div>
        </div>
        <div>
          <div className='font-semibold tracking-wide'>Partners</div>
          <div className='w-full bg-background-seconday py-4 grid grid-cols-5 lg:grid-cols-4 xs:!grid-cols-2 gap-3'>
            <SponsorCard src={VIGNAN_LOGO} alt={"Vignan's IIT"} />
          </div>
        </div>
        <div>
          <div className='font-semibold tracking-wide'>Community Partners</div>
          <div className='w-full bg-background-seconday py-4 grid grid-cols-5 lg:grid-cols-4 xs:!grid-cols-2 gap-3'>
            <SponsorCard src={SAC_LOGO} alt={"Partners"} />
            <SponsorCard src={AECC} alt={"Partners"} />
            <SponsorCard src={AECC} alt={"Partners"} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default sponsors