import Section from "./Section";

export default function TableOfContents({children}) {
    return <div className="pb-10 mb-10 border-b border-neutral-800">
        <Section>Table of Contents:</Section>
        <ul>
            {children}
        </ul>
    </div>
}