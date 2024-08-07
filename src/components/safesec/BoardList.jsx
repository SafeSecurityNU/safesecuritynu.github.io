import { boardList } from "../../constants/board";

export default function BoardList() {
    return (
        <div id="features" className="relative pb-20"> 
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
                    2024-25 Safe Security 
                    <span className="bg-gradient-to-r from-[#6529A7] to-[#9EC1F6] text-transparent bg-clip-text">
                        {" "}
                        Board
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
                {boardList.map((boardMember, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden h-full">
                            <div className="image-container">
                                <img src={boardMember.imgSrc} alt={boardMember.name} className="object-cover w-full h-full"/>
                            </div>
                            <div className="p-6 h-full">
                                <div className="flex items-center mb-4">
                                    <div className="h-10 w-10 p-2 bg-neutral-800 justify-center items-center rounded-full">
                                        <div style={{ color: '#6529A7' }}>
                                            {boardMember.icon}
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-xl font-bold">{boardMember.name}</h5>
                                        <h6 className="text-lg text-neutral-300">{boardMember.position}</h6>
                                    </div>
                                </div>
                                <p className="text-neutral-400">{boardMember.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
