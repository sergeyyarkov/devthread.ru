---
templateKey: article
slug: ispolzovanie-apollo-server-vmeste-s-typescript
keywords:
  - typescript
  - apollo
  - nodejs
  - graphql
time: "10"
title: Использование Apollo Server вместе с TypeScript
popular: true
image: /assets/typescript-apollo-wallpaper.png
category: Разработка
date: 2020-09-24T15:55:48.534Z
description: В этом небольшом руководстве мы рассмотрим использование TypeScript
  вместе с Apollo Server Express
tags:
  - typescript
  - apollo
  - nodejs
  - graphql
---

🔗 [Ссылка на репозиторий](https://github.com/sergeyyarkov/ts-apollo-express-setup)

## Содержание

- [Описание списка зависимостей](#Описание-списка-зависимостей)
- [Структура проекта](#Структура-проекта)
- [Предварительная настройка](#Предварительная-настройка)
- [Создание Type Definitions](#Создание-Type-Definitions)
- [Создание Resolvers](#Создание-Resolvers)
- [Создание схемы](#Создание-схемы)
- [Использование Apollo Server Express](#Использование-Apollo-Server-Express)
- [Заключение](#Заключение)

💡 Данное руководство расчитано на тех разработчиков, кто уже имел небольшой опыт с использованием технологий **Apollo Server** и **TypeScript**.

## Описание списка зависимостей

Для установки необходимых npm пакетов используйте команды ниже, но перед этим создайте папку проекта с любым названием и инициализируйте npm вместе с [конфигом typescript](https://www.typescriptlang.org/docs/handbook/compiler-options.html):

```bash
mkdir typescript-apollo-server
cd ./typescript-apollo-server

// инициализация npm
npm init -y

// установка dev зависимостей
npm install -D @types/node prettier ts-node ts-node-dev typescript

// установка основных зависимостей
npm install @types/graphql-depth-limit apollo-server-express cors dotenv express graphql graphql-depth-limit graphql-tools

// инициализировать файл с настройками typescript
npx tsc --init
```

Теперь по порядку узнаем для чего нужны эти пакеты:

**devDependencies:**

1. **@typesnode** - устанавливаем type definitions node.js для нашего typescript **~717 kB**
2. **prettier** - этот пакет нужен для форматирования вашего кода, вы можете установить его <ins>по желанию</ins> **~9.08 MB**
3. **ts-node** - данные пакет предназначен для транспиляции typescript кода в javascript **~377 kB**
4. **ts-node-dev** - отладка кода typescript. этот пакет будет следить за вашими файлами **.ts** и перезагружать сервер при их изменении (можно использовать nodemon) **~57 kB**
5. **typescript** - сам typescript **~56.8 MB**

**dependencies:**

1. **apollo-server-express** - GraphQL сервер вместе в веб-фреймворком Express.js **~70.1 kB**
2. **express** - веб-фреймворк Express.js **~208 kB**
3. **graphql** - среда выполнения запросов к нашей API **~1.92 MB**
4. **graphql-depth-limit** - защита он неограниченных запросов в API, подробнее [здесь](https://www.apollographql.com/blog/securing-your-graphql-api-from-malicious-queries-16130a324a6b/)
5. **@types/graphql-depth-limit** - type definitions graphql-depth-limit
6. **graphql-tools** - пакет, который будет создавать нашу GraphQL схему **~18 kB**
7. **dotenv** - пакет, который будет загружать переменные среды из файла **.env** в **process.env** - **~23.1 kB**
8. **cors** - для включения кросс доменных запросов - **~20 kB**

## Структура проекта

Теперь после того как все пакеты установлены, определимся со структурой проекта:

```text
.
└── typescript-apollo-server
    ├── graphql
    │   ├── resolvers - обработчики запросов
    │   │   ├── Books
    │   │   │   └── Books.ts
    │   │   ├── Users
    │   │   │   └── Users.ts
    │   │   └── index.ts
    │   ├── typeDefs - типы
    │   │   ├── Book.graphql
    │   │   ├── User.graphql
    │   │   └── schema.graphql
    │   └── schema.ts
    ├── index.ts - сервер
    ├── package.json
    └── tsconfig.json
```

В качестве простого примера GraphQL сервера, будем создавать несколько resolvers - это **Books** и **Users**.

## Предварительная настройка

Перед тем как начать разрабатывать наш сервер, зайдем в **package.json** и установим скрипты запуска:

```text
"scripts": {
  "start": "ts-node index.ts",
  "server": "ts-node-dev --respawn index.ts"
},
```

Теперь необходимо создать схему, создаем папку **graphql** и в ней также создаем еще две папки **resolvers** и **typeDefs**, также не забываем создать файл **schema.ts**:

```bash
mkdir graphql
cd ./graphql

mkdir resolvers
mkdir typeDefs
touch schema.ts
```

## Создание Type Definitions

Далее определим type definitions, перейдем в папку **typeDefs** и создадим **3** файла **schema.graphql**, **User.graphql** и **Book.graphql**.

```bash
cd ./typeDefs

touch schema.graphql
touch User.graphql
touch Book.graphql
```

Далее напишем наши типы. Обратите внимание что для удобства и разделения кода мы будем использовать импорты. Возможность использовать импорты нам предоставляет пакет **graphql-tools**. Для того чтобы импортировать файл **.graphql** ставится знак **#** и указывается путь.

Главный файл **schema.graphql**:

```graphql
# ./graphql/typeDefs/schema.graphql

# import Book from './Book.graphql'
# import User from './User.graphql'

type Query {
  books: [Book]
  users: [User]
}
```

Файл **Book.graphql**:

```graphql
# ./graphql/typeDefs/Book.graphql

type Book {
  id: String
  title: String
}
```

Файл **User.graphql**:

```graphql
# ./graphql/typeDefs/User.graphql

type User {
  id: String
  name: String
}
```

## Создание Resolvers

С типами определились, теперь напишем простые резолверы для наших запросов, в качестве БД будем использовать простой массив с данными прямо в файле **.ts** для быстроты (вы например можете подключить любую БД и уже с ней взаимодействовать).

Заходим в папку **resolvers** и создаем файл с названием **index.ts** и две папки **Books** и **Users**, далее в этих папках создаем соответствующий файл.

```bash
cd ./resolvers

touch index.ts
mkdir Books
mkdir Users

cd ./Books
touch Books.ts
cd ..

cd ./Users
touch Users.ts
cd ..
```

Наконец прописываем обработчики:

Файл **Books.ts**:

```ts
// ./graphql/resolvers/Books/Books.ts

import { IResolvers } from "graphql-tools"

interface BookType {
  id: string;
  title: string;
}

const books = [
  { id: "1", title: "First Book" },
  { id: "2", title: "Second Book" },
]

const booksResolver: IResolvers = {
  Query: {
    books: (): BookType[] => books,
  },
}

export default booksResolver
```

Файл **Users.ts**:

```ts
// ./graphql/resolvers/Users/Users.ts

import { IResolvers } from "graphql-tools"

interface UserType {
  id: string;
  name: string;
}

const users = [
  { id: "1", name: "John" },
  { id: "2", name: "Ivan" },
]

const usersResolver: IResolvers = {
  Query: {
    users: (): UserType[] => users,
  },
}

export default usersResolver
```

Резолверы получились довольно простые и понятные, теперь нужно собрать их в один массив для дальнейшего экспорта. В файле **index.ts** прописываем следующее:

```ts
// ./graphql/resolvers/index.ts

import { IResolvers } from "graphql-tools"

import booksResolver from "./Books/Books"
import usersResolver from "./Users/Users"

const resolvers: IResolvers[] = [usersResolver, booksResolver]

export default resolvers
```

## Создание схемы

Как говорилось ранее, пакет **graphql-tools** предназначен для создания схемы. Теперь перейдем в наш файл **schema.ts** и соберем нашу схему.

Раньше для того чтобы работали наши graphql импорты мы применяли пакет **graphql-import**, но теперь его не нужно устанавливать так как он уже входит в состав **graphql-tools**. Подробнее об этом можно прочитать [здесь](https://www.graphql-tools.com/docs/migration-from-import).
С помощью функций **loadSchemaSync**, **loadFilesSync**, и **addResolversToSchema** мы собираем нашу схему. Функция **mergeResolvers** предназначена для объединения наших резолверов. Подробнее о "**Resolvers merging**" [здесь](https://www.graphql-tools.com/docs/merge-resolvers/). Далее всё что нам остается сделать - это экспортировать нашу схему и написать сервер.

```ts
// ./graphql/schema.ts

import {
  mergeResolvers,
  loadSchemaSync,
  loadFilesSync,
  GraphQLFileLoader,
  addResolversToSchema,
} from "graphql-tools"
import { GraphQLSchema } from "graphql"

const schema = loadSchemaSync(`${__dirname}/typeDefs/schema.graphql`, {
  loaders: [new GraphQLFileLoader()],
})

const resolvers = loadFilesSync(`${__dirname}/resolvers`)
const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
  schema,
  resolvers: mergeResolvers(resolvers),
})

export default schemaWithResolvers
```

## Использование Apollo Server Express

Создаем в корне проекта файл с названием **index.ts**.

```bash
touch index.ts
```

Импортируем все необходимые пакеты и напишем функцию **startServer**, которая будет запускать наш сервер. Сделаем это согласно документации к пакету [apollo-server-express](https://www.npmjs.com/package/apollo-server-express).

```ts
// ./index.ts

import express, { Application, Request, Response } from "express"
import cors from "cors"
import depthLimit from "graphql-depth-limit"
import { ApolloServer } from "apollo-server-express"
import schema from "./graphql/schema"

const PORT = process.env.PORT || 4000

const startServer = (): void => {
  try {
    const app: Application = express()

    const server: ApolloServer = new ApolloServer({
      schema,
      validationRules: [depthLimit(10)], // выставляем правило deph limit = 10
      playground: true,
    })

    app.use("*", cors())
    app.get("/", (req: Request, res: Response) => res.send("GraphQL API"))

    server.applyMiddleware({ app })

    app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready on port: ${PORT}`)
    )
  } catch (err) {
    console.log(`❌  Something went wrong: \n ${err}`)
  }
}

startServer()
```

Как видим, ничего сложного нет, просто применяем функцию [applyMiddleware](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#applymiddleware) для того чтобы соедениеть Apollo Server с фрэймворком Express.js. Далее можно протестировать наш сервер, запускаем команду **npm run start** и переходим по адресу **/graphql**. Для тестирования можно выполнить вот такой запрос:

```text
{
  books {
    id
    title
  }
  users {
    id
    name
  }
}
```

Ответ мы получаем в таком виде:

```text
{
  "data": {
    "books": [
      {
        "id": "1",
        "title": "First Book"
      },
      {
        "id": "2",
        "title": "Second Book"
      }
    ],
    "users": [
      {
        "id": "1",
        "name": "John"
      },
      {
        "id": "2",
        "name": "Ivan"
      }
    ]
  }
}
```

## Заключение

Как видим, использование Apollo Server вместе с TypeScript оказалась совсем не сложной задачей, так как и Apollo Server и пакет graphql-import имеют поддержку typescript из коробки.
