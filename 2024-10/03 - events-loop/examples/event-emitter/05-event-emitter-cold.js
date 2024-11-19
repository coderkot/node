const EventEmitter = require('events');

class ColdEmitter extends EventEmitter {
    constructor() {
        super();
        this.eventsBuffer = [];
        this.isListenerAttached = false;
    }

    emit(event, ...args) {
        if (this.isListenerAttached) {
            super.emit(event, ...args);
        } else {
            this.eventsBuffer.push({ event, args });
        }
    }

    on(event, listener) {
        super.on(event, listener);
        this.isListenerAttached = true;
        this.flushBufferedEvents();
    }

    flushBufferedEvents() {
        while (this.eventsBuffer.length > 0) {
            const { event, args } = this.eventsBuffer.shift();
            super.emit(event, ...args);
        }
    }
}

module.exports = ColdEmitter;
