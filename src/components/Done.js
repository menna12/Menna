
const Done = (props) => {
    const filteredData = props.item.filter(item => item.status === 'Done');

    return (
        <div>
            <h2>Done</h2>
            {
                filteredData.map((data, index) => <p key={index}>{data.item}</p>)
            }
        </div>
    )
}

export default Done;