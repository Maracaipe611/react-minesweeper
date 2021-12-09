export default function useBoard() {
    const generateRandomValueHouses = (maxValue) => {
        let piecesIds = [];
        for (let i = 0; i < maxValue; i++) {
            piecesIds = piecesIds.concat(Math.floor(Math.random() * (0 - maxValue) + maxValue));
        }
        return piecesIds;
    }

    const setHouses = (piece, index) => {
        class HouseComponent {
            id = 0;
            index = null;
            value = null;
            level = 0;
            flagged = false;
            discovered = false;
            upsideNeight = null;
            downsideNeight = null;
            leftsideNeight = null;
            rightsideNeight = null;
            upLeftsideNeight = null;
            upRightsideNeight = null;
            downLeftsideNeight = null;
            downRightsideNeight = null;
            bomb = false
        }

        const house = new HouseComponent();
        const level = parseInt(index / 9);
        house.id = index.toString() + piece;
        house.index = index;
        house.bomb = piece % 2 === 0 ? true : false;
        house.value = piece;
        house.level = level;
        house.upsideNeight = (index - 9) > -1 ? index - 9 : null;
        house.downsideNeight = (index + 9) > -1 && (index + 9) < 63 ? index + 9 : null;
        house.leftsideNeight = (index - 1) > -1 && (parseInt((index - 1) / 9) === (level)) ? index - 1 : null;
        house.rightsideNeight = (index + 1) > -1 && (parseInt((index + 1) / 9) === (level)) ? index + 1 : null;
        house.upLeftsideNeight = ((index - 10) > -1) && (parseInt((index - 10) / 9) === (level - 1)) ? index - 10 : null;
        house.upRightsideNeight = (index - 8) > -1 && (parseInt((index - 8) / 9) === (level - 1)) ? index - 8 : null;
        house.downLeftsideNeight = (index + 8) > -1 && (parseInt((index + 8) / 9) === (level + 1)) ? index + 8 : null;
        house.downRightsideNeight = (index + 10) > -1 && (parseInt((index + 10) / 9) === (level + 1)) ? index + 10 : null;
        return house;
    }

    const pumpsAround = (allHouses, houseSelected) => {
        const neighborhoodsIndexes = [houseSelected.upsideNeight, houseSelected.downsideNeight, houseSelected.leftsideNeight, houseSelected.rightsideNeight, houseSelected.upLeftsideNeight, houseSelected.upRightsideNeight, houseSelected.downLeftsideNeight, houseSelected.downRightsideNeight]
        const neighborhoodsHouses = allHouses.filter(house => neighborhoodsIndexes.find(n => n === house.index));
        const dangerNeighborhoods = neighborhoodsHouses.filter(n => n.bomb === true).length;
        houseSelected.discovered = true;
        
        return dangerNeighborhoods;
    }

    return {setHouses, generateRandomValueHouses, pumpsAround}
}