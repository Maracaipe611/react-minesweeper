export default function useHouse() {

    const pumpsAround = (allHouses, houseIndex) => {
        const houseSelected = allHouses.find(house => house.index === houseIndex);
        const neighborhoodsIndexes = [houseSelected.upsideNeight, houseSelected.downsideNeight, houseSelected.leftsideNeight, houseSelected.rightsideNeight, houseSelected.upLeftsideNeight, houseSelected.upRightsideNeight, houseSelected.downLeftsideNeight, houseSelected.downRightsideNeight]
        const neighborhoodsHouses = allHouses.filter(house => neighborhoodsIndexes.filter(n => n === house.index));
        const dangerNeighborhoods = neighborhoodsHouses.filter(n => n.pump === true).length;
        
        return dangerNeighborhoods;
    }

    return {pumpsAround}
}