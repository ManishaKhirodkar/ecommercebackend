const Shoptypes = require('../Models/shoptype');

exports.getShoptypes = (req, res) => {
    Shoptypes.find()
        .then(response => {
            res.status(200).json(
                {
                    message: "Shoptypes fetched successfully",
                    shoptypes: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
};