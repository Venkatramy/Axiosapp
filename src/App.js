import React,{Component} from 'react';
import PersonList from './PersonList';
import PersonPost from './PersonPost';
import PersonDelete from './PersonDelete';
class App extends Component{
  render(){
    return(
      <div>
<PersonList/>
<PersonPost/>
<PersonDelete/>
      </div>
    );
  }
}
export default App;