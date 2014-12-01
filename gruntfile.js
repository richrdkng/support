"use strict";

module.exports = function(grunt) {
    var task = {};
        task["default"] = {
            name: "default",
            list: ["sass", "htmlmin"]
        };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        watch: {
            scripts: {
                files: [
                    "idx.html",
                    "scss/*.scss"
                ],
                tasks: task.default.list,
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                options: {
                    //style: "nested"
                    //style: "compact"
                    style: "compressed"
                    //style: "expanded"
                },
                files: {
                    "css/main.css": "scss/main.scss"
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "index.html": "idx.html"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask(task.default.name, task.default.list);
};
