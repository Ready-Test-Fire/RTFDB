const express = require('express')
const router = express.Router()
const knex = require('../db')



router.get('/:id', (req, res, next) => {
  knex('questions').where('id', req.params.id).then(data => {
    res.json(data);
  })
});


// POST /api/questions/
router.post('/', validate, (req, res, next) => {
  knex('questions')
    .insert(params(req))
    .returning('*')
    .then(questions => res.json(questions[0]))
    .catch(err => next(err))
})




router.patch('/:id', validate, (req, res, next) => {
  knex('questions')
    .update(params(req))
    .where({id: req.params.id})
    .returning('*')
    .then(questions => res.json(questions[0]))
    .catch(err => next(err))
});


router.delete('/:id', function(req, res) {

});

function params(req) {
  return {
    prompt: req.body.prompt,
  };
}


function validate(req, res, next) {
  const errors = [];
  ['prompt'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}


module.exports = router;
