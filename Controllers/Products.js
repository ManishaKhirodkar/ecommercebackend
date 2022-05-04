const Products = require('../Models/Products');

exports.getProducts = (req, res) => {
    const { products } = req.params;
    Products.find({ products: products }) // find returns array as output
        .then(response => {
            res.status(200).json(
                {
                    message: "Products fetched successfully",
                    products: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
};
exports.getProductsbyname = (req, res) => {
    const { name } = req.params;
    Products.find({ name: name }) // find returns array as output
        .then(response => {
            res.status(200).json(
                {
                    message: "Brands fetched successfully",
                    product: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
};

exports.getProductsByproId = (req, res) => {
    const { proId } = req.params;
    Products.findById(proId) // findById returns object (only single value)
        .then(response => {
            res.status(200).json(
                {
                    message: "Product fetched successfully",
                    product: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
};

exports.getProductsByshopId = (req, res) => {
    const { shopId } = req.params;
    Products.find({ shopId: shopId })
        .then(response => {
            res.status(200).json(
                {
                    message: "Products fetched successfully",
                    items: response
                }
            )
        })
        .catch(err => {
            res.status(500).json(
                { error: err }
            )
        })
};

exports.productsFilter = (req, res) => {
    let { shoptype, brand, occasion, lcost, hcost, sort, page } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;

    const itemsPerPage = 6;

    let startIndex, endIndex;

    let filterObj = {};
    shoptype && (filterObj['shoptype_id'] = shoptype);
    brand && (filterObj['brand_id'] = brand);
    occasion && (filterObj['occasion_id'] = { $in: occasion });
    lcost && hcost && (filterObj['price'] = { $lte: hcost, $gte: lcost });


    Products.find(filterObj).sort({ price: sort })
        .then(response => {

            startIndex = page * itemsPerPage - itemsPerPage;
            endIndex = page * itemsPerPage;

            const paginatedResponse = response.slice(startIndex, endIndex);
            let arr = [];
            for (let i = 1; i <= Math.ceil(response.length / itemsPerPage);i++) {
                arr.push(i);
            }

            res.status(200).json(
                {
                    message: "Products Fetched Succesfully",
                    products: paginatedResponse,
                    totalItems: response.length,
                    pageCount: arr,
                    activePage: page
                }
            )
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
