
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

//ADD NEW USERS
function createUsers(req, res) {
    user.use(express.json());
    //baca request body
    const email = req.body.email;
    const password = req.body.password;
    //ambil data
    const lastItem = users[users.length - 1];
    //buat id baru
    const id = lastItem.id + 1;
    //buat object data baru
    const user = {
        id,
        email,
        password
    }

    users.push(user);
    res.status(201).json(user);
}

module.exports = {
    showUser,
    getUserByID,
    createUsers
}