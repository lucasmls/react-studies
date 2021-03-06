import React, { Component, Fragment } from 'react'

import Header from '../components/Header'
import Post from '../components/Post'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio corrupti, odit illum, numquam aperiam, voluptate distinctio mollitia repellendus adipisci rem non ad velit fugiat? Totam eligendi assumenda unde magnam in quo rerum accusamus qui odio deleniti, hic obcaecati dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos odio corrupti, odit illum, numquam aperiam, voluptate distinctio mollitia repellendus adipisci rem non ad velit fugiat? Totam eligendi assumenda unde magnam in quo rerum accusamus qui odio deleniti, hic obcaecati dolores.dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio corrupti, odit illum, numquam aperiam, voluptate distinctio mollitia repellendus adipisci rem non ad velit fugiat? Totam eligendi assumenda unde magnam in quo rerum accusamus qui odio deleniti, hic obcaecati dolores',
        author: 'Gabriel Mendes',
        authorPhoto:
          'data:image/jpeg;base64,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',
        postTime: 'há 2 min'
      },
      {
        id: 2,
        content:
          'Acima de tudo, é fundamental ressaltar que a expansão dos mercados mundiais obstaculiza a apreciação da importância da gestão inovadora da qual fazemos parte.',
        author: 'Laisla Pinto Coelho',
        authorPhoto:
          'https://scontent.fplu9-2.fna.fbcdn.net/v/t1.0-9/39127317_1781722925198263_2153748201398599680_n.jpg?_nc_cat=109&_nc_ht=scontent.fplu9-2.fna&oh=054ab565fa6dcab2f06ca4bf6675cf40&oe=5D0C3A7F',
        postTime: 'há 25 min'
      },
      {
        id: 3,
        content:
          'Desta maneira, o surgimento do comércio virtual auxilia a preparação e a composição das diversas correntes de pensamento. É claro que o aumento do diálogo entre os diferentes setores produtivos faz parte de um processo de gerenciamento dos conhecimentos estratégicos para atingir a excelência.',
        author: 'Lucas Mendes',
        authorPhoto:
          'https://scontent.fplu9-1.fna.fbcdn.net/v/t1.0-9/21731242_930164543798769_608307991860988043_n.jpg?_nc_cat=106&_nc_ht=scontent.fplu9-1.fna&oh=3f09e64815ebfe60154a0b45dc453e17&oe=5D14E874',
        postTime: 'há 1h'
      },
      {
        id: 4,
        content:
          'O empenho em analisar a consolidação das estruturas facilita a criação das posturas dos órgãos dirigentes com relação às suas atribuições. As experiências acumuladas demonstram que a contínua expansão de nossa atividade obstaculiza a apreciação da importância do sistema de formação de quadros que corresponde às necessidades. A nível organizacional, o comprometimento entre as equipes acarreta um processo de reformulação e modernização do remanejamento dos quadros funcionais.Pensando mais a longo prazo, a complexidade dos estudos efetuados prepara-nos para enfrentar situações atípicas decorrentes dos níveis de motivação departamental.',
        author: 'Tuzim da Mamãe',
        authorPhoto:
          'https://scontent.fplu9-1.fna.fbcdn.net/v/t31.0-8/19780538_1412614622152329_5913662439105631615_o.jpg?_nc_cat=106&_nc_ht=scontent.fplu9-1.fna&oh=0e4b2b941d3b027595d3bdb32945919e&oe=5D4B7F28',
        postTime: 'há 2h'
      }
    ]
  }

  render () {
    return (
      <Fragment>
        <Header />
        <div className="container">
          {this.state.posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default App
