const express = require('express');
const router = express.Router();
const controller = require('./../controller');

router.get('/', (req, res) => {
    res.send('Hey Welcome all you OLXers')
});

router.get('/listing', controller.listing);
router.post('/search', (controller.getSearchResults));
router.post('/loginotp', (controller.getLoginOtp));
router.post('/confirmotp', (controller.confirmOtp));


// Generate 404s
router.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
  // Handle errors
router.use((err, req, res) => {
    res.status(err.status || 500);
    if (err.status === 500) {
        console.log(err.stack);
    }
    res.json({
        message: err.message,
        error: err.stack,
    });
});

module.exports = router;