module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css":["less/style.less"]
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ["last 4 versions", "ie 10"]
			},
			style: {
				src: "css/style.css"
			}
		},
		cssmin: {
			style: {
				options: {
					keepSpecialComments: 0,
					report: "gzip"
				},
				files: {
					"css/style.min.css":["css/style.css"]
				}
			}
		}
	});
	grunt.registerTask("build",[
		"less",
		"autoprefixer",
		"cssmin"
	]);
};
