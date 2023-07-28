import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    // Esse padrão abaixo é legal quando precisamos atualizar uma variavel com ela mesmo.
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  return(
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/LucasMSilva2.png"
        hasBorder={false}
        alt='Foto do Usuário'
        title='Foto do Usuário'
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Torres</strong>
              <time title="11 de maio às 08:13" dateTime="">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}