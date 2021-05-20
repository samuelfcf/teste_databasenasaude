# Projeto datascience na saúde
## Código Backend desenvolvido com NodeJS.
* Como inicializar a Aplicação
  * Pré Requisitos
  * Comando de inicialização
* Features
* Conhecimentos Gerais
  * Métodos HTTP
    * Get
    * Post
    * Put
    * Patch
    * Delete
  * Tipos de Parâmatros
    * Query Params
    * Route Params
    * Request body
### Como inicializar a Aplicação
Podemos inicializar a aplicação depois de ter os seguintes pré requisitos instalados na nossa máquina:
#### Pré Requisitos
- [DBeaver](https://dbeaver.io/download/)
- [Docker](https://www.docker.com/get-started)
- [Insomnia](https://insomnia.rest/download)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/downloads/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

Use o Insomnia ou o Postman, ambos servem para fazer testes com os métodos http. O insomnia serve apenas para sistemas de arquitetura x64.
#### Comandos de inicialização
Após a instalação dos pré requisitos a sequência de comandos para inicialização é:
* yarn (para instalação dos pacotes no node_modules)
* yarn dev (para liberar a porta para escutar novas atualizações)
### Features
- [x] Cadastro de novos usuários
- [x] Listagem dos usuários ja cadastrados
- [x] Conexão com o Banco de dados
- [x] Consulta ao Banco de dados
- [x] Gerando um token para autenticação
- [x] Tratamento de erros comuns
- [x] Deploy no Heroku
### Conhecimentos Gerais
#### Métodos HTTP
  Esses métodos serão usados para comunicação com o Frontend, existem outros, mas esses são os principais:
  ##### Get
  O método Get é utilizado quando queremos buscar informações. É ele quem faz as consultas no banco de dados e geralmente é ele que é o primeiro a ser executado quando entramos em uma nova página via navegador. Ele passa as informações via Cabeçalho, e por isso não é recomendado para inserções no banco de dados.
  ##### Post
  O método Post é o método de Inserção, usamos ele quando queremos criar uma informação no backend. Esse método passa os dados e informações via corpo da requisição. É a forma mais segura de passar senhas quando estamos criando um novo usuário.
  ##### Put
  O método Put é bastante utilizado para alterar dados já criados no backend. Também passa as informações via corpo da requisição.
  Utilizamos uma estrutura: /nomedarota/numerodoid para essas alterações.
  ##### Patch
  O método Patch também é utilizado para alterar dados já criados no backend, a diferença entre ele e o put é que o patch é utilizado para alterar algo específico e o put para alterar todos os dados. Também passa as informações via corpo da requisição.
  Utilizamos uma estrutura: /nomedarota/numerodoid para essas alterações.
  ##### Delete
  O método Delete como o nome já diz é utilizado para apagar dados criados no backend, geralmente utilizamos a estrutura /nomedarota/numerodoid para apagar algum dado.
  #### Tipos de Parâmetros
  Os parâmetros são aqueles dados passados via url (quando usado com o Método Get) ou body (com o método post).
  ##### Query Params
  Os Query Params são parâmetros passados via url no geral para Filtros e paginação. Sua estrutura fica:
  /nomedarota?query=filtro&outroquery=filtro
  ##### Route Params
  Os Route Params são parâmetros de identificação de recursos para atualizar a base de dados (Atualizar/Deletar). Também é passado via url e sua estrutura fica:
  /nomedarota/:id
  ##### Request body
  É o parâmetro que é utilizado na hora de criar ou atualizar a base de dados, juntamente com os métodos Post, Put ou Patch. É passado em formato json. Por padrão o Express não reconhece o Json, então adicionamos uma linha para essa leitura.

<h4 align="center">
	🚧  Node 🚀 Em construção...  🚧
</h4>
