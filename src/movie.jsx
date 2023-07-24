import {  useParams } from "react-router-dom";
import PropTypes from 'prop-types';


function Movie({ title, popularity, backdrop_path, release_date}) {
    const {id} = useParams();

    return (  
        <div key={id}>
            <img src={backdrop_path} style={{borderRadius: '10px'}}/>
            <div className="title">{title}</div>
            <div>popularity :<p>{popularity}</p></div>
            <div>release_date : <p>{release_date}</p></div>  
        </div>
    );
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    popularity : PropTypes.number.isRequired,
    backdrop_path : PropTypes.string.isRequired,
    release_date : PropTypes.func,
}

export default Movie;
