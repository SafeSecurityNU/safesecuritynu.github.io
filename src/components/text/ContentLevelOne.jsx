export default function ContentLevelOne({text, children}) {
    return <>
        <li className="pl-6">
            <p className="text-md mb-1 text-neutral-400"><span className="font-semibold text-white">  •  </span>{text}</p>
        </li>
        <ul>
            {children}
        </ul>
    </>
}