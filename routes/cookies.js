var express = require('express');
var router = express.Router();
const knex = require('../db/connection');

router.get('/', function(req, res, next) {
  const { name, ingredientsGreaterThan, ingredientsLessThan, delicious, mouthfeel } = req.query;
  const where = {};
  if (name !== undefined) {
    where.name = name;
  }
  if (delicious !== undefined) {
    where.is_delicious = delicious;
  }
  if (mouthfeel !== undefined) {
    where.mouthfeel = mouthfeel;
  }

  let query = knex('cookies').select('*').where(where)
  if (ingredientsGreaterThan !== undefined) {
    query = query.andWhere('ingredients','>',ingredientsGreaterThan);
  }
  if (ingredientsLessThan !== undefined) {
    query = query.andWhere('ingredients','<',ingredientsLessThan);
  } else {
  }
  query.then((results) => {
    res.json(results);
  })
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  knex('cookies').select('*')
  .where({ id })
  .then((results) => {
    res.json(results);
  })
});

module.exports = router;
