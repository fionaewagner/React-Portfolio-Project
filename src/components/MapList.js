const MapList = ({obj})=>{
    return(
    <ul className="mt-4">
        {obj.list.map((li,index)=>{return(
         <li key={index} className="mt-2">{li}</li>)
         })}
    </ul>
    )
}

export default MapList
