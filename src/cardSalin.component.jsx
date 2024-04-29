const CardSalin = ({data})=> {
    const {id,name,imageUrl} = data
    return (
        <div key={id}>
            <p>{name} {id}</p>
            <img src={imageUrl} />
        </div>
    )
}

export default CardSalin