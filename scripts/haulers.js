import {getHaulers,getShips} from "./database.js"


document.addEventListener(
    "click",
        (onClick) => {
            const clickedItem = onClick.target

            let counter = 0

            let hauledShipsNames = []

            let ships = getShips()
            for (let ship of ships) {
                if (ship.haulerId === Number(clickedItem.dataset.id)) {
                    hauledShipsNames.push(ship.shipName)
                    counter ++
                }
            }
            if (clickedItem.dataset.type === "hauler") {
                window.alert(
                    `Hauler ${clickedItem.dataset.name} is hauling ${counter} ships: ${hauledShipsNames.join(", ")}`
                )
            }
        }
)


export const haulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li
            data-type="hauler"
            data-id="${hauler.id}"
            data-name="${hauler.haulerName}"
            data-dock="${hauler.dockId}"
            >
            ${hauler.haulerName}
        </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML

}


