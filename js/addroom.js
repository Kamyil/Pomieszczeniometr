let app = angular.module('roomApp',[]);



app.controller('roomsController', ['$scope', function($scope){
  let i = 1;

$scope.rooms = [
{
  name: 'Pole',
  width: 0,
  height: 0

},
{
  name: 'Pole',
  width: 0,
  height: 0

}];
$scope.total = ($scope.rooms[0].height*$scope.rooms[0].width)+($scope.rooms[1].height*$scope.rooms[1].width);

$scope.addNewTriangleRoom = function() {
  $scope.rooms.push({
    name: 'Pole',
    width: 0,
    height: 0
  
  });

}

$scope.getTotal= function(total){
  total = $scope.total
  return total;
}

$scope.addNewSquareRoom = function() {
  i++;
  
  $scope.rooms.push({
    name: 'Pole',
    width: 0,
    height: 0

  });
  $scope.total += ($scope.rooms[i].height*$scope.rooms[i].width);
}

$scope.deleteRoom = function(){
  $scope.rooms.splice(this.$index, 1);
}

}])