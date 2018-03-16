let app = angular.module('roomApp',[]);



app.controller('roomsController', ['$scope', function($scope){
 

$scope.rooms = [
{
  name: 'Pole',
  width: 0,
  height: 0,
  totalSingle: 0

},{
  name: 'Pole',
  width: 0,
  height: 0,
  totalSingle: 0

}];
$scope.total=0;

$scope.addNewTriangleRoom = function() {
  $scope.rooms.push({
    name: 'Pole',
    width: 0,
    height: 0,
    totalSingle: 0
  
  });

}

function getTotal(){
  var total=0;
  angular.forEach($scope.rooms, function(room) {
     total += room.totalSingle;
   });
   return total;
};

$scope.$watch(function(newVal,oldVal){
  if(newVal != undefined & newVal != oldVal){
  $scope.total = getTotal();
   }
});

$scope.totalSingle = function(room){
  room.totalSingle = room.width * room.height;

  return room.totalSingle;
}






$scope.addNewSquareRoom = function() {

  
  $scope.rooms.push({
    name: 'Pole',
    width: 0,
    height: 0,
    totalSingle: 0

  });

}

$scope.deleteRoom = function(){
  $scope.rooms.splice(this.$index, 1);
}




}]);