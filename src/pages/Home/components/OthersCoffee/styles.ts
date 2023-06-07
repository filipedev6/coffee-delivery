import styled from 'styled-components'

export const OthersContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding-inline: 18px;
`

export const TitleOrthersCoffee = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-800']};

  margin-bottom: 54px;
`

export const OthersContent = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`
