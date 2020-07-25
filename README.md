# Creating forms with react-hook-form


### Makes the Application run
```javascript
// using app based on react-app boilerplate
// adding react-hook-form package
npx create-react-app react-hook-form
cd react-hook-form
// using yarn
npm install -g yarn
// we are going to need rbx: https://dfee.github.io/rbx
yarn add rbx
// start yarn
yarn start
// open browser to
open http://localhost:3000/
// open IDE
code .
```


```javascript
// import hooks
import { useForm, ErrorMessage } from "react-hook-form";
```


#### Refs and the DOM
We are going to register our uncontrolled component into the hook, using ref prop.

> Using react-hook-form we have control of the uncontrolled and controlled components, which can provide a better performance.


### Further information:
RBX UI lib: https://dfee.github.io/rbx/elements/title


---
### <i>Thanks!</i>

>  { 'Leo Lanese',<br>
     'Building Inspiring Responsive Reactive Solutions',<br>
     'London, UK' }<br>

##### Twitter <a href="https://twitter.com/LeoLaneseltd" target="_blank">@LeoLaneseltd</a>
##### Portfolio <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### DEV.to <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### Questions / Suggestion / Recommendation: developer@leolanese.com

