const fs = require('fs');
const path = require('path');

const about = (req, res) => {
    const aboutData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/about.json'), 'utf8'));
    const pageTitle = 'Travlr Getaways - About';
    res.render('about', { title: pageTitle, info: aboutData });
};

module.exports = {
    about
};