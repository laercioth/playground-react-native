import Reat from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '.reducers';
import { Heard } from './componets/common';

export default class App extends Component<{}> {

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stack"/>
        </View>
      </Provider>
    );
  }
}
