import { LoggerMidMiddleware } from './logger-mid.middleware';

describe('LoggerMidMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMidMiddleware()).toBeDefined();
  });
});
