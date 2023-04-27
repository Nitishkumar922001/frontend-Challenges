import'./Main.css'
import poster from '../../images/image-hero-desktop.png'
import audiophile from '../../images/client-audiophile.svg'
import databiz from '../../images/client-databiz.svg'
import maker from '../../images/client-maker.svg'
import meet from '../../images/client-meet.svg'
function Main()
{
    return(<>
        <main className='wrapper'>
            <div className='left-part'>
                <h1 className='title'>Make <br></br>remote work</h1>
                <p className='content'>Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.</p>
    <button class="btn-black">Learn More</button>
  <div class="clients">
                <img src={audiophile }></img>
                <img src={databiz}></img>
                <img src={maker}></img>
                <img src={meet}></img>
            </div>
            </div>
            <div className="right-part">
                <img  className="poster" src={poster}/>
            </div>
            
        </main>
    </>)
}
export default Main;