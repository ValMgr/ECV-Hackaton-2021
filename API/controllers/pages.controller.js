module.exports = (usersRepo, productsRepo) => ({

    getData(req, res) {
        usersRepo.getAll().then((users) => {
            productsRepo.getAll().then((products) => {
                res.render('home', { users, products });
            });
        });
    }
});
