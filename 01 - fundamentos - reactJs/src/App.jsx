import { Post } from "./Post"
import './global.css'
import { Header } from "./components/Header"

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>

     <Header />

    <div className={styles.wrapper}>
      
      <Sidebar />

      <main>
      <Post 
        author="Breno Façanha" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae quae cum quaerat accusamus maiores unde quidem doloribus quos accusantium doloremque omnis, ullam labore dolorem vero temporibus molestiae et placeat."
      />
      
      <Post 
        author="Maria Façanha" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae quae cum quaerat accusamus maiores unde quidem doloribus quos accusantium doloremque omnis, ullam labore dolorem vero temporibus molestiae et placeat."
      />

      </main>
    </div>
  
    </div>
    
  )
}

