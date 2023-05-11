import './Main.css'
import desktop from '../../images/image-hero-desktop.png'
import mobile from '../../images/image-hero-mobile.png'
import audiophile from '../../images/client-audiophile.svg'
import databiz from '../../images/client-databiz.svg'
import maker from '../../images/client-maker.svg'
import meet from '../../images/client-meet.svg'
function Main() {
    return (<>
        <main className='wrapper'>
            <div className='left-part'>
                <h1 className='title'>Make remote work</h1>
                <p className='content'>Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button className="btn-black">Learn More</button>
                <div className="clients">
                    <div><img src={audiophile}></img></div>
                    <div><img src={databiz}></img></div>
                    <div><img src={maker}></img></div>
                    <div><img src={meet}></img></div>
                </div>
            </div>
            <div className="right-part">
                <picture>
                    <source media='(min-width:768)' srcSet={desktop} />
                    <img className="poster" src={mobile} />

                </picture>
            </div>

        </main>
    </>)
}
export default Main;