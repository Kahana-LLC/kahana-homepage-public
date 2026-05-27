const isDev = process.env.NODE_ENV === 'development';
const isClientDebug =
  typeof process !== 'undefined' &&
  process.env.NEXT_PUBLIC_DEBUG_LOG === 'true';

function shouldLogVerbose() {
  return isDev || isClientDebug;
}

export const logger = {
  debug(...args) {
    if (shouldLogVerbose()) {
      console.log(...args);
    }
  },
  info(...args) {
    if (shouldLogVerbose()) {
      console.info(...args);
    }
  },
  warn(...args) {
    if (shouldLogVerbose()) {
      console.warn(...args);
    }
  },
  error(...args) {
    console.error(...args);
  },
};
