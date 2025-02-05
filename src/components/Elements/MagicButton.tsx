const MagicButton = ({title="Title"}: {title?: string}) => {
    return (
        <div className='relative w-fit text-white font-serif  uppercase text-lg'>
            <div className='absolute top-1 -right-2 w-fit px-6 py-1 bg-gradient-to-r from-transparent to-[#5bc8ff] rounded-tl-2xl rounded-br-2xl -z-[1] rounded-sm select-none'>{title}</div>
            <div className='w-fit px-6 py-1 bg-[#f61d72] rounded-tl-2xl rounded-br-2xl z-[1] rounded-sm'>{title}</div>
        </div>
    )
}

export default MagicButton