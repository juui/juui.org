const routes = require('./routes');
const validators = require('./validators');

//https://www.grc.com/passwords.htm

exports.register = function (server, options, next) {

  //Add Multiple strategies here and we have used confidence to pick up the configuration.
  server.auth.strategy('facebook', 'bell',
    {
      provider: 'facebook',
      password: process.env.SECRET_FACEBOOK || 'facebook',
      clientId: '203280530023571', // fill in your FB ClientId here
      clientSecret: '238b5c7b374c2537081c0cd301b24548', // fill in your FB Client Secret here
      isSecure: true, // Terrible idea but required if not using HTTPS
      location: 'https://www.juui.org',
      forceHttps: true
    }
  );

  server.auth.strategy('google', 'bell',
    {
      provider: 'google',
      password: process.env.SECRET_GOOGLE || 'google',
      clientId: '795777413258-5aal4m6ndu98huaoo2gn82q0hu62va7q.apps.googleusercontent.com', // fill in your Google ClientId here
      clientSecret: 'bTmKsc5PbVaUbN2AYOzz1yJi', // fill in your Google Client Secret here
      isSecure: true, // Terrible idea but required if not using HTTPS,
      location: 'https://www.juui.org',
      forceHttps: true
    }
  );

  server.auth.strategy('twitter', 'bell',
    {
      provider: 'twitter',
      password: process.env.SECRET_TWITTER || 'twitter',
      clientId: 'z7CzhqNUaMlw96UrNYH0ARqLO',
      clientSecret: 'q8QoEfj2HIdrDrUskUJV1Hw4FvpP7UObuoOhLLvEBwY3HxzFeO',
      isSecure: true,
      location: 'https://www.juui.org',
      forceHttps: true
    }
  );

  server.auth.strategy('session', 'cookie', {
    password: process.env.SECRET_COOKIES || 'cookie', // give any string you think is right password to encrypted
    cookie: 'sid-juui', // cookie name to use, usually sid-<appname>
    redirectTo: '/',
    isSecure: true,
    validateFunc: validators.validateClientCookies
  });

  server.route(routes);
  next();
};

exports.register.attributes = {
  name: 'auth',
  version: '1.0.0'
};
