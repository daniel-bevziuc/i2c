const { Router } = require('express');
const db = require('../connections/databaseConnection').knex;
const {
  PRODUCTS_TABLE,
  TOP_TABLE,
  WEEKLY_TABLE
} = require('../configuration/tableNames');
const router = new Router();

router.get('/weekly', async (req, res) => {
  try {
    const data = await db
      .select(
        `${PRODUCTS_TABLE}.name as product`,
        `${WEEKLY_TABLE}.week_commencing`,
        `${WEEKLY_TABLE}.exposed`,
        `${WEEKLY_TABLE}.control`
      )
      .from(WEEKLY_TABLE)
      .innerJoin(
        PRODUCTS_TABLE,
        `${PRODUCTS_TABLE}.id`,
        `${WEEKLY_TABLE}.product_id`
      );

    res.send(data);
  } catch (error) {
    console.log('Error in /weekly:');
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/top', async (req, res) => {
  try {
    const data = await db
      .select(
        `${TOP_TABLE}.metric`,
        `${PRODUCTS_TABLE}.name as product`,
        `${TOP_TABLE}.exposed`,
        `${TOP_TABLE}.control`,
        `${TOP_TABLE}.uplift`,
        `${TOP_TABLE}.pct_uplift`
      )
      .from(TOP_TABLE)
      .innerJoin(
        PRODUCTS_TABLE,
        `${PRODUCTS_TABLE}.id`,
        `${TOP_TABLE}.product_id`
      );

    res.send(data);
  } catch (error) {
    console.log('Error in /top:');
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
