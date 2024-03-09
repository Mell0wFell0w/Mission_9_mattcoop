import React from 'react';
import './App.css';
// #notcoveredinthevideos
import teamData from './CollegeBasketballTeams.json';

// An interface for the Team object so that the props works
// We don't need all of the definitions because we don't use all if them, but all are in for scalability
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// A react component to render the info we want
class School extends React.Component<Team> {
  render() {
    // For easier access grab the data and read it with props from a destructured object
    // Add more to this const to be able to use in the return
    const { school, name, city, state } = this.props;
    return (
      <div>
        <h2>{school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
        <br></br>
      </div>
    );
  }
}

function SchoolNames() {
  const teams: Team[] = teamData.teams; // Extract the teams array from the JSON file
  return (
    <div>
      {teams.map((team) => (
        <School key={team.tid} {...team} /> // Render a school component for each team
      ))}
    </div>
  );
}

// Welcome functional component used only for the header
function Welcome() {
  return <h1>College Basketball Teams</h1>;
}

function App() {
  return (
    <div className="App">
      {/* The functions have to be capitalized to work, weird... */}
      <Welcome />
      <SchoolNames />
    </div>
  );
}

export default App;
