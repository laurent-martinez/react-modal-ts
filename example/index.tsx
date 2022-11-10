import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyModal } from '../src/Modal';

const App = () => {
  const [open,setOpen] = React.useState<boolean>(true);
  const hideModal = () => setOpen(false)
  return (
    <div>
<MyModal
 open={open}
 hideModal={() => setOpen(false)}
 img="https://media.discordapp.net/attachments/1039488310155935794/1039868448471273472/marti_validation_vector_art_icon_on_a_circle_93ad18_2c5d3532-40be-4105-b790-143f778f5f09.png?width=577&height=577"
><p>vous êtes bien enregistré</p></MyModal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
