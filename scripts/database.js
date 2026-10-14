
const database = {

    ships: [{

    }]
    ,
    haulers: [{
        
    }]
    ,
    docks: [{
        
    }]
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