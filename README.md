<h1 align="center">How to use react-modal-ts :</h1>

<p align="left">1- npm i @martidev/react-modal-ts</p>
<p align="left">-2- import it where you want to display it </p>
```javascript

import { MyModal } from '@martidev/react-modal-ts';

```


<p align="left">-3- create open variable</p>
```typescript
 const [open, setOpen] = useState<boolean>(false);
```
<!-- <img align="center" width="400" src="/src/img/Open.png" alt="variable"> -->
<p align="left">-4- create hideModal function</p>
<!-- <img align="center" width="400" src="/src/img/hideModal.png" alt="function"> -->
```javascript
        hideModal={() => setOpen(false)}
```
<h2 align="center">Then you can custom it :</h2>
<p align="left">-1- you can custom the img by passing directly the address of the picture or importing one</p>
```javascript
   img="https://myPictureAddress"
```
   
<!-- <img align="center" width="400" src="/src/img/img.png" alt="img"> -->
<p align="left">-2- you can custom as well the closing modal button, there is a default css style but by adding another class you can customize it.</p>
```jsx
   closeBtnStyle="coloris"
```
<!-- <img align="center" width="400" src="/src/img/btnStyle.png" alt="btn style"> -->
<p>and in a css file add your personal custom style =></p>
```css
  .coloris {
  background-color: #1F2243;
  color: white;
}
```
<!-- <img align="center" width="400" src="/src/img/coloris.png" alt="btn css"> -->
<p align="left">-3- you can also add a lot of content via the children props :</p>
<p align="left">you can add button or p, just put your code between the modal bracket.</p>
```jsx
        <button type="button" onClick={() => setOpen(false)}>
          ok
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          omnis blanditiis veniam veritatis ullam officiis accusantium deserunt
          in repellat autem excepturi quidem temporibus magnam reiciendis est
          accusamus, adipisci provident quasi.
        </p>
```
<!-- <img align="center" width="400" src="/src/img/content.png" alt="content"> -->
<p align="left">-4- you can style the content you add into your modal:</p>
```css
  .content {
  text-align: center;
  padding: 15px;
}
```
<!-- <img align="center" width="400" src="/src/img/contentStyle.png" alt="content style"> -->
<p>add your style via the css as you did with the closeBtnSyle.</p>
