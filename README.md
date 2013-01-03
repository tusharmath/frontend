# Our rocking website

Our awesome nodejs powered frontend

## Dev setup

 * Install nodejs

 * Install compass (http://compass-style.org/install/)
        
        $ gem install compass

 * Install dependencies
        
        $ npm install

 * Whenever you add a new image to the sprite
    
        $ compass sprite "static/images/sprite/*.png" --force
        $ compass sprite "static/images/landing/*.png" --force
        $ compass sprite "static/images/team/*.png" --force

 * Tell compass to watch changes

        $ compass watch

 * Run server 

        $ node app.js

 * Testing

 		$ make test
