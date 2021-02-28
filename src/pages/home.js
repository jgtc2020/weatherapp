import React, {useState, useEffect} from 'react';
import Header from '../components/header.js';
import Bnav from '../components/bnav.js';
import Loader from '../components/loader.js';
import '../css/home.css';
import {motion} from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ModalCard from '../components/ModalCard.js';
import Cards from '../components/Cards.js';
import { useHistory } from 'react-router-dom';

const Home = ()=>{
	const history = useHistory();

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  const url ='https://ws.smn.gob.ar/map_items/weather';
  const [todos, setTodos] = useState();
  const fetchApi = async ()=>{
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  };

  useEffect(()=>{
    fetchApi();
  }, [])

  const [todo, setTodo] = useState(null);
  const [appear, setAppear] = useState(false);

  const handleWatchMore = (data)=>{
    setTodo(data);
    setAppear(true);
  };

  const handleCardDisappear = () => {
    setAppear(false);
  };

  const handleFavorite = (data) => {
	history.push('/favorites')
  };

  return (
		<React.Fragment>
			<motion.div
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			>
				<Loader />


				{appear &&
					 <ModalCard todo={todo} onClose={handleCardDisappear}/>
					}

				<div className='general-container-weather-app-home'>
					<div className='general-container-header-wh-home'>
						<Header />
					</div>

					<div className='container general-container-title-hero'>
						<h1 className='title-hero'>¡Global weather in real time!</h1>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<div className='container'>
							<div className='row'>
								{!todos ? (
									'...cargando'
								) : (
									<Cards todos={todos} handleTodo={handleWatchMore} handleFavorite={handleFavorite}/>
								)}
							</div>
						</div>
					</motion.div>

					<Bnav />
				</div>
			</motion.div>
		</React.Fragment>
	);
};

export default Home;
