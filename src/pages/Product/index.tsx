import { useParams } from 'react-router-dom'

import Hero from '../../containers/Hero'
import Section from '../../containers/Section'
import Gallery from '../../containers/Gallery'

import imgBanner from '../../images/fundo_hogwarts.png'
import imgGtaVi from '../../images/gta_vi.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero
        image={imgBanner}
        category="RPG"
        system="PS5"
        title="Hogwarts Legacy"
        priceNormal={290.9}
        priceDesc={190.9}
      />
      <Section background="black" title="Sobre o jogo">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="grey">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery defaultCover={imgGtaVi} title="Jogos teste" />
    </>
  )
}

export default Product
