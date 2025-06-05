import { AppState } from "../AppState.js";
import { House } from "../models/House.js";


export class HouseController {
    constructor() {
        AppState.on('houses', this.drawHouses)
        console.log('House Controller Connected')
    }


    drawHouses() {
        const houses = AppState.houses // pull house data from appstate

        let houseListingsContent = '' // start a blank template
        //..
        houses.forEach(house => houseListingsContent += house.houseListingHTMLTemplate)
        const houseListingsElm = document.getElementById('house-listings')
        console.log('drawing houses', houseListingsElm);
        houseListingsElm.innerHTML = houseListingsContent

        // What do I want to do?
        // anytime I am using a plural I need a loop


        // How do you access each house individually one at a time?

    }






}