export default function ReferenceItem({label, children}) {
    return <>
        <div className="font-semibold text-white text-right col-start-1 col-span-1">{label}.</div> 
        <a className="text-md text-sky-700 col-start-2 col-span-11" href={children} target="_blank">
            {children}
        </a>
    </>
}