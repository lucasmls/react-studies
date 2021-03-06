import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`

export const Repository = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  header {
    position: relative;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 10px;
      cursor: pointer;
      color: #c3c3c3;

      &:hover {
        color: #ccc;
      }
    }

    .remove {
      right: 10px;
    }

    .update {
      left: 10px;
    }

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      &:nth-child(odd) {
        background: #f5f5f5;
      }

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
    }
  }
`
