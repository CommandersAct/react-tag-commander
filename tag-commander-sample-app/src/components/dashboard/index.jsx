import cycle from '../../assets/cycle.png'
const Dashboard = () => {
  return (
    <main>
      <section className="section section-text-illustration-horizontal img-bg-center inner-sm">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 animated" style={ { opacity: 1 } }>
              <header className="center-block title text-center inner-bottom-xs">
                <h2>Tag lifecycle management</h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 text animated" style={ { opacity: 1 } }>
              <h3 className="text-center"></h3>
              <div className="text-left">
                <p>Digital organisations must enhance their operational agility if they are to survive in the
                  ever-changing worlds of Adtech and Martech.</p>
                <p>Managing the lifecycle of technology partnerships is the first step to this longevity.</p>
                <p>Any successful marketing team must be able to deploy campaigns quickly.</p>
                <p>An Enterprise Tag Management solution empowers them to do so while helping ensuring proper
                  configuration and optimisation.</p>
              </div>
            </div>
            <div className="col-sm-6 animated" style={ { opacity: 1 } }>
              <div className="illustration">
                <img width={ 440 }
                     height={ 330 }
                     src={cycle}
                     className="attachment-full size-full"
                     alt="Tag lifecycle management"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
