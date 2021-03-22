
import './App.css';
import {RegistrationForm} from './components/Form/RegistrationForm';
import {Greeting} from './components/Greeting';
import {Movie} from "./components/Movies/Movie";
import {Intro} from "./components/Intro";
import {Header} from "./components/Headers/Header";
import Candidates from "./components/Candidates";
import Color from "./components/Color";
import Info from "./components/Info";
import {Invitation} from "./components/Invitation/Invitation";
import {Footer} from "./components/Footer/footer";


let filmList = [
    {
        title: 'Forrest Gump',
        year: '1994',
        genre: 'drama',
        url: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg'
    },

    {
        title: 'La vita è bella',
        year: '1997',
        genre: 'drama, comedy',
        url: 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },

    {
        title: 'Inception',
        year: '2010',
        genre: 'action',
        url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },

    {
        title: 'The Pianist',
        year: '2002',
        genre: 'biography',
        url: 'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR6,0,182,268_AL_.jpg'
    }
];



function App() {
  return (
    <div>

        <div >
            <Header company='Samsung' country='South Korea'/>
        </div>

        <div>
            <Intro name={'Valya'}/>
            <Intro name={'Kolya'}/>
        </div>

        <div>
            <Greeting greeting='Hi, nice to meet you!'/>
            <Greeting greeting='Ciao! come stai?'/>
        </div>

        <div>
            <Candidates name="Anton" experience="Middle Software Engineer"/>
            <br/>
            <Candidates name="Pavel" experience="Junior Full-stack Developer"/>
        </div>

        <div>
            <ul>
                <li><Color color = "blue"/></li>
                <li><Color color = "red"/></li>
                <li><Color color = "violet"/></li>
                <li><Color color = "gray"/></li>
            </ul>

        </div>

        <div>
            <Info/>
        </div>

        <div>
            <Invitation name = "Sofia" time= "Saturday, July 9, 2016" location="Santa Barbara, California"/>

        </div>
        <div className='forms-list'>
            <RegistrationForm name="Sasha" surname="Zhukov" age="32"/>
            <RegistrationForm name="Yuliana" surname="Popova" age="17"/>
            <RegistrationForm name="Nazar" surname="Oleksiichuk" age="23"/>
        </div>

        <div className="movie-list">
            {
                filmList.map(value => (<Movie title={value.title} year={value.year} genre={value.genre} url={value.url}/>))
            }
        </div>

        <divn>
            <Footer address = "Kyiv, Ukraine" telephone = "044 823 48 89" workingHours = "9 am - 6 pm"/>
        </divn>
    </div>
  );
}

export default App;
