let app = angular.module('my-app', []);

function MyCtrl(){}
MyCtrl.prototype = {
  addElement:function(){
    let newRoom = angular.element('<div class="room"> <h3><input type="text" name="" id="" placeholder="Pole 1"></h3><label for=""><i class="fas fa-arrows-alt-h"></i></label> <input type="number" ng-model="height1"> m <label for=""><i class="fas fa-arrows-alt-v"></i></label> <input type="number" ng-model="width1"> m <br><br><label for="" class="totalSingle">{{ height1*width1 }} m<sup>2</sup></label></div>');
    let rooms = document.getElementById('rooms');
    angular.element(rooms).append(newRoom);
  }
};

app.controller('myCtrl', MyCtrl);