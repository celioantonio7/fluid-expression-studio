import site from '@/assets/lume-site.webp.asset.json';
import brand from '@/assets/lume-brand.webp.asset.json';
import social from '@/assets/lume-social.webp.asset.json';
import campaign from '@/assets/lume-campaign.webp.asset.json';
import bela from '@/assets/bela-rio.webp.asset.json';
import burgo from '@/assets/burgo.webp.asset.json';
import cora from '@/assets/cora.webp.asset.json';
export const services = [
 { title: 'Tráfego Pago', category: 'rose', icon: 'chart', description: 'Campanhas que atraem o público certo e conectam sua marca a novas oportunidades.', details: ['Planejamento de campanhas', 'Segmentação de público', 'Criação e testes de anúncios', 'Acompanhamento e análise'] },
 { title: 'Story Maker & Reels', category: 'sun', icon: 'video', description: 'Vídeos estratégicos que conectam, engajam e fortalecem sua marca.', details: ['Roteiros e ideias de conteúdo', 'Produção de Stories e Reels', 'Edição dinâmica e criativa', 'Elementos visuais da sua marca'] },
 { title: 'Direção Criativa & Artes', category: 'sage', icon: 'light', description: 'Identidade visual e peças que comunicam com intenção e personalidade.', details: ['Conceito criativo e direção de arte', 'Identidade e posicionamento', 'Artes para redes sociais', 'Materiais para campanhas'] },
 { title: 'Gestão de Conteúdo', category: 'rose', icon: 'people', description: 'Planejamento e publicação para manter sua marca ativa e relevante.', details: ['Diagnóstico de comunicação', 'Planejamento editorial', 'Criação de artes e legendas', 'Acompanhamento de conteúdo'] },
];
export const projects = [
 { id: 'lume-site', title: 'Landing Page Estratégica', category: 'Sites', image: site.url, description: 'Uma composição digital que aproxima beleza, identidade e experiência. Hierarquia editorial e uma apresentação de produtos com personalidade.' },
 { id: 'lume-brand', title: 'Lume Beauty', category: 'Identidade Visual', image: brand.url, description: 'Tipografia elegante, cores naturais e aplicações de marca que constroem uma linguagem visual coerente.' },
 { id: 'burgo', title: 'Burgo Burger', category: 'Identidade Visual', image: burgo.url, description: 'Uma identidade de presença forte. Embalagens, tipografia e direção fotográfica em uma composição cheia de personalidade.' },
 { id: 'lume-social', title: 'Conteúdo para Instagram', category: 'Social Media', image: social.url, description: 'Uma linguagem visual pensada para o ritmo das redes: imagens de produto, composições editoriais e consistência de marca.' },
 { id: 'lume-campaign', title: 'Campanha de Lançamento', category: 'Campanhas', image: campaign.url, description: 'Uma proposta de campanha que coloca a identidade no centro da comunicação, com conceito visual e aplicações integradas.' },
 { id: 'bela', title: 'Bela Rio Cosméticos', category: 'Identidade Visual', image: bela.url, description: 'Uma composição delicada que conecta embalagens e elementos botânicos em uma identidade de beleza.' },
 { id: 'cora', title: 'Cora Cafés', category: 'Identidade Visual', image: cora.url, description: 'Elementos ilustrados e aplicações de embalagem reunidos em uma linguagem acolhedora e artesanal.' },
];
export const navigation = [{label:'Início',id:'inicio',path:'/'},{label:'Serviços',id:'servicos',path:'/servicos'},{label:'Portfólio',id:'portfolio',path:'/portfolio'},{label:'Sobre',id:'sobre',path:'/sobre'},{label:'Depoimentos',id:'depoimentos',path:'/depoimentos'},{label:'Contato',id:'contato',path:'/contato'}] as const;
export type SectionId = typeof navigation[number]['id'];
export function studioHead(title: string, description: string) { return { meta: [{title: `${title} — Maciell Studio`},{name:'description',content:description},{property:'og:title',content:`${title} — Maciell Studio`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] }; }
