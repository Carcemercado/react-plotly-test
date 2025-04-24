import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Plotly</h1>
      <h2>Bar Plot Test</h2>
      <div className="card">
      <Plot data={[{
        x: [1,2,3],
        y: [10, 15, 13],
        type: 'bar',
        mode: 'lines+markers',
        marker: {color: 'blue'},
        line: {color: 'red'},
        name: 'React Plotly Test',
        text: ['A', 'B', 'C', 'D'],
        textposition: 'auto',
        textfont: {size: 20},
        hoverinfo: 'text',
        hovertemplate: 'Custom hover text: %{text}<extra></extra>',
        hoverlabel: {bgcolor: 'white', font: {size: 20}},
      }]}
        layout={{
          title: 'Bar Plot Test for Carlos',
          xaxis: {title: 'X Axis'},
          yaxis: {title: 'Y Axis'},
          showlegend: true,
          legend: {orientation: 'h', xanchor: 'center', x: 0.5, yanchor: 'bottom', y: 1.1},
          margin: {t: 50, b: 50, l: 50, r: 50},
          hovermode: 'closest'
        }}
        config={{responsive: true}}
      />
        
      </div>
      
    </>
  )
}
import Plot from 'react-plotly.js'

export default App
