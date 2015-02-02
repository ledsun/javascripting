#!/usr/bin/env node

var path = require('path');
var adventure = require('adventure');
var jsing = adventure('javascripting-jp');

var problems = require('./menu.json');

problems.forEach(function (problem) {
  // eg. title(dir)
  var link = problem.match(/.*\((\w[\s\w]*\w)\)/);

  if(link){
      var name = link[1];
  }else{
      var name = problem;
  }

  var p = name.toLowerCase().replace(/\s/g, '-');
  var dir = path.join(__dirname, 'problems', p);
  jsing.add(problem, function () { return require(dir); });
});

jsing.execute(process.argv.slice(2));
