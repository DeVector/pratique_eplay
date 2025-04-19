import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Game } from '../Home'
import Hero from '../../containers/Hero'
import Section from '../../containers/Section'
import Gallery from '../../containers/Gallery'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game?.description}</p>
      </Section>
      <Section title="Mais detalhes" background="grey">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game?.details.developer} <br />
          <b>Editora:</b> {game?.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game?.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        title={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
