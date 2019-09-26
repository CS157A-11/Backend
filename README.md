## Development

### Prerequisite

- node v12
- yarn

### Setup

```bash
yarn install
```

### Start Server

```bash
yarn run nodemon
```

### Auto Compiler

```bash
yarn run watch
```

### MySQL Connection Test

make sure you start MySQL server
You can test if MySQL is conneced by using database called "cs157a" which we made in hw1. We assume there is a table called "emp"

You have to create .env file in the root, and set `DB_NAME`, `DB_PASS`, and `DB_USER`

After running both server, access to http://localhost:3000/api/v1/test/test/
If you get json data, it is sucessfully connected.
