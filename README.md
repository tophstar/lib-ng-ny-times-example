lib-ng-ny-times-example

====================

Visit : http://tophstar.com for a live demo.

## Quick start

lib-ng-ny-times-example is a library that displays storys queried from .  After building your NY TIMES Example library you will need to add the following code to you HTML page.

```
<!-- Add in jquery dependecy -->
<script src="pathto/jquery.min.js"></script>
<!-- Add in angular dependecy -->
<script src="pathto/angular.min.js"></script>
<!-- Add in terminal harness to construct the terminal.  An example can be found in the utility folder.-->
<script src="scripts/require.js" data-main="pathto/example-harness"></script>

<!-- Add in terminal style sheet -->
<link rel="stylesheet" type="text/css" href="pathto/ny_times.css">

<div id="new-york-times-element"></div>
```

### Building

In your terminal:

git clone https://github.com/tophstar/lib-ng-ny-times-example.git\n
npm install\n
grunt\n

### Dependencies

angular\n
jQuery\n
terminal-harness