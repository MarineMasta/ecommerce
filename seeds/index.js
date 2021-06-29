const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\nDATABASE SYNCED\n');
  await seedCategories();
  console.log('\nCATEGORIES SEEDED\n');

  await seedProducts();
  console.log('\nPRODUCTS SEEDED\n');

  await seedTags();
  console.log('\nTAGS SEEDED\n');

  await seedProductTags();
  console.log('\nPRODUCT TAGS SEEDED\n');

  process.exit(0);
};

seedAll();
