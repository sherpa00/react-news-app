import { useEffect, useState } from "react";
import NewsBox from "./NewBox";

function Trending(props) {
    const [res, setRes] = useState(null);

    useEffect(() => {
        fetch(props.url).then((result) => {
            return result.json();
        }).then((data) => {
            console.log(data);
            setRes(data.results);
        })
    },[])
    return ( 
        <div className="trending" id="trending">
            <h1>TRENDING</h1>
            <div className="trending-list">
                {
                    
                    res === null ? null : res.map((el,ind) => {
                       return <NewsBox data={el} key={ind} />
                    })
                    
                }
                
            </div>
        </div>
     );
}

export default Trending;