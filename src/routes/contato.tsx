import { createFileRoute } from '@tanstack/react-router';
import { Studio } from '@/components/studio/studio';
import { studioHead } from '@/components/studio/content';
export const Route = createFileRoute('/contato')({ head: () => studioHead('Vamos criar sua próxima ideia','Converse sobre direção criativa, marketing e conteúdo para sua marca com a Maciell Studio.'), component: Page });
function Page(){return <Studio section="contato"/>;}
