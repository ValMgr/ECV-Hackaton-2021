module.exports = (repository) => ({

    getUsers(req, res) {
        repository.getAll().then((users) => {
            res.render('home', { users });
        });
    }
});
