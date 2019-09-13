module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory()
        .then( products => res.status(200).send (products))
        .catch (err => {
            res.status(500).send({errorMessage: "Oops my burrito fell apart"})
            console.log(err)
        })
    }

}