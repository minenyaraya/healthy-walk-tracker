import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Healthy Walk Tracker</h1>
  </header>

  <main>
    <section>
      <h2>Today's Weather</h2>
      <p>Weather information will appear here.</p>
    </section>

    <section>
      <h2>Walk Summary</h2>
      <p>Your walking activity will appear here.</p>
    </section>

    <section>
      <h2>Add New Walk</h2>
      <input id="distance" type="number" placeholder="Walk distance (miles)">

      <button id="addWalkBtn">Add Walk</button>
    </section>
  </main>
`
const button = document.querySelector('#addWalkBtn')

button.addEventListener('click', () => {
  const distance = document.querySelector('#distance').value

  console.log(distance)
})