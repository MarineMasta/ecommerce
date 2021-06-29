const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Same as category-routes.js and product-routes.js but with tags

router.get('/', (req, res) => {
  Tag.findAll(
    {
      include: {
        model: Product
      }
    }
  )
    .then(tagData => res.json(tagData))
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not find those tags!' });
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product
    }
  })
    .then(tagData => res.json(tagData))
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not find that tag!' });
    });
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(tagData => res.json(tagData))
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not create that product!' });
    });
});

router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(tagData => {
      //ID Error
      if (!tagData) {
        res.status(404).json({ message: 'Sorry, we could not update that product as this ID matches no tag!' });
        return;
      }
      res.json(tagData);
    })
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not update that tag!' });
    });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      //ID Error
      if (!tagData) {
        res.status(404).json({ message: 'Sorry, we could not delete that product as this ID matches no tag!' });
        return;
      }
      res.json(tagData);
    })
    //error
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Sorry, we could not delete that product!' });
    });
});

module.exports = router;
