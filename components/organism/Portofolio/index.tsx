
export default function Portofolio () {
  return (
    <section id="portofolio">
        <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="text-center fw-bold">Gallery Portofolio</h1>
                    <hr/>
                </div>
            </div>

            <div className="row justify-content-center  mt-4">
                <div className="col-lg-3 col-md-4 col-12">
                    <div className="hovereffects">
                        <img src="/img/website-1.png" alt='' />
                        <div className="overlay">
                            <h2>Web Topup Game</h2>
                            <a className="info me-2"  href="https://github.com/Ramdhannp/gamestore" target="_blank" rel="noopener noreferrer">More Info</a>
                            <a className="info"  href="https://gamestore-l3oywhkbw-ramdhannps-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Link Web</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-12">
                    <div className="hovereffects">
                        <img src="/img/website-2.png" alt='' />
                        <div className="overlay">
                            <h2>Dashboard</h2>
                            <a className="info me-2"  href="https://github.com/Ramdhannp/dashboard-monitoring-kerja-praktik" target="_blank" rel="noopener noreferrer">More Info</a>
                            <a className="info"  href="https://ramdhannp.github.io/dashboard-monitoring-kerja-praktik/" target="_blank" rel="noopener noreferrer">Link Web</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
