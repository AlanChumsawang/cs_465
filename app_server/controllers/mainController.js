const mainController = (req, res) => {
    res.render('index', { title: 'Main' });
};

const aboutController = (req, res) => {
    res.render('about', { title: 'About' });
};

const contactController = (req, res) => {
    res.render('contact', { title: 'Contact' });
};

const mealsController = (req, res) => {
    res.render('meals', { title: 'Meals' });
};

const newsController = (req, res) => {
    res.render('news', { title: 'News' });
};

const roomsController = (req, res) => {
    res.render('rooms', { title: 'Rooms' });
};

const travelController = (req, res) => {
    res.render('travel', { title: 'Travel' });
};

module.exports = {
    mainController,
    aboutController,
    contactController,
    mealsController,
    newsController,
    roomsController,
    travelController
};