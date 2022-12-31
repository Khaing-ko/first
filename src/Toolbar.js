import React from 'react';


 import './Toolbar.css';


  const styles = {
    toolbar : {
        marginBottom : 20,
        border : '1px solid red',
    },
    dark : {
        background : 'purple',
        color : 'white',
    },

}

  class Toolbar extends React.Component{
    

    render(){
        return(
            <div style={{...styles.dark, ...styles.toolbar}}>
                {this.props.children}
            </div>
        )
    }
    
  }
  export default Toolbar;