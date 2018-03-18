import Helpers from './helpers.js'
import hello from 'hellojs'
require('bulma')
import config from './config.js'

const helpers = new Helpers()

const test = helpers.goodbye()

// console.log(config.client_id)
// console.log(Helpers.test())
// console.log('hellojs '+ Hellojs)

hello.init({
  github: config.client_id
}, {
  redirect_uri: config.redirect_uri
})

const github = hello('github')

// console.log("github", github)


const login = () => {
  github.login().then(function(event) {
    console.log('event', event)
  }, function(error) {
    console.log("no nie dziala")
  })
}

const githubAuthLink = document.querySelector('#GitHub-login')
githubAuthLink.addEventListener('click', (event) => {
  event.preventDefault()
  login()
})


// sciagniete z https://adodson.com/hello.js/#quick-start
// wrzuca username na strone
hello.on('auth.login', function(auth) {

	// Call user information, for the given network
	hello(auth.network).api('me').then(function(r) {
		// Inject it into the container
		var label = document.getElementById('user-panel');
		if (!label) {
			label = document.createElement('div');
			label.id = 'profile_' + auth.network;
			document.getElementById('profile').appendChild(label);
		}
		label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
	});
});
