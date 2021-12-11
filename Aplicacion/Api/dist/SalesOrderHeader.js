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
Object.defineProperty(exports, "__esModule", { value: true });
var sql = require('mssql');
const database_1 = require("./database");
function recuperarVentas() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sql.connect(database_1.sqlConfig);
        let ventasInt = [];
        console.log("aqui estoy");
        var request = new sql.Request();
        let result = yield request.query('select TerritoryID, count(*) from Sales.SalesOrderHeader group by TerritoryID');
        console.log(result);
        ventasInt.push(1);
        return ventasInt;
    });
}
exports.default = recuperarVentas;
