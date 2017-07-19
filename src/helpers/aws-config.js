import config from 'config';
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: config.aws.accessKey,
  secretAccessKey: config.aws.secret,
  signatureVersion: 'v4'
});
