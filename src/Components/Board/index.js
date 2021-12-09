import { useEffect, useState } from "react";
import House from "../House"
import "./style.css"
import useBoard from "./useBoard";

const Board = () => {

    const [houses, setHouses] = useState([]);
    const board = useBoard();
    const piecesIds = board.generateRandomValueHouses(63);


    useEffect(() => {

        setHouses(piecesIds.map((piece, index) => {
            return board.setHouses(piece, index)
        }))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="Board">
            {houses.map((house) =>
                <House houseObj={house} key={house.id} getPumpsAround= {() => board.pumpsAround(houses, house)} />
            )}
            <button onClick={() => window.location.reload()}>Reset</button>
        </div>
    )
}

export default Board;