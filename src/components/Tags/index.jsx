function Tag({tags}) {  
    return (
        <div className="tag__container">
            {tags.map((tag, index) => (
                <div key={index} className="tag__container-card">{tag}</div>
            ))}
        </div>
    )
}

export default Tag;