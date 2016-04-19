# enter permanent su
sudo su

# update before provisioning
apt-get update -y

# install essentials
apt-get install -y build-essential git nano curl mc

# stop & disable apache
service apache2 stop
update-rc.d -f apache2 remove

# install & start nginx
apt-get install -y nginx
service nginx start

# configure nginx
    # copy configuration files
    yes | cp -rf /vagrant/.provision/etc/nginx/ /etc/

    # restart service
    service nginx reload

# install node & update npm
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install -y nodejs
npm install npm -g

# install gulp
npm rm --global gulp
npm install --global gulp gulp-cli

# add custom .bashrc content to .bashrc
cat /vagrant/.provision/home/vagrant/.bashrc >> /home/vagrant/.bashrc