#jQuery Autocomplete Plugin 1.2.3#

##About this jQuery plugin##
Jörn Zaefferer’s (now deprecated into jQuery UI) [jQuery Autocomplete Plugin](http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/) with various modifications (see changelog).

##Documentation##
Introduction to the original plugin, and an explanation of original plugin options are included in the docs folder. (Documentation at the jQuery site is expected to shut down eventually.)

This modification shouldn’t break any of the options discussed at the these documentation files.

##Abridged Changelog##
####1.2.3 --MLA####
* Added launchManual() method which allows you to force the autocomplete
  to appear without user interaction

* Added refresh() method which reloads the autocomplete results

* Added afterItemSelect callback option which is called when an item
  is selected from the autocomplete results

####1.2.2 --AGA####
* Merged agmcleaod’s fork: Added failure to the options hash: `failure`

* Merged borkor’s fork: New option not to jump to first or last position: `scrollJumpPosition`

* Deleted silly console.debug() line left over from testing.

####1.2.1 --AGA####
* Added option to activate select list with one click instead of two. `clickFire` is false by default. (Requested/recommendation by fgosfacdjtq.)

* Added option to forgo input focus on item select. `inputFocus` is set to true by default, but setting it to false in the options will cancel this behavior.

* Circumvent browser JS bug when user clicked on results list scrollbar and then clicked outside of the list that caused the list to not hide.

* Changed hijacking of PAGEUP/PAGEDOWN keys to prevent default behavior only when selections list is visible. Helps text navigation inside input element.

####1.2 --AGA####
* Use recursive merging when extending setOptions. (Request/recommendation by smarques.)

####1.1.1 --AGA####
* Changed hijacking of UP/DOWN arrow keys to prevent default behavior only when selections list is visible. Helps text navigation inside input element.

_See_ changelog.txt _for pre-1.1.1 entries by original author._

##Licensing##
As with the original Plugin, this modification is dual licensed under the MIT and GPL licenses:
	http://www.opensource.org/licenses/mit-license.php
	http://www.gnu.org/licenses/gpl.html
