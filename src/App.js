import { useState, useEffect } from 'react'


function App() {
  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  // start : 10, end : 100
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isActiveBtn, setIsActiveBtn] = useState(true)


  const fetchData = async _ => {
    setLoading(true)

    try {
      const response = await fetch(url);
      const data = await response.json()
      // console.log(data.length / 10)
      //
      // let currentUsers = data.slice((currentIndex - 10), currentIndex);
      const itemsPerPage = 10;
      const pages = Math.ceil(data.length / itemsPerPage);

      const currentUsers = Array.from({length:pages}, (_, index) => {
        const start = index * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
      });

      setLoading(false)
      setUsers(currentUsers[currentIndex])

    } catch(error) {
      setLoading(false)
      console.log(error)
    }
  }


  const prevUsers = _ => {
    if(currentIndex <= 1) {
      setCurrentIndex(users.length -1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextUsers = _ => {
    if(currentIndex >= 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }



  const setCurrentPage = e => {
    setCurrentIndex(Number(e.target.getAttribute("data-pagenum")))
  }





  useEffect(() => {
    fetchData()
  }, [currentIndex])



  if(loading) {
    return <h1 style={{textAlign:"center", fontSize:"2rem"}}>Loading...</h1>
  }

  return (
    <div className="App">
      <h1 className="title">Pagination</h1>

      <section className="card-section">
        <ul className="cards">
          {users.map((item) => {
            const {avatar_url:image, id, login:name} = item;
            return (
              <li className="card" key={id}>
                <img className="card__image" src={image} alt=""/>
                <h2 className="card__name">{name}</h2>
                <button className="card__view-profile-btn">
                  <a href={`https://github.com/${name}`} target="_blank" rel="noreferrer">View Profile</a>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="pages-section">
        <button className="pages-section__prev" onClick={prevUsers}>Prev</button>
        <ul className="pages" onClick={setCurrentPage}>
          {users.map((_, index) => {
            return (
              <li className="page" key={index}>
                <button className={`${currentIndex === index ? "page__btn page__btn--active" : "page__btn"}`} data-pagenum={index}>{index + 1}</button>
              </li>
            )
          })}
        </ul>
        <button className="pages-section__next" onClick={nextUsers}>Next</button>
      </section>

    </div>
  );
}

export default App;
