const Paint = function (volume, colour) {
    this.volume = volume;
    this.colour = colour;
}

Paint.prototype.isCanEmpty = function () {
    if (this.volume === 0) {
        return true
    } else {
        return false
    };

}

Paint.prototype.empty = function () {
    this.volume = 0
}
module.exports = Paint