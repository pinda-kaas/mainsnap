describe('main ctrl tests', function() {
  beforeEach(module('snapApp'));
  var scope, createController;

  beforeEach(inject(function ($rootScope, $controller ) {

    scope = $rootScope.$new();

    createController = function() {
      return $controller('MainCtrl', {
        '$scope': scope
      });
    };
  }));

  it('should have a 26 cards for player', function() {
    var controller = createController();
    scope.dealCards();
    expect(scope.playerCards.length).toBe(26);
  });

  it('should have a 26 cards for cpu', function() {
    var controller = createController();
    scope.dealCards();
    expect(scope.cpuCards.length).toBe(26);
  });


  it('should together for players and cpu cards have 13 of each suit', function() {
    var controller = createController();
    scope.dealCards();

    var allCards = scope.cpuCards.concat(scope.playerCards);

    var allHearts = _.where(allCards,{suit:"h"});
    var allSpades = _.where(allCards,{suit:"s"});
    var allDaimonds = _.where(allCards,{suit:"d"});
    var allClubs = _.where(allCards,{suit:"c"});

    expect(allHearts.length).toBe(13);
    expect(allSpades.length).toBe(13);
    expect(allDaimonds.length).toBe(13);
    expect(allClubs.length).toBe(13);
  });

  it('should player be either 0 or 1 random',function(){
    var controller = createController();
    scope.switchPlayerTurn();
    var result=scope.playerTurn;
    var bool = (result==1 || result==0);
    expect(bool).toBe(true);
  })

  it('should pick one card from own pile and add to centrepile',function(){
    var controller = createController();
    scope.dealCards();
    scope.playerTurn=0;
    var oldLength = scope.playerCards.length;
    var oldLengthCentre=scope.centrePileCards.length;
    console.log('oldLength',oldLengthCentre);
    scope.pickCard();
    expect(scope.playerCards.length).toBe(oldLength-1);
    expect(scope.centrePileCards.length).toBe(oldLengthCentre+1);
  })



});
