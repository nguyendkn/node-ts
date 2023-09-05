export const Routes = [];

function routeBinder(method: string) {
  return function (route: string, path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Routes.push({
        method,
        path: "/" + route + "/" + path,
        handler: target[key],
        contructor: target.constructor,
      });
    };
  };
}

export const HttpGet = routeBinder("get");
export const HttpPost = routeBinder("post");
export const HttpPut = routeBinder("put");
export const HttpDelete = routeBinder("delete");
