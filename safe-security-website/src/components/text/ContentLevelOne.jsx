export default function ContentLevelOne({text, children}) {
    return <>
        <li className="pl-6">
            <p className="text-md mb-1 text-neutral-500">{text}</p>
        </li>
        <ul>
            {children}
        </ul>
    </>
}