module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {// Task
            dist: {// Target
                options: {// Target options
                    style: 'compressed'
                },
                files: {// Dictionary of files
                    'static/css/default.css': 'static/css/sass/default.scss',
                    'static/css/vendors.css': 'static/css/sass/vendors.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'static/css/sass/**/*.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        //Minify JS
        uglify: {
            options: {
                mangle: false
            },
            theme: {
                files: {
                    'static/deploy/theme.min.js': [
                        'static/plugins/jquery/js/jquery.min.js',
                        'static/plugins/jquery/js/jquery-migrate-1.2.1.min.js',
                        'static/plugins/bootstrap/js/popper.min.js',
                        'static/plugins/bootstrap/js/bootstrap.min.js',
                        'static/plugins/fancybox/js/jquery.fancybox.js',                      
                        'static/plugins/slick/js/slick.min.js',                      
                        'static/js/app.js'
                    ]                    
                }
            }
        },
        cachebreaker: {
            theme: {
                options: {
                    match: ['theme.min.js', 'default.min.css']
                },
                files: {
                    src: [
                        'index.html',
                        'our-offer.html',
                        'our-partner.html',
                        'our-price.html',
                        'publisher-grant-overview.html'
                    ]
                }
            }
        },
        //Minify Css Files
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            theme: {
                files: {
                    'static/deploy/default.min.css' : [
                        'static/css/vendors.css',
			'static/css/default.css'
                    ]
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'cachebreaker']);
};