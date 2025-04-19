import { useEffect, useState } from 'react'
import ProductsList from '../../containers/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gameRpg, setGameRpg] = useState<Game[]>([])
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameEsporte, setGameEsporte] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsporte(res))
  }, [])

  return (
    <>
      <ProductsList games={gameAcao} title="Ação" background="black" />
      <ProductsList games={gameEsporte} title="Esportes" background="gray" />
      <ProductsList games={gameLuta} title="Luta" background="black" />
      <ProductsList games={gameRpg} title="RPG" background="gray" />
      <ProductsList
        games={gameSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories

/**
 * Estados Unidos, 1990 dois namorados apaixonados por aventura e perigo começaram a fazer um caos na cidade de Vice City onde chegaram da America Latina para conquistar a tão sonhada vida americana, porém eles foram para o caminho diferente, começaram a querer ir em busca de cometer delitos para conseguir comprar carros e casas de luxo por todo o estado.
 * Estados Unidos, 1899. O fim da era do velho oeste começou. Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.
 * Quando um tratante inexperiente, um ladrão de bancos aposentado e um psicopata aterrorizante se envolvem com algumas das figuras mais assustadoras e problemáticas do submundo do crime, do governo dos EUA e da indústria do entretenimento, eles precisam realizar uma série de golpes ousados para sobreviver em uma cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro.
 * A série que levou as corridas em pistas fechadas para as ruas da cidade está de volta para elevar o patamar mais uma vez. Equipe sua máquina com as rodas, os acabamentos e as melhorias mais atuais. Enfrente a elite das corridas de rua acelerando pelo trânsito a mais de 400 km/h. Midnight Club: DUB Edition está de volta e mais acelerado do que nunca.
 * Há 5 anos, Carl Johnson fugiu das pressões da vida em Los Santos, San Andreas... uma cidade que se destruía com gangues, drogas e corrupção, onde estrelas de cinema e milionários fazem o melhor que podem para evitar traficantes e bandidos. É o começo dos anos 90. Carl volta para casa. A sua mãe foi assassinada, a sua família ruiu e seus amigos de infância estão todos indo em direção ao desastre.
 */
