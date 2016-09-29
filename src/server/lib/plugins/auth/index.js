const routes = require('./routes');
const validators = require('./validators');

//https://www.grc.com/passwords.htm

exports.register = function (server, options, next) {

  //Add Multiple strategies here and we have used confidence to pick up the configuration.
  server.auth.strategy('facebook', 'bell',
    {
      provider: 'facebook',
      password: process.env.PASSWORD_FACEBOOK || 'B182393C267BB36131E0A1B90252573677C72D42D25E770701DBC077228DDF3A',
      clientId: '203280530023571',
      clientSecret: process.env.SECRET_FACEBOOK,
      isSecure: true,
      location: 'https://www.juui.org',
      forceHttps: true
    }
  );

  server.auth.strategy('google', 'bell',
    {
      provider: 'google',
      password: process.env.PASSWORD_GOOGLE || 'B182393C267BB36131E0A1B90252573677C72D42D25E770701DBC077228DDF3A',
      clientId: '795777413258-5aal4m6ndu98huaoo2gn82q0hu62va7q.apps.googleusercontent.com',
      clientSecret: process.env.SECRET_GOOGLE,
      isSecure: true,
      location: 'https://www.juui.org',
      forceHttps: true
    }
  );

  server.auth.strategy('twitter', 'bell',
    {
      provider: 'twitter',
      password: process.env.PASSWORD_TWITTER || 'B182393C267BB36131E0A1B90252573677C72D42D25E770701DBC077228DDF3A',
      clientId: 'J6tHMW2itoxqALJMJmzLhElsV',
      clientSecret: process.env.SECRET_TWITTER,
      isSecure: true,
      location: 'https://www.juui.org',
      forceHttps: true
    }
  );

  server.auth.strategy('session', 'cookie', {
    password: process.env.SECRET_COOKIES || 'B182393C267BB36131E0A1B90252573677C72D42D25E770701DBC077228DDF3A',
    cookie: 'sid-juui',
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
