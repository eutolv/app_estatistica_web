# App Estatística Web

## Descrição
Este projeto é um aplicativo web desenvolvido com Ruby on Rails e React, projetado para realizar cálculos estatísticos. As funcionalidades atuais incluem cálculos de média, moda, mediana e variância. Futuramente, serão adicionadas distribuições estatísticas (Normal, Exponencial, Binomial, Uniforme, Poisson), além de regressão linear e agrupamento de dados.

## Funcionalidades
- **Cálculos Estatísticos**:
  - Média
  - Moda
  - Mediana
  - Variância
- **A ser implementado**:
  - Distribuições Estatísticas:
    - Normal, Exponencial, Binomial, Uniforme, Poisson
  - Regressão Linear: Cálculo da equação de regressão linear e coeficiente de determinação (R²)
  - Agrupamento de Dados:
    - Em classes
    - Discreto

## Tecnologias Utilizadas
- **Backend**: Ruby on Rails
- **Frontend**: React

## Linguagens
As linguagens utilizadas no projeto são distribuídas da seguinte forma:
- Ruby: 49.8%
- HTML: 35.6%
- JavaScript: 6.3%
- Dockerfile: 4.2%
- CSS: 3.7%
- Shell: 0.4%

## Pré-requisitos
Antes de rodar o projeto, certifique-se de ter o seguinte instalado:
- Ruby
- Rails
- Node.js
- npm/yarn

## Como Rodar
1. Clone o repositório:
   ```bash
   git clone https://github.com/eutolv/app_estatistica_web.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd app_estatistica_web
   ```
3. Instale as dependências do backend:
   ```bash
   bundle install
   ```
4. Instale as dependências do frontend:
   ```bash
   npm install
   ```
5. Execute o servidor Rails:
   ```bash
   rails server
   ```
6. Abra o navegador e acesse: `http://localhost:3000`

## Contribuição
1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature: `git checkout -b feature/nome-da-feature`.
3. Commit suas alterações: `git commit -am 'Adiciona nova funcionalidade'`.
4. Envie para o repositório remoto: `git push origin feature/nome-da-feature`.
5. Crie um pull request.
