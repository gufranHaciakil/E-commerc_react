import Skeleton from "react-loading-skeleton"

export default function SkeltonList({hight, width, length, basecolor}) {
    const skeltonList = Array.from({length: length}).map((_, index) => {
        return <Skeleton baseColor={basecolor} key={index} height={hight} width={width} />
    }
    )
    return skeltonList
}