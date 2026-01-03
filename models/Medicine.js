'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    static associate(models) {
      // associations can be defined here
    }
  }
  Medicine.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prakriti: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'गर्म / ठंडी / दोनों'
    },
    shakti: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rogName: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'रोग का नाम एवं प्रभावित अंग'
    },
    rogGati: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'रोग की गति'
    },
    rogiPrakriti: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'रोगी की प्रकृति / बनावट'
    },
    mansikLakshan: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'मानसिक लक्षण'
    },
    vishishtLakshan: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'विशिष्ट लक्षण (समय / परिस्थिति / सहयोगी)'
    },
    vyapakLakshan: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'व्यापक लक्षण (मैं संबंधित / चरित्र)'
    },
    utkatIchha: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'उत्कट इच्छा या घृणा'
    },
    masikDharm: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'मासिक धर्म की स्थिति'
    },
    puranak: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'पूरक दवा'
    },
    saman: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'समान दवा'
    },
    virodhi: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: 'विरोधी दवा'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'नोट्स / टिप्पणी'
    }
  }, {
    sequelize,
    modelName: 'Medicine',
    tableName: 'medicines'
  });
  return Medicine;
};

