import Section from "./Section";

export default function References({children}) {
    return <div className="pt-10 mt-10 border-t border-neutral-800">
        <Section>References:</Section>
        <ul className="grid grid-cols-12 gap-x-4 gap-y-2">
            {children}
        </ul>
    </div>
}