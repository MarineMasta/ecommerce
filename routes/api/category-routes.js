//From Develop
const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll(
    {
      include: {
        model: Product,
        attributes: ['product_name']
      }
    }
  )
    .then(categoryData => res.json(categoryData))
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not find those categories!' });
    });
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  })
  //error
    .then(categoryData => res.json(categoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not find that categories!' });
    });
});

// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(categoryData => res.json(categoryData))
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not create that category!' });
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(categoryData => {
      //ID error
      if (!categoryData) {
        res.status(404).json({ message: 'Sorry, we could not update that category! No category was found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      //error
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not update that category!' });
    });
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      //ID error
      if (!categoryData) {
        res.status(404).json({ message: 'Sorry, we could not delete that category! No category was found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not delete that category!' });
    });
});

module.exports = router;
