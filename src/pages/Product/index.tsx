import { useParams } from 'react-router-dom'

import Hero from '../../containers/Hero'
import Section from '../../containers/Section'
import Gallery from '../../containers/Gallery'
import { useGetGameQuery } from '../../service/api'

const Product = () => {
  const { id } = useParams()

  const { data: game } = useGetGameQuery(id!)

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
