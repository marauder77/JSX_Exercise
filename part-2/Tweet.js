const Tweet = (props) => {
    return (
    <div className ="tweets">
            <span className="username">{props.username}</span>
            <span>{props.name}</span>
            <span className="date">{props.date}</span>
            <span>{props.message}</span>
    </div>
    )
}

