import Body from "./Body.jsx";

export default function Italics({children}) {
    return (
        <Body>
            <span className="italic">
                {children}
            </span>
        </Body>
    )
}