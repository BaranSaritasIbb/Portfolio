import React from 'react'
import portre from "../../assets/image/portre.jpg";
import Portfolio from '../portfolio/Portfolio';
export default function DashboardPage() {
    return (
        <div className='dashboard'>

            <div className='person-promotion'>
                <div className='person-image'>
                    <img src={portre} alt="" />
                </div>
                <div className='person-information'>
                    <h2>Merhaba!</h2>
                    <p>Ben Baran Sarıtaş. Hobilerim arasında Bilgisayar Oyunları, Film izlemek, Amatör Fotoğrafçılık gibi aktiviteler bulunuyor. Ayrıca Mitolojiler konusunda da ilgi ve bilgi sahibiyim.</p>
                    <p>Beni en çok heyecanlandıran şeylerden biri Tarihdir. Bu konularla ilgili olarak sürekli yeni şeyler öğrenmeyi ve deneyimlemeyi seviyorum.</p>
                    <p>Kendimi tanımlarken, yenilikçi, meraklı ve çözüm odaklı olduğumu söyleyebilirim. Her zaman yeni fikirlere ve perspektiflere açık olmayı ve bunları uygulamaya dökmeyi severim.</p>
                    <p>İlginiz için teşekkür eder, benimle ilgili daha fazla bilgi edinmek isterseniz, lütfen benimle iletişime geçin.</p>
                    <p>Saygılarımla, Baran Sarıtaş </p>
                    <p>baransaritas.developer@gmail.com</p>
                </div>
            </div>
            <div className='portfolio-div'  >
                <Portfolio />
            </div>
        </div>
    )
}
