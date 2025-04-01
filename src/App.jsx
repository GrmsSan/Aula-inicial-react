import './App.module.css'
import { Btn } from './components/btn'
import { Menu } from './components/menu'

function App(){
  return(
    <>
        <Menu s1="batatao" s2="sarigueijo" s3="saturno"/>
        <main>
          <section id='s1'>
            primeira
            <Btn text='batatao' func='#s2'/>
          </section>
          <section id='s2'>
            segunda
              <Btn text='sarigueijo' func='#s3'/>
          </section>
          <section id='s3'>
            terceira
            <Btn text='saturno' func='#s1'/>    
            </section>
        </main>
    </> 
  )
}

export default App