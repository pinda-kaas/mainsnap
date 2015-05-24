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

  it('should have a 26 cards for player after dealing', function() {
    var controller = createController();
    scope.dealCards();
    expect(scope.playerCards.length).toBe(26);
  });

  it('should have a 26 cards for cpu after dealing', function() {
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
    scope.startGame();
    var result=scope.playerTurn;
    var bool = (result==1 || result==0);
    expect(bool).toBe(true);
  });

  it('should pick one card from own pile and add to centrepile as player after dealing',function(){
    var controller = createController();
    scope.dealCards();
    scope.playerTurn=0;
    var oldLength = scope.playerCards.length;
    var oldLengthCentre=scope.centrePileCards.length;
    console.log('oldLength player',oldLength);
    console.log('oldLength centre',oldLengthCentre);
    scope.pickCard();
    expect(scope.playerCards.length).toBe(oldLength-1);
    expect(scope.centrePileCards.length).toBe(oldLengthCentre+1);
    console.log(' new length player',scope.playerCards.length);
    console.log('new length centre',scope.centrePileCards.length);
  });

  it('should pick one card from own pile and add to centrepile as player starting with 1 card',function(){
    var controller = createController();
    scope.playerCards.push({number:2,suit:"s"});
    scope.playerTurn=0;
    scope.pickCard();
    expect(scope.playerCards.length).toBe(0);
    expect(scope.centrePileCards.length).toBe(1);
    expect(scope.centrePileCards[0].number).toBe(2);
  });


  it('should pick one card from own pile and add to centrepile as cpu after dealing',function(){
    var controller = createController();
    scope.dealCards();
    scope.playerTurn=1;
    var oldLength = scope.cpuCards.length;
    var oldLengthCentre=scope.centrePileCards.length;
    scope.pickCard();
    expect(scope.cpuCards.length).toBe(oldLength-1);
    expect(scope.centrePileCards.length).toBe(oldLengthCentre+1);

  });

  it('should pick one card from own pile and add to centrepile as cpu starting with 1 card',function(){
    var controller = createController();
    scope.cpuCards.push({number:5,suit:"h"});
    scope.playerTurn=1;
    scope.pickCard();
    expect(scope.cpuCards.length).toBe(0);
    expect(scope.centrePileCards.length).toBe(1);
    expect(scope.centrePileCards[0].suit).toBe("h");
  });


  //it('should pick one card from own pile and add to centrepile automatically when cpu',function(){
  //  var controller = createController();
  //  spyOn(scope,'pickCard')
  //  scope.playerTurn=0;
  //  scope.switchTurns();
  //  expect(scope.pickCard).toHaveBeenCalled();
  //});

  it('should switch turns',function(){
    var controller = createController();
    scope.playerTurn=0;
    scope.switchTurns();
    console.log('playerTurn',scope.playerTurn);
    expect(scope.playerTurn).toBe(true);
  });



});
