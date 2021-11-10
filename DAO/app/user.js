"use strict";
exports.__esModule = true;
exports.Venta = void 0;
var Venta = /** @class */ (function () {
    function Venta(id, name, reason, date) {
        this.SalesReasonID = id;
        this.Name = name;
        this.ReasonType = reason;
        this.ModifiedDate = date;
    }
    return Venta;
}());
exports.Venta = Venta;
