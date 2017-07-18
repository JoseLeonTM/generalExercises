"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const treeBuilder_1 = require("./treeBuilder");
const a_1 = require("./a");
const b_1 = require("./b");
const c_1 = require("./c");
console.log(a_1.default(treeBuilder_1.node1, treeBuilder_1.node2).value);
console.log(b_1.default(treeBuilder_1.node1, treeBuilder_1.node2).value);
console.log(c_1.default(treeBuilder_1.node1, treeBuilder_1.node2).value);
