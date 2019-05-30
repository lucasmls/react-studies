import styled from 'styled-components'

import { Form, Input } from '@rocketseat/unform'

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledInput = styled(Input)`
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  display: block;
  margin: 5px 0;
  border-radius: 3px;
`

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #ffc700;
  color: #fff;
  cursor: pointer;
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    background: #937300;
  }
`
