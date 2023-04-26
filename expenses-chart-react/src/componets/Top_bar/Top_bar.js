import './top-bar.css'
function Top_Bar() {
    return <>
        <div className="top-bar">
            <div className="left-part">
                <p>My balance</p>
                <p className="large-text"></p>
            </div>
            <div className="right-part">
                <img src="./././images/logo.svg" alt="logo" />
            </div>
        </div>
    </>
}
export default Top_Bar;