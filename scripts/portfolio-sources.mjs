/**
 * Fontes de dados do portfolio.
 *
 * Para adicionar ou remover um owner, edite apenas esta lista.
 * O sincronizador (`fetch-github-projects.mjs`) não conhece nenhum owner fixo.
 *
 * - `owner`: login do usuario ou organizacao no GitHub.
 * - `enabled`: `false` ignora o owner sem remover a entrada.
 * - `includeForks`: forks entram ou nao na varredura de `portfolio.json`.
 *
 * Repositorios privados so entram na varredura quando `GITHUB_TOKEN` esta
 * definido e tem acesso a eles. O `portfolio.json` continua sendo o opt-in:
 * nenhum repositorio entra no portfolio sem ele.
 */
export const SOURCES = [
  {
    owner: 'vihisantos',
    enabled: true,
    includeForks: false,
  },
  {
    owner: 'Capybara-Holding-S-A',
    enabled: true,
    includeForks: false,
  },
];