
const Done = (props) => {
    return (
        <div>
            <h2>Done</h2>
            {
                props.item.map((data, index) => <p key={index}>{data.item}</p>)
            }
        </div>
    )
}

export default Done;