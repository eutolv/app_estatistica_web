# 💎 App Estatística Web

## Descrição
Este projeto é um aplicativo web desenvolvido com Ruby on Rails no backend e React no frontend, projetado para realizar cálculos estatísticos. As funcionalidades atuais incluem cálculos de média, moda, mediana e variância. Futuramente, serão adicionadas distribuições estatísticas (Normal, Exponencial, Binomial, Uniforme, Poisson), além de regressão linear e agrupamento de dados.

## Funcionalidades
- **Cálculos Estatísticos**:
  - Média 📊
  - Moda 📈
  - Mediana 📅
  - Variância 🔀
- **A ser implementado**:
  - Distribuições Estatísticas 📉:
    - Normal, Exponencial, Binomial, Uniforme, Poisson
  - Regressão Linear 📏: Cálculo da equação de regressão linear e coeficiente de determinação (R²)
  - Agrupamento de Dados:
    - Em classes 📂
    - Discreto 🔢

## Tecnologias Utilizadas
- **Backend**: Ruby on Rails 💎
- **Frontend**: React ⚛️

## Linguagens
As linguagens utilizadas no projeto são distribuídas da seguinte forma:
- Ruby 💎: 49.8%
- HTML 🌐: 35.6%
- JavaScript 📜: 6.3%
- Dockerfile 🐳: 4.2%
- CSS 🎨: 3.7%
- Shell 🖥️: 0.4%

## Pré-requisitos
Antes de rodar o projeto, certifique-se de ter o seguinte instalado:
- Ruby 💎
- Rails ⚒️
- Node.js 💻
- npm/yarn 📦

## Como Rodar o Projeto

### 1. Clonando o repositório
Clone o repositório para sua máquina local:
```bash
git clone https://github.com/eutolv/app_estatistica_web.git
```

### 2. Navegando até o diretório do projeto
Entre na pasta do projeto:
```bash
cd app_estatistica_web
```

### 3. Instalando as dependências do backend (Rails)
No diretório do projeto, instale as dependências do backend com o comando:
```bash
bundle install
```

### 4. Instalando as dependências do frontend (React)
Para instalar as dependências do frontend, execute o comando:
```bash
npm install
```

### 5. Executando o servidor Rails
Agora, execute o servidor Rails:
```bash
rails server
```

O servidor estará rodando em `http://localhost:3000`.

### 6. Abrindo no navegador
Abra o navegador e acesse o endereço:
```
http://localhost:3000
```

Caso o servidor esteja funcionando corretamente, você verá a página inicial do seu aplicativo.

### 7. Caso o aplicativo não esteja aparecendo corretamente:
Se a página inicial não estiver sendo exibida como esperado, siga esses passos:
- Verifique se a rota está configurada corretamente no arquivo `config/routes.rb`. A rota raiz deve apontar para o controlador `calculator`:
  ```ruby
  root 'calculator#index'
  ```
- Certifique-se de que o controlador `calculator_controller.rb` esteja presente em `app/controllers` com a seguinte ação:
  ```ruby
  class CalculatorController < ApplicationController
    def index
    end
  end
  ```
- Se o problema persistir, reinicie o servidor Rails com `Ctrl+C` e em seguida rode novamente:
  ```bash
  rails server
  ```

## Contribuição
1. Faça um fork do repositório 🍴.
2. Crie uma nova branch para sua feature: `git checkout -b feature/nome-da-feature`.
3. Commit suas alterações: `git commit -am 'Adiciona nova funcionalidade'`.
4. Envie para o repositório remoto: `git push origin feature/nome-da-feature`.
5. Crie um pull request 🤝.
