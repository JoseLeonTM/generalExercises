"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Elevator {
    constructor(cap, stops) {
        this.capacity = cap;
        this.floor = 0;
        this.holding = 0;
        this.direction = 'none';
        this.stops = [];
        this.stops.length = stops;
    }
    open(people) {
        this.holding += people;
    }
    close() {
        if (this.holding <= this.capacity) {
            return true;
        }
    }
    addStop(f) {
        this.stops[f] = true;
    }
    checkStops() {
        if (this.direction == 'up') {
            for (let i = this.floor; i < this.stops.length; i++) {
                if (this.stops[i]) {
                    return true;
                }
            }
        }
        if (this.direction == 'down') {
            for (let i = this.floor; i >= 0; i--) {
                if (this.stops[i]) {
                    return true;
                }
            }
        }
        this.direction = 'none';
        return false;
    }
    move(p) {
        if (this.checkStops()) {
            if (this.stops[this.floor]) {
                this.open(p);
                this.stops[this.floor] = false;
                return true;
            }
            else if (this.direction == 'up') {
                if (this.close()) {
                    this.floor++;
                }
                else {
                    console.log("Capacity reached");
                }
            }
            else {
                if (this.close()) {
                    this.floor--;
                }
                else {
                    console.log("Capacity reached");
                }
            }
        }
    }
}
exports.Elevator = Elevator;
