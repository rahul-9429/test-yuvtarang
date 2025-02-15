import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import MagicButton from '@/components/Elements/MagicButton'
import Link from 'next/link'
import Head from 'next/head'

interface GalleryProps {
    images: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-5.5rem)] max-container mb-20">
            <Head>
                <title>Gallery | Yuvtarang 2k25 | A National Level Youth Festival</title>
            </Head>

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
                    {/* <MagicButton title='Yuvtarang 2k24 Gallery' /> */}
                    <h2 className="text-4xl sm:text-10xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#77530a] to-yellow-800">Yuvtarang 2k24 Gallery</h2>

                    <div className='mt-3 max-w-[80rem] text-lg font-semibold text-center'>Check out the vibrant moments from our previous cultural fest. Relive the energy, performances, and celebrations!</div>
                </div>
            </div>

            <div className="columns-3 md:columns-1 gap-3 lg:gap-2 space-y-3 lg:space-y-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer border border-border rounded-xl lg:rounded-sm overflow-hidden shadow-xl"
                    >
                        <Image
                            src={`/assets/images/gallery/${image}`}
                            alt={`Sushacks Image ${index + 1}`}
                            layout="responsive"
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        {/* <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div> */}
                        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <span className="text-2xl font-bold text-white">Hackathon Moment {index + 1}</span>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const imagesDir = path.join(process.cwd(), 'public/assets/images/gallery')
    const imageFiles = fs.readdirSync(imagesDir)

    return {
        props: {
            images: imageFiles,
        },
    }
}

export default Gallery
