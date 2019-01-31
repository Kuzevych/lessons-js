QUnit.module( "group a" );
QUnit.test( "1", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});
QUnit.test( "2", function( assert ) {
    assert.notOk( 1 === "1", "Not equal!" );
});
QUnit.test( "3", function( assert ) {
    assert.equal( 1, "1", "Passed!" );
});
QUnit.test( "4", function( assert ) {
    assert.strictEqual( 1, "1", "Passed!" );
});

var a = {
    name: 'Ivan',
};
var b = {
    name: 'Ivan',
};

QUnit.test( "5", function( assert ) {
    assert.equal( a, b, "Passed!" );
});
QUnit.test( "6", function( assert ) {
    assert.deepEqual( a, b, "Passed!" );
});

QUnit.test( "expect", function( assert ) {
    assert.expect( 2 );

    function calc( x, operation ) {
        return operation( x );
    }

    var result = calc( 2, function( x ) {
        assert.ok( true, "calc() calls operation function" );
        return x * x;
    });

    assert.equal( result, 4, "2 squared equals 4" );
    assert.deepEqual( a, b, "Passed!" );
});

QUnit.test( "async", function( assert ) {
    var done = assert.async();
    setTimeout(function () {
        assert.ok( 1 == "1", "Passed!" );
        done();
    }, 2000);
});