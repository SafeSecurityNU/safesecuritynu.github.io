import { useParams, useNavigate } from "react-router-dom";

import { articlesList } from "../articles/articles";

function extractStrings(arr) {
    let totalString = "";
    for (let str of arr) {
        totalString += str + ", ";
    }
    return totalString.substring(0, totalString.length - 2);
}

export default function ArticleTemplate() {
    let { article_id } = useParams();
    const navigate = useNavigate();

    let articleInfo = null;
    for (let article of articlesList) {
        if (article.linkString === article_id) {
            articleInfo = article;
        }
    }
    if (articleInfo === null) {
        return <></>;
    }

    return (
        <>
            <div className="w-full flex flex-row justify-center pb-20 border-b border-neutral-800">
                <div className="flex flex-col mt-6 lg:mt-20 lg:w-[60%] md:w-[80%] w-[90%]">
                    <p className="cursor-pointer mx-1 mb-10 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate("/information-hub")}}>
                        &lt; Go Back
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-10 py-2 tracking-wide bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                        {articleInfo.title}
                    </h1>

                    <div className="w-full flex flex-col items-start pb-10 mb-10 border-b border-neutral-800">
                        <h5 className="mt-1 mb-2 text-md">Published: <span className="text-md p-2 text-neutral-400">{articleInfo.publishDate}</span></h5>
                        <h5 className="mt-1 mb-2 text-md">Authors: <span className="text-md p-2 text-neutral-400">{extractStrings(articleInfo.authors)}</span></h5>
                        {articleInfo.contributors && <h5 className="mt-1 mb-2 text-md">Contributors: <span className="text-md p-2 text-neutral-400">{extractStrings(articleInfo.contributors)}</span></h5>}
                        <h5 className="mt-1 mb-2 text-md">Tags: <span className="text-md p-2 text-neutral-400">{extractStrings(articleInfo.tags)}</span></h5>
                    </div>

                    {articleInfo.content}
                </div>
            </div>
        </>
    )
}