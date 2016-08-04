import React from 'react'
import {Grid, Row, Column} from 'react-cellblock';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

//import ItemRow from "./worker.js";

import EmployeeRow from './employeeRow.jsx'
import TransportRow from './transportRow.jsx'


export default class Root extends React.Component {

  render(){ 
    const { app } =  this.props
    const { state } =  app
    const { bps, brickCount, employees, transports } = state
    // console.log( this.props.app.state )

    // return (
    //   <div>
    //     <h2>{brickCount}</h2>
    //     <h2>{app.bricksPerSecond()}</h2>
    //     <BrickButton onClick={app.addBrick} />
    //     <ol>
    //       <li><a href="javascript: void(null)" onClick={app.addWorker}>buy a worker</a></li>
    //       <li><a href="javascript: void(null)" onClick={app.addRedTruck}>buy a red truck</a></li>
    //       <li><a href="javascript: void(null)" onClick={app.addAlien}>buy alien</a></li>
    //       <li><a href="javascript: void(null)" onClick={app.addAlienTransport}>buy alien transport</a></li>
    //     </ol>
    //     <pre>{JSON.stringify(state, null, 4)}</pre>
    //   </div>
    // )

    return (
      <div>
        <Grid>
          <HeaderRow brickCount={brickCount} bps={bps} />
          <BodyRow app={app} />
          <FooterRow />
        </Grid>
      </div>
    )
  }
}




class HeaderRow extends React.Component {
  render(){
    const { brickCount, bps } = this.props

    return (
      <Row>
        <Column width="1/4">
          <BrickLogo />
        </Column>
        <Column width="3/4">
          <PlayerStats brickCount={brickCount} bps={bps} />
        </Column>
      </Row>
    )
  }
}

class PlayerStats extends React.Component {
  render(){
    return (
      <div>
        <Column width="1/2">
          <p> Total Bricks: {this.props.brickCount}</p>
        </Column>
        <Column width="1/2">
          <p> Bricks Per Second: {this.props.bps}</p>
        </Column>
      </div>
    )
  }
}


class BrickLogo extends React.Component {
  render(){
    return (<h1>Click A Brick</h1> )
  }
}


class FooterRow extends React.Component {
  render(){
    return (
      <Row>
        <Column>
          <CopyrightInfo />
        </Column>
      </Row>
    )
  }
}

class CopyrightInfo extends React.Component {
  render(){
    return <p>Copyright 2016, Bricks Unlimited International</p> 
  }
}

class BrickButton extends React.Component {
  render(){
    return (
      <div className="brickButton">
        <a href="javascript: void(null)" onClick={this.props.onClick}>
          <img src='/img/brick.png' /> 
        </a>
      </div>
    )
  }
}

function BodyRow(props){
  const {app} = props
  return (
    <Row>
      <Column width="1/4">
        <div> 
          <BrickButton onClick={app.addBrick} />        
        </div>
      </Column>
      <Column width="3/4">
        <Tabs>
          <TabList> 
            <Tab className="tab"> Workers </Tab>
            <Tab className="tab"> Transports </Tab> 
            <Tab className="tab"> Tools </Tab> 
          </TabList> 
          <TabPanel>
            <WorkersTab app={app}/>
          </TabPanel>
          <TabPanel>
            <TransportsTab app={app}/>
          </TabPanel>
          <TabPanel>
            <ToolsTab app={app}/>
          </TabPanel>
        </Tabs>
      </Column> 
    </Row>
  )
}



function WorkersTab(props){
  const {app} = props;
  return <div>
    <ItemDescription 
      name="Worker"          
      owned={App.state.workerCount}            
      cost={App.workerCost}   
      onPurchase={app.addWorker} 
      desc="Reliable and sturdy, workers save the day."
    />
    <ItemDescription 
      name="Alien"           
      owned={App.state.alienCount}             
      cost={App.alienCost}    
      onPurchase={app.addAlien} 
      desc="Who knew aliens would love building with rocks so much?"
    />
  </div>
}

function TransportsTab(props){
  const {app} = props;
  return <div>
    <ItemDescription 
      name="Red Truck"       
      owned={App.state.redTruckCount}          
      cost={App.redTruckCost} 
      onPurchase={app.addRedTruck} 
      desc="How do you make buildings faster? You get there faster."
    />
    <ItemDescription 
      name="Alien Transport" 
      owned={App.state.alienTransportCount}    
      cost={App.alienTransportCost}    
      onPurchase={app.addAlienTransport} 
      desc="Aliens are zooming everywhere."
    />
  </div>
}

function ToolsTab(props){
  const {app} = props;
  return <div>
    <ItemDescription 
      name="Oven"       
      owned={App.state.ovenCount}          
      cost={App.ovenCost} 
      onPurchase={app.addOven} 
      desc="Brick bakers bake a brick."
    />
    <ItemDescription 
      name="Pick Axe" 
      owned={App.state.pickAxeCount}    
      cost={App.pickAxeCost}    
      onPurchase={app.addPickAxe} 
      desc="Diging up stuff faster means I can make bricks faster, right?"
    />
  </div>
}

function ItemDescription(props){
  return (
    <Row>
      <Column width="3/4">
        <h3>{props.name}</h3>
        <div>Owned: {props.owned}</div>
        <div>Cost: {props.cost}</div>
        <div>{props.desc}</div>
      </Column>
      <Column width="1/4">
        <div><button onClick={props.onPurchase}>buy</button></div>
      </Column>
    </Row>
  )
}


//     // const { app } = this.props
//     // const { state } = app
//     // const timeElapsed = (new Date).getTime() - state.startedAt;
//     // var { employee, brickCount, workerCount, ovenCount, totalGameTime, alienCount, alienTransportCount } = (this.props.app.state)
//     // return <div>
//     //   <Grid>
//     //     <Row>
//     //       <h1>BrickLayer</h1>
//     //       <div>{timeElapsed} seconds</div>
//     //     </Row>
//     //     <Row>
//     //       <Column width="1/4">
//     //         <h2>Stats</h2>
//     //         <p>Total Bricks: { brickCount }</p>
//     //         <p>Total Workers: { workerCount }</p>
//     //          <p>Total Alien Workers: { alienCount }</p>
//     //          <p>Total Alien Transport: { alienTransportCount }</p>
//     //         <p>Total Game Time: { totalGameTime }</p>
//     //         <BrickButton onClick={app.addBrick} />
//     //       </Column>
//     //       <Column width="3/4">
           
//     //         <ItemRow ovenCount={employee}  />
//     //       </Column>
//     //     </Row>
//     //   </Grid>
//     // </div>


// // class BrickButton extends React.Component {
// //   render(){
// //     return <button {...this.props}>
// //         <img src={'../img/brick.png'} height={100} />
// //       </button>
// //   }
// // }



// // class ItemRow extends React.Component{
// //   render(){
// //     return <Row className="row">
// //       <Column width="3/4">
// //         <h4>Ovens</h4>
// //         <p>You currently have:  </p> 
// //         <p>Cost 20 bricks to create and produce 10 bricks/Sec</p>
// //       </Column>
// //       <Column width="1/4">
// //         <button>Buy an Oven</button>
// //       </Column>
// //     </Row>
// //   }
// // }



// // var App = React.createClass({
// //   imgs:[
// //     "/img/brick.png",
// //     "/img/Alien.png"
// //   ],
// //   render: function(){
// //     return(
// //       <Img alt="Alien!" srcset={this.imgs.join(', ')} />
// //       );
// //   }
// // });
