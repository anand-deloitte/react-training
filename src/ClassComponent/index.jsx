import React from 'react';
import Greeting1  from '../Componet/functionalComponent';
const data = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  }]
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.list  = () => {
      const mapData = data.map((data,i) => <ul><li key={i}>{data.title}</li></ul>)
       return mapData;
    }
  };
  
    render(){
      return <>
      <h2>{this.state.date.toLocaleTimeString()}</h2>
      <h1 className="" >Hi {this.props.name}, I’m a smart component! </h1>
       <Greeting1 name={this.state.date.toLocaleTimeString()}></Greeting1>
       {this.list()}
      </>;
    }
  }
  export default Greeting