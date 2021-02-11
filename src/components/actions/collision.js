import * as constants from '../../constants.js';

constants.AFRAME.registerComponent('check-collision', {


  init: function() {
      var el = this.el;
      el.sceneEl.addEventListener('ballThrown', function(ev, target){
        var targetPosition = el.object3D.position;
        isCollision(el,targetPosition);
      });
}});

function isCollision(el,targetPosition){
  var isCollision = false;
  var ballPosition = document.getElementById("sphere").getAttribute('position');

  if (isCollisionX(targetPosition.x,ballPosition.x) && isCollisionY(targetPosition.y,ballPosition.y)) {
    isCollision = true;
    el.emit('collided');
  }
  else {
    el.emit('collision-failed');
  }
  return isCollision;
}

function isCollisionX(targetPositionAxis,ballPositionAxis)
{
  return isCollisionAxis(targetPositionAxis,ballPositionAxis,'x');
}

function isCollisionY(targetPositionAxis,ballPositionAxis)
{
  return isCollisionAxis(targetPositionAxis,ballPositionAxis,'y');
}

function isCollisionAxis(targetPositionAxis,ballPositionAxis,axis) {
  var targetLength=0;
  if (axis==='x') targetLength = constants.TARGETWIDTH;
  else if (axis==='y') targetLength = constants.TARGETHEIGHT;

  var targetInterval = findTargetInterval(targetLength,targetPositionAxis);
  console.log(targetInterval);
  console.log(ballPositionAxis);
  //TODO: ballInterval has to be in target interval (if not, score is <)
  var ballInterval = findBallInterval(ballPositionAxis);
  return(ballPositionAxis>= targetInterval[0] && ballPositionAxis<= targetInterval[1]);


}

function findTargetInterval(targetLength,targetPositionAxis) {
  var firstBoundIntervalAxis = targetPositionAxis - (targetLength/2) ;
  var secondBoundIntervalAxis = targetPositionAxis + (targetLength/2) ;
  return [Math.min(firstBoundIntervalAxis,secondBoundIntervalAxis),Math.max(firstBoundIntervalAxis,secondBoundIntervalAxis)];
}

function findBallInterval(ballPositionAxis) {
  var firstBoundIntervalAxis = ballPositionAxis-(constants.BALLRADIUS) ;
  var secondBoundIntervalAxis = ballPositionAxis+(constants.BALLRADIUS) ;
  return [Math.min(firstBoundIntervalAxis,secondBoundIntervalAxis),Math.max(firstBoundIntervalAxis,secondBoundIntervalAxis)];
}