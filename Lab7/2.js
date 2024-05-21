export default class Logger {
    constructor() {
        this.logLevelThreshold = LogLevel.INFO;
    }

    setLogLevelThreshold(level) {
        this.logLevelThreshold = level;
    }

    log(level, message) {
        if (level >= this.logLevelThreshold) {
            console.log(`[${level}] ${message}`);
        }
    }
}
