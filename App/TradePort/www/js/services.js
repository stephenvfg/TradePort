angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

    .factory('Camera', function($q, $http) {
      // "data:image/jpeg;base64,"+
      var dataURItoBlob = function(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++)
        {
          ia[i] = byteString.charCodeAt(i);
        }

        var bb = new Blob([ab], { "type": mimeString });
        return bb;
      };


      return {
        getPicture: function(options) {
          var q = $q.defer();

          navigator.camera.getPicture(function(result) {

            var options = new FileUploadOptions();
            options.fileKey = "post";
            options.chunkedMode = false;
            //var params = {};
            //params.user_token = localStorage.getItem('auth_token');
            //params.user_email = localStorage.getItem('email');
            //options.params = params;

            var ft = new FileTransfer();
            ft.upload(result, encodeURI(host + '/photo'), function () {
              q.resolve(result);
            }, function (err) {
              q.reject(err);
            }, options);
          }, function(err) {
            q.reject(err);
          }, options);

          return q.promise;

          //navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
          //  destinationType: Camera.DestinationType.DATA_URL
          //});
          //
          //function onSuccess(imageData) {
          //  var image = document.getElementById('myImage');
          //  image.src = "data:image/jpeg;base64," + imageData;
          //}
          //
          //function onFail(message) {
          //  alert('Failed because: ' + message);
          //}
        }
      }
    })
    .factory('Product', function () {
      return {
        all: function (page, limit) {
          page = page || 0;
          limit = limit || 10;

          return [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6}
          ]
        },

        get: function (id) {
          return {
            id: 1
          };
        }
      }
    })
;
