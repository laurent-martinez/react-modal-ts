<h1>How to use react-modal-ts:</h1>

<p>-1- npm i @martidev/react-modal-ts</p>
-2- import it where you want to display it

```javascript
import { MyModal } from '@martidev/react-modal-ts';
```

-3- create open variable

```typescript
const [open, setOpen] = useState<boolean>(false);
```

-4- create hideModal function

```javascript
        hideModal={async() => setOpen(false)}
```

<h2>Then you can custom it:</h2>
-1- you can custom the img by passing directly the address of the picture or importing one

```javascript
img = 'https://myPictureAddress';
```

-2- you can custom as well the closing modal button, there is a default css style but by adding another class you can customize it.

```jsx
closeBtnStyle = 'coloris';
```

and in a css file add your personal custom style

```css
.coloris {
  background-color: #1f2243;
  color: white;
}
```

-3- you can also add a lot of content via the children props :

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

-4- you can style the content you add into your modal:

```css
.content {
  text-align: center;
  padding: 15px;
}
```

add your style via the css as you did with the closeBtnSyle.
