import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import MagicButton from '@/components/Elements/MagicButton'

interface GalleryProps {
    images: string[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-5.5rem)] max-container mt-3 mb-20">
            <div className={`mb-6 text-center lg:text-left space-y-1 flex items-center justify-center`}>
                <MagicButton title='Yuvtarang 2k24 Gallery' />
                {/* <div className='text-sm'>Check out the exciting moments from the previous hackathon. Relive the creativity and innovation!</div> */}
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
