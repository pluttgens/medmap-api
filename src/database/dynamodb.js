import AWS from 'aws-sdk';
import Promise from 'bluebird';

export default Promise.promisifyAll(new AWS.DynamoDB({ apiVersion: '2012-08-10' }));