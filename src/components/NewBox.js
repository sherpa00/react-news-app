

function NewsBox(props) {

    function handleClick() {
        window.open(props.data.link);
    }
    return ( 
        <div className='news-box'>
            <img src={props.data === null ? "#" : props.data.image_url} alt="pic" />
            <div className="news-info">
                <h2>{props.data === null ? null : props.data.title}</h2>
                <h5>{props.data.pubDate}, {props.data.country}, {props.data.category}</h5>
                <p>{props.data === null ? null : props.data.full_description}</p>
                <button onClick={handleClick}>
                    Show More
                </button>
            </div>
        </div>
     );
}

export default NewsBox;