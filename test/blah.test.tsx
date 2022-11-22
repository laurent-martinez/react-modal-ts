import React from 'react';
import * as ReactDOM from 'react-dom';
import { MyModal } from '../src/Modal';


describe('Modal', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyModal img={'https://images.pexels.com/photos/14145411/pexels-photo-14145411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} children={<h1>Hello</h1>} closeBtnStyle={''} open={true} styledContent={''} hideModal={function (): {} {
      throw new Error('Function not implemented.');
    } }  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
