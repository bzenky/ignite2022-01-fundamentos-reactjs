import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.scss'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/bzenky.png',
      name: 'Zenky',
      role: 'Desenvolvedor Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que eu fiz no NLW, evento da Rocketseat' },
      { type: 'link', content: 'github.com/bzenky' },
    ],
    publishedAt: new Date('2022-06-30 08:13:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que eu fiz no NLW, evento da Rocketseat' },
      { type: 'link', content: 'github.com/bzenky' },
    ],
    publishedAt: new Date('2022-07-01 08:13:00'),
  }
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
