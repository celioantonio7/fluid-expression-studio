import { createFileRoute } from '@tanstack/react-router';
import { Studio } from '@/components/studio/studio';
import { studioHead } from '@/components/studio/content';
export const Route = createFileRoute('/depoimentos')({ head: () => studioHead('Conexões e confiança','Um espaço para histórias reais e relatos autorizados de clientes da Maciell Studio.'), component: Page });
function Page(){return <Studio section="depoimentos"/>;}
