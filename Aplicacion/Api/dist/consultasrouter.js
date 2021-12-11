"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SalesOrderHeader_1 = __importDefault(require("./SalesOrderHeader"));
const router = (0, express_1.Router)();
router.get("/consulta", (req, res) => res.json('getting consulta'));
router.get("/recuperar", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let ventas = [];
    res.json('hola');
    console.log(yield (0, SalesOrderHeader_1.default)());
}));
exports.default = router;
