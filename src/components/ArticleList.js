import React from "react";
import Article from "./Article";


function ArticleList({ articles }) {
    const ArticleItem = articles.map((article) => {
        return <main>
            <Article key={article.key} title = {article.title} date = {article.date} preview ={article.preview} />
            </main>
        
    })

    return(
        <main>
            {ArticleItem}
        </main>

    )
}
  export default ArticleList;