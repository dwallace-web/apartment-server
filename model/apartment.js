module.exports = (sequelize, DataTypes) => {
    const Apartment = sequelize.define('apartment', {
        aptAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aptNeighborhood: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aptBedrooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aptBathrooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aptPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aptStyle: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aptNotes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aptRating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Apartment;
}