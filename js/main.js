// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';




import angular from 'angular';
import 'angular-ui-router';
import config from './config';

import HomeController from './controllers/homeController';
import ProjectController from './controllers/projectController';
import SkillsController from './controllers/skillsController';
import ResumeController from './controllers/resumeController';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ProjectController', ProjectController)
  .controller('SkillsController', SkillsController)
  .controller('ResumeController', ResumeController)
;