// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export class EnvironmentHelper {

  readonly environment = {
    production: false,
    developer: true
  };

  readonly urlbase: string = this.environment.developer ? 'http://localhost:3001' : 'http://147.83.7.157:3001';
  // readonly urlbase: string = 'http://147.83.7.157:3001';
  private readonly userDictionary = {
    signup: '/user/signup',
    login: '/login',
    loginFb: '/auth/facebook/user',
    user: '/user',
    profile: '/user?id=',
    delete: '/user?id=',
    allergies: '/allergies',
    contact: '/contact',
    forgotPassword: '/resetPassword',
    resetPassword: '/resetPassword/new'
  };

  private readonly restaurantDictionary = {
    signup: '/restaurant/signup',
    login: '/restaurant/login',
    loginFb: '/auth/facebook',
    restaurant: '/restaurant',
    allRestaurants: '/restaurants',
    profile: '/restaurant?id=',
    ingredients: '/ingredient',
    delete: '/restaurant?id=',
    publicRestaurant: '/restaurant/public?id=',
    orders: '/orders',
    orderDetail: '/orders?id='
  };

  readonly urlDictionary = {
    user: this.userDictionary,
    restaurant: this.restaurantDictionary
  }
}
