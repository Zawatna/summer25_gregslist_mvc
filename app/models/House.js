import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }
    get houseListingHTMLTemplate() {
        return `
    <div class="col-md-6 mb-3">
        <div class="position-relative house-border">
            <img
            src="${this.imgUrl}"
            alt="${this.bedrooms} ${this.bathrooms} " class="house-img">
            <span >$${this.priceWithCommas}</span>
            <p>Number of Bedrooms</p>
            <p>Number of Bathrooms</p>
            <p>Size: ${this.sqft}</p>
            <p>Year: ${this.year}</p>
            <p>Description: ${this.description}</p>
        </div>
    </div>
`
    }
    get priceWithCommas() {
        return this.price.toLocaleString()
    }

}

