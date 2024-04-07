import { useNavigate } from "react-router-dom";

import { articlesList } from "../articles/articles";

function extractStrings(arr) {
    let totalString = "";
    for (let str of arr) {
        totalString += str + ", ";
    }
    return totalString.substring(0, totalString.length - 2);
}

export default function ArticlesList() {
    const navigate = useNavigate();

    return (
        <div id="articles" className="mx-auto flex flex-row justify-center lg:w-[90%] relative pb-10 border-b border-neutral-800"> 
            <div className="flex flex-wrap mt-10 lg:mt-20 gap-y-10 justify-evenly">
                {articlesList.map((article, index) => (
                    <div key={index} className="w-full lg:w-[40%] mx-3 p-3 rounded-lg hover:bg-neutral-900" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(`./article/${article.linkString}`)}}>
                        <div className="flex">
                            <div className="flex ml-3 mr-6 mt-1 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                                {article.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-3 text-xl">{article.title}</h5>
                                <p className="text-md mb-3 text-neutral-500">{article.description}</p>
                                <h5 className="mt-1 mb-2 text-md">Published: <span className="text-md p-2 text-neutral-500">{article.publishDate}</span></h5>
                                <h5 className="mt-1 mb-2 text-md">Authors: <span className="text-md p-2 text-neutral-500">{extractStrings(article.authors)}</span></h5>
                                {article.contributors && <h5 className="mt-1 mb-2 text-md">Contributors: <span className="text-md p-2 text-neutral-500">{extractStrings(article.contributors)}</span></h5>}
                                <h5 className="mt-1 mb-2 text-md">Tags: <span className="text-md p-2 text-neutral-500">{extractStrings(article.tags)}</span></h5>
                                <p className="mx-1 mt-5 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500">
                                    View &gt;
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
