module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities":[
    process.env.ENVIRONMENT_ENTITY // quando rodar o script 'dev:server' vai buscar as entidades na pasta 'src', quando em produção busca as antidades em 'dist'.
  ],
  "migrations": [
    process.env.ENVIRONMENT_MIGRATION //mesma lógica das entidades.
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entititiesDir": "./src/models"
  }
}

