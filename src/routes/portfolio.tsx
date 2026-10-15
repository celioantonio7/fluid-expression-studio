import { createFileRoute } from '@tanstack/react-router';
import { Studio } from '@/components/studio/studio';
import { studioHead } from '@/components/studio/content';
export const Route = createFileRoute('/portfolio')({ head: () => studioHead('Portfólio criativo','Seleção visual de identidades, sites, conteúdo e campanhas da Maciell Studio.'), component: Page });
function Page(){return <Studio section="portfolio"/>;}
