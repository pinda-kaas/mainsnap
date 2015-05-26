describe('startgame state tests', function() {
  beforeEach(module('snapApp'));
  var scope, createController, state, rootscope;

  beforeEach(inject(function ($rootScope, $controller,$state) {
    scope = $rootScope.$new();
    state = jasmine.createSpyObj('$state', ['go']);
    createController = function () {
      return $controller('StartGameCtrl', {
        '$scope':scope,
        '$state':state

      });
    };
  }));

  it('game should go to cpu state', function () {
    var controller = createController();
    spyOn(scope, 'dealCards');
    scope.playerTurn=1;
    scope.startGame(scope.playerTurn);
    expect(state.go).toHaveBeenCalledWith('cpu');
    //expect(scope.dealCards).toHaveBeenCalled();
  });

  it('game should go to human state', function () {
    var controller = createController();
    spyOn(scope, 'dealCards');
    scope.startGame(0);
    expect(state.go).toHaveBeenCalledWith('human');
    expect(scope.dealCards).toHaveBeenCalled();
  });

  it('should dealcards properly and randomly',function(){
    var controller = createController();
    scope.dealCards(['2','3','4','5','6','7','8','9','10','J','Q','K','A'],['s','h','d','c']);
    expect(scope.playerCards.length).toBe(26);
    expect(scope.cpuCards.length).toBe(26);
  })

});
