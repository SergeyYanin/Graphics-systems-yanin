FROM php:7.4-apache

RUN apt-get update \
    && apt-get -y install apache2 \
    && a2enmod \
    rewrite

ADD apache-config.conf /etc/apache2/sites-enabled/000-default.conf