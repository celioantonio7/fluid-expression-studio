# Fluid Expression Studio

MACIELL STUDIO — Animações, Interatividade e Experiência Premium

Você é um especialista sênior em Creative Development, Motion Design, UI/UX e desenvolvimento de experiências web interativas.

Estou desenvolvendo o site da Maciell Studio, uma profissional de marketing criativo, direção criativa, tráfego pago e produção de conteúdo.

Já tenho as referências visuais e telas definidas. Sua tarefa é implementar e animar essas telas, criando uma experiência moderna, fluida, responsiva e visualmente marcante.

1. REGRA PRINCIPAL: PRESERVAR O DESIGN

Utilize os PNGs fornecidos como referência visual.

Preserve a identidade da Maciell Studio, especialmente seu logotipo original.

Mantenha as cores creme, rosa, oliva, amarelo suave e marrom.

Mantenha a tipografia expressiva e os elementos editoriais.

Preserve a composição assimétrica, os adesivos, cards, rabiscos, formas orgânicas e elementos flutuantes.

Não transforme cada PNG em uma imagem de fundo: reconstrua a interface utilizando componentes reais.

Não altere a estrutura das seções sem necessidade.

Cada seção precisa ter personalidade própria.

O site deve ter identidade visual consistente, mas movimentos e composições diferentes entre as seções.

2. TECNOLOGIAS RECOMENDADAS

Utilize:

React + TypeScript

Tailwind CSS

Motion for React (Framer Motion)

GSAP + ScrollTrigger para sequências mais elaboradas

Lenis para scroll suave, se compatível

Lucide Icons

CSS animations e transforms para microinterações simples

Evite adicionar bibliotecas desnecessárias.

Utilize transform e opacity como propriedades prioritárias para animações eficientes.

3. MENU SUPERIOR

O menu deve ser consistente em todas as páginas.

Características:

Navbar arredondada e flutuante.

Efeito glassmorphism discreto.

Leve transparência e backdrop blur.

Menu sticky durante a rolagem.

Transição suave ao mudar de seção.

Indicador animado abaixo do item ativo.

Hover suave nos links.

Botão "Quero meu projeto" com efeito magnético discreto.

Ao rolar a página, o menu deve reduzir suavemente sua altura e espaçamento, sem prejudicar a legibilidade.

A seção ativa deve ser detectada automaticamente.

4. HERO — ENTRADA CINEMATOGRÁFICA

Ao carregar a página, executar uma sequência de animações coordenadas:

O logotipo aparece suavemente.

O menu entra com leve deslocamento vertical.

O título principal surge por linhas, com stagger.

As palavras destacadas aparecem com movimento e máscara de revelação.

A fotografia da Maciell entra suavemente pela lateral, com escala de 0.96 até 1.

Os elementos decorativos aparecem em sequência.

Os botões entram por último.

A fotografia deve ter um efeito parallax muito discreto durante o movimento do mouse, limitado a poucos pixels.

Os elementos flutuantes, como corações, bilhetes, estrelas e ícones sociais, devem possuir animações independentes e lentas.

Nunca movimentar tudo ao mesmo tempo.

5. SERVIÇOS — CARDS INTERATIVOS

Criar uma entrada diferente da Hero.

Título revelado ao entrar no viewport.

Cards aparecem com stagger de 80 a 120 ms.

Ao passar o mouse, o card sobe entre 4 e 6 pixels.

Ícone reage com uma pequena rotação ou escala.

Fundo do card sofre uma transição sutil.

Botão com seta responde ao hover.

Ao clicar, o card pode abrir detalhes do serviço em modal ou navegar para sua área específica.

Evite flip cards e movimentos exagerados.

Em dispositivos com toque, garantir que todas as ações funcionem sem hover.

6. PORTFÓLIO — GALERIA DINÂMICA

Esta deve ser uma das seções mais interessantes do site.

Criar uma galeria editorial assimétrica com imagens de projetos.

Interações:

Imagens surgem com efeito de revelação por máscara durante o scroll.

Cada projeto aparece em uma sequência escalonada.

Hover provoca zoom leve na imagem, limitado a 1.04.

Títulos e categorias surgem com transição suave.

A seta do card desliza discretamente.

Filtros por categoria devem funcionar.

Ao trocar de categoria, usar animações de layout para reorganizar os projetos.

Ao clicar em um projeto, abrir um case detalhado com transição visual suave.

Os projetos devem permanecer como protagonistas.

Não colocar a fotografia da Maciell em todos os cards.

7. SOBRE — ANIMAÇÃO EDITORIAL

Criar uma seção mais humana e elegante.

Fotografia entrando pela esquerda com máscara arredondada.

Texto surgindo linha por linha.

Pequenos cartões de valores aparecendo em sequência.

Formas orgânicas se movimentando lentamente ao fundo.

Pequenas anotações manuscritas sendo reveladas, simulando um traço desenhado.

Evitar repetir a animação da Hero.

8. DEPOIMENTOS — INTERAÇÕES ELEGANTES

Cards com entrada suave.

Hover com elevação mínima e sombras delicadas.

Avaliações e ícones aparecem com um pequeno stagger.

Permitir navegação entre depoimentos no mobile.

Evitar carrossel automático rápido.

Preservar leitura e acessibilidade.

Utilizar apenas depoimentos reais e autorizados. Não inventar nomes, avaliações, resultados ou estatísticas.

9. CONTATO — EXPERIÊNCIA INTERATIVA

Criar animações focadas em conversão.

Formulário aparece com uma revelação suave.

Inputs apresentam estado de foco animado.

Botões respondem ao clique com feedback visual.

Erros de validação aparecem sem deslocamentos bruscos.

Ações de envio possuem estados de carregamento, sucesso e erro.

Ícones de WhatsApp, Instagram e e-mail apresentam hover discreto.

Não simular o envio de mensagens. Integrar as ações reais aos destinos configurados.

10. ELEMENTOS DECORATIVOS ANIMADOS

Os elementos característicos do design devem ganhar vida:

Estrelas e flores abstratas

Rotação muito lenta, apenas em alguns elementos.

Movimento orgânico e discreto.

Corações

Leve flutuação vertical.

Escala respirando suavemente.

Bilhetes e adesivos

Rotação de aproximadamente 1 a 2 graus.

Pequena movimentação vertical.

Reação sutil ao cursor.

Rabiscos e setas

Revelação progressiva usando SVG path animations quando possível.

Formas orgânicas

Parallax limitado.

Movimento independente em diferentes profundidades.

Não utilizar efeitos constantes em todos os elementos. O movimento deve criar hierarquia visual, não distração.

11. TRANSIÇÕES ENTRE SEÇÕES

Cada seção precisa ter sua própria experiência de entrada.

Não repetir o mesmo fade-up em todo o site.

Utilizar, conforme a composição:

Staggered reveal

Mask reveal

Text reveal

Image reveal

Parallax sutil

Animação de escala

Movimentação horizontal controlada

Transições de layout

Evitar animações que causem saltos ou mudanças inesperadas no scroll.

O usuário deve perceber claramente a mudança entre Hero, Serviços, Portfólio, Sobre, Depoimentos e Contato.

12. RESPONSIVIDADE E PERFORMANCE

O site deve funcionar perfeitamente em desktop, tablet e mobile.

No mobile, reduzir a quantidade de elementos decorativos animados.

Evitar parallax dependente de mouse em dispositivos touch.

Não criar scroll horizontal acidental.

Priorizar 60 FPS quando possível.

Otimizar imagens em WebP/AVIF.

Aplicar lazy loading nos recursos abaixo da dobra.

Evitar layout shift.

Usar prefers-reduced-motion para respeitar usuários que preferem menos movimento.

Garantir navegação por teclado e estados de foco visíveis.

Não utilizar scroll hijacking.

Não bloquear o conteúdo enquanto as animações carregam.

13. PARÂMETROS DE MOVIMENTO

Utilize inicialmente:

Entrada de textos: 0.5–0.8 segundos.

Entrada de cards: 0.4–0.65 segundos.

Stagger: 0.08–0.12 segundos.

Hover: 0.2–0.3 segundos.

Movimento flutuante: ciclos de 5–9 segundos.

Parallax: deslocamentos discretos.

Easing suave como cubic-bezier(0.22, 1, 0.36, 1).

Evitar movimentos bruscos, overshoot excessivo e animações intermináveis em elementos de conteúdo.

14. RESULTADO ESPERADO

Quero uma experiência de alto nível, inspirada em portfólios de estúdios criativos, sites editoriais interativos e projetos de referência do Awwwards.

A experiência deve transmitir:

Criatividade

Personalidade

Profissionalismo

Estratégia

Autenticidade

Sofisticação

Não quero um site que pareça um template animado. Quero que cada movimento tenha um propósito.

Implemente as animações diretamente nos componentes, preserve o design original e teste toda a experiência em desktop e mobile.1. Kinetic Typography

Os títulos ganham movimento palavra por palavra. Ideal para a Hero e os títulos grandes de cada seção.

2. Floating Elements + Parallax

Os adesivos, corações e rabiscos se movem suavemente em velocidades diferentes, criando profundidade sem deixar tudo agitado.

3. Scroll-Triggered Reveal

Cada seção se revela de um jeito: serviços em sequência, portfólio por máscaras e Sobre com entrada editorial.

Um cuidado: os PNGs são referências de layout, não componentes editáveis. O Lovable precisa reconstruir textos, fotos, cards e elementos decorativos separadamente para animá-los de verdade.

Também é importante substituir as métricas e os depoimentos fictícios dos mockups por dados confirmados antes de publicar.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/173551d8-b05c-4e0a-b9db-9cbb728409f9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
