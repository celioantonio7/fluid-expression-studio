import { createFileRoute } from '@tanstack/react-router';
import { Studio } from '@/components/studio/studio';
import { studioHead } from '@/components/studio/content';
export const Route = createFileRoute('/servicos')({ head: () => studioHead('Serviços criativos','Tráfego pago, Story Maker, direção criativa e gestão de conteúdo com estratégia e identidade.'), component: Page });
function Page(){return <Studio section="servicos"/>;}
