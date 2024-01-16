CKEditor 5 (obsolete)
=====================

Important note: CKEditor 5 module was moved into Backdrop core in version
1.27.0. Use of this module is no longer necessary and no further changes will be
made here. If you would like to report a bug or feature request against CKEditor
5 module, file an issue in the main Backdrop CMS core repository at
https://github.com/backdrop/backdrop-issues.

<hr>

This module integrates CKEditor 5 with Backdrop CMS, providing a modern rich
text editor. This module is being developed in contrib as a candidate to be
included in a future version of Backdrop core.

Intended to be a full replacement for the existing CKEditor module (which was
based on CKEditor 4), this module provides matching functionality, including:

* Support for Backdrop link and image dialogs (in progress)
* Uploading images through copy/paste.
* Uploading files through the link dialog.
* Drag and drop toolbar configuration.
* Automatic configuration of text format HTML tags based on toolbar.

Requirements
------------

CKEditor 5 does not support Internet Explorer. An up-to-date browser is
required. See
[CKEditor Browser Compatibility](https://ckeditor.com/docs/ckeditor5/latest/support/browser-compatibility.html).

Installation
------------
- Install this module using the official Backdrop CMS instructions at
  https://docs.backdropcms.org/documentation/extend-with-modules.

- Visit the Text Editors and Formats page under Administration > Configuration >
  Content authoring (admin/config/content/formats).
- Create or edit a format. Under the "Editor" dropdown, select "CKEditor 5".
- Drag and drop toolbar items to configure a toolbar for the editor.
- Additional configuration settings for file and image uploading, style and
  heading lists are in a vertical tab set below the toolbar.

Current Maintainers
-------------------
- [Nate Lampton](https://github.com/quicksketch)
- [Indigoxela](https://github.com/indigoxela)

Credits
-------
- Written for Backdrop CMS by [Nate Lampton](https://github.com/quicksketch).
- Most PHP code adapted from CKEditor (4) Backdrop CMS module.
- Image plugin adapted from Drupal 10 CKEditor 5 module.
- Link plugin adapted from [Drupal Advanced Editor Link 2.x](https://www.drupal.org/project/editor_advanced_link)


License
-------
This project is GPL v2 software.
See the LICENSE.txt file in this directory for complete text.
