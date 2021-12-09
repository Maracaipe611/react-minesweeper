import { useState } from "react"
import "./style.css"

const House = ({
    houseObj,
    getPumpsAround
}) => {

    const [pumpsAround, setPumpsAround] = useState(null);
    const [flagged, setFlagged] = useState(false)

    const markFlag = (e) => {
        e.preventDefault();
        setFlagged(!flagged)
    }

    return (
        <div
            id={houseObj.id}
            onClick={() => setPumpsAround(getPumpsAround())}
            onContextMenu = {(e) => markFlag(e)}
            className={"square " + ( flagged && !houseObj.discovered ? "flagged " : (houseObj.discovered && houseObj.bomb ? "pump" : houseObj.discovered ? "normalHouse" : "hidden"))}
            >
        {pumpsAround != null ? (houseObj.bomb ? "" : pumpsAround) : null}
        
        </div>
    )
}

export default House;