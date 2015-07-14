module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-autoprefixer");
	
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
		}
	});

};
