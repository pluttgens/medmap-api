import { Router } from 'express';
import { dynamodb, elasticsearch } from '../database';

const router = Router();
router
  .route('/elasticsearch/:index')
  .delete((req, res, next) => {
    (async () => {
      const index = req.params.index;
      await elasticsearch.indices.delete({
        index: index
      });
      return res.json({
        message: `${index} deleted.`
      })
    })().catch(next);
  });

router
  .route('/dynamodb/:table')
  .get((req, res, next) => {
    (async () => {
      const table = req.params.table;
      return res.json({
        data: await dynamodb.describeTableAsync({
          TableName: table
        })
      });
    })().catch(next);
  })
  .post((req, res, next) => {
    (async () => {
      const table = req.params.table;
      await dynamodb.createTableAsync({
        AttributeDefinitions: [{
          AttributeName: 'id',
          AttributeType: 'S'
        }
        ],
        KeySchema: [{
          AttributeName: 'id',
          KeyType: 'HASH'
        }],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        },
        TableName: table
      });

      return res.json({
        message: `${table} created.`
      });
    })().catch(next);
  })
  .delete((req, res, next) => {
    (async () => {
      const table = req.params.table;
      await dynamodb.deleteTableAsync({
        TableName: table
      });
      return res.json({
        message: `${table} dropped.`
      });
    })().catch(next);
  })

export default router;
