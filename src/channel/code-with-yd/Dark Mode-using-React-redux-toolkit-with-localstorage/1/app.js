import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import CustomIndex from './index';

export default function CustomApp() {
  return (
    <div>
        <Provider store={store}>
            <CustomIndex/>
        </Provider>
    </div>
  )
}
