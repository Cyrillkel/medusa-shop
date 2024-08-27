# Старт проекта:

### Для работы нужна Node.js начиная с версии v18.19.0 и yarn

# Dev

```
# 1. Поднимаем БД на фоне (из корня проект, где лежит docker-compose.yml)
docker compose up -d

# 2. Ставим зависимости бэка (медузы) и запускаем
cd medusa
# тут нужно продублировать имеющийся файл env (например .env.template или .env.example) и переименовать его в .env
# прописать креды от БД Postgres в переменную DATABASE_URL, указав там имя БД, логин и пароль
yarn
npx medusa seed --seed-file=data/seed.json # применение миграций и наполенение БД тетсовыми товарами
yarn dev

# 3. Ставим зависимости фронта и запускаем
cd next-storefront
# тут нужно продублировать имеющийся файл env (например .env.template или .env.example) и переименовать его в .env
yarn
yarn dev
```

# Production:

```
# 1. В первую очередь нужно поднять PostgreSQL

# 2. Ставим зависимости бэка (медузы) и запускаем
cd medusa
# тут нужно продублировать имеющийся файл env (например .env.template или .env.example) и переименовать его в .env
# прописать креды от БД Postgres в переменную DATABASE_URL, указав там имя БД, логин и пароль
yarn
npx medusa migrations run # миграции
yarn build
yarn start

# 3. Ставим зависимости фронта и запускаем
cd next-storefront
yarn
# тут нужно продублировать имеющийся файл env (например .env.template или .env.example) и переименовать его в .env
yarn build
yarn start
```

### Если все прошло успешно, то фронт крутится на порту 4173, а Strapi на 1337
