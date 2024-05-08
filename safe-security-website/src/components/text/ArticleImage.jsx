export default function ArticleImage({src}) {
    return (
        <>
            <img className="w-[500px] mx-auto my-7 rounded-md customShadow" loading="lazy" src={src} />
        </>
    )
}