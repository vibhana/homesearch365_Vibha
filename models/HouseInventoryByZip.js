const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const HouseInventoryByZipSchema = new Schema({
    address: String,
    addressCity: String,
    addressState: String,
    addressStreet: String,
    addressZipcode: Number,
    area: Number,
    baths: Number,
    beds: Number,
    countryCurrency: String,
    detailUrl: String,
    has3DModel: String,
    hasImage: String,
    hasVideo: String,
    ID: Number,
    imgSrc: String,
    isFeaturedListing: String,
    isUndisclosedAddress: String,
    latitude: Number,
    longitude: Number,
    price: String,
    shouldShowZestimateAsPrice: String,
    statusText: String,
    statusType: String,
    unformattedPrice: Number,
    zestimate: Number
}, { collection: 'HouseInventoryByZip'});

// Model
const HouseInventoryByZip = mongoose.model('HouseInventoryByZip', HouseInventoryByZipSchema);

module.exports =  HouseInventoryByZip; 