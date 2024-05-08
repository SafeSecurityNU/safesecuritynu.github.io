export default function ReferenceItem({label, children}) {
    return <>
        <h5 className="pl-6 mt-2 mb-2 text-md text-neutral-400"><span className="font-semibold text-white">{label}:</span> {children}</h5>
    </>
}