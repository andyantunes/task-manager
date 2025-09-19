# 🏷️ Sprint 1 – Gestão de Tarefas (Trello/Asana)

📅 Duração sugerida: 2 semanas  
🎯 Objetivo: Construir um quadro Kanban funcional com tarefas básicas, consolidando fundamentos do Angular.

---

## 📌 Backlog da Sprint

### 1. Setup do Projeto Angular

- [x] Criar workspace Angular (`ng new task-manager`).
- [ ] Adicionar Tailwind CSS e Zard UI.
- [ ] Configurar roteamento inicial (`/login`, `/board`, `/report`).
- [ ] Criar estrutura de pastas organizada (`core`, `shared`, `features`).

---

### 2. Autenticação Simples

- [ ] Criar página de **Login** com Reactive Form (campos: email e senha).
- [ ] Implementar validações de formulário (obrigatório + formato de email).
- [ ] Simular autenticação fake (armazenar usuário em `localStorage`).
- [ ] Redirecionar usuário logado para `/board`.

---

### 3. Módulo de Board

- [ ] Criar layout do quadro com **3 colunas**: _To Do_, _Doing_, _Done_.
- [ ] Renderizar tarefas usando `*ngFor`.
- [ ] Criar modelo de tarefa (`Task` interface com id, título, descrição, status).
- [ ] Adicionar estilos básicos (Angular Material + SCSS).

---

### 4. Criação e Edição de Tarefas

- [ ] Criar formulário reativo para adicionar tarefas.
- [ ] Validar campos obrigatórios (`título`, `status`).
- [ ] Permitir edição de uma tarefa existente.
- [ ] Atualizar a lista automaticamente após salvar/editar.

---

### 5. Drag-and-Drop

- [ ] Implementar movimentação de tarefas entre colunas com `CdkDragDrop`.
- [ ] Adicionar **animações** de feedback visual ao arrastar.
- [ ] Garantir persistência do novo status ao mover a tarefa.

---

### 6. Estado Local com Signals

- [ ] Criar `TaskStore` usando Angular **Signals**.
- [ ] Controlar lista de tarefas no estado local.
- [ ] Atualizar automaticamente o contador de tarefas por coluna.
- [ ] Reagir em tempo real a mudanças (ex: mover tarefa).

---

### 7. Relatório Básico

- [ ] Criar rota `/report`.
- [ ] Exibir **estatísticas** simples: quantidade de tarefas por status.
- [ ] Usar `@for` e `@if` no template para renderização.
- [ ] Preparar relatório para futura expansão (exportação PDF/Excel em sprints futuras).

---

## 📌 Board da Sprint

### To Do

- Setup do Projeto Angular
- Autenticação Simples
- Módulo de Board
- Criação e Edição de Tarefas
- Drag-and-Drop
- Estado Local com Signals
- Relatório Básico

### In Progress

_(vazio no início da sprint)_

### Done

_(vazio no início da sprint)_

---

## 📌 Critérios de Aceite

- Usuário consegue **fazer login** (mesmo fake) e acessar o board.
- Quadro exibe **3 colunas** com tarefas renderizadas dinamicamente.
- Usuário pode **criar, editar e mover tarefas** entre colunas.
- Mudanças refletem em **tempo real** no contador por coluna.
- Página de relatório mostra **estatísticas básicas**.

---

## 📌 Tecnologias & Práticas

- Angular 17+ (standalone components).
- Angular Material + TailwindCSS.
- Reactive Forms.
- Signals para estado local.
- Angular CDK DragDrop.
- Boas práticas de organização de pastas.
