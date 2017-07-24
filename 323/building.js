"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elevator_1 = require("./elevator");
class Building {
    // q: Array<any>;
    constructor(floors) {
        this.floors = floors;
        this.elevators = [];
        // this.q = [];
    }
    ////////CHOOSE THE BEST ELEVATOR////////
    selectElevator(f) {
        var chosen;
        //////CHECKS THE CAPACITY//////
        function checkCap(elev) {
            if (elev.holding < elev.capacity) {
                return true;
            }
            return false;
        }
        //////CHECKS THE DIRECTION//////
        function checkDir(el, target) {
            let dir = el.direction;
            let floor = el.floor;
            if (dir == 'none')
                return true;
            if (dir == 'up' && (floor < target)) {
                return true;
            }
            if (dir == 'down' && (floor > target)) {
                return true;
            }
            return false;
        }
        /////CHECKS THE DISTANCE//////
        function checkDist(target, chosen, elev) {
            var chosenDist = Math.abs(target - chosen);
            var elevDist = Math.abs(target - elev);
            if (elevDist < chosenDist)
                return true;
            return false;
        }
        //CHECK THE ELEVATORS//
        for (let i in this.elevators) {
            if (!chosen) {
                if (checkCap(this.elevators[i])) {
                    chosen = this.elevators[i];
                }
            }
            else {
                if (checkCap(this.elevators[i])) {
                    if (checkDir(this.elevators[i], f)) {
                        if (checkDist(f, chosen.floor, this.elevators[i].floor)) {
                            chosen = this.elevators[i];
                        }
                    }
                }
            }
        }
        //IF ALL ELEVATORS ALL FULL//
        //SELECT THE CLOSEST//
        if (!chosen) {
            chosen = this.elevators[0];
            for (let i in this.elevators) {
                // if (checkDir(this.elevators[i], f)) {
                if (checkDist(f, chosen.floor, this.elevators[i].floor)) {
                    chosen = this.elevators[i];
                }
                // }
            }
        }
        return chosen;
    }
    addElevators(elevs) {
        for (let i in elevs) {
            this.elevators.push(new elevator_1.Elevator(elevs[i], this.floors));
        }
    }
    addRequest(f, p) {
        setTimeout(() => {
            var elev = this.selectElevator(f);
            elev.addStop(f);
            var found;
            while (!found) {
                if (elev.direction == 'none') {
                    if (f > elev.floor) {
                        elev.direction = 'up';
                    }
                    if (f < elev.floor) {
                        elev.direction = 'down';
                    }
                }
                // setTimeout(() => {
                found = elev.move(p);
                this.print();
                // }, 500);
            }
        }, 1000);
    }
    print() {
        let hyphens = [' -'];
        let dots = [];
        let elevs = [...this.elevators];
        dots.length = elevs.length;
        for (let i in elevs) {
            hyphens.push('-----');
        }
        hyphens.push('-');
        console.log(hyphens.join(''));
        for (let i = this.floors - 1; i >= 0; i--) {
            for (let j = 0; j < elevs.length; j++) {
                if (elevs[j].floor == i) {
                    dots[j] = '[' + elevs[j].holding + "/" + elevs[j].capacity + ']';
                }
                else {
                    dots[j] = '.....';
                }
            }
            console.log(i + '|' + dots.join('') + '|');
        }
        console.log(hyphens.join(''));
    }
}
exports.Building = Building;
