export default function Hyperlink({href, text}) {
    return <>
        <a className="text-md mb-2 text-sky-700" href={href} target="_blank">{text}</a>
    </>
}