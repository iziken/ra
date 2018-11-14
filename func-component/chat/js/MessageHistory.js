'use strict';

function MessageHistory( {list} ) {
  if (list.length === 0 || !(list instanceof Array)) {
    return false;
  }

  let history = list.map( (message, index) => {
    switch (message.type) {
      case 'message':
        return <Message from = {message.from} message = {message} key = {message.id} />
        break;
      case 'response':
        return <Response from = {message.from} message = {message} key = {message.id} />
        break;
      case 'typing':
        return <Typing from = {message.from} message = {message} key = {message.id} />
        break;
    }

  });
  return <ul>{history}</ul>;
}
