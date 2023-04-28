import Main from './componets/Main/Main';
import NavBar from './componets/NavBar/NavBar';
import './Page.css'

function Page() {
    return <>
        <div className="container">
            <NavBar></NavBar>
            <Main></Main>
        </div>
    </>
}
export default Page;