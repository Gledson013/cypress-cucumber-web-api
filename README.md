# Cypress Cucumber Web API Automation

Este projeto foi desenvolvido como parte de um processo seletivo, utilizando as tecnologias Cypress, Cucumber e TypeScript para criar testes automatizados de aplicações web e API, seguindo a abordagem BDD (Behavior-Driven Development).

## Tecnologias Utilizadas
- **Cypress**: Framework para automação de testes de aplicações web.
- **Cucumber**: Ferramenta para testes BDD, utilizando a linguagem Gherkin.
- **TypeScript**: Linguagem com tipagem estática para maior confiabilidade no código.

## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:
- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)
- Um editor de texto, como **Visual Studio Code**

## Configuração do Ambiente
1. **Clone este repositório:**
   ```bash
   git clone https://github.com/seu-usuario/cypress-cucumber-web-api.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd cypress-cucumber-web-api
   ```

3. **Navegue até o diretório do projeto:**
   ```bash  
   npm install
   ```

## Execução dos Testes
Testes Interativos:
Para abrir a interface do Cypress e rodar os testes interativamente:
```bash  
   npx cypress open
   ```

## Testes no Terminal:
Para rodar os testes diretamente no terminal (modo headless):
```bash  
   npx cypress run
   ```

## Localização dos Arquivos de Teste:
Os arquivos .feature (cenários em Gherkin) estão localizados na pasta:
```bash  
   cypress/e2e/features/
   ```

## Estrutura do Projeto
A estrutura do projeto segue uma organização lógica para facilitar a navegação e o desenvolvimento:
```bash  
   cypress-cucumber-web-api/
├── cypress/
│   ├── e2e/                       # Pasta principal para os testes
│   │   ├── features/              # Cenários BDD em Gherkin
│   │   │   ├── login.feature
│   │   │   ├── search.feature
│   │   │   ├── cart.feature
│   │   │   └── payment.feature
│   │   ├── step_definitions/      # Definições dos passos
│   │   │   ├── login.js
│   │   │   ├── search.js
│   │   │   ├── cart.js
│   │   │   └── payment.js
│   ├── screenshots/               # Capturas de tela geradas automaticamente
│   ├── fixtures/                  # Dados estáticos para testes (ex.: JSON)
│   │   └── example.json
│   ├── support/                   # Arquivos de suporte para os testes
│   │   ├── commands.js            # Comandos customizados do Cypress
│   │   ├── e2e.js                 # Configurações globais (hooks Before/After)
├── node_modules/                  # Dependências do projeto (não versionar)
├── .gitignore                     # Ignorar node_modules e outros arquivos
├── cypress.config.js              # Configurações do Cypress
├── package.json                   # Configurações e dependências do projeto
├── package-lock.json              # Controle de versões das dependências
└── README.md                      # Instruções para instalar e executar os testes
   ```

## Capturas de Tela
Durante a execução dos testes, capturas de tela são geradas automaticamente nos momentos críticos definidos nos cenários. Essas capturas podem ser encontradas na pasta:
```bash  
   cypress/screenshots/
   ```

## Observação
Este projeto foi desenvolvido com foco em demonstrar as habilidades técnicas no uso de Cypress, Cucumber e TypeScript para automação de testes. As capturas de tela e logs de execução foram incluídos para melhorar a rastreabilidade e garantir a qualidade dos testes.

Autor: Gledson da Silva Sousa