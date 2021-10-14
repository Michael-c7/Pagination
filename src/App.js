
function App() {
  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

  return (
    <div className="App">
      <h1 className="title">Pagination</h1>

      <section className="card-section">
        <ul className="cards">
          <li className="card">
            <img className="card__image" src="https://avatars.githubusercontent.com/u/35147?v=4" alt=""/>
            <h2 className="card__name">steve</h2>
            <button className="card__view-profile-btn"><a href="/">View Profile</a></button>
          </li>

          <li className="card">
            <img className="card__image" src="https://avatars.githubusercontent.com/u/35147?v=4" alt=""/>
            <h2 className="card__name">bob</h2>
            <button className="card__view-profile-btn"><a href="/">View Profile</a></button>
          </li>

          <li className="card">
            <img className="card__image" src="https://avatars.githubusercontent.com/u/35147?v=4" alt=""/>
            <h2 className="card__name">steve</h2>
            <button className="card__view-profile-btn"><a href="/">View Profile</a></button>
          </li>
        </ul>
      </section>

      <section className="pages-section">
        <button className="pages-section__prev">Prev</button>
        <ul className="pages">
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
            <button className="page__btn">1</button>
          </li>
          <li className="page">
            <button className="page__btn">2</button>
          </li>
          <li className="page">
            <button className="page__btn">3</button>
          </li>
          <li className="page">
            <button className="page__btn">1</button>
          </li>
          <li className="page">
            <button className="page__btn page__btn--active">2</button>
          </li>
          <li className="page">
            <button className="page__btn">3</button>
          </li>
        </ul>
        <button className="pages-section__next">Next</button>
      </section>

    </div>
  );
}

export default App;
