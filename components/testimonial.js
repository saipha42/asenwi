import React,{ useState} from 'react'
import Script from 'next/script'
import Image from 'next/image';
function Testimonial() {
    let clientData=[
        {
            'body':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos similique sunt quaerat veritatis iste nam molestiae, nihil adipisci nemo corrupti aliquam praesentium doloremque laudantium dolorem consectetur eos, eius est?",
            'position':"CEO & Founder",
            "name":"Patrick Muriungi"
        },
        {
            'body':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos similique sunt quaerat veritatis iste nam molestiae, nihil adipisci nemo corrupti aliquam praesentium doloremque laudantium dolorem consectetur eos, eius est?",
            'position':"Finance Manager",
            "name":"Joy Marete"

        },
        {
            'body':" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos similique sunt quaerat veritatis iste nam molestiae, nihil adipisci nemo corrupti aliquam praesentium doloremque laudantium dolorem consectetur eos, eius est?",
            'position':"Global Brand Manager",
            "name":'ClaireBelle Zawadi'
        }
    ];
    const [clients,setClients]= useState(clientData);

  return (
    <section className="testimonials ">
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,64L30,96C60,128,120,192,180,208C240,224,300,192,360,165.3C420,139,480,117,540,122.7C600,128,660,160,720,192C780,224,840,256,900,245.3C960,235,1020,181,1080,160C1140,139,1200,149,1260,170.7C1320,192,1380,224,1410,240L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
  <div className="container">
    <div className="row text-center text-white">
      <h1 className="display-3 fw-bold">Testimonials</h1>
      <hr style={{width:100,height:3}} className="mx-auto  bg-dark"/>
      <p className="lead pt-1">what our clients are saying</p>
    </div>
  </div>
  {/* <!-- Start of carousel --> */}
  <div className="container">
    <div className="row align-items-center text-center">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">
            {
               clients.map((client,index)=>{
                    return(
                        <div className={`carousel-item ${index == 0 ? 'active' : ''}`}  key={index+client.position}>
                        <div className="testimonials__card">
                          <p className="lh-lg">
                            <i className="fa-solid fa-quote-left"></i>
                            {client.body}
                            <i className="fa-solid fa-quote-right"></i>
                            <span className="ratings">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </p>
                        </div>
                        {/* <!-- Client picture --> */}
                        <div className="testimonials__picture">
                          <Image src={`/images/testimonials/client-${index+1}.jpg`} alt="client picture" className="testimonials__picture--client rounded-circle img-fluid" width={500}  height={500}/>
                        </div>
                        {/* <!-- Client  name --> */}
                        <div className="testimonials__name">
                          <h3>{client.name}</h3>
                          <p className="lead fw-light">{client.position}</p>
                        </div>
                    </div>
                    )
                })
            }
      </div>
    <button type="button" className="btn btn-outline-light fas fa-arrow-left mx-1"  data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"></button>
    <button type="button" className="btn btn-outline-light fas fa-arrow-right mx-1"  data-bs-target="#carouselExampleCaptions" data-bs-slide="next"></button>
      </div>
    </div>
  </div>
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,64L30,96C60,128,120,192,180,208C240,224,300,192,360,165.3C420,139,480,117,540,122.7C600,128,660,160,720,192C780,224,840,256,900,245.3C960,235,1020,181,1080,160C1140,139,1200,149,1260,170.7C1320,192,1380,224,1410,240L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
</section>
  )
}

export default Testimonial