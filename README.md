# Eletroposto BR by EnergyClub: protótipo navegável do app

Simulação visual do app, com 40 telas ligadas entre si. No computador, o app aparece dentro de uma moldura de celular, com a lista de telas ao lado. No celular, ocupa a tela inteira.

Não há login, pagamento, mapa ou dados reais. Valores entre colchetes, como `[150] kW`, são provisórios.

## Como publicar no GitHub Pages

1. Entre em [github.com](https://github.com) (a conta é gratuita) e clique em **New repository**.
2. Dê um nome ao repositório, por exemplo `eletroposto-br-prototipo`, marque **Public** e clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** (ou em **Add file** e depois **Upload files**).
4. Abra a pasta descompactada e arraste **o conteúdo dela** para a página: `index.html`, a pasta `app`, o arquivo `.nojekyll` e este `README.md`. Clique em **Commit changes**.
   - Se o `.nojekyll` não aparecer no seu computador, ele é um arquivo oculto. Sem ele o site funciona do mesmo jeito, então pode seguir sem.
5. Vá em **Settings**, depois **Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
6. Aguarde de 1 a 2 minutos e atualize a página. O endereço aparece no topo, neste formato:

   `https://SEU-USUARIO.github.io/eletroposto-br-prototipo/`

Quem abrir o endereço vê direto o protótipo, sem login e sem nenhuma barra extra.

## Como navegar

- Toque ou clique nos botões e links da tela, como em um app.
- No computador, **Voltar**, **Reiniciar** e a lista de telas ficam no painel ao lado. No celular, aparece só o app: recarregue a página para recomeçar.
- Link direto para uma tela: acrescente `#` e o nome do arquivo, sem `.dc.html`.
  Exemplos: `.../#estacao`, `.../#filtros`, `.../#conta-visitante`.
- Sem `#`, o protótipo começa pela abertura e segue sozinho para o mapa.

## Atenção

- O repositório precisa ser **público** para o Pages funcionar na conta gratuita. Isso deixa o código das telas visível para qualquer pessoa. Páginas de repositório privado exigem um plano pago do GitHub.
- Para atualizar o protótipo depois, envie os novos arquivos para o mesmo repositório. O endereço não muda.
- Para tirar o site do ar, apague o repositório ou desative o Pages em **Settings**, **Pages**.
