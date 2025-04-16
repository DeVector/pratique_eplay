import ProductsList from '../../containers/ProductsList'

import Game from '../../models/Game'

import REDII from '../../images/RED_2.png'
import gta from '../../images/gta_v.png'
import midnight from '../../images/midnight_club.png'
import gtasan from '../../images/gta_san.png'

import gtavi from '../../images/gta_vi.png'
import diablo from '../../images/diablo.png'
import star from '../../images/star_wars.png'
import zelda from '../../images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Red Dead Redption II',
    category: 'Ação',
    system: 'Windows | PS5 | Xbox',
    description:
      'Estados Unidos, 1899. O fim da era do velho oeste começou. Depois de tudo dar...',
    infos: ['-10%', 'R$ 199'],
    image: REDII
  },
  {
    id: 2,
    title: 'Grand Theft Auto V',
    category: 'Ação',
    system: 'Windows | PS5 | Xbox',
    description:
      'Quando um tratante inexperiente, um ladrão de bancos aposentado e um psicopata aterrorizante...',
    infos: ['-10%', 'R$ 99'],
    image: gta
  },
  {
    id: 3,
    title: 'MidNight Club 3',
    category: 'Corrida',
    system: 'Windows',
    description:
      'A série que levou as corridas em pistas fechadas para as ruas da cidade está de volta...',
    infos: ['-10%', 'R$ 49'],
    image: midnight
  },
  {
    id: 4,
    title: 'Grand Theft Auto San Andreas',
    category: 'Ação',
    system: 'Windows',
    description:
      'Há 5 anos, Carl Johnson fugiu das pressões da vida em Los Santos, San Andreas...',
    infos: ['-10%', 'R$ 79'],
    image: gtasan
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Grand Theft Auto VI',
    category: 'Ação',
    system: 'PS5',
    description:
      'Estados Unidos, 1990 dois namorados apaixonados por aventura e perigo começaram...',
    infos: ['03/10'],
    image: gtavi
  },
  {
    id: 6,
    title: 'Diablo',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['05/05'],
    image: diablo
  },
  {
    id: 7,
    title: 'Star Wars',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['10/06'],
    image: star
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Nitendo',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['25/05'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories

/**
 * Estados Unidos, 1990 dois namorados apaixonados por aventura e perigo começaram a fazer um caos na cidade de Vice City onde chegaram da America Latina para conquistar a tão sonhada vida americana, porém eles foram para o caminho diferente, começaram a querer ir em busca de cometer delitos para conseguir comprar carros e casas de luxo por todo o estado.
 * Estados Unidos, 1899. O fim da era do velho oeste começou. Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.
 * Quando um tratante inexperiente, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com algumas das figuras mais assustadoras e problemáticas do submundo do crime, do governo dos EUA e da indústria do entretenimento, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.
 * A série que levou as corridas em pistas fechadas para as ruas da cidade está de volta para elevar o patamar mais uma vez. Equipe sua máquina com as rodas, os acabamentos e as melhorias mais atuais. Enfrente a elite das corridas de rua acelerando pelo trânsito a mais de 400 km/h. Midnight Club: DUB Edition está de volta e mais acelerado do que nunca.
 * Há 5 anos, Carl Johnson fugiu das pressões da vida em Los Santos, San Andreas... uma cidade que se destruía com gangues, drogas e corrupção, onde estrelas de cinema e milionários fazem o melhor que podem para evitar traficantes e bandidos. É o começo dos anos 90. Carl volta para casa. A sua mãe foi assassinada, a sua família ruiu e seus amigos de infância estão todos indo em direção ao desastre.
 */
