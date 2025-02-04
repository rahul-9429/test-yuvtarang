import React from 'react'
import Image, { StaticImageData } from 'next/image';
import VIGNAN_LOGO from "../../../public/assets/svgs/vignan-logo.svg";
import VIIT_LOGO from "../../../public/assets/svgs/sponsors/viit.svg";
import VIEW_LOGO from "../../../public/assets/svgs/sponsors/view.svg";
import VIPT_LOGO from "../../../public/assets/svgs/sponsors/vipt.svg";
import SKYLARK from "../../../public/assets/images/sponsors/skylarkoe-logo.png";
import AECC from "../../../public/assets/images/sponsors/aecc-logo.jpg";
import IDP from "../../../public/assets/images/sponsors/idp-logo-.png";
import INVICTA from "../../../public/assets/images/sponsors/invicta-logo.jpg";
import SAC_LOGO from "../../../public/assets/images/sponsors/sac-logo.jpg";
import MagicButton from '@/components/Elements/MagicButton';

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


const Sponsors = () => {
    return (
        <div className='max-w-7xl mx-auto justify-items-center'>
            <div id='sponsors' className='flex flex-col items-center justify-center text-center scroll-m-10'>
                <MagicButton title='Event Sponsors' />
                <p className='mt-3 max-w-[80rem] text-lg'>Our mission wouldn't be possible without the support of our amazing sponsors! <span className='inline-block lg:hidden'>They're the true crewmates behind the scenes, fueling this hackathon with resources and opportunities.</span> A big thank you to them for helping us reach new heights!</p>
            </div>
            <div className="relative flex flex-wrap gap-2 items-center justify-center w-full">
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
                    <div className='w-full bg-background-seconday py-4 grid grid-cols-4 lg:grid-cols-2 xs:!grid-cols-2 gap-3'>
                        <SponsorCard src={VIIT_LOGO} alt={"Vignan's IIT"} />
                        <SponsorCard src={VIEW_LOGO} alt={"Vignan's IIT"} />
                        <SponsorCard src={VIPT_LOGO} alt={"Vignan's IIT"} />
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

export default Sponsors