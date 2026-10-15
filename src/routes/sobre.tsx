import { createFileRoute } from '@tanstack/react-router';
import { Studio } from '@/components/studio/studio';
import { studioHead } from '@/components/studio/content';
export const Route = createFileRoute('/sobre')({ head: () => studioHead('Prazer, Maciell','Criatividade com intenção, atendimento próximo e estratégia personalizada. Conheça a Maciell Studio.'), component: Page });
function Page(){return <Studio section="sobre"/>;}
