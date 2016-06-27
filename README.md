# px-layout [![Build Status](https://travis-ci.org/PredixDev/px-layout.svg?branch=master)](https://travis-ci.org/PredixDev/px-layout)

Includes pre-defined layout wrapper components that enable you to create responsive Industrial Internet applications. 



```
$ bower install --save px-layout
```



## Overview

The markup structure of an application can become very messy and deeply nested. So we have identified the essential elements that are needed to create responsive Industrial Internet applications.

### Bundled layouts

* [px-drawer-layout](http://predixdev.github.io/px-layout/bower_components/px-layout/px-drawer-layout/demo.html)
* [px-header-layout](http://predixdev.github.io/px-layout/bower_components/px-layout/px-header-layout/demo.html)


### Bundled Elements

* [px-button](https://github.com/PredixDev/px-partials)
* [px-brand](https://github.com/PredixDev/px-partials)
* [px-header](https://github.com/PredixDev/px-partials)
* [px-footer](https://github.com/PredixDev/px-partials)
* [px-icon](https://github.com/PredixDev/px-partials)
* [px-title-bar](https://github.com/PredixDev/px-partials)

### Bundled Components

* [px-navbar](https://github.com/PredixDev/px-navbar)
* [px-drawer](https://github.com/PredixDev/px-drawer)


## Quick Start
The following is the layout structure that your page should follow.


```
  <!DOCTYPE html>
  <html lang="en">
  	<head>

    	<!-- Required meta tags always come first -->
		<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<meta name="apple-mobile-web-app-capable" content="yes">

		<title>My App</title>

		<!-- Dependencies -->
		<script src="../webcomponentsjs/webcomponents.min.js"></script>

		<!-- Theme -->
		<link rel="import" href="../px-theme/px-app.html">
		<link rel="import" href="../px-theme/px-theme.html">

		<!-- Layout + Partials -->
		<link rel="import" href="../px-layout/px-layout.html">

		<!-- Components -->
		<link rel="import" href="../px-card/px-card.html">
		<link rel="import" href="../px-table-view/px-table-view.html">
		<!-- ... -->

  	</head>
  	<body>
  		<px-drawer-layout>
	      <px-drawer>
	      	Look im inside a drawer!
	      </px-drawer>
			<px-navbar title="Example Layout">
				<button drawer-toggle right>Toggle Drawer</button>
			</px-navbar>
			<div class="flex">
				<px-card>
				Look im a card!
				</px-card>
			</div>
		</px-drawer-layout>
  	</body>
  </html>
```
