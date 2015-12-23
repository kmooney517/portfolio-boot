import $ from 'jQuery';

let HomeController = function($scope, $location, $anchorScroll, $rootScope, $state) {
  
  let vm = this;
  vm.dropDown = dropDown;
  vm.scrollDown = scrollDown;
  vm.scrollUp = scrollUp;
  vm.showSkills = showSkills;
  vm.showProjects = showProjects;
  vm.showResume = showResume;

  function dropDown () {
    $('.dropDown').toggleClass('shown');
  }

  function scrollDown() {
    $location.hash('bottom');
    $anchorScroll();
  }

  function scrollUp() {
    $location.hash('top');
    $anchorScroll();
  }

  function showSkills () {
    $state.go('root.skills');
  }
  function showProjects () {
    $state.go('root.projects');
  }
  function showResume () {
    $state.go('root.resume');
  }


};


HomeController.$inject = ['$scope', '$location', '$anchorScroll', '$rootScope', '$state'];

export default HomeController;

