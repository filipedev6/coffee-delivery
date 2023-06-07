import styled from 'styled-components'

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['base-200']};

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 32px;

  border-radius: 6px;

  margin-bottom: 12px;
`

export const AddressHeader = styled.header`
  display: flex;
  gap: 8px;
`

export const ContentAddressHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }
`

export const ContentAddress = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  gap: 1rem 0.75rem;

  input {
    background: #eeeded;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    height: 42px;
    padding-inline: 12px;
    outline: 0;

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-600']};
  }

  input[name='cep'] {
    grid-row: 1;
    grid-column: 1 / 2;
  }

  input[name='rua'] {
    grid-row: 2;
    grid-column: 1 / 4;
  }

  input[name='numero'] {
    grid-row: 3;
    grid-column: 1 / 2;
  }

  input[name='complemento'] {
    grid-row: 3;
    grid-column: 2 / 4;
  }

  input[name='bairro'] {
    grid-row: 4;
    grid-column: 1 / 2;
  }

  input[name='cidade'] {
    grid-row: 4;
    grid-column: 2 / 3;
  }

  input[name='uf'] {
    grid-row: 4;
  }
`
