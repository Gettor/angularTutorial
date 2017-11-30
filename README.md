# angularTutorial : https://angular.io/tutorial

## MongoDB successful setup (as described [here](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04) ):

`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927`

`echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list`

`sudo apt-get update`

`sudo apt-get install -y mongodb-org`

Start mongoDB as a service:

`sudo systemctl start mongod`

Create a symlink to enable autorunning mongoDB:

`sudo systemctl enable mongod`
