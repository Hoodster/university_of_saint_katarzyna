import { useEffect, useState } from "react";
import Blog from "../../components/blog/blog";

export default function NewsSlide({headline, options}) {
    const [navHeight, setNavHeight] = useState();
    const articles = options.articles;

    useEffect(() => {
        const nav = document.querySelector('nav');
        setNavHeight(nav.clientHeight);
    },[])

    return (
        <div style={{height: '110vh', width: '40%', marginTop: navHeight}}>
            <h1 style={{position: 'sticky'}}>{headline}</h1>
            <Blog articles={articles}/>
        </div>
    )
}