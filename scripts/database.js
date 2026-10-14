
const database = {

    ships: [
        {

        }
    ]
    ,
    haulers: [
        {
        
        }
    ]
    ,
    docks: [
        {
            id: 1,
            location: "Shanghai, China",
            capacity: "43.5"
        }, {
            id: 2,
            location: "Busan, South Korea",
            capacity: "21.6"
        }, {
            id: 3,
            location: "Rotterdam, The Netherlands",
            capacity: "14.35"
        }, {
            id: 4,
            location: "Antwerp, Belgium",
            capacity: "12.04"
        }
    ]
}





















export const getShips = () => {
    return structuredClone(database.ships);
}

export const getHaulers = () => {
    return structuredClone(database.haulers);
}

export const getDocks = () => {
    return structuredClone(database.docks);
}