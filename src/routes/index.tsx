import { createFileRoute } from '@tanstack/react-router';
import { Studio } from '@/components/studio/studio';
import { studioHead } from '@/components/studio/content';
export const Route = createFileRoute('/')({ head: () => studioHead('Marketing criativo com identidade','Estratégia, conteúdo e direção criativa para marcas reais. Conheça os serviços e a personalidade da Maciell Studio.'), component: Index });
function Index(){ return <Studio/>; }
