
import './App.scss';

function App() {




  return (
   
   <div className="mainContainer" id="mainContainer">

<div id= "header" className="header">
  <div>Vejret</div>
</div>

<div id="myComponent" style={{backgroundColor:"#ccc"}}>

<img src="/assets/images/weather-component.png" />
</div>

  <div id= "gridContainer" className="grid">
    
  
  </div>
  
  <div id= "subgrid" className="grid">

  <div id="mImg">
  <div><img src="/assets/images/image1.jpeg" /></div>
  <div className="imageText">Blå himmel, sol og forår: Men vinden snyder dig i de her dage</div>
    </div>
    <div id="mImg">
    <div><img src="/assets/images/image2.jpeg" /></div>
    <div>Ok ... Så er vi med igen ... det svigter aldrig, ok sydover lige nu</div>
    </div>
  </div>



  <div id="bottomArticle">
<div><img src="/assets/images/summer.jpeg" /></div>
<div><h1>Det bliver varmere snart</h1><span>Op til 19,34 grader og høj sol om hjørnet...yeahhhhii</span></div>
  </div>


</div>
    
  );
}

export default App;
