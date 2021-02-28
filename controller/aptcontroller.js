const router = require('express').Router();
const Apartment = require('../model/index');

router.post('/', (req, res) => {

    let { address, neighborhood, bedroom, bathroom, price, style, notes, rating } = req.body;

    Apartment.create({
        aptAddress: address,
        aptNeighborhood: neighborhood,
        aptBedrooms: bedroom,
        aptBathrooms: bathroom,
        aptPrice: price,
        aptStyle: style,
        aptNotes: notes,
        aptRating: rating
    })
        .then(apt => res.status(200).json(apt))
        .catch(err => res.status(500).json({
            error: err
        }))
})

module.exports = router;