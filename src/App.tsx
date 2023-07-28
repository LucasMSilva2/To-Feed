import {  Post  } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasMSilva2.png',
      name: 'Lucas Torres',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'Fala galeraa 👋'}
    ],
    publishedAt: new Date('2023-06-14 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernande',
      role: 'Dev Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'Fala galeraa 👋'}
    ],
    publishedAt: new Date('2023-06-14 20:05:00')
  },
];

function App(){ 
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </>
  )
}

export default App
