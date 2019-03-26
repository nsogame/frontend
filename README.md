frontend
========

[![Build Status](https://ci.iptq.io/api/badges/nso/frontend/status.svg)](https://ci.iptq.io/nso/frontend)

This is the frontend of the website. Since it's a single-page app, it can be compiled and served statically. The stack looks like this:

- **Bulma** for styles
- **Vue + Vuex + friends** for the app framework
- compiled with **Parcel**, a zero-config bundler
- served with **Nginx** statically

Building the Project
--------------------

Step 1: Install dependencies with yarn.

```
$ yarn
```

Step 2: Build / watch / serve with parcel.

```
$ parcel serve index.html    # run a local server
$ parcel watch index.html    # watch for changes
$ parcel build index.html    # build for production
```

Contact
-------

Author: Michael Zhang

License: MIT
