import './App.css'
import { Paragraph } from './components/Paragraph/Paragraph'
import photo from './assets/Furiosa_A_Mad_Max_Saga.jpg'
import { Userdata } from './components/Userdata/Userdata'
import photo_man from './assets/there-is-cat-that-is-sitting-ledge-chinese-garden-generative-ai_900396-35755.avif'
import { Clock } from './components/Clock/Clock'
import { PetList } from './components/PetList/PetList'


function App() {
  return (
    <>
      <div>
        <h1>Sevimli Film</h1>
        <img src={photo} alt="" />
        <Paragraph name='Film: Furiosa : A Mad Max Saga' />
        <Paragraph name='Directed by	: George Miller' />
        <Paragraph name='Written by	: George Miller and Nico Lathouris' />
        <Paragraph name='Produced by	: Doug Mitchell' />
        <Paragraph name='Release date: May 23, 2024' />
      </div>
      <hr style={{ margin: '3rem' }} />
      <div>
      <h1>İstifadəçi Məlumatı</h1>
        <img src={photo_man} alt="" />
        <Userdata name='Ad: Fazil Məmmədov' />
        <Userdata name='Telefon: +9945******** ' />
        <Userdata name='Şəhər: Bakı' />
        <Userdata name='İş təcrubəsi: Front-end developer' />
        <Userdata name='Bacarıq: HTML, CSS, Javascript, React' />
      </div>
      <hr style={{ margin: '3rem' }} />
      <div>
        <Clock />
      </div>
      <hr style={{ margin: '3rem' }} />
      <div>
        <PetList />
      </div>
    </>
  )
}

export default App
