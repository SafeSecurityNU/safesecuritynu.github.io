import Logo from "../../assets/logo.png";

export default function Image({src}) {
    return (
        <>
            <img className="w-[500px] mx-auto my-4" src={Logo} />
        </>
    )
}