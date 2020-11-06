FROM node:13.12.0-alpine

#Указываем рабочую директорию
WORKDIR /usr/src/app
#Копируем файлы в контейнер
COPY package*.json ./

RUN npm install
#Копируем все файлы
COPY . .
