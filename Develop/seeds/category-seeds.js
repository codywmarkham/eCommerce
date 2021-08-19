const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Bottoms',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Caps',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;