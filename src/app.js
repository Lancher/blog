// 3rd-party
import React from 'react';
import { render } from 'react-dom';
import {Provider} from "react-redux"

// local
import Page1Component from './components/page1';
import Page2Component from './components/page2';
import Page3Component from './components/page3';
import Page4Component from './components/page4';
import SideBar from './components/navbar'
import store from './store'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';


export default class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <HeaderComponent/>
                <FooterComponent/>
            </div>
        );
    }
}

render(<Provider store={store}><App/></Provider>, document.getElementById('app_wrapper'));
