const Orders = require('../Models/Orders');

exports.saveorderDetails = () => {
    const { placedBy, placedByUserId, placedOn, items, productId, Amount } = req.body;

    const orderObj = new Users({
        placedBy, placedByUserId, placedOn, items, productId, Amount
    })

    orderObj.save()
        .then(response => {
            res.status(200).json(
                {
                    message: "Orders Added successfully",
                    order: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
}

exports.getordersByUserId = (req, res) => {
    const { userId } = req.params;
    Orders.find({ placedByUserId: userId })
        .then(response => {
            res.status(200).json(
                {
                    message: "Orders fetched successfully",
                    orders: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
}