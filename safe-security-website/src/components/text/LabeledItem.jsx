export default function LabeledItem({label, children}) {
    return <>
        <h5 className="mt-2 mb-2 text-md"><span className="font-semibold">{label}:</span> {children}</h5>
    </>
}