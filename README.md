<h1 align="center">How to use react-modal-ts :</h1>

<p align="left">1- npm i @martidev/react-modal-ts</p>
<p align="left">-2- import it where you want to display it "import {MyModal} from '@martidev/react-modal'"</p>
<p align="left">-3- create open variable "const [open,setOpen] = useState<boolean>(false)"</p>
<p align="left">-4- create hideModal function "const hideModal = ()=> setOpen(false)"</p>

<h2 align="center">Then you can custom it :</h2>

<p align="left">-1- you can custom the img by passing directly the address of the picture or importing one</p>
<p align="left">example =></p> 
<p align="center">"img="https://www.theLinkOfMyPicture.com"</p>
<p align="center">"img={myPicture}"</p>
<p align="left">-2- you can custom as well the closing modal button, there is a default css style but by adding another class you can customize it.</p>
<p>example =></p> "closeBtnSyle='myBtnStyle'"
<p>and in a css file add your personal custom style =></p>
<p>.closeBtnSyle{ background-color: blue; }</p> 
<p align="left">-3- you can also add a lot of content via the children props :</p>
<p align="left">you can add button or p, just put your code between the modal bracket.</p>
<p align="left">-4- you can style the content you add into your modal:</p>
<p align="left">example =></p> 
<p align="left">"styleContent="myModalContentClass"></p>
<p>add your style via the css as you did with the closeBtnSyle.</p>
