import AWS from 'aws-sdk';
import Promise from 'bluebird';

export default Promise.promisifyAll(new AWS.Kinesis({ apiVersion: '2013-12-02' }));
