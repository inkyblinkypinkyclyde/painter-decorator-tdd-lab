const Decorator = function () {
    this.paintStock = []
}

Decorator.prototype.addPaintStock = function (paint) {
    this.paintStock.push(paint)
}

Decorator.prototype.calculateTotalLitresOfPaint = function () {
    totalPaint = 0
    for (paintCan in this.paintStock) {
        totalPaint += paint.volume
    }
    return totalPaint
}

Decorator.prototype.canPaintRoom = function (room) {
    if (room.area <= this.calculateTotalLitresOfPaint()) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.changePaintedStatus

module.exports = Decorator