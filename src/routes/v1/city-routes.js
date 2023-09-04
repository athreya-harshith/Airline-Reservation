const express = require('express');
const router = express.Router();
const {CityController} = require('../../controllers');
const {CityMiddlewares} = require('../../middlewares');

router.post('/',CityMiddlewares.validateCreateRequest,
                CityController.createCity);
router.delete('/:id',CityController.destroyCity);
module.exports = router;