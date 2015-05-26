describe('human state tests', function () {
  beforeEach(module('snapApp'));
  var scope, createController, state;

  beforeEach(inject(function ($rootScope, $controller, $state) {
    scope = $rootScope.$new();
    state = jasmine.createSpyObj('$state', ['go']);
    createController = function () {
      return $controller('HumanCtrl', {
        '$scope': scope,
        '$state': state
      });
    };
  }));

  //
  //it('placeCardCentrePile', function () {
  //  var controller = createController();
  //  scope.playerCards = [{nr: '1', suit: 'd'}]
  //  scope.centrePileCards=[];
  //  scope.placeCardCentrePile();
  //  expect(scope.playerCards.length).toBe(0);
  //  expect(scope.centrePileCards.length).toBe(1);
  //});
  //
  //it('check snap', function () {
  //  var controller = createController();
  //  spyOn(scope,'checkSnap');
  //  var centrePileCards=[{number: '1', suit: 'd'},{number: '2', suit: 'd'}];
  //
  //  localStorage.setItem('centrePileCards',JSON.stringify(centrePileCards));
  //
  //  expect(state.go).toHaveBeenCalledWith('snap',{player:'human'});
  //
  //  //expect(scope.checkSnap).toHaveBeenCalled();
  //
  //  //expect(scope.playerCards.length).toBe(0);
  //  //expect(scope.centrePileCards.length).toBe(2);
  //});


});
