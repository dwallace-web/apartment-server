const User = require('./user');
const Apartment = require('./apartment');

User.hasMany(Apartment, { as: 'reviewer' });

module.exports = { User, Apartment };