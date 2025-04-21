
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Instance method for calculating distance for sorting function
    calcDistanceSquare(userLatitude, userLongitude) {
      const latDiff = userLatitude - this.latitude;
      const longDiff = userLongitude - this.longitude;
      return (latDiff* latDiff) + (longDiff * longDiff);
    }
  }
  School.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    latitude: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
    longitude: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true
      }
    },
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};