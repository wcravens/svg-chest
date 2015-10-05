var chai   = require('chai')
,   expect = chai.expect
,   svgChest = require('..')
;

describe('svg-chest', function() {
  it('should be a module', function() {
    expect(svgChest).to.be.an('object');
  });

  it('should export start', function() {
    expect(svgChest.startSVG).to.be.a('function');
  });

  describe('startSVG', function() {
    it( 'should return an object', function() {
      expect( svgChest.startSVG() ).to.be.an('object');
    });
    it( 'should have an svg property', function() {
      expect( svgChest.startSVG() ).to.have.property('svg');
    });
  });
});
