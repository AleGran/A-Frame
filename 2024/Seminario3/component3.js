AFRAME.registerComponent('hello', {
    schema: {
        message: {type: 'string', default: 'Hello!'},
        message2: {type: 'string', default: 'Bye'}
      },

    init: function () {
        console.log(this.data.message);
        console.log(this.data.message2)
    }
  });

  AFRAME.registerComponent('goodbye', {
    schema: {
        message: {type: 'string', default: 'Goodbye!'}
      },

    init: function () {
        console.log(this.data.message);
    }
  });