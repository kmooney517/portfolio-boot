import $ from 'jQuery';

let SkillsController = function($scope) {

  $('.flip').mouseenter(function(){
    $(this).find('.card').addClass('flipped').mouseleave(function(){
      $(this).removeClass('flipped');
    });
    return false;
  });




};

SkillsController.$inject = ['$scope'];

export default SkillsController;