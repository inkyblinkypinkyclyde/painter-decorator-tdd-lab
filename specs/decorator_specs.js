const assert = require('assert');
const Decorator = require('../models/decorator');
const Paint = require('../models/paint');
const Room = require('../models/room');

describe('Decorator', function () {
    let decorator;

    this.beforeEach(function () {
        decorator = new Decorator()
        paint = new Paint(1, "Magnolia")
        largePaint = new Paint(10, "red")
        room = new Room(10)
    })

    it('Should start with empty paint stock', function () {
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [])
    })

    it('Should be able to add a can of paint', function () {
        decorator.addPaintStock(paint)
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [paint])
    })

    it('Should be able to calculate total litres of paint it has in stock', function () {
        decorator.addPaintStock(paint)
        const actual = decorator.calculateTotalLitresOfPaint()
        assert.strictEqual(actual, 1)
    })
    it('Should be able to calculate whether has enough paint to paint room', function () {
        const actual = decorator.canPaintRoom(room)
        assert.strictEqual(actual, false)
    })
    it('Should be able to paint room if has enough stock', function () {
        const actual room.painted
        assert.strictEqual(actual, true)

    })
})


describe('Paint', function () {
    let paint;
    beforeEach(function () {
        paint = new Paint(1, "Magnolia")
        emptyPaint = new Paint(0, "Hamptons")
    })

    it('should have a volume', function () {
        const actual = paint.volume
        assert.strictEqual(actual, 1)
    });


    it('should have a colour', function () {
        const actual = paint.colour
        assert.strictEqual(actual, "Magnolia")
    });
    it('should be able to check if its empty', function () {
        const actual = emptyPaint.isCanEmpty()
        assert.strictEqual(actual, true)
    });
    it('should be able to empty itself of paint', function () {
        paint.empty()
        const actual = paint.isCanEmpty()
        assert.strictEqual(actual, true)
    });
})


describe('Room', function () {
    let room;
    this.beforeEach(function () {
        room = new Room(10)

    })
    it('should have an area', function () {
        const actual = room.area
        assert.strictEqual(actual, 10)
    })
    it('should be not painted', function () {
        const actual = room.painted
        assert.strictEqual(actual, false)
    })

    it('should be able to be painted', function () {
        room.paintRoom()
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
})