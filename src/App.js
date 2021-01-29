import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
// import firstBackground from "../src/images/bg1.jpg";
import twoBackground from "../src/images/bg2.jpg";
import treeBackground from "../src/images/bg3.jpg";




class App extends React.Component {
  state = {
    id: "0" ,
    title: " This is title",
    descr: "This is descrription",
    colorBg: "rgb(156 39 176 / 23%)"
  }

 
  render() {
    const { id, title, descr,colorBg } = this.state;
    return (
      <>
        <Header title={"This is title"} desrc={"This is descrription!"} />
        <Layout
          urlBg={treeBackground}
          id={id}
          title={title}
          descr={descr}
        />
        <Layout
         id={id} 
        title={title}
         descr={descr} 
         colorBg={colorBg}
         />
        <Layout
          urlBg={twoBackground}
          id={id}
          title={title}
          descr={descr}
         
        />
        <Footer />
      </>
    );
  }
}

export default App;
