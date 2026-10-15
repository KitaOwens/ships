import {shipList} from "./ships.js"
import {haulerList} from "./haulers.js"
import {dockList} from "./docks.js"


const mainContainer = document.querySelector("#container")

const applicationHTML =`
<h1>Ships, Haulers, & Docks</h1>
<article class="details">
    <section class="detail--column list details__ships">
        <h2>Ships</h2>
        ${shipList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>Haulers</h2>
        ${haulerList()}
    </section>
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${dockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
