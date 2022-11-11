How to use react-modal-ts :

-1- npm i @martidev/react-modal-ts
-2- import it where you want to display it "import {MyModal} from '@martidev/react-modal'"
-3- create open variable "const [open,setOpen] = useState<boolean>(false)"
-4- create hideModal function "const hideModal = ()=> setOpen(false)"

Then you can custom it :

-1- you can custom the img by passing directly the address of the picture or importing one,
example => "<MyModal img="https://www.theLinkOfMyPicture.com"></MyModal>"
"<MyModal img={myPicture}></MyModal>"
-2- you can custom as well the closing modal button, there is a default css style but by adding another class you can customize it.
example => "<MyModal closeBtnSyle="myBtnStyle"></MyModal>"
and in a css file add your personal custom style => .closeBtnSyle{
background-color: blue;
}
-3- you can also add a lot of content via the children props :
example => "<MyModal>
<button>Ok</button>
<p>Lorem Ipsum .....</p>
</MyModal>"
-4- you can style the content you add into your modal:
example => "<MyModal styleContent="myModalContentClass">
<button>Ok</button>
<p>Lorem Ipsum .....</p>
</MyModal>"
add your style via the css as you did with the closeBtnSyle.
