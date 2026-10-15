import {getShips} from "./database.js"


export const shipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li
            data-type="ship"
            data-id="${ship.id}"
            data-shipname="${ship.shipName}"
            data-haulerid="${ship.haulerId}"
            >
            ${ship.shipName}
        </li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}
