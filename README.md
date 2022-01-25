# Step By Step Tutorial

```javascript
yarn init
yarn add -D @types/node typescript
```

Mở file package.json thêm vào:

```javascript
"scripts": {
    "start": "ts-node src/index.ts"
}
```

```javascript
yarn add -D ts-node
```

```javascript
npx tsconfig.json
```

Sửa lại

```javascript
"scripts": {
    "start-ts": "ts-node src/index.ts",
    "watch": "tsc -w"
}
```

```javascript
yarn add -D nodemon
```

sửa lại
```javascript
"scripts": {
    "start": "node dist/index.js",
    "server": "nodemon dist/index.js",
    "start-ts": "ts-node src/index.ts",
    "server-ts": "nodemon --exec ts-node src/index.ts",
    "watch": "tsc -w"
}
```

Chỉ cần run:
`yarn watch` and `yarn server`


Cài PostgreSQL
```
yarn add pg
```

Cài tiếp
```javascript
yarn add express graphql apollo-server-express type-graphql class-validator reflect-metadata  
```

```javascript
yarn add -D @types/express
```

Tiếp tục cài:
```javascript
yarn add typeorm
```

sau khi thêm apollo server nếu gặp lỗi version 2 thì cài thêm
```javascript
yarn add apollo-server-core
```

Sau khi connect và tạo graphql xong thì vào trang localhost:4000/graphql

Tiếp tục tạo resolver user đăng ký
Cài thư viện mã hóa pass
```javascript
yarn add argon2
```