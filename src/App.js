import { useState, useEffect } from 'react'


function App() {
  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  // start : 10, end : 100
  const [currentIndex, setCurrentIndex] = useState(10)
  const [isActiveBtn, setIsActiveBtn] = useState(true)
  let [amountOfPages, setAmountOfPages] = useState([0,1,2,3,4,5,6,7,8,9])


  const fetchData = async _ => {
    setLoading(true)

    try {
      const response = await fetch(url);
      const data = await response.json()
      // console.log(data.length / 10)
      let currentUsers = data.slice((currentIndex - 10), currentIndex);
      setLoading(false)
      setUsers(currentUsers)

    } catch(error) {
      setLoading(false)
      console.log(error)
    }
  }


  const prevUsers = _ => {
    if(currentIndex <= 10) {
      setCurrentIndex(100)
    } else {
      setCurrentIndex(currentIndex - 10)
    }
  }

  const nextUsers = _ => {
    if(currentIndex >= 100) {
      setCurrentIndex(10)
    } else {
      setCurrentIndex(currentIndex + 10)
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
          <li className="page">
              <button className="page__btn" data-pagenum="10">1</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="20">2</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="30">3</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="40">4</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="50">5</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="60">6</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="70">7</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="80">8</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="90">9</button>
            </li>
            <li className="page">
              <button className="page__btn" data-pagenum="100">10</button>
            </li>
        </ul>
        <button className="pages-section__next" onClick={nextUsers}>Next</button>
      </section>

    </div>
  );
}

export default App;


/*
          <li className="page">
            <button className="page__btn">1</button>
          </li>
          <li className="page">
            <button className="page__btn">2</button>
          </li>
          <li className="page">
            <button className="page__btn">3</button>
          </li>
          <li className="page">
            <button className="page__btn">4</button>
          </li>
          <li className="page">
            <button className="page__btn">5</button>
          </li>
          <li className="page">
            <button className="page__btn">6</button>
          </li>
          <li className="page">
            <button className="page__btn">7</button>
          </li>
          <li className="page">
            <button className="page__btn">8</button>
          </li>
          <li className="page">
            <button className="page__btn">9</button>
          </li>
          <li className="page">
            <button className="page__btn">10</button>
          </li>

*/
