export default function SubBulletItem({children}) {
    return <>
        <h5 className="pl-12 mt-2 mb-2 text-md text-neutral-400"><span className="font-semibold text-white">  •  </span>{children}</h5>
    </>
}