# translation app angular2

mini translation app made with angular2. The goal was to see how to use
the router and http service with Angular2

This app needs a key api to https://cxc-languagecloud.sdl.com/#app=languagecloud&entry=home
and fill the file src/api.json with a file like:

    {
	     "api_key": "<your_secret_key>"
    }


Then

    npm install -g angular-cli
    ng serve
