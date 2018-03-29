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
$scope.roomsM3 = [
  {
    name: 'Pole',
    x: 0,
    y: 0,
    z: 0,
    totalSingle: 0
  
  },{
    name: 'Pole',
    x: 0,
    y: 0,
    z: 0,
    totalSingle: 0
  
  }];
  $scope.total= 0;
  $scope.totalM3 = 0;


  
  
// $scope.addNewTriangleRoom = function() {
//   $scope.rooms.push({
//     name: 'Pole',
//     width: 0,
//     height: 0,
//     totalSingle: 0
  
//   });

// }



function getTotal(){
  
  let total=0;
  angular.forEach($scope.rooms, function(room) {
    total += room.totalSingle;
  });

  return total;
  
}
function getTotalM3(){
  let totalM3=0;
  angular.forEach($scope.roomsM3, function(roomM3) {
     totalM3 += roomM3.totalSingle;
   });
     console.log(totalM3);
   return totalM3;
}



$scope.$watch(function(newVal,oldVal){
if(newVal != undefined & newVal != oldVal){
  $scope.total = getTotal();
  $scope.totalM3 = getTotalM3();
}
  
});

$scope.totalSingle = function(room){
  room.totalSingle = room.width * room.height;

  return room.totalSingle;
}







// M3


$scope.totalSingleM3 = function(roomM3){
  roomM3.totalSingle = roomM3.x * roomM3.y * roomM3.z;

  return roomM3.totalSingle;
}





$scope.addNewSquareRoom = function() {

  
  $scope.rooms.push({
    name: 'Pole',
    width: 0,
    height: 0,
    totalSingle: 0

  });

}
$scope.addNewSquareRoomM3 = function() {

  
  $scope.roomsM3.push({
    name: 'Pole',
    x: 0,
    y: 0,
    z: 0,
    totalSingle: 0

  });

}







$scope.deleteRoom = function(){
  $scope.rooms.splice(this.$index, 1);
}

// m3


$scope.deleteRoomM3 = function(){
  $scope.roomsM3.splice(this.$index, 1);
}



}]);



