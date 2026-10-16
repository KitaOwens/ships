import {getDocks,getHaulers} from "./database.js"

const haulers = getHaulers()

document.addEventListener(
    "click",
        (onClick) => {
            const clickedItem = onClick.target            
            if (clickedItem.dataset.type === "dock") {            
                const dockedHaulers = haulers.filter(
                    (hauler) => hauler.dockId === parseInt(clickedItem.dataset.id)
                )            
                const haulerNames = dockedHaulers.map(
                    (hauler) => hauler.haulerName
                )            
                    if (dockedHaulers.length > 0) {
                        window.alert(
                            `Haulers currently docked in ${clickedItem.dataset.location}: ${haulerNames.join(", ")}`
                        )
                    }
                    else {
                        window.alert(
                            `There are no haulers currently docked in ${clickedItem.dataset.location}.`
                        )
                    }
            }
        }
)


export const dockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li
            data-type="dock"
            data-id="${dock.id}"
            data-location="${dock.location}"
            data-capacity="${dock.capacity}"
            >
            ${dock.location}
        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}



