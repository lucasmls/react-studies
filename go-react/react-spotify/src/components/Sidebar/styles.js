import styled from 'styled-components'
import { colors, metrics } from '../../styles'

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: ${colors.dark};
  color: ${colors.regular};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin-top: 0;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')}

      &:hover {
        color: ${colors.white};
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`

export const NewPlaylist = styled.button`
  background: ${colors.transparent};
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
  }

  img {
    margin-right: ${metrics.baseMargin};
  }
`
