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
  position: relative;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-700']};

    position: absolute;
    top: -8px;
    right: -8px;
  }

  &:hover {
    opacity: 0.8;
  }
`
