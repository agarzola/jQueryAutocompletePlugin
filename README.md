#jQuery Autocomplete Plugin 1.2#

##About this jQuery plugin##
Jörn Zaefferer’s (now deprecated into jQuery UI) [jQuery Autocomplete Plugin](http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/), with a small modification to enable UP/DOWN arrow keys, allowing navigation of input element text. This is particularly useful in cases where autocomplete is used in a textarea element where navigation of text via UP/DOWN arrow keys may be necessary. The tiny fix is documented with comments in the relevant lines on the development file (jquery.autocomplete.js). The .min and .pack files have the fix without specific annotation within the code.

We use it in Claritty.com for when a user wants to write a twitter username or a previously used hashtag within a new tweet, so “@” and “#” are trigger the script. While not triggered, though, the plugin still hijacks the UP/DOWN arrow keys making navigation of the text a pain in the ass when the user has multiple lines. This modification prevents this behavior, hijacking the arrow keys only when the autocomplete script has been triggered.

The original plugin is now deprecated, but this mod works well with jQuery 1.3.2 thru 1.4.4.

##Documentation##
Introduction to the original plugin, and an explanation of original plugin options are included in the docs folder. (Documentation at the jQuery site is expected to shut down eventually.)

This modification shouldn’t break any of the options discussed at the these documentation files.

##Abridged Changelog##
####1.2 --AGA####
* Use recursive merging when extending setOptions. (Request/recommendation by smarques.)

####1.1.1 --AGA####
* Changed hijacking of UP/DOWN arrow keys to prevent default behavior only when selections list is visible. Helps text navigation inside input element.

_See_ changelog.txt _for pre-1.1.1 entries by original author._

##Licensing##
As with the original Plugin, this modification is dual licensed under the MIT and GPL licenses:
	http://www.opensource.org/licenses/mit-license.php
	http://www.gnu.org/licenses/gpl.html