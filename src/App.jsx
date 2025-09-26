
import './App.css'
import gh from './assets/gh.jpg'
import deca from './assets/images.jpg'
import tren from './assets/tren.png'
import i1 from './assets/1.png'
import i2 from './assets/2.png'
import i3 from './assets/3.png'
import i4 from './assets/4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={i1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={i2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={i3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={i4} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={gh} alt="" className="img-card" />
              <h2 className="titulo-card">Hormônio GH</h2>
              <p className="desc">Crescimento avassalador</p>
              <p className="preco">R$ 99,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={deca} alt="" className="img-card" />
              <h2 className="titulo-card">Hormônio Deca</h2>
              <p className="desc">Ganhos brutais</p>
              <p className="preco">R$ 179,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={tren} alt="" className="img-card" />
              <h2 className="titulo-card">Trembolona</h2>
              <p className="desc">Força bruta de homem</p>
              <p className="preco">R$ 250,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/ADupr01yYIE?si=lygkWRO-22_IDeiS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
