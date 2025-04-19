import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'
import Section from '../Section'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import gtaVI from '../../images/banner-homem-aranha.png'
import redII from '../../images/RED_2.png'
import zoom from '../../images/zoom.svg'
import play from '../../images/play.svg'
import btnClose from '../../images/btn_close.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: gtaVI
  },
  {
    type: 'image',
    url: redII
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/QdBZY2fkU-0?si=SwfoFLJ_RFujpZj2'
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/dFotVyjZoAM?si=hEF0b3wlZWXiTjIL'
  }
]

type Props = {
  defaultCover: string
  title: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, title, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${title}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <header>
            <h4>{title}</h4>
            <img
              src={btnClose}
              alt="Botão Fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt={`Midia de ${title}`} />
          ) : (
            <iframe src={modal.url} frameBorder="0"></iframe>
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
