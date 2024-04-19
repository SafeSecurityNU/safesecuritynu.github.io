import Section from "./Section";

export default function References({children}) {
    return <div className="pt-10 mt-10 border-t border-neutral-800">
        <Section>References:</Section>
        <ul>
            {children}
        </ul>
    </div>
}