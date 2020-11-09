docker ps
Список запущенных образов

docker exec -it имя контейнера sh
Позволяет запустить shell консоль в контейнере

docker-compose up --build
Сбилдить и запустить контейнеры

docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
Сбилдить и запустить контейнеры, заменив команды в файле yml теми, что прописаны в development.yml

ps aux | grep nginx
Проверяем запущен nginx на машине или нет

docker network
Вывести список команд для сетей докера