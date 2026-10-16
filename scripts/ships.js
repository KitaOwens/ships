import {getShips,getHaulers} from "./database.js"


const haulers = getHaulers()

document.addEventListener (
    "click",
        (onClick) => {
            const clickedItem = onClick.target
            if (clickedItem.dataset.type === "ship") {
                const haulerId = parseInt(clickedItem.dataset.haulerid)
                const shipHaulers = haulers.filter(
                    (hauler) => hauler.id === haulerId
                )
                const haulerNames = shipHaulers.map((hauler) => hauler.haulerName
                )
                window.alert(
                    `${clickedItem.dataset.shipname} is being hauled by ${haulerNames}.`
                )
            }
        }
)

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
