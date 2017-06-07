const express = require('express');
const router = express.Router();
const knex = require('../db');
const bcrypt = require('bcrypt');
const saltrounds = 10;



router.get('/', (req, res, next) => {
  let info = req.body;
  knex('users').where('username', req.body.username)
    .then(users => {
        bycrpt.compare(users.password, info[0].password).then((pass) => {
          return pass;
        })
      });
});


// POST /api/users/
router.post('/', validate, (req, res, next) => {
  let info = req.body
  bycrpt.hash(info.password, saltrounds, function(err, hash) {
    knex('users').insert({
      username: info.username,
      email: info.email,
      password: hash,
  }).then(()=>{
    next();
  })


// GET /api/users/:id/
router.get('/:id', (req, res, next) => {
  knex('users')
    .where({id: req.params.id})
    .first()
    .then(test => res.json(test))
    .catch(err => next(err))
})


router.patch('/:id', validate, (req, res, next) => {
  knex('users')
    .update(params(req))
    .where({id: req.params.id})
    .returning('*')
    .then(users => res.json(users[0]))
    .catch(err => next(err))
});


router.delete('/:id', function(req, res) {

});

function params(req) {
  return {
    question_id: req.body.question_id,
    test_code: req.body.test_code,
  };
}


function validate(req, res, next) {
  const errors = [];
  ['question_id','test_code'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router;
