import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroContent = styled.div`
  display: flex;
  gap: 3.5rem;
  padding-inline: 18px;
`

export const HeroContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme['base-900']};

    margin-bottom: 16px;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;

    color: ${(props) => props.theme['base-800']};

    margin-bottom: 4.125rem;
  }
`

export const InfoContentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  li {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    display: flex;
    align-items: center;
    gap: 12px;

    color: ${(props) => props.theme['base-700']};
  }
`

export const DtIcon = styled.i`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  &.DtOrange {
    background: ${(props) => props.theme['yellow-700']};
  }

  &.DtGray {
    background: ${(props) => props.theme['base-700']};
  }

  &.DtYellow {
    background: ${(props) => props.theme['yellow-500']};
  }

  &.DtPurple {
    background: ${(props) => props.theme['purple-500']};
  }
`
