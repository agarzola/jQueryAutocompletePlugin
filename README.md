#jQuery Autocomplete Plugin 1.1.1#

##About this jQuery plugin##
Jörn Zaefferer’s (now deprecated into jQuery UI) [jQuery Autocomplete Plugin](http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/), with a small modification to enable UP/DOWN arrow keys, allowing navigation of input element text. This is particularly useful in cases where autocomplete is used in a textarea element where navigation of text via UP/DOWN arrow keys may be necessary. The tiny fix is documented with comments in the relevant lines on the development file (jquery.autocomplete.js). The .min and .pack files have the fix without specific annotation within the code.

We use it in Claritty.com for when a user wants to write a twitter username or a previously used hashtag within a new tweet, so “@” and “#” are trigger the script. While not triggered, though, the plugin still hijacks the UP/DOWN arrow keys making navigation of the text a pain in the ass when the user has multiple lines. This modification prevents this behavior, hijacking the arrow keys only when the autocomplete script has been triggered.

The original plugin is now deprecated, but it —and this mod— works well (at least up to jQuery 1.4.3).

##Documentation##
Introduction to the original plugin, and an explanation of original plugin options are included in the docs folder. (Documentation at the jQuery site is expected to shut down eventually.)

This modification shouldn’t break any of the options discussed at the these documentation files.

##Licensing##
As with the original Plugin, this modification is dual licensed under the MIT and GPL licenses:
	http://www.opensource.org/licenses/mit-license.php
	http://www.gnu.org/licenses/gpl.html