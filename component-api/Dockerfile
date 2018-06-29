FROM php:7.2.4-fpm

RUN apt-get update && apt-get install

RUN apt-get install git -y

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

WORKDIR /var/www

COPY component-api/  /var/www/


RUN composer install