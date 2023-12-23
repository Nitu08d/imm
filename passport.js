window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'rNwqGtSihtbkYjzVCL6nghSZBQNjCVCK',
    redirectUri: ' https://noble-quickly-cockatoo.ngrok-free.app',
    logoutRedirectUri: ' https://noble-quickly-cockatoo.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

