import {useState, useEffect} from "react";
import axios from "axios";
import "./componets/App/App.css";
import Movie from "./movie";
// import ReactPaginate from "react-paginate";
// import {HiOutlineArrowSmRight, HiOutlineArrowSmLeft} from "react-icons/hi";

function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
//   const [offset , setOffset ] = useState(1);
//   const [perPage] = useState(6);
//   const [ pageCount , setPageCount ] = useState(0);

  

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=b3d14d59ff301f4b23020e6c4e70ce18&language=en-US&page=1`
          );
    
        //   const data = response.data.results;
        //   const slice = data.slice(offset , offset + perPage);
        //    const displayData = slice.map((movie) =>(
        //             <Movie
        //                 key={movie.id}
        //                 title={movie.title}
        //                 popularity={movie.popularity}
        //                 release_date={movie.release_date}
        //                 backdrop_path={
        //                 "https://image.tmdb.org/t/p/w400" + movie.backdrop_path
        //                 }
        //             />
        //    ))
        //   setData(displayData);
          setData(response.data.results);
        //   setPageCount(Math.ceil(data.length / perPage));
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading.......</div>;
  }

//   const handlePageChange = (e) =>{
//     const selectedPage = e.selected;
//     setOffset(selectedPage);
//   }

  return (
    <>
      <div className="container">
        {data.map((movie) => (
        //   <div key={movie.id}>
        //       <img src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path} style={{borderRadius: '10px'}} />
        //       <div className="title">{movie.title}</div>
        //       <div className="pop">popularity : {''} <p> {""} {movie.popularity}</p></div>
        //       <div className="rd">release_date : {""} <p> {""} {movie.release_date}</p></div>
        //   </div>
          <Movie
            key={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            release_date={movie.release_date}
            backdrop_path={
              "https://image.tmdb.org/t/p/w400" + movie.backdrop_path
            }
          />
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
          breakLabel={"...."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
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

export default Home;
