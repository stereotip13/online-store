const Router = require('express');
const router = new Router();

const brandRouter = require('./brandRouter');
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter');
const typeRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;
