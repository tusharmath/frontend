# Require any additional compass plugins here.
$stdout.sync = true
project_type = "stand_alone"

# Set this to the root of your project when deployed:
http_path = "/fe/"
css_dir = "static/css"
sass_dir = "static/scss"
images_dir = "static/images"
fonts_dir = ""
javascripts_dir = "static/js"

# You can select your preferred output style here (can be overridden via the command line):
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
#relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

require 'compass_twitter_bootstrap'
