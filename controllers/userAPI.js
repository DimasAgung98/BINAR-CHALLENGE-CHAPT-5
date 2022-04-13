
let users = require('../db/users.json');
//SHOW ALL USERS
function showUser(req, res) {
    res.status(200).json(users);
}

//GET USERS BY ID
function getUserByID(req, res) {
    const data = users.find((item) => {
        return item.id == req.params.id;
    })

    if (!data) {
        res.status(404).json({
            message: 'not found'
        });
    }

    res.status(200).json(data);
}

module.exports = {
    showUser,
    getUserByID
}