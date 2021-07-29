const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Order = require('../models/Order');

// @route     GET api/orders
// @desc      Get all users orders
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/orders
// @desc      Add new order
// @access    Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, grocery } = req.body;

    try {
      const newOrder = new Order({
        name,
        grocery,
        user: req.user.id,
      });

      const order = await newOrder.save();

      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/orders/:id
// @desc      Update an order
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, grocery } = req.body;

  // Build order object
  const orderFields = {};
  if (name) orderFields.name = name;
  if (grocery) orderFields.grocery = grocery;

  try {
    let order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ msg: 'Order not found' });

    // Make sure user owns order
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    order = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: orderFields },
      { new: true }
    );

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/orders/:id
// @desc      Delete orders
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ msg: 'Order not found' });

    // Make sure user owns contact
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Order.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Order removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
