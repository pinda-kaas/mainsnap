describe('snap tests', function() {
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


  it('startGame should call dealcards', function() {
    spyOn(scope,'dealCards');
    var controller = createController();

    expect(scope.dealCards).toHaveBeenCalled();
  });


  //
  //it('should have a 26 cards for player after dealing', function() {
  //  var controller = createController();
  //  scope.dealCards();
  //  expect(scope.playerCards.length).toBe(26);
  //});
  //
  //it('should have a 26 cards for cpu after dealing', function() {
  //  var controller = createController();
  //  scope.dealCards();
  //  expect(scope.cpuCards.length).toBe(26);
  //});
  //
  //
  //it('together for players and cpu cards have 13 of each suit', function() {
  //  var controller = createController();
  //  scope.dealCards();
  //
  //  var allCards = scope.cpuCards.concat(scope.playerCards);
  //  var allHearts = _.where(allCards,{suit:"h"});
  //  var allSpades = _.where(allCards,{suit:"s"});
  //  var allDaimonds = _.where(allCards,{suit:"d"});
  //  var allClubs = _.where(allCards,{suit:"c"});
  //
  //  expect(allHearts.length).toBe(13);
  //  expect(allSpades.length).toBe(13);
  //  expect(allDaimonds.length).toBe(13);
  //  expect(allClubs.length).toBe(13);
  //});

  it('playerTurn test should be either 0 or 1 random',function(){
    var controller = createController();
    scope.startGame();
    var result=scope.playerTurn;
    var bool = (result==1 || result==0);
    expect(bool).toBe(true);
  });

  it('placeCardCentrePile add to centrepile as player',function(){
    var controller = createController();
    scope.dealCards();
    scope.playerTurn=0;
    var oldLength = scope.playerCards.length;
    var oldLengthCentre=scope.centrePileCards.length;
    scope.placeCardCentrePile();
    expect(scope.playerCards.length).toBe(oldLength-1);
    expect(scope.centrePileCards.length).toBe(oldLengthCentre+1);
  });

  it('placeCardCentrePile add to centrepile as player starting with 1 card',function(){
    var controller = createController();
    scope.playerCards.push({number:2,suit:"s"});
    scope.playerTurn=0;
    scope.placeCardCentrePile();
    expect(scope.playerCards.length).toBe(0);
    expect(scope.centrePileCards.length).toBe(1);
    expect(scope.centrePileCards[0].number).toBe(2);
  });

  it('pick one card from own pile and add to centrepile as cpu after dealing',function(){
    var controller = createController();
    scope.dealCards();
    scope.playerTurn=1;
    var oldLength = scope.cpuCards.length;
    var oldLengthCentre=scope.centrePileCards.length;
    scope.placeCardCentrePile();
    expect(scope.cpuCards.length).toBe(oldLength-1);
    expect(scope.centrePileCards.length).toBe(oldLengthCentre+1);

  });

  it('pick one card from own pile and add to centrepile as cpu starting with 1 card',function(){
    var controller = createController();
    scope.cpuCards.push({number:5,suit:"h"});
    scope.playerTurn=1;
    scope.placeCardCentrePile();
    expect(scope.cpuCards.length).toBe(0);
    expect(scope.centrePileCards.length).toBe(1);
    expect(scope.centrePileCards[0].suit).toBe("h");
  });


  it('place card automatically when cpu',function(){
    var controller = createController();
    spyOn(scope,'placeCardCentrePile')
    scope.playerTurn=0;
    scope.switchTurns();
    expect(scope.placeCardCentrePile).toHaveBeenCalled();
  });

  it('switch turns',function(){
    var controller = createController();
    scope.playerTurn=0;
    scope.switchTurns();
    scope.reactionTimeCpu=1;
    expect(scope.playerTurn).toBe(true);
  });

  it('return the same amount of cards after shuffle for cpu',function(){
    var controller = createController();
    scope.playerTurn=1;
    scope.dealCards();
    var allCards = scope.cpuCards.concat(scope.playerCards);
    var result=scope.shuffle(allCards);
    expect(result.length).toBe(51);
  });

  it('call snap for and player takes centrepile',function(){
    var controller = createController();
    scope.centrePileCards = [{number: 6, suit: 'h'},{number: 3, suit: 'h'}];
    scope.playerTurn=0;
    scope.reactionTimeCpu=20000;
    scope.checkSnapTakeCentrePile();
    expect(scope.snap).toBe(true);
    //expect(scope.playerTurn).toBe(0);
    //expect(scope.centrePileCards.length).toBe(0);
    //expect(scope.playerCards.length).toBe(2);
  });

  it('call snap for and cpu takes centrepile',function(){
    var controller = createController();
    scope.centrePileCards = [{number: 6, suit: 'h'},{number: 3, suit: 'h'}];
    scope.playerTurn=1;
    scope.reactionTimeCpu=200;
    scope.checkSnapTakeCentrePile();
    expect(scope.snap).toBe(true);
    expect(scope.playerTurn).toBe(1);
    expect(scope.centrePileCards.length).toBe(0);
    expect(scope.cpuCards.length).toBe(2);
  });

  it('player wins game',function(){
    var controller = createController();
    scope.playerCards=[{number: 6, suit: 'h'},{number: 6, suit: 's'}];
    scope.cpuCards=[];
    scope.playerTurn=0;
    scope.checkWinner();
    expect(scope.winner).toEqual('player wins the game!!');
  });

  it('cpu wins game',function(){
    var controller = createController();
    scope.cpuCards=[{number: 6, suit: 'h'},{number: 6, suit: 's'}];
    scope.playerCards=[];
    scope.playerTurn=1;
    scope.checkWinner();
    expect(scope.winner).toEqual('CPU wins the game!!');
  });

  it('cpu wins game',function(){
    var controller = createController();
    scope.cpuCards=[{number: 6, suit: 'h'},{number: 6, suit: 's'}];
    scope.playerCards=[];
    scope.centrePileCards = [];
    scope.playerTurn=1;
    scope.checkWinner();
    expect(scope.winner).toEqual('CPU wins the game!!');
  });

  it('cpu gets snap and wins',function(){
    scope.centrePileCards = [{number: 6, suit: 'h'},{number: 3, suit: 'h'}];
    scope.playerTurn=1;
    scope.reactionTimeCpu=200;
    scope.checkSnapTakeCentrePile();
    expect(scope.snap).toBe(true);

  })




});
