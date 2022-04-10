function index(request, response) {
    response.status(404);
    response.render('404');
}

module.exports = {
    index
}