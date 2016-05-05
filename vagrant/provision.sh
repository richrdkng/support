#!/usr/bin/env bash

# enter permanent su
sudo su

# update before provisioning
apt-get update -y

# install essentials
apt-get install -y python-software-properties
apt-get install -y build-essential nano curl mc

# update after python-software-properties
apt-get update -y

# update git
add-apt-repository -y ppa:git-core/ppa
apt-get update -y
apt-get -y install git

# stop & disable apache
service apache2 stop
update-rc.d -f apache2 remove

# install & start nginx
apt-get install -y nginx
service nginx start

# configure nginx
    # copy configuration files
    yes | cp -rf /vagrant/vagrant/etc/nginx/ /etc/

    # restart service
    service nginx reload

# install node & update npm
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get install -y nodejs
npm install npm -g

# install bower
npm rm --global bower
npm install --global bower

# add custom .bashrc content to .bashrc
cat /vagrant/vagrant/home/vagrant/.bashrc >> /home/vagrant/.bashrc

# update after provisioning
apt-get update -y
