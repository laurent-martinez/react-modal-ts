How to use react-modal-ts :</br>

-1- npm i @martidev/react-modal-ts</br>
-2- import it where you want to display it "import {MyModal} from '@martidev/react-modal'"</br>
-3- create open variable "const [open,setOpen] = useState<boolean>(false)"</br>
-4- create hideModal function "const hideModal = ()=> setOpen(false)"</br>

Then you can custom it :</br>

-1- you can custom the img by passing directly the address of the picture or importing one,
example =></br> "<MyModal img="https://www.theLinkOfMyPicture.com"></MyModal>"
"<MyModal img={myPicture}></MyModal>"</br>
-2- you can custom as well the closing modal button, there is a default css style but by adding another class you can customize it.</br>
example =></br> "<MyModal closeBtnSyle="myBtnStyle"></MyModal>"</br>
and in a css file add your personal custom style =></br> .closeBtnSyle{
background-color: blue;
}
-3- you can also add a lot of content via the children props :</br>
example =></br> "<MyModal>
<button>Ok</button>

<p>Lorem Ipsum .....</p>
</MyModal>"</br>
-4- you can style the content you add into your modal:</br>
example =></br> "<MyModal styleContent="myModalContentClass">
<button>Ok</button>
<p>Lorem Ipsum .....</p>
</MyModal>"</br>
add your style via the css as you did with the closeBtnSyle.
