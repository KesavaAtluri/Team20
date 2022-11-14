const loginRoutes = require('./main');
const doctorRoutes = require('./doctors');
// const usersRoutes = require('./users');
const reviewsRoutes = require('./reviews');
const pharmacyRoutes = require('./pharmacies');

const constructorMethod = (app) => {
app.use('/', loginRoutes);
app.use('/doctors', doctorRoutes);
app.use('/pharmacy', pharmacyRoutes);
// app.use('/doctors/reviews', doctorRoutes);
app.use('/reviews',reviewsRoutes);
// app.use('/users',usersRoutes);

app.use('*', (req, res) => {
    res.sendStatus(404);
});
};

module.exports = constructorMethod;