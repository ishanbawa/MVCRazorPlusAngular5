"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
function fakeBackendFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // Fake Request For Getting Html For Angular Page From Within Already Loaded Page By Razor
            if (connection.request.url.startsWith('/HtmlFetch')) {
                // get parameters from post request
                var params = JSON.parse(connection.request.getBody());
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    status: 200,
                    body: params.Html
                })));
                return;
            }
            //// authenticate
            //if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
            //    // get parameters from post request
            //    let params = JSON.parse(connection.request.getBody());
            //    // find if any user matches login credentials
            //    let filteredUsers = users.filter(user => {
            //        return user.username === params.username && user.password === params.password;
            //    });
            //    if (filteredUsers.length) {
            //        // if login details are valid return 200 OK with user details and fake jwt token
            //        let user = filteredUsers[0];
            //        connection.mockRespond(new Response(new ResponseOptions({
            //            status: 200,
            //            body: {
            //                id: user.id,
            //                username: user.username,
            //                firstName: user.firstName,
            //                lastName: user.lastName,
            //                token: 'fake-jwt-token'
            //            }
            //        })));
            //    } else {
            //        // else return 400 bad request
            //        connection.mockError(new Error('Username or password is incorrect'));
            //    }
            //    return;
            //}
            //// get users
            //if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
            //    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
            //    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //        connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
            //    } else {
            //        // return 401 not authorised if token is null or invalid
            //        connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
            //    }
            //    return;
            //}
            // pass through any requests not handled above
            var realHttp = new http_1.Http(realBackend, options);
            var requestOptions = new http_1.RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new http_1.Http(backend, options);
}
exports.fakeBackendFactory = fakeBackendFactory;
;
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: fakeBackendFactory,
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions, http_1.XHRBackend]
};
//# sourceMappingURL=fakeajax.service.js.map