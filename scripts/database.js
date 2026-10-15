
const database = {

    ships: [
        {
            id: 1,
            shipName: "Pioneering Spirit",
            haulerId: 4
        },{
            id: 2,
            shipName: "Boaty McBoatface",
            haulerId: 3
        },{
            id: 3,
            shipName: "Seawise Giant",
            haulerId: 2
        },{
            id: 4,
            shipName: "Metalera",
            haulerId: 1
        },{
            id: 5,
            shipName: "Ever Ace",
            haulerId: 4
        },{
            id: 6,
            shipName: "Ravioli",
            haulerId: 3
        },{
            id: 7,
            shipName: "Sylvan Esso",
            haulerId: 2
        },{
            id: 8,
            shipName: "Nissan Murano",
            haulerId: 2
        },{
            id: 9,
            shipName: "Champs Sporting Goods",
            haulerId: 1
        },{
            id: 10,
            shipName: "Praline",
            haulerId: 5
        },{
            id: 11,
            shipName: "MSG",
            haulerId: 2
        },{
            id: 12,
            shipName: "Rotting Ham",
            haulerId: 1
        }
    ],

    haulers: [
        {
            id: 1,
            haulerName: "Iron Matron",
            dockId: 4
        },{
            id: 2,
            haulerName: "Silverhair",
            dockId: 2
        },{
            id: 3,
            haulerName: "Gojima",
            dockId: 2
        },{
            id: 4,
            haulerName: "Nan Halen",
            dockId: 1
        },{
            id: 5,
            haulerName: "Black Sabbathwater",
            dockId: 4
        },{
            id: 6,
            haulerName: "Cannibal Corps of Engineers",
            dockId: 4
        }
    ],

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