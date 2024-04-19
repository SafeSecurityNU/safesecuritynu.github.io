export default function BulletItem({children}) {
    return <>
        <h5 className="pl-6 mt-2 mb-2 text-md text-neutral-500"><span className="font-semibold text-white">  •  </span>{children}</h5>
    </>
}