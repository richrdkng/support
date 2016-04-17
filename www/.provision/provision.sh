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
    # create initial www folder+content
        # link /vagrant to /www (on the guest)
        rm -rf /www
        ln -s /vagrant /www

    # copy configuration files
    yes | cp -rf /vagrant/.provision/etc/nginx/ /etc/

    # restart service
    service nginx reload

# add custom .bashrc content to .bashrc
cat /vagrant/.provision/home/vagrant/.bashrc >> /home/vagrant/.bashrc