import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  width: 100%;

  position: sticky;
  left: 0;
  right: 0;
  top: 0;

  display: flex;

  background: ${(props) => props.theme['base-200']};

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 18px;
  }

  ul {
    list-style: none;

    display: flex;
    gap: 12px;

    li {
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-inline: 8px;
      border-radius: 6px;
    }
  }
`

export const Location = styled.li`
  background: ${(props) => props.theme['purple-300']};

  display: flex;
  gap: 4px;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['purple-700']};
`

export const CheckoutCart = styled.li`
  background: ${(props) => props.theme['yellow-300']};
  transition: 0.1s;

  &:hover {
    opacity: 0.8;
  }
`
