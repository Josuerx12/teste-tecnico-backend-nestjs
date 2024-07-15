# Teste Técnico

Este repositório contém o código para o projeto de teste tecnico backend nestjs.

## Instruções de Instalação e Execução

1. **Clonar o repositório:**
   git clone https://github.com/Josuerx12/teste-tecnico-backend-nestjs.git
   cd teste-tecnico-backend-nestjs

# Configurar variáveis de ambiente:

1.  Renomeie o arquivo .env.example para .env.
2.  Preencha as variáveis de ambiente necessárias no arquivo .env conforme descrito na documentação.

# Subir o servidor com Docker Compose:

Execute no console antes de rodar o servidor: _docker-compose up_

- Isso iniciará o servidor com o Prisma SQL configurado conforme especificações do projeto.

## Rotas Disponíveis

# Autenticação

# POST /auth/register

- Endpoint para registrar um novo usuário.
- Parâmetros (JSON): nome, email, password, confirmPassword.
- Exemplo de uso:
  {
  "name": "Nome do Usuário",
  "email": "usuario@example.com",
  "password": "senha123",
  "confirmPassword": "senha123"
  }

# POST /auth/login

- Endpoint para autenticar um usuário e gerar um JWT.
- Parâmetros (JSON): email, password.
- Exemplo de uso:
  {
  "email": "usuario@example.com",
  "password": "senha123"
  }

# O JWT gerado deve ser utilizado nos headers das próximas requisições no formato Bearer Token.

Gerenciamento de Locais

# GET /locale/

### Endpoint para listar locais.

1. Para filtrar por nome, inclua o parâmetro name na query string.
2. Exemplo de uso: /locale?name=nome-do-local.
3. Retorna a lista de locais baseados no nome informado; se nenhum nome for informado, retorna todos os locais.

# GET /locale/

### Endpoint para obter detalhes de um local específico por ID.

1. Retorna as informações de um local específico com base no ID fornecido.
2. Exemplo de uso: /locale/123.

# POST /locale/

### Endpoint para criar um local específico.

2. Parâmetros (JSON): para criação.
   {
   "name": "Seu João - Restaurante",
   "city": "Campos dos Goytacazes",
   "state": "RJ",
   }
3. Retorna o local criado.

# PATCH /locale/

### Endpoint para editar um local específico.

1. Somente é permitido se o local foi criado pelo usuário autenticado.
2. Exemplo de uso: /locale/123.
3. Parâmetros (JSON): Campos a serem atualizados.
   {
   "name": "Seu João - Restaurante",
   "city": "Campos dos Goytacazes",
   "state": "RJ",
   }
4. Retorna o local atualizado.

# DELETE /locale/

### Endpoint para deletar um local específico.

### Somente é permitido se o local foi criado pelo usuário autenticado.

1. Exemplo de uso: /locale/123.
2. Retorna uma mensagem de sucesso após a exclusão.

# _Observações_

1. Certifique-se de que o ambiente Docker esteja configurado corretamente para executar o servidor com o Prisma SQL.
2. Utilize o JWT gerado durante o login nos headers das requisições subsequentes que exigem autenticação.
