
const Doing = (props) => {
    const filteredData = props.item.filter(item => item.status === 'Doing');
    return (
        <div>
            <h2>Doing</h2>
            {
                filteredData.map((data, index) => <p key={index}>{data.item}</p>)
            }
        </div>
    )
}

export default Doing;