import ProductsList from '../../containers/ProductsList'
import {
  useGetActionGameQuery,
  useGetFigthGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery
} from '../../service/api'

const Categories = () => {
  const { data: actionGame } = useGetActionGameQuery()
  const { data: rpgGame } = useGetRpgGameQuery()
  const { data: figthGame } = useGetFigthGameQuery()
  const { data: simulationGame } = useGetSimulationGameQuery()
  const { data: sportGame } = useGetSportGameQuery()

  if (actionGame && rpgGame && figthGame && simulationGame && sportGame) {
    return (
      <>
        <ProductsList games={actionGame} title="Ação" background="black" />
        <ProductsList games={sportGame} title="Esportes" background="gray" />
        <ProductsList games={figthGame} title="Luta" background="black" />
        <ProductsList games={rpgGame} title="RPG" background="gray" />
        <ProductsList
          games={simulationGame}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
