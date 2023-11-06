// import {FormatAspect, ValidateAspect} from './Aspect'
// import Service from './Service'


// const service = new Service()
// console.log(service.getArticle({id: '1'}))
// console.log(service.getUser({id: 2, name: 'Hello Kitty'}))

// function Hello() {
//   // console.log('Hello');
//   return function () {
//     console.log('Hello');
//   };
// }

// class World {
//   @Hello
//   World() {
//     console.log('World');
//   }
// }

// const WorldInstance = new World();
// WorldInstance.World();

const { afterMethod, beforeMethod } = require('aspect.js');
const { Advised } = require('aspect.js');

class ValidateAspect {
  @beforeMethod({
    classNamePattern: /.*/,
    methodNamePattern: /^(get)/
  })
  validateId(meta) {
    console.log(`validateId before ${meta.className}.${meta.method.name}`);
  }
}

@Advised()
class Service {
  getUser({ id, name }) {
    console.log('getUser');
  }

  getArticle({ id }) {
    console.log('getArticle');
  }
}

const service = new Service();
service.getArticle({ id: '1' });


// "babel-cli": "^6.26.0",
// "babel-plugin-transform-decorators-legacy": "^1.3.5",
// "babel-polyfill": "^6.26.0",
// "babel-preset-env": "^1.7.0",
// "babel-register": "^6.26.0"
