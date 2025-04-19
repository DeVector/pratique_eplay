import { Container, Title } from './styles'

export type Props = {
  background: 'grey' | 'black'
  title: string
  children: JSX.Element
}

const Section = ({ background, title, children }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
