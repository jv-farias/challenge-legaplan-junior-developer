# Projeto ToDoList - Desafio Técnico

Bem-vindo ao repositório do projeto **ToDoList**! Este projeto foi desenvolvido como parte do e foi implementado com algumas das mais recentes tecnologias do ecossistema JavaScript e ferramentas voltadas para a criação de interfaces interativas e bem documentadas.

## Links Importantes
 
- [Deploy do Projeto](https://todolist-legplan-challenge.vercel.app)
- [Deploy do Storybook](https://66ecd0d8af1276de68bc6568-sdmlrygezx.chromatic.com/)
- [Visite meu portfólio](https://bento.me/jvfarias)
- [Conecte-se comigo no LinkedIn](https://discord.gg/storybook)

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e ferramentas:

- **Next.js** com **App Router**: Para construir uma aplicação moderna de alto desempenho, aproveitando a renderização no servidor e as funcionalidades mais recentes do framework.
- **SCSS (Sass)**: Utilizado para estilização modular, facilitando a organização dos estilos e o reuso de componentes de interface.
- **React**: Biblioteca principal para construção de interfaces e gerenciamento de estado de componentes.
- **TypeScript**: Linguagem de tipagem estática para aumentar a segurança e previsibilidade do código.
- **Storybook**: Ferramenta usada para documentar e testar visualmente os componentes de UI de forma isolada, facilitando a colaboração e a manutenção da consistência no desenvolvimento.
- **Jest e Vitest**: Ferramentas de testes unitários utilizadas para garantir a qualidade do código e prevenir a introdução de bugs.
- **Husky**: Hooks de commit foram configurados para garantir boas práticas no fluxo de desenvolvimento, como a verificação de código e execução de testes antes dos commits.

## Funcionalidades Principais do Projeto

Este ToDoList é uma aplicação simples e funcional, onde o usuário pode adicionar, remover e gerenciar suas tarefas de forma eficiente. As principais funcionalidades incluem:

1. **Adicionar Tarefas**: O usuário pode adicionar novas tarefas através de um modal interativo.
2. **Excluir Tarefas**: O usuário pode remover tarefas da lista, confirmando a exclusão via modal.
3. **Listagem de Tarefas**: As tarefas são organizadas em duas categorias — pendentes e concluídas — facilitando a visualização do progresso.

## Documentação de Componentes com Storybook

Os componentes desta aplicação estão documentados utilizando o **Storybook**. Ele permite que os componentes sejam desenvolvidos de forma isolada, possibilitando a visualização e teste dos mesmos sem depender do restante da aplicação. Isso facilita a identificação de problemas e a colaboração com outros desenvolvedores.

Para visualizar a documentação dos componentes:

```bash
npm run storybook
```

## Testes Unitários com Jest e Vitest

Os testes unitários foram implementados utilizando **Jest** e **Vitest** para garantir a robustez e qualidade do código. Eles ajudam a prevenir regressões e garantir que os componentes se comportem conforme o esperado.

Para rodar os testes:

```bash
npm run test
```

## Hooks de Commit com Husky

O **Husky** foi configurado para garantir boas práticas de desenvolvimento. Antes de cada commit, são executados scripts que rodam verificações automáticas como linting e testes, assegurando a integridade do código.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/jv-farias/challenge-legaplan-junior-developer
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000` para ver o projeto em execução.


## Contribuições

Se você quiser contribuir com melhorias ou encontrar algum problema, fique à vontade para abrir uma **issue** ou enviar um **pull request**. Toda contribuição é bem-vinda!

---

Se você gostou do projeto, não esqueça de dar uma estrela 🌟 no GitHub!