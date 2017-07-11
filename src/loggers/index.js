import winston from 'winston';

export const serverLogger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'silly',
      colorize: true,
      timestamp: true,
      label: 'server',
      prettyPrint: true
    })
  ]
});

export const elasticsearchLogger = new winston.Logger({
  transports: [
    new (winston.transports.Console)({
      level: 'silly',
      colorize: true,
      prettyPrint: true,
      timestamp: true,
      label: 'elasticsearch'
    })
  ]
});
