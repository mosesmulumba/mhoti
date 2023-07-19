import {useState, useEffect  } from "react";
import axios from "axios";
import './App.css';
import Header from "./header";
// import ReactPaginate from "react-paginate";
// import {HiOutlineArrowSmRight, HiOutlineArrowSmLeft} from "react-icons/hi";


function App() {
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    // const [offset , setOffset ] = useState(0);
    // const [perPage] = useState(6);
    // const [ pageCount , setPageCount ] = useState(0);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=b3d14d59ff301f4b23020e6c4e70ce18&language=en-US&page=1`
        );

        // const data = response.data.results;
        // const slice = data.slice(offset, offset + perPage);
        //  const displayData = slice.map((db) =>(
        //             <div key={db.id}>
        //                 <img src={"https://image.tmdb.org/t/p/w400" + db.backdrop_path} style={{borderRadius: '10px'}} />
        //                 <div className="title">{db.title}</div>
        //                 <div className="pop">popularity : {''} <p>{db.popularity}</p></div>
        //                 <div className="rd">release_date : {""} <p>{db.release_date}</p></div>  
        //             </div>
        //  ))
        // setData(displayData);
        setData(response.data.results);
        setLoading(false);
        // setPageCount(Math.ceil(data.length/perPage));
      } catch (error) {
        console.log(error);
      }
    };
    
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading.......</div>;
  }

  // const handlePageChange = (e) =>{
  //   const selectedPage = e.selected;
  //   setOffset(selectedPage);
  // }

    return (  
      <>
        <Header />
        <div className="container">
                {data.map((movie) =>(
                    <div key={movie.id}>
                        <img src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path} style={{borderRadius: '10px'}} />
                        <div className="title">{movie.title}</div>
                        <div className="pop">popularity : {''} <p> {""} {movie.popularity}</p></div>
                        <div className="rd">release_date : {""} <p> {""} {movie.release_date}</p></div>  
                    </div>
                ))}
                {/* {data} */}
        </div>
        {/* <ReactPaginate
          previousLabel={
            <span style={{alignItems: "center", justifyItems: "center",display:'flex'}}>
              <HiOutlineArrowSmLeft />
              <i>Prev</i>
            </span>
            
          }
          nextLabel={
            <span style={{alignItems: "center", justifyItems: "center",display:'flex'}}>
              <i>Next</i>
              <HiOutlineArrowSmRight />
            </span>
          }
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages_pagination"}
          activeClassName={"active"}
          className="paginator"
        /> */}
      </>
        
    );
}

export default App;