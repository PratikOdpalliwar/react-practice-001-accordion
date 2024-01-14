import { useState } from "react"
import data from "../Data/Data"

const Accordation = () => {
  const [selected, setSelected] = useState(null)

const handleClick = (getDataId) => {
  setSelected(getDataId === selected ? null : getDataId)
}

  return (
    <div className="app">
      <div className="accordation">
{
  data && data.length > 0 ? (data.map((dataItem)=>(
    <div className="item">

      <div className="title" onClick={()=>handleClick(dataItem.id)}>
        <h3>
          {dataItem.question}
        </h3>
        <span>+</span>
      </div>

      <div className="answer" >
        {
selected === dataItem.id ? <div className="ans">
  {dataItem.answer}
</div>: null
        }
      </div>
    </div>
  ))) : null
}

      </div>
    </div>
  )
}

export default Accordation
