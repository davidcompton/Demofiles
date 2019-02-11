module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT " 
        + "CAST(FILTER_DATE AS CHAR) AS FILTER_DATE,  "
        + "SITE_ID,  "
        + "PRODUCT_TYPE, "
        + "SUM(CURRENT_VALUE) AS STOCK "
        + "FROM blinxdev.OPERATIONS_ON_SITE "
        + "GROUP BY FILTER_DATE, SITE_ID, PRODUCT_TYPE;"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Daily Stock"
                ,resultset1: result
            });
        });
    },
};