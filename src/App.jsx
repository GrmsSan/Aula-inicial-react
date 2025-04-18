
// import style from './App.module.css'
import { Menu } from './components/menu'
import { cards } from './assets/mock/cards'
import { useState } from 'react'



function App() {
    const defaultPhoneNumber = "554199549749"

    const [formData, setFormData] = useState({
      name: "",
      email:"",
      message:"",
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleZap = () => {
      const {name, email, message} = formData;

      const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
      Nome:%20${name}%0D%0A
      Email:%20${email}%0D%0A
      Message:%20${message}%0D%0A`


      window.open(urlZAPZAP, "_blank")

    }
    
  return (
    <>
     <Menu option01='Sessao 01' option02='Sessao 02' option03='Contato'/>
     <main>
      <section id='s1'>
        <h2>sessaozada01 </h2>
          {/* {<img src='s1' src={ceu} alt='amor' width={200} height={"auto"}/>} */}
          {cards.map((item, index) => {
            return (
              <div key={index}>
              <h5>{item.text}</h5>
              <img src={item.img} alt={item.text} width={200}  height={"auto"}/>
              </div>
            )
          })}
          
         </section>

      <section id='s2'>
          <h2>sessaozada02 </h2>
          <input placeholder= 'what you name'type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
           <input placeholder= 'what you email'type="text" id='email' name='email' value={formData.email} onChange={handleChange} required/>
           <textarea placeholder= 'what your message'type="text" id='message' name='message' value={formData.message} onChange={handleChange} cools= "30" rows="10" required></textarea>
          <button onclick={handleZap}> enviar </button>
        </section>

      <section id='s3'>
           <h2> sessao </h2>
           <br/>
  
         </section>

     </main>
    </>
  )
}

export default App
