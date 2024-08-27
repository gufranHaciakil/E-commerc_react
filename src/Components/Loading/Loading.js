export default function Loading() {
    return (
        <div className='flex bg-[#65656570] z-[1] top-0 left-0 bottom-0 right-0 fixed w-full justify-center items-center h-screen'>
            <div className="animate-spin rounded-full h-32 w-32  border-b-4 border-zinc-200"></div>
        </div>
    )
}